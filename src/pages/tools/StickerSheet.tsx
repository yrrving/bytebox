import { useState, useRef, useMemo, useEffect } from 'react'
import { Download, ShieldCheck, Grid3x3 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type SheetKey = 'a4' | 'letter'

interface SheetSize {
  label: string
  width: number // mm
  height: number // mm
}

const SHEETS: Record<SheetKey, SheetSize> = {
  a4: { label: 'A4 (210 × 297 mm)', width: 210, height: 297 },
  letter: { label: 'Letter (216 × 279 mm)', width: 215.9, height: 279.4 },
}

const DPI = 300
const MM_PER_INCH = 25.4
const mmToPx = (mm: number) => Math.round((mm / MM_PER_INCH) * DPI)

interface Layout {
  cols: number
  rows: number
  total: number
  offsetX: number // mm, centering margin
  offsetY: number // mm
}

export default function StickerSheet() {
  const { t } = useLanguage()
  const translation = t.tools['etikett-ark']

  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [labelW, setLabelW] = useState(50)
  const [labelH, setLabelH] = useState(50)
  const [gap, setGap] = useState(3)
  const [sheet, setSheet] = useState<SheetKey>('a4')
  const [margin, setMargin] = useState(8)
  const [showCutLines, setShowCutLines] = useState(true)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleImage = (file: File) => {
    const img = new Image()
    img.onload = () => setImage(img)
    img.src = URL.createObjectURL(file)
  }

  const layout: Layout = useMemo(() => {
    const s = SHEETS[sheet]
    const usableW = s.width - margin * 2
    const usableH = s.height - margin * 2
    if (labelW <= 0 || labelH <= 0) {
      return { cols: 0, rows: 0, total: 0, offsetX: margin, offsetY: margin }
    }
    // n labels need: n*label + (n-1)*gap <= usable  =>  n <= (usable + gap) / (label + gap)
    const cols = Math.max(0, Math.floor((usableW + gap) / (labelW + gap)))
    const rows = Math.max(0, Math.floor((usableH + gap) / (labelH + gap)))
    const gridW = cols > 0 ? cols * labelW + (cols - 1) * gap : 0
    const gridH = rows > 0 ? rows * labelH + (rows - 1) * gap : 0
    const offsetX = margin + (usableW - gridW) / 2
    const offsetY = margin + (usableH - gridH) / 2
    return { cols, rows, total: cols * rows, offsetX, offsetY }
  }, [sheet, labelW, labelH, gap, margin])

  // Render the full sheet on the (hidden, full-DPI) canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const s = SHEETS[sheet]
    canvas.width = mmToPx(s.width)
    canvas.height = mmToPx(s.height)

    // White paper background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (!image || layout.total === 0) return

    const lwPx = mmToPx(labelW)
    const lhPx = mmToPx(labelH)

    // Fit the design inside each label cell (contain, centered)
    const srcAspect = image.width / image.height
    const cellAspect = labelW / labelH
    let dw = lwPx
    let dh = lhPx
    if (srcAspect > cellAspect) {
      dh = Math.round(lwPx / srcAspect)
    } else {
      dw = Math.round(lhPx * srcAspect)
    }
    const padX = Math.round((lwPx - dw) / 2)
    const padY = Math.round((lhPx - dh) / 2)

    for (let r = 0; r < layout.rows; r++) {
      for (let c = 0; c < layout.cols; c++) {
        const x = mmToPx(layout.offsetX + c * (labelW + gap))
        const y = mmToPx(layout.offsetY + r * (labelH + gap))
        ctx.drawImage(image, x + padX, y + padY, dw, dh)
        if (showCutLines) {
          ctx.strokeStyle = '#c8c8c8'
          ctx.lineWidth = 1
          ctx.strokeRect(x + 0.5, y + 0.5, lwPx, lhPx)
        }
      }
    }
  }, [image, sheet, labelW, labelH, gap, margin, showCutLines, layout])

  const download = () => {
    const canvas = canvasRef.current
    if (!canvas || !image || layout.total === 0) return
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = `etikett-ark-${sheet}-${layout.total}st.png`
    a.click()
  }

  const numField = (
    label: string,
    value: number,
    onChange: (n: number) => void,
    opts?: { min?: number; max?: number; step?: number },
  ) => (
    <div>
      <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">{label}</label>
      <input
        type="number"
        value={value}
        min={opts?.min ?? 1}
        max={opts?.max}
        step={opts?.step ?? 1}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-24 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
      />
    </div>
  )

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

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f?.type.startsWith('image/')) handleImage(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {image ? (
            <img src={image.src} className="max-h-32 rounded-lg object-contain" alt="" />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
              Klicka eller dra hit din design (PNG, JPG, SVG …)
            </p>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImage(f) }}
          />
        </div>

        {/* Settings */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-end gap-4">
            {numField('Bredd (mm)', labelW, (n) => setLabelW(n), { min: 1, max: 300 })}
            {numField('Höjd (mm)', labelH, (n) => setLabelH(n), { min: 1, max: 300 })}
            {numField('Mellanrum (mm)', gap, (n) => setGap(Math.max(0, n)), { min: 0, max: 50 })}
            {numField('Arkmarginal (mm)', margin, (n) => setMargin(Math.max(0, n)), { min: 0, max: 50 })}
          </div>

          <div className="flex flex-wrap items-end gap-4">
            <div>
              <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Arkstorlek</label>
              <select
                value={sheet}
                onChange={(e) => setSheet(e.target.value as SheetKey)}
                className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
              >
                <option value="a4">{SHEETS.a4.label}</option>
                <option value="letter">{SHEETS.letter.label}</option>
              </select>
            </div>
            <label className="flex items-center gap-2 py-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
              <input
                type="checkbox"
                checked={showCutLines}
                onChange={(e) => setShowCutLines(e.target.checked)}
                className="h-4 w-4"
              />
              Visa skärlinjer
            </label>
          </div>
        </div>

        {/* Count summary */}
        <div className="flex items-center gap-3 rounded-lg border border-blue-200 dark:border-blue-900 hc:border-white bg-blue-50 dark:bg-blue-950/30 hc:bg-black p-3 text-sm text-blue-900 dark:text-blue-200 hc:text-white">
          <Grid3x3 className="h-4 w-4 shrink-0" />
          {layout.total > 0 ? (
            <span>
              <strong>{layout.total} etiketter</strong> per ark ({layout.cols} × {layout.rows},{' '}
              {labelW} × {labelH} mm)
            </span>
          ) : (
            <span>Ingen etikett får plats — minska storlek, mellanrum eller marginal.</span>
          )}
        </div>

        {/* Preview */}
        {image && layout.total > 0 && (
          <div className="rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white p-2">
            <div
              className="relative mx-auto w-full border border-gray-300"
              style={{ aspectRatio: `${SHEETS[sheet].width} / ${SHEETS[sheet].height}`, maxWidth: 360 }}
            >
              {Array.from({ length: layout.rows }).map((_, r) =>
                Array.from({ length: layout.cols }).map((_, c) => (
                  <div
                    key={`${r}-${c}`}
                    className={showCutLines ? 'absolute border border-gray-300' : 'absolute'}
                    style={{
                      left: `${(layout.offsetX + c * (labelW + gap)) / SHEETS[sheet].width * 100}%`,
                      top: `${(layout.offsetY + r * (labelH + gap)) / SHEETS[sheet].height * 100}%`,
                      width: `${labelW / SHEETS[sheet].width * 100}%`,
                      height: `${labelH / SHEETS[sheet].height * 100}%`,
                    }}
                  >
                    <img src={image.src} className="h-full w-full object-contain" alt="" />
                  </div>
                )),
              )}
            </div>
          </div>
        )}

        {/* Export */}
        <button
          onClick={download}
          disabled={!image || layout.total === 0}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          Ladda ner ark som PNG (300 DPI)
        </button>
      </div>
    </div>
  )
}
