# Bytebox som native app — planskiss

> Status: **plan, inte påbörjad.** Webbgränssnittet är och förblir kärnan — native är ett
> tillägg, aldrig en ersättning. Inget här ska byggas förrän vi medvetet drar igång.

## 1. Mål och principer

- **Webben är sanningskällan.** Samma React/TS-kodbas driver både webb och app. Vi
  underhåller *ett* verktygsbibliotek, inte två.
- **Native ska bara tillföra det webben inte klarar** — annars är det bortkastat jobb:
  - Bakgrundsljud (fortsätta spela in/transkribera när skärmen är släckt).
  - Snabbare lokal AI (native Whisper är många gånger snabbare än WASM i webbläsaren).
  - Riktig app-närvaro: ikon på hemskärmen, App Store/Google Play, offline från start.
  - Systemintegration: dela-meny, filhantering, notiser.
- **Gratis och integritetssäkert** precis som webben. Ingen prenumeration. Om något
  ska kosta blir det en engångsupplåsning på lägsta prisnivå — inte ett abonnemang.
- **iOS först, Android sen.** (Apple 99 USD/år, Google 25 USD engång.)

## 2. Arkitektur: delad kärna + native skal

```
        ┌─────────────────────────────────────────────┐
        │   Delad kärna (dagens repo, oförändrad)      │
        │   React + TS + Vite + Tailwind, 70+ verktyg  │
        └───────────────┬─────────────────┬────────────┘
                        │                 │
              vite build (webb)   Capacitor-skal (native)
                        │                 │
              Vercel / PWA      ┌─────────┴──────────┐
                                │  iOS-app   Android-app │
                                │  (WKWebView + native   │
                                │   plugins för tunga    │
                                │   funktioner)          │
                                └────────────────────────┘
```

- **Capacitor** (inte Electron/RN): wrappar den befintliga webb-bundeln i en native
  WebView med minimal friktion. 90 % av verktygen kör oförändrade i WebView:en.
- **Native plugins** skrivs bara för de få funktioner som kräver det (se §4). Resten
  av appen är exakt samma kod som webben.
- **Feature-flagga per plattform.** En liten `platform`-abstraktion (`isNative()`,
  `capabilities`) låter samma verktygssida välja native-väg när den finns, annars
  webb-väg. Ingen verktygssida behöver veta *hur* — bara *vad som är tillgängligt*.

## 3. Vad kör var

| Kategori | Native-läge | Motivering |
|---|---|---|
| De flesta verktyg (bild, text, kod, beräkning …) | WebView som i dag | Fungerar redan lokalt, ingen vinst i att skriva om |
| Mötestranskribering | **Native path** | Bakgrundsljud + native Whisper = kärnargumentet för appen |
| Ljud/media (trimmer, metronom …) | WebView, ev. native ljudsession | WebAudio räcker oftast; native bara om bakgrund behövs |
| Filbaserade (PDF, HEIC, QR-batch) | WebView + native dela/spara | Native fil- och dela-dialoger känns bättre |

## 4. Den svåra biten: mötestranskribering native

Webbversionen (v0.21.0) kör Whisper via transformers.js/WASM. Det duger i en flik men:
- WebView **stryps eller pausas i bakgrunden** (iOS WKWebView suspenderar) → inspelning
  dör när användaren byter app eller släcker skärmen.
- WASM-inferens är **långsam** jämfört med native.

Native path (byggs som en Capacitor-plugin per plattform):

- **iOS**
  - Bakgrundsljud: `AVAudioSession` med `.record`-kategori + background audio-mode.
  - Transkribering: antingen **whisper.cpp med Core ML/Metal**, eller — på iOS 26+ —
    Apples inbyggda **SpeechAnalyzer** (helt lokal, gratis, snabb). Utvärdera båda.
  - Plugin exponerar `startCapture()`, `stopCapture()`, `onPartial`, `onFinal` till JS.
- **Android**
  - Bakgrundsljud: `MediaRecorder`/`AudioRecord` i en foreground service.
  - Transkribering: **whisper.cpp via JNI** (eller ONNX Runtime Mobile).
- **Delad JS-yta:** samma React-komponent som i dag, men när `capabilities.nativeAsr`
  är sant anropar den plugin:et i stället för web-workern. Export (.txt/.srt),
  UI och integritetsnotis återanvänds oförändrat.

Detta är den enda delen som kräver riktigt native-arbete. Allt annat är skal.

## 5. Repo-struktur (förslag)

Behåll ett repo, lägg till native-mappar (Capacitor genererar dessa):

```
bytebox/
  src/            # befintlig delad kärna (oförändrad)
  public/
  ios/            # Capacitor Xcode-projekt (genereras)
  android/        # Capacitor Android-projekt (genereras)
  native-plugins/
    transcriber/  # egen plugin: iOS (Swift) + Android (Kotlin) + TS-brygga
  capacitor.config.ts
```

- `vite build` → `dist/` → `npx cap sync` kopierar in webb-bundeln i native-projekten.
- Native-projekten checkas in men rör inte `src/`.

## 6. Bygg- och släppflöde

1. `npm run build` (samma som i dag).
2. `npx cap sync ios android` — synkar webb-bundeln + plugins.
3. iOS: öppna i Xcode → arkivera → TestFlight → App Store.
4. Android: Android Studio → signerad AAB → intern testning → Google Play.
5. Versionsnummer följer `package.json` (samma källa som webben/changelogen).
6. Webben fortsätter deploya som i dag, helt oberoende av native-släpp.

## 7. Konton och kostnad

| Post | Kostnad | När |
|---|---|---|
| Apple Developer Program | 99 USD/år | Innan TestFlight/App Store |
| Google Play Developer | 25 USD engång | Innan Play-publicering |
| Modellvikter (Whisper/HF) | 0 | CDN, cachas lokalt |
| Serverkostnad drift | 0 | All inferens sker på enheten |

Marginalkostnad per användare ≈ 0 — enheten gör jobbet. Det som kostar är utvecklarkonton.

## 8. Faser (grovt)

1. **Fas 0 — beslut:** iOS-first bekräftat, Apple-konto skaffat, whisper.cpp vs
   SpeechAnalyzer utvärderat på en riktig enhet.
2. **Fas 1 — skal:** Capacitor runt befintlig webb, alla WebView-verktyg fungerar,
   TestFlight-bygge internt.
3. **Fas 2 — transcriber-plugin (iOS):** bakgrundsinspelning + native Whisper,
   samma UI som webben.
4. **Fas 3 — polish + App Store:** ikoner, behörighetstexter (mikrofon), integritets-
   policy-sida, granskningsunderlag.
5. **Fas 4 — Android:** samma skal + Kotlin-plugin, Google Play.

## 9. Öppna frågor att ta ställning till

- iOS 26 SpeechAnalyzer (enklast, men kräver ny iOS) **eller** whisper.cpp (funkar
  brett, mer jobb)? — testa båda i Fas 0.
- Ska fler verktyg få native-vägar (t.ex. dela/spara), eller håller vi native minimalt
  och låter WebView göra resten?
- App-namn/ikon: samma Bytebox-varumärke, eller separat app-identitet?
- Behörighetstext + integritetspolicy krävs av båda butikerna — återanvänd webbens
  integritetsspråk.

---

*Sammanfattning: ett repo, delad React-kärna, Capacitor-skal, och exakt en riktigt
native funktion att bygga (bakgrundsljud + lokal Whisper för transkriberingen).
Webben tas aldrig bort.*
