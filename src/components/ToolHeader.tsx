import { useLanguage } from '../context/LanguageContext'
import { HangingTool } from './Pictogram'

/**
 * Överst på varje verktygssida: verktyget nedplockat ur sin kontur, namnet
 * och vad det gör. Samma bild som på startsidans vägg, så man ser att man
 * kommit rätt. Visar också verktygets tips om det har ett.
 */
export default function ToolHeader({ id, showHint = true }: { id: string; showHint?: boolean }) {
  const { t } = useLanguage()
  const translation = t.tools[id]

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      <HangingTool
        id={id}
        className="peg-lifted h-24 w-24 text-gray-900 sm:h-32 sm:w-32 dark:text-white hc:text-white"
      />
      <div className="min-w-0">
        <h1 className="text-4xl font-bold leading-[0.95] tracking-[-0.03em] text-gray-900 sm:text-6xl dark:text-white">
          {translation?.name}
        </h1>
        <p className="mt-3 max-w-[46ch] text-lg leading-snug text-gray-800 sm:text-xl dark:text-gray-100 hc:text-white">
          {translation?.description}
        </p>
        {showHint && translation?.hint && (
          <p className="mt-2 max-w-[60ch] text-base text-gray-700 dark:text-gray-200 hc:text-gray-200">
            {translation.hint}
          </p>
        )}
      </div>
    </div>
  )
}
