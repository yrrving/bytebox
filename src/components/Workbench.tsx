import { useRef, useState, type ReactNode } from 'react'
import { Upload } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import type { Translation } from '../data/translations'

export type WorkbenchKind = keyof NonNullable<Translation['workbench']>['choose']

interface WorkbenchProps {
  /** Vad man väljer. Styr texten på knappen, t.ex. "Välj en bild". */
  kind: WorkbenchKind
  /** Samma som accept på en filinput, t.ex. "image/*". */
  accept?: string
  /** Får man välja flera filer på en gång? */
  multiple?: boolean
  /** Vilka format som funkar, t.ex. "PNG, JPG, WebP". Visas under knappen. */
  formats?: string
  onFiles: (files: File[]) => void
  /** Medan verktyget jobbar: visas i stället för knappen, och inga nya filer tas emot. */
  busy?: ReactNode
  /** Extra luft, för verktyg där arbetsbänken är det enda som syns från början. */
  large?: boolean
  /** Visas ovanför knappen, t.ex. en liten bild av filen man redan valt. */
  preview?: ReactNode
}

/**
 * Arbetsbänken: där man lägger sin fil i ett verktyg. En fast yta med ett
 * svagt rutnät som en skärmatta, och en riktig knapp, så att det går lika bra
 * med tangentbord och skärmläsare som med mus och dra-och-släpp.
 *
 * Filen läses aldrig här. Den lämnas vidare till verktyget via onFiles.
 */
export default function Workbench({ kind, accept, multiple = false, formats, onFiles, busy, large = false, preview }: WorkbenchProps) {
  const { t } = useLanguage()
  const w = t.workbench
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const take = (list: FileList | null | undefined) => {
    if (busy || !list || list.length === 0) return
    const files = Array.from(list)
    onFiles(multiple ? files : files.slice(0, 1))
  }

  const open = () => {
    if (!busy) inputRef.current?.click()
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        if (!busy) setDragging(true)
      }}
      onDragLeave={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setDragging(false)
      }}
      onDrop={(e) => {
        e.preventDefault()
        setDragging(false)
        take(e.dataTransfer.files)
      }}
      // Hela ytan går att klicka på med mus. Tangentbord och skärmläsare
      // använder knappen, så ytan själv behöver ingen roll.
      onClick={(e) => {
        if (e.target === e.currentTarget) open()
      }}
      className={`workbench flex flex-col items-center justify-center gap-3 rounded-xl border-2 px-6 text-center transition-colors ${
        large ? 'py-16' : 'py-10'
      } ${busy ? '' : 'cursor-pointer'} ${
        dragging
          ? 'border-blue-600 dark:border-blue-300 hc:border-yellow-400'
          : 'border-gray-900 dark:border-gray-100 hc:border-white'
      } bg-white dark:bg-gray-950 hc:bg-black`}
    >
      {busy ? (
        <div role="status" className="flex flex-col items-center gap-2 text-base text-gray-800 dark:text-gray-100 hc:text-white">
          {busy}
        </div>
      ) : (
        <>
          {preview}
          <button
            type="button"
            onClick={open}
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-blue-600 px-5 text-base font-bold text-white transition-colors hover:bg-blue-700 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-300 hc:bg-white hc:text-black hc:hover:bg-yellow-400 hc:focus-visible:outline-yellow-400"
          >
            <Upload className="h-5 w-5" aria-hidden="true" />
            {w?.choose[kind] ?? 'Välj en fil'}
          </button>
          <p className="pointer-events-none text-base text-gray-800 dark:text-gray-100 hc:text-white">
            {multiple ? (w?.dropMany ?? 'eller dra hit dem') : (w?.dropOne ?? 'eller dra hit den')}
          </p>
          {formats && (
            <p className="pointer-events-none text-sm text-gray-700 dark:text-gray-200 hc:text-gray-200">
              {(w?.formats ?? 'Funkar med {formats}').replace('{formats}', formats)}
            </p>
          )}
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        onChange={(e) => {
          take(e.target.files)
          // Samma fil ska gå att välja igen, t.ex. efter "börja om".
          e.target.value = ''
        }}
      />
    </div>
  )
}
