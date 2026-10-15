import { useRef, useState } from 'react'
import { Search, Upload, X } from 'lucide-react'
import ToolRow from '../components/ToolRow'
import { tools, categoryOrder, runsOn, acceptsAny, type ToolCategory, type MinScreen } from '../data/tools'
import { fileKinds, type FileKind } from '../utils/filsort'
import { useLanguage } from '../context/LanguageContext'

/** Det man kan välja utan att släppa en fil. 'ingen' = verktyg som börjar från noll. */
type Pick = Exclude<FileKind, 'heic'> | 'ingen'
const pickOrder: Pick[] = ['bild', 'video', 'ljud', 'pdf', 'undertext', 'broderi', 'ingen']

const deviceOrder: MinScreen[] = ['mobil', 'surfplatta', 'dator']

/** Vad startsidan just nu filtrerar på: en släppt fil eller ett val i listan. */
type Have =
  | { from: 'file'; name: string; kinds: FileKind[] }
  | { from: 'pick'; pick: Pick }
  | null

export default function Home() {
  const { t } = useLanguage()
  const h = t.home
  const [search, setSearch] = useState('')
  const [device, setDevice] = useState<MinScreen | null>(null)
  const [have, setHave] = useState<Have>(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const kindLabel = (kind: FileKind | 'ingen') => h?.kinds[kind] ?? kind

  const categoryNames: Record<ToolCategory, string> = t.categories ?? {
    bild: 'Bild & foto',
    form: 'Form & tillverkning',
    text: 'Text & dokument',
    ljud: 'Ljud & musik',
    spel: 'Spel',
  }

  // Filen läses aldrig, bara namnet och typen. Se utils/filsort.ts.
  const takeFile = (file: File | undefined) => {
    if (!file) return
    setHave({ from: 'file', name: file.name, kinds: fileKinds(file) })
    setSearch('')
  }

  const matches = tools.filter((tool) => {
    if (device && !runsOn(tool, device)) return false
    if (have?.from === 'file' && have.kinds.length > 0 && !acceptsAny(tool, have.kinds)) return false
    if (have?.from === 'pick') {
      if (have.pick === 'ingen' ? tool.inputs.length > 0 : !acceptsAny(tool, [have.pick])) return false
    }
    const q = search.trim().toLowerCase()
    if (!q) return true
    const toolT = t.tools[tool.id]
    return Boolean(toolT && (toolT.name.toLowerCase().includes(q) || toolT.description.toLowerCase().includes(q)))
  })

  const filtering = have !== null || device !== null || search.trim() !== ''
  const unknownFile = have?.from === 'file' && have.kinds.length === 0
  const activePick = have?.from === 'pick' ? have.pick : null

  const clearAll = () => {
    setHave(null)
    setDevice(null)
    setSearch('')
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div>
      {/* ── Filytan på hålplattan ── */}
      <section
        aria-labelledby="home-heading"
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragging(false)
        }}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          takeFile(e.dataTransfer.files[0])
        }}
        className="pegboard -mx-4 px-4 py-8 sm:mx-0 sm:rounded-2xl sm:px-10 sm:py-10 hc:border-2 hc:border-white"
      >
        <h1
          id="home-heading"
          className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl dark:text-white"
        >
          {h?.heading ?? 'Vad har du med dig?'}
        </h1>
        <p className="mt-3 max-w-xl text-lg leading-snug text-gray-700 dark:text-blue-100 hc:text-white">
          {h?.lead}
        </p>

        <div className="mt-8">
          <p id="pick-label" className="text-base font-bold text-gray-900 dark:text-white">
            {h?.orPick}
          </p>
          <div role="group" aria-labelledby="pick-label" className="mt-3 flex flex-wrap gap-2">
            {pickOrder.map((pick) => {
              // En släppt fil tänder sin sort, så man ser vad ByteBox läste ut.
              const pressed =
                activePick === pick || (have?.from === 'file' && pick !== 'ingen' && have.kinds.includes(pick))
              return (
                <button
                  key={pick}
                  type="button"
                  aria-pressed={pressed}
                  onClick={() => {
                    setHave(pressed ? null : { from: 'pick', pick })
                    if (inputRef.current) inputRef.current.value = ''
                  }}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    pressed
                      ? 'border-blue-700 bg-blue-700 font-bold text-white dark:border-blue-300 dark:bg-blue-300 dark:text-gray-950 hc:border-yellow-400 hc:bg-yellow-400 hc:text-black'
                      : 'border-gray-400 bg-white text-gray-800 hover:border-blue-600 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-blue-300 hc:border-white hc:bg-black hc:text-white'
                  }`}
                >
                  {kindLabel(pick)}
                </button>
              )
            })}
          </div>
          <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-700 dark:text-blue-100 hc:text-white">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className={`inline-flex items-center gap-1.5 rounded-md border border-dashed px-2.5 py-1 font-bold transition-colors ${
                dragging
                  ? 'border-blue-600 bg-white text-blue-700 dark:border-blue-300 dark:bg-gray-900 dark:text-blue-200 hc:border-yellow-400 hc:text-yellow-400'
                  : 'border-gray-500 text-gray-900 hover:border-blue-600 dark:border-blue-300/60 dark:text-white hc:border-white hc:text-white'
              }`}
            >
              <Upload className="h-4 w-4" aria-hidden="true" />
              {h?.chooseFile}
            </button>
            <span>{h?.dragHint}.</span>
          </p>
          <input
            ref={inputRef}
            type="file"
            className="sr-only"
            tabIndex={-1}
            aria-hidden="true"
            onChange={(e) => takeFile(e.target.files?.[0])}
          />
        </div>
      </section>

      {/* Det ByteBox lovar, en gång, lugnt */}
      {t.tagline && (
        <p className="mt-6 max-w-2xl text-sm text-gray-600 dark:text-gray-300 hc:text-gray-200">{t.tagline}</p>
      )}

      {/* ── Sök och enhet ── */}
      <div className="mt-8 flex flex-col gap-3 border-b border-gray-200 pb-4 dark:border-gray-700 hc:border-white md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600 dark:text-gray-300 hc:text-white"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 hc:border-white hc:bg-black hc:text-white hc:placeholder-gray-300"
          />
        </div>
        <div role="group" aria-label={h?.worksOn} className="flex flex-wrap items-center gap-1 text-sm">
          <span className="mr-1 text-gray-600 dark:text-gray-300 hc:text-gray-200" aria-hidden="true">
            {h?.worksOn}
          </span>
          {[null, ...deviceOrder].map((d) => {
            const pressed = device === d
            return (
              <button
                key={d ?? 'alla'}
                type="button"
                aria-pressed={pressed}
                onClick={() => setDevice(d)}
                className={`rounded-md px-3 py-1.5 transition-colors ${
                  pressed
                    ? 'bg-gray-900 font-bold text-white dark:bg-white dark:text-gray-900 hc:bg-yellow-400 hc:text-black'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800 hc:text-white hc:underline'
                }`}
              >
                {d ? (t.minScreenLabel?.[d] ?? d) : h?.allDevices}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Läget just nu, läses upp av skärmläsare ── */}
      <div className="mt-4 flex min-h-8 flex-wrap items-center gap-3" aria-live="polite">
        {unknownFile ? (
          <p className="text-sm text-gray-800 dark:text-gray-100 hc:text-white">{h?.unknownFile}</p>
        ) : filtering ? (
          <p className="text-sm font-bold text-gray-900 dark:text-white">
            {have?.from === 'file' && <span className="font-normal">{h?.youHave} {have.name}. </span>}
            {(h?.matchCount ?? '{n} verktyg passar').replace('{n}', String(matches.length))}
          </p>
        ) : null}
        {filtering && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-1 text-sm text-blue-700 underline-offset-2 hover:underline dark:text-blue-300 hc:text-yellow-400"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            {h?.clear}
          </button>
        )}
      </div>

      {/* ── Alla verktyg, i kategorier ── */}
      <div className="mt-4 grid gap-x-12 gap-y-10 lg:grid-cols-2">
        {categoryOrder.map((cat) => {
          const catTools = matches.filter((tool) => tool.category === cat)
          if (catTools.length === 0) return null
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2
                id={`cat-${cat}`}
                className="mb-2 flex items-baseline gap-2 border-b-2 border-gray-900 pb-1 text-lg font-bold text-gray-900 dark:border-gray-100 dark:text-white hc:border-white"
              >
                {categoryNames[cat]}
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400 hc:text-gray-200">
                  {catTools.length}
                </span>
              </h2>
              <div className="flex flex-col">
                {catTools.map((tool) => (
                  <ToolRow key={tool.route} tool={tool} />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {matches.length === 0 && !unknownFile && (
        <p className="mt-8 text-gray-600 dark:text-gray-300 hc:text-gray-200">{t.emptyState}</p>
      )}
    </div>
  )
}
