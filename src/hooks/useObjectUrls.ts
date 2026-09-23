import { useCallback, useEffect, useRef } from 'react'

/**
 * Skapar object-URL:er som lever kvar i state (förhandsvisningar, resultatfiler)
 * och städas automatiskt när verktyget lämnas.
 *
 * Returnerar en `createUrl` som ersätter `URL.createObjectURL` rakt av, plus en
 * `releaseUrls` för att släppa allt i förtid — t.ex. när användaren laddar upp
 * en ny fil och de gamla förhandsvisningarna inte behövs längre.
 *
 * För nedladdningar, använd `downloadBlob`. För att läsa in en bild, använd
 * `loadImageFromFile`. Båda släpper sin URL direkt och behöver inte det här.
 */
export function useObjectUrls(): {
  createUrl: (blob: Blob) => string
  releaseUrls: () => void
} {
  const urls = useRef<string[]>([])

  const releaseUrls = useCallback(() => {
    urls.current.forEach(URL.revokeObjectURL)
    urls.current = []
  }, [])

  const createUrl = useCallback((blob: Blob) => {
    const url = URL.createObjectURL(blob)
    urls.current.push(url)
    return url
  }, [])

  useEffect(() => releaseUrls, [releaseUrls])

  return { createUrl, releaseUrls }
}
