import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, ArrowLeft, Image, FileText, Volume2, Code2, Globe, Hash, Zap, Gamepad2, Sparkles, Smartphone, Tablet, Monitor, LayoutGrid, type LucideIcon } from 'lucide-react'
import TabNavigation from '../components/TabNavigation'
import ToolCard from '../components/ToolCard'
import { tools, categoryOrder, runsOn, latestToolIds, type Category, type ToolCategory, type MinScreen, type Tool } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'

const categoryIcons: Record<ToolCategory, LucideIcon> = {
  bild: Image,
  text: FileText,
  ljud: Volume2,
  kod: Code2,
  natverk: Globe,
  berakning: Hash,
  produktivitet: Zap,
  spelutveckling: Gamepad2,
}

const deviceIcons: Record<MinScreen, LucideIcon> = {
  mobil: Smartphone,
  surfplatta: Tablet,
  dator: Monitor,
}

const deviceOrder: MinScreen[] = ['mobil', 'surfplatta', 'dator']

export default function Home() {
  const [category, setCategory] = useState<Category>('alla')
  const [search, setSearch] = useState('')
  const [showAllFlat, setShowAllFlat] = useState(false)
  const [deviceFilter, setDeviceFilter] = useState<MinScreen | null>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const selectedCategory = (searchParams.get('cat') as ToolCategory) || null
  const { t } = useLanguage()

  // De senaste sex nya verktygen, nyast först (från latestToolIds).
  const newTools = latestToolIds
    .map((id) => tools.find((tool) => tool.id === id))
    .filter((tool): tool is Tool => Boolean(tool))

  const categoryNames = t.categories ?? {
    bild: 'Bild & Media',
    text: 'Text & Dokument',
    ljud: 'Ljud & Tal',
    kod: 'Kod & Data',
    natverk: 'Nätverk & Säkerhet',
    berakning: 'Beräkning & Konvertering',
    produktivitet: 'Produktivitet & Verktyg',
    spelutveckling: 'Spelutveckling',
  }

  const allCategoriesLabel = t.allCategories ?? 'Alla kategorier'

  const filtered = tools.filter((tool) => {
    if (category === 'online' && tool.connection !== 'online') return false
    if (category === 'offline' && tool.connection !== 'offline') return false
    if (deviceFilter && !runsOn(tool, deviceFilter)) return false

    if (!search.trim()) return true
    const toolT = t.tools[tool.id]
    if (!toolT) return true
    const q = search.toLowerCase()
    return toolT.name.toLowerCase().includes(q) || toolT.description.toLowerCase().includes(q)
  })

  const showLanding =
    category === 'alla' && !search.trim() && !showAllFlat && !deviceFilter && selectedCategory === null

  const showCategoryDrilldown =
    category === 'alla' && !search.trim() && !showAllFlat && !deviceFilter && selectedCategory !== null

  const handleTabChange = (tab: Category) => {
    setCategory(tab)
    setShowAllFlat(false)
    setDeviceFilter(null)
    setSearchParams({})
  }

  const pickDevice = (device: MinScreen) => {
    setDeviceFilter(device)
    setCategory('alla')
    setShowAllFlat(false)
    setSearch('')
    setSearchParams({})
  }

  const resetToLanding = () => {
    setDeviceFilter(null)
    setShowAllFlat(false)
    setCategory('alla')
    setSearch('')
    setSearchParams({})
  }

  return (
    <div>
      <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{t.toolsHeading}</h1>
          {t.tagline && (
            <p className="mt-1 max-w-xl text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
              {t.tagline}
            </p>
          )}
        </div>
        <TabNavigation active={category} onChange={handleTabChange} />
      </div>
      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500 hc:text-white" />
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value)
            if (e.target.value.trim()) {
              setDeviceFilter(null)
              setShowAllFlat(false)
              setSearchParams({})
            }
          }}
          placeholder={t.searchPlaceholder}
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black py-2 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-100 hc:text-white placeholder-gray-400 dark:placeholder-gray-500 hc:placeholder-gray-300 outline-none transition-colors focus:border-blue-400 dark:focus:border-blue-500 hc:focus:border-white"
        />
      </div>

      {showLanding ? (
        /* ── Landing: new, device questions, categories ── */
        <div className="flex flex-col gap-8">
          {/* Device question buttons */}
          <div>
            <h2 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
              {t.devicePrompt ?? 'Vad kan du göra på din enhet?'}
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {deviceOrder.map((device) => {
                const DeviceIcon = deviceIcons[device]
                const count = tools.filter((tool) => runsOn(tool, device)).length
                return (
                  <button
                    key={device}
                    onClick={() => pickDevice(device)}
                    className="group flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black p-4 text-left transition-all hover:border-blue-400 dark:hover:border-blue-500 hc:hover:border-yellow-400 hover:shadow-md"
                  >
                    <div className="rounded-lg bg-blue-100 p-2.5 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 hc:bg-gray-900 hc:text-white">
                      <DeviceIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white hc:text-white">
                        {t.minScreenLabel?.[device] ?? device}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300">
                        {count} {t.toolsHeading.toLowerCase()}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {newTools.length > 0 && (
            <div>
              <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
                <Sparkles className="h-5 w-5 text-blue-500 dark:text-blue-400 hc:text-yellow-400" />
                {t.newBadge ?? 'Nytt'}
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {newTools.map((tool) => (
                  <ToolCard key={tool.route} tool={tool} />
                ))}
              </div>
            </div>
          )}

          <div>
            <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
              <LayoutGrid className="h-5 w-5 text-blue-500 dark:text-blue-400 hc:text-yellow-400" />
              {t.categoriesHeading ?? 'Kategorier'}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryOrder.map((cat) => {
              const catTools = tools.filter((tool) => tool.category === cat)
              const previewNames = catTools
                .slice(0, 4)
                .map((tool) => t.tools[tool.id]?.name ?? tool.id)
              const CatIcon = categoryIcons[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setSearchParams({ cat })}
                  className="group flex flex-col gap-2 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black p-5 text-left transition-all hover:border-blue-400 dark:hover:border-blue-500 hc:hover:border-yellow-400 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <CatIcon className="h-6 w-6 text-gray-500 dark:text-gray-400 hc:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h2 className="font-semibold text-gray-900 dark:text-white hc:text-white">
                        {categoryNames[cat]}
                      </h2>
                      <span className="text-sm text-gray-400 dark:text-gray-500 hc:text-gray-300">
                        {catTools.length} {t.toolsHeading.toLowerCase()}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 hc:text-gray-300 line-clamp-1">
                    {previewNames.join(', ')}
                    {catTools.length > 4 ? ' ...' : ''}
                  </p>
                </button>
              )
            })}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setShowAllFlat(true)}
              className="rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:border-blue-400 dark:hover:border-blue-500 hc:hover:border-yellow-400"
            >
              {t.showAll ?? 'Visa alla verktyg'} ({tools.length})
            </button>
          </div>
        </div>
      ) : showCategoryDrilldown ? (
        /* ── Single category drill-down ── */
        <div>
          <button
            onClick={() => setSearchParams({})}
            className="mb-4 flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hc:text-yellow-400 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {allCategoriesLabel}
          </button>
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
            {(() => { const CatIcon = categoryIcons[selectedCategory as ToolCategory]; return <CatIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 hc:text-white" /> })()}
            {categoryNames[selectedCategory as ToolCategory]}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools
              .filter((tool) => tool.category === selectedCategory)
              .map((tool) => (
                <ToolCard key={tool.route} tool={tool} />
              ))}
          </div>
        </div>
      ) : (
        /* ── Flat grid (device filter, search results, tab filter, show-all) ── */
        <div>
          {deviceFilter && (
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <button
                onClick={resetToLanding}
                className="flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 hc:text-yellow-400 hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                {allCategoriesLabel}
              </button>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200 hc:text-white">
                {(() => { const DeviceIcon = deviceIcons[deviceFilter]; return <DeviceIcon className="h-5 w-5 text-gray-500 dark:text-gray-400 hc:text-white" /> })()}
                {t.minScreenLabel?.[deviceFilter] ?? deviceFilter}
              </h2>
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tool) => (
              <ToolCard key={tool.route} tool={tool} />
            ))}
          </div>
        </div>
      )}

      {filtered.length === 0 && !showLanding && !showCategoryDrilldown && (
        <p className="mt-8 text-center text-gray-500 hc:text-gray-300">{t.emptyState}</p>
      )}
    </div>
  )
}
