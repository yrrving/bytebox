import { describe, it, expect } from 'vitest'
import { pictograms } from './pictograms'
import { tools } from './tools'

/**
 * Varje verktyg hänger på startsidans vägg med en egen bild. Ett verktyg utan
 * bild skulle hänga där som en tom plats, så ett nytt verktyg måste ritas in
 * i pictograms.tsx samtidigt som det läggs till i tools.ts.
 */
describe('verktygsbilder', () => {
  it.each(tools.map((tool) => [tool.id]))('%s har en egen bild', (id) => {
    expect(pictograms[id]).toBeTruthy()
  })

  it('har inga bilder för verktyg som inte finns', () => {
    const ids = new Set(tools.map((tool) => tool.id))
    expect(Object.keys(pictograms).filter((id) => !ids.has(id))).toEqual([])
  })
})
