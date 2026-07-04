import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, ShieldCheck, ImageIcon, ZoomIn } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

const DPI = 300
const mmToPx = (mm: number) => Math.round((mm / 25.4) * DPI)

type SheetFormat = 'image/png' | 'image/jpeg'

interface PhotoPreset {
  id: string
  label: string
  w: number // mm
  h: number // mm
}

const PHOTO_PRESETS: PhotoPreset[] = [
  { id: 'se-passport', label: 'Passfoto Sverige 35×45 mm', w: 35, h: 45 },
  { id: 'us-visa', label: 'Visum USA 51×51 mm', w: 51, h: 51 },
  { id: 'eu-license', label: 'EU-körkort 35×45 mm', w: 35, h: 45 },
  { id: 'custom', label: 'Egen storlek', w: 35, h: 45 },
]

interface SheetPreset {
  id: string
  label: string
  w: number // mm
  h: number // mm
}

const SHEET_PRESETS: SheetPreset[] = [
  { id: 'photo-10x15', label: '10×15 cm foto', w: 100, h: 150 },
  { id: 'a4', label: 'A4 (210×297 mm)', w: 210, h: 297 },
]

// Marginaler i mm för utskriftsarket
const OUTER_MARGIN = 4
const GAP = 2

interface Layout {
  cols: number
  rows: number
  sheetW: number // mm (ev. roterad)
  sheetH: number // mm
}

// Räknar ut hur många kopior som får plats, testar båda arkorienteringar
function computeLayout(sheet: SheetPreset, photoW: number, photoH: number): Layout {
  const options = [
    { w: sheet.w, h: sheet.h },
    { w: sheet.h, h: sheet.w },
  ]
  let best: Layout = { cols: 0, rows: 0, sheetW: sheet.w, sheetH: sheet.h }
  for (const o of options) {
    const usableW = o.w - OUTER_MARGIN * 2
    const usableH = o.h - OUTER_MARGIN * 2
    const cols = Math.floor((usableW + GAP) / (photoW + GAP))
    const rows = Math.floor((usableH + GAP) / (photoH + GAP))
    if (cols * rows > best.cols * best.rows) {
      best = { cols: Math.max(cols, 0), rows: Math.max(rows, 0), sheetW: o.w, sheetH: o.h }
    }
  }
  return best
}

// Ritar det beskurna fotot i en box (boxW×boxH px). ratio skalar panorering
// från förhandsvisningens pixlar till målcanvasens pixlar.
function renderPhoto(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  boxW: number,
  boxH: number,
  zoom: number,
  offX: number,
  offY: number,
  ratio: number,
) {
  ctx.save()
  ctx.beginPath()
  ctx.rect(x, y, boxW, boxH)
  ctx.clip()
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(x, y, boxW, boxH)
  const cover = Math.max(boxW / img.width, boxH / img.height)
  const scale = cover * zoom
  const dw = img.width * scale
  const dh = img.height * scale
  const dx = x + (boxW - dw) / 2 + offX * ratio
  const dy = y + (boxH - dh) / 2 + offY * ratio
  ctx.drawImage(img, dx, dy, dw, dh)
  ctx.restore()
}

