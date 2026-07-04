import { useState, useRef, useCallback } from 'react'
import { Download, Loader2, ShieldCheck, Upload, QrCode as QrCodeIcon } from 'lucide-react'
import QRCode from 'qrcode'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

interface QrItem {
  content: string
  label: string
  url: string
}

// Gör en text säker att använda som filnamn
function safeFileName(name: string, fallback: string): string {
  const cleaned = name
    .trim()
    .replace(/[/\\?%*:|"<>]/g, '-')
    .replace(/\s+/g, '_')
    .slice(0, 60)
  return cleaned || fallback
}

// Enkel parser: en rad per QR. Om raden innehåller kommatecken tolkas
// första kolumnen som innehåll och andra kolumnen som etikett/filnamn.
function parseLines(text: string): { content: string; label: string }[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      const commaIndex = line.indexOf(',')
      if (commaIndex === -1) {
        return { content: line, label: '' }
      }
      const content = line.slice(0, commaIndex).trim()
      const label = line.slice(commaIndex + 1).trim()
      return { content, label }
    })
    .filter((row) => row.content.length > 0)
}

export default function BatchQr() {
  const { t } = useLanguage()
  const translation = t.tools['batch-qr']

  const [input, setInput] = useState('')
  const [size, setSize] = useState(256)
  const [showLabels, setShowLabels] = useState(true)
  const [items, setItems] = useState<QrItem[]>([])
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const generate = useCallback(async () => {
    const rows = parseLines(input)
    if (rows.length === 0) {
      setError('Klistra in minst en rad text – en rad per QR-kod.')
      setItems([])
      return
    }
    if (rows.length > 500) {
      setError('Max 500 QR-koder åt gången. Korta ner listan.')
      return
    }
    setError('')
    setGenerating(true)
    try {
      const generated: QrItem[] = []
      for (const row of rows) {
        const url = await QRCode.toDataURL(row.content, {
          width: size,
          margin: 2,
          color: { dark: '#000000', light: '#ffffff' },
        })
        generated.push({
          content: row.content,
          label: row.label,
          url,
        })
      }
      setItems(generated)
    } catch {
      setError('Något gick fel när QR-koderna skulle skapas. Kontrollera att texten är giltig.')
    } finally {
      setGenerating(false)
    }
  }, [input, size])

  const handleFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      setInput(typeof reader.result === 'string' ? reader.result : '')
      setError('')
    }
    reader.readAsText(file)
  }

  const download = (item: QrItem, index: number) => {
    const base = item.label || item.content
    const name = safeFileName(base, `qr-${index + 1}`)
    const a = document.createElement('a')
    a.href = item.url
    a.download = `${name}.png`
    a.click()
  }

  const downloadAll = () => {
    items.forEach((item, i) => {
      // Liten fördröjning så webbläsaren hinner med flera nedladdningar
      setTimeout(() => download(item, i), i * 120)
    })
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

      {/* Privacy note */}
      <div className="flex items-start gap-2 rounded-lg border border-green-200 dark:border-green-900 hc:border-white bg-green-50 dark:bg-green-950/30 hc:bg-black p-3 text-sm text-green-800 dark:text-green-300 hc:text-white">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
        <span>Allt sker lokalt i din webbläsare. Ingen text laddas upp någonstans.</span>
      </div>

      {/* Input */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <label className="block text-sm font-medium text-gray-900 dark:text-white">
            Lista – en rad per QR-kod
          </label>
          <button
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <Upload className="h-3.5 w-3.5" />
            Ladda upp .txt / .csv
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".txt,.csv,text/plain,text/csv"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) handleFile(f)
              e.target.value = ''
            }}
          />
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={'https://exempel.se/1\nhttps://exempel.se/2, Etikett 2\nText till en tredje QR-kod'}
          rows={7}
          spellCheck={false}
          className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
          Tips: skriv <code className="font-mono">innehåll, etikett</code> med kommatecken för att ge varje QR-kod en egen etikett och filnamn.
        </p>
      </div>

      {/* Options */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Storlek</label>
            <select
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            >
              <option value={128}>128px</option>
              <option value={256}>256px</option>
              <option value={512}>512px</option>
              <option value={1024}>1024px</option>
            </select>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input
              type="checkbox"
              checked={showLabels}
              onChange={(e) => setShowLabels(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600"
            />
            Visa etikett under varje QR-kod
          </label>
          <button
            onClick={generate}
            disabled={generating}
            className="ml-auto inline-flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-40"
          >
            {generating ? <Loader2 className="h-4 w-4 animate-spin" /> : <QrCodeIcon className="h-4 w-4" />}
            {generating ? 'Skapar…' : 'Skapa QR-koder'}
          </button>
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      )}

      {/* Output */}
      {items.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
              {items.length} QR-koder skapade
            </span>
            <button
              onClick={downloadAll}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
            >
              <Download className="h-4 w-4" />
              Ladda ner alla
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => download(item, i)}
                title={item.content}
                className="group flex flex-col items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-gray-900 p-2 text-center transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <img
                  src={item.url}
                  alt={item.label || item.content}
                  className="aspect-square w-full rounded bg-white"
                  style={{ imageRendering: 'pixelated' }}
                />
                {showLabels && (
                  <span className="w-full truncate text-xs text-gray-700 dark:text-gray-300 hc:text-white">
                    {item.label || item.content}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  <Download className="h-3 w-3" />
                  PNG
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
