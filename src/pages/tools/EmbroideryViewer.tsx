import { useState, useRef, useEffect, useCallback } from 'react'
import { Upload, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'
import { parseEmbroidery, type EmbroideryData } from '../../utils/embroidery'


export default function EmbroideryViewer() {
  const { t } = useLanguage()
  const translation = t.tools['brodyrkortsvisare']

  const fileRef = useRef<HTMLInputElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [data, setData] = useState<EmbroideryData | null>(null)
  const [fileName, setFileName] = useState('')
  const [zoom, setZoom] = useState(1)
  const [error, setError] = useState('')

  const renderCanvas = useCallback((embData: EmbroideryData, z: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const padding = 20
    const scale = Math.min(
      (canvas.width - padding * 2) / Math.max(embData.width, 1),
      (canvas.height - padding * 2) / Math.max(embData.height, 1)
    ) * z

    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Center offset
    const offsetX = (canvas.width - embData.width * scale) / 2
    const offsetY = (canvas.height - embData.height * scale) / 2

    ctx.lineWidth = Math.max(1, scale * 0.8)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    let prevX = 0
    let prevY = 0
    let prevColorIdx = 0

    ctx.beginPath()
    ctx.strokeStyle = embData.colors[0] || '#000000'

    for (const stitch of embData.stitches) {
      const sx = stitch.x * scale + offsetX
      const sy = stitch.y * scale + offsetY

      if (stitch.colorIndex !== prevColorIdx) {
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = embData.colors[stitch.colorIndex % embData.colors.length] || '#000000'
        prevColorIdx = stitch.colorIndex
      }

      if (stitch.type === 'move') {
        ctx.moveTo(sx, sy)
      } else {
        if (prevX === 0 && prevY === 0) {
          ctx.moveTo(sx, sy)
        } else {
          ctx.lineTo(sx, sy)
        }
      }

      prevX = sx
      prevY = sy
    }
    ctx.stroke()
  }, [])

  useEffect(() => {
    if (data) renderCanvas(data, zoom)
  }, [data, zoom, renderCanvas])

  const loadFile = async (file: File) => {
    setError('')
    setFileName(file.name)

    try {
      const buffer = await file.arrayBuffer()
      const result = parseEmbroidery(buffer, file.name)

      if (!result) {
        setError('Kunde inte läsa filen. Kontrollera att det är en giltig PES-, DST- eller JEF-fil.')
        setData(null)
        return
      }

      setData(result)
      setZoom(1)
    } catch {
      setError('Fel vid inläsning av filen.')
      setData(null)
    }
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Upload */}
      <div
        onClick={() => fileRef.current?.click()}
        className="cursor-pointer rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-8 text-center transition-colors hover:border-blue-400 dark:hover:border-blue-500"
      >
        <Upload className="mx-auto h-8 w-8 text-gray-400 dark:text-gray-500 hc:text-white" />
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          Klicka eller dra hit en brodyrifil
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">PES, DST, JEF</p>
        <input
          ref={fileRef}
          type="file"
          accept=".pes,.dst,.jef"
          className="hidden"
          onChange={(e) => e.target.files?.[0] && loadFile(e.target.files[0])}
        />
      </div>

      {error && (
        <div className="rounded-xl border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4 text-sm text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {data && (
        <>
          {/* Controls */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 truncate">{fileName}</span>
            <div className="flex gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(0.25, z - 0.25))}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="flex items-center px-2 text-sm text-gray-600 dark:text-gray-400">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(4, z + 0.25))}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="overflow-auto rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white">
            <canvas
              ref={canvasRef}
              width={600}
              height={500}
              className="mx-auto block"
            />
          </div>

          {/* Metadata */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Stygn</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{data.stitchCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Dimensioner</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">
                {(data.width / 10).toFixed(1)} x {(data.height / 10).toFixed(1)} mm
              </span>
            </div>
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">Färgbyten</span>
              <span className="text-sm font-medium font-mono text-gray-900 dark:text-white">{data.colorChanges}</span>
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 hc:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300 block mb-2">Trådfärger</span>
              <div className="flex flex-wrap gap-2">
                {data.colors.map((color, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <div
                      className="h-5 w-5 rounded border border-gray-300 dark:border-gray-600"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
