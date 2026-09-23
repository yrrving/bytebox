import { ShieldAlert } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface ExternalNoticeProps {
  /** Tjänsten data skickas till, t.ex. "MyMemory", "Google DNS". */
  service: string
  /**
   * Vad som konkret lämnar enheten — "domännamnet du skriver in", "din
   * IP-adress". Generiska varningar läses inte; ett rakt besked om exakt vad
   * som skickas är det användaren behöver för att kunna välja.
   */
  sends?: string
  /** Ersätter den allmänna avslutningen när tjänsten kräver en skarpare varning. */
  warning?: string
}

export default function ExternalNotice({ service, sends, warning }: ExternalNoticeProps) {
  const { t } = useLanguage()
  const p = t.privacy
  const intro = p?.externalIntro ?? 'Det här verktyget kommunicerar med en extern tjänst:'
  const sendsLabel = p?.sendsLabel ?? 'Det som skickas:'
  const body = warning ?? p?.externalOutro ?? 'Bytebox sparar ingenting själv. Undvik att skicka känsliga personuppgifter.'

  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-3 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
      <div className="space-y-1">
        <p>
          {intro} <strong>{service}</strong>.
        </p>
        {sends && (
          <p>
            <span className="font-medium">{sendsLabel}</span> {sends}
          </p>
        )}
        <p>{body}</p>
      </div>
    </div>
  )
}
