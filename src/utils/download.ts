/**
 * Laddar ner en blob som en fil och släpper object-URL:en direkt efteråt.
 * Använd den här i stället för att bygga egna <a download> — det är lätt att
 * glömma revokeObjectURL, och då ligger blobben kvar i minnet sidan ut.
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  try {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
  } finally {
    URL.revokeObjectURL(url)
  }
}

/** Laddar ner text som en fil (UTF-8). */
export function downloadText(text: string, filename: string, mime = 'text/plain'): void {
  downloadBlob(new Blob([text], { type: `${mime};charset=utf-8` }), filename)
}
