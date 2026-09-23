import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { allRoutes } from './routes'

/**
 * Tillgänglighet ska vara mätbar, inte något vi hoppas på. axe-core granskar
 * varje sida mot WCAG 2.2 AA: kontraster, etiketter på knappar och fält,
 * rubrikstruktur, språkangivelse och tangentbordsfällor.
 *
 * Reglerna nedan är samma som skärmläsare i praktiken är beroende av.
 */

const WCAG = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

for (const route of allRoutes()) {
  test(`${route} uppfyller WCAG 2.2 AA`, async ({ page }) => {
    await page.goto(`.${route}`, { waitUntil: 'networkidle' })
    await expect(page.locator('#root')).not.toBeEmpty()

    const { violations } = await new AxeBuilder({ page }).withTags(WCAG).analyze()

    // Gör felen läsbara — annars är utskriften en vägg av JSON.
    const summary = violations.map((v) => ({
      regel: v.id,
      allvar: v.impact,
      problem: v.help,
      antal: v.nodes.length,
      exempel: v.nodes[0]?.target.join(' '),
    }))

    expect(summary, `Tillgänglighetsfel på ${route}`).toEqual([])
  })
}

test('sidan anger sitt språk', async ({ page }) => {
  await page.goto('./', { waitUntil: 'domcontentloaded' })
  // Skärmläsare väljer uttal utifrån lang — saknas det läses svenska med
  // engelskt uttal, eller tvärtom.
  await expect(page.locator('html')).toHaveAttribute('lang', /^(sv|en|es|fr|de|pt)$/)
})

test('går att nå verktygen med bara tangentbordet', async ({ page }) => {
  await page.goto('./', { waitUntil: 'networkidle' })

  // Tabba framåt och se att fokus faktiskt flyttar sig till något klickbart.
  const reached: string[] = []
  for (let i = 0; i < 12; i++) {
    await page.keyboard.press('Tab')
    const tag = await page.evaluate(() => {
      const el = document.activeElement
      return el ? `${el.tagName.toLowerCase()}` : 'none'
    })
    reached.push(tag)
  }

  expect(reached.filter((t) => ['a', 'button', 'input', 'select'].includes(t)).length).toBeGreaterThan(3)
})
