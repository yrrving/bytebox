# Changelog

Alla ändringar i Bytebox dokumenteras här.

## 0.19.0 — 2026-07-04 — Video till GIF

### Nytt

- **Video till GIF** — gör en animerad GIF av ett videoklipp direkt i webbläsaren: välj start, slut, bildrutor/sekund och storlek, förhandsgranska och ladda ner. Använder en lätt GIF-kodare (gifenc, ~8 kB) i stället för tunga bibliotek, och videon laddas aldrig upp.

### Teknik

- Bildrutor plockas från videon via canvas och kodas med gifenc, som laddas först när verktyget öppnas (dynamisk import) — huvudbundeln påverkas inte.

## 0.18.1 — 2026-07-04 — Säkerhetsuppdatering av beroenden

### Underhåll

- Uppdaterade alla beroenden med kända sårbarheter (12 st → 0), inklusive react-router (7.13 → 7.18.1). Övriga var byggverktyg som inte ingår i den publicerade sidan. Inga funktionsändringar.

## 0.18.0 — 2026-07-04 — Ljudklipp, streckkod & PDF-signering

### Nytt

- **Ljudklippare** — klipp och trimma ljudfiler (välj start/slut på vågformen, förlyssna och ladda ner en WAV). Allt lokalt, inga beroenden.
- **Streckkodsgenerator** — skapa streckkoder (CODE128, EAN, UPC, ITF14 m.fl.) och ladda ner som PNG eller SVG.
- **PDF-signering** — signera PDF-dokument genom att rita din namnteckning och placera den på valfri sida. Filen laddas aldrig upp.

### Teknik

- Streckkods- (jsbarcode) och PDF-biblioteken (pdf-lib) laddas först när verktyget öppnas (dynamisk import), så huvudbundeln hålls liten.

## 0.17.0 — 2026-07-04 — Sex nya verktyg

### Nytt

- **SVG-optimerare** — krymp och städa SVG-filer (ta bort metadata, kommentarer, onödig kod). Allt lokalt.
- **SRT-redigerare** — redigera undertexter: ändra text, justera tider och förskjut hela filen. Allt lokalt.
- **Namnbrickor** — skapa utskrivbara namnbrickor på ett A4-ark, ett namn per rad. 300 DPI PNG.
- **UUID-generator** — skapa slumpmässiga UUID:er (v4), en eller många på en gång.
- **Epoch-omvandlare** — omvandla mellan Unix-tidsstämpel och datum/tid åt båda hållen (sekunder & millisekunder).
- **Bas-omvandlare** — omvandla heltal mellan binärt, oktalt, decimalt och hexadecimalt live.

## 0.16.0 — 2026-07-04 — "Vad kan du göra på din enhet?"

### Nytt

- Tre snabbknappar på startsidan — **Mobil / Surfplatta / Dator** — som visar exakt vilka verktyg som fungerar på just din typ av skärm (datorn kör allt).
- Kort sammanfattning högst upp av vad Bytebox är och vad man kan göra här.

### Förbättrat

- Alla verktyg är omklassade efter minsta skärm de faktiskt behöver. Verktyg som fungerar bra på en telefon (t.ex. metadata-tvätt, passfoto, OCR, bildkomprimering, QR, IP-info) är nu fullt användbara på mobilen i stället för att blockeras.
- Verktyg som kräver mer yta visar antingen "kräver minst en surfplatta" (på telefon) eller en mjuk rekommendation om att de fungerar bäst på en dator (på surfplatta) — i stället för en hård spärr.
- Verktygskorten visar nu minsta enhet (mobil/surfplatta/dator) med tydlig ikon.

## 0.15.0 — 2026-07-04 — Mobilanpassning

### Förbättrat

- Menyn är nu responsiv: på mobil samlas språk, tema, journal och installera-knappen bakom en hamburgermeny i stället för att tryckas ihop på en rad.
- Flikarna (Alla / Dator / Mobil / Online / Offline) fyller nu bredden och får plats på små skärmar.

### Nytt

- Verktyg som inte passar på en telefon (desktop-verktyg) visar nu ett tydligt meddelande om att de kräver minst en surfplatta i skärmstorlek, med en väg tillbaka till verktygslistan. Verktygen syns fortfarande i listan (märkta "dator").

## 0.14.0 — 2026-07-04 — Tydlig integritet (GDPR-genomgång)

### Förbättrat

