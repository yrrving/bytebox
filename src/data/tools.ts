import {
  Image,
  Palette,
  FileSearch,
  QrCode,
  Calculator,
  Ruler,
  ArrowLeftRight,
  Clock,
  Hash,
  Lock,
  FileText,
  Languages,
  Globe,
  Gauge,
  Keyboard,
  FileJson,
  Speech,
  Mic,
  MessageSquare,
  Film,
  Music,
  type LucideIcon,
} from 'lucide-react'

export type DeviceType = 'dator' | 'mobil' | 'båda'
export type ConnectionType = 'online' | 'offline'
export type Category = 'alla' | 'dator' | 'mobil' | 'online' | 'offline'

export interface Tool {
  id: string
  route: string
  device: DeviceType
  connection: ConnectionType
  icon: LucideIcon
}

export const tools: Tool[] = [
  {
    id: 'png-till-svg',
    route: '/png-till-svg',
    device: 'dator',
    connection: 'offline',
    icon: Image,
  },
  {
    id: 'fargpalett',
    route: '/fargpalett',
    device: 'dator',
    connection: 'offline',
    icon: Palette,
  },
  {
    id: 'filanalys',
    route: '/filanalys',
    device: 'dator',
    connection: 'offline',
    icon: FileSearch,
  },
  {
    id: 'qr-kod',
    route: '/qr-kod',
    device: 'mobil',
    connection: 'offline',
    icon: QrCode,
  },
  {
    id: 'rabattraknare',
    route: '/rabattraknare',
    device: 'mobil',
    connection: 'offline',
    icon: Calculator,
  },
  {
    id: 'linjal',
    route: '/linjal',
    device: 'mobil',
    connection: 'offline',
    icon: Ruler,
  },
  {
    id: 'enhetsomvandlare',
    route: '/enhetsomvandlare',
    device: 'mobil',
    connection: 'offline',
    icon: ArrowLeftRight,
  },
  {
    id: 'tidszoner',
    route: '/tidszoner',
    device: 'båda',
    connection: 'offline',
    icon: Clock,
  },
  {
    id: 'hash-generator',
    route: '/hash-generator',
    device: 'dator',
    connection: 'offline',
    icon: Hash,
  },
  {
    id: 'losenordsgenerator',
    route: '/losenordsgenerator',
    device: 'båda',
    connection: 'offline',
    icon: Lock,
  },
  {
    id: 'textverktyg',
    route: '/textverktyg',
    device: 'båda',
    connection: 'offline',
    icon: FileText,
  },
  {
    id: 'oversattare',
    route: '/oversattare',
    device: 'båda',
    connection: 'online',
    icon: Languages,
  },
  {
    id: 'ip-info',
    route: '/ip-info',
    device: 'båda',
    connection: 'online',
    icon: Globe,
  },
  {
    id: 'bandbreddstest',
    route: '/bandbreddstest',
    device: 'båda',
    connection: 'online',
    icon: Gauge,
  },
  {
    id: 'tangentbordstest',
    route: '/tangentbordstest',
    device: 'dator',
    connection: 'offline',
    icon: Keyboard,
  },
  {
    id: 'json-formaterare',
    route: '/json-formaterare',
    device: 'dator',
    connection: 'offline',
    icon: FileJson,
  },
  {
    id: 'text-till-tal',
    route: '/text-till-tal',
    device: 'båda',
    connection: 'online',
    icon: Speech,
  },
  {
    id: 'tal-till-text',
    route: '/tal-till-text',
    device: 'båda',
    connection: 'online',
    icon: Mic,
  },
  {
    id: 'tolk',
    route: '/tolk',
    device: 'båda',
    connection: 'online',
    icon: MessageSquare,
  },
  {
    id: 'filmtranskribering',
    route: '/filmtranskribering',
    device: 'båda',
    connection: 'online',
    icon: Film,
  },
  {
    id: 'musiktranskribering',
    route: '/musiktranskribering',
    device: 'båda',
    connection: 'online',
    icon: Music,
  },
]
