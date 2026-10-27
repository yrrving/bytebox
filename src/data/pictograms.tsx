import type { CSSProperties, ReactNode } from 'react'

/**
 * ByteBox egna verktygsbilder. Varje verktyg hänger på väggen som ett eget
 * föremål, så bilderna är kraftiga och fyllda i stället för tunna linjer.
 *
 * Ritade i en ruta på 48 × 48. Delar som ska se urskurna ut fylls med
 * `var(--cut)`, som är väggens färg under föremålet och konturens färg i
 * skuggan bakom (se .peg-sh i index.css). Linjer som tråd och ljudvågor
 * använder `var(--line)` som tjocklek, så att skuggan kan göra dem bredare.
 */

const cut: CSSProperties = { fill: 'var(--cut)' }
const line: CSSProperties = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 'var(--line, 4px)',
  strokeLinecap: 'round',
}

/** Fyra hörn, som en ram runt något. Används av Krymp en bild och Text ur en bild. */
const corners = (
  <>
    <path d="M4 4h12v5H9v7H4Z" />
    <path d="M44 4H32v5h7v7h5Z" />
    <path d="M4 44h12v-5H9v-7H4Z" />
    <path d="M44 44H32v-5h7v-7h5Z" />
  </>
)

const finder = (x: number, y: number) => (
  <>
    <rect x={x} y={y} width="16" height="16" rx="2" />
    <rect x={x + 4} y={y + 4} width="8" height="8" style={cut} />
    <rect x={x + 6} y={y + 6} width="4" height="4" />
  </>
)

