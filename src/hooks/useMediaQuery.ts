import { useEffect, useState } from 'react'

/**
 * Returns true when the given media query currently matches.
 * Updates on viewport changes (resize / orientation).
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/** True when the viewport is at least tablet width (Tailwind `md`, 768px). */
export function useIsAtLeastTablet(): boolean {
  return useMediaQuery('(min-width: 768px)')
}
