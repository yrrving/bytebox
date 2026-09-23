import { useState, useRef, useEffect, useCallback } from 'react'
import {
  Download, Plus, X, GripVertical, Loader2, ShieldCheck, FileSignature, Eraser,
  Upload, ZoomIn, ZoomOut, Minus, Bold, FileUp, Layers, PenTool, PenLine,
} from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'
import ErrorNotice from '../../components/ErrorNotice'
import { useObjectUrls } from '../../hooks/useObjectUrls'
import type { PDFDocumentProxy } from 'pdfjs-dist'
import type { Translation } from '../../data/translations'

// Three PDF operations that used to be three separate tools (pdf-verktyg,
// pdf-signering, fyll-i-pdf) — merged into one tool with a tab switcher,
// since they're all "do something to a PDF, locally, then download it" and
// splitting them made the tool list longer without adding real clarity.
// All three tabs stay mounted (hidden via CSS, not unmounted) so switching
// tabs never loses work in progress or re-inits a canvas.
type Tab = 'merge' | 'sign' | 'fill'

// ── Shared: PdfSign ──────────────────────────────────────────────────────
type Position = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' | 'top-center' | 'top-right'

const POSITIONS: { id: Position; label: string }[] = [
  { id: 'bottom-left', label: 'Nedre vänster' },
  { id: 'bottom-center', label: 'Nederkant mitten' },
  { id: 'bottom-right', label: 'Nedre höger' },
  { id: 'top-left', label: 'Övre vänster' },
  { id: 'top-center', label: 'Överkant mitten' },
  { id: 'top-right', label: 'Övre höger' },
]

const SIG_W = 400
const SIG_H = 160

// ── Shared: FillPdf ───────────────────────────────────────────────────────
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

// ── Shared: PdfTools (merge) ──────────────────────────────────────────────
interface PdfFile {
  name: string
  file: File
  pages: number
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

const inputCls =
  'rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white'
const labelCls = 'mb-1 block text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200'

export default function PdfTools() {
  const { t } = useLanguage()
  const translation = t.tools['pdf-verktyg']
  const pt = t.pdfTools

  const [tab, setTab] = useState<Tab>('merge')

  const TABS: { id: Tab; label: string; icon: typeof Layers }[] = [
    { id: 'merge', label: pt?.tabMerge ?? 'Slå ihop', icon: Layers },
    { id: 'sign', label: pt?.tabSign ?? 'Signera', icon: PenTool },
    { id: 'fill', label: pt?.tabFill ?? 'Fyll i', icon: PenLine },
  ]

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-300 hc:text-gray-200">{translation?.description}</p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 hc:text-gray-200 italic">{translation.hint}</p>
        )}
      </div>

      <div className="flex items-start gap-2.5 rounded-xl border border-green-300 dark:border-green-800/60 hc:border-white bg-green-50 dark:bg-green-900/20 hc:bg-black p-4 text-sm text-green-800 dark:text-green-200 hc:text-white">
        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
        <p>{pt?.privacyNote ?? 'Allt sker lokalt i din webbläsare. Dokumentet laddas aldrig upp någonstans.'}</p>
      </div>

      <div className="flex gap-1 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-1">
        {TABS.map((tb) => {
          const Icon = tb.icon
          return (
            <button
              key={tb.id}
              onClick={() => setTab(tb.id)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                tab === tb.id
                  ? 'bg-white dark:bg-gray-700 hc:bg-white hc:text-black text-blue-600 dark:text-blue-300 shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hc:text-gray-200 hover:text-gray-700 dark:hover:text-gray-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {tb.label}
            </button>
          )
        })}
      </div>

      <div className={tab === 'merge' ? '' : 'hidden'}>
        <MergeView pt={pt} />
      </div>
      <div className={tab === 'sign' ? '' : 'hidden'}>
        <SignView />
      </div>
      <div className={tab === 'fill' ? '' : 'hidden'}>
        <FillView fp={t.fillPdf} />
      </div>
    </div>
  )
}

