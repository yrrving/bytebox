import { useState, useRef, useEffect } from 'react'
import { Mic, Square, Upload, Copy, Check, Trash2, Download, ShieldCheck, Loader2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type Phase = 'idle' | 'recording' | 'loading' | 'transcribing' | 'done'

type Chunk = { timestamp: [number, number]; text: string }

const MODELS = {
  fast: 'Xenova/whisper-tiny',
  better: 'Xenova/whisper-base',
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

export default function MeetingTranscriber() {
  const { t } = useLanguage()
  const translation = t.tools['motestranskribering']
  const mt = t.meetingTranscriber

  const [phase, setPhase] = useState<Phase>('idle')
  const [model, setModel] = useState<'fast' | 'better'>('fast')
  const [lang, setLang] = useState('')
  const [downloadPct, setDownloadPct] = useState<number | null>(null)
  const [transcript, setTranscript] = useState('')
  const [chunks, setChunks] = useState<Chunk[]>([])
  const [recSeconds, setRecSeconds] = useState(0)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const workerRef = useRef<Worker | null>(null)
  const recorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const audioChunksRef = useRef<Blob[]>([])
  const timerRef = useRef<number | null>(null)

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
          setTranscript(msg.text)
          setChunks(msg.chunks)
          setPhase('done')
        } else if (msg.type === 'error') {
          setError(msg.message || 'error')
          setPhase('idle')
        }
      }
    }
    return workerRef.current
  }

  async function transcribeBlob(blob: Blob) {
    setError('')
    setTranscript('')
    setChunks([])
    setPhase('loading')
    setDownloadPct(null)
    try {
      const audio = await toMono16k(await blob.arrayBuffer())
      const selected = LANGUAGES.find((l) => l.code === lang)
      getWorker().postMessage({ type: 'transcribe', audio, model: MODELS[model], language: selected?.name || undefined })
    } catch {
      setError(mt?.error ?? 'Något gick fel. Prova igen eller välj en mindre modell.')
      setPhase('idle')
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
        transcribeBlob(blob)
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
    const file = e.target.files?.[0]
    if (file) transcribeBlob(file)
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
    setError('')
    setPhase('idle')
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

      {/* Settings */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">{mt?.modelLabel ?? 'Kvalitet'}</label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value as 'fast' | 'better')}
            disabled={busy || phase === 'recording'}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white disabled:opacity-50"
          >
            <option value="fast">{mt?.modelFast ?? 'Snabb — mindre nedladdning'}</option>
            <option value="better">{mt?.modelBetter ?? 'Bättre — större nedladdning'}</option>
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
              <input type="file" accept="audio/*,video/*" onChange={onUpload} disabled={busy} className="hidden" />
            </label>
          </>
        )}
      </div>

      {/* Progress */}
      {busy && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
            <Loader2 className="h-4 w-4 animate-spin" />
            {phase === 'loading'
              ? `${mt?.downloading ?? 'Laddar ner språkmodell'} ${downloadPct != null ? Math.round(downloadPct) + '%' : ''}`
              : (mt?.transcribing ?? 'Transkriberar…')}
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
