import { useState } from 'react'
import { ShieldCheck, ShieldAlert, Search } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'
import ExternalNotice from '../../components/ExternalNotice'

interface Issuance {
  issuer?: { friendly_name?: string; name?: string }
  not_before?: string
  not_after?: string
  revoked?: boolean
  dns_names?: string[]
}

interface CertInfo {
  subject: string
  issuer: string
  validFrom: string
  validTo: string
  daysLeft: number
  names: number
  revoked: boolean
}

const DAY = 1000 * 60 * 60 * 24

function formatDate(iso: string, locale: string): string {
  const d = new Date(iso)
  return isNaN(d.getTime()) ? '—' : d.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function SslCheck() {
  const { t, language } = useLanguage()
  const translation = t.tools['ssl-kontroll']
  const st = t.sslCheck

  const [domain, setDomain] = useState('')
  const [info, setInfo] = useState<CertInfo | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const check = async () => {
    const clean = domain.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '')
    if (!clean) return
    setLoading(true)
    setError('')
    setInfo(null)
    try {
      const res = await fetch(
        `https://api.certspotter.com/v1/issuances?domain=${encodeURIComponent(clean)}&include_subdomains=false&expand=issuer&expand=dns_names`,
      )
      if (res.status === 429) {
        setError(st?.rateLimited ?? 'För många förfrågningar just nu. Vänta en stund och försök igen.')
        return
      }
      if (!res.ok) throw new Error('API error')

      const list: Issuance[] = await res.json()
      // CT-loggarna listar alla utfärdade certifikat — det som gäller nu är det
      // med senaste utgångsdatum.
      const latest = list
        .filter((c) => c.not_after)
        .sort((a, b) => Date.parse(b.not_after!) - Date.parse(a.not_after!))[0]

      if (!latest) {
        setError(st?.notFound ?? 'Hittade inget certifikat för den domänen i Certificate Transparency-loggarna.')
        return
      }

      setInfo({
        subject: clean,
        issuer: latest.issuer?.friendly_name || latest.issuer?.name || '—',
        validFrom: formatDate(latest.not_before ?? '', language),
        validTo: formatDate(latest.not_after ?? '', language),
        daysLeft: Math.ceil((Date.parse(latest.not_after!) - Date.now()) / DAY),
        names: latest.dns_names?.length ?? 0,
        revoked: latest.revoked === true,
      })
    } catch {
      setError(st?.error ?? 'Kunde inte kontrollera SSL-certifikatet. Kontrollera domänen.')
    } finally {
      setLoading(false)
    }
  }

  const ok = info ? info.daysLeft > 0 && !info.revoked : false

  return (
    <div className="mx-auto max-w-xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{translation?.name}</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>

      <ExternalNotice service="Cert Spotter (SSLMate)" sends={t.privacy?.sendsSsl} />

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-700 hc:bg-black p-4 space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && check()}
            placeholder={st?.placeholder || 'example.com'}
            className="flex-1 rounded-lg border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-800 hc:bg-gray-900 px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={check}
            disabled={loading || !domain.trim()}
            className="flex items-center gap-2 rounded-lg bg-blue-600 hc:bg-white hc:text-black px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            <Search className="h-4 w-4" />
            {st?.check || 'Kontrollera'}
          </button>
        </div>

        {loading && (
          <div className="text-center py-4 text-gray-500 dark:text-gray-400 hc:text-gray-300">{st?.loading || 'Kontrollerar...'}</div>
        )}

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 hc:text-red-300">{error}</p>
        )}

        {info && (
          <div className="space-y-4">
            <div className={`flex items-center gap-3 rounded-lg p-4 ${
              ok
                ? 'bg-green-50 dark:bg-green-900/20 hc:bg-green-900/40 hc:border hc:border-green-400'
                : 'bg-red-50 dark:bg-red-900/20 hc:bg-red-900/40 hc:border hc:border-red-400'
            }`}>
              {ok ? (
                <ShieldCheck className="h-8 w-8 text-green-600 dark:text-green-400 hc:text-green-300" />
              ) : (
                <ShieldAlert className="h-8 w-8 text-red-600 dark:text-red-400 hc:text-red-300" />
              )}
              <div>
                <div className={`font-medium ${ok ? 'text-green-800 dark:text-green-300 hc:text-green-200' : 'text-red-800 dark:text-red-300 hc:text-red-200'}`}>
                  {info.revoked
                    ? (st?.revoked || 'Certifikatet är återkallat')
                    : info.daysLeft > 0
                      ? (st?.valid || 'SSL-certifikatet är giltigt')
                      : (st?.expired || 'Certifikatet har gått ut')}
                </div>
                {info.daysLeft > 0 && !info.revoked && (
                  <div className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">
                    {info.daysLeft} {st?.daysLeft || 'dagar kvar'}
                  </div>
                )}
              </div>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-600 hc:divide-white">
              {[
                { label: st?.subject || 'Domän', value: info.subject },
                { label: st?.issuer || 'Utfärdare', value: info.issuer },
                { label: st?.validFrom || 'Giltig från', value: info.validFrom },
                { label: st?.validTo || 'Giltig till', value: info.validTo },
                { label: st?.covers || 'Täcker antal domäner', value: String(info.names) },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between py-2.5">
                  <span className="text-sm text-gray-600 dark:text-gray-400 hc:text-gray-300">{row.label}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-right max-w-[60%] truncate">{row.value}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 hc:text-gray-300">
              {st?.ctNote || 'Uppgifterna kommer från offentliga Certificate Transparency-loggar och visar det senast utfärdade certifikatet för domänen. Det är nästan alltid det som servern använder, men i sällsynta fall kan servern köra ett annat.'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
