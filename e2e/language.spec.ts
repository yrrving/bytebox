import { test, expect } from '@playwright/test'

/**
 * Språket ska följa besökarens webbläsare vid första besöket. Tidigare mötte
 * alla svenska oavsett var de kom ifrån, vilket blir fel för den som följer en
 * engelsk länk och inte förstår ett ord.
 *
 * Ett eget val väger alltid tyngst och ska överleva en omladdning.
 */

const FÖRVÄNTAT: Record<string, { lang: string; text: RegExp }> = {
  'sv-SE': { lang: 'sv', text: /Verktyg/ },
  'en-GB': { lang: 'en', text: /Tools/ },
  'es-ES': { lang: 'es', text: /Herramientas/ },
  'de-DE': { lang: 'de', text: /Werkzeuge/ },
  // Ett språk vi inte har. Ska landa på engelska, inte på svenska.
  'fi-FI': { lang: 'en', text: /Tools/ },
}

for (const [webbläsarspråk, { lang, text }] of Object.entries(FÖRVÄNTAT)) {
  test(`${webbläsarspråk} möts av ${lang}`, async ({ browser }) => {
    const context = await browser.newContext({ locale: webbläsarspråk })
    const page = await context.newPage()
    await page.goto('./', { waitUntil: 'networkidle' })

    await expect(page.locator('html')).toHaveAttribute('lang', lang)
    await expect(page.locator('h1').first()).toHaveText(text)

    await context.close()
  })
}

test('ett eget språkval väger tyngre än webbläsarens', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'en-GB' })
  const page = await context.newPage()
  await page.goto('./', { waitUntil: 'networkidle' })
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')

  await page.getByLabel('Language').selectOption('sv')
  await expect(page.locator('html')).toHaveAttribute('lang', 'sv')

  // Valet ska finnas kvar efter omladdning, trots engelsk webbläsare.
  await page.reload({ waitUntil: 'networkidle' })
  await expect(page.locator('html')).toHaveAttribute('lang', 'sv')

  await context.close()
})

test('sidan anger svenska innan koden hunnit köra', async ({ request }) => {
  // Det förrenderade innehållet är svenskt, så det statiska lang-värdet måste
  // vara det också. En skärmläsare läser den texten innan React startat.
  const html = await (await request.get('./qr-kod')).text()
  expect(html).toContain('<html lang="sv">')
})
