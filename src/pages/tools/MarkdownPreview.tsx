import { useState, useMemo, useRef } from 'react'
import { Copy, Check, Trash2, Eye, Edit3, Bold, Italic, Strikethrough, Heading2, Quote, Code, Link2, List, ListOrdered, Table2 } from 'lucide-react'
import { marked } from 'marked'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

type ViewMode = 'split' | 'edit' | 'preview'

const SAMPLE = `# Hello World

This is a **Markdown** preview tool.

## Features

- Live preview
- Split view
- Copy HTML output

\`\`\`js
const greeting = "Hello!"
console.log(greeting)
\`\`\`

> Blockquotes work too!

| Column 1 | Column 2 |
|----------|----------|
| Cell 1   | Cell 2   |
`

export default function MarkdownPreview() {
  const { t } = useLanguage()
  const translation = t.tools['markdown-forhandsgranskning']
  const md = t.markdownPreview

  const [input, setInput] = useState(SAMPLE)
  const [viewMode, setViewMode] = useState<ViewMode>('split')
  const [copied, setCopied] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Replace [start, end] with text and restore focus + a sensible selection.
  const replaceRange = (start: number, end: number, text: string, selectFrom: number, selectTo: number) => {
    const ta = textareaRef.current
    if (!ta) return
    setInput(input.slice(0, start) + text + input.slice(end))
    requestAnimationFrame(() => {
      ta.focus()
      ta.setSelectionRange(selectFrom, selectTo)
    })
  }

  // Wrap the selection (or a placeholder) in prefix/suffix, e.g. **text**.
  const wrapSelection = (prefix: string, suffix: string, placeholder: string) => {
    const ta = textareaRef.current
    if (!ta) return
    const { selectionStart: start, selectionEnd: end } = ta
    const selected = input.slice(start, end) || placeholder
    replaceRange(start, end, prefix + selected + suffix, start + prefix.length, start + prefix.length + selected.length)
  }

  // Prefix every line touched by the selection, e.g. "> " or "- ".
  const prefixLines = (prefix: string | ((i: number) => string)) => {
    const ta = textareaRef.current
    if (!ta) return
    const { selectionStart: start, selectionEnd: end } = ta
    const lineStart = input.lastIndexOf('\n', start - 1) + 1
    const segment = input.slice(lineStart, end)
    const prefixed = segment
      .split('\n')
      .map((line, i) => (typeof prefix === 'string' ? prefix : prefix(i)) + line)
      .join('\n')
    replaceRange(lineStart, end, prefixed, lineStart, lineStart + prefixed.length)
  }

  // Insert a standalone block at the cursor, padded with blank lines.
  const insertBlock = (block: string) => {
    const ta = textareaRef.current
    if (!ta) return
    const { selectionStart: start, selectionEnd: end } = ta
    const before = input.slice(0, start)
    const pad = before === '' || before.endsWith('\n\n') ? '' : before.endsWith('\n') ? '\n' : '\n\n'
    const text = pad + block + '\n'
    replaceRange(start, end, text, start + text.length, start + text.length)
  }

  const onEditorKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!(e.metaKey || e.ctrlKey)) return
    const key = e.key.toLowerCase()
    if (key === 'b') { e.preventDefault(); wrapSelection('**', '**', 'text') }
    else if (key === 'i') { e.preventDefault(); wrapSelection('*', '*', 'text') }
    else if (key === 'k') { e.preventDefault(); wrapSelection('[', '](https://)', 'text') }
  }

  const formatButtons = [
    { icon: Bold, title: (md?.bold ?? 'Fet') + ' (⌘B)', action: () => wrapSelection('**', '**', 'text') },
    { icon: Italic, title: (md?.italic ?? 'Kursiv') + ' (⌘I)', action: () => wrapSelection('*', '*', 'text') },
    { icon: Strikethrough, title: md?.strikethrough ?? 'Genomstruken', action: () => wrapSelection('~~', '~~', 'text') },
    { icon: Heading2, title: md?.heading ?? 'Rubrik', action: () => prefixLines('## ') },
    { icon: Quote, title: md?.quote ?? 'Citat', action: () => prefixLines('> ') },
    { icon: Code, title: md?.code ?? 'Kod', action: () => wrapSelection('`', '`', 'code') },
    { icon: Link2, title: (md?.link ?? 'Länk') + ' (⌘K)', action: () => wrapSelection('[', '](https://)', 'text') },
    { icon: List, title: md?.bulletList ?? 'Punktlista', action: () => prefixLines('- ') },
    { icon: ListOrdered, title: md?.numberedList ?? 'Numrerad lista', action: () => prefixLines((i) => `${i + 1}. `) },
    { icon: Table2, title: md?.table ?? 'Tabell', action: () => insertBlock('| Column 1 | Column 2 |\n|----------|----------|\n| Cell 1   | Cell 2   |') },
  ]

  const html = useMemo(() => {
    try {
      return marked.parse(input, { async: false }) as string
    } catch {
      return ''
    }
  }, [input])

  const copyHtml = async () => {
    if (!html) return
    await navigator.clipboard.writeText(html)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 py-10">
      <BackLink />

      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {translation?.name}
        </h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {translation?.description}
        </p>
        {translation?.hint && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500 hc:text-gray-300 italic">{translation.hint}</p>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white overflow-hidden">
          {([
            { mode: 'edit' as ViewMode, icon: Edit3, label: md?.edit ?? 'Redigera' },
            { mode: 'split' as ViewMode, icon: Eye, label: md?.split ?? 'Delad' },
            { mode: 'preview' as ViewMode, icon: Eye, label: md?.preview ?? 'Förhandsgranskning' },
          ]).map(({ mode, icon: Icon, label }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-colors ${
                viewMode === mode
                  ? 'bg-blue-600 text-white hc:bg-white hc:text-black'
                  : 'bg-gray-50 dark:bg-gray-800 hc:bg-black text-gray-600 dark:text-gray-400 hc:text-gray-400'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={copyHtml}
          disabled={!html}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-500" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? (md?.copied ?? 'Kopierat!') : (md?.copyHtml ?? 'Kopiera HTML')}
        </button>
        <button
          onClick={() => setInput('')}
          disabled={!input}
          className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hc:bg-gray-900 hc:border hc:border-white px-3 py-2 text-xs text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-40"
        >
          <Trash2 className="h-3.5 w-3.5" />
          {md?.clear ?? 'Rensa'}
        </button>
      </div>

      {/* Editor + Preview */}
      <div className={`grid gap-4 ${viewMode === 'split' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Editor */}
        {viewMode !== 'preview' && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
            <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">
              Markdown
            </label>
            <div className="mb-2 flex flex-wrap gap-1">
              {formatButtons.map(({ icon: Icon, title, action }) => (
                <button
                  key={title}
                  onClick={action}
                  title={title}
                  aria-label={title}
                  className="rounded-md border border-gray-200 dark:border-gray-600 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 p-2 text-gray-600 dark:text-gray-300 hc:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onEditorKeyDown}
              placeholder={md?.placeholder ?? 'Skriv Markdown här...'}
              spellCheck={false}
              className="w-full resize-y rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 font-mono text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              rows={20}
            />
          </div>
        )}

        {/* Preview */}
        {viewMode !== 'edit' && (
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
            <label className="mb-2 block text-xs font-medium text-gray-500 dark:text-gray-400">
              {md?.preview ?? 'Förhandsgranskning'}
            </label>
            <div
              className="prose prose-sm dark:prose-invert max-w-none rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-700 hc:bg-gray-900 px-4 py-3 overflow-auto"
              style={{ minHeight: '20rem' }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
