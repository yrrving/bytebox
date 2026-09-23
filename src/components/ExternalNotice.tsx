import { ShieldAlert } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface ExternalNoticeProps {
  /** Tjänsten som får data, t.ex. "webbläsarens taltjänst". */
  service: string
  /**
   * Vad som konkret lämnar enheten och vad användaren bör tänka på. Generiska
   * varningar läses inte — skriv rakt ut vad som skickas.
   */
  warning: string
}

export default function ExternalNotice({ service, warning }: ExternalNoticeProps) {
  const { t } = useLanguage()
  const intro = t.privacy?.externalIntro ?? 'Det här verktyget kommunicerar med en extern tjänst:'

  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-3 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="space-y-1">
        <p>
          {intro} <strong>{service}</strong>.
        </p>
        <p>{warning}</p>
      </div>
    </div>
  )
}
