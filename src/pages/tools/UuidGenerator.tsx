import { useState, useCallback } from 'react'
import { Copy, Check, RefreshCw, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

function makeUuids(count: number, upper: boolean): string[] {
  const list: string[] = []
  for (let i = 0; i < count; i++) {
    const id = crypto.randomUUID()
    list.push(upper ? id.toUpperCase() : id)
  }
  return list
}

export default function UuidGenerator() {
  const { t } = useLanguage()
  const translation = t.tools['uuid-generator']

  const [count, setCount] = useState(5)
  const [upper, setUpper] = useState(false)
  const [uuids, setUuids] = useState<string[]>(() => makeUuids(5, false))
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const clampCount = (n: number) => Math.min(100, Math.max(1, Math.floor(n || 1)))

  const generate = useCallback(() => {
    setUuids(makeUuids(clampCount(count), upper))
    setCopiedIndex(null)
    setCopiedAll(false)
  }, [count, upper])

  const copyOne = async (value: string, index: number) => {
    await navigator.clipboard.writeText(value)
    setCopiedIndex(index)
    setCopiedAll(false)
    setTimeout(() => setCopiedIndex((i) => (i === index ? null : i)), 1500)
  }

  const copyAll = async () => {
    await navigator.clipboard.writeText(uuids.join('\n'))
    setCopiedAll(true)
    setCopiedIndex(null)
    setTimeout(() => setCopiedAll(false), 1500)
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
        <span>Allt sker lokalt i din webbläsare. Inget skickas någonstans.</span>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        {/* Options */}
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Antal (1–100)</label>
            <input
              type="number"
              min={1}
              max={100}
              value={count}
              onChange={(e) => setCount(clampCount(Number(e.target.value)))}
              className="w-24 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            />
          </div>
          <label className="flex items-center gap-2 py-2 text-sm text-gray-700 dark:text-gray-300 hc:text-white">
            <input
              type="checkbox"
              checked={upper}
              onChange={(e) => setUpper(e.target.checked)}
              className="h-4 w-4"
            />
            VERSALER
          </label>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={generate}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <RefreshCw className="h-4 w-4" />
            Generera igen
          </button>
          {uuids.length > 1 && (
            <button
              onClick={copyAll}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2.5 font-medium text-gray-900 dark:text-gray-100 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {copiedAll ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              {copiedAll ? 'Kopierat!' : 'Kopiera alla'}
            </button>
          )}
        </div>

        {/* List */}
        <ul className="space-y-2">
          {uuids.map((id, i) => (
            <li
              key={i}
              className="flex items-center justify-between gap-3 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2"
            >
              <code className="truncate font-mono text-sm text-gray-900 dark:text-gray-100 hc:text-white">{id}</code>
              <button
                onClick={() => copyOne(id, i)}
                className="shrink-0 rounded-md p-1.5 text-gray-500 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                title="Kopiera"
              >
                {copiedIndex === i ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
