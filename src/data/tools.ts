import {
  Image,
  Palette,
  QrCode,
  Speech,
  ImageDown,
  FileVideo,
  Scissors,
  Crop,
  Eraser,
  Grid3X3,
  Terminal,
  Crosshair,
  Files,
  Scan,
  Gamepad2,
  FileImage,
  ImageOff,
  Captions,
  AudioLines,
  Film,
  FileEdit,
  type LucideIcon,
} from 'lucide-react'

// Minsta skärm som verktyget behöver för att fungera bra.
// mobil = funkar på telefon, surfplatta = kräver minst en surfplatta,
// dator = fungerar bäst på (och rekommenderas för) en dator.
export type MinScreen = 'mobil' | 'surfplatta' | 'dator'
export type ConnectionType = 'online' | 'offline'
export type ToolCategory = 'bild' | 'text' | 'ljud' | 'produktivitet' | 'spelutveckling'
export type Category = 'alla' | 'online' | 'offline'

export interface Tool {
  id: string
  route: string
  minScreen: MinScreen
  connection: ConnectionType
  icon: LucideIcon
  category: ToolCategory
}

/**
 * De senaste nya/ändrade verktygen, nyast först. Styr "Nytt"-etiketten på
 * verktygskorten (håll listan till sex stycken) — startsidans "Nytt"-sektion
 * visar bara de tre första (se Home.tsx). Lägg nya verktyg längst fram.
 */
export const latestToolIds: string[] = [
  'padgrid',
  'pdf-verktyg',
  'ordbehandlare',
  'video-till-gif',
]

/** Är verktyget ett av de senaste (visas med "Nytt"-etikett)? */
export function isNewTool(id: string): boolean {
  return latestToolIds.includes(id)
}

export const categoryOrder: ToolCategory[] = [
  'bild',
  'text',
  'ljud',
  'produktivitet',
  'spelutveckling',
]

export const tools: Tool[] = [
  // ── Bild & Media ──────────────────────────────────────────
  {
    id: 'heic-till-jpg',
    route: '/heic-till-jpg',
    minScreen: 'mobil',
    connection: 'offline',
    icon: FileImage,
    category: 'bild',
  },
  {
    id: 'metadata-tvatt',
    route: '/metadata-tvatt',
    minScreen: 'mobil',
    connection: 'offline',
    icon: ImageOff,
    category: 'bild',
  },
  {
    id: 'png-till-svg',
    route: '/png-till-svg',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Image,
    category: 'bild',
  },
  {
    id: 'bildkomprimering',
    route: '/bildkomprimering',
    minScreen: 'mobil',
    connection: 'offline',
    icon: ImageDown,
    category: 'bild',
  },
  {
    id: 'fargpalett',
    route: '/fargpalett',
    minScreen: 'mobil',
    connection: 'offline',
    icon: Palette,
    category: 'bild',
  },
  {
    id: 'mediakonverterare',
    route: '/mediakonverterare',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: FileVideo,
    category: 'bild',
  },
  {
    id: 'brodyrkortsvisare',
    route: '/brodyrkortsvisare',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Scissors,
    category: 'bild',
  },
  {
    id: 'bildbeskärare',
    route: '/bildbeskärare',
    minScreen: 'mobil',
    connection: 'offline',
    icon: Crop,
    category: 'bild',
  },
  {
    id: 'bakgrundsborttagare',
    route: '/bakgrundsborttagare',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Eraser,
    category: 'bild',
  },
  {
    id: 'ascii-konst',
    route: '/ascii-konst',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Terminal,
    category: 'bild',
  },
  {
    id: 'skarfilsgenerator',
    route: '/skarfilsgenerator',
    minScreen: 'dator',
    connection: 'offline',
    icon: Crosshair,
    category: 'bild',
  },
  {
    id: 'video-till-gif',
    route: '/video-till-gif',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Film,
    category: 'bild',
  },

  // ── Text & Dokument ───────────────────────────────────────
  {
    id: 'ordbehandlare',
    route: '/ordbehandlare',
    minScreen: 'dator',
    connection: 'offline',
    icon: FileEdit,
    category: 'text',
  },
  {
    id: 'pdf-verktyg',
    route: '/pdf-verktyg',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Files,
    category: 'text',
  },
  {
    id: 'ocr',
    route: '/ocr',
    minScreen: 'mobil',
    connection: 'offline',
    icon: Scan,
    category: 'text',
  },
  {
    id: 'srt-redigerare',
    route: '/srt-redigerare',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: Captions,
    category: 'text',
  },

  // ── Ljud & Tal ────────────────────────────────────────────
  {
    id: 'text-till-tal',
    route: '/text-till-tal',
    minScreen: 'mobil',
    connection: 'online',
    icon: Speech,
    category: 'ljud',
  },
  {
    id: 'ljudklipp',
    route: '/ljudklipp',
    minScreen: 'surfplatta',
    connection: 'offline',
    icon: AudioLines,
    category: 'ljud',
  },
  {
    id: 'padgrid',
    route: '/padgrid',
    minScreen: 'dator',
    connection: 'offline',
    icon: Grid3X3,
    category: 'ljud',
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
    icon: QrCode,
    category: 'produktivitet',
  },

  // ── Spelutveckling ────────────────────────────────────────
  {
    id: 'traincells',
    route: '/traincells',
    minScreen: 'dator',
    connection: 'offline',
    icon: Gamepad2,
    category: 'spelutveckling',
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
