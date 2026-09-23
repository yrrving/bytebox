# Changelog

Alla ändringar i Bytebox dokumenteras här.

## 0.30.0 — 2026-09-23 — 33 verktyg bort. ByteBox gör inga nätverksanrop alls.

Den största förändringen sedan starten. Verktygslådan hade vuxit till 54 verktyg
där en stor del varken hörde till digitalt skapande eller gick att förstå utan
förkunskaper. Efter en genomgång av vartenda verktyg är 33 borttagna och 21 kvar.

Hela listan med skäl finns i [BORTTAGNA-VERKTYG.md](BORTTAGNA-VERKTYG.md).

### Ändrat

- **33 verktyg borttagna.** 15 utvecklarverktyg, 6 nätverksverktyg, 4 som redan finns i telefonen, 2 smala, och 6 som föll utanför nischen. Kvar är 21 verktyg för bild och form, ljud och musik, text och dokument, samt spelbygge.
- **Kategorierna Kod & Data, Nätverk & Säkerhet och Beräkning & Konvertering är borta** eftersom de tömdes helt. Fem kategorier kvar.
- **ByteBox gör inga nätverksanrop.** Noll, från sex tidigare. Det som du arbetar med lämnar aldrig enheten, och det är inte längre ett löfte utan en egenskap som bevakas av ett test vid varje ändring. Säkerhetspolicyn tillåter numera ingen extern domän alls.
- **Text till tal är undantaget och säger det nu rakt ut.** Verktyget använder webbläsarens egen röstmotor. Windows och macOS läser upp lokalt, men Chrome och Edge erbjuder även moln-röster — väljer du en sådan skickar webbläsaren din text till Google eller Microsoft. Det är webbläsaren som gör det, inte ByteBox, och listan visar inte vilka röster som är lokala. Verktyget förklarar detta innan du använder det.
- **TrainCells hämtade typsnitt från Google.** Det innebar att Google fick din IP-adress varje gång verktyget öppnades. Typsnittet är borttaget; TrainCells använder nu samma systemtypsnitt som resten av ByteBox.

### Fixat

- Ett trettiotal översättningssektioner och en handfull beroenden som blivit oanvända är bortstädade.

## 0.29.2 — 2026-09-23 — Läsbarare text i alla tre teman

### Fixat

- **Sekundärtext var för ljus för att uppfylla tillgänglighetskraven.** Beskrivningar, etiketter och hjälptexter låg under den kontrast WCAG kräver — på 50 av 56 sidor. Grånyanserna är justerade genomgående, och ett trettiotal texter som helt saknade färg för mörkt läge har fått en. Antalet kontrastfel gick från 197 till 10 per tema.
- **Länkar i mörkt läge är ljusare** och når nu kravet.

## 0.29.1 — 2026-09-23 — Skärmläsare kan läsa upp verktygen

### Fixat

- **Reglage, rullgardiner och ikonknappar saknade namn för skärmläsare.** Den som använder ByteBox med skärmläsare fick höra "knapp" och "reglage" utan att få veta vad de gör. Åtgärdat i Färgpalett, HEIC till JPG, ASCII-konst, Text till tal och QR-kod — 24 kontroller har nu ett namn som läses upp. Arbetet fortsätter i övriga verktyg.

### Ändrat

- **Tydligare beskrivning av vad ByteBox är och varför det finns**, på startsidan och i appens information. Den gamla texten räknade upp vad som fanns; den nya säger vad det är till för.

## 0.29.0 — 2026-09-23 — Säkerhetsgenomgång: fyra trasiga verktyg lagade

En genomgång av hela verktygslådan med fokus på säkerhet och integritet. Fyra
verktyg visade sig vara trasiga på sätt som inte syntes utifrån — de sa aldrig
ifrån, de gav bara fel svar.

### Fixat

