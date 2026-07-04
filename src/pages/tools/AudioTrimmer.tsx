import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, ShieldCheck, Play, Square, Scissors, Loader2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

function formatTime(sec: number): string {
  if (!isFinite(sec) || sec < 0) sec = 0
  const m = Math.floor(sec / 60)
  const s = sec - m * 60
  return `${m}:${s.toFixed(2).padStart(5, '0')}`
}

// Encode an AudioBuffer region to a 16-bit PCM WAV Blob
function encodeWav(buffer: AudioBuffer, startSample: number, endSample: number): Blob {
  const numChannels = buffer.numberOfChannels
  const sampleRate = buffer.sampleRate
  const frameCount = Math.max(0, endSample - startSample)

  const bytesPerSample = 2
  const blockAlign = numChannels * bytesPerSample
  const dataSize = frameCount * blockAlign
  const bufferSize = 44 + dataSize

  const arrayBuffer = new ArrayBuffer(bufferSize)
  const view = new DataView(arrayBuffer)

  const writeString = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i))
  }

  // RIFF header
  writeString(0, 'RIFF')
  view.setUint32(4, 36 + dataSize, true)
  writeString(8, 'WAVE')
  // fmt chunk
  writeString(12, 'fmt ')
  view.setUint32(16, 16, true) // subchunk1 size (PCM)
  view.setUint16(20, 1, true) // audio format = PCM
  view.setUint16(22, numChannels, true)
  view.setUint32(24, sampleRate, true)
  view.setUint32(28, sampleRate * blockAlign, true) // byte rate
  view.setUint16(32, blockAlign, true)
  view.setUint16(34, bytesPerSample * 8, true) // bits per sample
  // data chunk
  writeString(36, 'data')
  view.setUint32(40, dataSize, true)

  // Gather channel data
  const channels: Float32Array[] = []
  for (let ch = 0; ch < numChannels; ch++) channels.push(buffer.getChannelData(ch))

  let offset = 44
  for (let i = 0; i < frameCount; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      let sample = channels[ch][startSample + i] ?? 0
      sample = Math.max(-1, Math.min(1, sample))
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true)
      offset += 2
    }
  }

  return new Blob([arrayBuffer], { type: 'audio/wav' })
}

