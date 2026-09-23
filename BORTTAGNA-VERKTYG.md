# Borttagna verktyg

En logg över verktyg som funnits i ByteBox men tagits bort, med skälet. Syftet
är dels att minnas vad som prövats, dels att slippa bygga om samma sak igen
utan att veta varför det togs bort förra gången.

Koden finns kvar i git-historiken. Ett verktyg kan hämtas tillbaka om behovet
visar sig — men då med skälet nedan som motargument att bemöta.

---

## 0.30.0 — 2026-09-23 — 33 verktyg

Efter en genomgång av hela verktygslådan mot tre frågor: hör verktyget hemma i
digitalt skapande, förstår en elvaåring vad det är till för, och löser det ett
verkligt behov? Verktyg som svarade nej på alla tre togs bort.

### Utvecklarverktyg (15)

JSON-formaterare · Base64-kodare · Hash-generator · Regex-testare ·
Kodminifierare · Cron-tolkare · JWT-dekodare · UUID-generator ·
Epoch-omvandlare · Bas-omvandlare · Diff-jämförare · CSV ↔ JSON ·
SVG-optimerare · Markdown-förhandsgranskning · Filanalys

**Skäl:** kräver att man redan är programmerare för att förstå frågan de
besvarar. En elvaåring kan inte veta varför man skulle vilja avkoda en JWT.

### Nätverksverktyg (6)

IP-info · Bandbreddstest · DNS-uppslagning · SSL-kontroll · HTTP Headers ·
User Agent-info

**Skäl:** samma sak, men alla utom en skickade dessutom data till en extern
tjänst. Det var här ByteBox enda beroenden av andra satt, och det var här
septembers fel uppstod — en nedlagd tjänst som godkände alla domäner, en
leverantör som införde kvotstopp, och en öppen gratisproxy som såg varje
adress användaren klistrade in.

### Finns redan i telefonen eller datorn (4)

Enhetsomvandlare · Procenträknare · Vitt brus · Linjal

**Skäl:** samma resonemang som städningen i 0.28.0. De här fyra blev kvar då.

### Smala eller svårförklarade (2)

Pixelräknare · Översättare

**Skäl:** pixelräknaren löser ett problem få har. Översättaren skickade texten
till en gratistjänst utan personuppgiftsbiträdesavtal, och den som behöver
översätta har bättre alternativ.

### Föll utanför nischen (6)

Passfoto · Metronom · Tonhöjdsmätare · CSS Gradient · Streckkodsgenerator ·
Favicon-generator

**Skäl:** dessa diskuterades särskilt. Passfoto var det starkaste argumentet
för att stanna — fotoaffärer tar hundralappar för det — men hör hemma i
uppdraget "slipp betala" snarare än i digitalt skapande. Metronom och
tonhöjdsmätare är musik men finns inbyggda i de flesta telefoner. CSS Gradient
och Favicon-generator förutsätter att man bygger webbsidor. Streckkoden gör
ungefär samma nytta som QR-koden, som är begripligare.

---

## 0.29.0 — 2026-09-23 — 2 verktyg

**Mötestranskribering** — blev aldrig tillräckligt tillförlitlig. Körde Whisper
lokalt via `@huggingface/transformers`, vilket också var appens tyngsta
beroende. Med den försvann de enda säkerhetsvarningarna i `npm audit`.

**Batch-QR** — togs inte bort utan slogs ihop med QR-kod till ett verktyg med
två flikar. De gjorde nästan samma sak men hade olika funktioner av en slump.
Gamla länkar leder vidare.

---

## 0.28.0 — 2026-09-15 — 14 verktyg

Etikettark · Bildkollage · Lorem Ipsum · Lösenordsgenerator · Tidszoner ·
Miniräknare · Slumptalsgenerator · Namnbrickor · Tangentbordstest ·
Pomodoro-timer · Nedräkningstimer · Stoppur · Slumpmässigt val · Textverktyg

**Skäl:** lågt användningsvärde — de flesta finns redan inbyggda i telefonen
eller datorn. Textverktyget gjorde dessutom samma sak som Ordbehandlaren, fast
mindre.

Samtidigt slogs PDF-verktyg, PDF-signering och Fyll i PDF ihop till ett verktyg
med tre flikar, och kategorin "Skola" togs bort.

---

## 0.21.0 — 2026-07-06 — 1 verktyg

**Tal till text** — skickade mikrofonljud till Googles molntjänst via
webbläsarens SpeechRecognition. GDPR-osäkert. Ersattes då av
Mötestranskribering, som körde lokalt (och som i sin tur togs bort i 0.29.0).