// ── Tab: Slå ihop (was PdfTools) ──────────────────────────────────────────
function MergeView({ pt }: { pt: Translation['pdfTools'] }) {
  const [files, setFiles] = useState<PdfFile[]>([])
  const [merging, setMerging] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { createUrl } = useObjectUrls()

  const addFiles = async (fileList: FileList) => {
    const newFiles: PdfFile[] = []
    for (const file of Array.from(fileList)) {
      if (file.type !== 'application/pdf') continue
      const pages = Math.max(1, Math.round(file.size / 50000))
      newFiles.push({ name: file.name, file, pages })
    }
    setFiles((prev) => [...prev, ...newFiles])
    setResult(null)
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
    setResult(null)
  }

  const moveFile = (from: number, to: number) => {
    if (to < 0 || to >= files.length) return
    setFiles((prev) => {
      const next = [...prev]
      const [item] = next.splice(from, 1)
      next.splice(to, 0, item)
      return next
    })
  }

  const mergePdfs = async () => {
    if (files.length < 2) return
    setMerging(true)
    setError('')
    setResult(null)
    try {
      const { PDFDocument } = await import('pdf-lib')
      const merged = await PDFDocument.create()
      for (const f of files) {
        const doc = await PDFDocument.load(await f.file.arrayBuffer())
        const pages = await merged.copyPages(doc, doc.getPageIndices())
        pages.forEach((page) => merged.addPage(page))
      }
      const bytes = await merged.save()
      setResult(createUrl(new Blob([bytes as BlobPart], { type: 'application/pdf' })))
    } catch {
      setError(pt?.mergeError || 'Kunde inte slå ihop filerna. Någon av dem kan vara skadad eller lösenordsskyddad.')
    } finally {
      setMerging(false)
    }
  }

  const downloadResult = () => {
    if (!result) return
    const a = document.createElement('a')
    a.href = result
    a.download = 'merged.pdf'
    a.click()
  }

  const downloadSingle = (file: PdfFile) => {
    const url = URL.createObjectURL(file.file)
    const a = document.createElement('a')
    a.href = url
    a.download = file.name
    a.click()
    URL.revokeObjectURL(url)
  }

  const totalSize = files.reduce((sum, f) => sum + f.file.size, 0)

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((f, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 p-3"
            >
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => moveFile(i, i - 1)}
                  disabled={i === 0}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-30"
                >
                  <GripVertical className="h-3 w-3" />
                </button>
                <button
                  onClick={() => moveFile(i, i + 1)}
                  disabled={i === files.length - 1}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-30"
                >
                  <GripVertical className="h-3 w-3" />
                </button>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{f.name}</div>
                <div className="text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200">{formatSize(f.file.size)}</div>
              </div>
              <button onClick={() => downloadSingle(f)} className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                <Download className="h-4 w-4" />
              </button>
              <button onClick={() => removeFile(i)} className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
          <div className="text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200">
            {files.length} {pt?.files || 'filer'} — {formatSize(totalSize)}
          </div>
        </div>
      )}

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files) }}
        className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400"
      >
        <Plus className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        <p className="text-gray-600 dark:text-gray-300 hc:text-gray-200">{pt?.upload || 'Klicka eller dra hit PDF-filer'}</p>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,application/pdf"
        multiple
        className="hidden"
        onChange={(e) => { if (e.target.files) addFiles(e.target.files) }}
      />

      {files.length >= 2 && (
        <button
          onClick={mergePdfs}
          disabled={merging}
          className="w-full rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          {merging ? (pt?.merging || 'Sammanfogar...') : (pt?.merge || 'Sammanfoga PDF-filer')}
        </button>
      )}

      <ErrorNotice message={error} />

      {result && (
        <button
          onClick={downloadResult}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
        >
          <Download className="h-4 w-4" />
          {pt?.download || 'Ladda ner sammanslagen PDF'}
        </button>
      )}
    </div>
  )
}

