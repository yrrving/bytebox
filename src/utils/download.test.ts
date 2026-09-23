import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { downloadBlob, downloadText } from './download'

describe('downloadBlob', () => {
  let created: string[]
  let revoked: string[]
  let clicked: HTMLAnchorElement[]

  beforeEach(() => {
    created = []
    revoked = []
    clicked = []
    let n = 0
    vi.stubGlobal('URL', {
      ...URL,
      createObjectURL: () => {
        const url = `blob:test/${n++}`
        created.push(url)
        return url
      },
      revokeObjectURL: (url: string) => revoked.push(url),
    })
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(function (this: HTMLAnchorElement) {
      clicked.push(this)
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('släpper object-URL:en efter nedladdning', () => {
    downloadBlob(new Blob(['x']), 'fil.txt')
    expect(created).toHaveLength(1)
    expect(revoked).toEqual(created)
  })

  it('sätter filnamnet på länken', () => {
    downloadBlob(new Blob(['x']), 'rapport.pdf')
    expect(clicked[0].download).toBe('rapport.pdf')
  })

  it('släpper URL:en även om klicket kastar', () => {
    vi.spyOn(HTMLAnchorElement.prototype, 'click').mockImplementation(() => {
      throw new Error('blockerat')
    })
    expect(() => downloadBlob(new Blob(['x']), 'fil.txt')).toThrow()
    expect(revoked).toEqual(created)
  })

  it('downloadText skickar med charset så att å ä ö överlever', async () => {
    const blobs: Blob[] = []
    vi.stubGlobal('URL', {
      ...URL,
      createObjectURL: (b: Blob) => {
        blobs.push(b)
        return 'blob:test/0'
      },
      revokeObjectURL: () => {},
    })
    downloadText('räksmörgås', 'text.txt')
    expect(blobs[0].type).toBe('text/plain;charset=utf-8')
    expect(await blobs[0].text()).toBe('räksmörgås')
  })
})
