import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Kopierar text till urklipp och håller reda på vad som senast kopierades, så
 * att knappen kan visa "Kopierat!" en stund.
 *
 * `copiedKey` är `true` för enstaka knappar och en sträng när samma komponent
 * har flera kopieringsknappar (skicka då med ett eget id till `copy`).
 */
export function useCopyToClipboard(resetMs = 2000): {
  copied: string | boolean | null
  copy: (text: string, key?: string) => Promise<boolean>
} {
  const [copied, setCopied] = useState<string | boolean | null>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current)
  }, [])

  const copy = useCallback(
    async (text: string, key?: string) => {
      try {
        await navigator.clipboard.writeText(text)
      } catch {
        return false
      }
      setCopied(key ?? true)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(null), resetMs)
      return true
    },
    [resetMs],
  )

  return { copied, copy }
}
