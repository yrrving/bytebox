import { useState, useRef, useMemo, useEffect } from 'react'
import { Download, ShieldCheck, IdCard } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type PresetKey = 'business' | 'medium' | 'large' | 'custom'

interface Preset {
  label: string
  width: number // mm
  height: number // mm
}

const PRESETS: Record<PresetKey, Preset> = {
  business: { label: 'Visitkort (90 × 54 mm)', width: 90, height: 54 },
  medium: { label: 'Mellan (100 × 70 mm)', width: 100, height: 70 },
  large: { label: 'Stor (105 × 74 mm)', width: 105, height: 74 },
  custom: { label: 'Egen storlek', width: 90, height: 54 },
}

// A4 only for the badge sheet
const SHEET = { width: 210, height: 297 } // mm

const DPI = 300
const MM_PER_INCH = 25.4
const mmToPx = (mm: number) => Math.round((mm / MM_PER_INCH) * DPI)

interface Badge {
  name: string
  subtitle: string
}

interface Layout {
  cols: number
  rows: number
  perPage: number
  offsetX: number // mm, centering margin
  offsetY: number // mm
}

export default function BadgeGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['namnbricka']

  const [namesText, setNamesText] = useState('Anna Andersson | Projektledare\nBjörn Berg | Utvecklare\nCecilia Ceder')
  const [title, setTitle] = useState('Trainstation 2026')
  const [commonSubtitle, setCommonSubtitle] = useState('')
  const [delimiter] = useState('|')
  const [preset, setPreset] = useState<PresetKey>('business')
  const [customW, setCustomW] = useState(90)
  const [customH, setCustomH] = useState(54)
  const [gap, setGap] = useState(4)
  const [margin, setMargin] = useState(10)
  const [showCutLines, setShowCutLines] = useState(true)
  const [page, setPage] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const badgeW = preset === 'custom' ? customW : PRESETS[preset].width
  const badgeH = preset === 'custom' ? customH : PRESETS[preset].height

  // Parse the textarea into badges (one per non-empty line)
  const badges: Badge[] = useMemo(() => {
    return namesText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .map((line) => {
        const parts = line.split(delimiter)
        const name = (parts[0] ?? '').trim()
        const perLineSub = parts.length > 1 ? parts.slice(1).join(delimiter).trim() : ''
        return { name, subtitle: perLineSub || commonSubtitle.trim() }
      })
  }, [namesText, delimiter, commonSubtitle])

  const layout: Layout = useMemo(() => {
    const usableW = SHEET.width - margin * 2
    const usableH = SHEET.height - margin * 2
    if (badgeW <= 0 || badgeH <= 0) {
      return { cols: 0, rows: 0, perPage: 0, offsetX: margin, offsetY: margin }
    }
    // n badges need: n*badge + (n-1)*gap <= usable  =>  n <= (usable + gap) / (badge + gap)
    const cols = Math.max(0, Math.floor((usableW + gap) / (badgeW + gap)))
    const rows = Math.max(0, Math.floor((usableH + gap) / (badgeH + gap)))
    const gridW = cols > 0 ? cols * badgeW + (cols - 1) * gap : 0
    const gridH = rows > 0 ? rows * badgeH + (rows - 1) * gap : 0
    const offsetX = margin + (usableW - gridW) / 2
    const offsetY = margin + (usableH - gridH) / 2
    return { cols, rows, perPage: cols * rows, offsetX, offsetY }
  }, [badgeW, badgeH, gap, margin])

  const pageCount = layout.perPage > 0 ? Math.max(1, Math.ceil(badges.length / layout.perPage)) : 0

  // Keep the selected page within bounds when things change
  useEffect(() => {
    if (page > 0 && page >= pageCount) setPage(Math.max(0, pageCount - 1))
  }, [page, pageCount])

  // Draw a single badge cell on the given context at (x, y) in px
  const drawBadge = (
    ctx: CanvasRenderingContext2D,
    badge: Badge,
    x: number,
    y: number,
    wPx: number,
    hPx: number,
  ) => {
    // Card background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(x, y, wPx, hPx)
    // Border around the badge
    ctx.strokeStyle = '#1e3a8a'
    ctx.lineWidth = Math.max(2, Math.round(mmToPx(0.5)))
    ctx.strokeRect(x + ctx.lineWidth / 2, y + ctx.lineWidth / 2, wPx - ctx.lineWidth, hPx - ctx.lineWidth)

    const cx = x + wPx / 2
    ctx.textAlign = 'center'

    // Common title band (top)
    if (title.trim()) {
      const bandH = Math.round(hPx * 0.22)
      ctx.fillStyle = '#1e3a8a'
      ctx.fillRect(x + ctx.lineWidth, y + ctx.lineWidth, wPx - ctx.lineWidth * 2, bandH - ctx.lineWidth)
      ctx.fillStyle = '#ffffff'
      const titleSize = Math.round(bandH * 0.5)
      ctx.font = `600 ${titleSize}px system-ui, -apple-system, Arial, sans-serif`
      ctx.textBaseline = 'middle'
      ctx.fillText(fit(ctx, title.trim(), wPx - mmToPx(6)), cx, y + ctx.lineWidth + (bandH - ctx.lineWidth) / 2)
    }

    // Name (large, centered)
    ctx.fillStyle = '#111827'
    const nameSize = Math.round(hPx * 0.26)
    ctx.font = `700 ${nameSize}px system-ui, -apple-system, Arial, sans-serif`
    ctx.textBaseline = 'middle'
    const nameY = badge.subtitle ? y + hPx * 0.52 : y + hPx * 0.6
    ctx.fillText(fit(ctx, badge.name, wPx - mmToPx(6)), cx, nameY)

    // Subtitle (below the name)
    if (badge.subtitle) {
      ctx.fillStyle = '#4b5563'
      const subSize = Math.round(hPx * 0.14)
      ctx.font = `400 ${subSize}px system-ui, -apple-system, Arial, sans-serif`
      ctx.fillText(fit(ctx, badge.subtitle, wPx - mmToPx(6)), cx, y + hPx * 0.74)
    }
  }

  // Shrink text to fit within maxWidth by truncating with an ellipsis
  const fit = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string => {
    if (ctx.measureText(text).width <= maxWidth) return text
    let str = text
    while (str.length > 1 && ctx.measureText(str + '…').width > maxWidth) {
      str = str.slice(0, -1)
    }
    return str + '…'
  }

  // Render the currently selected page on the hidden 300 DPI canvas
  const renderPage = (pageIndex: number): HTMLCanvasElement | null => {
    const canvas = canvasRef.current
    if (!canvas) return null
    const ctx = canvas.getContext('2d')
    if (!ctx) return null

    canvas.width = mmToPx(SHEET.width)
    canvas.height = mmToPx(SHEET.height)

    // White paper background
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    if (layout.perPage === 0) return canvas

    const wPx = mmToPx(badgeW)
    const hPx = mmToPx(badgeH)
    const start = pageIndex * layout.perPage
    const pageBadges = badges.slice(start, start + layout.perPage)

    pageBadges.forEach((badge, i) => {
      const c = i % layout.cols
      const r = Math.floor(i / layout.cols)
      const x = mmToPx(layout.offsetX + c * (badgeW + gap))
      const y = mmToPx(layout.offsetY + r * (badgeH + gap))
      drawBadge(ctx, badge, x, y, wPx, hPx)
      if (showCutLines) {
        ctx.strokeStyle = '#c8c8c8'
        ctx.lineWidth = 1
        ctx.strokeRect(x + 0.5, y + 0.5, wPx, hPx)
      }
    })

    return canvas
  }

  // Keep the hidden canvas in sync with the current selection (for a fast download)
  useEffect(() => {
    renderPage(page)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [badges, badgeW, badgeH, gap, margin, showCutLines, title, page, layout])

  const downloadPage = (pageIndex: number) => {
    const canvas = renderPage(pageIndex)
    if (!canvas || layout.perPage === 0) return
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = `namnbrickor-sida-${pageIndex + 1}.png`
    a.click()
  }

  const downloadAll = () => {
    for (let p = 0; p < pageCount; p++) downloadPage(p)
    // restore the visible page render
    renderPage(page)
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

  const start = page * layout.perPage
  const previewBadges = badges.slice(start, start + layout.perPage)

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
        <span>Allt sker lokalt i din webbläsare. Inga namn eller data laddas upp någonstans.</span>
      </div>

      <canvas ref={canvasRef} className="hidden" />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Names input */}
        <div>
          <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
            Namn (ett per rad, valfri undertext efter &quot;{delimiter}&quot;)
          </label>
          <textarea
            value={namesText}
            onChange={(e) => setNamesText(e.target.value)}
            rows={6}
            placeholder={`Anna Andersson | Projektledare\nBjörn Berg | Utvecklare\nCecilia Ceder`}
            className="w-full resize-y rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 font-mono text-sm text-gray-900 dark:text-gray-100 hc:text-white"
          />
        </div>

        {/* Title + common subtitle */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[12rem]">
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Gemensam rubrik (t.ex. event)</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="T.ex. Konferens 2026"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            />
          </div>
          <div className="flex-1 min-w-[12rem]">
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Gemensam undertext (om ingen anges per rad)</label>
            <input
              type="text"
              value={commonSubtitle}
              onChange={(e) => setCommonSubtitle(e.target.value)}
              placeholder="T.ex. företag/organisation"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            />
          </div>
        </div>

        {/* Size settings */}
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Brickstorlek</label>
            <select
              value={preset}
              onChange={(e) => setPreset(e.target.value as PresetKey)}
              className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            >
              {(Object.keys(PRESETS) as PresetKey[]).map((k) => (
                <option key={k} value={k}>
                  {PRESETS[k].label}
                </option>
              ))}
            </select>
          </div>
          {preset === 'custom' && (
            <>
              {numField('Bredd (mm)', customW, (n) => setCustomW(n), { min: 1, max: 200 })}
              {numField('Höjd (mm)', customH, (n) => setCustomH(n), { min: 1, max: 200 })}
            </>
          )}
          {numField('Mellanrum (mm)', gap, (n) => setGap(Math.max(0, n)), { min: 0, max: 50 })}
          {numField('Arkmarginal (mm)', margin, (n) => setMargin(Math.max(0, n)), { min: 0, max: 50 })}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 py-1 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input
              type="checkbox"
              checked={showCutLines}
              onChange={(e) => setShowCutLines(e.target.checked)}
              className="h-4 w-4"
            />
            Visa skärlinjer
          </label>
        </div>

        {/* Count summary */}
        <div className="flex items-center gap-3 rounded-lg border border-blue-200 dark:border-blue-900 hc:border-white bg-blue-50 dark:bg-blue-950/30 hc:bg-black p-3 text-sm text-blue-900 dark:text-blue-200 hc:text-white">
          <IdCard className="h-4 w-4 shrink-0" />
          {layout.perPage > 0 ? (
            <span>
              <strong>{badges.length} brickor</strong> · {layout.perPage} per A4-ark ({layout.cols} × {layout.rows}) ·{' '}
              <strong>{pageCount} sida{pageCount === 1 ? '' : 'r'}</strong>
            </span>
          ) : (
            <span>Ingen bricka får plats — minska storlek, mellanrum eller marginal.</span>
          )}
        </div>

        {/* Page selector */}
        {pageCount > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">Sida:</span>
            {Array.from({ length: pageCount }).map((_, p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-8 w-8 rounded-lg border text-sm transition-colors ${
                  p === page
                    ? 'border-blue-600 bg-blue-600 text-white hc:bg-white hc:text-black'
                    : 'border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 text-gray-700 dark:text-gray-300 hc:text-white hover:border-blue-400'
                }`}
              >
                {p + 1}
              </button>
            ))}
          </div>
        )}

        {/* Preview (DOM) */}
        {layout.perPage > 0 && badges.length > 0 && (
          <div className="rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white p-2">
            <div
              className="relative mx-auto w-full border border-gray-300"
              style={{ aspectRatio: `${SHEET.width} / ${SHEET.height}`, maxWidth: 360 }}
            >
              {previewBadges.map((badge, i) => {
                const c = i % layout.cols
                const r = Math.floor(i / layout.cols)
                return (
                  <div
                    key={i}
                    className="absolute flex flex-col overflow-hidden rounded-[2px] border border-blue-900 bg-white"
                    style={{
                      left: `${((layout.offsetX + c * (badgeW + gap)) / SHEET.width) * 100}%`,
                      top: `${((layout.offsetY + r * (badgeH + gap)) / SHEET.height) * 100}%`,
                      width: `${(badgeW / SHEET.width) * 100}%`,
                      height: `${(badgeH / SHEET.height) * 100}%`,
                    }}
                  >
                    {title.trim() && (
                      <div className="truncate bg-blue-900 px-0.5 text-center text-white" style={{ fontSize: '4px', lineHeight: 1.6 }}>
                        {title.trim()}
                      </div>
                    )}
                    <div className="flex flex-1 flex-col items-center justify-center px-0.5 text-center leading-tight">
                      <div className="w-full truncate font-bold text-gray-900" style={{ fontSize: '6px' }}>
                        {badge.name}
                      </div>
                      {badge.subtitle && (
                        <div className="w-full truncate text-gray-500" style={{ fontSize: '4px' }}>
                          {badge.subtitle}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Export */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => downloadPage(page)}
            disabled={layout.perPage === 0 || badges.length === 0}
            className="flex-1 min-w-[12rem] flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            Ladda ner sida {page + 1} (PNG, 300 DPI)
          </button>
          {pageCount > 1 && (
            <button
              onClick={downloadAll}
              disabled={badges.length === 0}
              className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 dark:border-blue-500 hc:border-white px-4 py-2.5 font-medium text-blue-700 dark:text-blue-300 hc:text-white transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/30 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download className="h-4 w-4" />
              Ladda ner alla {pageCount} sidor
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
