import { useState, useRef, useEffect } from 'react'
import { Mic, Square, Upload, Copy, Check, Trash2, Download, ShieldCheck, Loader2, Users, MessageCircleWarning, Scissors } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type Phase = 'idle' | 'recording' | 'loading' | 'transcribing' | 'done'

type Chunk = { timestamp: [number, number]; text: string }

// whisper-tiny used to be the default "fast" tier here but its output quality
// is too unreliable to ship — on anything but very clean audio it doesn't
// just make transcription errors, it hallucinates fluent-sounding sentences
// that were never said (and can't reliably guess the language either). Base
// is now the floor; small is offered as an explicit, better-quality option
// for recordings that need it.
const MODELS = {
  standard: 'Xenova/whisper-base',
  large: 'Xenova/whisper-small',
} as const

// Whisper wants full English language names (or undefined = auto-detect).
const LANGUAGES: { code: string; name: string; label: string }[] = [
  { code: '', name: '', label: 'Auto' },
  { code: 'sv', name: 'swedish', label: 'Svenska' },
  { code: 'en', name: 'english', label: 'English' },
  { code: 'es', name: 'spanish', label: 'Español' },
  { code: 'fr', name: 'french', label: 'Français' },
  { code: 'de', name: 'german', label: 'Deutsch' },
  { code: 'pt', name: 'portuguese', label: 'Português' },
  { code: 'no', name: 'norwegian', label: 'Norsk' },
  { code: 'da', name: 'danish', label: 'Dansk' },
  { code: 'fi', name: 'finnish', label: 'Suomi' },
]

// Decode any browser-supported audio blob into 16 kHz mono Float32 — what Whisper expects.
async function toMono16k(data: ArrayBuffer): Promise<Float32Array> {
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
  const ctx = new AC()
  const decoded = await ctx.decodeAudioData(data)
  ctx.close()
  const rate = 16000
  const offline = new OfflineAudioContext(1, Math.ceil(decoded.duration * rate), rate)
  const src = offline.createBufferSource()
  src.buffer = decoded
  src.connect(offline.destination)
  src.start()
  const rendered = await offline.startRendering()
  return rendered.getChannelData(0)
}

// Long silent stretches — padding at the start/end of a recording, or long
// gaps mid-meeting where a mic-only recording of a digital call hears
// nothing — are the single biggest cause of Whisper both misdetecting the
// language and hallucinating unrelated text: the less real signal it has in
// its analysis window, the less it has to go on. This is a cheap energy-based
// voice-activity pass: it drops leading/trailing silence entirely and caps
// interior gaps at a few seconds, without touching pauses inside real speech.
const VAD_FRAME_MS = 20
const VAD_PAD_FRAMES = 15 // ~300ms kept around every detected speech run, so soft onsets/offsets aren't clipped
const VAD_MAX_GAP_FRAMES = 150 // cap any silent gap between speech runs at ~3s
function trimSilence(samples: Float32Array, sampleRate = 16000): { audio: Float32Array; trimmed: boolean } {
  const frameLen = Math.round((sampleRate * VAD_FRAME_MS) / 1000)
  const frameCount = Math.floor(samples.length / frameLen)
  if (frameCount < 10) return { audio: samples, trimmed: false }

  const rms = new Array<number>(frameCount)
  for (let i = 0; i < frameCount; i++) {
    let sum = 0
    const start = i * frameLen
    for (let j = 0; j < frameLen; j++) {
      const v = samples[start + j]
      sum += v * v
    }
    rms[i] = Math.sqrt(sum / frameLen)
  }

  // Adaptive threshold: the 15th percentile of frame energy approximates the
  // ambient noise floor for this specific recording (mic, room, codec all
  // vary), so a fixed absolute threshold would misfire across devices.
  const sorted = [...rms].sort((a, b) => a - b)
  const noiseFloor = sorted[Math.floor(sorted.length * 0.15)]
  const threshold = Math.max(noiseFloor * 3, 0.004)

  const padded = new Array<boolean>(frameCount).fill(false)
  for (let i = 0; i < frameCount; i++) {
    if (rms[i] <= threshold) continue
    for (let j = Math.max(0, i - VAD_PAD_FRAMES); j <= Math.min(frameCount - 1, i + VAD_PAD_FRAMES); j++) {
      padded[j] = true
    }
  }

  const segments: [number, number][] = []
  let runStart = -1
  for (let i = 0; i < frameCount; i++) {
    if (padded[i] && runStart === -1) runStart = i
    if (!padded[i] && runStart !== -1) {
      segments.push([runStart, i])
      runStart = -1
    }
  }
  if (runStart !== -1) segments.push([runStart, frameCount])
  // Nothing read as speech (e.g. hold music, pure silence) — leave the audio
  // untouched rather than risk feeding Whisper an empty or mangled clip.
  if (segments.length === 0) return { audio: samples, trimmed: false }

  const parts: Float32Array[] = []
  for (let s = 0; s < segments.length; s++) {
    const [segStart, segEnd] = segments[s]
    parts.push(samples.subarray(segStart * frameLen, segEnd * frameLen))
    if (s < segments.length - 1) {
      const gapStart = segEnd
      const gapEnd = segments[s + 1][0]
      const keep = Math.min(gapEnd - gapStart, VAD_MAX_GAP_FRAMES)
      if (keep > 0) parts.push(samples.subarray(gapStart * frameLen, (gapStart + keep) * frameLen))
    }
  }

  const totalLen = parts.reduce((n, p) => n + p.length, 0)
  // Not worth the added risk for a negligible trim.
  if (samples.length - totalLen < sampleRate * 2) return { audio: samples, trimmed: false }

  const out = new Float32Array(totalLen)
  let offset = 0
  for (const p of parts) {
    out.set(p, offset)
    offset += p.length
  }
  return { audio: out, trimmed: true }
}

