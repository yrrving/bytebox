// Parsrar för broderiformaten PES, DST och JEF.
// Rena funktioner utan DOM-beroenden. Se embroidery.test.ts.

export interface Stitch {
  x: number
  y: number
  type: 'normal' | 'move' | 'trim' | 'end'
  colorIndex: number
}

export interface EmbroideryData {
  stitches: Stitch[]
  colors: string[]
  width: number
  height: number
  stitchCount: number
  colorChanges: number
}

const PES_THREAD_COLORS = [
  '#1a0a94', '#0f75ff', '#00934c', '#babdfe', '#ec0000',
  '#e4995a', '#cc48ab', '#fdc4fa', '#dd84cd', '#6bd38a',
  '#e4a945', '#ffbd42', '#ffe600', '#6cd900', '#c1a941',
  '#b5ad97', '#ba9c5f', '#faf59e', '#808080', '#000000',
  '#001cdf', '#df00b8', '#626262', '#69260d', '#ff0060',
  '#bf8200', '#f39178', '#ff6805', '#f0f0f0', '#c832cd',
  '#b0bf9b', '#65bfeb', '#ffba04', '#fff06c', '#feca15',
  '#f38101', '#37a923', '#23465f', '#a6a695', '#cebfa6',
  '#96aa02', '#f1429f', '#ff008c', '#fef2b0', '#56b738',
  '#bfdfce', '#fa2b4e', '#f5800a', '#f57f7f', '#deb7b7',
  '#cec8c8', '#e60000', '#810080', '#a74880', '#0000e4',
  '#766ef1', '#dedfde', '#e0a100', '#aa7b01', '#cda2a2',
]

function parsePes(buffer: ArrayBuffer): EmbroideryData | null {
  const view = new DataView(buffer)
  const bytes = new Uint8Array(buffer)

  // Check PES header
  const header = String.fromCharCode(...bytes.slice(0, 4))
  if (header !== '#PES') return null

  // Find PEC section offset
  const pecOffset = view.getUint32(8, true)
  if (pecOffset >= buffer.byteLength) return null

  // Skip PEC header to find stitch data
  let pos = pecOffset + 48 // Skip PEC header area
  const numColors = bytes[pos] + 1
  pos += 1

  // Read color indices
  const colorIndices: number[] = []
  for (let i = 0; i < numColors; i++) {
    colorIndices.push(bytes[pos + i])
  }
  pos += numColors

  // Skip to stitch data (look for 0x00 0x00 marker after color list, plus padding)
  // PEC stitch data starts after the thumbnail
  pos = pecOffset + 532

  const stitches: Stitch[] = []
  let x = 0
  let y = 0
  let colorIdx = 0

  while (pos + 1 < buffer.byteLength) {
    const b0 = bytes[pos]
    const b1 = bytes[pos + 1]

    if (b0 === 0xff && b1 === 0x00) break // end of stitches

    if (b0 === 0xfe && b1 === 0xb0) {
      // Color change
      pos += 2
      colorIdx++
      if (pos < buffer.byteLength) pos++ // skip color byte
      continue
    }

    let dx = 0
    let dy = 0
    let type: Stitch['type'] = 'normal'

    if (b0 & 0x80) {
      // 12-bit x
      if (b0 & 0x20) type = 'move'
      dx = ((b0 & 0x0f) << 8) + b1
      if (dx >= 2048) dx -= 4096
      pos += 2
    } else {
      dx = b0
      if (dx >= 64) dx -= 128
      pos += 1
    }

    if (pos >= buffer.byteLength) break
    const b2 = bytes[pos]
    const b3 = pos + 1 < buffer.byteLength ? bytes[pos + 1] : 0

    if (b2 & 0x80) {
      if (b2 & 0x20) type = 'move'
      dy = ((b2 & 0x0f) << 8) + b3
      if (dy >= 2048) dy -= 4096
      pos += 2
    } else {
      dy = b2
      if (dy >= 64) dy -= 128
      pos += 1
    }

    x += dx
    y += dy
    stitches.push({ x, y, type, colorIndex: Math.min(colorIdx, colorIndices.length - 1) })
  }

  if (stitches.length === 0) return null

  const xs = stitches.map((s) => s.x)
  const ys = stitches.map((s) => s.y)
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const maxX = Math.max(...xs)
  const maxY = Math.max(...ys)

  // Normalize positions
  stitches.forEach((s) => {
    s.x -= minX
    s.y -= minY
  })

  const colors = colorIndices.map((ci) => PES_THREAD_COLORS[ci % PES_THREAD_COLORS.length])

  return {
    stitches,
    colors,
    width: maxX - minX,
    height: maxY - minY,
    stitchCount: stitches.filter((s) => s.type === 'normal').length,
    colorChanges: numColors - 1,
  }
}

