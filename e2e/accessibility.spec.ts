import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { allRoutes } from './routes'

/**
 * Tillgänglighet ska vara mätbar, inte något vi hoppas på. axe-core granskar
 * varje sida mot WCAG 2.2 AA: kontraster, etiketter på knappar och fält,
 * rubrikstruktur, språkangivelse och tangentbordsfällor.
 *
 * Reglerna nedan är samma som skärmläsare i praktiken är beroende av.
 *
 * VARJE TEMA GRANSKAS. Temat ligger i localStorage och byter alla färger i
 * appen, så ett tema som inte mäts är ett tema där kontrastfel kan gå ut
 * oupptäckta. Tidigare granskades bara standardtemat, alltså mörkt, medan
 * ljust och högkontrast aldrig nåddes av den kontroll som stoppar en deploy.
 * Högkontrastläget används dessutom av dem som behöver det mest.
 */

const WCAG = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

/** Samma tre teman som appen erbjuder, se src/context/ThemeContext. */
const TEMAN = ['light', 'dark', 'high-contrast'] as const

/**
 * Kända, motiverade undantag. Listan ska vara kort och varje rad ska gå att
 * försvara — ett undantag utan skäl är ett fel man gömt undan.
 */
const UNDANTAG: { route: string; regel: string; tema?: string; varför: string }[] = [
  {
    route: '/fargpalett',
    regel: 'color-contrast',
    varför:
      'Rutan med "Aa" visar hur text ser ut PÅ den valda färgen och byter själv mellan svart och vit efter ljushet. ' +
      'För mellanljusa färger når ingendera 4,5:1 — att rutan då underkänns är ett korrekt resultat, inte ett fel i verktyget. ' +
      'Färgkoden står som vanlig text bredvid.',
  },
  {
    route: '/traincells',
    regel: 'color-contrast',
    varför:
      'Gäller ett element: ordmärket i TrainCells logotyp. WCAG 2.2 undantar uttryckligen text som ingår i en logotyp ' +
      'eller ett varumärke från kontrastkravet. Verktygets egna knappar och steg är åtgärdade i ClaudeBloxels.',
  },
]

for (const tema of TEMAN) {
  for (const route of allRoutes()) {
    test(`${route} uppfyller WCAG 2.2 AA i ${tema}`, async ({ browser }) => {
      const context = await browser.newContext()
      // Temat läses ur localStorage när appen startar, så det måste ligga där
      // innan sidan laddas.
      await context.addInitScript((t) => localStorage.setItem('bytebox-theme', t), tema)
      const page = await context.newPage()

      await page.goto(`.${route}`, { waitUntil: 'networkidle' })
      await expect(page.locator('#root')).not.toBeEmpty()

      const undantagna = new Set(
        UNDANTAG.filter((u) => u.route === route && (!u.tema || u.tema === tema)).map((u) => u.regel),
      )
      const { violations: alla } = await new AxeBuilder({ page }).withTags(WCAG).analyze()
      const violations = alla.filter((v) => !undantagna.has(v.id))

      // Gör felen läsbara — annars är utskriften en vägg av JSON.
      const summary = violations.map((v) => ({
        regel: v.id,
        allvar: v.impact,
        problem: v.help,
        antal: v.nodes.length,
        exempel: v.nodes[0]?.target.join(' '),
      }))

      await context.close()
      expect(summary, `Tillgänglighetsfel på ${route} i temat ${tema}`).toEqual([])
    })
  }
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
