import { Link } from 'react-router-dom'
import type { Tool } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  const { t } = useLanguage()
  const Icon = tool.icon
  const translation = t.tools[tool.id]

  return (
    <Link
      to={tool.route}
      className="group flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 hc:border-white bg-gray-50 dark:bg-gray-900 hc:bg-black p-5 no-underline transition-colors hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800/70"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 p-2.5 text-blue-400 hc:text-white transition-colors group-hover:bg-blue-600/20">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex gap-1.5">
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              tool.connection === 'online'
                ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400 hc:bg-white hc:text-black'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 hc:bg-gray-900 hc:text-white hc:border hc:border-white'
            }`}
          >
            {t.connection[tool.connection]}
          </span>
          <span className="rounded-full bg-gray-100 dark:bg-gray-800 hc:bg-gray-900 hc:border hc:border-white px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-gray-400 hc:text-white">
            {t.device[tool.device]}
          </span>
        </div>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{translation?.name}</h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">{translation?.description}</p>
      </div>
    </Link>
  )
}
