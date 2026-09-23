import { Link } from 'react-router-dom'
import { ArrowLeft, Github } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { tools } from '../data/tools'

const REPO = 'https://github.com/yrrving/bytebox'

/** Namn som inte översätts: ramverk, standarder och format. */
const STACK = ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'GitHub Pages']

export default function UnderTheHood() {
  const { t } = useLanguage()
  const u = t.underTheHood

  const sections: { heading: string; body: string }[] = [
    { heading: u?.whatHeading ?? 'Vad det faktiskt är', body: u?.whatBody ?? '' },
    { heading: u?.localHeading ?? 'Varför ingenting skickas', body: u?.localBody ?? '' },
    { heading: u?.offlineHeading ?? 'Fungerar utan nät', body: u?.offlineBody ?? '' },
    { heading: u?.a11yHeading ?? 'Tillgänglighet mäts', body: u?.a11yBody ?? '' },
  ]

  const checks = [u?.check1, u?.check2, u?.check3, u?.check4, u?.check5, u?.check6].filter(Boolean)

  return (
    <div className="mx-auto max-w-2xl py-10">
      <Link
        to="/"
        className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hc:text-white no-underline transition-colors hover:text-gray-900 dark:hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        {t.backToTools}
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {u?.heading ?? 'Under huven'}
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 hc:text-gray-200">
        {u?.lead ?? 'ByteBox är en webbsida utan server. Allt du ser och gör händer i din egen webbläsare.'}
      </p>

      {/* Snabbfakta */}
      <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-200 dark:bg-gray-700 sm:grid-cols-3">
        {[
          { term: u?.factTools ?? 'Verktyg', value: String(tools.length) },
          { term: u?.factLanguages ?? 'Språk', value: '6' },
          { term: u?.factRequests ?? 'Nätverksanrop', value: '0' },
        ].map((f) => (
          <div key={f.term} className="bg-gray-50 dark:bg-gray-800 hc:bg-black p-4">
            <dt className="text-xs text-gray-600 dark:text-gray-300 hc:text-gray-200">{f.term}</dt>
            <dd className="mt-1 text-2xl font-bold text-gray-900 dark:text-white">{f.value}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {u?.builtHeading ?? 'Byggt med'}
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {STACK.map((name) => (
            <li
              key={name}
              className="rounded-lg border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black px-3 py-1 font-mono text-sm text-gray-700 dark:text-gray-200 hc:text-white"
            >
              {name}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-gray-600 dark:text-gray-300 hc:text-gray-200">
          {u?.builtBody ?? ''}
        </p>
      </section>

      {sections.map((s) => (
        <section key={s.heading} className="mt-8">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{s.heading}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 hc:text-gray-200">{s.body}</p>
        </section>
      ))}

      <section className="mt-8">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {u?.checksHeading ?? 'Vad som kontrolleras före publicering'}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 hc:text-gray-200">
          {u?.checksBody ?? ''}
        </p>
        <ul className="mt-3 space-y-2">
          {checks.map((c) => (
            <li
              key={c}
              className="flex items-start gap-2.5 text-gray-600 dark:text-gray-300 hc:text-gray-200"
            >
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" />
              {c}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-gray-50 dark:bg-gray-800 hc:bg-black p-5">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
          {u?.codeHeading ?? 'Koden är öppen'}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 hc:text-gray-200">
          {u?.codeBody ?? ''}
        </p>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white no-underline transition-colors hover:bg-blue-700 hc:bg-white hc:text-black"
        >
          <Github className="h-4 w-4" />
          {u?.codeLink ?? 'Läs koden på GitHub'}
        </a>
      </section>
    </div>
  )
}
