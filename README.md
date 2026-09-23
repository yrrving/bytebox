# ByteBox

Gratis verktyg för digitalt skapande, som körs direkt i webbläsaren.

**[Öppna ByteBox →](https://yrrving.github.io/bytebox/)**

## Varför

Mycket av det man behöver för att skapa något digitalt går att bygga själv, med
tillräcklig kunskap. Men den som inte har den kunskapen får betala någon annan —
en prenumeration för att slå ihop två PDF-filer, en uppladdning till en okänd
server för att ta bort en bakgrund, ett konto för att göra om en bild.

ByteBox finns för att den kunskapen ska vara omsatt i något användbart, och
gratis. Verktygen här löser vanliga problem i eget skapande — bilder, ljud,
video, text, spel — utan att kosta något, kräva inloggning eller begära något i
utbyte.

## Hur det fungerar

**Allt körs på din enhet.** Bilden du beskär, ljudet du klipper och dokumentet du
skriver lämnar aldrig datorn. Det är inte ett löfte om hur vi hanterar dina filer
— de skickas helt enkelt aldrig någonstans.

**Ingen spårning.** Inga analysverktyg, inga kakor för besöksmätning, ingen
statistik om vad du gör här.

**Inget konto.** Öppna sidan och använd verktyget.

**Sex språk.** Svenska, engelska, spanska, franska, tyska och portugisiska.

**Går att installera.** ByteBox kan läggas till på hemskärmen och fungerar sedan
utan uppkoppling.

Några få verktyg behöver internet för att fungera alls. De säger det tydligt
innan du använder dem, och berättar exakt vad som skickas och vart.

## Vad som finns

Verktyg för bild och form, ljud och musik, text och dokument, samt spelbygge.
Hela listan finns på [startsidan](https://yrrving.github.io/bytebox/), och
[journalen](https://yrrving.github.io/bytebox/journal) visar vad som ändrats och
varför.

## Utveckling

```bash
npm install
npm run dev      # utvecklingsserver
npm run build    # produktionsbygge
npm run lint     # kodgranskning
npm test         # enhetstester
npm run e2e      # webbläsartester + tillgänglighetsgranskning
```

Byggt med React, TypeScript, Vite och Tailwind CSS.

### Krav på nya verktyg

Ett verktyg som läggs till ska gå att förstå utan förkunskaper, fungera med
skärmläsare och tangentbord, och helst inte behöva någon extern tjänst. Behöver
det en, ska det stå klart för användaren vad som skickas.

Tillgänglighet granskas automatiskt mot WCAG 2.2 AA i `npm run e2e`.
