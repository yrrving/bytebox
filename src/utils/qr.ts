/** Högsta antal QR-koder som genereras i en omgång. */
export const MAX_BATCH = 500

export interface QrRow {
  content: string
  label: string
}

/**
 * En rad per QR-kod. Innehåller raden ett kommatecken tolkas det som
 * `innehåll, etikett`. Etiketten används som filnamn och bildtext.
 * Tomma rader och rader utan innehåll hoppas över.
 */
export function parseLines(text: string): QrRow[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      const commaIndex = line.indexOf(',')
      if (commaIndex === -1) return { content: line, label: '' }
      return {
        content: line.slice(0, commaIndex).trim(),
        label: line.slice(commaIndex + 1).trim(),
      }
    })
    .filter((row) => row.content.length > 0)
}

/** Gör en text säker att använda som filnamn. */
export function safeFileName(name: string, fallback: string): string {
  const cleaned = name
    .trim()
    .replace(/[/\\?%*:|"<>]/g, '-')
    .replace(/\s+/g, '_')
    .slice(0, 60)
  return cleaned || fallback
}
