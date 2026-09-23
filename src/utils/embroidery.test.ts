import { describe, it, expect } from 'vitest'
import { parseEmbroidery } from './embroidery'

/**
 * Karaktäriseringstester: de låser fast hur parsrarna beter sig i dag, så att
 * en framtida ändring inte tyst flyttar stygn. De är INTE en validering mot
 * formatspecifikationerna, det kräver riktiga broderifiler att jämföra mot.
 */

/** Bygger en DST-fil: 512 byte header + treByte-poster + slutmarkör. */
function dst(records: number[][]): ArrayBuffer {
  const body = records.flat()
  const buf = new Uint8Array(512 + body.length + 3)
  buf.fill(0x20, 0, 512)
  buf.set(body, 512)
  buf.set([0x00, 0x00, 0xf3], 512 + body.length)
  return buf.buffer
}

const NORMAL = 0x03 // nettoförflyttning 0 från byte 3
const COLOR_CHANGE = 0xc3

describe('parseEmbroidery, routing', () => {
  it('väljer parser på filändelse, skiftlägesokänsligt', () => {
    const file = dst([[0x01, 0x00, NORMAL]])
    expect(parseEmbroidery(file, 'design.dst')).not.toBeNull()
    expect(parseEmbroidery(file, 'DESIGN.DST')).not.toBeNull()
  })

  it('ger null för format vi inte stöder', () => {
    expect(parseEmbroidery(dst([[0x01, 0x00, NORMAL]]), 'design.exp')).toBeNull()
    expect(parseEmbroidery(new ArrayBuffer(1024), 'utan-ändelse')).toBeNull()
  })
})

describe('DST', () => {
  it('avvisar filer som är kortare än headern', () => {
    expect(parseEmbroidery(new ArrayBuffer(511), 'x.dst')).toBeNull()
  })

  it('avvisar en fil utan stygndata', () => {
    expect(parseEmbroidery(dst([]), 'x.dst')).toBeNull()
  })

  it('avkodar den ternära förflyttningen (±1, ±3, ±9, ±27, ±81)', () => {
    // Varje post flyttar x ett steg; byte 3 = 0x03 nettar till noll.
    const d = parseEmbroidery(
      dst([
        [0x01, 0x00, NORMAL], // x +1
        [0x04, 0x00, NORMAL], // x +9
        [0x00, 0x01, NORMAL], // x +3
        [0x00, 0x04, NORMAL], // x +27
      ]),
      'x.dst',
    )!
    // Ackumulerat: 1, 10, 13, 40. Sedan normaliserat mot minsta värdet (1).
    expect(d.stitches.map((s) => s.x)).toEqual([0, 9, 12, 39])
  })

  it('hanterar negativa steg', () => {
    const d = parseEmbroidery(
      dst([
        [0x02, 0x00, NORMAL], // x -1
        [0x08, 0x00, NORMAL], // x -9
      ]),
      'x.dst',
    )!
    // Ackumulerat: -1, -10 → normaliserat mot -10.
    expect(d.stitches.map((s) => s.x)).toEqual([9, 0])
  })

  it('flyttar y oberoende av x', () => {
    const d = parseEmbroidery(dst([[0x80, 0x00, NORMAL], [0x20, 0x00, NORMAL]]), 'x.dst')!
    expect(d.stitches.map((s) => s.y)).toEqual([0, 9])
    expect(d.stitches.every((s) => s.x === 0)).toBe(true)
  })

  it('normaliserar så att minsta koordinaten blir 0', () => {
    const d = parseEmbroidery(dst([[0x02, 0x00, NORMAL], [0x01, 0x00, NORMAL]]), 'x.dst')!
    expect(Math.min(...d.stitches.map((s) => s.x))).toBe(0)
  })

  it('räknar bredd och höjd som spannet mellan ytterpunkterna', () => {
    const d = parseEmbroidery(dst([[0x04, 0x00, NORMAL], [0x04, 0x00, NORMAL]]), 'x.dst')!
    expect(d.width).toBe(9) // 9 → 18, spann 9
    expect(d.height).toBe(0)
  })

  it('stannar vid slutmarkören 00 00 F3', () => {
    const buf = new Uint8Array(512 + 9)
    buf.fill(0x20, 0, 512)
    buf.set([0x01, 0x00, NORMAL], 512)
    buf.set([0x00, 0x00, 0xf3], 515) // slut
    buf.set([0x01, 0x00, NORMAL], 518) // ska ignoreras
    const d = parseEmbroidery(buf.buffer, 'x.dst')!
    expect(d.stitches).toHaveLength(1)
  })

  it('räknar färgbyten och ger en färg per block', () => {
    const d = parseEmbroidery(
      dst([
        [0x01, 0x00, NORMAL],
        [0x00, 0x00, COLOR_CHANGE],
        [0x01, 0x00, NORMAL],
      ]),
      'x.dst',
    )!
    expect(d.colorChanges).toBe(1)
    expect(d.colors).toHaveLength(2)
    expect(d.stitches.map((s) => s.colorIndex)).toEqual([0, 1, 1])
  })

  it('markerar färgbytet som förflyttning, inte som ett stygn', () => {
    const d = parseEmbroidery(
      dst([[0x01, 0x00, NORMAL], [0x00, 0x00, COLOR_CHANGE], [0x01, 0x00, NORMAL]]),
      'x.dst',
    )!
    expect(d.stitches[1].type).toBe('move')
    expect(d.stitchCount).toBe(2) // bara de två normala
  })

  it('färgbytet förflyttar inte nålen (±81 tar ut varandra)', () => {
    const d = parseEmbroidery(dst([[0x00, 0x00, COLOR_CHANGE], [0x00, 0x00, COLOR_CHANGE]]), 'x.dst')!
    expect(d.stitches.every((s) => s.x === 0 && s.y === 0)).toBe(true)
  })

  it('återanvänder färgpaletten när blocken tar slut', () => {
    const many = Array.from({ length: 9 }, () => [0x00, 0x00, COLOR_CHANGE])
    const d = parseEmbroidery(dst(many), 'x.dst')!
    expect(d.colors).toHaveLength(10)
    expect(d.colors[8]).toBe(d.colors[0]) // paletten är 8 lång och rullar runt
  })
})
