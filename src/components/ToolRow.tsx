import { Link } from 'react-router-dom'
import { isNewTool, runsOn, type MinScreen, type Tool } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

const devices: MinScreen[] = ['mobil', 'surfplatta', 'dator']

/** En rad i startsidans verktygslista: ikon, namn, vad det gör, och var det funkar. */
export default function ToolRow({ tool }: { tool: Tool }) {
  const { t } = useLanguage()
  const Icon = tool.icon
  const translation = t.tools[tool.id]

  return (
    <Link
      to={tool.route}
      className="group flex items-start gap-4 rounded-lg px-3 py-3 -mx-3 no-underline transition-colors hover:bg-blue-50 dark:hover:bg-blue-950/60 hc:hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300 hc:focus-visible:outline-yellow-400"
    >
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white dark:bg-blue-800 dark:text-blue-50 hc:bg-black hc:border hc:border-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-baseline gap-x-2 text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-200 hc:group-hover:text-yellow-400">
          {translation?.name}
          {isNewTool(tool.id) && (
            <span className="text-sm font-normal text-blue-700 dark:text-blue-300 hc:text-yellow-400">
              {t.newBadge ?? 'Nytt'}
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-sm leading-snug text-gray-600 dark:text-gray-300 hc:text-gray-200">
          {translation?.description}
        </span>
        <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400 hc:text-gray-200">
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
