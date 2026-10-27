import { describe, it, expect } from 'vitest'
import { tiptapToDocx } from './docx'

describe('tiptapToDocx', () => {
  it('gör en Word-fil av rubrik, stycke, lista och länk', async () => {
    const blob = await tiptapToDocx({
      type: 'doc',
      content: [
        { type: 'heading', attrs: { level: 1 }, content: [{ type: 'text', text: 'Rubrik' }] },
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Fet', marks: [{ type: 'bold' }] },
            { type: 'text', text: ' länk', marks: [{ type: 'link', attrs: { href: 'https://example.org' } }] },
          ],
        },
        {
          type: 'orderedList',
          content: [{ type: 'listItem', content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Ett' }] }] }],
        },
      ],
    })

    // En .docx är en zip-fil, och de börjar alltid med "PK".
    const bytes = new Uint8Array(await blob.arrayBuffer())
    expect(bytes.length).toBeGreaterThan(1000)
    expect(String.fromCharCode(bytes[0], bytes[1])).toBe('PK')
  })

  it('klarar ett tomt dokument', async () => {
    const blob = await tiptapToDocx({ type: 'doc' })
    expect(blob.size).toBeGreaterThan(0)
  })
})
