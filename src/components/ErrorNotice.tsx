import { AlertTriangle } from 'lucide-react'

/** Visar ett felmeddelande för användaren. Renderar ingenting när message är tom. */
export default function ErrorNotice({ message }: { message: string }) {
  if (!message) return null

  return (
    <div
      role="alert"
      className="flex items-start gap-2.5 rounded-lg border border-red-300 dark:border-red-800 hc:border-white bg-red-50 dark:bg-red-900/20 hc:bg-black p-3 text-sm text-red-700 dark:text-red-300 hc:text-white"
    >
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
      <p>{message}</p>
    </div>
  )
}