export default function AudioTrimmer() {
  const { t } = useLanguage()
  const translation = t.tools['ljudklipp']

  const [fileName, setFileName] = useState('')
  const [buffer, setBuffer] = useState<AudioBuffer | null>(null)
  const [duration, setDuration] = useState(0)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [loading, setLoading] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState('')

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const sourceRef = useRef<AudioBufferSourceNode | null>(null)
  const draggingRef = useRef<'start' | 'end' | null>(null)

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      audioCtxRef.current = new Ctx()
    }
    return audioCtxRef.current
  }

  const stopPlayback = useCallback(() => {
    if (sourceRef.current) {
      try {
        sourceRef.current.onended = null
        sourceRef.current.stop()
      } catch {
        /* already stopped */
      }
      sourceRef.current.disconnect()
      sourceRef.current = null
    }
    setPlaying(false)
  }, [])

  const handleFile = async (file: File) => {
    stopPlayback()
    setError('')
    setLoading(true)
    setBuffer(null)
    try {
      const arrayBuffer = await file.arrayBuffer()
      const ctx = getCtx()
      const decoded = await ctx.decodeAudioData(arrayBuffer.slice(0))
      setBuffer(decoded)
      setDuration(decoded.duration)
      setStart(0)
      setEnd(decoded.duration)
      setFileName(file.name)
    } catch {
      setError('Kunde inte avkoda ljudfilen. Kontrollera att det är ett giltigt ljudformat (mp3, wav, m4a, ogg).')
      setFileName('')
    } finally {
      setLoading(false)
    }
  }

  // Draw the waveform + selection overlay
  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !buffer) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height
    ctx.clearRect(0, 0, width, height)

    const data = buffer.getChannelData(0)
    const step = Math.max(1, Math.floor(data.length / width))
    const amp = height / 2

    // Waveform
    ctx.fillStyle = '#94a3b8'
    for (let x = 0; x < width; x++) {
      let min = 1.0
      let max = -1.0
      for (let j = 0; j < step; j++) {
        const datum = data[x * step + j] ?? 0
        if (datum < min) min = datum
        if (datum > max) max = datum
      }
      ctx.fillRect(x, (1 + min) * amp, 1, Math.max(1, (max - min) * amp))
    }

    if (duration > 0) {
      const sx = (start / duration) * width
      const ex = (end / duration) * width

      // Dim outside selection
      ctx.fillStyle = 'rgba(15, 23, 42, 0.55)'
      ctx.fillRect(0, 0, sx, height)
      ctx.fillRect(ex, 0, width - ex, height)

      // Selection border
      ctx.fillStyle = '#2563eb'
      ctx.fillRect(sx - 1, 0, 2, height)
      ctx.fillRect(ex - 1, 0, 2, height)

      // Handle knobs
      ctx.fillStyle = '#2563eb'
      ctx.fillRect(sx - 4, 0, 8, 10)
      ctx.fillRect(ex - 4, 0, 8, 10)
    }
  }, [buffer, duration, start, end])

  useEffect(() => {
    draw()
  }, [draw])

  // Redraw on resize
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const handle = () => {
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      draw()
    }
    handle()
    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [draw, buffer])

  useEffect(() => {
    return () => {
      stopPlayback()
    }
  }, [stopPlayback])

  // Canvas dragging of handles
  const timeFromEvent = (clientX: number): number => {
    const canvas = canvasRef.current
    if (!canvas || duration <= 0) return 0
    const rect = canvas.getBoundingClientRect()
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    return ratio * duration
  }

  const onCanvasDown = (e: React.MouseEvent) => {
    if (!buffer) return
    const time = timeFromEvent(e.clientX)
    // Choose nearest handle
    draggingRef.current = Math.abs(time - start) <= Math.abs(time - end) ? 'start' : 'end'
    onCanvasMove(e)
  }

  const onCanvasMove = (e: React.MouseEvent) => {
    if (!draggingRef.current || !buffer) return
    const time = timeFromEvent(e.clientX)
    if (draggingRef.current === 'start') {
      setStart(Math.min(time, end - 0.01))
    } else {
      setEnd(Math.max(time, start + 0.01))
    }
  }

  const onCanvasUp = () => {
    draggingRef.current = null
  }

  const play = () => {
    if (!buffer) return
    stopPlayback()
    const ctx = getCtx()
    if (ctx.state === 'suspended') ctx.resume()
    const source = ctx.createBufferSource()
    source.buffer = buffer
    source.connect(ctx.destination)
    source.onended = () => {
      setPlaying(false)
      sourceRef.current = null
    }
    sourceRef.current = source
    const offset = Math.max(0, start)
    const dur = Math.max(0, end - start)
    source.start(0, offset, dur)
    setPlaying(true)
  }

  const download = () => {
    if (!buffer) return
    const startSample = Math.floor(start * buffer.sampleRate)
    const endSample = Math.floor(end * buffer.sampleRate)
    const blob = encodeWav(buffer, startSample, endSample)
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    const base = fileName.replace(/\.[^/.]+$/, '') || 'ljud'
    a.download = `${base}-klippt.wav`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  const selectedDuration = Math.max(0, end - start)

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
        <span>Allt sker lokalt i din webbläsare. Ljudfilen laddas aldrig upp någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => !loading && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const f = e.dataTransfer.files[0]
            if (f && !loading) handleFile(f)
          }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {loading ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
              <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">Avkodar ljud…</p>
            </>
          ) : fileName ? (
            <p className="text-gray-700 dark:text-gray-300 hc:text-white font-medium truncate max-w-full">{fileName}</p>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
              Klicka eller dra hit en ljudfil (mp3, wav, m4a, ogg …)
            </p>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="audio/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handleFile(f)
            }}
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">{error}</p>
        )}

        {buffer && (
          <>
            {/* Waveform */}
            <div className="rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 p-2">
              <canvas
                ref={canvasRef}
                className="h-32 w-full cursor-ew-resize touch-none"
                onMouseDown={onCanvasDown}
                onMouseMove={onCanvasMove}
                onMouseUp={onCanvasUp}
                onMouseLeave={onCanvasUp}
              />
            </div>

            {/* Sliders */}
            <div className="space-y-3">
              <div>
                <label className="mb-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Start</span>
                  <span className="font-mono">{formatTime(start)}</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={duration}
                  step={0.01}
                  value={start}
                  onChange={(e) => setStart(Math.min(Number(e.target.value), end - 0.01))}
                  className="w-full align-middle"
                />
              </div>
              <div>
                <label className="mb-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>Slut</span>
                  <span className="font-mono">{formatTime(end)}</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={duration}
                  step={0.01}
                  value={end}
                  onChange={(e) => setEnd(Math.max(Number(e.target.value), start + 0.01))}
                  className="w-full align-middle"
                />
              </div>
            </div>

            {/* Selection summary */}
            <div className="flex items-center gap-3 rounded-lg border border-blue-200 dark:border-blue-900 hc:border-white bg-blue-50 dark:bg-blue-950/30 hc:bg-black p-3 text-sm text-blue-900 dark:text-blue-200 hc:text-white">
              <Scissors className="h-4 w-4 shrink-0" />
              <span>
                Vald längd: <strong>{formatTime(selectedDuration)}</strong> (av {formatTime(duration)})
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={playing ? stopPlayback : play}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2.5 font-medium text-gray-900 dark:text-gray-100 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {playing ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {playing ? 'Stoppa' : 'Spela markering'}
              </button>
              <button
                onClick={download}
                disabled={selectedDuration <= 0}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Download className="h-4 w-4" />
                Klipp &amp; ladda ner (WAV)
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
