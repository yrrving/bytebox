import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, ShieldCheck, Barcode as BarcodeIcon } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type BarcodeFormat = 'CODE128' | 'CODE39' | 'EAN13' | 'EAN8' | 'UPC' | 'ITF14'

const FORMATS: { value: BarcodeFormat; label: string }[] = [
  { value: 'CODE128', label: 'CODE128 (text & siffror)' },
  { value: 'CODE39', label: 'CODE39 (text & siffror)' },
  { value: 'EAN13', label: 'EAN-13 (12–13 siffror)' },
  { value: 'EAN8', label: 'EAN-8 (7–8 siffror)' },
  { value: 'UPC', label: 'UPC-A (11–12 siffror)' },
  { value: 'ITF14', label: 'ITF-14 (13–14 siffror)' },
]

const FORMAT_HINTS: Record<BarcodeFormat, string> = {
  CODE128: 'Klarar bokstäver, siffror och de flesta tecken.',
  CODE39: 'Versaler, siffror och några specialtecken (- . $ / + %).',
  EAN13: 'Ange 12 siffror – kontrollsiffran räknas ut automatiskt (eller 13 siffror).',
  EAN8: 'Ange 7 siffror – kontrollsiffran räknas ut automatiskt (eller 8 siffror).',
  UPC: 'Ange 11 siffror – kontrollsiffran räknas ut automatiskt (eller 12 siffror).',
  ITF14: 'Ange 13 siffror – kontrollsiffran räknas ut automatiskt (eller 14 siffror). Jämnt antal siffror krävs.',
}

const DEFAULT_VALUES: Record<BarcodeFormat, string> = {
  CODE128: 'BYTEBOX-123',
  CODE39: 'BYTEBOX123',
  EAN13: '400638133393',
  EAN8: '9638507',
  UPC: '03600029145',
  ITF14: '1540014128876',
}

export default function BarcodeGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['streckkod']

  const [value, setValue] = useState('BYTEBOX-123')
  const [format, setFormat] = useState<BarcodeFormat>('CODE128')
  const [displayValue, setDisplayValue] = useState(true)
  const [barWidth, setBarWidth] = useState(2)
  const [height, setHeight] = useState(100)
  const [error, setError] = useState('')
  const [rendered, setRendered] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  const render = useCallback(async () => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (value.trim() === '') {
      setError('')
      setRendered(false)
      const ctx = canvas.getContext('2d')
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      return
    }

    try {
      // Laddas bara när verktyget faktiskt används (håller huvudbundeln liten)
      const JsBarcode = (await import('jsbarcode')).default
      JsBarcode(canvas, value, {
        format,
        displayValue,
        width: barWidth,
        height,
        margin: 10,
        background: '#ffffff',
        lineColor: '#000000',
        font: 'monospace',
        fontSize: 18,
      })
      setError('')
      setRendered(true)
    } catch (err) {
      setRendered(false)
      const message = err instanceof Error ? err.message : String(err)
      setError(
        `Ogiltigt värde för ${format}. ${FORMAT_HINTS[format]}` +
          (message ? ` (${message})` : ''),
      )
    }
  }, [value, format, displayValue, barWidth, height])

  useEffect(() => {
    render()
  }, [render])

  const changeFormat = (next: BarcodeFormat) => {
    setFormat(next)
    // Fyll på med ett giltigt exempelvärde när man byter till ett strikt format
    setValue((current) => (current.trim() === '' ? DEFAULT_VALUES[next] : current))
  }

  const downloadPng = () => {
    const canvas = canvasRef.current
    if (!canvas || !rendered) return
    const a = document.createElement('a')
    a.href = canvas.toDataURL('image/png')
    a.download = `streckkod-${format}.png`
    a.click()
  }

  const downloadSvg = async () => {
    if (value.trim() === '') return
    try {
      const JsBarcode = (await import('jsbarcode')).default
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      JsBarcode(svg, value, {
        format,
        displayValue,
        width: barWidth,
        height,
        margin: 10,
        background: '#ffffff',
        lineColor: '#000000',
        font: 'monospace',
        fontSize: 18,
      })
      const source = new XMLSerializer().serializeToString(svg)
      const blob = new Blob(['<?xml version="1.0" encoding="UTF-8"?>\n' + source], {
        type: 'image/svg+xml',
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `streckkod-${format}.svg`
      a.click()
      URL.revokeObjectURL(url)
    } catch {
      setError(`Kunde inte skapa SVG. Kontrollera att värdet är giltigt för ${format}.`)
    }
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
        <span>Allt sker lokalt i din webbläsare. Ingen text laddas upp någonstans.</span>
      </div>

      {/* Input */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-900 dark:text-white">Värde</label>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Skriv text eller siffror…"
            spellCheck={false}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-2.5 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Format</label>
            <select
              value={format}
              onChange={(e) => changeFormat(e.target.value as BarcodeFormat)}
              className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            >
              {FORMATS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
              Streckbredd: {barWidth}
            </label>
            <input
              type="range"
              min={1}
              max={4}
              step={0.5}
              value={barWidth}
              onChange={(e) => setBarWidth(Number(e.target.value))}
              className="w-36 align-middle"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
              Höjd: {height}px
            </label>
            <input
              type="range"
              min={40}
              max={200}
              step={10}
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
              className="w-36 align-middle"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input
              type="checkbox"
              checked={displayValue}
              onChange={(e) => setDisplayValue(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600"
            />
            Visa text under koden
          </label>
        </div>

        <p className="flex items-start gap-1.5 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
          <BarcodeIcon className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          {FORMAT_HINTS[format]}
        </p>
      </div>

      {error && (
        <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}

      {/* Output */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-4">
        <div className="flex items-center justify-center rounded-lg bg-white p-4">
          <canvas ref={canvasRef} className={rendered ? '' : 'hidden'} />
          {!rendered && (
            <span className="py-8 text-sm text-gray-400">Streckkoden visas här</span>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={downloadPng}
            disabled={!rendered}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40"
          >
            <Download className="h-4 w-4" />
            Ladda ner PNG
          </button>
          <button
            onClick={downloadSvg}
            disabled={!rendered}
            className="inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-4 py-2.5 font-medium text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
          >
            <Download className="h-4 w-4" />
            Ladda ner SVG
          </button>
        </div>
      </div>
    </div>
  )
}
