# ByteBox, grafiskt

Det som behövs för att använda ByteBox namn och utseende någon annanstans, på
skärm eller i tryck.

## Vad ByteBox är, i en mening

Gratis verktyg för digitalt skapande, som körs helt i din egen webbläsare.

Kortare varianter om utrymmet är litet: *Verktyg som körs på din enhet* eller
*Gratis verktyg för digitalt skapande*.

## Logotyp

| Fil | Använd när |
| --- | --- |
| `logotyp/bytebox-logotyp.svg` | Standard. Ljus bakgrund. |
| `logotyp/bytebox-logotyp-vit.svg` | Mörk bakgrund. |
| `logotyp/bytebox-symbol.svg` | Bara märket, utan text. Profilbilder, klistermärken, appikon. |

SVG är originalen och kan förstoras hur mycket som helst. PNG-versionerna
ligger bredvid för sammanhang som inte klarar SVG, i 960 respektive 1024 pixlar.

**Fritt utrymme.** Lämna minst en halv symbolhöjd tomt runt logotypen.

**Minsta storlek.** Under 24 mm bredd i tryck blir skiftnyckeln otydlig. Använd
symbolen ensam i stället.

**Gör inte.** Sträck den inte, luta den inte, byt inte typsnitt, och lägg den
inte på en bakgrund med för låg kontrast. Symbolen har redan en egen platta,
så den behöver ingen till.

## Färger

Hela skalan finns som bild i `farger/bytebox-farger.png`.

| Roll | Hex | Noteringar |
| --- | --- | --- |
| Accent | `#23749F` | Knappar och länkar. Vit text på denna ger 5,16:1, godkänt. |
| Accent, ljusare | `#2A8CC0` | Ramar och detaljer. **Inte** som bakgrund till vit text, ger bara 3,74:1. |
| Text, ljust läge | `#141617` | |
| Text, mörkt läge | `#EEF0F1` | |

Skalan är byggd på `hsl(201, 64%)` med varierande ljushet. Steg 500 är
`#2A8CC0`, steg 600 är `#23749F`.

### För tryck

Omräknat från hex, ungefärliga värden. Be tryckeriet göra en provtryckning om
färgen är viktig.

| Färg | CMYK ungefär | Närmaste Pantone |
| --- | --- | --- |
| `#23749F` | 78 / 42 / 18 / 2 | 7692 C |
| `#2A8CC0` | 72 / 33 / 8 / 0 | 7461 C |

## Typsnitt

**Ubuntu**, vikt 400 och 700. Öppen licens (Ubuntu Font Licence), fri att
använda och distribuera. Finns i repot under `src/assets/fonts/`.

Saknas Ubuntu: använd systemets gränssnittstypsnitt. Segoe UI på Windows,
SF Pro på macOS. Undvik att byta till något med annan karaktär.

## Ikoner

`ikoner/` innehåller det som appen använder.

| Fil | Storlek | Till vad |
| --- | --- | --- |
| `favicon.svg` | valfri | Webbläsarflik |
| `apple-touch-icon.png` | 180 | Hemskärm på iPhone och iPad |
| `icon-192.png` | 192 | Android, hemskärm |
| `icon-512.png` | 512 | Android, startskärm |
| `icon-maskable-512.png` | 512 | Android, när systemet beskär ikonen till en form |

Den maskbara har extra marginal runt motivet, eftersom Android kan klippa den
till en cirkel. Använd den inte där ikonen visas oklippt.

## Skrivsätt

**ByteBox**, ett ord, stort B på båda ställena. Inte Bytebox, inte Byte Box.

Inga tankestreck i löpande text. Punkt eller komma i stället.

Tonen är lugn och konkret. Beskriv vad något är och vad det gör, hellre än att
jämföra med andra eller argumentera.

## Licens

Koden ligger under MIT och får användas fritt. Logotypen och namnet är däremot
en identitet: använd dem för att hänvisa till ByteBox, inte för att märka något
annat som om det vore ByteBox.
