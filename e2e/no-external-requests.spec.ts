import { test, expect } from '@playwright/test'
import { allRoutes } from './routes'

/**
 * ByteBox gör inga nätverksanrop. Det är inte en ambition utan en egenskap som
 * ska gå att lita på, så den bevakas här i stället för att kontrolleras för
 * hand.
 *
 * Bakgrunden: i september 2026 visade det sig att två verktyg pekade på
 * tredjepartstjänster som tystnat — en nedlagd tjänst som godkände alla
 * domäner, och en leverantör som infört kvotstopp. Verktygen som ringde ut
 * togs bort i 0.30.0, och det här testet ser till att beroendet inte kryper
 * tillbaka.
 *
 * Text till tal är undantaget: webbläsarens SpeechSynthesis kan skicka text
 * till en molnröst, men det går inte via sidans egna anrop och syns inte här.
 * Verktyget förklarar det själv.
 */

/** Hostar som hör till appen själv. Allt annat är ett externt anrop. */
function isOwnOrigin(url: string): boolean {
  if (url.startsWith('data:') || url.startsWith('blob:')) return true
  try {
    const { hostname } = new URL(url)
    return hostname === 'localhost' || hostname === '127.0.0.1'
  } catch {
    return true
  }
}

for (const route of allRoutes()) {
  test(`${route} kontaktar ingen extern server`, async ({ page }) => {
    const external: string[] = []

    page.on('request', (req) => {
      if (!isOwnOrigin(req.url())) external.push(`${req.method()} ${req.url()}`)
    })

    await page.goto(`.${route}`, { waitUntil: 'networkidle' })
    await expect(page.locator('#root')).not.toBeEmpty()

    expect(external, `${route} gjorde externa anrop`).toEqual([])
  })
}

test('ingen källkod innehåller ett fetch-anrop till en extern adress', async () => {
  const { readFileSync, readdirSync, statSync } = await import('node:fs')
  const { join } = await import('node:path')

  const files: string[] = []
  const walk = (dir: string) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name)
      if (statSync(full).isDirectory()) walk(full)
      else if (/\.tsx?$/.test(full)) files.push(full)
    }
  }
  walk('src')

  const offenders = files.filter((f) => /fetch\(\s*['"`]https?:\/\//.test(readFileSync(f, 'utf8')))
  expect(offenders, 'filer som anropar en extern adress').toEqual([])
})
