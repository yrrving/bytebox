/**
 * Storleksgränser för filer användaren lämnar in.
 *
 * ByteBox arbetar helt i webbläsarens minne. En tillräckligt stor fil fyller
 * det och fliken dör, ofta utan något felmeddelande alls: sidan bara försvinner
 * mitt i arbetet. Ingen data är i fara, men användaren får ingen aning om
 * varför det gick fel, och på en skoldator med lite minne händer det tidigare
 * än man tror.
 *
 * Gränserna är satta generöst. De ska stoppa det orimliga, inte det stora.
 */

/** Megabyte. Valda så att vanliga mobilfoton, filmer och PDF:er går igenom. */
export const GRANSER = {
  bild: 60,
  video: 250,
  ljud: 150,
  pdf: 100,
} as const

/** Kastas när en fil är för stor. Bär med sig talen så att felet kan förklaras. */
export class ForStorFil extends Error {
  // Fälten deklareras uttryckligen. Projektet kör med erasableSyntaxOnly, och
  // då är parameteregenskaper i konstruktorn inte tillåtna.
  readonly storlek: number
  readonly max: number

  constructor(storlek: number, max: number) {
    super('Filen är för stor')
    this.name = 'ForStorFil'
    this.storlek = storlek
    this.max = max
  }
}

/** "62 MB", "1,4 GB". Samma format som användaren ser på sina egna filer. */
export function formateraStorlek(bytes: number): string {
  if (bytes >= 1024 ** 3) return `${(bytes / 1024 ** 3).toFixed(1).replace('.', ',')} GB`
  return `${Math.round(bytes / 1024 ** 2)} MB`
}

/** Kastar ForStorFil om filen överskrider gränsen. Annars gör den ingenting. */
export function kontrolleraStorlek(fil: Blob, maxMegabyte: number): void {
  const max = maxMegabyte * 1024 * 1024
  if (fil.size > max) throw new ForStorFil(fil.size, max)
}

/**
 * Översätter ett fel från filinläsning till något användaren förstår.
 *
 * Verktygen fångar alla fel på samma ställe, så den här avgör vilket av de två
 * meddelandena som passar i stället för att varje verktyg ska lista ut det.
 */
export function filfelText(
  fel: unknown,
  texter: { fileTooLarge?: string; imageLoadError?: string } | undefined,
): string {
  if (fel instanceof ForStorFil) {
    const mall =
      texter?.fileTooLarge ??
      'Filen är för stor ({storlek}). Gränsen här är {max}. Prova en mindre fil.'
    return mall
      .replace('{storlek}', formateraStorlek(fel.storlek))
      .replace('{max}', formateraStorlek(fel.max))
  }
  return texter?.imageLoadError ?? 'Kunde inte läsa bildfilen.'
}