export default function PassportPhoto() {
  const { t } = useLanguage()
  const translation = t.tools['passfoto']

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [presetId, setPresetId] = useState('se-passport')
  const [customW, setCustomW] = useState(35)
  const [customH, setCustomH] = useState(45)
  const [sheetId, setSheetId] = useState('photo-10x15')
  const [sheetFormat, setSheetFormat] = useState<SheetFormat>('image/jpeg')

  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const previewRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dragRef = useRef<{ active: boolean; startX: number; startY: number; baseX: number; baseY: number }>({
    active: false, startX: 0, startY: 0, baseX: 0, baseY: 0,
  })

  const preset = PHOTO_PRESETS.find((p) => p.id === presetId)!
  const photoW = presetId === 'custom' ? customW : preset.w
  const photoH = presetId === 'custom' ? customH : preset.h
  const sheet = SHEET_PRESETS.find((s) => s.id === sheetId)!

  // Förhandsvisningens box-mått (display px), behåller fotots proportioner
  const MAX_W = 280
  const MAX_H = 360
  const aspect = photoW / photoH
  let dispW = MAX_W
  let dispH = MAX_W / aspect
  if (dispH > MAX_H) {
    dispH = MAX_H
    dispW = MAX_H * aspect
  }
  dispW = Math.round(dispW)
  dispH = Math.round(dispH)

  const handleImage = (file: File) => {
    if (!file.type.startsWith('image/')) return
    const img = new Image()
    img.onload = () => {
      setImage(img)
      setZoom(1)
      setOffset({ x: 0, y: 0 })
    }
    img.src = URL.createObjectURL(file)
  }

  // Rita om förhandsvisningen
  const drawPreview = useCallback(() => {
    const canvas = previewRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = dispW
    canvas.height = dispH
    ctx.clearRect(0, 0, dispW, dispH)
    if (image) {
      renderPhoto(ctx, image, 0, 0, dispW, dispH, zoom, offset.x, offset.y, 1)
    } else {
      ctx.fillStyle = '#e5e7eb'
      ctx.fillRect(0, 0, dispW, dispH)
    }
    // Ram
    ctx.strokeStyle = '#3b82f6'
    ctx.lineWidth = 2
    ctx.strokeRect(1, 1, dispW - 2, dispH - 2)
  }, [image, zoom, offset, dispW, dispH])

  useEffect(() => {
    drawPreview()
  }, [drawPreview])

  // Panorering med musen
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!image) return
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startY: e.clientY,
      baseX: offset.x,
      baseY: offset.y,
    }
    e.currentTarget.setPointerCapture(e.pointerId)
  }
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current.active) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    setOffset({ x: dragRef.current.baseX + dx, y: dragRef.current.baseY + dy })
  }
  const onPointerUp = () => {
    dragRef.current.active = false
  }

  // Bygg en canvas med det enskilda fotot i rätt mm-mått @300 DPI
  const buildPhotoCanvas = (): HTMLCanvasElement | null => {
    if (!image) return null
    const pw = mmToPx(photoW)
    const ph = mmToPx(photoH)
    const canvas = document.createElement('canvas')
    canvas.width = pw
    canvas.height = ph
    const ctx = canvas.getContext('2d')
    if (!ctx) return null
    const ratio = pw / dispW // display px -> export px
    renderPhoto(ctx, image, 0, 0, pw, ph, zoom, offset.x, offset.y, ratio)
    return canvas
  }

  const downloadSinglePhoto = () => {
    const canvas = buildPhotoCanvas()
    if (!canvas) return
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = `passfoto-${photoW}x${photoH}mm.png`
    a.click()
  }

  const layout = computeLayout(sheet, photoW, photoH)
  const totalCopies = layout.cols * layout.rows

  const downloadSheet = () => {
    if (!image || totalCopies === 0) return
    const photoCanvas = buildPhotoCanvas()
    if (!photoCanvas) return

    const sheetWpx = mmToPx(layout.sheetW)
    const sheetHpx = mmToPx(layout.sheetH)
    const canvas = document.createElement('canvas')
    canvas.width = sheetWpx
    canvas.height = sheetHpx
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, sheetWpx, sheetHpx)

    const pw = mmToPx(photoW)
    const ph = mmToPx(photoH)
    const gapPx = mmToPx(GAP)
    const gridW = layout.cols * pw + (layout.cols - 1) * gapPx
    const gridH = layout.rows * ph + (layout.rows - 1) * gapPx
    const startX = Math.round((sheetWpx - gridW) / 2)
    const startY = Math.round((sheetHpx - gridH) / 2)

    ctx.strokeStyle = '#cccccc'
    ctx.lineWidth = 1
    for (let r = 0; r < layout.rows; r++) {
      for (let c = 0; c < layout.cols; c++) {
        const x = startX + c * (pw + gapPx)
        const y = startY + r * (ph + gapPx)
        ctx.drawImage(photoCanvas, x, y)
        ctx.strokeRect(x + 0.5, y + 0.5, pw, ph)
      }
    }

    const ext = sheetFormat === 'image/png' ? 'png' : 'jpg'
    const a = document.createElement('a')
    a.href = canvas.toDataURL(sheetFormat, 0.92)
    a.download = `passfoto-ark-${sheet.id}.${ext}`
    a.click()
  }

  const inputCls =
    'rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white'
  const labelCls = 'mb-1 block text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300'

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
        <span>Allt sker lokalt i din webbläsare. Bilden laddas aldrig upp någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleImage(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-6 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          <ImageIcon className="h-6 w-6 text-gray-400" />
          <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
            {image ? 'Klicka för att byta bild' : 'Klicka eller dra hit ett foto'}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }}
          />
        </div>

        {/* Options */}
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className={labelCls}>Fotoformat</label>
            <select value={presetId} onChange={(e) => setPresetId(e.target.value)} className={inputCls}>
              {PHOTO_PRESETS.map((p) => (
                <option key={p.id} value={p.id}>{p.label}</option>
              ))}
            </select>
          </div>

          {presetId === 'custom' && (
            <div className="flex items-end gap-2">
              <div>
                <label className={labelCls}>Bredd (mm)</label>
                <input
                  type="number" min={10} max={210} value={customW}
                  onChange={(e) => setCustomW(Math.max(10, Number(e.target.value) || 0))}
                  className={`${inputCls} w-24`}
                />
              </div>
              <span className="pb-2 text-gray-400">×</span>
              <div>
                <label className={labelCls}>Höjd (mm)</label>
                <input
                  type="number" min={10} max={297} value={customH}
                  onChange={(e) => setCustomH(Math.max(10, Number(e.target.value) || 0))}
                  className={`${inputCls} w-24`}
                />
              </div>
            </div>
          )}

          <div>
            <label className={labelCls}>Utskriftsark</label>
            <select value={sheetId} onChange={(e) => setSheetId(e.target.value)} className={inputCls}>
              {SHEET_PRESETS.map((s) => (
                <option key={s.id} value={s.id}>{s.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelCls}>Arkformat</label>
            <select value={sheetFormat} onChange={(e) => setSheetFormat(e.target.value as SheetFormat)} className={inputCls}>
              <option value="image/jpeg">JPG</option>
              <option value="image/png">PNG</option>
            </select>
          </div>
        </div>

        {/* Preview + zoom */}
        <div className="flex flex-col items-center gap-3">
          <canvas
            ref={previewRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            className="rounded-lg shadow-sm touch-none"
            style={{ width: dispW, height: dispH, cursor: image ? 'grab' : 'default' }}
          />
          <p className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
            {photoW}×{photoH} mm · 300 DPI · dra i bilden för att justera
          </p>
          <div className="flex w-full max-w-xs items-center gap-2">
            <ZoomIn className="h-4 w-4 text-gray-400 shrink-0" />
            <input
              type="range" min={1} max={4} step={0.02} value={zoom}
              disabled={!image}
              onChange={(e) => setZoom(Number(e.target.value))}
              className="w-full"
            />
            <span className="w-12 text-right text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
              {zoom.toFixed(1)}×
            </span>
          </div>
        </div>

        {/* Layout info */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {totalCopies > 0
            ? `${totalCopies} kopior på arket (${layout.cols}×${layout.rows})`
            : 'Fotot är för stort för valt ark'}
        </p>

        {/* Actions */}
        <div className="grid gap-3 sm:grid-cols-2">
          <button
            onClick={downloadSinglePhoto}
            disabled={!image}
            className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2.5 font-medium text-gray-900 dark:text-gray-100 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            Ladda ner enskilt foto
          </button>
          <button
            onClick={downloadSheet}
            disabled={!image || totalCopies === 0}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            Ladda ner ark
          </button>
        </div>
      </div>
    </div>
  )
}
