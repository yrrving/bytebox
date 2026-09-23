import { describe, it, expect } from 'vitest'
import { translations } from './translations'
import { tools } from './tools'

/**
 * Alla nycklar i Translation är optional, så en översättning som saknas i fem
 * språk syns inte — sidan renderar bara den svenska fallbacken. De här testerna
 * gör glidningen synlig i stället för tyst.
 */

const LANGS = ['sv', 'en', 'es', 'fr', 'de', 'pt']
const REFERENCE = 'sv'

/** Plattar ut ett objekt till punktseparerade nyckelvägar. */
function keyPaths(value: unknown, prefix = ''): string[] {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return [prefix]
  return Object.entries(value as Record<string, unknown>).flatMap(([k, v]) =>
    keyPaths(v, prefix ? `${prefix}.${k}` : k),
  )
}

describe('översättningar', () => {
  it('har alla sex språk', () => {
    expect(Object.keys(translations).sort()).toEqual([...LANGS].sort())
  })

  it.each(LANGS.filter((l) => l !== REFERENCE))('%s har samma nycklar som svenska', (lang) => {
    const expected = new Set(keyPaths(translations[REFERENCE]))
    const actual = new Set(keyPaths(translations[lang]))

    const missing = [...expected].filter((k) => !actual.has(k))
    const extra = [...actual].filter((k) => !expected.has(k))

    expect({ saknas: missing, överblivna: extra }).toEqual({ saknas: [], överblivna: [] })
  })

  it.each(LANGS)('%s har namn och beskrivning för varje verktyg i tools.ts', (lang) => {
    const entries = translations[lang].tools ?? {}
    const incomplete = tools
      .map((tool) => ({ id: tool.id, t: entries[tool.id] }))
      .filter(({ t }) => !t?.name?.trim() || !t?.description?.trim())
      .map(({ id }) => id)

    expect(incomplete).toEqual([])
  })

  it('har inga översättningar för verktyg som inte längre finns', () => {
    const known = new Set(tools.map((t) => t.id))
    const orphans = Object.keys(translations[REFERENCE].tools ?? {}).filter((id) => !known.has(id))
    expect(orphans).toEqual([])
  })

  it.each(LANGS)('%s har ingen tom sträng', (lang) => {
    const empty = Object.entries(translations[lang])
      .flatMap(([section, value]) =>
        keyPaths(value, section).map((path) => [path, path.split('.').reduce<unknown>(
          (acc, k) => (acc as Record<string, unknown>)?.[k],
          translations[lang] as unknown,
        )] as const),
      )
      .filter(([, v]) => typeof v === 'string' && v.trim() === '')
      .map(([path]) => path)

    expect(empty).toEqual([])
  })
})
