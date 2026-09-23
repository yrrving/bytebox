/**
 * Läser in en bildfil till ett <img> och släpper object-URL:en så fort bilden
 * är avkodad. Ersätter mönstret `img.src = URL.createObjectURL(file)`, där
 * URL:en annars aldrig städas.
 */
export function loadImageFromFile(file: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
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
