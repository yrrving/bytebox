import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Chrome/Edge-eventet som låter oss visa en egen "installera"-knapp.
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallButton() {
  const { t } = useLanguage()
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const onPrompt = (e: Event) => {
      e.preventDefault()
      setDeferred(e as BeforeInstallPromptEvent)
    }
    const onInstalled = () => setDeferred(null)
    window.addEventListener('beforeinstallprompt', onPrompt)
    window.addEventListener('appinstalled', onInstalled)
    return () => {
      window.removeEventListener('beforeinstallprompt', onPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  // Visa inget om appen redan är installerad eller webbläsaren inte stöder prompt.
  if (!deferred) return null

  const handleClick = async () => {
    await deferred.prompt()
    const { outcome } = await deferred.userChoice
    if (outcome === 'accepted') setDeferred(null)
  }

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
    >
      <Download className="h-4 w-4" />
      {t.installApp ?? 'Installera app'}
    </button>
  )
}
