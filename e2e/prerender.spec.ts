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

for (const route of allRoutes()) {
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
  const titlar = allRoutes().map(
    (r) => readFileSync(filFör(r), 'utf8').match(/<title>([^<]*)<\/title>/)?.[1] ?? '',
  )
  expect(new Set(titlar).size, 'flera sidor delar titel').toBe(titlar.length)
})

test('sitemap och robots pekar på alla sidor', () => {
  const sitemap = readFileSync(join(DIST, 'sitemap.xml'), 'utf8')
  for (const route of allRoutes()) {
    const url = route === '/' ? '/bytebox/' : `/bytebox${route}`
    expect(sitemap, `${route} saknas i sitemap`).toContain(url)
  }
  expect(readFileSync(join(DIST, 'robots.txt'), 'utf8')).toContain('sitemap.xml')
})

test('appen tar över och ersätter den statiska texten', async ({ page }) => {
  await page.goto('./qr-kod', { waitUntil: 'networkidle' })
  // Den statiska reservtexten har bara en rubrik och ett par stycken. Har React
  // startat finns hela verktyget där, med fält att skriva i.
  await expect(page.locator('textarea').first()).toBeVisible()
  await expect(page.locator('h1')).toHaveCount(1)
})
