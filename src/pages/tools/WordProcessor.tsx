import { useEffect, useState } from 'react'
import { useEditor, EditorContent, type JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import {
  Bold, Italic, Underline as UnderlineIcon, Strikethrough, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Link2, Undo2, Redo2, Printer, FileDown, Trash2, AlertTriangle,
} from 'lucide-react'
import ToolHeader from '../../components/ToolHeader'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'
import { downloadBlob } from '../../utils/download'

const STORAGE_KEY = 'bytebox-wordprocessor'
const EDITOR_CLASS = 'prose prose-sm dark:prose-invert max-w-none focus:outline-none min-h-[24rem] px-4 py-3'

/** docx laddas först här, inte när sidan öppnas. */
async function downloadWord(json: JSONContent) {
  const { tiptapToDocx } = await import('../../utils/docx')
  downloadBlob(await tiptapToDocx(json), 'dokument.docx')
}

export default function WordProcessor() {
  const { t } = useLanguage()
  const translation = t.tools['ordbehandlare']
  const wp = t.wordProcessor
  const [linkPopoverOpen, setLinkPopoverOpen] = useState(false)
  const [linkUrl, setLinkUrl] = useState('')

  const editor = useEditor({
    extensions: [StarterKit, Underline, Link.configure({ openOnClick: false })],
    content: (() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY)
        return saved ? JSON.parse(saved) : ''
      } catch {
        return ''
      }
    })(),
    editorProps: {
      attributes: {
        class: EDITOR_CLASS,
      },
    },
  })

  // Tiptap marks the editor as a textbox, so it needs a name that follows the language.
  useEffect(() => {
    if (!editor) return
    editor.setOptions({
      editorProps: { attributes: { class: EDITOR_CLASS, 'aria-label': translation?.name ?? 'Skriva dokument' } },
    })
  }, [editor, translation?.name])

  // Debounced autosave of the editor's JSON document.
  useEffect(() => {
    if (!editor) return
    const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(editor.getJSON()))
    let timeout: ReturnType<typeof setTimeout>
    const onUpdate = () => {
      clearTimeout(timeout)
      timeout = setTimeout(save, 500)
    }
    editor.on('update', onUpdate)
    return () => {
      clearTimeout(timeout)
      editor.off('update', onUpdate)
    }
  }, [editor])

  const [, forceRerender] = useState(0)
  useEffect(() => {
    if (!editor) return
    const rerender = () => forceRerender((n) => n + 1)
    editor.on('selectionUpdate', rerender)
    editor.on('transaction', rerender)
    return () => {
      editor.off('selectionUpdate', rerender)
      editor.off('transaction', rerender)
    }
  }, [editor])

  if (!editor) return null

  const wordCount = editor.getText().trim() ? editor.getText().trim().split(/\s+/).length : 0
  const charCount = editor.getText().length

  const openLinkPopover = () => {
    const existing = editor.getAttributes('link').href as string | undefined
    setLinkUrl(existing ?? 'https://')
    setLinkPopoverOpen(true)
  }

  const confirmLink = () => {
    if (linkUrl.trim()) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: linkUrl.trim() }).run()
    }
    setLinkPopoverOpen(false)
  }

  const toggleLink = () => {
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run()
    } else {
      openLinkPopover()
    }
  }

  const buttons = [
    { icon: Bold, title: `${wp?.bold ?? 'Fet'} (⌘B)`, active: editor.isActive('bold'), action: () => editor.chain().focus().toggleBold().run() },
    { icon: Italic, title: `${wp?.italic ?? 'Kursiv'} (⌘I)`, active: editor.isActive('italic'), action: () => editor.chain().focus().toggleItalic().run() },
    { icon: UnderlineIcon, title: `${wp?.underline ?? 'Understruken'} (⌘U)`, active: editor.isActive('underline'), action: () => editor.chain().focus().toggleUnderline().run() },
    { icon: Strikethrough, title: wp?.strikethrough ?? 'Genomstruken', active: editor.isActive('strike'), action: () => editor.chain().focus().toggleStrike().run() },
    { icon: Heading1, title: wp?.heading1 ?? 'Rubrik 1', active: editor.isActive('heading', { level: 1 }), action: () => editor.chain().focus().toggleHeading({ level: 1 }).run() },
    { icon: Heading2, title: wp?.heading2 ?? 'Rubrik 2', active: editor.isActive('heading', { level: 2 }), action: () => editor.chain().focus().toggleHeading({ level: 2 }).run() },
    { icon: Heading3, title: wp?.heading3 ?? 'Rubrik 3', active: editor.isActive('heading', { level: 3 }), action: () => editor.chain().focus().toggleHeading({ level: 3 }).run() },
    { icon: List, title: wp?.bulletList ?? 'Punktlista', active: editor.isActive('bulletList'), action: () => editor.chain().focus().toggleBulletList().run() },
    { icon: ListOrdered, title: wp?.numberedList ?? 'Numrerad lista', active: editor.isActive('orderedList'), action: () => editor.chain().focus().toggleOrderedList().run() },
    { icon: Quote, title: wp?.quote ?? 'Citat', active: editor.isActive('blockquote'), action: () => editor.chain().focus().toggleBlockquote().run() },
    { icon: Link2, title: `${wp?.link ?? 'Länk'} (⌘K)`, active: editor.isActive('link'), action: toggleLink },
  ]

  return (
    <div className="mx-auto max-w-4xl space-y-6 py-10 print:max-w-none print:py-0">
      <div className="print:hidden">
        <BackLink />
      </div>

      <div className="print:hidden">
        <ToolHeader id="ordbehandlare" />
      </div>

      <div className="flex items-start gap-2.5 rounded-lg border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-3 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        <p>{wp?.storageWarning ?? 'Texten sparas medan du skriver, men bara i den här webbläsaren på den här enheten. Den följer inte med till en annan dator och försvinner om du rensar webbläsarens data. På iPhone och iPad tar Safari dessutom bort den efter ungefär en vecka utan besök. Spara ner dokumentet som PDF eller Word när du är klar.'}</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 print:hidden">
        <div className="flex flex-wrap gap-1 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-1">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            title={wp?.undo ?? 'Ångra'}
            aria-label={wp?.undo ?? 'Ångra'}
            className="rounded-md p-2 text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Undo2 className="h-4 w-4" />
          </button>
          <button
            onClick={() => editor.chain().focus().redo().run()}
            title={wp?.redo ?? 'Gör om'}
            aria-label={wp?.redo ?? 'Gör om'}
            className="rounded-md p-2 text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <Redo2 className="h-4 w-4" />
          </button>
          <div className="mx-1 w-px bg-gray-300 dark:bg-gray-600" />
          {buttons.map(({ icon: Icon, title, active, action }) => (
            <button
              key={title}
              onClick={action}
              title={title}
              aria-label={title}
              aria-pressed={active}
              className={`rounded-md p-2 transition-colors ${
                active
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'text-gray-600 dark:text-gray-300 hc:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Icon className="h-4 w-4" />
            </button>
          ))}
        </div>

        <div className="ml-auto flex flex-wrap gap-2">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <Printer className="h-3.5 w-3.5" />
            {wp?.print ?? 'Skriv ut / Spara som PDF'}
          </button>
          <button
            onClick={() => downloadWord(editor.getJSON())}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FileDown className="h-3.5 w-3.5" />
            {wp?.downloadWord ?? 'Ladda ner Word (.docx)'}
          </button>
          <button
            onClick={() => editor.chain().focus().clearContent().run()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <Trash2 className="h-3.5 w-3.5" />
            {wp?.clear ?? 'Rensa'}
          </button>
        </div>
      </div>

      {linkPopoverOpen && (
        <div className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-2 print:hidden">
          <input
            autoFocus
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && confirmLink()}
            className="flex-1 rounded-md border border-gray-300 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-2 py-1 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button onClick={confirmLink} className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">
            OK
          </button>
        </div>
      )}

      <div className="print-area rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 print:rounded-none print:border-none">
        <EditorContent editor={editor} />
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300 hc:text-gray-200 print:hidden">
        <div className="flex gap-4">
          <span>{wp?.words ?? 'Ord'}: <span className="font-medium text-gray-900 dark:text-white">{wordCount}</span></span>
          <span>{wp?.characters ?? 'Tecken'}: <span className="font-medium text-gray-900 dark:text-white">{charCount}</span></span>
        </div>
        <p className="italic">{wp?.autoSaved ?? 'Sparas automatiskt i webbläsaren'}</p>
      </div>
    </div>
  )
}