// ── Tab: Signera (was PdfSign) ────────────────────────────────────────────
function SignView() {
  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null)
  const [pdfName, setPdfName] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [position, setPosition] = useState<Position>('bottom-right')
  const [sizePct, setSizePct] = useState(30)
  const [typedName, setTypedName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const hasDrawnRef = useRef(false)
  const drawRef = useRef<{ active: boolean; lastX: number; lastY: number }>({ active: false, lastX: 0, lastY: 0 })

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = SIG_W
    canvas.height = SIG_H
    ctx.clearRect(0, 0, SIG_W, SIG_H)
    hasDrawnRef.current = false
  }, [])

  useEffect(() => { clearCanvas() }, [clearCanvas])

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = getPos(e)
    drawRef.current = { active: true, lastX: p.x, lastY: p.y }
    e.currentTarget.setPointerCapture(e.pointerId)
    const ctx = canvasRef.current?.getContext('2d')
    if (ctx) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2)
      ctx.fillStyle = '#111827'
      ctx.fill()
    }
    hasDrawnRef.current = true
  }

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!drawRef.current.active) return
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const p = getPos(e)
    ctx.strokeStyle = '#111827'
    ctx.lineWidth = 2.8
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.beginPath()
    ctx.moveTo(drawRef.current.lastX, drawRef.current.lastY)
    ctx.lineTo(p.x, p.y)
    ctx.stroke()
    drawRef.current.lastX = p.x
    drawRef.current.lastY = p.y
    hasDrawnRef.current = true
  }

  const onPointerUp = () => { drawRef.current.active = false }

  const renderTypedName = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, SIG_W, SIG_H)
    const name = typedName.trim()
    if (!name) { hasDrawnRef.current = false; return }
    ctx.fillStyle = '#111827'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    let fontSize = 64
    ctx.font = `italic ${fontSize}px "Segoe Script", "Brush Script MT", "Comic Sans MS", cursive`
    while (ctx.measureText(name).width > SIG_W - 30 && fontSize > 16) {
      fontSize -= 2
      ctx.font = `italic ${fontSize}px "Segoe Script", "Brush Script MT", "Comic Sans MS", cursive`
    }
    ctx.fillText(name, SIG_W / 2, SIG_H / 2)
    hasDrawnRef.current = true
  }

  const handlePdf = async (file: File) => {
    setError('')
    setDone(false)
    if (file.type !== 'application/pdf' && !/\.pdf$/i.test(file.name)) {
      setError('Välj en PDF-fil.')
      return
    }
    try {
      const buf = await file.arrayBuffer()
      const bytes = new Uint8Array(buf)
      const { PDFDocument } = await import('pdf-lib')
      const doc = await PDFDocument.load(bytes, { ignoreEncryption: false })
      const count = doc.getPageCount()
      setPdfBytes(bytes)
      setPdfName(file.name.replace(/\.pdf$/i, ''))
      setPageCount(count)
      setPageNum(1)
    } catch {
      setPdfBytes(null)
      setPageCount(0)
      setError('Kunde inte läsa PDF:en. Den kan vara skadad eller lösenordsskyddad/krypterad.')
    }
  }

  const signAndDownload = async () => {
    setError('')
    setDone(false)
    if (!pdfBytes) { setError('Ladda upp en PDF först.'); return }
    if (!hasDrawnRef.current) { setError('Rita en signatur (eller skriv ett namn) först.'); return }
    const canvas = canvasRef.current
    if (!canvas) return

    setBusy(true)
    try {
      const { PDFDocument } = await import('pdf-lib')
      const doc = await PDFDocument.load(pdfBytes, { ignoreEncryption: false })
      const pages = doc.getPages()
      const idx = Math.min(Math.max(pageNum - 1, 0), pages.length - 1)
      const page = pages[idx]
      const { width: pw, height: ph } = page.getSize()

      const pngDataUrl = canvas.toDataURL('image/png')
      const pngImage = await doc.embedPng(pngDataUrl)

      const sigW = (sizePct / 100) * pw
      const sigH = sigW * (SIG_H / SIG_W)

      const margin = Math.min(pw, ph) * 0.05
      const isRight = position.endsWith('right')
      const isCenter = position.endsWith('center')
      const isTop = position.startsWith('top')

      let x: number
      if (isCenter) x = (pw - sigW) / 2
      else if (isRight) x = pw - sigW - margin
      else x = margin

      let y: number
      if (isTop) y = ph - sigH - margin
      else y = margin

      page.drawImage(pngImage, { x, y, width: sigW, height: sigH })

      const out = await doc.save()
      const blob = new Blob([out as BlobPart], { type: 'application/pdf' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${pdfName || 'dokument'}-signerad.pdf`
      a.click()
      URL.revokeObjectURL(url)
      setDone(true)
    } catch {
      setError('Något gick fel när PDF:en signerades. Filen kan vara krypterad eller skadad.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
      <div
        onClick={() => !busy && inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f && !busy) handlePdf(f) }}
        className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-6 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
      >
        <FileSignature className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        <p className="text-gray-600 dark:text-gray-300 hc:text-gray-200">
          {pdfBytes ? `Vald fil: ${pdfName}.pdf (${pageCount} sidor) – klicka för att byta` : 'Klicka eller dra hit en PDF'}
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={(e) => { const f = e.target.files?.[0]; if (f) handlePdf(f) }}
        />
      </div>

      <div>
        <div className="mb-1 flex items-center justify-between">
          <label className={labelCls}>Rita din signatur</label>
          <button
            onClick={clearCanvas}
            type="button"
            className="flex items-center gap-1 rounded-md border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-2 py-1 text-xs text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Eraser className="h-3 w-3" /> Rensa
          </button>
        </div>
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="w-full touch-none rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white"
          style={{ aspectRatio: `${SIG_W} / ${SIG_H}`, cursor: 'crosshair' }}
        />
        <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200">
          Rita med musen eller fingret. Alternativt: skriv ett namn nedan.
        </p>
      </div>

      <div className="flex items-end gap-2">
        <div className="flex-1">
          <label className={labelCls}>Eller skriv ett namn (kursiv stil)</label>
          <input
            type="text"
            value={typedName}
            onChange={(e) => setTypedName(e.target.value)}
            placeholder="För- och efternamn"
            className={`${inputCls} w-full`}
          />
        </div>
        <button
          onClick={renderTypedName}
          type="button"
          disabled={!typedName.trim()}
          className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Använd namn
        </button>
      </div>

      <div className="flex flex-wrap items-end gap-4">
        <div>
          <label className={labelCls}>Sida</label>
          <input
            type="number"
            min={1}
            max={Math.max(pageCount, 1)}
            value={pageNum}
            disabled={!pdfBytes}
            onChange={(e) => { const v = Number(e.target.value) || 1; setPageNum(Math.min(Math.max(v, 1), Math.max(pageCount, 1))) }}
            className={`${inputCls} w-24`}
          />
          {pageCount > 0 && <span className="ml-2 text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200">av {pageCount}</span>}
        </div>

        <div>
          <label className={labelCls}>Placering</label>
          <select value={position} onChange={(e) => setPosition(e.target.value as Position)} className={inputCls}>
            {POSITIONS.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelCls}>Storlek: {sizePct}% av sidbredden</label>
          <input
            type="range"
            min={10}
            max={60}
            step={1}
            value={sizePct}
            onChange={(e) => setSizePct(Number(e.target.value))}
            className="w-44 align-middle"
          />
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">{error}</p>
      )}
      {done && !error && (
        <p className="rounded-lg border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-3 text-sm text-green-700 dark:text-green-400">
          Klart! Den signerade PDF:en har laddats ner.
        </p>
      )}

      <button
        onClick={signAndDownload}
        disabled={!pdfBytes || busy}
        className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {busy ? (<><Loader2 className="h-4 w-4 animate-spin" /> Signerar…</>) : (<><Download className="h-4 w-4" /> Signera & ladda ner</>)}
      </button>
    </div>
  )
}

// ── Tab: Fyll i (was FillPdf) ──────────────────────────────────────────────
function FillView({ fp }: { fp: Translation['fillPdf'] }) {
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

  useEffect(() => {
    const doc = pdfDocRef.current
    if (!doc || pageSizes.length === 0) return
    let cancelled = false
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
        try { await task.promise } catch { /* cancelled renders reject — safe to ignore */ }
      }
    })()
    return () => { cancelled = true; tasks.forEach((task) => task.cancel()) }
  }, [scale, pageSizes])

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
    if (selectedId !== null) {
      ;(document.activeElement as HTMLElement | null)?.blur?.()
      setSelectedId(null)
      return
    }
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
    return () => { window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp) }
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
    <div className="space-y-4">
      {!pdfBytes && (
        <div
          onClick={() => !loadingPdf && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f && !loadingPdf) handlePdf(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-12 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {loadingPdf ? <Loader2 className="h-8 w-8 animate-spin text-gray-600 dark:text-gray-300" /> : <Upload className="h-8 w-8 text-gray-600 dark:text-gray-300" />}
          <p className="text-gray-600 dark:text-gray-300 hc:text-gray-200">
            {loadingPdf ? (fp?.loading ?? 'Öppnar PDF…') : (fp?.upload ?? 'Klicka eller dra hit en PDF')}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handlePdf(f); e.target.value = '' }}
          />
        </div>
      )}

      {error && (
        <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">{error}</p>
      )}

      {pdfBytes && (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-3">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hc:text-white">
              <FileUp className="h-4 w-4 shrink-0" />
              <span className="truncate max-w-[16rem]">{pdfName}.pdf</span>
              <button onClick={() => { setPdfBytes(null); resetDoc() }} className="text-xs text-blue-600 dark:text-blue-300 hover:underline">
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

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 hc:text-gray-200">
            {fp?.hintClick ?? 'Klicka var som helst på sidan för att lägga till text.'}
          </p>

          <div className="space-y-6">
            {pageSizes.map((size, pageIndex) => (
              <div key={pageIndex} className="flex flex-col items-center gap-2">
                <span className="text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200">
                  {(fp?.pageLabel ?? 'Sida {n} av {m}').replace('{n}', String(pageIndex + 1)).replace('{m}', String(pageSizes.length))}
                </span>
                <div
                  ref={(el) => { pageBoxRefs.current[pageIndex] = el }}
                  onClick={(e) => addItemAt(pageIndex, e)}
                  data-testid="pdf-page"
                  className="relative shadow-md"
                  style={{ width: size.width * scale, height: size.height * scale, cursor: 'text' }}
                >
                  <canvas ref={(el) => { canvasRefs.current[pageIndex] = el }} className="pointer-events-none absolute inset-0 rounded-sm" />
                  {items.filter((it) => it.page === pageIndex).map((item) => (
                    <div key={item.id} style={{ position: 'absolute', left: `${item.xPct * 100}%`, top: `${item.yPctFromTop * 100}%` }}>
                      {selectedId === item.id && (
                        <div
                          className="absolute -top-8 left-0 flex items-center gap-0.5 whitespace-nowrap rounded-md border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-1 py-1 shadow-lg"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span
                            onPointerDown={(e) => onDragStart(e, item)}
                            className="cursor-move rounded p-1 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
                            aria-label={fp?.drag ?? 'Flytta'}
                          >
                            <GripVertical className="h-3.5 w-3.5" />
                          </span>
                          <button
                            onClick={() => updateItem(item.id, { fontSize: Math.max(MIN_FONT, item.fontSize - 2) })}
                            aria-label={fp?.smaller ?? 'Mindre text'}
                            className="rounded p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center text-[11px] text-gray-600 dark:text-gray-300">{item.fontSize}</span>
                          <button
                            onClick={() => updateItem(item.id, { fontSize: Math.min(MAX_FONT, item.fontSize + 2) })}
                            aria-label={fp?.bigger ?? 'Större text'}
                            className="rounded p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => updateItem(item.id, { bold: !item.bold })}
                            aria-label={fp?.boldToggle ?? 'Fet stil'}
                            aria-pressed={item.bold}
                            className={`rounded p-1 ${item.bold ? 'bg-blue-600 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                          >
                            <Bold className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => deleteItem(item.id)}
                            aria-label={fp?.deleteText ?? 'Ta bort'}
                            className="rounded p-1 text-gray-600 dark:text-gray-300 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/40"
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      )}
                      <textarea
                        value={item.text}
                        onFocus={() => setSelectedId(item.id)}
                        onBlur={() => { if (!item.text.trim()) deleteItem(item.id) }}
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
            {busy ? (<><Loader2 className="h-4 w-4 animate-spin" /> {fp?.saving ?? 'Sparar…'}</>) : (<><Download className="h-4 w-4" /> {fp?.save ?? 'Spara PDF'}</>)}
          </button>
        </>
      )}
    </div>
  )
}
