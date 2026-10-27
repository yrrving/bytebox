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
 * Text till tal syns inte här: webbläsarens SpeechSynthesis går inte via
 * sidans egna anrop. Verktyget visar därför bara röster med localService, så
 * att texten aldrig lämnar enheten.
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

/**
 * De inbäddade apparna körs i varsin iframe, och en iframe lyder sin EGEN
 * policy, inte föräldrasidans. ByteBox strikta CSP i index.html skyddar dem
 * alltså inte. Utan en egen policy kör de oskyddade mitt i en låst sida.
 *
 * Apparna byggs i andra repon och kopieras hit som färdiga filer, vilket
 * skriver över deras index.html. scripts/skydda-inbaddade.mjs lägger tillbaka
 * policyn som ett steg i `npm run build`.
 *
 * VAD DET HÄR TESTET FAKTISKT BEVISAR: Playwright bygger innan testerna körs,
 * och bygget kör skyddsskriptet. Tar man bort policyn för hand läggs den alltså
 * tillbaka innan testet hinner läsa filen, och testet blir grönt ändå. Skriptet
 * är det verkliga skyddet; det här är ett bakstopp som fäller om skriptet tas
 * bort ur bygget eller slutar fungera. Logiken är kontrollerad separat mot en
 * fil utan policy och mot en policy med extern domän, och fångar båda.
 */
test('de inbäddade apparna har en egen CSP utan extern domän', async () => {
  const { readFileSync, existsSync } = await import('node:fs')

  for (const app of ['traincells', 'padgrid']) {
    const fil = `public/${app}/index.html`
    expect(existsSync(fil), `${fil} saknas`).toBe(true)

    const html = readFileSync(fil, 'utf8')
    expect(html, `${app} saknar egen CSP, föräldrasidans gäller inte i en iframe`).toContain(
      'Content-Security-Policy',
    )

    // Policyn läses ur meta-taggens content, inte ur hela filen. Första
    // försöket sökte i filen rakt av och träffade ordet connect-src inne i
    // kommentaren ovanför, alltså prosa i stället för direktivet.
    const policy = html.match(/http-equiv="Content-Security-Policy"\s*\n?\s*content="([^"]*)"/)?.[1] ?? ''
    expect(policy, `${app}: hittar ingen policy att läsa`).not.toBe('')

    // Själva poängen: ingenting får skickas utanför det egna ursprunget.
    const connect = policy.match(/connect-src([^;]*)/)?.[1] ?? ''
    expect(connect, `${app} saknar connect-src`).not.toBe('')
    expect(connect, `${app} tillåter en extern domän i connect-src`).not.toMatch(
      /https?:|\*|[a-z0-9-]+\.[a-z]{2,}/i,
    )
  }
})
