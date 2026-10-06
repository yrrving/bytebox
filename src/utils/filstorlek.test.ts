import { describe, it, expect } from 'vitest'
import {
  GRANSER,
  ForStorFil,
  formateraStorlek,
  kontrolleraStorlek,
  filfelText,
} from './filstorlek'

/** En blob med rätt storlek men utan riktigt innehåll. Bara size läses. */
function blobMed(megabyte: number): Blob {
  return { size: Math.round(megabyte * 1024 * 1024) } as Blob
}

describe('kontrolleraStorlek', () => {
  it('släpper igenom en fil under gränsen', () => {
    expect(() => kontrolleraStorlek(blobMed(8), GRANSER.bild)).not.toThrow()
  })

  it('släpper igenom en fil som ligger exakt på gränsen', () => {
    expect(() => kontrolleraStorlek(blobMed(GRANSER.bild), GRANSER.bild)).not.toThrow()
  })

  it('fäller en fil över gränsen och bär med sig talen', () => {
    let fel: unknown
    try {
      kontrolleraStorlek(blobMed(300), GRANSER.bild)
    } catch (e) {
      fel = e
    }
    expect(fel).toBeInstanceOf(ForStorFil)
    expect((fel as ForStorFil).storlek).toBe(300 * 1024 * 1024)
    expect((fel as ForStorFil).max).toBe(GRANSER.bild * 1024 * 1024)
  })

  it('har en gräns för varje filtyp verktygen tar emot', () => {
    for (const [namn, mb] of Object.entries(GRANSER)) {
      expect(mb, `${namn} saknar en rimlig gräns`).toBeGreaterThan(0)
    }
  })
})

describe('formateraStorlek', () => {
  it('skriver megabyte utan decimaler', () => {
    expect(formateraStorlek(60 * 1024 * 1024)).toBe('60 MB')
  })

  it('går över till gigabyte med svenskt decimaltecken', () => {
    expect(formateraStorlek(1.4 * 1024 ** 3)).toBe('1,4 GB')
  })
})

describe('filfelText', () => {
  const texter = {
    fileTooLarge: 'För stor ({storlek}), max {max}.',
    imageLoadError: 'Kunde inte läsa bilden.',
  }

  it('fyller i både storlek och gräns i meddelandet', () => {
    const text = filfelText(new ForStorFil(300 * 1024 * 1024, 60 * 1024 * 1024), texter)
    expect(text).toBe('För stor (300 MB), max 60 MB.')
  })

  it('väljer inläsningsfelet för alla andra fel', () => {
    expect(filfelText(new Error('trasig fil'), texter)).toBe('Kunde inte läsa bilden.')
  })

  it('faller tillbaka på svensk text när översättningen saknas', () => {
    // Ett saknat språk ska aldrig ge en tom ruta eller platshållare på skärmen.
    const text = filfelText(new ForStorFil(300 * 1024 * 1024, 60 * 1024 * 1024), undefined)
    expect(text).toContain('300 MB')
    expect(text).toContain('60 MB')
    expect(text).not.toContain('{')
  })
})
