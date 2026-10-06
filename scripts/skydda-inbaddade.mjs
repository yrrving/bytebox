// Lägger tillbaka Content-Security-Policy i de inbäddade apparnas index.html.
//
// VARFÖR DET HÄR BEHÖVS
// TrainCells och PadGrid körs i varsin iframe. En iframe lyder sin EGEN policy,
// inte föräldrasidans, så ByteBox strikta CSP i index.html skyddar dem inte alls.
// Utan den här filen kör de två apparna helt oskyddade mitt i en sida som i
// övrigt är låst, och löftet om att ingenting skickas vidare gäller inte dem.
//
// Apparna byggs i egna repon (ClaudeBloxels respektive padgrid) och kopieras
// hit som färdiga filer. Varje sådan kopiering skriver över index.html och
// raderar policyn. Därför körs det här som en del av `npm run build`, och
// e2e/no-external-requests.spec.ts fäller bygget om den ändå saknas.
//
// Apparna behöver varken eval eller WebAssembly, så deras policy kan vara
// stramare än huvudsidans, som behöver 'unsafe-eval' för heic2any och pdf.js.
//
// frame-ancestors är medvetet utelämnad: den ignoreras när den levereras via en
// metatagg och fungerar bara som HTTP-header, vilket GitHub Pages inte låter
// oss sätta. En rad som inte gör något ska inte stå kvar och se ut som skydd.

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/** De inbäddade apparna, alltså mappar i public/ som har en egen index.html. */
const APPAR = ['traincells', 'padgrid']

const POLICY = `    <!--
      Samma skydd som ByteBox huvudsida, men ännu stramare: den här appen
      behöver varken eval eller WebAssembly.

      Det MÅSTE stå här och inte bara i ByteBox index.html. En iframe lyder sin
      egen policy, inte föräldrasidans, så utan den här raden kör appen helt
      oskyddad trots att sidan runt omkring är låst.

      connect-src har ingen extern domän: appen kan inte skicka användarens
      data någonstans ens om ett beroende blir komprometterat.

      Lagd av scripts/skydda-inbaddade.mjs. Ändra där, inte här, annars
      försvinner ändringen vid nästa ombyggnad av appen.
    -->
    <meta
      http-equiv="Content-Security-Policy"
      content="
        default-src 'self';
        script-src 'self';
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: blob:;
        media-src 'self' data: blob:;
        font-src 'self' data:;
        worker-src 'self' blob:;
        connect-src 'self' blob: data:;
        object-src 'none';
        base-uri 'self';
        form-action 'self';
      "
    />
`

let lagda = 0
let fanns = 0

for (const app of APPAR) {
  const fil = join(root, 'public', app, 'index.html')
  if (!existsSync(fil)) {
    console.warn(`  ${app}: index.html saknas, hoppar över`)
    continue
  }

  const html = readFileSync(fil, 'utf8')
  if (html.includes('Content-Security-Policy')) {
    fanns++
    continue
  }

  // Policyn läggs direkt efter charset, alltså så tidigt som möjligt. En CSP
  // gäller bara det som laddas efter den.
  const markor = html.match(/^[ \t]*<meta charset=["'][^"']*["'][^>]*>\n/m)
  if (!markor) {
    console.error(`  ${app}: hittar ingen charset-rad att lägga policyn efter`)
    process.exitCode = 1
    continue
  }

  writeFileSync(fil, html.replace(markor[0], markor[0] + POLICY), 'utf8')
  console.log(`  ${app}: CSP tillagd`)
  lagda++
}

console.log(
  lagda > 0
    ? `Skyddade ${lagda} inbäddad app${lagda > 1 ? 'ar' : ''}, ${fanns} hade redan policy`
    : `Alla ${fanns} inbäddade appar har redan CSP`,
)
