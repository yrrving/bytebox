import { useState, useMemo, useRef } from 'react'
import { Download, Copy, Check, ShieldCheck, Upload, Clock } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

interface Cue {
  id: string
  index: number
  start: number // seconds
  end: number // seconds
  text: string
}

// "HH:MM:SS,mmm" -> seconds
function parseTimestamp(ts: string): number {
  const m = ts.trim().match(/^(\d{1,2}):(\d{2}):(\d{2})[,.](\d{1,3})$/)
  if (!m) throw new Error(`Ogiltig tidsstämpel: "${ts}"`)
  const [, hh, mm, ss, ms] = m
  return (
    Number(hh) * 3600 +
    Number(mm) * 60 +
    Number(ss) +
    Number(ms.padEnd(3, '0')) / 1000
  )
}

// seconds -> "HH:MM:SS,mmm"
function formatTimestamp(sec: number): string {
  const s = Math.max(0, sec)
  const totalMs = Math.round(s * 1000)
  const ms = totalMs % 1000
  const totalSec = Math.floor(totalMs / 1000)
  const ss = totalSec % 60
  const mm = Math.floor(totalSec / 60) % 60
  const hh = Math.floor(totalSec / 3600)
  const pad = (n: number, l = 2) => String(n).padStart(l, '0')
  return `${pad(hh)}:${pad(mm)}:${pad(ss)},${pad(ms, 3)}`
}

function parseSrt(raw: string): Cue[] {
  // Normalise line endings and strip a BOM if present
  const text = raw.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n').trim()
  if (!text) return []

  const blocks = text.split(/\n{2,}/)
  const cues: Cue[] = []

  blocks.forEach((block, i) => {
    const lines = block.split('\n')
    if (lines.length === 0) return

    // First line may be an index number; the timing line contains "-->"
    let cursor = 0
    if (/^\d+$/.test(lines[0].trim()) && lines[1] && lines[1].includes('-->')) {
      cursor = 1
    }

    const timingLine = lines[cursor]
    if (!timingLine || !timingLine.includes('-->')) {
      throw new Error(`Kunde inte hitta tidslinje i block ${i + 1}.`)
    }

    const [startRaw, endRaw] = timingLine.split('-->')
    if (startRaw === undefined || endRaw === undefined) {
      throw new Error(`Felaktig tidslinje i block ${i + 1}: "${timingLine}"`)
    }

    const start = parseTimestamp(startRaw)
    const end = parseTimestamp(endRaw)
    const textBody = lines.slice(cursor + 1).join('\n')

    cues.push({
      id: `${Date.now()}-${i}-${Math.random().toString(36).slice(2, 8)}`,
      index: cues.length + 1,
      start,
      end,
      text: textBody,
    })
  })

  return cues
}

function serializeSrt(cues: Cue[]): string {
  return cues
    .map(
      (c, i) =>
        `${i + 1}\n${formatTimestamp(c.start)} --> ${formatTimestamp(c.end)}\n${c.text}`,
    )
    .join('\n\n') + '\n'
}

