import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Wrench, Sun, Moon, Eye, Globe, BookOpen, Menu, X } from 'lucide-react'
import { useTheme, type Theme } from '../context/ThemeContext'
import { useLanguage, type Language } from '../context/LanguageContext'
import { tools } from '../data/tools'
import InstallButton from './InstallButton'

const languageOptions: { value: Language; label: string }[] = [
  { value: 'sv', label: 'Svenska' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'fr', label: 'Français' },
  { value: 'de', label: 'Deutsch' },
  { value: 'pt', label: 'Português' },
]

const themeIcon: Record<Theme, typeof Sun> = {
  light: Sun,
  dark: Moon,
  'high-contrast': Eye,
}

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const themeOptions: { value: Theme; label: string }[] = [
    { value: 'light', label: t.theme.light },
    { value: 'dark', label: t.theme.dark },
    { value: 'high-contrast', label: t.theme.highContrast },
  ]

  const ThemeIcon = themeIcon[theme]

  const journalLink = (
    <Link
      to="/journal"
      onClick={() => setMenuOpen(false)}
      className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hc:text-white no-underline transition-colors hover:border-gray-400 dark:hover:border-gray-600 hover:text-gray-900 dark:hover:text-gray-100"
    >
      <BookOpen className="h-4 w-4" />
      {t.journal.heading}
    </Link>
  )

  const languageSelect = (
    <div className="relative flex items-center">
      <Globe className="pointer-events-none absolute left-2.5 h-4 w-4 text-gray-600 dark:text-gray-400 hc:text-white" />
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        aria-label="Language"
        className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black py-1.5 pl-8 pr-8 text-sm text-gray-900 dark:text-gray-100 hc:text-white outline-none transition-colors hover:border-gray-400 dark:hover:border-gray-600"
      >
        {languageOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )

  const themeSelect = (
    <div className="relative flex items-center">
      <ThemeIcon className="pointer-events-none absolute left-2.5 h-4 w-4 text-gray-600 dark:text-gray-400 hc:text-white" />
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        aria-label="Theme"
        className="w-full appearance-none rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black py-1.5 pl-8 pr-8 text-sm text-gray-900 dark:text-gray-100 hc:text-white outline-none transition-colors hover:border-gray-400 dark:hover:border-gray-600"
      >
        {themeOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )

  return (
    <header className="border-b border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white no-underline"
          >
            <Wrench className="h-6 w-6 text-blue-400 hc:text-white" />
            Bytebox
          </Link>
          <span className="rounded-full bg-blue-100 dark:bg-blue-900/40 hc:bg-white hc:text-black px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300">
            {tools.length} {t.toolsHeading.toLowerCase()}
          </span>
        </div>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-3">
          <InstallButton />
          {journalLink}
          {languageSelect}
          {themeSelect}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={t.menu ?? 'Menu'}
          aria-expanded={menuOpen}
          className="md:hidden flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-800 hc:bg-black p-2 text-gray-700 dark:text-gray-200 hc:text-white transition-colors hover:border-gray-400 dark:hover:border-gray-600"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-700 hc:border-white px-4 py-4">
          <div className="flex flex-col gap-3 [&>*]:w-full">
            <InstallButton />
            {journalLink}
            {languageSelect}
            {themeSelect}
          </div>
        </div>
      )}
    </header>
  )
}
