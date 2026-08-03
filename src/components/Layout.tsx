import { Outlet, useLocation } from 'react-router-dom'
import { Github, Monitor } from 'lucide-react'
import Header from './Header'
import TabletRequired from './TabletRequired'
import { tools } from '../data/tools'
import { useLanguage } from '../context/LanguageContext'
import { useIsAtLeastTablet, useIsAtLeastDesktop } from '../hooks/useMediaQuery'

function DeviceGate() {
  const location = useLocation()
  const { t } = useLanguage()
  const isTablet = useIsAtLeastTablet()
  const isDesktop = useIsAtLeastDesktop()
  const tool = tools.find((item) => item.route === location.pathname)
  const minScreen = tool?.minScreen

  // On a phone, tools that need at least a tablet are blocked with a clear message.
  if (!isTablet && (minScreen === 'surfplatta' || minScreen === 'dator')) {
    return <TabletRequired variant={minScreen} reason={tool ? t.tools[tool.id]?.screenReason : undefined} />
  }

  // On a tablet, desktop tools still work but show a soft recommendation.
  const showRecommend = minScreen === 'dator' && isTablet && !isDesktop

  return (
    <>
      {showRecommend && (
        <div className="mb-6 flex items-start gap-2.5 rounded-lg border border-amber-300 dark:border-amber-700/60 hc:border-white bg-amber-50 dark:bg-amber-900/20 hc:bg-black p-3 text-sm text-amber-800 dark:text-amber-200 hc:text-white">
          <Monitor className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{t.tabletRequired?.recommend ?? 'Det här verktyget fungerar bäst på en dator.'}</p>
        </div>
      )}
      <Outlet />
    </>
  )
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 hc:bg-black">
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
        <DeviceGate />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 hc:border-white">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hc:text-white">
          <span>Bytebox v{__APP_VERSION__} — by yrrving</span>
          <a
            href="https://github.com/yrrving/bytebox"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white no-underline"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