export default function SrtEditor() {
  const { t } = useLanguage()
  const translation = t.tools['srt-redigerare']

  const [cues, setCues] = useState<Cue[]>([])
  const [rawInput, setRawInput] = useState('')
  const [error, setError] = useState('')
  const [fileName, setFileName] = useState('undertext.srt')
  const [shiftSeconds, setShiftSeconds] = useState(0)
  const [copied, setCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const output = useMemo(() => serializeSrt(cues), [cues])

  const loadFromText = (raw: string) => {
    try {
      const parsed = parseSrt(raw)
      if (parsed.length === 0) {
        setError('Ingen undertext hittades. Kontrollera att texten är i SRT-format.')
        return
      }
      setCues(parsed)
      setError('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Kunde inte tolka SRT-filen.')
    }
  }

  const handleFile = (file: File) => {
    setFileName(file.name.replace(/\.[^.]+$/, '') + '.srt')
    const reader = new FileReader()
    reader.onload = () => {
      const raw = String(reader.result ?? '')
      setRawInput(raw)
      loadFromText(raw)
    }
    reader.onerror = () => setError('Kunde inte läsa filen.')
    reader.readAsText(file)
  }

  const updateCueText = (id: string, text: string) => {
    setCues((prev) => prev.map((c) => (c.id === id ? { ...c, text } : c)))
  }

  const updateCueTime = (id: string, field: 'start' | 'end', value: string) => {
    try {
      const sec = parseTimestamp(value)
      setCues((prev) => prev.map((c) => (c.id === id ? { ...c, [field]: sec } : c)))
      setError('')
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ogiltig tidsstämpel.')
    }
  }

  const applyShift = () => {
    if (!shiftSeconds) return
    setCues((prev) =>
      prev.map((c) => ({
        ...c,
        start: Math.max(0, c.start + shiftSeconds),
        end: Math.max(0, c.end + shiftSeconds),
      })),
    )
  }

  const copyOutput = async () => {
    try {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      setError('Kunde inte kopiera till urklipp.')
    }
  }

  const downloadSrt = () => {
    const blob = new Blob([output], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = fileName
    a.click()
    URL.revokeObjectURL(url)
  }

  const tsInputClass =
    'w-36 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-2 py-1.5 text-sm font-mono text-gray-900 dark:text-gray-100 hc:text-white'

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

      {/* Privacy note */}
      <div className="flex items-start gap-2 rounded-lg border border-green-200 dark:border-green-900 hc:border-white bg-green-50 dark:bg-green-950/30 hc:bg-black p-3 text-sm text-green-800 dark:text-green-300 hc:text-white">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
        <span>Allt sker lokalt i din webbläsare. Filen laddas aldrig upp någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-6 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          <Upload className="h-6 w-6 text-gray-400 dark:text-gray-500" />
          <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
            Klicka eller dra hit en .srt-fil
          </p>
          <input
            ref={inputRef}
            type="file"
            accept=".srt,text/plain"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
          />
        </div>

        {/* Or paste */}
        <div>
          <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Eller klistra in SRT-text</label>
          <textarea
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder={'1\n00:00:01,000 --> 00:00:04,000\nHej och välkommen!'}
            rows={4}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm font-mono text-gray-900 dark:text-gray-100 hc:text-white"
          />
          <button
            onClick={() => loadFromText(rawInput)}
            disabled={!rawInput.trim()}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Tolka text
          </button>
        </div>

        {error && (
          <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">{error}</p>
        )}
      </div>

      {cues.length > 0 && (
        <>
          {/* Shift all timings */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4">
            <div className="flex flex-wrap items-end gap-3">
              <div>
                <label className="mb-1 flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3.5 w-3.5" />
                  Förskjut alla tider (sekunder, kan vara negativt)
                </label>
                <input
                  type="number"
                  step={0.1}
                  value={shiftSeconds}
                  onChange={(e) => setShiftSeconds(Number(e.target.value))}
                  className="w-32 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
                />
              </div>
              <button
                onClick={applyShift}
                className="rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Tillämpa
              </button>
            </div>
          </div>

          {/* Cue list */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 hc:text-white">
                {cues.length} textblock
              </h2>
            </div>
            {cues.map((cue, i) => (
              <div
                key={cue.id}
                className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black p-3 space-y-2"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-6 shrink-0 text-xs font-mono text-gray-400 dark:text-gray-500">#{i + 1}</span>
                  <input
                    type="text"
                    value={formatTimestamp(cue.start)}
                    onChange={(e) => updateCueTime(cue.id, 'start', e.target.value)}
                    className={tsInputClass}
                  />
                  <span className="text-gray-400 dark:text-gray-500">→</span>
                  <input
                    type="text"
                    value={formatTimestamp(cue.end)}
                    onChange={(e) => updateCueTime(cue.id, 'end', e.target.value)}
                    className={tsInputClass}
                  />
                </div>
                <textarea
                  value={cue.text}
                  onChange={(e) => updateCueText(cue.id, e.target.value)}
                  rows={2}
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
                />
              </div>
            ))}
          </div>

          {/* Export */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={copyOutput}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-black px-4 py-2.5 font-medium text-gray-800 dark:text-gray-200 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Kopierat!' : 'Kopiera SRT'}
            </button>
            <button
              onClick={downloadSrt}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Ladda ner .srt
            </button>
          </div>
        </>
      )}
    </div>
  )
}