function parseDst(buffer: ArrayBuffer): EmbroideryData | null {
  const bytes = new Uint8Array(buffer)
  if (buffer.byteLength < 512) return null

  // DST header is 512 bytes
  const stitches: Stitch[] = []
  let x = 0
  let y = 0
  let colorIdx = 0

  // Parse stitch data starting at byte 512
  for (let pos = 512; pos + 2 < buffer.byteLength; pos += 3) {
    const b0 = bytes[pos]
    const b1 = bytes[pos + 1]
    const b2 = bytes[pos + 2]

    // End of file
    if (b0 === 0 && b1 === 0 && b2 === 0xf3) break

    let dx = 0
    let dy = 0
    let type: Stitch['type'] = 'normal'

    // Decode X
    if (b0 & 0x01) dx += 1
    if (b0 & 0x02) dx -= 1
    if (b0 & 0x04) dx += 9
    if (b0 & 0x08) dx -= 9
    if (b1 & 0x01) dx += 3
    if (b1 & 0x02) dx -= 3
    if (b1 & 0x04) dx += 27
    if (b1 & 0x08) dx -= 27
    if (b2 & 0x01) dx += 81
    if (b2 & 0x02) dx -= 81

    // Decode Y
    if (b0 & 0x80) dy += 1
    if (b0 & 0x40) dy -= 1
    if (b0 & 0x20) dy += 9
    if (b0 & 0x10) dy -= 9
    if (b1 & 0x80) dy += 3
    if (b1 & 0x40) dy -= 3
    if (b1 & 0x20) dy += 27
    if (b1 & 0x10) dy -= 27
    if (b2 & 0x80) dy += 81
    if (b2 & 0x40) dy -= 81

    // Command flags
    if (b2 & 0x40) type = 'move'
    if ((b2 & 0xc3) === 0xc3) {
      colorIdx++
      type = 'move'
    }

    x += dx
    y += dy
    stitches.push({ x, y, type, colorIndex: colorIdx })
  }

  if (stitches.length === 0) return null

  const xs = stitches.map((s) => s.x)
  const ys = stitches.map((s) => s.y)
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const maxX = Math.max(...xs)
  const maxY = Math.max(...ys)

  stitches.forEach((s) => {
    s.x -= minX
    s.y -= minY
  })

  // Generate colors for DST (doesn't store color info)
  const numColors = colorIdx + 1
  const defaultColors = ['#000000', '#ff0000', '#00aa00', '#0000ff', '#ff8800', '#aa00aa', '#00aaaa', '#888888']
  const colors = Array.from({ length: numColors }, (_, i) => defaultColors[i % defaultColors.length])

  return {
    stitches,
    colors,
    width: maxX - minX,
    height: maxY - minY,
    stitchCount: stitches.filter((s) => s.type === 'normal').length,
    colorChanges: numColors - 1,
  }
}

function parseJef(buffer: ArrayBuffer): EmbroideryData | null {
  if (buffer.byteLength < 116) return null
  const view = new DataView(buffer)
  const bytes = new Uint8Array(buffer)

  const stitchOffset = view.getInt32(0, true)
  if (stitchOffset <= 0 || stitchOffset >= buffer.byteLength) return null

  const numColors = view.getInt32(24, true)
  if (numColors <= 0 || numColors > 100) return null

  // Read color indices from header (starting at byte 116, each 4 bytes)
  const colorIndices: number[] = []
  for (let i = 0; i < numColors; i++) {
    const idx = view.getInt32(116 + i * 4, true)
    colorIndices.push(idx)
  }

  const colors = colorIndices.map((ci) => PES_THREAD_COLORS[Math.abs(ci) % PES_THREAD_COLORS.length])

  // Parse stitch data
  const stitches: Stitch[] = []
  let x = 0
  let y = 0
  let colorIdx = 0
  let pos = stitchOffset

  while (pos + 1 < buffer.byteLength) {
    const b0 = bytes[pos]
    const b1 = bytes[pos + 1]

    // End marker
    if (b0 === 0x80 && b1 === 0x10) break

    // Color change
    if (b0 === 0x80 && b1 === 0x01) {
      colorIdx++
      pos += 2
      continue
    }

    // Move (jump stitch)
    if (b0 === 0x80 && b1 === 0x02) {
      pos += 2
      if (pos + 1 >= buffer.byteLength) break
      const dx = bytes[pos] > 127 ? bytes[pos] - 256 : bytes[pos]
      const dy = bytes[pos + 1] > 127 ? bytes[pos + 1] - 256 : bytes[pos + 1]
      x += dx
      y += dy
      stitches.push({ x, y, type: 'move', colorIndex: Math.min(colorIdx, numColors - 1) })
      pos += 2
      continue
    }

    // Normal stitch: 2 bytes signed
    const dx = b0 > 127 ? b0 - 256 : b0
    const dy = b1 > 127 ? b1 - 256 : b1
    x += dx
    y += dy
    stitches.push({ x, y, type: 'normal', colorIndex: Math.min(colorIdx, numColors - 1) })
    pos += 2
  }

  if (stitches.length === 0) return null

  const xs = stitches.map((s) => s.x)
  const ys = stitches.map((s) => s.y)
  const minX = Math.min(...xs)
  const minY = Math.min(...ys)
  const maxX = Math.max(...xs)
  const maxY = Math.max(...ys)

  stitches.forEach((s) => {
    s.x -= minX
    s.y -= minY
  })

  return {
    stitches,
    colors,
    width: maxX - minX,
    height: maxY - minY,
    stitchCount: stitches.filter((s) => s.type === 'normal').length,
    colorChanges: Math.max(0, colorIdx),
  }
}

export function parseEmbroidery(buffer: ArrayBuffer, fileName: string): EmbroideryData | null {
  const ext = fileName.toLowerCase().split('.').pop()
  if (ext === 'pes') return parsePes(buffer)
  if (ext === 'dst') return parseDst(buffer)
  if (ext === 'jef') return parseJef(buffer)
  return null
}
