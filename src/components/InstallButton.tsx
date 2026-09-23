import { useEffect, useState } from 'react'
import { Download, Share, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Chrome, Edge och Android fyrar det här eventet när appen går att installera.
// Safari gör det inte, varken på iPhone, iPad eller Mac.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

/** Körs appen redan som installerad app? Då behövs ingen knapp. */
function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    // Safaris egen, icke-standardiserade flagga
    (navigator as Navigator & { standalone?: boolean }).standalone === true
  )
}

/**
 * iPhone och iPad kan lägga till appen på hemskärmen, men bara via Dela-menyn.
 * Det finns inget sätt att göra det från koden, så där visar vi en instruktion
 * i stället för en knapp som ändå aldrig skulle fungera.
 */
function isIosSafari(): boolean {
  const ua = navigator.userAgent
  const iOS = /iPad|iPhone|iPod/.test(ua) ||
    // iPad med iPadOS utger sig för att vara en Mac, men har pekskärm
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  const webkit = /WebKit/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua)
  return iOS && webkit
}

export default function InstallButton() {
  const { t } = useLanguage()
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)
  const [showIosHelp, setShowIosHelp] = useState(false)
  // Läses av direkt vid start i stället för i effekten: läget är känt redan
  // vid första renderingen och behöver inte orsaka en extra runda.
  const [installed, setInstalled] = useState(isStandalone)

  useEffect(() => {
    if (installed) return

    const onPrompt = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => {
      setDeferred(null)
      setInstalled(true)
    }
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [installed])

  if (installed) return null

  const ios = !deferred && isIosSafari()
  if (!deferred && !ios) return null

  const label = t.installApp ?? 'Installera app'

  const handleClick = async () => {
    if (ios) {
      setShowIosHelp(true)
      return
    }
    if (!deferred) return
    await deferred.prompt()
    const { outcome } = await deferred.userChoice
    if (outcome === 'accepted') setDeferred(null)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="flex min-h-9 items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black px-3 py-1.5 text-sm text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
      >
        <Download className="h-4 w-4" />
        {label}
      </button>

      {showIosHelp && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 sm:items-center"
          onClick={() => setShowIosHelp(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black p-5 shadow-xl"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h2 className="text-base font-bold text-gray-900 dark:text-white">{label}</h2>
              <button
                onClick={() => setShowIosHelp(false)}
                aria-label={t.close ?? 'Stäng'}
                className="rounded-lg p-1 text-gray-600 dark:text-gray-300 hc:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-300 hc:text-gray-200">
              <li className="flex items-start gap-2">
                <Share className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{t.iosStep1 ?? 'Tryck på Dela-knappen längst ner i Safari.'}</span>
              </li>
              <li>{t.iosStep2 ?? 'Bläddra ner och välj "Lägg till på hemskärmen".'}</li>
              <li>{t.iosStep3 ?? 'ByteBox hamnar då bland dina appar och öppnas i helskärm.'}</li>
            </ol>
          </div>
        </div>
      )}
    </>
  )
}
