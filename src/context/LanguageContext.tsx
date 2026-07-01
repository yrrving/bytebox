import { createContext, useContext } from 'react'
import { type Translation } from '../data/translations'

export type Language = 'sv' | 'en' | 'es' | 'fr' | 'de' | 'pt'

interface LanguageContextValue {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translation
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export const VALID_LANGUAGES: Language[] = ['sv', 'en', 'es', 'fr', 'de', 'pt']

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
