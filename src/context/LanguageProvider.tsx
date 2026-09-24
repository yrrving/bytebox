import { useState, useEffect, type ReactNode } from 'react'
import { translations } from '../data/translations'
import { LanguageContext, VALID_LANGUAGES, type Language } from './LanguageContext'

/**
 * Ett eget val väger alltid tyngst. Har besökaren inte valt något tittar vi på
 * webbläsarens språk, i den ordning användaren själv rangordnat dem.
 *
 * Utan det här mötte alla svenska, även den som kommer från en engelsk länk och
 * inte förstår ett ord. Faller inget ut väljer vi engelska, som är det av våra
 * sex språk flest kan läsa.
 */
function valjSprak(): Language {
  try {
    const sparat = localStorage.getItem('bytebox-language')
    if (VALID_LANGUAGES.includes(sparat as Language)) return sparat as Language
  } catch {
    // Privat läge kan blockera localStorage. Då får webbläsarens språk avgöra.
  }

  const onskemal = navigator.languages?.length ? navigator.languages : [navigator.language]
  for (const tagg of onskemal) {
    // "en-GB" och "en" ska båda ge engelska.
    const bas = tagg.toLowerCase().split('-')[0] as Language
    if (VALID_LANGUAGES.includes(bas)) return bas
  }
  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(valjSprak)

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
