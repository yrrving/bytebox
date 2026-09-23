import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * Läser verktygens rutter direkt ur tools.ts med en enkel textsökning i stället
 * för att importera filen — den importerar ikoner från lucide-react, vilket
 * kräver en bundlare som testerna inte har.
 */
export function toolRoutes(): string[] {
  const src = readFileSync(resolve(here, '../src/data/tools.ts'), 'utf8')
  const routes = [...src.matchAll(/route: '([^']+)'/g)].map((m) => m[1])
  if (routes.length === 0) throw new Error('Hittade inga rutter i tools.ts')
  return routes
}

/** Verktygens rutter plus startsidan och journalen. */
export function allRoutes(): string[] {
  return ['/', '/journal', '/under-huven', ...toolRoutes()]
}
