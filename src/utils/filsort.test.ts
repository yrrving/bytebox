import { describe, it, expect } from 'vitest'
import { fileKinds } from './filsort'

describe('fileKinds', () => {
  it('känner igen en vanlig bild på MIME-typen', () => {
    expect(fileKinds({ name: 'katt.png', type: 'image/png' })).toEqual(['bild'])
  })

  it('känner igen en bild på ändelsen när MIME-typen saknas', () => {
    expect(fileKinds({ name: 'KATT.JPG', type: '' })).toEqual(['bild'])
  })

  it('räknar HEIC både som HEIC och som bild', () => {
    expect(fileKinds({ name: 'IMG_0042.HEIC', type: '' })).toEqual(['heic', 'bild'])
    expect(fileKinds({ name: 'foto', type: 'image/heic' })).toEqual(['heic', 'bild'])
  })

  it('känner igen video, ljud och pdf', () => {
    expect(fileKinds({ name: 'film.mov', type: 'video/quicktime' })).toEqual(['video'])
    expect(fileKinds({ name: 'låt.m4a', type: '' })).toEqual(['ljud'])
    expect(fileKinds({ name: 'blad.pdf', type: 'application/pdf' })).toEqual(['pdf'])
  })

  it('känner igen undertexter och broderifiler, som webbläsaren inte har någon typ för', () => {
    expect(fileKinds({ name: 'film.srt', type: '' })).toEqual(['undertext'])
    expect(fileKinds({ name: 'logga.PES', type: '' })).toEqual(['broderi'])
  })

  it('svarar tomt för en fil den inte känner igen', () => {
    expect(fileKinds({ name: 'spel.sb3', type: 'application/octet-stream' })).toEqual([])
    expect(fileKinds({ name: 'utanandelse', type: '' })).toEqual([])
  })
})
