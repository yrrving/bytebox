// Word-exporten för Skriva dokument. Ligger i en egen fil så att docx-biblioteket
// (flera hundra kB) bara laddas när någon faktiskt trycker på "Ladda ner Word",
// inte när verktyget öppnas. Se downloadWord i pages/tools/WordProcessor.tsx.
import type { JSONContent } from '@tiptap/react'
import {
  Document, Packer, Paragraph, TextRun, ExternalHyperlink, HeadingLevel, UnderlineType, BorderStyle,
  type ParagraphChild,
} from 'docx'

const HEADING_LEVEL: Record<number, (typeof HeadingLevel)[keyof typeof HeadingLevel]> = {
  1: HeadingLevel.HEADING_1,
  2: HeadingLevel.HEADING_2,
  3: HeadingLevel.HEADING_3,
}

// Marks -> a plain run, or a hyperlink wrapping a run (Word needs a distinct element for links).
function buildInline(nodes: JSONContent[] = []): ParagraphChild[] {
  const children: ParagraphChild[] = []
  for (const node of nodes) {
    if (node.type === 'hardBreak') {
      children.push(new TextRun({ text: '', break: 1 }))
      continue
    }
    if (node.type !== 'text') continue
    const marks = node.marks ?? []
    const bold = marks.some((m) => m.type === 'bold')
    const italics = marks.some((m) => m.type === 'italic')
    const strike = marks.some((m) => m.type === 'strike')
    const underline = marks.some((m) => m.type === 'underline')
    const linkMark = marks.find((m) => m.type === 'link')
    const text = node.text ?? ''
    if (linkMark) {
      children.push(
        new ExternalHyperlink({
          link: linkMark.attrs?.href ?? '#',
          children: [
            new TextRun({ text, bold, italics, strike, color: '2563EB', underline: { type: UnderlineType.SINGLE } }),
          ],
        })
      )
    } else {
      children.push(new TextRun({ text, bold, italics, strike, underline: underline ? { type: UnderlineType.SINGLE } : undefined }))
    }
  }
  return children
}

// Walks Tiptap's document JSON and flattens it into docx Paragraphs.
// Ordered lists are rendered as plain "1. " text prefixes rather than a real
// docx numbering definition. Keeps the exporter dependency-free and is
// visually identical for the single-level lists this editor produces.
function buildBlocks(nodes: JSONContent[] = [], indent = 0): Paragraph[] {
  const paragraphs: Paragraph[] = []
  for (const node of nodes) {
    const indentOpt = indent ? { left: indent } : undefined
    switch (node.type) {
      case 'paragraph':
        paragraphs.push(new Paragraph({ children: buildInline(node.content), indent: indentOpt }))
        break
      case 'heading':
        paragraphs.push(new Paragraph({ heading: HEADING_LEVEL[node.attrs?.level ?? 1], children: buildInline(node.content) }))
        break
      case 'bulletList':
        for (const item of node.content ?? []) {
          const inner = item.content ?? []
          const first = inner[0]
          paragraphs.push(new Paragraph({ bullet: { level: indent / 720 }, children: buildInline(first?.content) }))
          paragraphs.push(...buildBlocks(inner.slice(1), indent + 720))
        }
        break
      case 'orderedList': {
        let n = node.attrs?.start ?? 1
        for (const item of node.content ?? []) {
          const inner = item.content ?? []
          const first = inner[0]
          const runs = buildInline(first?.content)
          paragraphs.push(new Paragraph({ indent: indentOpt, children: [new TextRun({ text: `${n}. ` }), ...runs] }))
          n += 1
          paragraphs.push(...buildBlocks(inner.slice(1), indent + 720))
        }
        break
      }
      case 'blockquote':
        paragraphs.push(...buildBlocks(node.content, indent + 720))
        break
      case 'codeBlock':
        paragraphs.push(new Paragraph({ children: [new TextRun({ text: node.content?.[0]?.text ?? '', font: 'Consolas' })] }))
        break
      case 'horizontalRule':
        paragraphs.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '999999' } } }))
        break
      default:
        break
    }
  }
  return paragraphs
}

/** Gör om skrivytans innehåll (Tiptaps JSON) till en Word-fil. */
export async function tiptapToDocx(json: JSONContent): Promise<Blob> {
  const doc = new Document({ sections: [{ properties: {}, children: buildBlocks(json.content) }] })
  return Packer.toBlob(doc)
}
