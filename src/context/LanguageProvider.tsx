import { useState, useEffect, type ReactNode } from 'react'
import { translations } from '../data/translations'
import { LanguageContext, VALID_LANGUAGES, type Language } from './LanguageContext'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('bytebox-language')
    return VALID_LANGUAGES.includes(saved as Language) ? (saved as Language) : 'sv'
  })

  useEffect(() => {
    localStorage.setItem('bytebox-language', language)
    document.documentElement.setAttribute('lang', language)
  }, [language])

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