- **PDF-verktyget tappade sidor när filer slogs ihop.** "Slå ihop" klistrade ihop filernas rådata i stället för att bygga ett riktigt PDF-dokument. Resultatet blev en fil som såg giltig ut men där bara en del av sidorna fanns kvar — i ett test blev fem sidor till tre, utan felmeddelande. Sammanslagningen bygger nu dokumentet ordentligt, och går något fel sägs det rakt ut i stället för att en trasig fil laddas ner.
- **Markdown-förhandsgranskningen kunde köra kod från inklistrad text.** Markdown får innehålla HTML, och den släpptes igenom orörd. Text från en okänd källa kunde därför köra kod i Bytebox och läsa det som andra verktyg sparat i webbläsaren, till exempel dokument från Ordbehandlaren. All HTML rensas nu innan den visas. Vanlig formatering, länkar, bilder och kodblock fungerar som förut.
- **SSL-kontrollen godkände alla domäner.** Tjänsten verktyget hämtade certifikatuppgifter från (ssl-checker.io) har lagts ner. Verktyget föll då tillbaka på en kontroll som alltid visade "certifikatet är giltigt" med tomma fält, oavsett vad man skrev in. Uppgifterna hämtas nu från de offentliga Certificate Transparency-loggarna och visar utfärdare, giltighetstid, dagar kvar, om certifikatet är återkallat och hur många domännamn det täcker. Finns inget certifikat för namnet sägs det nu, i stället för ett falskt godkänt.
- **IP-info kunde inte hämta någon information.** Leverantören (ipapi.co) hade infört ett kvottak på gratisnivån och svarade med ett fel i stället för data. Verktyget använder nu ipwho.is.
- **Sju bildverktyg stod tysta när en fil inte gick att läsa.** ASCII-konst, Bakgrundsborttagare, Favicon-generator, Bildbeskärare, OCR, Pixelräknare och Passfoto gjorde ingenting alls vid en skadad eller okänd bildfil. Nu visas ett meddelande.
- **Tretton verktyg läckte minne.** Bilder och filer som lästes in släpptes aldrig, utan låg kvar så länge fliken var öppen. Märktes mest efter att ha kört många filer i rad.

### Nytt

- **Ett skyddsnät mot skadligt innehåll.** Sidan får nu bara ladda kod och kontakta tjänster från en fast lista. Skulle någon del av appen bli komprometterad kan den inte skicka vidare det du arbetar med till en okänd server.
- **Verktygen som kommunicerar utåt säger nu exakt vad som skickas.** I stället för en allmän varning står det konkret — "bara domännamnet du skriver in", "din IP-adress", "hela adressen du klistrar in". HTTP Headers har fått en skarpare varning: adressen passerar en öppen gratisproxy, så klistra aldrig in länkar med inloggningstokens eller nycklar i.

### Ändrat

- **QR-kod och Batch-QR är nu ett verktyg med två flikar.** De gjorde nästan samma sak men hade olika funktioner av en slump — enkelläget kunde välja färger men bara göra en kod i taget, batchläget kunde göra hundra men bara i svartvitt. Nu gäller storlek och färgval i båda lägena. Gamla länkar till Batch-QR leder vidare till rätt ställe.
- **Mötestranskriberingen är borttagen.** Den blev aldrig tillräckligt tillförlitlig, och med den försvinner också det tyngsta beroendet i appen.
- Appens underliggande komponenter är uppdaterade till senaste versionerna.

## 0.28.1 — 2026-09-15 — Tydligare Kod & Data-verktyg + mobilanpassning för PadGrid

### Ändrat

- **Kod & Data-verktygen har nu tydligare förklaringar direkt i verktyget** (JSON, Base64, Hash, Regex, Cron, JWT, UUID, Epoch, Bas-omvandlare, Kodminifierare, CSS Gradient) — konkreta exempel på vad t.ex. en hash eller ett UUID faktiskt är och när man skulle använda det.

### Fixat

- **PadGrid: pekpilarna i den guidade genomgången kunde peka fel på smala mobilskärmar.** Visar nu en tydlig "behöver mer plats"-vy under 700px bredd och föreslår att vrida telefonen till liggande läge.

## 0.28.0 — 2026-09-15 — Stor städning av verktygslistan + nytt musikverktyg PadGrid

### Nytt

- **🎛️ PadGrid** — ny prototyp under Ljud & Tal: ett rutnätsbaserat musikverktyg inspirerat av clip-launcher-appar, med en guidad genomgång.

### Ändrat

- **PDF-verktyg, PDF-signering och Fyll i PDF är nu ETT verktyg** (PDF-verktyg) med tre flikar: Slå ihop, Signera och Fyll i. Samma funktioner som förut, bara samlade på ett ställe.
- **Textverktyg är borttaget**, kategorin "Skola" är borttagen, och Ordbehandlare (som redan gjorde samma sak och mer) finns nu under Text & Dokument.
- **13 verktyg med lågt användningsvärde borttagna:** Etikettark, Bildkollage, Lorem Ipsum, Lösenordsgenerator, Tidszoner, Miniräknare, Slumptalsgenerator, Namnbrickor, Tangentbordstest, Pomodoro-timer, Nedräkningstimer, Stoppur och Slumpmässigt val — de flesta finns redan inbyggda i telefonen eller datorn.
- Startsidans "Nytt"-sektion visar nu de tre senaste verktygen istället för sex.

## 0.27.1 — 2026-09-14 — TrainCells: bort med gamla ClaudeBloxels-spår i sparfiler

### Fixat

