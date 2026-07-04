import { useState, useRef, useEffect } from 'react'
import { Download, Loader2, ShieldCheck, Film } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

const MAX_FRAMES = 200

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/** Seek the video to a given time and resolve once the frame is ready. */
function seekTo(video: HTMLVideoElement, time: number): Promise<void> {
  return new Promise((resolve) => {
    const onSeeked = () => {
      video.removeEventListener('seeked', onSeeked)
      resolve()
    }
    video.addEventListener('seeked', onSeeked)
    video.currentTime = time
  })
}

export default function VideoToGif() {
  const { t } = useLanguage()
  const translation = t.tools['video-till-gif']

  const [videoUrl, setVideoUrl] = useState('')
  const [duration, setDuration] = useState(0)
  const [videoName, setVideoName] = useState('')
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [fps, setFps] = useState(10)
  const [width, setWidth] = useState(480)
  const [nativeWidth, setNativeWidth] = useState(480)
  const [nativeHeight, setNativeHeight] = useState(360)
  const [working, setWorking] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState('')
  const [result, setResult] = useState<{ url: string; size: number } | null>(null)

  const videoRef = useRef<HTMLVideoElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      if (videoUrl) URL.revokeObjectURL(videoUrl)
      if (result) URL.revokeObjectURL(result.url)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoUrl])

  const loadFile = (file: File | undefined) => {
    if (!file) return
    if (!file.type.startsWith('video/')) {
      setError('Välj en videofil.')
      return
    }
    setError('')
    setResult(null)
    if (videoUrl) URL.revokeObjectURL(videoUrl)
    const url = URL.createObjectURL(file)
    setVideoUrl(url)
    setVideoName(file.name.replace(/\.[^.]+$/, ''))
  }

  const onLoadedMetadata = () => {
    const v = videoRef.current
    if (!v) return
    const dur = Math.min(v.duration, 3600)
    setDuration(dur)
    setStart(0)
    setEnd(Math.min(dur, 5))
    setNativeWidth(v.videoWidth)
    setNativeHeight(v.videoHeight)
    setWidth(Math.min(v.videoWidth, 480))
  }

  const frameCount = Math.max(0, Math.ceil((end - start) * fps))
  const tooManyFrames = frameCount > MAX_FRAMES
  const outHeight = Math.round(width * (nativeHeight / nativeWidth || 0.75))

  const convert = async () => {
    const video = videoRef.current
    if (!video || end <= start) return
    if (tooManyFrames) {
      setError(`För många bildrutor (${frameCount}). Minska längden eller bildrutor/sekund (max ${MAX_FRAMES}).`)
      return
    }
    setError('')
    setResult(null)
    setWorking(true)
    setProgress(0)

    try {
      // Laddas bara när verktyget faktiskt används (håller huvudbundeln liten)
      const { GIFEncoder, quantize, applyPalette } = await import('gifenc')

      const w = width
      const h = outHeight
      const canvas = document.createElement('canvas')
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      if (!ctx) throw new Error('canvas')

      video.pause()
      const gif = GIFEncoder()
      const delay = Math.round(1000 / fps)
      const step = 1 / fps

      let frame = 0
      for (let time = start; time < end && frame < MAX_FRAMES; time += step) {
        await seekTo(video, time)
        ctx.drawImage(video, 0, 0, w, h)
        const { data } = ctx.getImageData(0, 0, w, h)
        const palette = quantize(data, 256)
        const index = applyPalette(data, palette)
        gif.writeFrame(index, w, h, { palette, delay })
        frame++
        setProgress(Math.round((frame / frameCount) * 100))
        // Ge webbläsaren en chans att andas mellan tunga rutor
        await new Promise((r) => setTimeout(r, 0))
      }

      gif.finish()
      const bytes = gif.bytes()
      const blob = new Blob([bytes as BlobPart], { type: 'image/gif' })
      setResult({ url: URL.createObjectURL(blob), size: blob.size })
    } catch {
      setError('Något gick fel vid konverteringen. Videon kanske har ett format som webbläsaren inte kan läsa.')
    } finally {
      setWorking(false)
    }
  }

  const download = () => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result.url
    a.download = `${videoName || 'video'}.gif`
    a.click()
  }

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
        <span>Allt sker lokalt i din webbläsare. Videon laddas aldrig upp någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        {!videoUrl && (
          <div
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => { e.preventDefault(); loadFile(e.dataTransfer.files[0]) }}
            className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
          >
            <Film className="h-6 w-6 text-gray-400" />
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">Klicka eller dra hit en videofil</p>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => loadFile(e.target.files?.[0])}
        />

        {videoUrl && (
          <>
            <video
              ref={videoRef}
              src={videoUrl}
              onLoadedMetadata={onLoadedMetadata}
              controls
              muted
              playsInline
              className="w-full rounded-lg bg-black"
            />

            {/* Trim */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
                  Start: {start.toFixed(1)} s
                </label>
                <input
                  type="range" min={0} max={duration} step={0.1} value={start}
                  onChange={(e) => setStart(Math.min(Number(e.target.value), end - 0.1))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
                  Slut: {end.toFixed(1)} s
                </label>
                <input
                  type="range" min={0} max={duration} step={0.1} value={end}
                  onChange={(e) => setEnd(Math.max(Number(e.target.value), start + 0.1))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
                  Bildrutor/sekund: {fps}
                </label>
                <input
                  type="range" min={2} max={24} step={1} value={fps}
                  onChange={(e) => setFps(Number(e.target.value))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
                  Bredd: {width} px
                </label>
                <input
                  type="range" min={120} max={Math.max(nativeWidth, 120)} step={20} value={width}
                  onChange={(e) => setWidth(Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            <p className={`text-xs ${tooManyFrames ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'}`}>
              {frameCount} bildrutor · {width}×{outHeight} px
              {tooManyFrames && ` — för många (max ${MAX_FRAMES})`}
            </p>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={convert}
                disabled={working || end <= start || tooManyFrames}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
              >
                {working ? <Loader2 className="h-4 w-4 animate-spin" /> : <Film className="h-4 w-4" />}
                {working ? `Skapar GIF… ${progress}%` : 'Skapa GIF'}
              </button>
              <button
                onClick={() => { setVideoUrl(''); setResult(null); setError('') }}
                className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-black px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:border-gray-400"
              >
                Byt video
              </button>
            </div>
          </>
        )}

        {error && (
          <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">{error}</p>
        )}

        {result && (
          <div className="space-y-3">
            <img src={result.url} alt="GIF" className="w-full rounded-lg border border-gray-200 dark:border-gray-700" />
            <button
              onClick={download}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
            >
              <Download className="h-4 w-4" />
              Ladda ner GIF ({formatBytes(result.size)})
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
