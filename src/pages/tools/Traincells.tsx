import { useState } from 'react'
import { Maximize2, ExternalLink } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import BackLink from '../../components/BackLink'

// TrainCells är en fristående app som byggs separat och bäddas in via iframe.
// De statiska filerna ligger i public/traincells/ och serveras därför under
// <base>/traincells/ (t.ex. /bytebox/traincells/index.html).
const TRAINCELLS_URL = `${import.meta.env.BASE_URL}traincells/index.html`

export default function Traincells() {
  const { t } = useLanguage()
  const translation = t.tools['traincells']
  const [fullscreen, setFullscreen] = useState(false)

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <BackLink />
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFullscreen((v) => !v)}
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            <Maximize2 className="h-4 w-4" />
            {fullscreen ? 'Avsluta helskärm' : 'Helskärm'}
          </button>
          <a
            href={TRAINCELLS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hc:text-white transition-colors hover:text-gray-900 dark:hover:text-white"
          >
            <ExternalLink className="h-4 w-4" />
            Öppna i ny flik
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white hc:text-white">
          {translation?.name}
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 hc:text-gray-200">
          {translation?.description}
        </p>
      </div>

      <div
        className={
          fullscreen
            ? 'fixed inset-0 z-50 bg-white dark:bg-gray-900'
            : 'overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 hc:border-white bg-white dark:bg-gray-900'
        }
      >
        {fullscreen && (
          <button
            onClick={() => setFullscreen(false)}
            className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-lg bg-gray-900/80 px-3 py-1.5 text-sm text-white backdrop-blur transition-colors hover:bg-gray-900"
          >
            <Maximize2 className="h-4 w-4" />
            Avsluta helskärm
          </button>
        )}
        <iframe
          src={TRAINCELLS_URL}
          title={translation?.name ?? 'TrainCells'}
          allow="fullscreen"
          className={fullscreen ? 'h-full w-full border-0' : 'h-[80vh] w-full border-0'}
        />
      </div>
    </div>
  )
}
