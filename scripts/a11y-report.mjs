// Sammanställer tillgänglighetsfel över hela appen och grupperar dem per regel,
// så att man ser vad som är ETT återkommande problem och vad som är enstaka.
//
// Kör:  npm run build && npx vite preview --port 4173 &   sedan
//       node scripts/a11y-report.mjs
//
// Testerna i e2e/accessibility.spec.ts avgör om bygget går igenom. Den här
// rapporten är till för att prioritera arbetet.

import { chromium } from 'playwright'
import { AxeBuilder } from '@axe-core/playwright'
import { readFileSync } from 'node:fs'

const BASE = process.env.BASE_URL ?? 'http://localhost:4173/bytebox'
const WCAG = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']

const src = readFileSync(new URL('../src/data/tools.ts', import.meta.url), 'utf8')
const routes = ['/', '/journal', ...[...src.matchAll(/route: '([^']+)'/g)].map((m) => m[1])]

const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()

/** regel -> { allvar, problem, sidor: Set, noder: antal } */
const byRule = new Map()

for (const route of routes) {
  await page.goto(BASE + route, { waitUntil: 'networkidle' })
  const { violations } = await new AxeBuilder({ page }).withTags(WCAG).analyze()

  for (const v of violations) {
    const entry = byRule.get(v.id) ?? {
      allvar: v.impact,
      problem: v.help,
      sidor: new Set(),
      noder: 0,
      exempel: v.nodes[0]?.target.join(' ') ?? '',
    }
    entry.sidor.add(route)
    entry.noder += v.nodes.length
    byRule.set(v.id, entry)
  }
}

await browser.close()

const RANK = { critical: 0, serious: 1, moderate: 2, minor: 3 }
const rules = [...byRule.entries()].sort(
  (a, b) => (RANK[a[1].allvar] ?? 9) - (RANK[b[1].allvar] ?? 9) || b[1].noder - a[1].noder,
)

console.log(`\nTillgänglighetsrapport — ${routes.length} sidor granskade mot WCAG 2.2 AA\n`)

if (rules.length === 0) {
  console.log('Inga fel hittades.\n')
} else {
  for (const [id, r] of rules) {
    console.log(`${(r.allvar ?? '?').toUpperCase().padEnd(9)} ${id}`)
    console.log(`          ${r.problem}`)
    console.log(`          ${r.sidor.size} av ${routes.length} sidor, ${r.noder} element totalt`)
    console.log(`          t.ex. ${r.exempel}\n`)
  }
  const total = rules.reduce((n, [, r]) => n + r.noder, 0)
  console.log(`${rules.length} olika regler, ${total} element totalt.\n`)
}
