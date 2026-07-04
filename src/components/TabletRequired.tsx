import { Link } from 'react-router-dom'
import { MonitorSmartphone, Monitor, ArrowLeft } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

interface TabletRequiredProps {
  /** 'surfplatta' = needs a tablet, 'dator' = needs a computer. */
  variant?: 'surfplatta' | 'dator'
}

export default function TabletRequired({ variant = 'surfplatta' }: TabletRequiredProps) {
  const { t } = useLanguage()
  const tr = t.tabletRequired
  const isComputer = variant === 'dator'

  const Icon = isComputer ? Monitor : MonitorSmartphone
  const title = isComputer ? tr?.computerTitle : tr?.title
  const body = isComputer ? tr?.computerBody : tr?.body

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 py-16 text-center">
      <div className="rounded-2xl bg-blue-100 p-4 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 hc:bg-black hc:text-white hc:border hc:border-white">
        <Icon className="h-8 w-8" />
      </div>
      <h1 className="text-xl font-bold text-gray-900 dark:text-white hc:text-white">
        {title ?? 'Kräver större skärm'}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 hc:text-gray-200">
        {body ?? 'Det här verktyget behöver en större skärm.'}
      </p>
      <Link
        to="/"
        className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-blue-700"
      >
        <ArrowLeft className="h-4 w-4" />
        {tr?.back ?? 'Tillbaka till verktygen'}
      </Link>
    </div>
  )
}
