import { test, expect } from '@playwright/test'

/**
 * ByteBox går att lägga till på hemskärmen eller installera som program.
 * Det som avgör om det fungerar ligger i manifestet och i ikonerna, och det
 * märks först när någon faktiskt försöker installera. Därför kontrolleras det
 * här i stället.
 *
 * Bakgrund: innan 0.33.0 fanns bara SVG-ikoner, och apple-touch-icon pekade på
 * en SVG. iOS ignorerar det helt, så den som lade till ByteBox på hemskärmen
 * på en iPhone fick en tom ruta.
 */

interface Manifest {
  name: string
  short_name: string
  start_url: string
  scope: string
  display: string
  theme_color: string
  background_color: string
  icons: { src: string; sizes: string; type: string; purpose?: string }[]
}

test('manifestet är giltigt och länkat från sidan', async ({ page, request }) => {
  await page.goto('./')

  const href = await page.locator('link[rel="manifest"]').getAttribute('href')
  expect(href, 'sidan länkar inget manifest').toBeTruthy()

  const res = await request.get(href!)
  expect(res.status(), 'manifestet gick inte att hämta').toBe(200)

  const m: Manifest = await res.json()
  expect(m.display, 'appen ska öppnas utan webbläsarens ram').toBe('standalone')
  expect(m.start_url).toBe('/bytebox/')
  expect(m.scope).toBe('/bytebox/')
  expect(m.name.length).toBeGreaterThan(0)
})

test('manifestet har de ikonstorlekar som krävs för installation', async ({ page, request }) => {
  await page.goto('./')
  const href = await page.locator('link[rel="manifest"]').getAttribute('href')
  const m: Manifest = await (await request.get(href!)).json()

  const png = m.icons.filter((i) => i.type === 'image/png')
  const storlekar = png.map((i) => i.sizes)

  // Android och Chrome kräver minst 192 och 512 i PNG för att erbjuda
  // installation. SVG räcker inte.
  expect(storlekar, 'saknar 192x192 i PNG').toContain('192x192')
  expect(storlekar, 'saknar 512x512 i PNG').toContain('512x512')

  // Maskable behövs för att Android ska kunna beskära ikonen snyggt.
  const maskable = m.icons.filter((i) => i.purpose === 'maskable' && i.type === 'image/png')
  expect(maskable.length, 'saknar maskable PNG-ikon').toBeGreaterThan(0)

  // Varje ikon måste faktiskt finnas.
  for (const icon of m.icons) {
    const r = await request.get(icon.src)
    expect(r.status(), `ikonen ${icon.src} saknas`).toBe(200)
  }
})

test('iOS får en riktig PNG som hemskärmsikon', async ({ page, request }) => {
  await page.goto('./')

  const href = await page.locator('link[rel="apple-touch-icon"]').getAttribute('href')
  expect(href, 'ingen apple-touch-icon').toBeTruthy()
  // iOS ignorerar SVG helt och visar då en tom ruta.
  expect(href, 'apple-touch-icon måste vara PNG').toMatch(/\.png$/)

  const r = await request.get(href!)
  expect(r.status()).toBe(200)
  expect(r.headers()['content-type']).toContain('image/png')
})

test('appen fungerar offline när den installerats', async ({ page, context }) => {
  await page.goto('./', { waitUntil: 'networkidle' })

  // Service workern installeras vid första besöket men tar över först efter en
  // omladdning. Utan det svarar ingen på anropen när nätet bryts.
  await page.evaluate(() => navigator.serviceWorker.ready)
  await page.reload({ waitUntil: 'networkidle' })
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null, null, { timeout: 15_000 })

  await context.setOffline(true)
  await page.reload({ waitUntil: 'domcontentloaded' })
  await expect(page.locator('#root')).not.toBeEmpty()
  await expect(page.locator('h1').first()).not.toBeEmpty()

  await context.setOffline(false)
})