- **Nedladdade projektfiler hade av misstag kvar filändelsen från verktygets gamla arbetsnamn** (.bloxels.json) — bytt till .traincells.json. Gamla sparade spel påverkas inte: import bryr sig aldrig om filändelsen, bara innehållet. Samma städning gjord i två interna localStorage-nycklar som aldrig syns för användaren.

## 0.27.0 — 2026-09-14 — TrainCells: tydligare Super handlett läge + dela sitt spel

### Nytt

- **"🚀 Dela mitt spel"-knapp på Spela-skärmen.** Öppnar en guide med två vägar: ladda ner spelet (som spelbar fil eller som projektfil för att fortsätta redigera senare) till sin egen enhet, eller gå vidare till learn.trainstation.se och lägga upp det i sin portfolio där.

### Ändrat

- **Super handlett läge är tydligare att följa.** Knappar och paneler som inte hör till det aktuella steget tonas ner (grey out), medan pilar och instruktionstext nu flyter ovanpå gränssnittet som stora, tydliga overlays istället för att klämmas in som egna rader — så det alltid syns exakt vad man ska trycka på härnäst. Löste även en bugg där en pekpil kunde täcka hela "+"-knappen för att skapa en ny bricka.

## 0.22.1 — 2026-08-24 — Mötestranskribering: städar upprepningar, tydligare scenarier

### Fixat

- **Upprepningsloopar i transkriptionen.** Whisper (särskilt "Snabb"-modellen) kunde på tysta eller svårhörbara partier fastna och upprepa samma ord, fras eller tecken hundratals gånger — mest märkbart vid mikrofoninspelning av digitala möten, där mikrofonen bara hör din egen röst och resten av inspelningen blir tyst. Lade till `no_repeat_ngram_size` i transkriberingsanropet och en efterstädning som upptäcker och tar bort kvarvarande upprepningar. En notis visas när städning skett.

### Ändrat

- **Tydligare vägledning i verktyget.** Rutan som förklarar mikrofonbegränsningen är omskriven till tre tydliga scenarier: alla i samma rum (bäst, spela in direkt), digitalt möte (spela in i mötestjänsten och ladda upp), redan inspelat (ladda upp direkt).
- **Samtyckespåminnelse.** En diskret påminnelse om att alltid berätta för alla inblandade — i rummet eller mötet — att det spelas in, visas nu direkt ovanför inspelnings-/uppladdningsknapparna.
- Förtydligade i integritetstexten att själva ljudinspelningen aldrig sparas på disk — den finns bara i minnet medan sidan är öppen.

## 0.22.0 — 2026-08-20 — Ny kategori "Skola" + Ordbehandlare

### Nytt

- **Ny kategori: Skola.** Första verktyget ute är **Ordbehandlare** — ett riktigt skrivverktyg med formatering (fet, kursiv, understruken, genomstruken, tre rubriknivåer, punkt-/numrerad lista, citat, länkar, ångra/gör om), autospara i webbläsaren, samt export till PDF (via utskrift) och en riktig Word-fil (.docx). Kräver dator — verktyget är inte anpassat för mobilskärm.

### Borttaget

- **Anteckningsblock är borttaget.** Testare tyckte det var för begränsat (ren textruta utan formatering) för att vara användbart. Ordbehandlaren i den nya Skola-kategorin ersätter det med ett verktyg som faktiskt går att skriva riktiga dokument i.

## 0.21.4 — 2026-08-10 — Markdown-förhandsgranskning: rättad styling + formateringsverktygsrad

### Fixat

- Rubriker, listor, citat och tabeller i Markdown-förhandsgranskningens förhandsvisning renderades som helt ostylad text — `@tailwindcss/typography`-pluginet som `prose`-klasserna förutsatte hade aldrig installerats. Installerat och registrerat i `index.css`.

### Nytt

- Formateringsverktygsrad i editorn med tio knappar: Fet, Kursiv, Genomstruken, Rubrik, Citat, Kod, Länk, Punktlista, Numrerad lista och Tabell. Omsluter/prefixar markerad text med rätt markdown-syntax. Kortkommandon ⌘B/⌘I/⌘K. Text i alla 6 språk.

## 0.21.3 — 2026-08-06 — Tydliggör att inspelningen bara hör mikrofonen

### Ändrat

- Mötestranskriberingen visar nu en infomruta om att inspelningsknappen använder mikrofonen och därför bara hör det som sägs i rummet — inte ljudet från deltagare i digitala möten (Zoom/Teams m.fl.). Föreslår att man använder mötestjänstens egen inspelning och laddar upp filen efteråt. Text i alla 6 språk.

## 0.21.2 — 2026-08-03 — Förklaring vid skärmspärr + tips om telefoninspelning

### Ändrat

