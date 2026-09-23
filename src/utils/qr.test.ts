import { describe, it, expect } from 'vitest'
import { parseLines, safeFileName } from './qr'

describe('parseLines', () => {
  it('gör en rad till en QR-kod utan etikett', () => {
    expect(parseLines('https://exempel.se')).toEqual([{ content: 'https://exempel.se', label: '' }])
  })

  it('delar på första kommatecknet till innehåll och etikett', () => {
    expect(parseLines('https://exempel.se, Butiken')).toEqual([
      { content: 'https://exempel.se', label: 'Butiken' },
    ])
  })

  it('behåller kommatecken i etiketten', () => {
    expect(parseLines('kod, Lager, hylla 3')).toEqual([{ content: 'kod', label: 'Lager, hylla 3' }])
  })

  it('hoppar över tomma rader', () => {
    expect(parseLines('a\n\n  \nb')).toEqual([
      { content: 'a', label: '' },
      { content: 'b', label: '' },
    ])
  })

  it('hoppar över rader där innehållet saknas', () => {
    expect(parseLines(', bara etikett\nriktig')).toEqual([{ content: 'riktig', label: '' }])
  })

  it('klarar radbrytningar med CRLF', () => {
    expect(parseLines('a\r\nb')).toHaveLength(2)
  })

  it('trimmar mellanslag runt både innehåll och etikett', () => {
    expect(parseLines('  kod  ,   etikett  ')).toEqual([{ content: 'kod', label: 'etikett' }])
  })

  it('ger tom lista för tom inmatning', () => {
    expect(parseLines('')).toEqual([])
    expect(parseLines('   \n  ')).toEqual([])
  })
})

describe('safeFileName', () => {
  it('byter ut tecken som inte får finnas i filnamn', () => {
    expect(safeFileName('a/b\\c?d%e*f:g|h"i<j>k', 'x')).toBe('a-b-c-d-e-f-g-h-i-j-k')
  })

  it('gör om mellanslag till understreck', () => {
    expect(safeFileName('två  ord', 'x')).toBe('två_ord')
  })

  it('kortar av långa namn till 60 tecken', () => {
    expect(safeFileName('a'.repeat(200), 'x')).toHaveLength(60)
  })

  it('faller tillbaka när namnet blir tomt', () => {
    expect(safeFileName('   ', 'qr-1')).toBe('qr-1')
    expect(safeFileName('', 'qr-2')).toBe('qr-2')
  })
})
