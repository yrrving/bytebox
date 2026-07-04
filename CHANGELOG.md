# Changelog

Alla ändringar i Bytebox dokumenteras här.

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
