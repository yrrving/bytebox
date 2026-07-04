import { ShieldAlert } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface ExternalNoticeProps {
  /** Name of the third-party service data is sent to, e.g. "MyMemory", "Google DNS". */
  service: string
  /** Optional override for the body text (e.g. a stronger warning). Falls back to the generic outro. */
  warning?: string
}

export default function ExternalNotice({ service, warning }: ExternalNoticeProps) {
  const { t } = useLanguage()
  const p = t.privacy
  const intro = p?.externalIntro ?? 'Det här verktyget skickar din inmatning till en extern tjänst:'
  const body = warning ?? p?.externalOutro ?? 'Bytebox sparar ingenting själv. Undvik att skicka känsliga personuppgifter.'

  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-3 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
      <p>
        {intro} <strong>{service}</strong>. {body}
      </p>
    </div>
  )
}
