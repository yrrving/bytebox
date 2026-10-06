import { GRANSER, kontrolleraStorlek } from './filstorlek'

/**
 * Läser in en bildfil till ett <img> och släpper object-URL:en så fort bilden
 * är avkodad. Ersätter mönstret `img.src = URL.createObjectURL(file)`, där
 * URL:en annars aldrig städas.
 *
 * Storleken kontrolleras här i stället för i varje verktyg, så att gränsen
 * gäller överallt och inte kan glömmas bort i nästa bildverktyg som skrivs.
 */
export function loadImageFromFile(file: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    try {
      kontrolleraStorlek(file, GRANSER.bild)
    } catch (fel) {
      reject(fel)
      return
    }

    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('Kunde inte läsa bildfilen'))
    }
    img.src = url
  })
}
