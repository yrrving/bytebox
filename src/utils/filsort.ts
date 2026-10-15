/**
 * Vilken sorts fil är det här? Startsidan använder svaret för att visa de
 * verktyg som kan ta emot filen.
 *
 * Bara namnet och webbläsarens MIME-typ läses. Innehållet öppnas aldrig,
 * så det här fungerar likadant för en fil på 2 kB och en på 2 GB.
 */

export type FileKind = 'bild' | 'heic' | 'video' | 'ljud' | 'pdf' | 'undertext' | 'broderi'

const BILD = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp', 'avif', 'tif', 'tiff', 'svg']
const HEIC = ['heic', 'heif']
const VIDEO = ['mp4', 'mov', 'm4v', 'webm', 'mkv', 'avi']
const LJUD = ['mp3', 'wav', 'm4a', 'aac', 'ogg', 'oga', 'flac', 'opus']
const BRODERI = ['pes', 'dst', 'jef']

/** Sorterna filen hör till, tom om ByteBox inte känner igen den. */
export function fileKinds(file: { name: string; type: string }): FileKind[] {
  const ext = file.name.includes('.') ? file.name.split('.').pop()!.toLowerCase() : ''
  const type = file.type.toLowerCase()

  // HEIC först: en del webbläsare ger den MIME-typen image/heic, andra ingen
  // alls. Den räknas också som bild, för Safari kan öppna den i bildverktygen.
  if (HEIC.includes(ext) || type === 'image/heic' || type === 'image/heif') return ['heic', 'bild']
  if (BRODERI.includes(ext)) return ['broderi']
  if (ext === 'srt') return ['undertext']
  if (ext === 'pdf' || type === 'application/pdf') return ['pdf']
  if (type.startsWith('image/') || BILD.includes(ext)) return ['bild']
  if (type.startsWith('video/') || VIDEO.includes(ext)) return ['video']
  if (type.startsWith('audio/') || LJUD.includes(ext)) return ['ljud']
  return []
}
