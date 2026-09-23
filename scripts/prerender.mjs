// Skriver en riktig HTML-fil för varje sida efter bygget.
//
// GitHub Pages har ingen omskrivning för ensidesappar. Utan det här svarar
// varje undersida 404, och 404.html får rädda situationen med en omdirigering
// i webbläsaren. Besökare märker det inte, men statuskoden är fel och den som
// delar en länk får en trasig förhandsvisning i Slack, Discord och liknande.
//
// Med en fil per sida, dist/qr-kod/index.html, svarar servern 200 och kan
// leverera rätt titel, beskrivning och delningsbild innan någon kod körts.
//
// Körs automatiskt av `npm run build`.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(root, 'dist')
const SITE = 'https://yrrving.github.io/bytebox'
const OG_IMAGE = `${SITE}/icon-512.png`

/** Undviker att en apostrof eller ett mindre-än-tecken bryter sidan. */
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

/**
 * Plockar de svenska texterna ur translations.ts med textsökning. Filen
 * importeras inte, eftersom den är TypeScript och drar in hela appen.
 */
function svenska() {
  const src = readFileSync(join(root, 'src/data/translations.ts'), 'utf8')
  const block = src.slice(src.indexOf('\n  sv: {'), src.indexOf('\n  en: {'))
  const get = (re) => {
    const m = block.match(re)
    return m ? m[1].replace(/\\'/g, "'").replace(/\\\\/g, '\\') : ''
  }
  const tools = {}
  for (const m of block.matchAll(/^ {6}'([^']+)': \{ name: '((?:[^'\\]|\\.)*)', description: '((?:[^'\\]|\\.)*)'/gm)) {
    tools[m[1]] = { name: m[2].replace(/\\'/g, "'"), description: m[3].replace(/\\'/g, "'") }
  }
  return {
    tools,
    tagline: get(/^ {4}tagline: '((?:[^'\\]|\\.)*)'/m),
    journalHeading: get(/^ {6}heading: '((?:[^'\\]|\\.)*)'/m),
    journalDescription: get(/^ {6}description: '((?:[^'\\]|\\.)*)'/m),
    hoodHeading: get(/underTheHood: \{\n {6}heading: '((?:[^'\\]|\\.)*)'/),
    hoodLead: get(/underTheHood: \{\n(?:.*\n)? {6}lead: '((?:[^'\\]|\\.)*)'/),
  }
}

/** Rutterna ur tools.ts, i samma ordning som de visas. */
function toolRoutes() {
  const src = readFileSync(join(root, 'src/data/tools.ts'), 'utf8')
  return [...src.matchAll(/id: '([^']+)',\n {4}route: '([^']+)'/g)].map((m) => ({ id: m[1], route: m[2] }))
}

const t = svenska()
const sidor = [
  { route: '/', title: 'ByteBox', description: t.tagline },
  { route: '/journal', title: t.journalHeading, description: t.journalDescription },
  { route: '/under-huven', title: t.hoodHeading, description: t.hoodLead },
  ...toolRoutes().map(({ id, route }) => ({
    route,
    title: t.tools[id]?.name ?? id,
    description: t.tools[id]?.description ?? '',
  })),
]

const shell = readFileSync(join(DIST, 'index.html'), 'utf8')

/** Bygger sidans head-taggar och ett innehåll som syns innan koden kört. */
function bygg({ route, title, description }) {
  const url = route === '/' ? `${SITE}/` : `${SITE}${route}`
  const fullTitle = route === '/' ? 'ByteBox' : `${title} · ByteBox`
  const d = esc(description)

  const head = [
    `<title>${esc(fullTitle)}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="ByteBox" />`,
    `<meta property="og:title" content="${esc(fullTitle)}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${OG_IMAGE}" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:title" content="${esc(fullTitle)}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`,
  ].join('\n    ')

  // Rubrik och beskrivning som statisk text. React ersätter den så fort appen
  // startar, men en sökmotor eller länkförhandsvisning ser den.
  const fallback =
    `<h1>${esc(title)}</h1><p>${d}</p>` +
    `<p><a href="${SITE}/">ByteBox, gratis verktyg för digitalt skapande</a></p>`

  return shell
    .replace('<title>Bytebox</title>', head)
    .replace('<div id="root"></div>', `<div id="root">${fallback}</div>`)
}

let n = 0
for (const sida of sidor) {
  const html = bygg(sida)
  if (sida.route === '/') {
    writeFileSync(join(DIST, 'index.html'), html)
  } else {
    const dir = join(DIST, sida.route.slice(1))
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
  }
  n++
}

// Sitemap, så att sidorna går att hitta.
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sidor
    .map((s) => `  <url><loc>${s.route === '/' ? SITE + '/' : SITE + s.route}</loc></url>`)
    .join('\n') +
  `\n</urlset>\n`
writeFileSync(join(DIST, 'sitemap.xml'), sitemap)

writeFileSync(
  join(DIST, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`,
)

if (!existsSync(join(DIST, '404.html'))) {
  throw new Error('404.html saknas i dist, omdirigeringen skulle sluta fungera')
}

console.log(`Förrenderade ${n} sidor, samt sitemap.xml och robots.txt`)
