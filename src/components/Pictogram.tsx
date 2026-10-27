import { pictograms } from '../data/pictograms'

/** En verktygsbild. Alltid dekorativ: verktygets namn står bredvid i text. */
export default function Pictogram({ id, className }: { id: string; className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      {pictograms[id]}
    </svg>
  )
}

/**
 * Föremålet på sin plats: skuggan målad på väggen och verktyget ovanpå. När
 * föräldern har klassen peg-tool lyfts verktyget ur skuggan vid hovring och
 * tangentbordsfokus. Se .peg-* i index.css.
 */
export function HangingTool({ id, className = '' }: { id: string; className?: string }) {
  return (
    <span className={`peg-slot ${className}`} aria-hidden="true">
      <Pictogram id={id} className="peg-sh" />
      <Pictogram id={id} className="peg-obj" />
    </span>
  )
}
