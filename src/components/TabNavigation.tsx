import type { Category } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

const tabKeys: Category[] = ['alla', 'dator', 'mobil', 'online', 'offline']

interface TabNavigationProps {
  active: Category
  onChange: (category: Category) => void
}

export default function TabNavigation({ active, onChange }: TabNavigationProps) {
  const { t } = useLanguage()

  return (
    <nav className="flex gap-1 rounded-lg bg-gray-100 dark:bg-gray-900 hc:bg-black p-1">
      {tabKeys.map((key) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            active === key
              ? 'bg-blue-600 text-white hc:bg-white hc:text-black hc:font-bold'
              : 'text-gray-600 dark:text-gray-400 hc:text-white hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200 hc:hover:bg-gray-800'
          }`}
        >
          {t.tabs[key]}
        </button>
      ))}
    </nav>
  )
}
