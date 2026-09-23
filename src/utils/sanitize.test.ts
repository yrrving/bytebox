import { describe, it, expect } from 'vitest'
import { marked } from 'marked'
import DOMPurify from 'dompurify'

/**
 * Markdown får innehålla rå HTML och marked sanerar inte. Renderas den rakt in
 * i sidan kan inklistrad markdown köra kod i Bytebox origin och läsa vad andra
 * verktyg sparat i localStorage. De här testerna låser fast att vi sanerar.
 */
const render = (md: string) => DOMPurify.sanitize(marked.parse(md, { async: false }) as string)

describe('markdown-sanering', () => {
  it('tar bort script-taggar', () => {
    const out = render('Hej\n\n<script>alert(1)</script>')
    expect(out).not.toContain('<script')
    expect(out).toContain('Hej')
  })

  it('tar bort onerror på bilder', () => {
    const out = render('<img src=x onerror="alert(1)">')
    expect(out.toLowerCase()).not.toContain('onerror')
  })

  it('tar bort javascript:-länkar', () => {
    const out = render('[klicka](javascript:alert(1))')
    expect(out.toLowerCase()).not.toContain('javascript:')
  })

  it('tar bort inline-händelser på vanliga element', () => {
    const out = render('<div onclick="alert(1)">text</div>')
    expect(out.toLowerCase()).not.toContain('onclick')
    expect(out).toContain('text')
  })

  it('tar bort iframes', () => {
    const out = render('<iframe src="https://example.com"></iframe>')
    expect(out.toLowerCase()).not.toContain('<iframe')
  })

  it('behåller vanlig markdown-formatering', () => {
    const out = render('# Rubrik\n\n**fet** och *kursiv*\n\n- punkt')
    expect(out).toContain('<h1')
    expect(out).toContain('<strong>fet</strong>')
    expect(out).toContain('<em>kursiv</em>')
    expect(out).toContain('<li>')
  })

  it('behåller vanliga länkar och bilder', () => {
    const out = render('[Bytebox](https://example.com) ![bild](https://example.com/a.png)')
    expect(out).toContain('href="https://example.com"')
    expect(out).toContain('src="https://example.com/a.png"')
  })

  it('behåller kodblock', () => {
    const out = render('```\nconst x = 1\n```')
    expect(out).toContain('<code>')
    expect(out).toContain('const x = 1')
  })
})