function fmtTime(sec: number): string {
  const s = Math.max(0, sec)
  const m = Math.floor(s / 60)
  const r = Math.floor(s % 60)
  return `${m}:${r.toString().padStart(2, '0')}`
}

function srtTime(sec: number): string {
  const s = Math.max(0, sec)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const r = Math.floor(s % 60)
  const ms = Math.round((s - Math.floor(s)) * 1000)
  const p = (n: number, l = 2) => n.toString().padStart(l, '0')
  return `${p(h)}:${p(m)}:${p(r)},${p(ms, 3)}`
}

function chunksToSrt(chunks: Chunk[]): string {
  return chunks
    .filter((c) => c.text.trim())
    .map((c, i) => {
      const [start, end] = c.timestamp
      return `${i + 1}\n${srtTime(start)} --> ${srtTime(end ?? start + 2)}\n${c.text.trim()}\n`
    })
    .join('\n')
}

function download(name: string, text: string) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = name
  a.click()
  URL.revokeObjectURL(url)
}

type QueueFile = { blob: Blob; name: string }
type WorkerResult = { text: string; chunks: Chunk[]; cleaned: boolean }

export default function MeetingTranscriber() {
  const { t, language } = useLanguage()
  const translation = t.tools['motestranskribering']
  const mt = t.meetingTranscriber

  const [phase, setPhase] = useState<Phase>('idle')
  const [model, setModel] = useState<'standard' | 'large'>('standard')
  // Default to the site's own language rather than "auto-detect" — auto only
  // samples a short stretch of audio once at the start, and getting that
  // guess wrong (easy to do on quiet/noisy audio) sends the whole transcript
  // off in the wrong language. Still fully overridable below.
  const [lang, setLang] = useState<string>(language)
  const [downloadPct, setDownloadPct] = useState<number | null>(null)
  const [transcript, setTranscript] = useState('')
  const [chunks, setChunks] = useState<Chunk[]>([])
  const [recSeconds, setRecSeconds] = useState(0)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [cleaned, setCleaned] = useState(false)
  const [trimmed, setTrimmed] = useState(false)
  const [queueIndex, setQueueIndex] = useState(0)
  const [queueTotal, setQueueTotal] = useState(0)
  const [currentFileName, setCurrentFileName] = useState('')

  const workerRef = useRef<Worker | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<number | null>(null)
  const pendingRef = useRef<{ resolve: (r: WorkerResult) => void; reject: (e: Error) => void } | null>(null)

  useEffect(() => {
    return () => {
      workerRef.current?.terminate()
      streamRef.current?.getTracks().forEach((tr) => tr.stop())
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [])

  function getWorker(): Worker {
    if (!workerRef.current) {
      workerRef.current = new Worker(new URL('../../workers/whisper.worker.ts', import.meta.url), { type: 'module' })
      workerRef.current.onmessage = (e: MessageEvent) => {
        const msg = e.data
        if (msg.type === 'progress' && msg.data?.status === 'progress' && typeof msg.data.progress === 'number') {
          setPhase('loading')
          setDownloadPct(msg.data.progress)
        } else if (msg.type === 'status' && msg.status === 'transcribing') {
          setPhase('transcribing')
          setDownloadPct(null)
        } else if (msg.type === 'result') {
          pendingRef.current?.resolve({ text: msg.text, chunks: msg.chunks, cleaned: Boolean(msg.cleaned) })
          pendingRef.current = null
        } else if (msg.type === 'error') {
          pendingRef.current?.reject(new Error(msg.message || 'error'))
          pendingRef.current = null
        }
      }
    }
    return workerRef.current
  }

  // One request/response round-trip with the worker. Requests are always
  // made one at a time (the batch queue below awaits each before starting
  // the next), so there's never more than one pending promise to resolve.
  function runOnWorker(audio: Float32Array, modelId: string, lang: string | undefined): Promise<WorkerResult> {
    return new Promise((resolve, reject) => {
      pendingRef.current = { resolve, reject }
      getWorker().postMessage({ type: 'transcribe', audio, model: modelId, language: lang })
    })
  }

  async function transcribeQueue(files: QueueFile[]) {
    setError('')
    setTranscript('')
    setChunks([])
    setCleaned(false)
    setTrimmed(false)
    setPhase('loading')
    setDownloadPct(null)
    setQueueTotal(files.length)

    const selected = LANGUAGES.find((l) => l.code === lang)
    let timeOffset = 0
    let combinedText = ''
    let combinedChunks: Chunk[] = []
    let anyCleaned = false
    let anyTrimmed = false
    const failed: string[] = []

    for (let i = 0; i < files.length; i++) {
      setQueueIndex(i + 1)
      setCurrentFileName(files[i].name)
      try {
        const raw = await toMono16k(await files[i].blob.arrayBuffer())
        const { audio, trimmed: wasTrimmed } = trimSilence(raw)
        if (wasTrimmed) anyTrimmed = true
        const result = await runOnWorker(audio, MODELS[model], selected?.name || undefined)
        if (result.cleaned) anyCleaned = true
        const header = files.length > 1 ? `— ${files[i].name} —\n` : ''
        combinedText += (combinedText ? '\n\n' : '') + header + result.text
        const durationSec = audio.length / 16000
        combinedChunks = combinedChunks.concat(
          result.chunks.map((c) => ({
            ...c,
            timestamp: [c.timestamp[0] + timeOffset, (c.timestamp[1] ?? c.timestamp[0]) + timeOffset] as [number, number],
          }))
        )
        timeOffset += durationSec
        setTranscript(combinedText)
        setChunks(combinedChunks)
      } catch {
        failed.push(files[i].name)
      }
    }

    setCleaned(anyCleaned)
    setTrimmed(anyTrimmed)
    setPhase(combinedText ? 'done' : 'idle')
    if (failed.length) {
      const base = mt?.error ?? 'Något gick fel. Prova igen eller välj en mindre modell.'
      setError(files.length > 1 ? `${base} (${failed.join(', ')})` : base)
    }
  }

  async function startRecording() {
    setError('')
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      audioChunksRef.current = []
      const recorder = new MediaRecorder(stream)
      recorder.ondataavailable = (e) => { if (e.data.size > 0) audioChunksRef.current.push(e.data) }
      recorder.onstop = () => {
        stream.getTracks().forEach((tr) => tr.stop())
        const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || 'audio/webm' })
        transcribeQueue([{ blob, name: mt?.recordingName ?? 'Inspelning' }])
      }
      recorder.start()
      recorderRef.current = recorder
      setRecSeconds(0)
      setPhase('recording')
      timerRef.current = window.setInterval(() => setRecSeconds((s) => s + 1), 1000)
    } catch {
      setError(mt?.micDenied ?? 'Kunde inte komma åt mikrofonen. Ge webbläsaren tillåtelse och försök igen.')
      setPhase('idle')
    }
  }

  function stopRecording() {
    if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null }
    recorderRef.current?.stop()
  }

  function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (files.length) transcribeQueue(files.map((f) => ({ blob: f, name: f.name })))
    e.target.value = ''
  }

  async function copyText() {
    if (!transcript) return
    await navigator.clipboard.writeText(transcript)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function reset() {
    setTranscript('')
    setChunks([])
    setCleaned(false)
    setTrimmed(false)
    setError('')
    setPhase('idle')
    setQueueIndex(0)
    setQueueTotal(0)
  }

  const busy = phase === 'loading' || phase === 'transcribing'

  return (
    <div className="mx-auto max-w-2xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Local-first reassurance (the opposite of an external-call warning). */}
      <div className="flex items-start gap-2.5 rounded-xl border border-green-300 dark:border-green-800/60 hc:border-white bg-green-50 dark:bg-green-900/20 hc:bg-black p-4 text-sm text-green-800 dark:text-green-200 hc:text-white">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
        <div>
          <p className="font-medium">{mt?.localTitle ?? 'Allt sker på din enhet'}</p>
          <p className="mt-1 text-green-700 dark:text-green-300 hc:text-gray-200">
            {mt?.localBody ?? 'Ljudet lämnar aldrig din enhet. Första gången laddas en språkmodell ner (ca 40–150 MB beroende på val) och sparas i webbläsaren — sen fungerar transkriberingen även utan internet.'}
          </p>
        </div>
      </div>

      {/* Recording captures the device microphone only — walks through which
          of the three usage scenarios that suits, before the settings/buttons. */}
      <div className="flex items-start gap-2.5 rounded-xl border border-blue-300 dark:border-blue-800/60 hc:border-white bg-blue-50 dark:bg-blue-900/20 hc:bg-black p-4 text-sm text-blue-800 dark:text-blue-200 hc:text-white">
        <Users className="mt-0.5 h-5 w-5 shrink-0" />
        <div className="space-y-2.5">
          <p className="font-medium">{mt?.scenariosTitle ?? 'Tre sätt att spela in'}</p>
          <div>
            <p className="font-medium">{mt?.scenarioRoomLabel ?? 'Alla i samma rum (bäst)'}</p>
            <p className="text-blue-700 dark:text-blue-300 hc:text-gray-200">
              {mt?.scenarioRoomText ?? 'Klicka på "Nytt möte" nedan — enhetens mikrofon hör alla som pratar i rummet.'}
            </p>
          </div>
          <div>
            <p className="font-medium">{mt?.scenarioDigitalLabel ?? 'Digitalt möte (Teams, Zoom m.fl.)'}</p>
            <p className="text-blue-700 dark:text-blue-300 hc:text-gray-200">
              {mt?.scenarioDigitalText ?? 'Mikrofonen hör bara dig, inte de andra deltagarna. Spela in mötet i mötestjänsten istället och ladda upp filen här efteråt.'}
            </p>
          </div>
          <div>
            <p className="font-medium">{mt?.scenarioUploadLabel ?? 'Redan inspelat, t.ex. i telefonen'}</p>
            <p className="text-blue-700 dark:text-blue-300 hc:text-gray-200">
              {mt?.scenarioUploadText ?? 'Ladda upp ljudfilen direkt — funkar lika bra som att spela in här.'}
            </p>
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">{mt?.modelLabel ?? 'Kvalitet'}</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as 'standard' | 'large')}
            disabled={busy || phase === 'recording'}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white disabled:opacity-50"
          >
            <option value="standard">{mt?.modelStandard ?? 'Standard — bra balans mellan snabbhet och kvalitet'}</option>
            <option value="large">{mt?.modelLarge ?? 'Stor — bäst kvalitet, större nedladdning och långsammare'}</option>
          </select>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">{mt?.languageLabel ?? 'Språk'}</label>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            disabled={busy || phase === 'recording'}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white disabled:opacity-50"
          >
            {LANGUAGES.map((l) => (
              <option key={l.code || 'auto'} value={l.code}>{l.code === '' ? (mt?.languageAuto ?? 'Upptäck automatiskt') : l.label}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
        {mt?.qualityHint ?? 'Längre eller otydliga inspelningar: välj Stor och ange språket direkt istället för Upptäck automatiskt — mycket säkrare på både språk och innehåll.'}
      </p>

      {phase !== 'recording' && (
        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
          <MessageCircleWarning className="h-3.5 w-3.5 shrink-0" />
          {mt?.consentReminder ?? 'Berätta alltid för alla som är med — i rummet eller i mötet — att det spelas in.'}
        </p>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {phase === 'recording' ? (
          <button
            onClick={stopRecording}
            className="inline-flex items-center gap-2 rounded-full bg-gray-700 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-gray-800 animate-pulse"
          >
            <Square className="h-6 w-6" />
            {mt?.stop ?? 'Stoppa'} · {fmtTime(recSeconds)}
          </button>
        ) : (
          <>
            <button
              onClick={startRecording}
              disabled={busy}
              className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-red-600 disabled:opacity-40"
            >
              <Mic className="h-6 w-6" />
              {mt?.record ?? 'Nytt möte'}
            </button>
            <label className={`inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 dark:border-gray-600 hc:border-white px-6 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${busy ? 'pointer-events-none opacity-40' : ''}`}>
              <Upload className="h-5 w-5" />
              {mt?.upload ?? 'Ladda upp ljudfil'}
              <input type="file" accept="audio/*,video/*" multiple onChange={onUpload} disabled={busy} className="hidden" />
            </label>
          </>
        )}
      </div>

      {phase !== 'recording' && (
        <p className="text-center text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
          {mt?.uploadHint ?? 'Du kan välja flera filer på en gång — de transkriberas efter varandra och läggs i samma transkription.'}
        </p>
      )}

      {/* Progress */}
      {busy && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <Loader2 className="h-4 w-4 animate-spin" />
            {phase === 'loading'
              ? `${mt?.downloading ?? 'Laddar ner språkmodell'} ${downloadPct != null ? Math.round(downloadPct) + '%' : ''}`
              : (mt?.transcribing ?? 'Transkriberar…')}
            {queueTotal > 1 && (
              <span className="text-gray-500 dark:text-gray-400 hc:text-gray-300">
                — {(mt?.queueStatus ?? 'Fil {n} av {m}: {name}')
                  .replace('{n}', String(queueIndex))
                  .replace('{m}', String(queueTotal))
                  .replace('{name}', currentFileName)}
              </span>
            )}
          </div>
          {phase === 'loading' && downloadPct != null && (
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${Math.round(downloadPct)}%` }} />
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {trimmed && phase === 'done' && (
        <div className="flex items-start gap-2.5 rounded-xl border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-4 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
          <Scissors className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{mt?.silenceTrimmed ?? 'Vi klippte bort långa tysta partier ur ljudet innan transkribering — det är den vanligaste orsaken till att modellen gissar fel språk eller hittar på text.'}</p>
        </div>
      )}

      {cleaned && phase === 'done' && (
        <div className="rounded-xl border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-4 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
          {mt?.repetitionCleaned ?? 'Vi upptäckte och tog bort upprepade textblock i transkriptionen. Det händer oftast vid tysta eller svårhörbara partier — till exempel om ett digitalt möte spelades in via mikrofonen och bara fångade din egen röst.'}
        </div>
      )}

      {/* Transcript */}
      {(transcript || phase === 'done') && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <label className="text-sm font-medium text-gray-900 dark:text-white">{mt?.transcript ?? 'Transkription'}</label>
            <div className="flex flex-wrap gap-2">
              <button onClick={copyText} disabled={!transcript} className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40">
                {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? (mt?.copied ?? 'Kopierat!') : (mt?.copy ?? 'Kopiera')}
              </button>
              <button onClick={() => download('transkription.txt', transcript)} disabled={!transcript} className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40">
                <Download className="h-3.5 w-3.5" /> .txt
              </button>
              <button onClick={() => download('transkription.srt', chunksToSrt(chunks))} disabled={!chunks.length} className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40">
                <Download className="h-3.5 w-3.5" /> .srt
              </button>
              <button onClick={reset} disabled={!transcript} className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40">
                <Trash2 className="h-3.5 w-3.5" /> {mt?.clear ?? 'Rensa'}
              </button>
            </div>
          </div>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder={mt?.empty ?? 'Transkriptionen visas här…'}
            rows={10}
            className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 text-sm text-gray-900 dark:text-white whitespace-pre-wrap"
          />
        </div>
      )}
    </div>
  )
}
