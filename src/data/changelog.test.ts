import { describe, it, expect } from 'vitest'
import changelogMd from '../../CHANGELOG.md?raw'
import { changelog } from './changelog'

/**
 * En release är tre ställen som måste följas åt: versionen i package.json,
 * protokollet i CHANGELOG.md och journalen i appen. Glöms ett av dem syns det
 * inte förrän någon läser journalen. De här testerna stoppar bygget i stället.
 */

const LANGS = ['sv', 'en', 'es', 'fr', 'de', 'pt']

describe('release', () => {
  it('CHANGELOG.md börjar med versionen i package.json', () => {
    const first = changelogMd.match(/^## (\d+\.\d+\.\d+) /m)?.[1]
    expect(first).toBe(__APP_VERSION__)
  })

  it('journalen börjar med versionen i package.json', () => {
    expect(changelog[0].version).toBe(__APP_VERSION__)
  })

  it('journalen har samma datum som CHANGELOG.md för den senaste versionen', () => {
    const date = changelogMd.match(/^## \d+\.\d+\.\d+ \((\d{4}-\d{2}-\d{2})\)/m)?.[1]
    expect(changelog[0].date).toBe(date)
  })

  it('journalen ligger i ordning, nyast först', () => {
    const versions = changelog.map((entry) => entry.version.split('.').map(Number))
    for (let i = 1; i < versions.length; i++) {
      const [a, b] = [versions[i - 1], versions[i]]
      const newer = a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
      expect(newer, `${changelog[i - 1].version} före ${changelog[i].version}`).toBeGreaterThan(0)
    }
  })

  it.each(changelog.map((entry) => [entry.version, entry] as const))(
    'journalposten %s finns på alla sex språk',
    (_, entry) => {
      const texts = [entry.title, ...entry.changes.map((change) => change.text)]
      for (const text of texts) {
        for (const lang of LANGS) {
          expect(text[lang]?.trim(), lang).toBeTruthy()
        }
      }
    },
  )
})
