import { useState, useMemo } from 'react'
import { Copy, Check, Clock, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type Unit = 'seconds' | 'milliseconds'

function pad(n: number): string {
  return String(n).padStart(2, '0')
}

// Format a Date as "YYYY-MM-DDTHH:MM" in local time for datetime-local input
function toLocalInputValue(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
}

function relative(ms: number): string {
  const diff = ms - Date.now()
  const abs = Math.abs(diff)
  const past = diff < 0
  const units: [number, string, string][] = [
    [1000 * 60 * 60 * 24 * 365, 'år', 'år'],
    [1000 * 60 * 60 * 24 * 30, 'månad', 'månader'],
    [1000 * 60 * 60 * 24, 'dag', 'dagar'],
    [1000 * 60 * 60, 'timme', 'timmar'],
    [1000 * 60, 'minut', 'minuter'],
    [1000, 'sekund', 'sekunder'],
  ]
  for (const [size, one, many] of units) {
    if (abs >= size) {
      const v = Math.round(abs / size)
      const word = v === 1 ? one : many
      return past ? `för ${v} ${word} sedan` : `om ${v} ${word}`
    }
  }
  return 'just nu'
}

export default function EpochConverter() {
  const { t } = useLanguage()
  const translation = t.tools['epoch-omvandlare']

  const [unit, setUnit] = useState<Unit>('seconds')
  const [tsInput, setTsInput] = useState<string>(() => String(Math.floor(Date.now() / 1000)))
  const [dateInput, setDateInput] = useState<string>(() => toLocalInputValue(new Date()))
  const [copied, setCopied] = useState<string | null>(null)

  const copy = async (value: string, key: string) => {
    await navigator.clipboard.writeText(value)
    setCopied(key)
    setTimeout(() => setCopied((k) => (k === key ? null : k)), 1500)
  }

  // Timestamp -> Date
  const fromTimestamp = useMemo(() => {
    const raw = tsInput.trim()
    if (raw === '' || !/^-?\d+$/.test(raw)) return null
    const num = Number(raw)
    if (!Number.isFinite(num)) return null
    const ms = unit === 'seconds' ? num * 1000 : num
    const d = new Date(ms)
    if (isNaN(d.getTime())) return null
    return d
  }, [tsInput, unit])

  // Date -> timestamp
  const fromDate = useMemo(() => {
    if (!dateInput) return null
    const d = new Date(dateInput)
    if (isNaN(d.getTime())) return null
    const ms = d.getTime()
    return unit === 'seconds' ? Math.floor(ms / 1000) : ms
  }, [dateInput, unit])

  const fillNow = () => {
    const now = new Date()
    setTsInput(String(unit === 'seconds' ? Math.floor(now.getTime() / 1000) : now.getTime()))
    setDateInput(toLocalInputValue(now))
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

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-5">
        {/* Unit + now */}
        <div className="flex flex-wrap items-end gap-4">
          <div>
            <label className="mb-1 block text-xs text-gray-500 dark:text-gray-400">Enhet</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as Unit)}
              className="rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
            >
              <option value="seconds">Sekunder</option>
              <option value="milliseconds">Millisekunder</option>
            </select>
          </div>
          <button
            onClick={fillNow}
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2.5 font-medium text-white transition-colors hover:bg-blue-700"
          >
            <Clock className="h-4 w-4" />
            Nu
          </button>
        </div>

        {/* Timestamp -> date */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">
            Tidsstämpel ({unit === 'seconds' ? 'sekunder' : 'millisekunder'})
          </label>
          <input
            type="text"
            inputMode="numeric"
            value={tsInput}
            onChange={(e) => setTsInput(e.target.value)}
            placeholder="t.ex. 1700000000"
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 font-mono text-sm text-gray-900 dark:text-gray-100 hc:text-white"
          />
          {tsInput.trim() !== '' && !fromTimestamp && (
            <p className="text-sm text-red-600 dark:text-red-400">Ogiltig tidsstämpel — ange ett heltal.</p>
          )}
          {fromTimestamp && (
            <div className="space-y-1.5 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 p-3 text-sm">
              <ResultRow
                label="Lokal tid"
                value={fromTimestamp.toLocaleString('sv-SE')}
                copied={copied === 'local'}
                onCopy={() => copy(fromTimestamp.toLocaleString('sv-SE'), 'local')}
              />
              <ResultRow
                label="UTC (ISO)"
                value={fromTimestamp.toISOString()}
                copied={copied === 'iso'}
                onCopy={() => copy(fromTimestamp.toISOString(), 'iso')}
              />
              <p className="text-gray-500 dark:text-gray-400 hc:text-gray-300 italic">{relative(fromTimestamp.getTime())}</p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 dark:border-gray-600 hc:border-white" />

        {/* Date -> timestamp */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">
            Datum &amp; tid (lokal)
          </label>
          <input
            type="datetime-local"
            step={1}
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 hc:text-white"
          />
          {dateInput && !fromDate && (
            <p className="text-sm text-red-600 dark:text-red-400">Ogiltigt datum.</p>
          )}
          {fromDate !== null && (
            <div className="rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 p-3 text-sm">
              <ResultRow
                label={`Tidsstämpel (${unit === 'seconds' ? 's' : 'ms'})`}
                value={String(fromDate)}
                copied={copied === 'ts'}
                onCopy={() => copy(String(fromDate), 'ts')}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ResultRow({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string
  value: string
  copied: boolean
  onCopy: () => void
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="shrink-0 text-gray-500 dark:text-gray-400 hc:text-gray-300">{label}:</span>
      <span className="flex min-w-0 items-center gap-2">
        <code className="truncate font-mono text-gray-900 dark:text-gray-100 hc:text-white">{value}</code>
        <button
          onClick={onCopy}
          className="shrink-0 rounded-md p-1 text-gray-500 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
          title="Kopiera"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
        </button>
      </span>
    </div>
  )
}
