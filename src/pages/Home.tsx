import { useRef, useState } from 'react'
import { Search, Upload, X } from 'lucide-react'
import ToolTile from '../components/ToolTile'
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
    <div className="pt-4 sm:pt-8">
      {/* ── Rubriken och "jag har en ..." ── */}
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
        className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-14"
      >
        <div>
          <h1
            id="home-heading"
            className="text-5xl font-bold leading-[0.95] tracking-[-0.035em] text-gray-900 sm:text-7xl lg:text-8xl dark:text-white"
          >
            {h?.heading ?? 'Vad vill du göra?'}
          </h1>
          <p className="mt-5 max-w-[30ch] text-xl leading-snug text-gray-800 sm:text-2xl dark:text-gray-100 hc:text-white">
            {h?.lead}
          </p>
        </div>

        <div>
          <p id="pick-label" className="text-lg font-bold text-gray-900 dark:text-white">
            {h?.orPick}
          </p>
          <div role="group" aria-labelledby="pick-label" className="mt-3 flex flex-wrap gap-2.5">
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
                  className={`min-h-11 rounded-lg border-2 px-4 text-base font-bold transition-colors ${
                    pressed
                      ? 'border-gray-900 bg-gray-900 text-white dark:border-white dark:bg-white dark:text-gray-950 hc:border-yellow-400 hc:bg-yellow-400 hc:text-black'
                      : 'border-gray-900 bg-[var(--board)] text-gray-900 hover:bg-[var(--paint)] dark:border-gray-100 dark:text-white hc:border-white hc:hover:bg-black hc:hover:text-yellow-400'
                  }`}
                >
                  {kindLabel(pick)}
                </button>
              )
            })}
          </div>
          <p className="mt-4 text-base leading-relaxed text-gray-800 dark:text-gray-100 hc:text-white">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className={`py-1 font-bold underline decoration-2 underline-offset-4 ${
                dragging
                  ? 'text-blue-700 dark:text-blue-300 hc:text-yellow-400'
                  : 'text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-300 hc:text-white hc:hover:text-yellow-400'
              }`}
            >
              <Upload className="mr-1.5 inline h-5 w-5 align-[-0.2em]" aria-hidden="true" />
              {h?.chooseFile}
            </button>
            , {h?.dragHint}.
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

      {/* ── Sök och enhet ── */}
      <div className="mt-14 flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
        <div className="relative w-full md:max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-700 dark:text-gray-200 hc:text-white"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchPlaceholder}
            aria-label={t.searchPlaceholder}
            className="min-h-12 w-full rounded-lg border-2 border-gray-900 bg-white py-2 pl-12 pr-4 text-base text-gray-900 placeholder-gray-600 outline-none focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-gray-100 dark:bg-gray-950 dark:text-gray-100 dark:placeholder-gray-300 dark:focus-visible:outline-blue-300 hc:border-white hc:bg-black hc:text-white hc:placeholder-gray-300 hc:focus-visible:outline-yellow-400"
          />
        </div>
        <div role="group" aria-label={h?.worksOn} className="flex flex-wrap items-center gap-1 text-base">
          <span className="mr-2 text-gray-700 dark:text-gray-200 hc:text-gray-200" aria-hidden="true">
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
                className={`min-h-11 border-b-[3px] px-2.5 transition-colors ${
                  pressed
                    ? 'border-blue-600 font-bold text-gray-900 dark:border-blue-300 dark:text-white hc:border-yellow-400 hc:text-yellow-400'
                    : 'border-transparent text-gray-800 hover:border-gray-400 dark:text-gray-100 dark:hover:border-gray-500 hc:text-white hc:underline'
                }`}
              >
                {d ? (t.minScreenLabel?.[d] ?? d) : h?.allDevices}
              </button>
            )
          })}
        </div>
      </div>

      {/* Det ByteBox lovar, en gång, lugnt */}
      {t.tagline && (
        <p className="mt-6 max-w-[68ch] text-base leading-relaxed text-gray-700 dark:text-gray-200 hc:text-gray-200">
          {t.tagline}
        </p>
      )}

      {/* ── Läget just nu, läses upp av skärmläsare ── */}
      <div className="mt-6 flex min-h-11 flex-wrap items-center gap-3" aria-live="polite">
        {unknownFile ? (
          <p className="text-base text-gray-900 dark:text-gray-100 hc:text-white">{h?.unknownFile}</p>
        ) : filtering ? (
          <p className="text-base font-bold text-gray-900 dark:text-white">
            {have?.from === 'file' && <span className="font-normal">{h?.youHave} {have.name}. </span>}
            {(h?.matchCount ?? '{n} verktyg passar').replace('{n}', String(matches.length))}
          </p>
        ) : null}
        {filtering && (
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex min-h-11 items-center gap-1 text-base font-bold text-blue-700 underline decoration-2 underline-offset-4 dark:text-blue-300 hc:text-yellow-400"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            {h?.clear}
          </button>
        )}
      </div>

      {/* ── Väggen: alla verktyg, kategori för kategori ── */}
      <div className="mt-10 flex flex-col gap-20">
        {categoryOrder.map((cat) => {
          const catTools = matches.filter((tool) => tool.category === cat)
          if (catTools.length === 0) return null
          return (
            <section key={cat} aria-labelledby={`cat-${cat}`}>
              <h2
                id={`cat-${cat}`}
                className="mb-8 flex flex-wrap items-baseline gap-x-4 text-4xl font-bold leading-none tracking-[-0.025em] text-gray-900 sm:text-5xl dark:text-white"
              >
                {categoryNames[cat]}
                <span className="text-lg font-normal tracking-normal text-gray-700 dark:text-gray-200 hc:text-gray-200">
                  {catTools.length}
                </span>
              </h2>
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {catTools.map((tool) => (
                  <ToolTile key={tool.route} tool={tool} />
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {matches.length === 0 && !unknownFile && (
        <p className="mt-8 text-lg text-gray-800 dark:text-gray-100 hc:text-gray-200">{t.emptyState}</p>
      )}
    </div>
  )
}
