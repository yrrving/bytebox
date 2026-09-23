// Pingar varje extern tjänst som ett Bytebox-verktyg är beroende av.
// Kör lokalt med: node scripts/check-external-services.mjs
//
// Bakgrund: i september 2026 visade det sig att SSL-kontrollen pekade på en
// nedlagd tjänst (ssl-checker.io hade blivit en parkerad domän) och att
// IP-infon fått kvotstopp. Båda verktygen hade varit trasiga en tid utan att
// någon märkt det. Den här kollen ska upptäcka nästa sådan i stället.
//
// Håll listan i synk med connect-src i index.html.

const SERVICES = [
  {
    tool: 'SSL-kontroll',
    url: 'https://api.certspotter.com/v1/issuances?domain=example.com&include_subdomains=false&expand=issuer',
    check: (body) => Array.isArray(JSON.parse(body)),
  },
  {
    tool: 'IP-info',
    url: 'https://ipwho.is/',
    check: (body) => JSON.parse(body).success !== false,
  },
  {
    tool: 'Översättare',
    url: 'https://api.mymemory.translated.net/get?q=hej&langpair=sv|en',
    check: (body) => JSON.parse(body).responseStatus === 200,
  },
  {
    tool: 'HTTP Headers',
    url: 'https://api.allorigins.win/raw?url=https%3A%2F%2Fexample.com',
    check: (body) => body.length > 0,
  },
  {
    tool: 'DNS-uppslagning',
    url: 'https://dns.google/resolve?name=example.com&type=A',
    check: (body) => JSON.parse(body).Status === 0,
  },
  {
    tool: 'Bandbreddstest',
    url: 'https://speed.cloudflare.com/__down?bytes=1000',
    check: (body) => body.length > 0,
  },
]

const TIMEOUT_MS = 20_000

async function probe(service) {
  const started = Date.now()
  try {
    const res = await fetch(service.url, { signal: AbortSignal.timeout(TIMEOUT_MS) })
    const body = await res.text()
    const ms = Date.now() - started

    if (!res.ok) return { ...service, ok: false, ms, reason: `HTTP ${res.status}` }
    if (!service.check(body)) return { ...service, ok: false, ms, reason: 'oväntat svarsinnehåll' }
    return { ...service, ok: true, ms }
  } catch (err) {
    return { ...service, ok: false, ms: Date.now() - started, reason: err.message }
  }
}

const results = await Promise.all(SERVICES.map(probe))
const failed = results.filter((r) => !r.ok)

for (const r of results) {
  const status = r.ok ? 'OK  ' : 'FEL '
  console.log(`${status} ${r.tool.padEnd(18)} ${String(r.ms).padStart(5)}ms  ${r.reason ?? ''}`.trimEnd())
}

if (failed.length > 0) {
  console.log(`\n${failed.length} av ${results.length} tjänster svarar inte som väntat:`)
  for (const f of failed) console.log(`  - ${f.tool}: ${f.reason}\n    ${f.url}`)
  process.exit(1)
}

console.log(`\nAlla ${results.length} tjänster svarar.`)
