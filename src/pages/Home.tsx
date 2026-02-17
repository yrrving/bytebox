import { useState } from 'react'
import { Search } from 'lucide-react'
import TabNavigation from '../components/TabNavigation'
import ToolCard from '../components/ToolCard'
import { tools, categoryOrder, type Category, type ToolCategory } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

const categoryIcons: Record<ToolCategory, string> = {
  bild: '🖼',
  text: '📝',
  ljud: '🔊',
  kod: '💻',
  natverk: '🌐',
  berakning: '🔢',
  produktivitet: '⚡',
}

export default function Home() {
  const [category, setCategory] = useState<Category>('alla')
  const [search, setSearch] = useState('')
  const { t } = useLanguage()

  const categoryNames = t.categories ?? {
    bild: 'Bild & Media',
    text: 'Text & Dokument',
    ljud: 'Ljud & Tal',
    kod: 'Kod & Data',
    natverk: 'Nätverk & Säkerhet',
    berakning: 'Beräkning & Konvertering',
    produktivitet: 'Produktivitet & Verktyg',
  }

  const filtered = tools.filter((tool) => {
    const categoryMatch =
      category === 'alla' ||
      (category === 'dator' && (tool.device === 'dator' || tool.device === 'båda')) ||
      (category === 'mobil' && (tool.device === 'mobil' || tool.device === 'båda')) ||
      (category === 'online' && tool.connection === 'online') ||
      (category === 'offline' && tool.connection === 'offline')

    if (!categoryMatch) return false
    if (!search.trim()) return true

    const toolT = t.tools[tool.id]
    if (!toolT) return true
    const q = search.toLowerCase()
    return toolT.name.toLowerCase().includes(q) || toolT.description.toLowerCase().includes(q)
  })

  const showCategories = category === 'alla' && !search.trim()

  return (
    <div>
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.toolsHeading}</h1>
        <TabNavigation active={category} onChange={setCategory} />
      </div>
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500 hc:text-white" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 hc:text-white placeholder-gray-400 dark:placeholder-gray-500 hc:placeholder-gray-300 outline-none transition-colors focus:border-blue-400 dark:focus:border-blue-500 hc:focus:border-white"
        />
      </div>

      {showCategories ? (
        <div className="space-y-8">
          {categoryOrder.map((cat) => {
            const catTools = filtered.filter((tool) => tool.category === cat)
            if (catTools.length === 0) return null
            return (
              <section key={cat}>
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
                  <span>{categoryIcons[cat]}</span>
                  {categoryNames[cat]}
                  <span className="text-sm font-normal text-gray-400 dark:text-gray-500">({catTools.length})</span>
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {catTools.map((tool) => (
                    <ToolCard key={tool.route} tool={tool} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.route} tool={tool} />
          ))}
        </div>
      )}

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-500 hc:text-gray-300">{t.emptyState}</p>
      )}
    </div>
  )
}
