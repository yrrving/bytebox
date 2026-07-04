import { useState } from 'react'
import { Copy, Check, ShieldCheck } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type BaseKey = 'bin' | 'oct' | 'dec' | 'hex'

interface BaseDef {
  key: BaseKey
  label: string
  radix: number
  placeholder: string
  valid: RegExp
}

const BASES: BaseDef[] = [
  { key: 'bin', label: 'Binärt (bas 2)', radix: 2, placeholder: '0 och 1', valid: /^[01]+$/ },
  { key: 'oct', label: 'Oktalt (bas 8)', radix: 8, placeholder: '0–7', valid: /^[0-7]+$/ },
  { key: 'dec', label: 'Decimalt (bas 10)', radix: 10, placeholder: '0–9', valid: /^\d+$/ },
  { key: 'hex', label: 'Hexadecimalt (bas 16)', radix: 16, placeholder: '0–9, a–f', valid: /^[0-9a-fA-F]+$/ },
]

// Parse a string in a given radix into a BigInt (non-negative integers only)
function parseBigInt(value: string, radix: number): bigint | null {
  const v = value.trim().toLowerCase()
  if (v === '') return null
  let result = 0n
  const big = BigInt(radix)
  for (const ch of v) {
    const digit = parseInt(ch, radix)
    if (isNaN(digit)) return null
    result = result * big + BigInt(digit)
  }
  return result
}

const emptyValues: Record<BaseKey, string> = { bin: '', oct: '', dec: '', hex: '' }

export default function BaseConverter() {
  const { t } = useLanguage()
  const translation = t.tools['bas-omvandlare']

  const [values, setValues] = useState<Record<BaseKey, string>>(emptyValues)
  const [invalid, setInvalid] = useState<BaseKey | null>(null)
  const [copied, setCopied] = useState<BaseKey | null>(null)

  const handleChange = (base: BaseDef, raw: string) => {
    const value = raw.trim()
    if (value === '') {
      setValues(emptyValues)
      setInvalid(null)
      return
    }
    if (!base.valid.test(value)) {
      // Keep the typed value in its own field but mark it invalid; clear others
      setValues({ ...emptyValues, [base.key]: raw })
      setInvalid(base.key)
      return
    }
    const parsed = parseBigInt(value, base.radix)
    if (parsed === null) {
      setValues({ ...emptyValues, [base.key]: raw })
      setInvalid(base.key)
      return
    }
    setInvalid(null)
    setValues({
      bin: parsed.toString(2),
      oct: parsed.toString(8),
      dec: parsed.toString(10),
      hex: parsed.toString(16),
    })
    // Preserve exactly what the user typed in the active field
    setValues((prev) => ({ ...prev, [base.key]: raw }))
  }

  const copy = async (base: BaseKey) => {
    const val = values[base]
    if (!val) return
    await navigator.clipboard.writeText(val)
    setCopied(base)
    setTimeout(() => setCopied((k) => (k === base ? null : k)), 1500)
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
        {BASES.map((base) => {
          const isInvalid = invalid === base.key
          return (
            <div key={base.key} className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 hc:text-white">
                {base.label}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={values[base.key]}
                  onChange={(e) => handleChange(base, e.target.value)}
                  placeholder={base.placeholder}
                  spellCheck={false}
                  className={`w-full rounded-lg border bg-white dark:bg-gray-800 hc:bg-gray-900 px-3 py-2 font-mono text-sm text-gray-900 dark:text-gray-100 hc:text-white ${
                    isInvalid
                      ? 'border-red-400 dark:border-red-500 focus:outline-red-500'
                      : 'border-gray-300 dark:border-gray-600 hc:border-white'
                  }`}
                />
                <button
                  onClick={() => copy(base.key)}
                  disabled={!values[base.key] || isInvalid}
                  className="shrink-0 rounded-md p-2 text-gray-500 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  title="Kopiera"
                >
                  {copied === base.key ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
              {isInvalid && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Ogiltigt värde för detta talsystem (tillåtna tecken: {base.placeholder}).
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
