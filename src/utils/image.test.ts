import { describe, it, expect, vi, afterEach } from 'vitest'
import { GRANSER, ForStorFil } from './filstorlek'
import { loadImageFromFile } from './image'

/**
 * Gränsen för bildfiler kontrolleras på ett enda ställe, här, och gäller
 * därmed varje bildverktyg. Försvinner kontrollen härifrån finns den ingen
 * annanstans, så testet bevakar själva anropet och inte bara gränsen.
 */

/** En blob med rätt storlek men utan riktigt innehåll. Bara size läses. */
function blobMed(megabyte: number): Blob {
  return { size: Math.round(megabyte * 1024 * 1024) } as Blob
}

afterEach(() => {
  vi.restoreAllMocks()
})

describe('loadImageFromFile', () => {
  it('stoppar en bild över gränsen innan den läses in', async () => {
    const createUrl = vi.spyOn(URL, 'createObjectURL')

    await expect(loadImageFromFile(blobMed(GRANSER.bild + 1))).rejects.toBeInstanceOf(ForStorFil)
    expect(createUrl).not.toHaveBeenCalled()
  })
})
