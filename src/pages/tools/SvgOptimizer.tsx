import { useState, useRef, useMemo } from 'react'
import { Download, Copy, Check, ShieldCheck, Upload, Sparkles } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

interface Options {
  removeMeta: boolean
  roundDecimals: boolean
  collapseWhitespace: boolean
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

// Byte-längd (UTF-8), inte teckenantal — matchar filstorlek
function byteLength(str: string): number {
  return new TextEncoder().encode(str).length
}

function optimizeSvg(input: string, opts: Options): string {
  let svg = input

  if (opts.removeMeta) {
    // XML-kommentarer
    svg = svg.replace(/<!--[\s\S]*?-->/g, '')
    // <metadata>…</metadata>
    svg = svg.replace(/<metadata[\s\S]*?<\/metadata>/gi, '')
    // <?xml … ?> processing instructions
    svg = svg.replace(/<\?[\s\S]*?\?>/g, '')
    // <!DOCTYPE …>
    svg = svg.replace(/<!DOCTYPE[^>]*>/gi, '')
    // Redigerarspecifika element (sodipodi:namedview m.fl.)
    svg = svg.replace(/<(sodipodi|inkscape)[^>]*?(\/>|>[\s\S]*?<\/(sodipodi|inkscape)[^>]*>)/gi, '')
    // Redigerarspecifika namespace-deklarationer
    svg = svg.replace(/\s+xmlns:(inkscape|sodipodi|dc|cc|rdf|xlink|serif)="[^"]*"/gi, '')
    // Redigerarspecifika attribut (inkscape:label, sodipodi:role, …)
    svg = svg.replace(/\s+(inkscape|sodipodi|dc|cc|rdf|serif):[\w-]+="[^"]*"/gi, '')
  }

  if (opts.roundDecimals) {
    // Runda av tal med fler än 2 decimaler
    svg = svg.replace(/-?\d*\.\d+/g, (m) => {
      const n = parseFloat(m)
      if (!Number.isFinite(n)) return m
      const rounded = Math.round(n * 100) / 100
      // Ta bort onödiga efterföljande nollor
      return String(rounded)
    })
  }

  // Tomma attribut (attr="")
  svg = svg.replace(/\s+[\w:-]+=""/g, '')

  if (opts.collapseWhitespace) {
    // Mellanslag mellan taggar bort
    svg = svg.replace(/>\s+</g, '><')
    // Nyrader och tabbar → mellanslag, sedan kollapsa
    svg = svg.replace(/[\r\n\t]+/g, ' ')
    svg = svg.replace(/ {2,}/g, ' ')
  }

  return svg.trim()
}

export default function SvgOptimizer() {
  const { t } = useLanguage()
  const translation = t.tools['svg-optimering']

  const [input, setInput] = useState('')
  const [copied, setCopied] = useState(false)
  const [opts, setOpts] = useState<Options>({
    removeMeta: true,
    roundDecimals: true,
    collapseWhitespace: true,
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const output = useMemo(
    () => (input.trim() ? optimizeSvg(input, opts) : ''),
    [input, opts],
  )

  const originalSize = byteLength(input)
  const optimizedSize = byteLength(output)
  const saved = originalSize > 0 ? originalSize - optimizedSize : 0
  const savedPct = originalSize > 0 ? (saved / originalSize) * 100 : 0

  const handleFile = async (file: File) => {
    const text = await file.text()
    setInput(text)
  }

  const copy = async () => {
    if (!output) return
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const download = () => {
    if (!output) return
    const blob = new Blob([output], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'optimerad.svg'
    a.click()
    URL.revokeObjectURL(url)
  }

  const toggle = (key: keyof Options) =>
    setOpts((o) => ({ ...o, [key]: !o[key] }))

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
        <span>Allt sker lokalt i din webbläsare. Din SVG laddas aldrig upp någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs text-gray-500 dark:text-gray-400">SVG-kod</label>
            <button
              onClick={() => inputRef.current?.click()}
              className="flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Upload className="h-3.5 w-3.5" />
              Ladda upp .svg
            </button>
            <input
              ref={inputRef}
              type="file"
              accept=".svg,image/svg+xml"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }}
            />
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Klistra in din SVG-markup här…"
            spellCheck={false}
            className="h-40 w-full resize-y rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100 hc:text-white"
          />
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input type="checkbox" checked={opts.removeMeta} onChange={() => toggle('removeMeta')} className="h-4 w-4" />
            Ta bort metadata &amp; kommentarer
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input type="checkbox" checked={opts.roundDecimals} onChange={() => toggle('roundDecimals')} className="h-4 w-4" />
            Runda av decimaler (2)
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input type="checkbox" checked={opts.collapseWhitespace} onChange={() => toggle('collapseWhitespace')} className="h-4 w-4" />
            Ta bort blanksteg
          </label>
        </div>

        {/* Size summary */}
        {input.trim() && (
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-blue-200 dark:border-blue-900 hc:border-white bg-blue-50 dark:bg-blue-950/30 hc:bg-black p-3 text-sm text-blue-900 dark:text-blue-200 hc:text-white">
            <Sparkles className="h-4 w-4 shrink-0" />
            <span>
              <strong>{formatBytes(originalSize)}</strong> → <strong>{formatBytes(optimizedSize)}</strong>
            </span>
            <span className={saved >= 0 ? 'font-semibold text-green-700 dark:text-green-400 hc:text-white' : 'font-semibold text-red-600 dark:text-red-400'}>
              {saved >= 0 ? '−' : '+'}{Math.abs(savedPct).toFixed(1)}% ({formatBytes(Math.abs(saved))})
            </span>
          </div>
        )}

        {/* Output */}
        <div className="space-y-2">
          <label className="block text-xs text-gray-500 dark:text-gray-400">Optimerad SVG</label>
          <textarea
            value={output}
            readOnly
            placeholder="Resultatet visas här…"
            spellCheck={false}
            className="h-40 w-full resize-y rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 font-mono text-xs text-gray-900 dark:text-gray-100 hc:text-white"
          />
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={copy}
            disabled={!output}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2.5 font-medium text-gray-800 dark:text-gray-100 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? 'Kopierat!' : 'Kopiera'}
          </button>
          <button
            onClick={download}
            disabled={!output}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            Ladda ner .svg
          </button>
        </div>
      </div>
    </div>
  )
}
