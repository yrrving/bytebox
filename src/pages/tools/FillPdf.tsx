import { useState, useRef, useEffect } from 'react'
import {
  Upload, ZoomIn, ZoomOut, Download, Loader2, ShieldCheck, GripVertical, X,
  Minus, Plus, Bold, FileUp,
} from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'
import type { PDFDocumentProxy } from 'pdfjs-dist'

type TextItem = {
  id: string
  page: number
  xPct: number
  yPctFromTop: number
  text: string
  fontSize: number
  bold: boolean
}

type PageSize = { width: number; height: number }

const MIN_FONT = 8
const MAX_FONT = 48
const DEFAULT_FONT = 14
const MIN_SCALE = 0.5
const MAX_SCALE = 2.5
const SCALE_STEP = 0.1

async function loadPdfjs() {
  const pdfjsLib = await import('pdfjs-dist')
  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).href
  return pdfjsLib
}

let idCounter = 0
function nextId() {
  idCounter += 1
  return `t${idCounter}`
}

export default function FillPdf() {
  const { t } = useLanguage()
  const translation = t.tools['fyll-i-pdf']
  const fp = t.fillPdf

  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null)
  const [pdfName, setPdfName] = useState('')
  const [pageSizes, setPageSizes] = useState<PageSize[]>([])
  const [scale, setScale] = useState(1.2)
  const [items, setItems] = useState<TextItem[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [loadingPdf, setLoadingPdf] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)
  const pdfDocRef = useRef<PDFDocumentProxy | null>(null)
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([])
  const pageBoxRefs = useRef<(HTMLDivElement | null)[]>([])
  const fitDoneRef = useRef(false)
  const dragRef = useRef<{ id: string; page: number } | null>(null)

  const resetDoc = () => {
    pdfDocRef.current = null
    canvasRefs.current = []
    pageBoxRefs.current = []
    fitDoneRef.current = false
    setPageSizes([])
    setItems([])
    setSelectedId(null)
    setDone(false)
  }

  const handlePdf = async (file: File) => {
    setError('')
    resetDoc()
    if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) {
      setError(fp?.errorType ?? 'Välj en PDF-fil.')
      return
    }
    setLoadingPdf(true)
    try {
      const buf = await file.arrayBuffer()
      const bytes = new Uint8Array(buf)
      const pdfjsLib = await loadPdfjs()
      const doc = await pdfjsLib.getDocument({ data: bytes.slice() }).promise
      pdfDocRef.current = doc
      const sizes: PageSize[] = []
      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i)
        const viewport = page.getViewport({ scale: 1 })
        sizes.push({ width: viewport.width, height: viewport.height })
      }
      setPdfBytes(bytes)
      setPdfName(file.name.replace(/\.pdf$/i, ''))
      setPageSizes(sizes)
    } catch {
      setError(fp?.errorLoad ?? 'Kunde inte läsa PDF:en. Den kan vara skadad eller lösenordsskyddad.')
      setPdfBytes(null)
    } finally {
      setLoadingPdf(false)
    }
  }

  // Render every page's canvas at the current scale.
  useEffect(() => {
    const doc = pdfDocRef.current
    if (!doc || pageSizes.length === 0) return
    let cancelled = false
    // Track in-flight pdf.js render tasks so a re-run (StrictMode double-invoke,
    // rapid zoom changes) can cancel them before reusing the same canvas —
    // pdf.js throws if a canvas is rendered into while already rendering.
    const tasks: { cancel: () => void }[] = []
    ;(async () => {
      for (let i = 1; i <= doc.numPages; i++) {
        if (cancelled) return
        const canvas = canvasRefs.current[i - 1]
        if (!canvas) continue
        const page = await doc.getPage(i)
        if (cancelled) return
        const viewport = page.getViewport({ scale })
        canvas.width = viewport.width
        canvas.height = viewport.height
        const ctx = canvas.getContext('2d')
        if (!ctx) continue
        const task = page.render({ canvasContext: ctx, viewport, canvas })
        tasks.push(task)
        try {
          await task.promise
        } catch {
          // Cancelled renders reject — safe to ignore.
        }
      }
    })()
    return () => {
      cancelled = true
      tasks.forEach((task) => task.cancel())
    }
  }, [scale, pageSizes])

  // Fit the first page to the available viewer width, once per document.
  useEffect(() => {
    if (fitDoneRef.current || pageSizes.length === 0) return
    fitDoneRef.current = true
    const container = pageBoxRefs.current[0]?.parentElement
    const availableWidth = (container?.clientWidth ?? 800) - 32
    const natural = pageSizes[0].width
    const fitted = Math.min(MAX_SCALE, Math.max(MIN_SCALE, availableWidth / natural))
    setScale(Math.round(fitted * 20) / 20)
  }, [pageSizes])

  const addItemAt = (pageIndex: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return
    const box = pageBoxRefs.current[pageIndex]
    if (!box) return
    const rect = box.getBoundingClientRect()
    const xPct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    const yPctFromTop = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
    const id = nextId()
    setItems((prev) => [...prev, { id, page: pageIndex, xPct, yPctFromTop, text: '', fontSize: DEFAULT_FONT, bold: false }])
    setSelectedId(id)
    setDone(false)
  }

  const updateItem = (id: string, patch: Partial<TextItem>) => {
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...patch } : it)))
  }

  const deleteItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id))
    setSelectedId((cur) => (cur === id ? null : cur))
  }

  const onDragStart = (e: React.PointerEvent, item: TextItem) => {
    e.preventDefault()
    e.stopPropagation()
    dragRef.current = { id: item.id, page: item.page }
    setSelectedId(item.id)
  }

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const drag = dragRef.current
      if (!drag) return
      const box = pageBoxRefs.current[drag.page]
      if (!box) return
      const rect = box.getBoundingClientRect()
      const xPct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
      const yPctFromTop = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height))
      updateItem(drag.id, { xPct, yPctFromTop })
    }
    const onUp = () => { dragRef.current = null }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
  }, [])

  const savePdf = async () => {
    if (!pdfBytes) return
    setBusy(true)
    setError('')
    setDone(false)
    try {
      const { PDFDocument, StandardFonts, rgb } = await import('pdf-lib')
      const doc = await PDFDocument.load(pdfBytes.slice(), { ignoreEncryption: false })
      const font = await doc.embedFont(StandardFonts.Helvetica)
      const boldFont = await doc.embedFont(StandardFonts.HelveticaBold)
      const pages = doc.getPages()
      for (const item of items) {
        const text = item.text.trim()
        if (!text) continue
        const page = pages[item.page]
        if (!page) continue
        const { width, height } = page.getSize()
        const chosenFont = item.bold ? boldFont : font
        const lineHeight = item.fontSize * 1.25
        const xPdf = item.xPct * width
        const yTopPdf = item.yPctFromTop * height
        item.text.split('\n').forEach((line, i) => {
          const yBaseline = height - yTopPdf - item.fontSize * 0.85 - i * lineHeight
          page.drawText(line, { x: xPdf, y: yBaseline, size: item.fontSize, font: chosenFont, color: rgb(0, 0, 0) })
        })
      }
      const out = await doc.save()
      const blob = new Blob([out as BlobPart], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${pdfName || 'dokument'}-ifylld.pdf`
      a.click()
      URL.revokeObjectURL(url)
      setDone(true)
    } catch {
      setError(fp?.errorSave ?? 'Något gick fel när PDF:en sparades. Prova igen.')
    } finally {
      setBusy(false)
    }
  }

  const hasText = items.some((it) => it.text.trim())

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      <div className="flex items-start gap-2.5 rounded-xl border border-green-300 dark:border-green-800/60 hc:border-white bg-green-50 dark:bg-green-900/20 hc:bg-black p-4 text-sm text-green-800 dark:text-green-200 hc:text-white">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
        <p>
          {fp?.privacyNote ?? 'Din PDF behandlas helt lokalt i webbläsaren och laddas aldrig upp någonstans. Originalfilen skrivs aldrig över — du laddar ner en ny, ifylld fil.'}
        </p>
      </div>

      {!pdfBytes && (
        <div
          onClick={() => !loadingPdf && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const f = e.dataTransfer.files[0]
            if (f && !loadingPdf) handlePdf(f)
          }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-12 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {loadingPdf ? (
            <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
          ) : (
            <Upload className="h-8 w-8 text-gray-400" />
          )}
          <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
            {loadingPdf ? (fp?.loading ?? 'Öppnar PDF…') : (fp?.upload ?? 'Klicka eller dra hit en PDF')}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handlePdf(f)
              e.target.value = ''
            }}
          />
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}

      {pdfBytes && (
        <>
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hc:text-white">
              <FileUp className="h-4 w-4 shrink-0" />
              <span className="truncate max-w-[16rem]">{pdfName}.pdf</span>
              <button
                onClick={() => { setPdfBytes(null); resetDoc() }}
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                {fp?.changeFile ?? 'byt fil'}
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setScale((s) => Math.max(MIN_SCALE, Math.round((s - SCALE_STEP) * 20) / 20))}
                aria-label={fp?.zoomOut ?? 'Zooma ut'}
                className="rounded-md border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 p-1.5 text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-sm text-gray-600 dark:text-gray-300 hc:text-white">{Math.round(scale * 100)}%</span>
              <button
                onClick={() => setScale((s) => Math.min(MAX_SCALE, Math.round((s + SCALE_STEP) * 20) / 20))}
                aria-label={fp?.zoomIn ?? 'Zooma in'}
                className="rounded-md border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 p-1.5 text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
            {fp?.hintClick ?? 'Klicka var som helst på sidan för att lägga till text.'}
          </p>

          {/* Pages */}
          <div className="space-y-6">
            {pageSizes.map((size, pageIndex) => (
              <div key={pageIndex} className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-400 dark:text-gray-500 hc:text-gray-300">
                  {(fp?.pageLabel ?? 'Sida {n} av {m}').replace('{n}', String(pageIndex + 1)).replace('{m}', String(pageSizes.length))}
                </span>
                <div
                  ref={(el) => { pageBoxRefs.current[pageIndex] = el }}
                  onClick={(e) => addItemAt(pageIndex, e)}
                  data-testid="pdf-page"
                  className="relative shadow-md"
                  style={{ width: size.width * scale, height: size.height * scale, cursor: 'text' }}
                >
                  <canvas
                    ref={(el) => { canvasRefs.current[pageIndex] = el }}
                    className="pointer-events-none absolute inset-0 rounded-sm"
                  />
                  {items.filter((it) => it.page === pageIndex).map((item) => (
                    <div
                      key={item.id}
                      style={{ position: 'absolute', left: `${item.xPct * 100}%`, top: `${item.yPctFromTop * 100}%` }}
                    >
                      {selectedId === item.id && (
                        <div
                          className="absolute -top-8 left-0 flex items-center gap-0.5 whitespace-nowrap rounded-md border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-1 py-1 shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span
                            onPointerDown={(e) => onDragStart(e, item)}
                            className="cursor-move rounded p-1 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                            aria-label={fp?.drag ?? 'Flytta'}
                          >
                            <GripVertical className="h-3.5 w-3.5" />
                          </span>
                          <button
                            onClick={() => updateItem(item.id, { fontSize: Math.max(MIN_FONT, item.fontSize - 2) })}
                            aria-label={fp?.smaller ?? 'Mindre text'}
                            className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-[11px] text-gray-500 dark:text-gray-400">{item.fontSize}</span>
                          <button
                            onClick={() => updateItem(item.id, { fontSize: Math.min(MAX_FONT, item.fontSize + 2) })}
                            aria-label={fp?.bigger ?? 'Större text'}
                            className="rounded p-1 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => updateItem(item.id, { bold: !item.bold })}
                            aria-label={fp?.boldToggle ?? 'Fet stil'}
                            aria-pressed={item.bold}
                            className={`rounded p-1 ${item.bold ? 'bg-blue-600 text-white' : 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                          >
                            <Bold className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => deleteItem(item.id)}
                            aria-label={fp?.deleteText ?? 'Ta bort'}
                            className="rounded p-1 text-gray-500 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/40"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                      <textarea
                        value={item.text}
                        onFocus={() => setSelectedId(item.id)}
                        onBlur={() => {
                          // Clicking elsewhere always places a new box (simplest possible
                          // click-to-write flow), so an empty one left behind when the
                          // user clicks away without typing is just clutter — remove it.
                          if (!item.text.trim()) deleteItem(item.id)
                        }}
                        onChange={(e) => {
                          updateItem(item.id, { text: e.target.value })
                          const el = e.target
                          el.style.height = 'auto'
                          el.style.height = `${el.scrollHeight}px`
                        }}
                        onClick={(e) => e.stopPropagation()}
                        placeholder={fp?.textPlaceholder ?? 'Skriv…'}
                        rows={1}
                        autoFocus={selectedId === item.id && !item.text}
                        className={`resize-none overflow-hidden bg-transparent leading-tight text-black outline-none placeholder:text-gray-400 ${
                          selectedId === item.id ? 'ring-2 ring-blue-500' : 'ring-1 ring-transparent hover:ring-gray-300'
                        } ${item.bold ? 'font-bold' : ''}`}
                        style={{ fontSize: item.fontSize * scale, minWidth: 24, width: `${Math.max(3, item.text.length + 1)}ch` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {done && !error && (
            <p className="rounded-lg border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-3 text-center text-sm text-green-700 dark:text-green-400">
              {fp?.savedDone ?? 'Klart! Den ifyllda PDF:en har laddats ner.'}
            </p>
          )}

          <button
            onClick={savePdf}
            disabled={busy || !hasText}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {busy ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> {fp?.saving ?? 'Sparar…'}
              </>
            ) : (
              <>
                <Download className="h-4 w-4" /> {fp?.save ?? 'Spara PDF'}
              </>
            )}
          </button>
        </>
      )}
    </div>
  )
}
