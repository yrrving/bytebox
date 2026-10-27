import type { FileKind } from '../utils/filsort'

// Minsta skärm som verktyget behöver för att fungera bra.
// mobil = funkar på telefon, surfplatta = kräver minst en surfplatta,
// dator = fungerar bäst på (och rekommenderas för) en dator.
export type MinScreen = 'mobil' | 'surfplatta' | 'dator'
export type ConnectionType = 'online' | 'offline'
export type ToolCategory = 'bild' | 'form' | 'text' | 'ljud' | 'spel'
export type Category = 'alla' | 'online' | 'offline'

export interface Tool {
  id: string
  route: string
  minScreen: MinScreen
  connection: ConnectionType
  category: ToolCategory
  /** Filsorter verktyget tar emot. Tom lista = börjar från noll, ingen fil behövs. */
  inputs: FileKind[]
}

/**
 * De senaste nya verktygen, nyast först. Styr "Nytt"-etiketten på korten och
 * startsidans "Nytt"-sektion, som döljs helt när listan är tom.
 *
 * Tom sedan 0.31.0: efter städningen och omskrivningen är inget verktyg nyare
 * än något annat. Lägg in id:t här när något faktiskt tillkommer, nyast först,
 * och håll listan kort.
 */
export const latestToolIds: string[] = []

/** Är verktyget ett av de senaste (visas med "Nytt"-etikett)? */
export function isNewTool(id: string): boolean {
  return latestToolIds.includes(id)
}

export const categoryOrder: ToolCategory[] = [
  'bild',
  'form',
  'text',
  'ljud',
  'spel',
]

export const tools: Tool[] = [
  // ── Bild & Media ──────────────────────────────────────────
  {
    id: 'heic-till-jpg',
    route: '/heic-till-jpg',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'bild',
    inputs: ['heic'],
  },
  {
    id: 'metadata-tvatt',
    route: '/metadata-tvatt',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'bild',
    inputs: ['bild'],
  },
  {
    id: 'png-till-svg',
    route: '/png-till-svg',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'form',
    inputs: ['bild'],
  },
  {
    id: 'bildkomprimering',
    route: '/bildkomprimering',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'bild',
    inputs: ['bild'],
  },
  {
    id: 'fargpalett',
    route: '/fargpalett',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'form',
    inputs: [],
  },
  {
    id: 'mediakonverterare',
    route: '/mediakonverterare',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'ljud',
    inputs: ['video', 'ljud'],
  },
  {
    id: 'brodyrkortsvisare',
    route: '/brodyrkortsvisare',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'form',
    inputs: ['broderi'],
  },
  {
    id: 'bildbeskärare',
    route: '/bildbeskärare',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'bild',
    inputs: ['bild'],
  },
  {
    id: 'bakgrundsborttagare',
    route: '/bakgrundsborttagare',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'bild',
    inputs: ['bild'],
  },
  {
    id: 'ascii-konst',
    route: '/ascii-konst',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'bild',
    inputs: ['bild'],
  },
  {
    id: 'skarfilsgenerator',
    route: '/skarfilsgenerator',
    minScreen: 'dator',
    connection: 'offline',
    category: 'form',
    inputs: ['bild'],
  },
  {
    id: 'video-till-gif',
    route: '/video-till-gif',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'bild',
    inputs: ['video'],
  },

  // ── Text & Dokument ───────────────────────────────────────
  {
    id: 'ordbehandlare',
    route: '/ordbehandlare',
    minScreen: 'dator',
    connection: 'offline',
    category: 'text',
    inputs: [],
  },
  {
    id: 'pdf-verktyg',
    route: '/pdf-verktyg',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'text',
    inputs: ['pdf'],
  },
  {
    id: 'ocr',
    route: '/ocr',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'text',
    inputs: ['bild'],
  },
  {
    id: 'srt-redigerare',
    route: '/srt-redigerare',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'text',
    inputs: ['undertext'],
  },

  // ── Ljud & Tal ────────────────────────────────────────────
  {
    id: 'text-till-tal',
    route: '/text-till-tal',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'ljud',
    inputs: [],
  },
  {
    id: 'ljudklipp',
    route: '/ljudklipp',
    minScreen: 'surfplatta',
    connection: 'offline',
    category: 'ljud',
    inputs: ['ljud'],
  },
  {
    id: 'padgrid',
    route: '/padgrid',
    minScreen: 'dator',
    connection: 'offline',
    category: 'ljud',
    inputs: [],
  },

  // ── Kod & Data ────────────────────────────────────────────

  // ── Nätverk & Säkerhet ────────────────────────────────────

  // ── Beräkning & Konvertering ──────────────────────────────

  // ── Produktivitet & Verktyg ───────────────────────────────
  {
    id: 'qr-kod',
    route: '/qr-kod',
    minScreen: 'mobil',
    connection: 'offline',
    category: 'form',
    inputs: [],
  },

  // ── Spelutveckling ────────────────────────────────────────
  {
    id: 'traincells',
    route: '/traincells',
    minScreen: 'dator',
    connection: 'offline',
    category: 'spel',
    inputs: [],
  },
]

/** Ordning: mobil < surfplatta < dator. Ett verktyg funkar på enheten om dess
 *  minScreen är samma eller mindre än enhetens nivå (dator kör allt). */
export const screenRank: Record<MinScreen, number> = {
  mobil: 0,
  surfplatta: 1,
  dator: 2,
}

/** Kan ett verktyg köras på en enhet av given nivå? */
export function runsOn(tool: Tool, device: MinScreen): boolean {
  return screenRank[tool.minScreen] <= screenRank[device]
}

/** Tar verktyget emot någon av de här filsorterna? */
export function acceptsAny(tool: Tool, kinds: FileKind[]): boolean {
  return tool.inputs.some((kind) => kinds.includes(kind))
}
