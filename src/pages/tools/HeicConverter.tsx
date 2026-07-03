import { useState, useRef } from 'react'
import { Download, Loader2, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type OutFormat = 'image/jpeg' | 'image/png'

interface Result {
  name: string
  url: string
  size: number
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} kB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function HeicConverter() {
  const { t } = useLanguage()
  const translation = t.tools['heic-till-jpg']
  const h = t.heicConverter

  const [format, setFormat] = useState<OutFormat>('image/jpeg')
  const [quality, setQuality] = useState(0.9)
  const [results, setResults] = useState<Result[]>([])
  const [converting, setConverting] = useState(false)
  const [error, setError] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = async (files: FileList | File[]) => {
    const list = Array.from(files).filter(
      (f) => /heic|heif/i.test(f.type) || /\.hei[cf]$/i.test(f.name),
    )
    if (list.length === 0) {
      setError(h?.noHeic ?? 'Inga HEIC/HEIF-filer hittades. Välj bilder från en iPhone.')
      return
    }
    setError('')
    setConverting(true)
    try {
      // Laddas bara när verktyget faktiskt används (håller huvudbundeln liten)
      const heic2any = (await import('heic2any')).default
      const ext = format === 'image/jpeg' ? 'jpg' : 'png'
      const converted: Result[] = []
      for (const file of list) {
        const out = await heic2any({
          blob: file,
          toType: format,
          quality: format === 'image/jpeg' ? quality : undefined,
        })
        const blob = Array.isArray(out) ? out[0] : out
        converted.push({
          name: file.name.replace(/\.hei[cf]$/i, '') + '.' + ext,
          url: URL.createObjectURL(blob),
          size: blob.size,
        })
      }
      setResults((prev) => [...converted, ...prev])
    } catch {
      setError(h?.failed ?? 'Något gick fel vid konverteringen. Filen kanske inte är en giltig HEIC-bild.')
    } finally {
      setConverting(false)
    }
  }

  const download = (r: Result) => {
    const a = document.createElement('a')
    a.href = r.url
    a.download = r.name
    a.click()
  }

  const downloadAll = () => results.forEach(download)

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
        <span>{h?.privacy ?? 'Allt sker lokalt i din webbläsare. Bilderna laddas aldrig upp någonstans.'}</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Options */}
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">{h?.format ?? 'Format'}</label>
            <select
              value={format}
              onChange={(e) => setFormat(e.target.value as OutFormat)}
              className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            >
              <option value="image/jpeg">JPG</option>
              <option value="image/png">PNG</option>
            </select>
          </div>
          {format === 'image/jpeg' && (
            <div>
              <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">
                {h?.quality ?? 'Kvalitet'}: {Math.round(quality * 100)}%
              </label>
              <input
                type="range"
                min={0.3}
                max={1}
                step={0.05}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-40 align-middle"
              />
            </div>
          )}
        </div>

        {/* Upload */}
        <div
          onClick={() => !converting && inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); if (!converting) handleFiles(e.dataTransfer.files) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {converting ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
              <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">{h?.converting ?? 'Konverterar…'}</p>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
              {h?.upload ?? 'Klicka eller dra hit HEIC-bilder (från iPhone)'}
            </p>
          )}
          <input
            ref={inputRef}
            type="file"
            accept=".heic,.heif,image/heic,image/heif"
            multiple
            className="hidden"
            onChange={(e) => { if (e.target.files) handleFiles(e.target.files) }}
          />
        </div>

        {error && (
          <p className="rounded-lg border border-red-300 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-3 text-sm text-red-700 dark:text-red-400">{error}</p>
        )}

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-3">
            {results.length > 1 && (
              <button
                onClick={downloadAll}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
              >
                <Download className="h-4 w-4" />
                {h?.downloadAll ?? 'Ladda ner alla'}
              </button>
            )}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {results.map((r, i) => (
                <button
                  key={i}
                  onClick={() => download(r)}
                  className="group flex flex-col gap-1 rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-gray-700 p-2 text-left transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <img src={r.url} className="aspect-square w-full rounded object-cover" alt={r.name} />
                  <span className="truncate text-xs font-mono text-gray-700 dark:text-gray-300 hc:text-white">{r.name}</span>
                  <span className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Download className="h-3 w-3" />{formatBytes(r.size)}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