- Alla verktyg som kommunicerar med en extern tjänst visar nu en tydlig integritetsnotis som talar om exakt vart data skickas (Översättare → MyMemory, IP-info → ipapi.co, HTTP-headers → AllOrigins, SSL-koll → ssl-checker.io, DNS-uppslagning → Google DNS, Bandbreddstest → Cloudflare, Tal-till-text → webbläsarens taltjänst). Bytebox lagrar aldrig något själv.
- Översättaren varnar särskilt för att inmatad text kan sparas i MyMemorys publika översättningsminne — klistra inte in känsliga personuppgifter.
- Startsidans undertext är ärligare: de flesta verktyg körs helt lokalt, och de som behöver internet är tydligt märkta.

## 0.13.0 — 2026-07-04 — Tre nya verktyg & bättre upptäckbarhet

### Nytt

- **Passfoto** — skapa pass- och ID-foto i exakta mm-mått (Passfoto Sverige, USA-visum, EU-körkort eller egen storlek). Beskär, zooma och skriv ut flera kopior på ett ark i 300 DPI. Allt sker lokalt — inget laddas upp.
- **Etikettark** — lägg ut flera kopior av en design på ett A4- eller Letter-ark för klistermärken och etiketter. Räknar ut hur många som får plats och exporterar utskriftsklar PNG i 300 DPI.
- **Batch-QR** — skapa många QR-koder på en gång från en lista eller CSV-fil och ladda ner alla som PNG. Allt sker lokalt.

### Förbättrat

- Startsidan har nu en tydlig undertext som förklarar poängen med Bytebox: gratis verktyg som körs direkt i webbläsaren — inget laddas upp, inget sparas.
- Nya verktyg lyfts fram i en egen "Nytt"-sektion högst upp och markeras med en "Nytt"-etikett, så de är lättare att hitta.
- Ny knapp "Visa alla verktyg" på startsidan så att man kan se hela listan utan att klicka in i varje kategori.

## 0.12.0 — 2026-07-04 — Metadata-tvätt

### Nytt

- **Metadata-tvätt** — visar dold metadata i bilder (särskilt GPS-position, men även datum och kameramodell) och tar bort allt med ett klick. Perfekt att köra på foton innan man delar dem. Allt sker lokalt — bilden laddas aldrig upp.

## 0.11.0 — 2026-07-03 — HEIC-konverterare

### Nytt

- **HEIC till JPG** — konverterar iPhone-bilder (HEIC/HEIF) till JPG eller PNG direkt i webbläsaren. Stödjer flera filer samtidigt, kvalitetsreglage och nedladdning av alla på en gång. Allt sker lokalt — inga bilder laddas upp.

### Teknik

- Verktygssidorna koddelas nu (lazy-load via React.lazy), så tunga bibliotek som HEIC-avkodaren laddas först när verktyget öppnas — huvudbundeln hålls liten.

## 0.10.0 — 2026-02-17 — Kategorier & 31 nya verktygsplatser

### Nytt

- 7 kategorier med sektionsrubriker på startsidan: Bild & Media, Text & Dokument, Ljud & Tal, Kod & Data, Nätverk & Säkerhet, Beräkning & Konvertering, Produktivitet & Verktyg
- 31 nya verktygsplatser (placeholders) som kommer byggas ut framöver
- Översättningar för alla nya verktyg i alla 6 språk

## 0.9.0 — 2026-02-16 — Sex nya verktyg

### Nytt

- Översättare med 19 språk
- Bandbreddstest med Cloudflare CDN
- Linjal med kalibrering
- PNG till SVG-konverterare
- Mediakonverterare (WAV, WebM, ljudextraktion)
- Brodyrkortsvisare (PES/DST)

## 0.2.0 — 2026-01-28 — Tema & Språk

### Nytt

- Ljust/mörkt tema med toggle-knapp i headern
- Stöd för 6 språk: svenska, engelska, franska, tyska, persiska och arabiska
- RTL-stöd för persiska och arabiska
- Tema och språk sparas i webbläsarens localStorage
- Journalsida med versionshistorik (`/journal`)

## 0.1.0 — 2026-01-27 — Första versionen

### Nytt

- 16 verktygsplatser med ikoner och beskrivningar
- Filtrering efter enhet (dator/mobil) och anslutning (online/offline)
- Responsiv layout med Tailwind CSS
- Routing med React Router