export const pictograms: Record<string, ReactNode> = {
  'heic-till-jpg': (
    <>
      <rect x="4" y="8" width="40" height="32" rx="3" />
      <polygon points="9,35 19,21 26,29 30,24 39,35" style={cut} />
      <circle cx="33" cy="16" r="4" style={cut} />
    </>
  ),
  'metadata-tvatt': (
    <>
      <path d="M9 5h15l19 19-19 19L6 25V8a3 3 0 0 1 3-3Z" />
      <circle cx="15" cy="14" r="4" style={cut} />
      <rect x="17" y="26" width="16" height="4" rx="2" transform="rotate(45 25 28)" style={cut} />
    </>
  ),
  bildkomprimering: (
    <>
      {corners}
      <rect x="15" y="15" width="18" height="18" rx="2" />
    </>
  ),
  'bildbeskärare': (
    <>
      <path d="M12 2h6v28h28v6H12Z" />
      <path d="M2 12h28v34h-6V18H2Z" />
    </>
  ),
  bakgrundsborttagare: (
    <>
      <circle cx="24" cy="15" r="9" />
      <path d="M6 44c0-10 8-17 18-17s18 7 18 17Z" />
    </>
  ),
  'ascii-konst': <path fillRule="evenodd" d="M19 5h10l13 38h-9l-3-9H18l-3 9H6Zm5 11-4 11h8Z" />,
  'video-till-gif': (
    <>
      <rect x="8" y="3" width="32" height="42" rx="2" />
      {[7, 16, 25, 34].map((y) => (
        <g key={y}>
          <rect x="11" y={y} width="4" height="4" style={cut} />
          <rect x="33" y={y} width="4" height="4" style={cut} />
        </g>
      ))}
      <rect x="18" y="9" width="12" height="30" rx="1" style={cut} />
    </>
  ),
  'png-till-svg': (
    <>
      <path d="M24 3 39 22 31 45H17L9 22Z" />
      <rect x="22.5" y="8" width="3" height="15" style={cut} />
      <circle cx="24" cy="27" r="4" style={cut} />
    </>
  ),
  fargpalett: (
    <>
      <path d="M24 4C12 4 4 12 4 23s8 21 18 21c4 0 5-3 3-6-2-3 0-6 4-6h6c6 0 9-4 9-9C44 12 35 4 24 4Z" />
      <circle cx="14" cy="21" r="3.5" style={cut} />
      <circle cx="20" cy="12" r="3.5" style={cut} />
      <circle cx="30" cy="12" r="3.5" style={cut} />
      <circle cx="36" cy="21" r="3.5" style={cut} />
    </>
  ),
  brodyrkortsvisare: (
    <>
      <path d="M37 3l8 8-28 28-10 3 3-10Z" />
      <rect x="35" y="7" width="6" height="2.6" rx="1.3" transform="rotate(-45 38 8.3)" style={cut} />
      <path d="M12 36c-8 6-4 12 4 9s12-2 14 3" style={line} />
    </>
  ),
  skarfilsgenerator: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="11" style={cut} />
      <rect x="21.5" y="1" width="5" height="14" />
      <rect x="21.5" y="33" width="5" height="14" />
      <rect x="1" y="21.5" width="14" height="5" />
      <rect x="33" y="21.5" width="14" height="5" />
      <circle cx="24" cy="24" r="4" />
    </>
  ),
  'qr-kod': (
    <>
      {finder(4, 4)}
      {finder(28, 4)}
      {finder(4, 28)}
      <rect x="28" y="28" width="6" height="6" />
      <rect x="38" y="28" width="6" height="6" />
      <rect x="33" y="33" width="6" height="6" />
      <rect x="28" y="38" width="6" height="6" />
      <rect x="38" y="38" width="6" height="6" />
    </>
  ),
  ordbehandlare: (
    <>
      <path d="M9 3h21l10 10v32H9Z" />
      <path d="M30 3l10 10H30Z" style={cut} />
      <rect x="14" y="20" width="20" height="3.5" style={cut} />
      <rect x="14" y="27" width="20" height="3.5" style={cut} />
      <rect x="14" y="34" width="12" height="3.5" style={cut} />
    </>
  ),
  'pdf-verktyg': (
    <>
      <rect x="16" y="3" width="27" height="33" rx="2" />
      <rect x="5" y="12" width="27" height="33" rx="2" style={{ stroke: 'var(--cut)', strokeWidth: 3 }} />
      <rect x="10" y="22" width="17" height="3.5" style={cut} />
      <rect x="10" y="29" width="17" height="3.5" style={cut} />
      <rect x="10" y="36" width="10" height="3.5" style={cut} />
    </>
  ),
  ocr: (
    <>
      {corners}
      <rect x="13" y="13" width="22" height="6" />
      <rect x="21" y="13" width="6" height="22" />
    </>
  ),
  'srt-redigerare': (
    <>
      <rect x="3" y="6" width="42" height="31" rx="3" />
      <rect x="9" y="22" width="30" height="4" rx="2" style={cut} />
      <rect x="14" y="29" width="20" height="4" rx="2" style={cut} />
      <rect x="17" y="40" width="14" height="4" rx="2" />
    </>
  ),
  mediakonverterare: (
    <>
      <path d="M4 9h26V3l13 11-13 11v-6H4Z" />
      <path d="M44 29H18v-6L5 34l13 11v-6h26Z" />
    </>
  ),
  'text-till-tal': (
    <>
      <path d="M4 17h9L26 6v36L13 31H4Z" />
      <path d="M32 17c3 4 3 10 0 14" style={line} />
      <path d="M38 11c6 7 6 19 0 26" style={line} />
    </>
  ),
  ljudklipp: (
    <>
      {[
        [3, 19, 10],
        [10, 13, 22],
        [17, 6, 36],
        [24, 15, 18],
        [31, 3, 42],
        [38, 12, 24],
      ].map(([x, y, h]) => (
        <rect key={x} x={x} y={y} width="5" height={h} rx="2.5" />
      ))}
    </>
  ),
  padgrid: (
    <>
      {[3, 18, 33].flatMap((y) =>
        [3, 18, 33].map((x) => <rect key={`${x}-${y}`} x={x} y={y} width="12" height="12" rx="2" />),
      )}
      <rect x="21" y="21" width="6" height="6" rx="1" style={cut} />
    </>
  ),
  traincells: (
    <>
      <path d="M14 11h20c6 0 9 4 10 10l2 13c1 5-3 8-7 6l-7-5H16l-7 5c-4 2-8-1-7-6l2-13c1-6 4-10 10-10Z" />
      <rect x="9" y="21" width="11" height="4" style={cut} />
      <rect x="12.5" y="17.5" width="4" height="11" style={cut} />
      <circle cx="32" cy="20" r="2.8" style={cut} />
      <circle cx="37" cy="26" r="2.8" style={cut} />
    </>
  ),
}
