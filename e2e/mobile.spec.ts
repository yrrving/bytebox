import { test, expect, devices } from '@playwright/test'
import { readFileSync } from 'node:fs'

/**
 * Verktygen är märkta med minsta skärm de fungerar på. De som säger "mobil"
 * ska faktiskt gå att använda på en telefon — det har ingen kontrollerat förut.
 *
 * Det här är inte samma sak som att prova på en riktig telefon: pekprecision,
 * tangentbord som täcker halva skärmen och långsam hårdvara syns inte här.
 * Men de två vanligaste felen gör det — att sidan blir bredare än skärmen, och
 * att något går att trycka på men är för litet för ett finger.
 */

// viewport + touch, men utan att byta webbläsarmotor (Playwright tillåter
// inte defaultBrowserType per fil).
const PHONE = { viewport: devices['iPhone 13'].viewport, hasTouch: true, isMobile: true }

/** Verktyg som utger sig för att fungera på telefon. */
function mobileRoutes(): string[] {
  const src = readFileSync(new URL('../src/data/tools.ts', import.meta.url), 'utf8')
  return [...src.matchAll(/route: '([^']+)',\n {4}minScreen: 'mobil'/g)].map((m) => m[1])
}

test.use(PHONE)

test.describe('på telefon', () => {

  for (const route of ['/', ...mobileRoutes()]) {
    test(`${route} får plats på skärmen`, async ({ page }) => {
      await page.goto(`.${route}`, { waitUntil: 'networkidle' })
      await expect(page.locator('#root')).not.toBeEmpty()

      // Sidan får aldrig gå att dra i sidled. Enstaka tabeller och kodblock
      // har egna rullningsytor och räknas inte.
      const overflow = await page.evaluate(() => {
        const doc = document.documentElement
        return { scroll: doc.scrollWidth, klient: doc.clientWidth }
      })
      expect(
        overflow.scroll,
        `${route} är ${overflow.scroll - overflow.klient}px bredare än skärmen`,
      ).toBeLessThanOrEqual(overflow.klient + 1)
    })
  }

  test('startsidans knappar är stora nog för ett finger', async ({ page }) => {
    await page.goto('./', { waitUntil: 'networkidle' })

    // WCAG 2.2 AA kräver 24×24 CSS-pixlar. Undantag för det som ligger inuti
    // en större klickbar yta, som en ikon i ett verktygskort.
    const tooSmall = await page.evaluate(() => {
      const bad: string[] = []
      for (const el of document.querySelectorAll('button, a[href], select')) {
        const r = el.getBoundingClientRect()
        if (r.width === 0 || r.height === 0) continue
        if (r.width < 24 || r.height < 24) {
          bad.push(`${el.tagName.toLowerCase()} ${Math.round(r.width)}×${Math.round(r.height)}`)
        }
      }
      return bad
    })

    expect(tooSmall, 'för små träffytor').toEqual([])
  })
})
