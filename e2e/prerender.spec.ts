import { test, expect } from '@playwright/test'
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { allRoutes } from './routes'

/**
 * Varje sida ska finnas som en riktig fil i bygget, inte bara som en rutt inuti
 * appen. GitHub Pages har ingen omskrivning för ensidesappar: utan filen svarar
 * servern 404 och den som delar en länk får en trasig förhandsvisning.
 *
 * Testerna läser bygget direkt i stället för att gå via servern, eftersom
 * utvecklingsservern svarar med index.html för allt och därför aldrig skulle
 * avslöja att filen saknas. Det var precis den skillnaden som gjorde att
 * problemet inte syntes förrän sidan låg ute.
 */

const DIST = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')

function filFör(route: string): string {
  return route === '/' ? join(DIST, 'index.html') : join(DIST, route.slice(1), 'index.html')
}

/**
 * Sökvägar som en inbäddad app äger. Där ska ByteBox INTE förrendera, för då
 * skrivs appen över och iframen laddar ByteBox inuti ByteBox. Se testet längst
 * ned, som mäter att appen faktiskt ligger kvar.
 *
 * Listan läses ur public/ i stället för att skrivas för hand, så att en ny
 * inbäddad app skyddas automatiskt och en borttagen inte lämnar kvar ett
 * undantag som tyst slutar granska en riktig sida.
 */
const PUBLIC = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const INBÄDDADE = allRoutes().filter(
  (r) => r !== '/' && existsSync(join(PUBLIC, r.slice(1), 'index.html')),
)
const förrenderade = allRoutes().filter((r) => !INBÄDDADE.includes(r))

test('de inbäddade apparna är kända, så listan inte tystnar av misstag', () => {
  expect(INBÄDDADE.sort()).toEqual(['/padgrid', '/traincells'])
})

for (const route of förrenderade) {
  test(`${route} finns som egen fil med rätt titel och beskrivning`, async () => {
    const fil = filFör(route)
    expect(existsSync(fil), `${fil} saknas, servern skulle svara 404`).toBe(true)

    const html = readFileSync(fil, 'utf8')

    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? ''
    expect(title.length, `${route} saknar titel`).toBeGreaterThan(0)
    expect(title, `${route} har kvar mallens titel`).not.toBe('Bytebox')
    expect(title, 'inga tankstreck i titlar').not.toContain('—')

    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? ''
    expect(desc.length, `${route} saknar beskrivning`).toBeGreaterThan(10)

    // Delningsbild och adress, så att länken ser rätt ut i Slack och Discord.
    expect(html, `${route} saknar og:title`).toContain('property="og:title"')
    expect(html, `${route} saknar og:image`).toContain('property="og:image"')
    expect(html, `${route} saknar canonical`).toContain('rel="canonical"')

    // Något läsbart innan koden hunnit köra.
    expect(html, `${route} saknar rubrik i html`).toMatch(/<div id="root"><h1>/)
  })
}

test('varje sida har sin egen titel, inte samma överallt', () => {
  const titlar = förrenderade.map(
    (r) => readFileSync(filFör(r), 'utf8').match(/<title>([^<]*)<\/title>/)?.[1] ?? '',
  )
  expect(new Set(titlar).size, 'flera sidor delar titel').toBe(titlar.length)
})

test('sitemap och robots pekar på alla sidor', () => {
  const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
  for (const route of förrenderade) {
    const url = route === '/' ? '/bytebox/' : `/bytebox${route}`
    expect(sitemap, `${route} saknas i sitemap`).toContain(url)
  }
  expect(readFileSync(join(DIST, 'robots.txt'), 'utf8')).toContain('sitemap.xml')
})

/**
 * Regressionen i v1.2.0: förrenderingen skrev över dist/traincells/index.html
 * med en ByteBox-sida, så iframen laddade ByteBox inuti ByteBox och verktyget
 * slutade fungera helt.
 *
 * Det gamla testet missade det, eftersom en förrenderad ByteBox-sida har titel,
 * beskrivning, og-taggar och en rubrik i #root. Den uppfyllde varje krav testet
 * ställde. Därför mäter det här testet i stället att filen är APPEN: den ska
 * ladda TrainCells egen bundle och får inte bära ByteBox kännetecken.
 */
for (const route of INBÄDDADE) {
  test(`${route} är den inbäddade appen, inte en ByteBox-sida`, () => {
    const html = readFileSync(filFör(route), 'utf8')
    const namn = route.slice(1)

    expect(html, `${route} laddar inte ${namn}-bundlen`).toMatch(
      new RegExp(`src="[^"]*${namn}/assets/[^"]*\\.js"`),
    )
    expect(html, `${route} har skrivits över av förrenderingen`).not.toContain(
      'content="ByteBox"',
    )
    expect(html, `${route} har skrivits över av förrenderingen`).not.toMatch(
      /<div id="root"><h1>/,
    )
  })
}

test('appen tar över och ersätter den statiska texten', async ({ page }) => {
  await page.goto('./qr-kod', { waitUntil: 'networkidle' })
  // Den statiska reservtexten har bara en rubrik och ett par stycken. Har React
  // startat finns hela verktyget där, med fält att skriva i.
  await expect(page.locator('textarea').first()).toBeVisible()
  await expect(page.locator('h1')).toHaveCount(1)
})
