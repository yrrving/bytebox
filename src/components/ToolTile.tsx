import { Link } from 'react-router-dom'
import { isNewTool, runsOn, type MinScreen, type Tool } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'
import { HangingTool } from './Pictogram'

const devices: MinScreen[] = ['mobil', 'surfplatta', 'dator']

/**
 * Ett verktyg på startsidans vägg: bilden på sin plats, namnet, vad det gör
 * och var det funkar. Bilden lyfts ur sin kontur när man pekar eller tabbar
 * hit. På mobil ligger bilden till vänster om texten, annars ovanför.
 */
export default function ToolTile({ tool }: { tool: Tool }) {
  const { t } = useLanguage()
  const translation = t.tools[tool.id]

  return (
    <Link
      to={tool.route}
      className="peg-tool group grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-x-4 rounded-lg no-underline sm:flex sm:flex-col sm:gap-0 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300 hc:focus-visible:outline-yellow-400"
    >
      <HangingTool
        id={tool.id}
        className="h-20 w-20 text-gray-900 sm:mb-3 sm:h-28 sm:w-28 dark:text-white hc:text-white hc:group-hover:text-yellow-400 hc:group-focus-visible:text-yellow-400"
      />
      <span className="min-w-0">
        <span className="flex flex-wrap items-baseline gap-x-2 text-xl font-bold leading-tight text-gray-900 decoration-2 underline-offset-4 group-hover:underline group-focus-visible:underline dark:text-white hc:text-white">
          {translation?.name}
          {isNewTool(tool.id) && (
            <span className="text-sm font-normal text-blue-700 dark:text-blue-300 hc:text-yellow-400">
              {t.newBadge ?? 'Nytt'}
            </span>
          )}
        </span>
        <span className="mt-1.5 block max-w-[40ch] text-base leading-normal text-gray-800 dark:text-gray-100 hc:text-white">
          {translation?.description}
        </span>
        <span className="mt-1.5 block text-sm text-gray-600 dark:text-gray-300 hc:text-gray-200">
          {t.home?.worksOn ?? 'Funkar på'}{' '}
          {devices
            .filter((device) => runsOn(tool, device))
            .map((device) => (t.minScreenLabel?.[device] ?? device).toLowerCase())
            .join(', ')}
        </span>
      </span>
    </Link>
  )
}
