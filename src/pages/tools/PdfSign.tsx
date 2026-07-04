import { useState, useRef, useEffect, useCallback } from 'react'
import { Download, Loader2, ShieldCheck, FileSignature, Eraser } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

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

export default function PdfSign() {
  const { t } = useLanguage()
  const translation = t.tools['pdf-signering']

  const [pdfBytes, setPdfBytes] = useState<Uint8Array | null>(null)
  const [pdfName, setPdfName] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [position, setPosition] = useState<Position>('bottom-right')
  const [sizePct, setSizePct] = useState(30) // signaturbredd i % av sidans bredd
  const [typedName, setTypedName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const hasDrawnRef = useRef(false)
  const drawRef = useRef<{ active: boolean; lastX: number; lastY: number }>({
    active: false,
    lastX: 0,
    lastY: 0,
  })

  // Initiera / rensa signaturcanvasen
  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    canvas.width = SIG_W
    canvas.height = SIG_H
    ctx.clearRect(0, 0, SIG_W, SIG_H)
    // Genomskinlig bakgrund – rita bara baslinjen som hjälp (renderas ej i PDF eftersom vi
    // exporterar canvasen som är, men baslinjen ritas i eget lager? Enklast: rita ej i canvas)
    hasDrawnRef.current = false
  }, [])

  useEffect(() => {
    clearCanvas()
  }, [clearCanvas])

  const getPos = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const p = getPos(e)
    drawRef.current = { active: true, lastX: p.x, lastY: p.y }
    e.currentTarget.setPointerCapture(e.pointerId)
    // Om användaren börjar rita rensas ett eventuellt typat namn-läge inte, men vi markerar ritning
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

  const onPointerUp = () => {
    drawRef.current.active = false
  }

  // Rita ett typat namn i kursiv stil på canvasen
  const renderTypedName = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, SIG_W, SIG_H)
    const name = typedName.trim()
    if (!name) {
      hasDrawnRef.current = false
      return
    }
    ctx.fillStyle = '#111827'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    let fontSize = 64
    ctx.font = `italic ${fontSize}px "Segoe Script", "Brush Script MT", "Comic Sans MS", cursive`
    // Krymp tills namnet får plats
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
      // Ladda pdf-lib bara när verktyget faktiskt används (håller huvudbundeln liten)
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
    if (!pdfBytes) {
      setError('Ladda upp en PDF först.')
      return
    }
    if (!hasDrawnRef.current) {
      setError('Rita en signatur (eller skriv ett namn) först.')
      return
    }
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

      // Signaturens bredd i PDF-punkter utifrån % av sidbredden, behåll proportioner
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

      // PDF-koordinater har origo nere till vänster
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
        <span>Allt sker lokalt i din webbläsare. Dokumentet laddas aldrig upp någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => !busy && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault()
            const f = e.dataTransfer.files[0]
            if (f && !busy) handlePdf(f)
          }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-6 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          <FileSignature className="h-6 w-6 text-gray-400" />
          <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
            {pdfBytes ? `Vald fil: ${pdfName}.pdf (${pageCount} sidor) – klicka för att byta` : 'Klicka eller dra hit en PDF'}
          </p>
          <input
            ref={inputRef}
            type="file"
            accept="application/pdf,.pdf"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handlePdf(f)
            }}
          />
        </div>

        {/* Signaturruta */}
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
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
            Rita med musen eller fingret. Alternativt: skriv ett namn nedan.
          </p>
        </div>

        {/* Typat namn (alternativ) */}
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

        {/* Placering */}
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className={labelCls}>Sida</label>
            <input
              type="number"
              min={1}
              max={Math.max(pageCount, 1)}
              value={pageNum}
              disabled={!pdfBytes}
              onChange={(e) => {
                const v = Number(e.target.value) || 1
                setPageNum(Math.min(Math.max(v, 1), Math.max(pageCount, 1)))
              }}
              className={`${inputCls} w-24`}
            />
            {pageCount > 0 && (
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">av {pageCount}</span>
            )}
          </div>

          <div>
            <label className={labelCls}>Placering</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value as Position)}
              className={inputCls}
            >
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
          <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        )}

        {done && !error && (
          <p className="rounded-lg border border-green-300 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-3 text-sm text-green-700 dark:text-green-400">
            Klart! Den signerade PDF:en har laddats ner.
          </p>
        )}

        {/* Action */}
        <button
          onClick={signAndDownload}
          disabled={!pdfBytes || busy}
          className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {busy ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Signerar…
            </>
          ) : (
            <>
              <Download className="h-4 w-4" /> Signera & ladda ner
            </>
          )}
        </button>
      </div>
    </div>
  )
}