- Spärrvyn som visas när ett verktyg kräver större skärm (t.ex. Mötestranskribering på mobil) kan nu visa en kort, verktygsspecifik förklaring till *varför* — inte bara att en större skärm krävs. Ny valfri `screenReason`-nyckel per verktyg i alla 6 språk.
- Mötestranskriberingens hjälptext tipsar nu om att spela in mötet med telefonens röstmemo-app och ladda upp filen på en dator, eftersom verktyget kräver dator för själva transkriberingen.

## 0.21.1 — 2026-07-06 — Mötestranskribering på alla språk

### Ändrat

- Alla knappar och texter i Mötestranskriberingen (kvalitet, språk, "Nytt möte", integritetsnotisen, felmeddelanden m.m.) är nu fullt översatta i alla 6 språk i stället för att falla tillbaka på svenska.

## 0.21.0 — 2026-07-06 — Mötestranskribering (helt lokal)

### Nytt

- **Mötestranskribering** — spela in ett möte eller ladda upp en ljudfil och få det nedskrivet som text. Allt sker på din enhet med en Whisper-språkmodell som laddas ner en gång och sedan sparas i webbläsaren — ljudet lämnar aldrig datorn. Välj kvalitet (snabb/bättre) och språk, och exportera som .txt eller .srt (undertexter med tidkoder).

### Ändrat

- **Tal-till-text är borttaget** och ersätts av Mötestranskribering. Det gamla verktyget använde webbläsarens inbyggda taligenkänning, som i praktiken (särskilt i Chrome) skickade mikrofonljudet till en molntjänst hos Google för att tolkas — omöjligt att lova var ljudet tog vägen, och olämpligt för känsliga möten. Den nya lösningen kör hela taligenkänningen lokalt, så inget ljud skickas någonstans.

### Teknik

- Taligenkänningen körs med Whisper via transformers.js (ONNX Runtime Web). Både worker-koden och WASM-runtimen serveras lokalt under `/bytebox/`; endast modellvikterna hämtas från Hugging Faces CDN första gången och cachas sedan. Transkriberingen sker i en Web Worker så gränssnittet inte fryser, och transformers.js laddas som en egen chunk (huvudbundeln påverkas inte). Verktyget är klassat som "dator" eftersom långa körningar och bakgrundsflikar stryps på mobil.

## 0.20.3 — 2026-07-06 — Fler begripliga beskrivningar

### Ändrat

- Fortsatte klarspråksgenomgången av verktygsbeskrivningarna: JSON, CSV, DNS, SSL, HTTP-headers, favicon, OCR, Markdown, ASCII, bas-omvandlare, CSS-gradient, kodminifierare m.fl. Varje beskrivning säger nu vad man använder verktyget till i klartext — facktermen står kvar inom parentes för den som känner igen den.

## 0.20.2 — 2026-07-05 — Tydligare beskrivningar & integritet

### Ändrat

- Påbörjade en genomgång av alla verktygsbeskrivningar så de blir begripliga även för den som inte kan facktermerna. Först ut: kod-verktygen (UUID, JWT, cron, epoch, Base64, hash, regex) — beskrivningen säger nu *vad man använder verktyget till* i klartext, inte bara termen.
- **Text-till-tal** har nu en tydlig integritetsnotis: uppläsningen görs av webbläsarens röstmotor, och i vissa webbläsare kan din text skickas till en molntjänst för vissa röster. Bytebox sparar ingenting själv.

## 0.20.1 — 2026-07-04 — "Kategorier"-rubrik

### Ändrat

- Kategorierna på startsidan har nu en egen rubrik "Kategorier" (med ikon), i samma stil som "Nytt", så gränsen mellan sektionerna blir tydlig.

## 0.20.0 — 2026-07-04 — Tydligare startsida

### Ändrat

- "Nytt"-sektionen på startsidan visar nu bara de **sex senaste** verktygen (nyast först) i stället för alla nya. Styrs från en enda lista (`latestToolIds`).
- Startsidan har nu **en** informationstext om vad Bytebox är, placerad ovanför sökrutan (den andra förklaringen under sökrutan är borttagen).
- Bredvid Bytebox-logotypen uppe till vänster visas nu **hur många verktyg** som finns just nu ({antal} verktyg). Siffran uppdateras automatiskt när nya verktyg läggs till.

## 0.19.1 — 2026-07-04 — Städning & optimering

### Underhåll

- Journalsidan (med hela versionshistoriken) laddas nu först när den öppnas, så startsidan blir lättare att ladda. Inga synliga ändringar.
- Tog bort död kod: oanvända översättningsfält (gamla enhets-/flik-etiketter) som blev över efter enhetsomklassningen.
- Verifierade att alla 70 verktyg har korrekta rutter och översättningar på alla 6 språk, samt att typkontroll, lint och säkerhetsgranskning är helt rena.

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
