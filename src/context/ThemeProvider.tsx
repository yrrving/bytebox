import { useState, useEffect, type ReactNode } from 'react'
import { ThemeContext, VALID_THEMES, type Theme } from './ThemeContext'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('bytebox-theme')
    return VALID_THEMES.includes(saved as Theme) ? (saved as Theme) : 'dark'
  })

  useEffect(() => {
    localStorage.setItem('bytebox-theme', theme)
    const html = document.documentElement
    html.classList.remove('dark', 'hc')
    if (theme === 'dark') {
      html.classList.add('dark')
    } else if (theme === 'high-contrast') {
      html.classList.add('dark', 'hc')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
