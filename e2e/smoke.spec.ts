import { test, expect, type Page } from '@playwright/test'
import { allRoutes } from './routes'

/**
 * Går igenom varje sida i appen och fångar tre saker som annars bara syns om
 * någon råkar öppna webbläsarkonsolen: CSP-blockeringar, fel i konsolen och
 * sidor som inte renderar något alls.
 *
 * Bakgrunden är CSP:n som lades till i v0.29.0 — utan det här testet går den
 * bara att kontrollera genom att klicka igenom alla verktyg för hand.
 */

interface PageProblems {
  csp: string[]
  errors: string[]
}

function watch(page: Page): PageProblems {
  const problems: PageProblems = { csp: [], errors: [] }

  page.on('console', (msg) => {
    if (msg.type() !== 'error') return
    const text = msg.text()
    // Nätverksfel mot tredjepartstjänster är inte appens fel — de har en egen
    // kontroll i scripts/check-external-services.mjs.
    if (/Failed to load resource|net::ERR_/.test(text)) return
    if (/Content Security Policy|Refused to/.test(text)) problems.csp.push(text)
    else problems.errors.push(text)
  })

  page.on('pageerror', (err) => problems.errors.push(err.message))

  return problems
}

for (const route of allRoutes()) {
  test(`${route} laddar utan fel`, async ({ page }) => {
    const problems = watch(page)

    const response = await page.goto(`.${route}`, { waitUntil: 'networkidle' })
    expect(response?.status(), `${route} svarade inte 200`).toBeLessThan(400)

    // Verktygen laddas separat, så vänta tills något faktiskt renderats.
    await expect(page.locator('#root')).not.toBeEmpty()

    // Varje sida ska presentera sig med en rubrik — en sida som laddar men är
    // namnlös är lika oanvändbar som en som inte laddar.
    await expect(page.locator('h1').first()).not.toBeEmpty()

    expect(problems.csp, `CSP blockerade något på ${route}`).toEqual([])
    expect(problems.errors, `Fel i konsolen på ${route}`).toEqual([])
  })
}
