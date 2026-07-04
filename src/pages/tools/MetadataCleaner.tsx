import { useState, useRef } from 'react'
import { Download, Loader2, ShieldCheck, MapPin, Calendar, Camera, Trash2 } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

interface MetaSummary {
  gps: { lat: number; lon: number } | null
  date: string | null
  camera: string | null
  tagCount: number
}

export default function MetadataCleaner() {
  const { t } = useLanguage()
  const translation = t.tools['metadata-tvatt']
  const m = t.metadataCleaner

  const [fileName, setFileName] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const [imgType, setImgType] = useState('image/jpeg')
  const [meta, setMeta] = useState<MetaSummary | null>(null)
  const [reading, setReading] = useState(false)
  const [cleanedUrl, setCleanedUrl] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = async (file: File) => {
    if (!file.type.startsWith('image/')) return
    setReading(true)
    setMeta(null)
    setCleanedUrl('')
    setFileName(file.name)
    setImgType(file.type)
    setImgUrl(URL.createObjectURL(file))
    try {
      const exifr = (await import('exifr')).default
      const gps = await exifr.gps(file).catch(() => null)
      const parsed = await exifr.parse(file).catch(() => null)
      const camera = parsed?.Make || parsed?.Model
        ? [parsed?.Make, parsed?.Model].filter(Boolean).join(' ')
        : null
      const date = parsed?.DateTimeOriginal
        ? new Date(parsed.DateTimeOriginal).toLocaleString()
        : null
      setMeta({
        gps: gps && typeof gps.latitude === 'number' ? { lat: gps.latitude, lon: gps.longitude } : null,
        date,
        camera,
        tagCount: parsed ? Object.keys(parsed).length : 0,
      })
    } catch {
      setMeta({ gps: null, date: null, camera: null, tagCount: 0 })
    } finally {
      setReading(false)
    }
  }

  const clean = () => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)
      // Re-encoding through canvas drops all EXIF/metadata
      const outType = imgType === 'image/png' ? 'image/png' : 'image/jpeg'
      canvas.toBlob(
        (blob) => { if (blob) setCleanedUrl(URL.createObjectURL(blob)) },
        outType,
        outType === 'image/jpeg' ? 0.95 : undefined,
      )
    }
    img.src = imgUrl
  }

  const download = () => {
    if (!cleanedUrl) return
    const a = document.createElement('a')
    a.href = cleanedUrl
    const base = fileName.replace(/\.[^.]+$/, '')
    a.download = `${base}-utan-metadata.${imgType === 'image/png' ? 'png' : 'jpg'}`
    a.click()
  }

  const hasMeta = meta && (meta.gps || meta.date || meta.camera || meta.tagCount > 0)

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

      <div className="flex items-start gap-2 rounded-lg border border-green-200 dark:border-green-900 hc:border-white bg-green-50 dark:bg-green-950/30 hc:bg-black p-3 text-sm text-green-800 dark:text-green-300 hc:text-white">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
        <span>{m?.privacy ?? 'Allt sker lokalt i din webbläsare. Bilden laddas aldrig upp någonstans.'}</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Upload */}
        <div
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); const f = e.dataTransfer.files[0]; if (f) handleFile(f) }}
          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 hc:border-white p-8 text-center cursor-pointer transition-colors hover:border-blue-400 dark:hover:border-blue-500"
        >
          {imgUrl ? (
            <img src={imgUrl} className="max-h-40 rounded-lg object-contain" alt="" />
          ) : (
            <p className="text-gray-600 dark:text-gray-400 hc:text-gray-300">
              {m?.upload ?? 'Klicka eller dra hit en bild (t.ex. ett foto)'}
            </p>
          )}
          <input ref={inputRef} type="file" accept="image/*" className="hidden"
            onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f) }} />
        </div>

        {reading && (
          <div className="flex items-center justify-center gap-2 py-4 text-gray-500">
            <Loader2 className="h-5 w-5 animate-spin" /> {m?.reading ?? 'Läser metadata…'}
          </div>
        )}

        {/* Metadata summary */}
        {meta && !reading && (
          <div className="space-y-3">
            {hasMeta ? (
              <div className="space-y-2 rounded-lg border border-amber-300 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30 p-4">
                <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
                  {m?.found ?? 'Den här bilden innehåller dold metadata:'}
                </p>
                <ul className="space-y-1.5 text-sm text-amber-900 dark:text-amber-200">
                  {meta.gps && (
                    <li className="flex items-center gap-2 font-semibold">
                      <MapPin className="h-4 w-4 shrink-0" />
                      {m?.location ?? 'Exakt plats (GPS)'}: {meta.gps.lat.toFixed(5)}, {meta.gps.lon.toFixed(5)}
                    </li>
                  )}
                  {meta.date && (
                    <li className="flex items-center gap-2"><Calendar className="h-4 w-4 shrink-0" />{m?.date ?? 'Datum'}: {meta.date}</li>
                  )}
                  {meta.camera && (
                    <li className="flex items-center gap-2"><Camera className="h-4 w-4 shrink-0" />{m?.camera ?? 'Kamera'}: {meta.camera}</li>
                  )}
                  {meta.tagCount > 0 && (
                    <li className="text-xs opacity-80">{meta.tagCount} {m?.tags ?? 'metadatafält totalt'}</li>
                  )}
                </ul>
              </div>
            ) : (
              <p className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-sm text-gray-600 dark:text-gray-400">
                {m?.none ?? 'Ingen metadata hittades i den här bilden — den är redan ren.'}
              </p>
            )}

            {!cleanedUrl ? (
              <button
                onClick={clean}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
              >
                <Trash2 className="h-4 w-4" />
                {m?.clean ?? 'Rensa metadata'}
              </button>
            ) : (
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-sm font-medium text-green-700 dark:text-green-400">
                  <ShieldCheck className="h-4 w-4" />{m?.cleaned ?? 'Metadata borttagen — ladda ner den rena bilden.'}
                </p>
                <button
                  onClick={download}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-green-700"
                >
                  <Download className="h-4 w-4" />{m?.download ?? 'Ladda ner ren bild'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
