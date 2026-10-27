import { test, expect } from '@playwright/test'

/**
 * Arbetsbänken (components/Workbench.tsx) är där man lägger sin fil i ett
 * verktyg. De gamla uppladdningsrutorna gick bara att klicka på med mus. Den
 * här ska gå lika bra med tangentbord: tabba till knappen, tryck Enter, välj.
 */

// En bild på 1×1 pixel räcker för att verktyget ska gå vidare.
const PNG = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64',
)

test('en bild går att välja med bara tangentbordet', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'sv-SE' })
  const page = await context.newPage()
  await page.goto('./bildkomprimering', { waitUntil: 'networkidle' })

  const knapp = page.getByRole('button', { name: 'Välj en bild' })
  await knapp.focus()
  const [väljare] = await Promise.all([page.waitForEvent('filechooser'), page.keyboard.press('Enter')])
  expect(väljare.isMultiple()).toBe(false)

  await väljare.setFiles({ name: 'prov.png', mimeType: 'image/png', buffer: PNG })
  await expect(page.getByText(/Kvalitet/)).toBeVisible()

  await context.close()
})

test('flera PDF:er går att välja på en gång när verktyget vill ha det', async ({ browser }) => {
  const context = await browser.newContext({ locale: 'sv-SE' })
  const page = await context.newPage()
  await page.goto('./pdf-verktyg', { waitUntil: 'networkidle' })

  const [väljare] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: 'Välj PDF-filer' }).click(),
  ])
  expect(väljare.isMultiple()).toBe(true)

  await context.close()
})
