export interface ToolTranslation {
  name: string
  description: string
  hint?: string
  /** Shown on the blocked-screen view: why this tool needs a bigger device. */
  screenReason?: string
}

export interface Translation {
  toolsHeading: string
  tagline?: string
  newBadge?: string
  categoriesHeading?: string
  showAll?: string
  common?: {
    imageLoadError: string
  }
  tabletRequired?: {
    title: string
    body: string
    computerTitle: string
    computerBody: string
    recommend: string
    back: string
  }
  menu?: string
  devicePrompt?: string
  minScreenLabel?: {
    mobil: string
    surfplatta: string
    dator: string
  }
  searchPlaceholder: string
  emptyState: string
  comingSoon: string
  notFound: string
  backToTools: string
  tabs: {
    alla: string
    online: string
    offline: string
  }
  connection: {
    online: string
    offline: string
  }
  theme: {
    light: string
    dark: string
    highContrast: string
  }
  journal: {
    heading: string
    description: string
    mission: string
    direction: string
    added: string
    changed: string
    fixed: string
  }
  allCategories?: string
  installApp?: string
  close?: string
  iosStep1?: string
  iosStep2?: string
  iosStep3?: string
  categories?: {
    bild: string
    form: string
    text: string
    ljud: string
    spel: string
  }
  qrCode?: {
    tabSingle: string
    tabBatch: string
    privacyNote: string
    input: string
    placeholder: string
    size: string
    foreground: string
    background: string
    output: string
    download: string
  }
  colorPalette?: {
    addColor: string
    pickColor: string
    copyColor: string
    removeColor: string
    randomize: string
    copyAll: string
    copied: string
  }
  imageCompressor?: {
    upload: string
    quality: string
    smaller: string
    better: string
    maxWidth: string
    original: string
    compressed: string
    compress: string
    processing: string
    download: string
  }
  textToSpeech?: {
    localOnly: string
    noVoices: string
    input: string
    placeholder: string
    voice: string
    speed: string
    pitch: string
    play: string
    pause: string
    resume: string
    stop: string
  }
  wordProcessor?: {
    storageWarning: string
    bold: string
    italic: string
    underline: string
    strikethrough: string
    heading1: string
    heading2: string
    heading3: string
    bulletList: string
    numberedList: string
    quote: string
    link: string
    undo: string
    redo: string
    words: string
    characters: string
    clear: string
    autoSaved: string
    print: string
    downloadWord: string
    placeholder: string
  }
  fillPdf?: {
    upload: string
    loading: string
    changeFile: string
    privacyNote: string
    hintClick: string
    pageLabel: string
    zoomIn: string
    zoomOut: string
    textPlaceholder: string
    drag: string
    smaller: string
    bigger: string
    boldToggle: string
    deleteText: string
    save: string
    saving: string
    savedDone: string
    errorType: string
    errorLoad: string
    errorSave: string
  }
  asciiArt?: {
    upload: string
    widthLabel: string
    standard: string
    detailed: string
    blocks: string
    copy: string
    copied: string
  }
  heicConverter?: {
    upload: string
    format: string
    quality: string
    converting: string
    downloadAll: string
    privacy: string
    noHeic: string
    failed: string
  }
  metadataCleaner?: {
    upload: string
    privacy: string
    reading: string
    found: string
    location: string
    date: string
    camera: string
    tags: string
    none: string
    clean: string
    cleaned: string
    download: string
  }
  underTheHood?: {
    heading: string
    lead: string
    factTools: string
    factLanguages: string
    factRequests: string
    builtHeading: string
    builtBody: string
    whatHeading: string
    whatBody: string
    localHeading: string
    localBody: string
    offlineHeading: string
    offlineBody: string
    a11yHeading: string
    a11yBody: string
    checksHeading: string
    checksBody: string
    check1: string
    check2: string
    check3: string
    check4: string
    check5: string
    check6: string
    codeHeading: string
    codeBody: string
    codeLink: string
  }
  embroideryViewer?: {
    formats: string
  }
  imageCropper?: {
    formats: {
      free: string
      square: string
      post: string
      story: string
      wide: string
      photo: string
      screen: string
    }
    upload: string
    free: string
    crop: string
    newImage: string
    download: string
  }
  cutFileGenerator?: {
    upload: string
    rect: string
    circle: string
    freehand: string
    undo: string
    clearAll: string
    strokeWidth: string
    exportSvg: string
    includeBackground: string
    move: string
  }
  pdfTools?: {
    tabMerge: string
    tabSign: string
    tabFill: string
    privacyNote: string
    upload: string
    files: string
    merge: string
    mergeError: string
    merging: string
    download: string
  }
  ocrTool?: {
    upload: string
    extract: string
    processing: string
    result: string
    noText: string
    copy: string
    copied: string
  }
  backgroundRemover?: {
    upload: string
    tolerance: string
    remove: string
    processing: string
    download: string
  }
  tools: Record<string, ToolTranslation>
}

export const translations: Record<string, Translation> = {
  sv: {
    toolsHeading: 'Verktyg',
    tagline: 'ByteBox är gratis verktyg för digitalt skapande med bild, ljud, video, text och spel. Allt körs på din egen enhet. Det du arbetar med lämnar aldrig datorn, och ByteBox skickar ingenting någonstans. Inget konto, ingen spårning.',
    newBadge: 'Nytt',
    categoriesHeading: 'Kategorier',
    showAll: 'Visa alla verktyg',
    common: {
      imageLoadError: 'Kunde inte läsa bildfilen. Den kan vara skadad eller i ett format webbläsaren inte stöder.',
    },
    tabletRequired: {
      title: 'Kräver större skärm',
      body: 'Det här verktyget behöver minst en surfplatta i skärmstorlek för att fungera bra. Öppna det på en surfplatta eller dator.',
      computerTitle: 'Fungerar bäst på dator',
      computerBody: 'Det här verktyget är gjort för en dator. Öppna det på en dator för att kunna använda det.',
      recommend: 'Det här verktyget fungerar bäst på en dator. På mindre skärm kan det bli trångt.',
      back: 'Tillbaka till verktygen',
    },
    menu: 'Meny',
    devicePrompt: 'Vad kan du göra på din enhet?',
    minScreenLabel: {
      mobil: 'Mobil',
      surfplatta: 'Surfplatta',
      dator: 'Dator',
    },
    searchPlaceholder: 'Sök verktyg...',
    emptyState: 'Inga verktyg matchar filtret.',
    comingSoon: 'Kommer snart',
    notFound: 'Verktyget hittades inte.',
    backToTools: 'Tillbaka till alla verktyg',
    tabs: {
      alla: 'Alla',
      online: 'Online',
      offline: 'Offline',
    },
    connection: {
      online: 'Kräver internet',
      offline: 'Funkar offline',
    },
    theme: {
      light: 'Ljust',
      dark: 'Mörkt',
      highContrast: 'Hög kontrast',
    },
    journal: {
      heading: 'Journal',
      description: 'Vad vi byggt och uppdaterat i varje version.',
      mission: 'De flesta verktyg här löser problem som går att lösa själv, om man vet hur. Vi har byggt dem en gång och lagt dem öppet, så att den som behöver dem slipper leta, betala eller lämna ifrån sig sina filer. Allt körs på din egen enhet.',
      direction: 'Just nu smalnar vi av. ByteBox har vuxit till ett stort antal verktyg, och flera av dem löser problem som redan är lösta på tusen andra ställen. Vi går därför igenom verktyg för verktyg och behåller det som hör hemma i digitalt skapande, och som går att förstå utan förkunskaper. Målet är färre verktyg, tydligare förklarade, och användbara för alla: med skärmläsare, med enbart tangentbord, på flera språk. Säkerhet och integritet är inget vi lägger till efteråt, utan ett krav vi ställer på varje verktyg innan det får finnas här.',
      added: 'Nytt',
      changed: 'Ändrat',
      fixed: 'Fixat',
    },
    allCategories: 'Alla kategorier',
    installApp: 'Installera app',
    close: 'Stäng',
    iosStep1: 'Tryck på Dela-knappen längst ner i Safari.',
    iosStep2: 'Bläddra ner och välj "Lägg till på hemskärmen".',
    iosStep3: 'ByteBox hamnar då bland dina appar och öppnas i helskärm.',
    categories: {
      bild: 'Bild & foto',
      form: 'Form & tillverkning',
      text: 'Text & dokument',
      ljud: 'Ljud & musik',
      spel: 'Spel',
    },
    qrCode: {
      tabSingle: 'En kod',
      tabBatch: 'Flera koder',
      privacyNote: 'Allt sker lokalt i din webbläsare. Ingen text laddas upp någonstans.',
      input: 'Text eller URL',
      placeholder: 'Skriv text eller klistra in en URL...',
      size: 'Storlek',
      foreground: 'Förgrund',
      background: 'Bakgrund',
      output: 'QR-kod',
      download: 'Ladda ner PNG',
    },
    colorPalette: {
      addColor: 'Lägg till färg',
      pickColor: 'Välj färg',
      copyColor: 'Kopiera färgkoden',
      removeColor: 'Ta bort färgen',
      randomize: 'Slumpa',
      copyAll: 'Kopiera alla',
      copied: 'Kopierat!',
    },
    imageCompressor: {
      upload: 'Klicka eller dra hit en bild',
      quality: 'Kvalitet',
      smaller: 'Mindre fil',
      better: 'Bättre kvalitet',
      maxWidth: 'Max bredd',
      original: 'Original',
      compressed: 'Komprimerad',
      compress: 'Komprimera',
      processing: 'Komprimerar...',
      download: 'Ladda ner',
    },
    textToSpeech: {
      localOnly: 'Bara röster som finns i din dator visas här. Texten läses upp på enheten och skickas aldrig någonstans.',
      noVoices: 'Din enhet verkar sakna inbyggda röster. I Windows och macOS läggs de till under systeminställningarna, under språk eller tillgänglighet.',
      input: 'Text',
      placeholder: 'Skriv text som ska läsas upp...',
      voice: 'Röst',
      speed: 'Hastighet',
      pitch: 'Tonhöjd',
      play: 'Spela upp',
      pause: 'Paus',
      resume: 'Fortsätt',
      stop: 'Stoppa',
    },
    wordProcessor: {
      storageWarning: 'Texten sparas medan du skriver, men bara i den här webbläsaren på den här enheten. Den följer inte med till en annan dator och försvinner om du rensar webbläsarens data. På iPhone och iPad tar Safari dessutom bort den efter ungefär en vecka utan besök. Spara ner dokumentet som PDF eller Word när du är klar.',
      bold: 'Fet',
      italic: 'Kursiv',
      underline: 'Understruken',
      strikethrough: 'Genomstruken',
      heading1: 'Rubrik 1',
      heading2: 'Rubrik 2',
      heading3: 'Rubrik 3',
      bulletList: 'Punktlista',
      numberedList: 'Numrerad lista',
      quote: 'Citat',
      link: 'Länk',
      undo: 'Ångra',
      redo: 'Gör om',
      words: 'Ord',
      characters: 'Tecken',
      clear: 'Rensa',
      autoSaved: 'Sparas automatiskt i webbläsaren',
      print: 'Skriv ut / Spara som PDF',
      downloadWord: 'Ladda ner Word (.docx)',
      placeholder: 'Börja skriva ditt dokument här...',
    },
    fillPdf: {
      upload: 'Klicka eller dra hit en PDF',
      loading: 'Öppnar PDF…',
      changeFile: 'byt fil',
      privacyNote: 'Din PDF behandlas helt lokalt i webbläsaren och laddas aldrig upp någonstans. Originalfilen skrivs aldrig över. Du laddar ner en ny, ifylld fil.',
      hintClick: 'Klicka var som helst på sidan för att lägga till text.',
      pageLabel: 'Sida {n} av {m}',
      zoomIn: 'Zooma in',
      zoomOut: 'Zooma ut',
      textPlaceholder: 'Skriv…',
      drag: 'Flytta',
      smaller: 'Mindre text',
      bigger: 'Större text',
      boldToggle: 'Fet stil',
      deleteText: 'Ta bort',
      save: 'Spara PDF',
      saving: 'Sparar…',
      savedDone: 'Klart! Den ifyllda PDF:en har laddats ner.',
      errorType: 'Välj en PDF-fil.',
      errorLoad: 'Kunde inte läsa PDF:en. Den kan vara skadad eller lösenordsskyddad.',
      errorSave: 'Något gick fel när PDF:en sparades. Prova igen.',
    },
    asciiArt: {
      upload: 'Klicka eller dra hit en bild',
      widthLabel: 'Bredd',
      standard: 'Standard',
      detailed: 'Detaljerad',
      blocks: 'Block',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    heicConverter: {
      upload: 'Klicka eller dra hit HEIC-bilder (från iPhone)',
      format: 'Format',
      quality: 'Kvalitet',
      converting: 'Konverterar…',
      downloadAll: 'Ladda ner alla',
      privacy: 'Allt sker lokalt i din webbläsare. Bilderna laddas aldrig upp någonstans.',
      noHeic: 'Inga HEIC/HEIF-filer hittades. Välj bilder från en iPhone.',
      failed: 'Något gick fel vid konverteringen. Filen kanske inte är en giltig HEIC-bild.',
    },
    metadataCleaner: {
      upload: 'Klicka eller dra hit en bild (t.ex. ett foto)',
      privacy: 'Allt sker lokalt i din webbläsare. Bilden laddas aldrig upp någonstans.',
      reading: 'Läser metadata…',
      found: 'Den här bilden innehåller dold metadata:',
      location: 'Exakt plats (GPS)',
      date: 'Datum',
      camera: 'Kamera',
      tags: 'metadatafält totalt',
      none: 'Ingen metadata hittades i den här bilden. Den är redan ren.',
      clean: 'Rensa metadata',
      cleaned: 'Metadata borttagen. Ladda ner den rena bilden.',
      download: 'Ladda ner ren bild',
    },
    underTheHood: {
      heading: 'Under huven',
      lead: 'ByteBox är en webbsida utan server. Allt du ser och gör händer i din egen webbläsare. Här står hur det är byggt, för den som vill veta.',
      factTools: 'Verktyg',
      factLanguages: 'Språk',
      factRequests: 'Nätverksanrop',
      builtHeading: 'Byggt med',
      builtBody: 'Koden är skriven i TypeScript rakt igenom, vilket gör att en stor del av felen fångas innan något publiceras. Sidan byggs till statiska filer och ligger på GitHub Pages.',
      whatHeading: 'Vad det faktiskt är',
      whatBody: 'Det finns ingen baksida. Ingen databas, inga konton, ingen inloggning och ingen server som tar emot något. ByteBox är en samling filer som laddas ner till din webbläsare en gång och sedan körs där. Stänger du av nätet efter att sidan laddat märks ingen skillnad.',
      localHeading: 'Varför ingenting skickas',
      localBody: 'Det är inte en policy utan en egenskap hos bygget. Det finns inte ett enda nätverksanrop i koden. Sidans säkerhetspolicy tillåter ingen extern domän alls, och ett test underkänner varje sida som kontaktar en server. Skulle någon lägga till ett sådant beroende stoppas det innan det når dig.',
      offlineHeading: 'Fungerar utan nät',
      offlineBody: 'En service worker sparar appen i webbläsaren efter första besöket. Därefter startar ByteBox även utan uppkoppling, och kan läggas till på hemskärmen på telefon och surfplatta eller installeras som program på datorn.',
      a11yHeading: 'Tillgänglighet mäts',
      a11yBody: 'Varje sida granskas automatiskt mot WCAG 2.2 AA i alla tre teman, vid varje ändring: kontraster, namn på knappar och fält, rubrikstruktur och tangentbordsnavigering. De få undantag som finns är motiverade i testkoden, så att man kan läsa skälet och invända mot det.',
      checksHeading: 'Vad som kontrolleras före publicering',
      checksBody: 'Ingen ändring når sidan utan att först ha passerat allt det här. Går något av det fel publiceras ingenting.',
      check1: 'Typkontroll av all kod',
      check2: 'Kodgranskning mot gemensamma regler',
      check3: 'Enhetstester av filparsrar och logik',
      check4: 'Webbläsartester som öppnar varje verktyg och läser av konsolen',
      check5: 'Kontroll att ingen sida kontaktar en extern server',
      check6: 'Kontroll att alla sex språk har samma texter',
      codeHeading: 'Koden är öppen',
      codeBody: 'Allt ligger på GitHub under MIT-licens. Använd, ändra och bygg vidare fritt. Det enda som krävs är att upphovsrättsraden följer med.',
      codeLink: 'Läs koden på GitHub',
    },
    embroideryViewer: {
      formats: 'PES (Brother, Babylock, Bernina) · DST (Tajima och de flesta industrimaskiner) · JEF (Janome, Elna)',
    },
    imageCropper: {
      formats: {
        free: 'Fri',
        square: 'Kvadrat',
        post: 'Inlägg',
        story: 'Story',
        wide: 'Bredbild',
        photo: 'Fotokort',
        screen: 'Skärm',
      },
      upload: 'Klicka eller dra hit en bild',
      free: 'Fri',
      crop: 'Beskär',
      newImage: 'Ny bild',
      download: 'Ladda ner',
    },
    cutFileGenerator: {
      upload: 'Klicka eller dra hit en bild',
      rect: 'Rektangel',
      circle: 'Cirkel',
      freehand: 'Frihand',
      undo: 'Ångra',
      clearAll: 'Rensa alla',
      strokeWidth: 'Linjebredd',
      exportSvg: 'Exportera SVG',
      includeBackground: 'Inkludera bakgrund',
      move: 'Flytta',
    },
    pdfTools: {
      tabMerge: 'Slå ihop',
      tabSign: 'Signera',
      tabFill: 'Fyll i',
      privacyNote: 'Allt sker lokalt i din webbläsare. Dokumentet laddas aldrig upp någonstans.',
      upload: 'Klicka eller dra hit PDF-filer',
      files: 'filer',
      merge: 'Sammanfoga PDF-filer',
      mergeError: 'Kunde inte slÃ¥ ihop filerna. NÃ¥gon av dem kan vara skadad eller lÃ¶senordsskyddad.',
      merging: 'Sammanfogar...',
      download: 'Ladda ner sammanslagen PDF',
    },
    ocrTool: {
      upload: 'Klicka eller dra hit en bild',
      extract: 'Extrahera text',
      processing: 'Analyserar...',
      result: 'Resultat',
      noText: 'Ingen text kunde identifieras. Prova en bild med tydlig, mörk text på ljus bakgrund.',
      copy: 'Kopiera',
      copied: 'Kopierad!',
    },
    backgroundRemover: {
      upload: 'Klicka eller dra hit en bild',
      tolerance: 'Tolerans',
      remove: 'Ta bort bakgrund',
      processing: 'Bearbetar...',
      download: 'Ladda ner PNG',
    },
    tools: {
      'png-till-svg': { name: 'Bild till vektor', description: 'Gör en bild så att den kan förstoras hur mycket som helst utan att bli suddig.', hint: 'En vanlig bild är byggd av små rutor och blir grynig när du drar upp den. En vektor är byggd av linjer och håller sig skarp i vilken storlek som helst. Behövs om bilden ska skäras, graveras eller tryckas stort.' },
      'fargpalett': { name: 'Färgpalett', description: 'Plocka ihop färgerna du vill använda i ditt projekt och kopiera deras koder.', hint: 'Varje färg har en kod, till exempel #3b82f6. Koden är det du skriver in i andra program för att få exakt samma färg.' },
      'qr-kod': { name: 'QR-kod', description: 'Gör en QR-kod som leder dit du vill. En i taget, eller hundra på en gång.', hint: 'Fungerar för länkar, wifi-lösenord eller vilken text som helst. Du väljer färg och storlek.' },
      'text-till-tal': { name: 'Text till tal', description: 'Skriv något och få det uppläst.', hint: 'Du kan välja röst, hur fort den läser och hur ljus rösten är.' },
      'bildkomprimering': { name: 'Krymp en bild', description: 'Gör bildfilen mindre så den går att skicka eller lägga upp, utan att den ser sämre ut.', hint: 'Bilder från en telefon är ofta flera megabyte. Här bestämmer du hur mycket mindre den ska bli och ser resultatet direkt.' },
      'mediakonverterare': { name: 'Byt format på ljud och film', description: 'När filen inte går att öppna eller spela upp. Gör om den till ett format som fungerar.', hint: 'Hanterar MP4, MP3, WAV, WebM och OGG. Du kan också plocka ut bara ljudet ur en film.' },
      'brodyrkortsvisare': { name: 'Brodyrmönster', description: 'Öppna en brodyrfil och se mönstret innan du syr det. Färger, antal stygn och hur stort det blir.', hint: 'Läser filformaten PES, DST och JEF, som brodyrmaskiner använder.' },
      'bildbeskärare': { name: 'Beskär bild', description: 'Klipp bort det du inte vill ha med, eller gör bilden kvadratisk.', hint: 'Dra en ruta över det du vill behålla. Du kan låsa formen om bilden ska ha en bestämd proportion.' },
      'bakgrundsborttagare': { name: 'Ta bort bakgrund', description: 'Plocka ut ett motiv ur en bild så du kan använda det i något annat.', hint: 'Fungerar bäst när bakgrunden har en jämn färg. Du ställer själv in hur mycket som ska bort.' },
      'heic-till-jpg': { name: 'HEIC till JPG', description: 'iPhone-bilder som datorn vägrar öppna. Gör om dem till vanliga bilder som fungerar överallt.', hint: 'iPhone sparar foton i formatet HEIC. Många datorer och program kan inte öppna det. Här gör du om dem till JPG eller PNG.' },
      'metadata-tvatt': { name: 'Rensa dolt i bilder', description: 'Ett foto minns var det togs, när, och med vilken telefon. Se vad som följer med, och ta bort det innan du delar bilden.', hint: 'Informationen kallas metadata och syns inte när du tittar på bilden. Den följer ändå med när du skickar den.' },
      'video-till-gif': { name: 'Video till GIF', description: 'Klipp ut en bit av en film och gör den till en GIF som loopar.', hint: 'Välj var klippet ska börja och sluta, hur många bilder i sekunden och hur stort det ska bli.' },
      'srt-redigerare': { name: 'Undertexter', description: 'Ändra vad som står i undertexterna till en film, och när de ska visas.', hint: 'Arbetar med .srt-filer, som är det vanligaste formatet för undertexter. Du kan flytta alla texter samtidigt om de ligger fel.' },
      'ljudklipp': { name: 'Klipp ljud', description: 'Korta ner en inspelning eller plocka ut just den bit du vill ha.', hint: 'Välj var klippet ska börja och sluta. Du får ner det som en WAV-fil.' },
      'padgrid': { name: 'PadGrid', description: 'Bygg musik genom att klicka i ett rutnät. Starta loopar och lägg ljud ovanpå varandra.', hint: 'Varje ruta är en slinga som spelas om och om igen. Klickar du på en annan ruta i samma kolumn byter du slinga. Verktyget visar hur det fungerar första gången.' },
      'ascii-konst': { name: 'Bild av bokstäver', description: 'Gör om ett foto till en bild byggd av tecken och bokstäver.', hint: 'Det kallas ASCII-konst och är så datorer ritade bilder innan de kunde visa riktiga foton.' },
      'skarfilsgenerator': { name: 'Skärfil till laser', description: 'Rita linjerna där maskinen ska skära, och ladda ner en fil den förstår.', hint: 'Lägg in en bild, rita skärlinjer runt den och exportera som SVG med rätt mått i millimeter.' },
      'pdf-verktyg': { name: 'PDF-verktyg', description: 'Slå ihop flera PDF-filer, skriv under ett papper, eller fyll i en blankett.', hint: 'Tre vanliga uppgifter på ett ställe. Du ritar din namnteckning direkt på skärmen.' },
      'ocr': { name: 'Text ur en bild', description: 'Fota en sida eller ta en skärmbild. Verktyget läser texten så att du kan kopiera den.', hint: 'Fungerar bäst på tryckt text som är rak och i fokus. Handskrivet blir sällan rätt.' },
      'traincells': { name: 'TrainCells', description: 'Bygg ditt eget spel. Rita figurer, bygg banor och spela direkt.', hint: 'Du ritar allt själv, ruta för ruta. Spelet går att spara ner och dela med andra.' },
      'ordbehandlare': { name: 'Skriva dokument', description: 'Skriv uppsatser, rapporter och berättelser med rubriker, listor och länkar.', hint: 'Texten sparas i webbläsaren medan du skriver, så du tappar inte bort den. Du kan spara ner den som PDF eller som en Word-fil.', screenReason: 'Att skriva och formatera längre dokument kräver tangentbord och gott om skärmyta för verktygsraden. Det fungerar inte bra på en liten mobilskärm.' },
    },
  },
  en: {
    toolsHeading: 'Tools',
    tagline: 'ByteBox is free tools for making things with images, audio, video, text and games. Everything runs on your own device. What you work on never leaves your computer, and ByteBox sends nothing anywhere. No account, no tracking.',
    newBadge: 'New',
    categoriesHeading: 'Categories',
    showAll: 'Show all tools',
    common: {
      imageLoadError: 'Could not read the image file. It may be damaged or in a format the browser does not support.',
    },
    tabletRequired: {
      title: 'Needs a bigger screen',
      body: 'This tool needs at least a tablet-sized screen to work well. Open it on a tablet or computer.',
      computerTitle: 'Works best on a computer',
      computerBody: 'This tool is made for a computer. Open it on a computer to use it.',
      recommend: 'This tool works best on a computer. It may feel cramped on a smaller screen.',
      back: 'Back to the tools',
    },
    menu: 'Menu',
    devicePrompt: 'What can you do on your device?',
    minScreenLabel: {
      mobil: 'Phone',
      surfplatta: 'Tablet',
      dator: 'Computer',
    },
    searchPlaceholder: 'Search tools...',
    emptyState: 'No tools match the filter.',
    comingSoon: 'Coming soon',
    notFound: 'Tool not found.',
    backToTools: 'Back to all tools',
    tabs: {
      alla: 'All',
      online: 'Online',
      offline: 'Offline',
    },
    connection: {
      online: 'Requires internet',
      offline: 'Works offline',
    },
    theme: {
      light: 'Light',
      dark: 'Dark',
      highContrast: 'High contrast',
    },
    journal: {
      heading: 'Journal',
      description: 'What we built and updated in each version.',
      mission: 'Most of the tools here solve problems you could solve yourself, if you knew how. We built them once and put them out in the open, so anyone who needs them does not have to search, pay, or hand over their files. Everything runs on your own device.',
      direction: 'Right now we are narrowing down. ByteBox has grown to a large number of tools, and several of them solve problems already solved in a thousand other places. So we are going through them one by one, keeping what belongs to digital creativity, and what can be understood without prior knowledge. The goal is fewer tools, explained more clearly, and usable by everyone: with a screen reader, with the keyboard alone, in several languages. Security and privacy are not added afterwards but a requirement every tool must meet before it belongs here.',
      added: 'Added',
      changed: 'Changed',
      fixed: 'Fixed',
    },
    allCategories: 'All categories',
    installApp: 'Install app',
    close: 'Close',
    iosStep1: 'Tap the Share button at the bottom of Safari.',
    iosStep2: 'Scroll down and choose "Add to Home Screen".',
    iosStep3: 'ByteBox then appears among your apps and opens full screen.',
    categories: {
      bild: 'Images & photos',
      form: 'Design & making',
      text: 'Text & documents',
      ljud: 'Audio & music',
      spel: 'Games',
    },
    qrCode: {
      tabSingle: 'One code',
      tabBatch: 'Several codes',
      privacyNote: 'Everything happens locally in your browser. No text is uploaded anywhere.',
      input: 'Text or URL',
      placeholder: 'Type text or paste a URL...',
      size: 'Size',
      foreground: 'Foreground',
      background: 'Background',
      output: 'QR Code',
      download: 'Download PNG',
    },
    colorPalette: {
      addColor: 'Add color',
      pickColor: 'Pick colour',
      copyColor: 'Copy the colour code',
      removeColor: 'Remove the colour',
      randomize: 'Randomize',
      copyAll: 'Copy all',
      copied: 'Copied!',
    },
    imageCompressor: {
      upload: 'Click or drag an image here',
      quality: 'Quality',
      smaller: 'Smaller file',
      better: 'Better quality',
      maxWidth: 'Max width',
      original: 'Original',
      compressed: 'Compressed',
      compress: 'Compress',
      processing: 'Compressing...',
      download: 'Download',
    },
    textToSpeech: {
      localOnly: 'Only voices installed on your computer are listed here. The text is read aloud on the device and never sent anywhere.',
      noVoices: 'Your device does not seem to have any built in voices. On Windows and macOS they are added in the system settings, under language or accessibility.',
      input: 'Text',
      placeholder: 'Type text to be read aloud...',
      voice: 'Voice',
      speed: 'Speed',
      pitch: 'Pitch',
      play: 'Play',
      pause: 'Pause',
      resume: 'Resume',
      stop: 'Stop',
    },
    wordProcessor: {
      storageWarning: 'The text saves as you write, but only in this browser on this device. It does not follow you to another computer and disappears if you clear your browsing data. On iPhone and iPad, Safari also removes it after roughly a week without a visit. Save the document as PDF or Word when you are done.',
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
      strikethrough: 'Strikethrough',
      heading1: 'Heading 1',
      heading2: 'Heading 2',
      heading3: 'Heading 3',
      bulletList: 'Bullet list',
      numberedList: 'Numbered list',
      quote: 'Quote',
      link: 'Link',
      undo: 'Undo',
      redo: 'Redo',
      words: 'Words',
      characters: 'Characters',
      clear: 'Clear',
      autoSaved: 'Auto-saved in your browser',
      print: 'Print / Save as PDF',
      downloadWord: 'Download Word (.docx)',
      placeholder: 'Start writing your document here...',
    },
    fillPdf: {
      upload: 'Click or drop a PDF here',
      loading: 'Opening PDF…',
      changeFile: 'change file',
      privacyNote: 'Your PDF is processed entirely locally in your browser and is never uploaded anywhere. The original file is never overwritten. You download a new, filled-in file.',
      hintClick: 'Click anywhere on the page to add text.',
      pageLabel: 'Page {n} of {m}',
      zoomIn: 'Zoom in',
      zoomOut: 'Zoom out',
      textPlaceholder: 'Type…',
      drag: 'Move',
      smaller: 'Smaller text',
      bigger: 'Bigger text',
      boldToggle: 'Bold',
      deleteText: 'Delete',
      save: 'Save PDF',
      saving: 'Saving…',
      savedDone: 'Done! The filled-in PDF has been downloaded.',
      errorType: 'Please choose a PDF file.',
      errorLoad: 'Could not read the PDF. It may be damaged or password-protected.',
      errorSave: 'Something went wrong while saving the PDF. Please try again.',
    },
    asciiArt: {
      upload: 'Click or drag an image here',
      widthLabel: 'Width',
      standard: 'Standard',
      detailed: 'Detailed',
      blocks: 'Blocks',
      copy: 'Copy',
      copied: 'Copied!',
    },
    heicConverter: {
      upload: 'Click or drop HEIC images (from iPhone) here',
      format: 'Format',
      quality: 'Quality',
      converting: 'Converting…',
      downloadAll: 'Download all',
      privacy: 'Everything runs locally in your browser. Your images are never uploaded anywhere.',
      noHeic: 'No HEIC/HEIF files found. Pick photos from an iPhone.',
      failed: 'Something went wrong during conversion. The file may not be a valid HEIC image.',
    },
    metadataCleaner: {
      upload: 'Click or drop an image (e.g. a photo) here',
      privacy: 'Everything runs locally in your browser. Your image is never uploaded anywhere.',
      reading: 'Reading metadata…',
      found: 'This image contains hidden metadata:',
      location: 'Exact location (GPS)',
      date: 'Date',
      camera: 'Camera',
      tags: 'metadata fields total',
      none: 'No metadata found in this image. It\'s already clean.',
      clean: 'Remove metadata',
      cleaned: 'Metadata removed. Download the clean image.',
      download: 'Download clean image',
    },
    underTheHood: {
      heading: 'Under the hood',
      lead: 'ByteBox is a website with no server. Everything you see and do happens in your own browser. Here is how it is built, for anyone who wants to know.',
      factTools: 'Tools',
      factLanguages: 'Languages',
      factRequests: 'Network requests',
      builtHeading: 'Built with',
      builtBody: 'The code is written in TypeScript throughout, which catches a large share of mistakes before anything is published. The site builds to static files and is hosted on GitHub Pages.',
      whatHeading: 'What it actually is',
      whatBody: 'There is no back end. No database, no accounts, no login and no server receiving anything. ByteBox is a set of files downloaded to your browser once and then run there. Turn off the network after the page has loaded and nothing changes.',
      localHeading: 'Why nothing is sent',
      localBody: 'This is not a policy but a property of the build. There is not a single network request in the code. The page security policy permits no external domain at all, and a test fails any page that contacts a server. If someone added such a dependency, it would be stopped before it reached you.',
      offlineHeading: 'Works without a connection',
      offlineBody: 'A service worker stores the app in your browser after the first visit. ByteBox then starts even with no connection, and can be added to the home screen on a phone or tablet, or installed as a program on a computer.',
      a11yHeading: 'Accessibility is measured',
      a11yBody: 'Every page is checked automatically against WCAG 2.2 AA in all three themes, on every change: contrast, names on buttons and fields, heading structure and keyboard navigation. The few exceptions are justified in the test code, so the reasoning can be read and argued with.',
      checksHeading: 'What is checked before publishing',
      checksBody: 'No change reaches the site without passing all of this first. If any of it fails, nothing is published.',
      check1: 'Type checking of all code',
      check2: 'Code review against shared rules',
      check3: 'Unit tests of file parsers and logic',
      check4: 'Browser tests that open every tool and read the console',
      check5: 'A check that no page contacts an external server',
      check6: 'A check that all six languages carry the same texts',
      codeHeading: 'The code is open',
      codeBody: 'Everything is on GitHub under the MIT licence. Use it, change it and build on it freely. The only requirement is that the copyright line comes along.',
      codeLink: 'Read the code on GitHub',
    },
    embroideryViewer: {
      formats: 'PES (Brother, Babylock, Bernina) · DST (Tajima and most industrial machines) · JEF (Janome, Elna)',
    },
    imageCropper: {
      formats: {
        free: 'Free',
        square: 'Square',
        post: 'Post',
        story: 'Story',
        wide: 'Widescreen',
        photo: 'Photo print',
        screen: 'Screen',
      },
      upload: 'Click or drag an image here',
      free: 'Free',
      crop: 'Crop',
      newImage: 'New image',
      download: 'Download',
    },
    cutFileGenerator: {
      upload: 'Click or drag an image here',
      rect: 'Rectangle',
      circle: 'Circle',
      freehand: 'Freehand',
      undo: 'Undo',
      clearAll: 'Clear all',
      strokeWidth: 'Stroke width',
      exportSvg: 'Export SVG',
      includeBackground: 'Include background',
      move: 'Move',
    },
    pdfTools: {
      tabMerge: 'Merge',
      tabSign: 'Sign',
      tabFill: 'Fill in',
      privacyNote: 'Everything happens locally in your browser. The document is never uploaded anywhere.',
      upload: 'Click or drag PDF files here',
      files: 'files',
      merge: 'Merge PDF files',
      mergeError: 'Could not merge the files. One of them may be damaged or password protected.',
      merging: 'Merging...',
      download: 'Download merged PDF',
    },
    ocrTool: {
      upload: 'Click or drag an image here',
      extract: 'Extract text',
      processing: 'Analyzing...',
      result: 'Result',
      noText: 'No text could be identified. Try an image with clear, dark text on a light background.',
      copy: 'Copy',
      copied: 'Copied!',
    },
    backgroundRemover: {
      upload: 'Click or drag an image here',
      tolerance: 'Tolerance',
      remove: 'Remove background',
      processing: 'Processing...',
      download: 'Download PNG',
    },
    tools: {
      'png-till-svg': { name: 'Image to vector', description: 'Turn an image into something you can enlarge as much as you like without it going blurry.', hint: 'An ordinary image is built from tiny squares and turns grainy when you scale it up. A vector is built from lines and stays sharp at any size. Needed if the image is going to be cut, engraved or printed large.' },
      'fargpalett': { name: 'Colour palette', description: 'Gather the colours you want for your project and copy their codes.', hint: 'Every colour has a code, for example #3b82f6. The code is what you type into other programs to get exactly the same colour.' },
      'qr-kod': { name: 'QR code', description: 'Make a QR code that leads wherever you want. One at a time, or a hundred at once.', hint: 'Works for links, wifi passwords or any text at all. You choose the colour and size.' },
      'text-till-tal': { name: 'Text to speech', description: 'Write something and have it read aloud.', hint: 'You can choose the voice, how fast it reads and how high it sounds.' },
      'bildkomprimering': { name: 'Shrink an image', description: 'Make the image file smaller so you can send or upload it, without it looking worse.', hint: 'Photos from a phone are often several megabytes. Here you decide how much smaller it should get and see the result straight away.' },
      'mediakonverterare': { name: 'Change audio and video format', description: 'When the file will not open or play. Turn it into a format that works.', hint: 'Handles MP4, MP3, WAV, WebM and OGG. You can also pull just the audio out of a video.' },
      'brodyrkortsvisare': { name: 'Embroidery patterns', description: 'Open an embroidery file and see the pattern before you stitch it. Colours, stitch count and how big it will be.', hint: 'Reads the file formats PES, DST and JEF, which embroidery machines use.' },
      'bildbeskärare': { name: 'Crop an image', description: 'Cut away what you do not want, or make the picture square.', hint: 'Drag a box over what you want to keep. You can lock the shape if the image needs fixed proportions.' },
      'bakgrundsborttagare': { name: 'Remove background', description: 'Lift a subject out of a picture so you can use it in something else.', hint: 'Works best when the background is an even colour. You decide how much gets removed.' },
      'heic-till-jpg': { name: 'HEIC to JPG', description: 'iPhone photos your computer refuses to open. Turn them into ordinary images that work everywhere.', hint: 'iPhone saves photos in a format called HEIC. Many computers and programs cannot open it. Here you turn them into JPG or PNG.' },
      'metadata-tvatt': { name: 'Clear hidden data', description: 'A photo remembers where it was taken, when, and with which phone. See what comes along, and remove it before you share the picture.', hint: 'The information is called metadata and is invisible when you look at the image. It still travels with it when you send it.' },
      'video-till-gif': { name: 'Video to GIF', description: 'Cut a piece out of a video and turn it into a looping GIF.', hint: 'Choose where the clip starts and ends, how many frames per second, and how large it should be.' },
      'srt-redigerare': { name: 'Subtitles', description: 'Change what the subtitles to a film say, and when they appear.', hint: 'Works with .srt files, the most common subtitle format. You can shift every line at once if they are out of sync.' },
      'ljudklipp': { name: 'Trim audio', description: 'Shorten a recording or pull out just the part you want.', hint: 'Choose where the clip starts and ends. You get it back as a WAV file.' },
      'padgrid': { name: 'PadGrid', description: 'Build music by clicking a grid. Start loops and layer sounds on top of each other.', hint: 'Each square is a loop that plays over and over. Click another square in the same column to swap loops. The tool shows you how it works the first time.' },
      'ascii-konst': { name: 'Picture made of letters', description: 'Turn a photo into an image built from characters and letters.', hint: 'It is called ASCII art, and it is how computers drew pictures before they could show real photographs.' },
      'skarfilsgenerator': { name: 'Cut file for a laser', description: 'Draw the lines where the machine should cut, and download a file it understands.', hint: 'Load an image, draw cut lines around it and export as SVG with correct measurements in millimetres.' },
      'pdf-verktyg': { name: 'PDF tools', description: 'Merge several PDF files, sign a document, or fill in a form.', hint: 'Three common jobs in one place. You draw your signature straight onto the screen.' },
      'ocr': { name: 'Text from a picture', description: 'Photograph a page or take a screenshot. The tool reads the text so you can copy it.', hint: 'Works best on printed text that is straight and in focus. Handwriting rarely comes out right.' },
      'traincells': { name: 'TrainCells', description: 'Build your own game. Draw characters, build levels and play straight away.', hint: 'You draw everything yourself, square by square. The game can be saved and shared with others.' },
      'ordbehandlare': { name: 'Write documents', description: 'Write essays, reports and stories with headings, lists and links.', hint: 'The text saves in your browser as you write, so you will not lose it. You can save it as a PDF or as a Word file.', screenReason: 'Writing and formatting longer documents needs a keyboard and enough screen space for the toolbar. It doesn\'t work well on a small phone screen.' },
    },
  },
  es: {
    toolsHeading: 'Herramientas',
    tagline: 'ByteBox son herramientas gratuitas para crear con imágenes, audio, vídeo, texto y juegos. Todo se ejecuta en tu propio dispositivo. Lo que trabajas nunca sale de tu ordenador y ByteBox no envía nada a ninguna parte. Sin cuenta, sin seguimiento.',
    newBadge: 'Nuevo',
    categoriesHeading: 'Categorías',
    showAll: 'Mostrar todas las herramientas',
    common: {
      imageLoadError: 'No se pudo leer el archivo de imagen. Puede estar dañado o en un formato que el navegador no admite.',
    },
    tabletRequired: {
      title: 'Requiere una pantalla más grande',
      body: 'Esta herramienta necesita al menos una pantalla del tamaño de una tableta para funcionar bien. Ábrela en una tableta o un ordenador.',
      computerTitle: 'Funciona mejor en un ordenador',
      computerBody: 'Esta herramienta está pensada para un ordenador. Ábrela en un ordenador para usarla.',
      recommend: 'Esta herramienta funciona mejor en un ordenador. En una pantalla más pequeña puede quedar apretada.',
      back: 'Volver a las herramientas',
    },
    menu: 'Menú',
    devicePrompt: '¿Qué puedes hacer en tu dispositivo?',
    minScreenLabel: {
      mobil: 'Móvil',
      surfplatta: 'Tableta',
      dator: 'Ordenador',
    },
    searchPlaceholder: 'Buscar herramientas...',
    emptyState: 'Ninguna herramienta coincide con el filtro.',
    comingSoon: 'Próximamente',
    notFound: 'Herramienta no encontrada.',
    backToTools: 'Volver a todas las herramientas',
    tabs: {
      alla: 'Todas',
      online: 'En línea',
      offline: 'Sin conexión',
    },
    connection: {
      online: 'Requiere internet',
      offline: 'Funciona sin conexión',
    },
    theme: {
      light: 'Claro',
      dark: 'Oscuro',
      highContrast: 'Alto contraste',
    },
    journal: {
      heading: 'Diario',
      description: 'Lo que hemos construido y actualizado en cada versión.',
      mission: 'La mayoría de las herramientas de aquí resuelven problemas que uno mismo podría resolver, si supiera cómo. Las hemos construido una vez y las hemos puesto a la vista, para que quien las necesite no tenga que buscar, pagar ni entregar sus archivos. Todo se ejecuta en tu propio dispositivo.',
      direction: 'Ahora mismo estamos reduciendo. ByteBox ha crecido hasta un gran número de herramientas, y varias resuelven problemas ya resueltos en otros mil sitios. Por eso las revisamos una a una y conservamos lo que pertenece a la creación digital, y lo que se entiende sin conocimientos previos. El objetivo es menos herramientas, mejor explicadas y utilizables por todos: con lector de pantalla, solo con el teclado, en varios idiomas. La seguridad y la privacidad no se añaden después, sino que son un requisito que cada herramienta debe cumplir antes de estar aquí.',
      added: 'Añadido',
      changed: 'Cambiado',
      fixed: 'Corregido',
    },
    allCategories: 'Todas las categorías',
    installApp: 'Instalar app',
    close: 'Cerrar',
    iosStep1: 'Toca el botón Compartir en la parte inferior de Safari.',
    iosStep2: 'Desplázate y elige "Añadir a pantalla de inicio".',
    iosStep3: 'ByteBox aparecerá entre tus apps y se abrirá a pantalla completa.',
    categories: {
      bild: 'Imágenes y fotos',
      form: 'Diseño y fabricación',
      text: 'Texto y documentos',
      ljud: 'Audio y música',
      spel: 'Juegos',
    },
    qrCode: {
      tabSingle: 'Un código',
      tabBatch: 'Varios códigos',
      privacyNote: 'Todo ocurre localmente en tu navegador. No se sube ningún texto.',
      input: 'Texto o URL',
      placeholder: 'Escribe texto o pega una URL...',
      size: 'Tamaño',
      foreground: 'Primer plano',
      background: 'Fondo',
      output: 'Código QR',
      download: 'Descargar PNG',
    },
    colorPalette: {
      addColor: 'Añadir color',
      pickColor: 'Elegir color',
      copyColor: 'Copiar el código de color',
      removeColor: 'Eliminar el color',
      randomize: 'Aleatorio',
      copyAll: 'Copiar todos',
      copied: '¡Copiado!',
    },
    imageCompressor: {
      upload: 'Haz clic o arrastra una imagen aquí',
      quality: 'Calidad',
      smaller: 'Archivo más pequeño',
      better: 'Mejor calidad',
      maxWidth: 'Ancho máximo',
      original: 'Original',
      compressed: 'Comprimida',
      compress: 'Comprimir',
      processing: 'Comprimiendo...',
      download: 'Descargar',
    },
    textToSpeech: {
      localOnly: 'Aquí solo aparecen las voces instaladas en tu ordenador. El texto se lee en el dispositivo y nunca se envía a ninguna parte.',
      noVoices: 'Tu dispositivo no parece tener voces integradas. En Windows y macOS se añaden en la configuración del sistema, en idioma o accesibilidad.',
      input: 'Texto',
      placeholder: 'Escribe el texto que se leerá...',
      voice: 'Voz',
      speed: 'Velocidad',
      pitch: 'Tono',
      play: 'Reproducir',
      pause: 'Pausa',
      resume: 'Continuar',
      stop: 'Detener',
    },
    wordProcessor: {
      storageWarning: 'El texto se guarda mientras escribes, pero solo en este navegador y en este dispositivo. No te acompaña a otro ordenador y desaparece si borras los datos de navegación. En iPhone y iPad, Safari además lo elimina tras aproximadamente una semana sin visitas. Guarda el documento como PDF o Word cuando termines.',
      bold: 'Negrita',
      italic: 'Cursiva',
      underline: 'Subrayado',
      strikethrough: 'Tachado',
      heading1: 'Encabezado 1',
      heading2: 'Encabezado 2',
      heading3: 'Encabezado 3',
      bulletList: 'Lista con viñetas',
      numberedList: 'Lista numerada',
      quote: 'Cita',
      link: 'Enlace',
      undo: 'Deshacer',
      redo: 'Rehacer',
      words: 'Palabras',
      characters: 'Caracteres',
      clear: 'Limpiar',
      autoSaved: 'Se guarda automáticamente en el navegador',
      print: 'Imprimir / Guardar como PDF',
      downloadWord: 'Descargar Word (.docx)',
      placeholder: 'Empieza a escribir tu documento aquí...',
    },
    fillPdf: {
      upload: 'Haz clic o arrastra un PDF aquí',
      loading: 'Abriendo PDF…',
      changeFile: 'cambiar archivo',
      privacyNote: 'Tu PDF se procesa totalmente en local en tu navegador y nunca se sube a ningún sitio. El archivo original nunca se sobrescribe. Descargas un archivo nuevo y rellenado.',
      hintClick: 'Haz clic en cualquier parte de la página para añadir texto.',
      pageLabel: 'Página {n} de {m}',
      zoomIn: 'Acercar',
      zoomOut: 'Alejar',
      textPlaceholder: 'Escribe…',
      drag: 'Mover',
      smaller: 'Texto más pequeño',
      bigger: 'Texto más grande',
      boldToggle: 'Negrita',
      deleteText: 'Eliminar',
      save: 'Guardar PDF',
      saving: 'Guardando…',
      savedDone: '¡Listo! El PDF rellenado se ha descargado.',
      errorType: 'Elige un archivo PDF.',
      errorLoad: 'No se pudo leer el PDF. Puede estar dañado o protegido con contraseña.',
      errorSave: 'Algo salió mal al guardar el PDF. Inténtalo de nuevo.',
    },
    asciiArt: {
      upload: 'Haz clic o arrastra una imagen aquí',
      widthLabel: 'Ancho',
      standard: 'Estándar',
      detailed: 'Detallado',
      blocks: 'Bloques',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    heicConverter: {
      upload: 'Haz clic o arrastra aquí imágenes HEIC (de iPhone)',
      format: 'Formato',
      quality: 'Calidad',
      converting: 'Convirtiendo…',
      downloadAll: 'Descargar todo',
      privacy: 'Todo se ejecuta localmente en tu navegador. Tus imágenes nunca se suben a ningún sitio.',
      noHeic: 'No se encontraron archivos HEIC/HEIF. Elige fotos de un iPhone.',
      failed: 'Algo salió mal durante la conversión. Puede que el archivo no sea una imagen HEIC válida.',
    },
    metadataCleaner: {
      upload: 'Haz clic o arrastra una imagen (p. ej. una foto) aquí',
      privacy: 'Todo se ejecuta localmente en tu navegador. Tu imagen nunca se sube a ningún sitio.',
      reading: 'Leyendo metadatos…',
      found: 'Esta imagen contiene metadatos ocultos:',
      location: 'Ubicación exacta (GPS)',
      date: 'Fecha',
      camera: 'Cámara',
      tags: 'campos de metadatos en total',
      none: 'No se encontraron metadatos en esta imagen. Ya está limpia.',
      clean: 'Eliminar metadatos',
      cleaned: 'Metadatos eliminados. Descarga la imagen limpia.',
      download: 'Descargar imagen limpia',
    },
    underTheHood: {
      heading: 'Bajo el capó',
      lead: 'ByteBox es un sitio web sin servidor. Todo lo que ves y haces ocurre en tu propio navegador. Aquí se explica cómo está construido, para quien quiera saberlo.',
      factTools: 'Herramientas',
      factLanguages: 'Idiomas',
      factRequests: 'Peticiones de red',
      builtHeading: 'Construido con',
      builtBody: 'El código está escrito íntegramente en TypeScript, lo que detecta buena parte de los errores antes de publicar nada. El sitio se compila a archivos estáticos y se aloja en GitHub Pages.',
      whatHeading: 'Qué es en realidad',
      whatBody: 'No hay parte servidora. Ni base de datos, ni cuentas, ni inicio de sesión, ni servidor que reciba nada. ByteBox es un conjunto de archivos que se descargan una vez a tu navegador y luego se ejecutan allí. Apaga la red tras cargar la página y no notarás diferencia.',
      localHeading: 'Por qué no se envía nada',
      localBody: 'No es una política, es una propiedad de la construcción. No hay ni una sola petición de red en el código. La política de seguridad de la página no permite ningún dominio externo, y una prueba suspende cualquier página que contacte con un servidor. Si alguien añadiera esa dependencia, se detendría antes de llegar a ti.',
      offlineHeading: 'Funciona sin conexión',
      offlineBody: 'Un service worker guarda la aplicación en el navegador tras la primera visita. ByteBox arranca después incluso sin conexión, y puede añadirse a la pantalla de inicio en móvil o tableta, o instalarse como programa en el ordenador.',
      a11yHeading: 'La accesibilidad se mide',
      a11yBody: 'Cada página se revisa automáticamente contra WCAG 2.2 AA en los tres temas, en cada cambio: contraste, nombres de botones y campos, estructura de encabezados y navegación con teclado. Las pocas excepciones están justificadas en el código de pruebas, para poder leer el motivo y rebatirlo.',
      checksHeading: 'Qué se comprueba antes de publicar',
      checksBody: 'Ningún cambio llega al sitio sin pasar antes por todo esto. Si algo falla, no se publica nada.',
      check1: 'Comprobación de tipos de todo el código',
      check2: 'Revisión de código con reglas comunes',
      check3: 'Pruebas unitarias de los analizadores de archivos y la lógica',
      check4: 'Pruebas en navegador que abren cada herramienta y leen la consola',
      check5: 'Comprobación de que ninguna página contacta con un servidor externo',
      check6: 'Comprobación de que los seis idiomas tienen los mismos textos',
      codeHeading: 'El código es abierto',
      codeBody: 'Todo está en GitHub con licencia MIT. Úsalo, modifícalo y construye sobre él libremente. Lo único que se exige es mantener la línea de copyright.',
      codeLink: 'Lee el código en GitHub',
    },
    embroideryViewer: {
      formats: 'PES (Brother, Babylock, Bernina) · DST (Tajima y la mayoría de máquinas industriales) · JEF (Janome, Elna)',
    },
    imageCropper: {
      formats: {
        free: 'Libre',
        square: 'Cuadrado',
        post: 'Publicación',
        story: 'Story',
        wide: 'Panorámico',
        photo: 'Foto impresa',
        screen: 'Pantalla',
      },
      upload: 'Haz clic o arrastra una imagen aquí',
      free: 'Libre',
      crop: 'Recortar',
      newImage: 'Nueva imagen',
      download: 'Descargar',
    },
    cutFileGenerator: {
      upload: 'Haz clic o arrastra una imagen aquí',
      rect: 'Rectángulo',
      circle: 'Círculo',
      freehand: 'Mano alzada',
      undo: 'Deshacer',
      clearAll: 'Borrar todo',
      strokeWidth: 'Grosor de línea',
      exportSvg: 'Exportar SVG',
      includeBackground: 'Incluir fondo',
      move: 'Mover',
    },
    pdfTools: {
      tabMerge: 'Fusionar',
      tabSign: 'Firmar',
      tabFill: 'Rellenar',
      privacyNote: 'Todo ocurre localmente en tu navegador. El documento nunca se sube a ningún sitio.',
      upload: 'Haz clic o arrastra archivos PDF aquí',
      files: 'archivos',
      merge: 'Fusionar archivos PDF',
      mergeError: 'No se pudieron fusionar los archivos. Alguno puede estar daÃ±ado o protegido con contraseÃ±a.',
      merging: 'Fusionando...',
      download: 'Descargar PDF fusionado',
    },
    ocrTool: {
      upload: 'Haz clic o arrastra una imagen aquí',
      extract: 'Extraer texto',
      processing: 'Analizando...',
      result: 'Resultado',
      noText: 'No se pudo identificar texto. Prueba con una imagen con texto oscuro claro sobre fondo claro.',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    backgroundRemover: {
      upload: 'Haz clic o arrastra una imagen aquí',
      tolerance: 'Tolerancia',
      remove: 'Eliminar fondo',
      processing: 'Procesando...',
      download: 'Descargar PNG',
    },
    tools: {
      'png-till-svg': { name: 'Imagen a vector', description: 'Convierte una imagen para poder ampliarla todo lo que quieras sin que se vuelva borrosa.', hint: 'Una imagen normal está hecha de cuadraditos y se ve granulada al ampliarla. Un vector está hecho de líneas y se mantiene nítido a cualquier tamaño. Necesario si la imagen se va a cortar, grabar o imprimir en grande.' },
      'fargpalett': { name: 'Paleta de colores', description: 'Reúne los colores que quieres para tu proyecto y copia sus códigos.', hint: 'Cada color tiene un código, por ejemplo #3b82f6. Ese código es lo que escribes en otros programas para obtener exactamente el mismo color.' },
      'qr-kod': { name: 'Código QR', description: 'Crea un código QR que lleve a donde quieras. De uno en uno, o cien a la vez.', hint: 'Sirve para enlaces, contraseñas de wifi o cualquier texto. Tú eliges el color y el tamaño.' },
      'text-till-tal': { name: 'Texto a voz', description: 'Escribe algo y escúchalo en voz alta.', hint: 'Puedes elegir la voz, la velocidad de lectura y lo aguda que suena.' },
      'bildkomprimering': { name: 'Reducir una imagen', description: 'Haz el archivo más pequeño para poder enviarlo o subirlo, sin que se vea peor.', hint: 'Las fotos del móvil suelen pesar varios megabytes. Aquí decides cuánto debe reducirse y ves el resultado al instante.' },
      'mediakonverterare': { name: 'Cambiar formato de audio y vídeo', description: 'Cuando el archivo no se abre o no se reproduce. Conviértelo en un formato que funcione.', hint: 'Admite MP4, MP3, WAV, WebM y OGG. También puedes extraer solo el audio de un vídeo.' },
      'brodyrkortsvisare': { name: 'Patrones de bordado', description: 'Abre un archivo de bordado y mira el patrón antes de coserlo. Colores, número de puntadas y qué tamaño tendrá.', hint: 'Lee los formatos PES, DST y JEF, que usan las máquinas de bordar.' },
      'bildbeskärare': { name: 'Recortar imagen', description: 'Quita lo que no quieres, o haz la foto cuadrada.', hint: 'Arrastra un recuadro sobre lo que quieras conservar. Puedes fijar la forma si la imagen necesita proporciones concretas.' },
      'bakgrundsborttagare': { name: 'Quitar el fondo', description: 'Saca un motivo de una foto para usarlo en otra cosa.', hint: 'Funciona mejor cuando el fondo es de un color uniforme. Tú decides cuánto se quita.' },
      'heic-till-jpg': { name: 'HEIC a JPG', description: 'Fotos de iPhone que el ordenador se niega a abrir. Conviértelas en imágenes normales que funcionan en todas partes.', hint: 'El iPhone guarda las fotos en un formato llamado HEIC. Muchos ordenadores y programas no pueden abrirlo. Aquí las conviertes en JPG o PNG.' },
      'metadata-tvatt': { name: 'Borrar datos ocultos', description: 'Una foto recuerda dónde se tomó, cuándo y con qué teléfono. Mira qué viaja con ella, y bórralo antes de compartirla.', hint: 'Esa información se llama metadatos y no se ve al mirar la imagen. Aun así viaja con ella cuando la envías.' },
      'video-till-gif': { name: 'Vídeo a GIF', description: 'Corta un trozo de un vídeo y conviértelo en un GIF que se repite.', hint: 'Elige dónde empieza y acaba el clip, cuántas imágenes por segundo y qué tamaño tendrá.' },
      'srt-redigerare': { name: 'Subtítulos', description: 'Cambia lo que dicen los subtítulos de una película y cuándo aparecen.', hint: 'Trabaja con archivos .srt, el formato de subtítulos más común. Puedes desplazar todas las líneas a la vez si van desincronizadas.' },
      'ljudklipp': { name: 'Recortar audio', description: 'Acorta una grabación o extrae justo la parte que quieres.', hint: 'Elige dónde empieza y acaba el fragmento. Lo recibes como archivo WAV.' },
      'padgrid': { name: 'PadGrid', description: 'Crea música pulsando en una cuadrícula. Lanza bucles y superpone sonidos.', hint: 'Cada casilla es un bucle que se repite. Pulsa otra casilla de la misma columna para cambiar de bucle. La herramienta te enseña cómo funciona la primera vez.' },
      'ascii-konst': { name: 'Imagen hecha de letras', description: 'Convierte una foto en una imagen construida con caracteres y letras.', hint: 'Se llama arte ASCII, y así dibujaban los ordenadores antes de poder mostrar fotografías reales.' },
      'skarfilsgenerator': { name: 'Archivo de corte para láser', description: 'Dibuja las líneas por donde debe cortar la máquina y descarga un archivo que entienda.', hint: 'Carga una imagen, dibuja las líneas de corte a su alrededor y expórtalo como SVG con las medidas correctas en milímetros.' },
      'pdf-verktyg': { name: 'Herramientas PDF', description: 'Une varios archivos PDF, firma un documento o rellena un formulario.', hint: 'Tres tareas habituales en un solo sitio. Dibujas tu firma directamente en la pantalla.' },
      'ocr': { name: 'Texto de una imagen', description: 'Fotografía una página o haz una captura. La herramienta lee el texto para que puedas copiarlo.', hint: 'Funciona mejor con texto impreso, recto y enfocado. La letra a mano casi nunca sale bien.' },
      'traincells': { name: 'TrainCells', description: 'Crea tu propio juego. Dibuja personajes, construye niveles y juega al momento.', hint: 'Lo dibujas todo tú, casilla a casilla. El juego se puede guardar y compartir con otros.' },
      'ordbehandlare': { name: 'Escribir documentos', description: 'Escribe redacciones, informes y relatos con títulos, listas y enlaces.', hint: 'El texto se guarda en el navegador mientras escribes, así que no lo pierdes. Puedes guardarlo como PDF o como archivo de Word.', screenReason: 'Escribir y dar formato a documentos más largos requiere teclado y suficiente espacio en pantalla para la barra de herramientas. No funciona bien en una pantalla de móvil pequeña.' },
    },
  },
  fr: {
    toolsHeading: 'Outils',
    tagline: 'ByteBox, ce sont des outils gratuits pour créer avec des images, du son, de la vidéo, du texte et des jeux. Tout fonctionne sur votre propre appareil. Ce sur quoi vous travaillez ne quitte jamais votre ordinateur, et ByteBox n’envoie rien nulle part. Sans compte, sans suivi.',
    newBadge: 'Nouveau',
    categoriesHeading: 'Catégories',
    showAll: 'Afficher tous les outils',
    common: {
      imageLoadError: 'Impossible de lire le fichier image. Il est peut-être endommagé ou dans un format non pris en charge par le navigateur.',
    },
    tabletRequired: {
      title: 'Nécessite un écran plus grand',
      body: 'Cet outil nécessite au moins un écran de la taille d’une tablette pour bien fonctionner. Ouvrez-le sur une tablette ou un ordinateur.',
      computerTitle: 'Fonctionne mieux sur un ordinateur',
      computerBody: 'Cet outil est conçu pour un ordinateur. Ouvrez-le sur un ordinateur pour l’utiliser.',
      recommend: 'Cet outil fonctionne mieux sur un ordinateur. Il peut être à l’étroit sur un écran plus petit.',
      back: 'Retour aux outils',
    },
    menu: 'Menu',
    devicePrompt: 'Que pouvez-vous faire sur votre appareil ?',
    minScreenLabel: {
      mobil: 'Mobile',
      surfplatta: 'Tablette',
      dator: 'Ordinateur',
    },
    searchPlaceholder: 'Rechercher des outils...',
    emptyState: 'Aucun outil ne correspond au filtre.',
    comingSoon: 'Bientôt disponible',
    notFound: 'Outil introuvable.',
    backToTools: 'Retour à tous les outils',
    tabs: {
      alla: 'Tous',
      online: 'En ligne',
      offline: 'Hors ligne',
    },
    connection: {
      online: 'Internet requis',
      offline: 'Fonctionne hors ligne',
    },
    theme: {
      light: 'Clair',
      dark: 'Sombre',
      highContrast: 'Contraste élevé',
    },
    journal: {
      heading: 'Journal',
      description: 'Ce que nous avons construit et mis à jour dans chaque version.',
      mission: 'La plupart des outils ici résolvent des problèmes que l’on pourrait résoudre soi-même, si l’on savait comment. Nous les avons construits une fois et rendus accessibles, pour que celui qui en a besoin n’ait ni à chercher, ni à payer, ni à confier ses fichiers. Tout fonctionne sur votre propre appareil.',
      direction: 'Nous resserrons actuellement le périmètre. ByteBox a grandi jusqu’à un grand nombre d’outils, dont plusieurs résolvent des problèmes déjà résolus mille fois ailleurs. Nous les passons donc en revue un par un et gardons ce qui relève de la création numérique, et ce qui se comprend sans connaissances préalables. L’objectif : moins d’outils, mieux expliqués, utilisables par tous. Au lecteur d’écran, au clavier seul, en plusieurs langues. La sécurité et la confidentialité ne s’ajoutent pas après coup : c’est une exigence que chaque outil doit remplir pour avoir sa place ici.',
      added: 'Ajouté',
      changed: 'Modifié',
      fixed: 'Corrigé',
    },
    allCategories: 'Toutes les catégories',
    installApp: 'Installer l\'app',
    close: 'Fermer',
    iosStep1: 'Touchez le bouton Partager en bas de Safari.',
    iosStep2: 'Faites défiler et choisissez « Sur l’écran d’accueil ».',
    iosStep3: 'ByteBox apparaît alors parmi vos apps et s’ouvre en plein écran.',
    categories: {
      bild: 'Images et photos',
      form: 'Design et fabrication',
      text: 'Texte et documents',
      ljud: 'Audio et musique',
      spel: 'Jeux',
    },
    qrCode: {
      tabSingle: 'Un code',
      tabBatch: 'Plusieurs codes',
      privacyNote: 'Tout se passe localement dans votre navigateur. Aucun texte n’est envoyé.',
      input: 'Texte ou URL',
      placeholder: 'Tapez du texte ou collez une URL...',
      size: 'Taille',
      foreground: 'Premier plan',
      background: 'Arrière-plan',
      output: 'Code QR',
      download: 'Télécharger PNG',
    },
    colorPalette: {
      addColor: 'Ajouter une couleur',
      pickColor: 'Choisir la couleur',
      copyColor: 'Copier le code couleur',
      removeColor: 'Supprimer la couleur',
      randomize: 'Aléatoire',
      copyAll: 'Tout copier',
      copied: 'Copié !',
    },
    imageCompressor: {
      upload: 'Cliquez ou glissez une image ici',
      quality: 'Qualité',
      smaller: 'Fichier plus petit',
      better: 'Meilleure qualité',
      maxWidth: 'Largeur max',
      original: 'Original',
      compressed: 'Compressé',
      compress: 'Compresser',
      processing: 'Compression...',
      download: 'Télécharger',
    },
    textToSpeech: {
      localOnly: 'Seules les voix installées sur votre ordinateur apparaissent ici. Le texte est lu sur l’appareil et n’est jamais envoyé ailleurs.',
      noVoices: 'Votre appareil ne semble pas avoir de voix intégrées. Sous Windows et macOS, elles s’ajoutent dans les réglages du système, à la rubrique langue ou accessibilité.',
      input: 'Texte',
      placeholder: 'Saisissez le texte à lire...',
      voice: 'Voix',
      speed: 'Vitesse',
      pitch: 'Hauteur',
      play: 'Lire',
      pause: 'Pause',
      resume: 'Reprendre',
      stop: 'Arrêter',
    },
    wordProcessor: {
      storageWarning: 'Le texte est enregistré au fil de l’écriture, mais uniquement dans ce navigateur sur cet appareil. Il ne vous suit pas sur un autre ordinateur et disparaît si vous effacez les données de navigation. Sur iPhone et iPad, Safari le supprime en outre après environ une semaine sans visite. Enregistrez le document en PDF ou en Word une fois terminé.',
      bold: 'Gras',
      italic: 'Italique',
      underline: 'Souligné',
      strikethrough: 'Barré',
      heading1: 'Titre 1',
      heading2: 'Titre 2',
      heading3: 'Titre 3',
      bulletList: 'Liste à puces',
      numberedList: 'Liste numérotée',
      quote: 'Citation',
      link: 'Lien',
      undo: 'Annuler',
      redo: 'Rétablir',
      words: 'Mots',
      characters: 'Caractères',
      clear: 'Effacer',
      autoSaved: 'Sauvegardé automatiquement dans le navigateur',
      print: 'Imprimer / Enregistrer en PDF',
      downloadWord: 'Télécharger Word (.docx)',
      placeholder: 'Commencez à écrire votre document ici...',
    },
    fillPdf: {
      upload: 'Cliquez ou déposez un PDF ici',
      loading: 'Ouverture du PDF…',
      changeFile: 'changer de fichier',
      privacyNote: 'Votre PDF est traité entièrement en local dans votre navigateur et n\'est jamais envoyé nulle part. Le fichier original n\'est jamais écrasé. Vous téléchargez un nouveau fichier rempli.',
      hintClick: 'Cliquez n\'importe où sur la page pour ajouter du texte.',
      pageLabel: 'Page {n} sur {m}',
      zoomIn: 'Zoomer',
      zoomOut: 'Dézoomer',
      textPlaceholder: 'Écrivez…',
      drag: 'Déplacer',
      smaller: 'Texte plus petit',
      bigger: 'Texte plus grand',
      boldToggle: 'Gras',
      deleteText: 'Supprimer',
      save: 'Enregistrer le PDF',
      saving: 'Enregistrement…',
      savedDone: 'Terminé ! Le PDF rempli a été téléchargé.',
      errorType: 'Choisissez un fichier PDF.',
      errorLoad: 'Impossible de lire le PDF. Il est peut-être endommagé ou protégé par mot de passe.',
      errorSave: 'Une erreur est survenue lors de l\'enregistrement du PDF. Réessayez.',
    },
    asciiArt: {
      upload: 'Cliquez ou glissez une image ici',
      widthLabel: 'Largeur',
      standard: 'Standard',
      detailed: 'Détaillé',
      blocks: 'Blocs',
      copy: 'Copier',
      copied: 'Copié !',
    },
    heicConverter: {
      upload: 'Cliquez ou déposez ici des images HEIC (d\'iPhone)',
      format: 'Format',
      quality: 'Qualité',
      converting: 'Conversion…',
      downloadAll: 'Tout télécharger',
      privacy: 'Tout s\'exécute localement dans votre navigateur. Vos images ne sont jamais envoyées nulle part.',
      noHeic: 'Aucun fichier HEIC/HEIF trouvé. Choisissez des photos d\'un iPhone.',
      failed: 'Une erreur s\'est produite lors de la conversion. Le fichier n\'est peut-être pas une image HEIC valide.',
    },
    metadataCleaner: {
      upload: 'Cliquez ou déposez une image (p. ex. une photo) ici',
      privacy: 'Tout s\'exécute localement dans votre navigateur. Votre image n\'est jamais envoyée nulle part.',
      reading: 'Lecture des métadonnées…',
      found: 'Cette image contient des métadonnées cachées :',
      location: 'Position exacte (GPS)',
      date: 'Date',
      camera: 'Appareil photo',
      tags: 'champs de métadonnées au total',
      none: 'Aucune métadonnée trouvée dans cette image. Elle est déjà propre.',
      clean: 'Supprimer les métadonnées',
      cleaned: 'Métadonnées supprimées. Téléchargez l\'image propre.',
      download: 'Télécharger l\'image propre',
    },
    underTheHood: {
      heading: 'Sous le capot',
      lead: 'ByteBox est un site web sans serveur. Tout ce que vous voyez et faites se passe dans votre propre navigateur. Voici comment il est construit, pour qui veut savoir.',
      factTools: 'Outils',
      factLanguages: 'Langues',
      factRequests: 'Requêtes réseau',
      builtHeading: 'Construit avec',
      builtBody: 'Le code est écrit intégralement en TypeScript, ce qui permet d’attraper une grande part des erreurs avant toute publication. Le site est compilé en fichiers statiques et hébergé sur GitHub Pages.',
      whatHeading: 'Ce que c’est réellement',
      whatBody: 'Il n’y a pas de back end. Ni base de données, ni comptes, ni connexion, ni serveur qui reçoive quoi que ce soit. ByteBox est un ensemble de fichiers téléchargés une fois dans votre navigateur puis exécutés là. Coupez le réseau après le chargement de la page et rien ne change.',
      localHeading: 'Pourquoi rien n’est envoyé',
      localBody: 'Ce n’est pas une politique mais une propriété de la construction. Il n’y a pas une seule requête réseau dans le code. La politique de sécurité de la page n’autorise aucun domaine externe, et un test rejette toute page qui contacte un serveur. Si quelqu’un ajoutait une telle dépendance, elle serait bloquée avant de vous atteindre.',
      offlineHeading: 'Fonctionne sans connexion',
      offlineBody: 'Un service worker conserve l’application dans le navigateur après la première visite. ByteBox démarre ensuite même sans connexion, et peut être ajouté à l’écran d’accueil sur téléphone ou tablette, ou installé comme programme sur ordinateur.',
      a11yHeading: 'L’accessibilité se mesure',
      a11yBody: 'Chaque page est vérifiée automatiquement selon WCAG 2.2 AA dans les trois thèmes, à chaque modification : contrastes, noms des boutons et des champs, structure des titres et navigation au clavier. Les rares exceptions sont justifiées dans le code de test, afin que le raisonnement puisse être lu et contesté.',
      checksHeading: 'Ce qui est vérifié avant publication',
      checksBody: 'Aucune modification n’atteint le site sans avoir passé tout ceci. Si l’un de ces points échoue, rien n’est publié.',
      check1: 'Vérification des types de tout le code',
      check2: 'Revue de code selon des règles communes',
      check3: 'Tests unitaires des analyseurs de fichiers et de la logique',
      check4: 'Tests en navigateur qui ouvrent chaque outil et lisent la console',
      check5: 'Vérification qu’aucune page ne contacte un serveur externe',
      check6: 'Vérification que les six langues portent les mêmes textes',
      codeHeading: 'Le code est ouvert',
      codeBody: 'Tout est sur GitHub sous licence MIT. Utilisez-le, modifiez-le et construisez dessus librement. La seule exigence est de conserver la ligne de copyright.',
      codeLink: 'Lire le code sur GitHub',
    },
    embroideryViewer: {
      formats: 'PES (Brother, Babylock, Bernina) · DST (Tajima et la plupart des machines industrielles) · JEF (Janome, Elna)',
    },
    imageCropper: {
      formats: {
        free: 'Libre',
        square: 'Carré',
        post: 'Publication',
        story: 'Story',
        wide: 'Écran large',
        photo: 'Tirage photo',
        screen: 'Écran',
      },
      upload: 'Cliquez ou glissez une image ici',
      free: 'Libre',
      crop: 'Rogner',
      newImage: 'Nouvelle image',
      download: 'Télécharger',
    },
    cutFileGenerator: {
      upload: 'Cliquez ou glissez une image ici',
      rect: 'Rectangle',
      circle: 'Cercle',
      freehand: 'Main levée',
      undo: 'Annuler',
      clearAll: 'Tout effacer',
      strokeWidth: 'Épaisseur du trait',
      exportSvg: 'Exporter SVG',
      includeBackground: 'Inclure l\'arrière-plan',
      move: 'Déplacer',
    },
    pdfTools: {
      tabMerge: 'Fusionner',
      tabSign: 'Signer',
      tabFill: 'Remplir',
      privacyNote: 'Tout se passe localement dans votre navigateur. Le document n\'est jamais téléchargé nulle part.',
      upload: 'Cliquez ou glissez des fichiers PDF ici',
      files: 'fichiers',
      merge: 'Fusionner les fichiers PDF',
      mergeError: 'Impossible de fusionner les fichiers. L’un d’eux est peut-Ãªtre endommagÃ© ou protÃ©gÃ© par mot de passe.',
      merging: 'Fusion...',
      download: 'Télécharger le PDF fusionné',
    },
    ocrTool: {
      upload: 'Cliquez ou glissez une image ici',
      extract: 'Extraire le texte',
      processing: 'Analyse...',
      result: 'Résultat',
      noText: 'Aucun texte n\'a pu être identifié. Essayez une image avec du texte sombre et clair sur fond clair.',
      copy: 'Copier',
      copied: 'Copié !',
    },
    backgroundRemover: {
      upload: 'Cliquez ou glissez une image ici',
      tolerance: 'Tolérance',
      remove: 'Supprimer l\'arrière-plan',
      processing: 'Traitement...',
      download: 'Télécharger PNG',
    },
    tools: {
      'png-till-svg': { name: 'Image en vecteur', description: 'Transformez une image pour pouvoir l’agrandir autant que vous voulez sans qu’elle devienne floue.', hint: 'Une image ordinaire est faite de petits carrés et devient granuleuse quand on l’agrandit. Un vecteur est fait de lignes et reste net à n’importe quelle taille. Nécessaire si l’image doit être découpée, gravée ou imprimée en grand.' },
      'fargpalett': { name: 'Palette de couleurs', description: 'Rassemblez les couleurs de votre projet et copiez leurs codes.', hint: 'Chaque couleur a un code, par exemple #3b82f6. C’est ce code que vous saisissez dans d’autres programmes pour obtenir exactement la même couleur.' },
      'qr-kod': { name: 'Code QR', description: 'Créez un code QR qui mène où vous voulez. Un à la fois, ou cent d’un coup.', hint: 'Fonctionne pour des liens, des mots de passe wifi ou n’importe quel texte. Vous choisissez la couleur et la taille.' },
      'text-till-tal': { name: 'Texte en parole', description: 'Écrivez quelque chose et faites-le lire à voix haute.', hint: 'Vous pouvez choisir la voix, la vitesse de lecture et la hauteur du son.' },
      'bildkomprimering': { name: 'Réduire une image', description: 'Rendez le fichier plus léger pour pouvoir l’envoyer ou le publier, sans qu’il soit moins beau.', hint: 'Les photos d’un téléphone pèsent souvent plusieurs mégaoctets. Ici vous décidez de combien elle doit rétrécir et voyez le résultat aussitôt.' },
      'mediakonverterare': { name: 'Changer le format audio et vidéo', description: 'Quand le fichier ne s’ouvre pas ou ne se lit pas. Convertissez-le dans un format qui fonctionne.', hint: 'Gère MP4, MP3, WAV, WebM et OGG. Vous pouvez aussi extraire uniquement le son d’une vidéo.' },
      'brodyrkortsvisare': { name: 'Motifs de broderie', description: 'Ouvrez un fichier de broderie et voyez le motif avant de le coudre. Couleurs, nombre de points et taille finale.', hint: 'Lit les formats PES, DST et JEF, utilisés par les machines à broder.' },
      'bildbeskärare': { name: 'Recadrer une image', description: 'Enlevez ce que vous ne voulez pas garder, ou rendez la photo carrée.', hint: 'Tracez un cadre sur ce que vous voulez conserver. Vous pouvez verrouiller la forme si l’image doit avoir des proportions précises.' },
      'bakgrundsborttagare': { name: 'Supprimer l’arrière-plan', description: 'Détourez un sujet d’une photo pour l’utiliser ailleurs.', hint: 'Fonctionne mieux quand l’arrière-plan est d’une couleur unie. Vous réglez vous-même ce qui disparaît.' },
      'heic-till-jpg': { name: 'HEIC vers JPG', description: 'Des photos d’iPhone que l’ordinateur refuse d’ouvrir. Transformez-les en images ordinaires qui fonctionnent partout.', hint: 'L’iPhone enregistre les photos dans un format appelé HEIC. Beaucoup d’ordinateurs et de programmes ne peuvent pas l’ouvrir. Ici vous les convertissez en JPG ou PNG.' },
      'metadata-tvatt': { name: 'Effacer les données cachées', description: 'Une photo se souvient d’où elle a été prise, quand, et avec quel téléphone. Voyez ce qui la suit, et supprimez-le avant de la partager.', hint: 'Ces informations s’appellent des métadonnées et ne se voient pas quand on regarde l’image. Elles voyagent pourtant avec elle quand vous l’envoyez.' },
      'video-till-gif': { name: 'Vidéo en GIF', description: 'Découpez un morceau de vidéo et transformez-le en GIF qui tourne en boucle.', hint: 'Choisissez le début et la fin du extrait, le nombre d’images par seconde et la taille.' },
      'srt-redigerare': { name: 'Sous-titres', description: 'Modifiez ce que disent les sous-titres d’un film, et quand ils apparaissent.', hint: 'Travaille avec les fichiers .srt, le format de sous-titres le plus courant. Vous pouvez décaler toutes les lignes d’un coup si elles sont désynchronisées.' },
      'ljudklipp': { name: 'Découper un son', description: 'Raccourcissez un enregistrement ou extrayez juste le passage voulu.', hint: 'Choisissez le début et la fin de l’extrait. Vous le récupérez en fichier WAV.' },
      'padgrid': { name: 'PadGrid', description: 'Composez de la musique en cliquant dans une grille. Lancez des boucles et superposez les sons.', hint: 'Chaque case est une boucle qui se répète. Cliquez sur une autre case de la même colonne pour changer de boucle. L’outil vous montre comment ça marche la première fois.' },
      'ascii-konst': { name: 'Image faite de lettres', description: 'Transformez une photo en image construite avec des caractères et des lettres.', hint: 'Cela s’appelle l’art ASCII : c’est ainsi que les ordinateurs dessinaient avant de pouvoir afficher de vraies photographies.' },
      'skarfilsgenerator': { name: 'Fichier de découpe laser', description: 'Tracez les lignes où la machine doit couper et téléchargez un fichier qu’elle comprend.', hint: 'Chargez une image, tracez les lignes de découpe autour et exportez en SVG avec les bonnes mesures en millimètres.' },
      'pdf-verktyg': { name: 'Outils PDF', description: 'Fusionnez plusieurs PDF, signez un document ou remplissez un formulaire.', hint: 'Trois tâches courantes au même endroit. Vous dessinez votre signature directement à l’écran.' },
      'ocr': { name: 'Texte depuis une image', description: 'Photographiez une page ou faites une capture. L’outil lit le texte pour que vous puissiez le copier.', hint: 'Fonctionne mieux sur du texte imprimé, droit et net. L’écriture à la main donne rarement un bon résultat.' },
      'traincells': { name: 'TrainCells', description: 'Créez votre propre jeu. Dessinez des personnages, construisez des niveaux et jouez aussitôt.', hint: 'Vous dessinez tout vous-même, case par case. Le jeu peut être enregistré et partagé.' },
      'ordbehandlare': { name: 'Écrire des documents', description: 'Rédigez des dissertations, des rapports et des récits avec titres, listes et liens.', hint: 'Le texte s’enregistre dans le navigateur au fil de l’écriture, vous ne le perdez donc pas. Vous pouvez l’enregistrer en PDF ou en fichier Word.', screenReason: 'Écrire et mettre en forme des documents plus longs nécessite un clavier et assez d\'espace à l\'écran pour la barre d\'outils. Cela ne fonctionne pas bien sur un petit écran de téléphone.' },
    },
  },
  de: {
    toolsHeading: 'Werkzeuge',
    tagline: 'ByteBox sind kostenlose Werkzeuge zum Gestalten mit Bild, Ton, Video, Text und Spielen. Alles läuft auf Ihrem eigenen Gerät. Woran Sie arbeiten, verlässt Ihren Computer nie, und ByteBox sendet nichts irgendwohin. Kein Konto, kein Tracking.',
    newBadge: 'Neu',
    categoriesHeading: 'Kategorien',
    showAll: 'Alle Werkzeuge anzeigen',
    common: {
      imageLoadError: 'Die Bilddatei konnte nicht gelesen werden. Sie ist möglicherweise beschädigt oder in einem Format, das der Browser nicht unterstützt.',
    },
    tabletRequired: {
      title: 'Benötigt einen größeren Bildschirm',
      body: 'Dieses Werkzeug benötigt mindestens einen tabletgroßen Bildschirm, um gut zu funktionieren. Öffne es auf einem Tablet oder Computer.',
      computerTitle: 'Funktioniert am besten am Computer',
      computerBody: 'Dieses Werkzeug ist für einen Computer gemacht. Öffne es an einem Computer, um es zu verwenden.',
      recommend: 'Dieses Werkzeug funktioniert am besten am Computer. Auf einem kleineren Bildschirm kann es eng werden.',
      back: 'Zurück zu den Werkzeugen',
    },
    menu: 'Menü',
    devicePrompt: 'Was kannst du auf deinem Gerät machen?',
    minScreenLabel: {
      mobil: 'Handy',
      surfplatta: 'Tablet',
      dator: 'Computer',
    },
    searchPlaceholder: 'Werkzeuge suchen...',
    emptyState: 'Keine Werkzeuge entsprechen dem Filter.',
    comingSoon: 'Demnächst verfügbar',
    notFound: 'Werkzeug nicht gefunden.',
    backToTools: 'Zurück zu allen Werkzeugen',
    tabs: {
      alla: 'Alle',
      online: 'Online',
      offline: 'Offline',
    },
    connection: {
      online: 'Internet nötig',
      offline: 'Funktioniert offline',
    },
    theme: {
      light: 'Hell',
      dark: 'Dunkel',
      highContrast: 'Hoher Kontrast',
    },
    journal: {
      heading: 'Journal',
      description: 'Was wir in jeder Version gebaut und aktualisiert haben.',
      mission: 'Die meisten Werkzeuge hier lösen Probleme, die man auch selbst lösen könnte, wenn man wüsste wie. Wir haben sie einmal gebaut und offen zugänglich gemacht, damit niemand suchen, bezahlen oder seine Dateien aus der Hand geben muss. Alles läuft auf Ihrem eigenen Gerät.',
      direction: 'Derzeit verschlanken wir. ByteBox ist auf eine große Zahl von Werkzeugen angewachsen, von denen mehrere Probleme lösen, die anderswo längst tausendfach gelöst sind. Wir gehen sie deshalb einzeln durch und behalten, was zum digitalen Gestalten gehört, und was sich ohne Vorkenntnisse verstehen lässt. Das Ziel: weniger Werkzeuge, klarer erklärt und für alle nutzbar. Mit Screenreader, allein mit der Tastatur, in mehreren Sprachen. Sicherheit und Datenschutz werden nicht nachträglich ergänzt, sondern sind eine Anforderung, die jedes Werkzeug erfüllen muss, bevor es hier Platz hat.',
      added: 'Hinzugefügt',
      changed: 'Geändert',
      fixed: 'Behoben',
    },
    allCategories: 'Alle Kategorien',
    installApp: 'App installieren',
    close: 'Schließen',
    iosStep1: 'Tippen Sie unten in Safari auf die Teilen-Schaltfläche.',
    iosStep2: 'Scrollen Sie nach unten und wählen Sie „Zum Home-Bildschirm".',
    iosStep3: 'ByteBox erscheint dann unter Ihren Apps und öffnet sich im Vollbild.',
    categories: {
      bild: 'Bilder & Fotos',
      form: 'Form & Herstellung',
      text: 'Text & Dokumente',
      ljud: 'Audio & Musik',
      spel: 'Spiele',
    },
    qrCode: {
      tabSingle: 'Ein Code',
      tabBatch: 'Mehrere Codes',
      privacyNote: 'Alles passiert lokal in Ihrem Browser. Es wird kein Text hochgeladen.',
      input: 'Text oder URL',
      placeholder: 'Text eingeben oder URL einfügen...',
      size: 'Größe',
      foreground: 'Vordergrund',
      background: 'Hintergrund',
      output: 'QR-Code',
      download: 'PNG herunterladen',
    },
    colorPalette: {
      addColor: 'Farbe hinzufügen',
      pickColor: 'Farbe wählen',
      copyColor: 'Farbcode kopieren',
      removeColor: 'Farbe entfernen',
      randomize: 'Zufällig',
      copyAll: 'Alle kopieren',
      copied: 'Kopiert!',
    },
    imageCompressor: {
      upload: 'Klicken oder Bild hierher ziehen',
      quality: 'Qualität',
      smaller: 'Kleinere Datei',
      better: 'Bessere Qualität',
      maxWidth: 'Max. Breite',
      original: 'Original',
      compressed: 'Komprimiert',
      compress: 'Komprimieren',
      processing: 'Komprimiere...',
      download: 'Herunterladen',
    },
    textToSpeech: {
      localOnly: 'Hier erscheinen nur Stimmen, die auf Ihrem Computer installiert sind. Der Text wird auf dem Gerät vorgelesen und nie irgendwohin gesendet.',
      noVoices: 'Ihr Gerät scheint keine eingebauten Stimmen zu haben. Unter Windows und macOS werden sie in den Systemeinstellungen hinzugefügt, unter Sprache oder Bedienungshilfen.',
      input: 'Text',
      placeholder: 'Text eingeben, der vorgelesen werden soll...',
      voice: 'Stimme',
      speed: 'Geschwindigkeit',
      pitch: 'Tonhöhe',
      play: 'Abspielen',
      pause: 'Pause',
      resume: 'Fortsetzen',
      stop: 'Stopp',
    },
    wordProcessor: {
      storageWarning: 'Der Text wird beim Schreiben gespeichert, aber nur in diesem Browser auf diesem Gerät. Er wandert nicht auf einen anderen Computer mit und verschwindet, wenn Sie die Browserdaten löschen. Auf iPhone und iPad entfernt Safari ihn zudem nach etwa einer Woche ohne Besuch. Sichern Sie das Dokument als PDF oder Word, wenn Sie fertig sind.',
      bold: 'Fett',
      italic: 'Kursiv',
      underline: 'Unterstrichen',
      strikethrough: 'Durchgestrichen',
      heading1: 'Überschrift 1',
      heading2: 'Überschrift 2',
      heading3: 'Überschrift 3',
      bulletList: 'Aufzählung',
      numberedList: 'Nummerierte Liste',
      quote: 'Zitat',
      link: 'Link',
      undo: 'Rückgängig',
      redo: 'Wiederholen',
      words: 'Wörter',
      characters: 'Zeichen',
      clear: 'Löschen',
      autoSaved: 'Automatisch im Browser gespeichert',
      print: 'Drucken / Als PDF speichern',
      downloadWord: 'Word herunterladen (.docx)',
      placeholder: 'Beginne hier mit deinem Dokument...',
    },
    fillPdf: {
      upload: 'Klicke oder ziehe eine PDF hierher',
      loading: 'PDF wird geöffnet…',
      changeFile: 'Datei wechseln',
      privacyNote: 'Deine PDF wird komplett lokal in deinem Browser verarbeitet und nie irgendwohin hochgeladen. Die Originaldatei wird nie überschrieben. Du lädst eine neue, ausgefüllte Datei herunter.',
      hintClick: 'Klicke irgendwo auf die Seite, um Text hinzuzufügen.',
      pageLabel: 'Seite {n} von {m}',
      zoomIn: 'Vergrößern',
      zoomOut: 'Verkleinern',
      textPlaceholder: 'Schreiben…',
      drag: 'Verschieben',
      smaller: 'Kleinerer Text',
      bigger: 'Größerer Text',
      boldToggle: 'Fett',
      deleteText: 'Löschen',
      save: 'PDF speichern',
      saving: 'Wird gespeichert…',
      savedDone: 'Fertig! Die ausgefüllte PDF wurde heruntergeladen.',
      errorType: 'Bitte wähle eine PDF-Datei.',
      errorLoad: 'Die PDF konnte nicht gelesen werden. Sie ist möglicherweise beschädigt oder passwortgeschützt.',
      errorSave: 'Beim Speichern der PDF ist etwas schiefgelaufen. Versuche es erneut.',
    },
    asciiArt: {
      upload: 'Klicken oder Bild hierher ziehen',
      widthLabel: 'Breite',
      standard: 'Standard',
      detailed: 'Detailliert',
      blocks: 'Blöcke',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    heicConverter: {
      upload: 'HEIC-Bilder (vom iPhone) hier klicken oder ablegen',
      format: 'Format',
      quality: 'Qualität',
      converting: 'Konvertiere…',
      downloadAll: 'Alle herunterladen',
      privacy: 'Alles läuft lokal in deinem Browser. Deine Bilder werden nirgendwo hochgeladen.',
      noHeic: 'Keine HEIC/HEIF-Dateien gefunden. Wähle Fotos von einem iPhone.',
      failed: 'Bei der Konvertierung ist etwas schiefgelaufen. Die Datei ist möglicherweise kein gültiges HEIC-Bild.',
    },
    metadataCleaner: {
      upload: 'Bild (z. B. ein Foto) hier klicken oder ablegen',
      privacy: 'Alles läuft lokal in deinem Browser. Dein Bild wird nirgendwo hochgeladen.',
      reading: 'Metadaten werden gelesen…',
      found: 'Dieses Bild enthält versteckte Metadaten:',
      location: 'Genauer Standort (GPS)',
      date: 'Datum',
      camera: 'Kamera',
      tags: 'Metadatenfelder insgesamt',
      none: 'Keine Metadaten in diesem Bild gefunden. Es ist bereits sauber.',
      clean: 'Metadaten entfernen',
      cleaned: 'Metadaten entfernt. Lade das saubere Bild herunter.',
      download: 'Sauberes Bild herunterladen',
    },
    underTheHood: {
      heading: 'Unter der Haube',
      lead: 'ByteBox ist eine Website ohne Server. Alles, was Sie sehen und tun, geschieht in Ihrem eigenen Browser. Hier steht, wie es gebaut ist, für alle, die es wissen möchten.',
      factTools: 'Werkzeuge',
      factLanguages: 'Sprachen',
      factRequests: 'Netzwerkanfragen',
      builtHeading: 'Gebaut mit',
      builtBody: 'Der Code ist durchgehend in TypeScript geschrieben, wodurch ein großer Teil der Fehler auffällt, bevor etwas veröffentlicht wird. Die Seite wird zu statischen Dateien gebaut und liegt auf GitHub Pages.',
      whatHeading: 'Was es tatsächlich ist',
      whatBody: 'Es gibt kein Backend. Keine Datenbank, keine Konten, keine Anmeldung und keinen Server, der etwas entgegennimmt. ByteBox ist eine Sammlung von Dateien, die einmal in Ihren Browser geladen und dort ausgeführt werden. Schalten Sie das Netz nach dem Laden ab, ändert sich nichts.',
      localHeading: 'Warum nichts gesendet wird',
      localBody: 'Das ist keine Richtlinie, sondern eine Eigenschaft des Baus. Es gibt keine einzige Netzwerkanfrage im Code. Die Sicherheitsrichtlinie der Seite erlaubt keinerlei externe Domain, und ein Test lässt jede Seite durchfallen, die einen Server kontaktiert. Würde jemand eine solche Abhängigkeit hinzufügen, würde sie gestoppt, bevor sie Sie erreicht.',
      offlineHeading: 'Funktioniert ohne Verbindung',
      offlineBody: 'Ein Service Worker legt die App nach dem ersten Besuch im Browser ab. ByteBox startet danach auch ohne Verbindung und lässt sich auf Telefon und Tablet zum Home-Bildschirm hinzufügen oder auf dem Computer als Programm installieren.',
      a11yHeading: 'Barrierefreiheit wird gemessen',
      a11yBody: 'Jede Seite wird bei jeder Änderung automatisch gegen WCAG 2.2 AA in allen drei Themen geprüft: Kontraste, Namen von Schaltflächen und Feldern, Überschriftenstruktur und Tastaturbedienung. Die wenigen Ausnahmen sind im Testcode begründet, sodass man die Begründung lesen und ihr widersprechen kann.',
      checksHeading: 'Was vor der Veröffentlichung geprüft wird',
      checksBody: 'Keine Änderung erreicht die Seite, ohne das alles zuvor bestanden zu haben. Schlägt einer dieser Punkte fehl, wird nichts veröffentlicht.',
      check1: 'Typprüfung des gesamten Codes',
      check2: 'Code-Prüfung nach gemeinsamen Regeln',
      check3: 'Unit-Tests der Datei-Parser und der Logik',
      check4: 'Browsertests, die jedes Werkzeug öffnen und die Konsole auslesen',
      check5: 'Prüfung, dass keine Seite einen externen Server kontaktiert',
      check6: 'Prüfung, dass alle sechs Sprachen dieselben Texte enthalten',
      codeHeading: 'Der Code ist offen',
      codeBody: 'Alles liegt auf GitHub unter der MIT-Lizenz. Nutzen, ändern und darauf aufbauen ist frei. Einzige Bedingung ist, dass die Copyright-Zeile mitgeht.',
      codeLink: 'Den Code auf GitHub lesen',
    },
    embroideryViewer: {
      formats: 'PES (Brother, Babylock, Bernina) · DST (Tajima und die meisten Industriemaschinen) · JEF (Janome, Elna)',
    },
    imageCropper: {
      formats: {
        free: 'Frei',
        square: 'Quadrat',
        post: 'Beitrag',
        story: 'Story',
        wide: 'Breitbild',
        photo: 'Fotoabzug',
        screen: 'Bildschirm',
      },
      upload: 'Klicken oder Bild hierher ziehen',
      free: 'Frei',
      crop: 'Zuschneiden',
      newImage: 'Neues Bild',
      download: 'Herunterladen',
    },
    cutFileGenerator: {
      upload: 'Klicken oder Bild hierher ziehen',
      rect: 'Rechteck',
      circle: 'Kreis',
      freehand: 'Freihand',
      undo: 'Rückgängig',
      clearAll: 'Alle löschen',
      strokeWidth: 'Strichbreite',
      exportSvg: 'SVG exportieren',
      includeBackground: 'Hintergrund einbeziehen',
      move: 'Verschieben',
    },
    pdfTools: {
      tabMerge: 'Zusammenführen',
      tabSign: 'Signieren',
      tabFill: 'Ausfüllen',
      privacyNote: 'Alles geschieht lokal in Ihrem Browser. Das Dokument wird nirgendwo hochgeladen.',
      upload: 'Klicken oder PDF-Dateien hierher ziehen',
      files: 'Dateien',
      merge: 'PDF-Dateien zusammenführen',
      mergeError: 'Die Dateien konnten nicht zusammengefÃ¼hrt werden. Eine davon ist mÃ¶glicherweise beschÃ¤digt oder passwortgeschÃ¼tzt.',
      merging: 'Zusammenführen...',
      download: 'Zusammengeführte PDF herunterladen',
    },
    ocrTool: {
      upload: 'Klicken oder Bild hierher ziehen',
      extract: 'Text extrahieren',
      processing: 'Analysiere...',
      result: 'Ergebnis',
      noText: 'Kein Text konnte identifiziert werden. Versuchen Sie ein Bild mit deutlichem, dunklem Text auf hellem Hintergrund.',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    backgroundRemover: {
      upload: 'Klicken oder Bild hierher ziehen',
      tolerance: 'Toleranz',
      remove: 'Hintergrund entfernen',
      processing: 'Verarbeite...',
      download: 'PNG herunterladen',
    },
    tools: {
      'png-till-svg': { name: 'Bild zu Vektor', description: 'Machen Sie aus einem Bild etwas, das Sie beliebig vergrößern können, ohne dass es unscharf wird.', hint: 'Ein gewöhnliches Bild besteht aus winzigen Quadraten und wird beim Vergrößern körnig. Ein Vektor besteht aus Linien und bleibt in jeder Größe scharf. Nötig, wenn das Bild geschnitten, graviert oder groß gedruckt werden soll.' },
      'fargpalett': { name: 'Farbpalette', description: 'Sammeln Sie die Farben für Ihr Projekt und kopieren Sie ihre Codes.', hint: 'Jede Farbe hat einen Code, zum Beispiel #3b82f6. Diesen Code geben Sie in anderen Programmen ein, um genau dieselbe Farbe zu bekommen.' },
      'qr-kod': { name: 'QR-Code', description: 'Erstellen Sie einen QR-Code, der führt, wohin Sie wollen. Einzeln oder hundert auf einmal.', hint: 'Funktioniert für Links, WLAN-Passwörter oder beliebigen Text. Farbe und Größe wählen Sie selbst.' },
      'text-till-tal': { name: 'Text zu Sprache', description: 'Schreiben Sie etwas und lassen Sie es vorlesen.', hint: 'Sie können die Stimme wählen, das Tempo und wie hoch sie klingt.' },
      'bildkomprimering': { name: 'Bild verkleinern', description: 'Machen Sie die Bilddatei kleiner, damit Sie sie senden oder hochladen können, ohne dass sie schlechter aussieht.', hint: 'Fotos vom Telefon sind oft mehrere Megabyte groß. Hier bestimmen Sie, wie viel kleiner sie werden soll, und sehen das Ergebnis sofort.' },
      'mediakonverterare': { name: 'Ton- und Videoformat ändern', description: 'Wenn die Datei sich nicht öffnen oder abspielen lässt. Wandeln Sie sie in ein Format um, das funktioniert.', hint: 'Beherrscht MP4, MP3, WAV, WebM und OGG. Sie können auch nur den Ton aus einem Video herausziehen.' },
      'brodyrkortsvisare': { name: 'Stickmuster', description: 'Öffnen Sie eine Stickdatei und sehen Sie das Muster, bevor Sie es sticken. Farben, Stichzahl und die fertige Größe.', hint: 'Liest die Formate PES, DST und JEF, die Stickmaschinen verwenden.' },
      'bildbeskärare': { name: 'Bild zuschneiden', description: 'Schneiden Sie weg, was nicht mit soll, oder machen Sie das Bild quadratisch.', hint: 'Ziehen Sie einen Rahmen über das, was bleiben soll. Die Form lässt sich festhalten, wenn das Bild feste Proportionen braucht.' },
      'bakgrundsborttagare': { name: 'Hintergrund entfernen', description: 'Lösen Sie ein Motiv aus einem Bild heraus, um es woanders zu verwenden.', hint: 'Funktioniert am besten, wenn der Hintergrund eine gleichmäßige Farbe hat. Wie viel verschwindet, bestimmen Sie selbst.' },
      'heic-till-jpg': { name: 'HEIC zu JPG', description: 'iPhone-Fotos, die der Computer nicht öffnen will. Machen Sie gewöhnliche Bilder daraus, die überall funktionieren.', hint: 'Das iPhone speichert Fotos im Format HEIC. Viele Computer und Programme können es nicht öffnen. Hier wandeln Sie sie in JPG oder PNG um.' },
      'metadata-tvatt': { name: 'Verstecktes entfernen', description: 'Ein Foto merkt sich, wo es aufgenommen wurde, wann und mit welchem Telefon. Sehen Sie, was mitkommt, und entfernen Sie es, bevor Sie das Bild teilen.', hint: 'Diese Angaben heißen Metadaten und sind beim Betrachten des Bildes unsichtbar. Beim Versenden reisen sie trotzdem mit.' },
      'video-till-gif': { name: 'Video zu GIF', description: 'Schneiden Sie ein Stück aus einem Video und machen Sie ein GIF daraus, das in Schleife läuft.', hint: 'Wählen Sie Anfang und Ende des Ausschnitts, die Bilder pro Sekunde und die Größe.' },
      'srt-redigerare': { name: 'Untertitel', description: 'Ändern Sie, was die Untertitel eines Films sagen und wann sie erscheinen.', hint: 'Arbeitet mit .srt-Dateien, dem häufigsten Untertitelformat. Sie können alle Zeilen auf einmal verschieben, wenn sie nicht synchron sind.' },
      'ljudklipp': { name: 'Ton zuschneiden', description: 'Kürzen Sie eine Aufnahme oder holen Sie genau die Stelle heraus, die Sie brauchen.', hint: 'Wählen Sie Anfang und Ende des Ausschnitts. Sie bekommen ihn als WAV-Datei zurück.' },
      'padgrid': { name: 'PadGrid', description: 'Bauen Sie Musik durch Klicken in einem Raster. Starten Sie Schleifen und legen Sie Klänge übereinander.', hint: 'Jedes Feld ist eine Schleife, die sich wiederholt. Ein Klick auf ein anderes Feld derselben Spalte wechselt die Schleife. Beim ersten Mal zeigt das Werkzeug, wie es geht.' },
      'ascii-konst': { name: 'Bild aus Buchstaben', description: 'Machen Sie aus einem Foto ein Bild aus Zeichen und Buchstaben.', hint: 'Das heißt ASCII-Kunst, so zeichneten Computer Bilder, bevor sie echte Fotos anzeigen konnten.' },
      'skarfilsgenerator': { name: 'Schnittdatei für den Laser', description: 'Zeichnen Sie die Linien, an denen die Maschine schneiden soll, und laden Sie eine Datei herunter, die sie versteht.', hint: 'Bild laden, Schnittlinien darum zeichnen und als SVG mit korrekten Maßen in Millimetern exportieren.' },
      'pdf-verktyg': { name: 'PDF-Werkzeuge', description: 'Führen Sie mehrere PDF-Dateien zusammen, unterschreiben Sie ein Dokument oder füllen Sie ein Formular aus.', hint: 'Drei häufige Aufgaben an einem Ort. Ihre Unterschrift zeichnen Sie direkt auf dem Bildschirm.' },
      'ocr': { name: 'Text aus einem Bild', description: 'Fotografieren Sie eine Seite oder machen Sie einen Screenshot. Das Werkzeug liest den Text, damit Sie ihn kopieren können.', hint: 'Funktioniert am besten bei gedrucktem Text, der gerade und scharf ist. Handschrift wird selten richtig erkannt.' },
      'traincells': { name: 'TrainCells', description: 'Bauen Sie Ihr eigenes Spiel. Zeichnen Sie Figuren, bauen Sie Level und spielen Sie sofort.', hint: 'Sie zeichnen alles selbst, Feld für Feld. Das Spiel lässt sich speichern und mit anderen teilen.' },
      'ordbehandlare': { name: 'Dokumente schreiben', description: 'Schreiben Sie Aufsätze, Berichte und Geschichten mit Überschriften, Listen und Links.', hint: 'Der Text wird beim Schreiben im Browser gespeichert, Sie verlieren ihn also nicht. Sie können ihn als PDF oder als Word-Datei sichern.', screenReason: 'Das Schreiben und Formatieren längerer Dokumente braucht eine Tastatur und genug Bildschirmplatz für die Werkzeugleiste. Auf einem kleinen Handybildschirm funktioniert das nicht gut.' },
    },
  },
  pt: {
    toolsHeading: 'Ferramentas',
    tagline: 'O ByteBox são ferramentas gratuitas para criar com imagem, som, vídeo, texto e jogos. Tudo corre no seu próprio dispositivo. Aquilo em que trabalha nunca sai do computador e o ByteBox não envia nada para lado nenhum. Sem conta, sem rastreamento.',
    newBadge: 'Novo',
    categoriesHeading: 'Categorias',
    showAll: 'Mostrar todas as ferramentas',
    common: {
      imageLoadError: 'Não foi possível ler o ficheiro de imagem. Pode estar danificado ou num formato que o navegador não suporta.',
    },
    tabletRequired: {
      title: 'Requer um ecrã maior',
      body: 'Esta ferramenta precisa de pelo menos um ecrã do tamanho de um tablet para funcionar bem. Abra-a num tablet ou computador.',
      computerTitle: 'Funciona melhor num computador',
      computerBody: 'Esta ferramenta foi feita para um computador. Abra-a num computador para a utilizar.',
      recommend: 'Esta ferramenta funciona melhor num computador. Num ecrã mais pequeno pode ficar apertada.',
      back: 'Voltar às ferramentas',
    },
    menu: 'Menu',
    devicePrompt: 'O que pode fazer no seu dispositivo?',
    minScreenLabel: {
      mobil: 'Telemóvel',
      surfplatta: 'Tablet',
      dator: 'Computador',
    },
    searchPlaceholder: 'Pesquisar ferramentas...',
    emptyState: 'Nenhuma ferramenta corresponde ao filtro.',
    comingSoon: 'Em breve',
    notFound: 'Ferramenta não encontrada.',
    backToTools: 'Voltar para todas as ferramentas',
    tabs: {
      alla: 'Todas',
      online: 'Online',
      offline: 'Offline',
    },
    connection: {
      online: 'Requer internet',
      offline: 'Funciona offline',
    },
    theme: {
      light: 'Claro',
      dark: 'Escuro',
      highContrast: 'Alto contraste',
    },
    journal: {
      heading: 'Diário',
      description: 'O que construímos e atualizamos em cada versão.',
      mission: 'A maioria das ferramentas aqui resolve problemas que se poderiam resolver sozinho, se soubesse como. Construímo-las uma vez e deixámo-las abertas, para que quem precisa delas não tenha de procurar, pagar nem entregar os seus ficheiros. Tudo corre no seu próprio dispositivo.',
      direction: 'Neste momento estamos a reduzir. O ByteBox cresceu até um grande número de ferramentas, várias das quais resolvem problemas já resolvidos em mil outros sítios. Por isso analisamo-las uma a uma e mantemos o que pertence à criação digital, e o que se percebe sem conhecimentos prévios. O objetivo é menos ferramentas, mais bem explicadas e utilizáveis por todos: com leitor de ecrã, apenas com o teclado, em várias línguas. A segurança e a privacidade não são acrescentadas depois, mas um requisito que cada ferramenta tem de cumprir antes de ter lugar aqui.',
      added: 'Adicionado',
      changed: 'Alterado',
      fixed: 'Corrigido',
    },
    allCategories: 'Todas as categorias',
    installApp: 'Instalar app',
    close: 'Fechar',
    iosStep1: 'Toque no botão Partilhar na parte inferior do Safari.',
    iosStep2: 'Deslize para baixo e escolha "Adicionar ao ecrã principal".',
    iosStep3: 'O ByteBox passa a aparecer entre as suas apps e abre em ecrã inteiro.',
    categories: {
      bild: 'Imagens e fotografias',
      form: 'Design e fabrico',
      text: 'Texto e documentos',
      ljud: 'Áudio e música',
      spel: 'Jogos',
    },
    qrCode: {
      tabSingle: 'Um código',
      tabBatch: 'Vários códigos',
      privacyNote: 'Tudo acontece localmente no seu navegador. Nenhum texto é enviado.',
      input: 'Texto ou URL',
      placeholder: 'Digite texto ou cole uma URL...',
      size: 'Tamanho',
      foreground: 'Primeiro plano',
      background: 'Fundo',
      output: 'Código QR',
      download: 'Baixar PNG',
    },
    colorPalette: {
      addColor: 'Adicionar cor',
      pickColor: 'Escolher cor',
      copyColor: 'Copiar o código da cor',
      removeColor: 'Remover a cor',
      randomize: 'Aleatório',
      copyAll: 'Copiar todos',
      copied: 'Copiado!',
    },
    imageCompressor: {
      upload: 'Clique ou arraste uma imagem aqui',
      quality: 'Qualidade',
      smaller: 'Arquivo menor',
      better: 'Melhor qualidade',
      maxWidth: 'Largura máxima',
      original: 'Original',
      compressed: 'Comprimida',
      compress: 'Comprimir',
      processing: 'Comprimindo...',
      download: 'Baixar',
    },
    textToSpeech: {
      localOnly: 'Aqui só aparecem as vozes instaladas no seu computador. O texto é lido no dispositivo e nunca é enviado para lado nenhum.',
      noVoices: 'O seu dispositivo parece não ter vozes integradas. No Windows e no macOS são adicionadas nas definições do sistema, em idioma ou acessibilidade.',
      input: 'Texto',
      placeholder: 'Escreva o texto a ser lido...',
      voice: 'Voz',
      speed: 'Velocidade',
      pitch: 'Tom',
      play: 'Reproduzir',
      pause: 'Pausa',
      resume: 'Continuar',
      stop: 'Parar',
    },
    wordProcessor: {
      storageWarning: 'O texto é guardado enquanto escreve, mas apenas neste navegador e neste dispositivo. Não o acompanha para outro computador e desaparece se limpar os dados de navegação. No iPhone e no iPad, o Safari remove-o ainda após cerca de uma semana sem visitas. Guarde o documento como PDF ou Word quando terminar.',
      bold: 'Negrito',
      italic: 'Itálico',
      underline: 'Sublinhado',
      strikethrough: 'Tachado',
      heading1: 'Título 1',
      heading2: 'Título 2',
      heading3: 'Título 3',
      bulletList: 'Lista com marcadores',
      numberedList: 'Lista numerada',
      quote: 'Citação',
      link: 'Link',
      undo: 'Desfazer',
      redo: 'Refazer',
      words: 'Palavras',
      characters: 'Caracteres',
      clear: 'Limpar',
      autoSaved: 'Salvo automaticamente no navegador',
      print: 'Imprimir / Salvar como PDF',
      downloadWord: 'Baixar Word (.docx)',
      placeholder: 'Comece a escrever seu documento aqui...',
    },
    fillPdf: {
      upload: 'Clique ou arraste um PDF aqui',
      loading: 'Abrindo PDF…',
      changeFile: 'trocar arquivo',
      privacyNote: 'O seu PDF é processado totalmente em local no seu navegador e nunca é enviado para lugar nenhum. O ficheiro original nunca é substituído. Você baixa um novo ficheiro preenchido.',
      hintClick: 'Clique em qualquer lugar da página para adicionar texto.',
      pageLabel: 'Página {n} de {m}',
      zoomIn: 'Aumentar zoom',
      zoomOut: 'Diminuir zoom',
      textPlaceholder: 'Escreva…',
      drag: 'Mover',
      smaller: 'Texto menor',
      bigger: 'Texto maior',
      boldToggle: 'Negrito',
      deleteText: 'Excluir',
      save: 'Salvar PDF',
      saving: 'Salvando…',
      savedDone: 'Pronto! O PDF preenchido foi baixado.',
      errorType: 'Escolha um arquivo PDF.',
      errorLoad: 'Não foi possível ler o PDF. Ele pode estar danificado ou protegido por senha.',
      errorSave: 'Algo deu errado ao salvar o PDF. Tente novamente.',
    },
    asciiArt: {
      upload: 'Clique ou arraste uma imagem aqui',
      widthLabel: 'Largura',
      standard: 'Padrão',
      detailed: 'Detalhado',
      blocks: 'Blocos',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    heicConverter: {
      upload: 'Clique ou arraste imagens HEIC (do iPhone) para aqui',
      format: 'Formato',
      quality: 'Qualidade',
      converting: 'A converter…',
      downloadAll: 'Descarregar tudo',
      privacy: 'Tudo funciona localmente no seu navegador. As suas imagens nunca são enviadas para lado nenhum.',
      noHeic: 'Nenhum ficheiro HEIC/HEIF encontrado. Escolha fotos de um iPhone.',
      failed: 'Algo correu mal durante a conversão. O ficheiro pode não ser uma imagem HEIC válida.',
    },
    metadataCleaner: {
      upload: 'Clique ou arraste uma imagem (p. ex. uma foto) para aqui',
      privacy: 'Tudo funciona localmente no seu navegador. A sua imagem nunca é enviada para lado nenhum.',
      reading: 'A ler metadados…',
      found: 'Esta imagem contém metadados ocultos:',
      location: 'Localização exata (GPS)',
      date: 'Data',
      camera: 'Câmara',
      tags: 'campos de metadados no total',
      none: 'Nenhum metadado encontrado nesta imagem. Já está limpa.',
      clean: 'Remover metadados',
      cleaned: 'Metadados removidos. Descarregue a imagem limpa.',
      download: 'Descarregar imagem limpa',
    },
    underTheHood: {
      heading: 'Sob o capô',
      lead: 'O ByteBox é um site sem servidor. Tudo o que vê e faz acontece no seu próprio navegador. Aqui está como foi construído, para quem quiser saber.',
      factTools: 'Ferramentas',
      factLanguages: 'Idiomas',
      factRequests: 'Pedidos de rede',
      builtHeading: 'Construído com',
      builtBody: 'O código está escrito integralmente em TypeScript, o que apanha boa parte dos erros antes de se publicar seja o que for. O site é compilado para ficheiros estáticos e está alojado no GitHub Pages.',
      whatHeading: 'O que é na realidade',
      whatBody: 'Não existe back end. Nem base de dados, nem contas, nem início de sessão, nem servidor que receba o que quer que seja. O ByteBox é um conjunto de ficheiros descarregados uma vez para o seu navegador e depois executados aí. Desligue a rede depois de a página carregar e não notará diferença.',
      localHeading: 'Porque nada é enviado',
      localBody: 'Não é uma política, é uma propriedade da construção. Não há um único pedido de rede no código. A política de segurança da página não permite qualquer domínio externo, e um teste reprova qualquer página que contacte um servidor. Se alguém acrescentasse essa dependência, seria travada antes de chegar a si.',
      offlineHeading: 'Funciona sem ligação',
      offlineBody: 'Um service worker guarda a aplicação no navegador após a primeira visita. O ByteBox arranca depois mesmo sem ligação e pode ser adicionado ao ecrã principal no telemóvel ou tablet, ou instalado como programa no computador.',
      a11yHeading: 'A acessibilidade é medida',
      a11yBody: 'Cada página é verificada automaticamente segundo a WCAG 2.2 AA nos três temas, a cada alteração: contrastes, nomes de botões e campos, estrutura de títulos e navegação por teclado. As poucas exceções estão justificadas no código de testes, para que o motivo possa ser lido e contestado.',
      checksHeading: 'O que é verificado antes de publicar',
      checksBody: 'Nenhuma alteração chega ao site sem passar primeiro por tudo isto. Se algum destes pontos falhar, nada é publicado.',
      check1: 'Verificação de tipos de todo o código',
      check2: 'Revisão de código segundo regras comuns',
      check3: 'Testes unitários dos analisadores de ficheiros e da lógica',
      check4: 'Testes em navegador que abrem cada ferramenta e leem a consola',
      check5: 'Verificação de que nenhuma página contacta um servidor externo',
      check6: 'Verificação de que os seis idiomas têm os mesmos textos',
      codeHeading: 'O código é aberto',
      codeBody: 'Está tudo no GitHub sob licença MIT. Use, altere e construa em cima livremente. O único requisito é que a linha de direitos de autor siga junto.',
      codeLink: 'Ler o código no GitHub',
    },
    embroideryViewer: {
      formats: 'PES (Brother, Babylock, Bernina) · DST (Tajima e a maioria das máquinas industriais) · JEF (Janome, Elna)',
    },
    imageCropper: {
      formats: {
        free: 'Livre',
        square: 'Quadrado',
        post: 'Publicação',
        story: 'Story',
        wide: 'Panorâmico',
        photo: 'Fotografia',
        screen: 'Ecrã',
      },
      upload: 'Clique ou arraste uma imagem aqui',
      free: 'Livre',
      crop: 'Recortar',
      newImage: 'Nova imagem',
      download: 'Baixar',
    },
    cutFileGenerator: {
      upload: 'Clique ou arraste uma imagem aqui',
      rect: 'Retângulo',
      circle: 'Círculo',
      freehand: 'Mão livre',
      undo: 'Desfazer',
      clearAll: 'Limpar tudo',
      strokeWidth: 'Espessura do traço',
      exportSvg: 'Exportar SVG',
      includeBackground: 'Incluir fundo',
      move: 'Mover',
    },
    pdfTools: {
      tabMerge: 'Mesclar',
      tabSign: 'Assinar',
      tabFill: 'Preencher',
      privacyNote: 'Tudo acontece localmente no seu navegador. O documento nunca é enviado para lugar nenhum.',
      upload: 'Clique ou arraste arquivos PDF aqui',
      files: 'arquivos',
      merge: 'Mesclar arquivos PDF',
      mergeError: 'NÃ£o foi possÃ­vel juntar os ficheiros. Algum deles pode estar danificado ou protegido por palavra-passe.',
      merging: 'Mesclando...',
      download: 'Baixar PDF mesclado',
    },
    ocrTool: {
      upload: 'Clique ou arraste uma imagem aqui',
      extract: 'Extrair texto',
      processing: 'Analisando...',
      result: 'Resultado',
      noText: 'Nenhum texto pôde ser identificado. Tente uma imagem com texto escuro e claro em fundo claro.',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    backgroundRemover: {
      upload: 'Clique ou arraste uma imagem aqui',
      tolerance: 'Tolerância',
      remove: 'Remover fundo',
      processing: 'Processando...',
      download: 'Baixar PNG',
    },
    tools: {
      'png-till-svg': { name: 'Imagem para vetor', description: 'Transforme uma imagem para a poder ampliar à vontade sem ficar desfocada.', hint: 'Uma imagem normal é feita de quadradinhos e fica granulada quando se amplia. Um vetor é feito de linhas e mantém-se nítido em qualquer tamanho. Necessário se a imagem for cortada, gravada ou impressa em grande.' },
      'fargpalett': { name: 'Paleta de cores', description: 'Junte as cores que quer usar no seu projeto e copie os códigos.', hint: 'Cada cor tem um código, por exemplo #3b82f6. É esse código que escreve noutros programas para obter exatamente a mesma cor.' },
      'qr-kod': { name: 'Código QR', description: 'Crie um código QR que leve aonde quiser. Um de cada vez, ou cem ao mesmo tempo.', hint: 'Serve para ligações, palavras-passe de wifi ou qualquer texto. Escolhe a cor e o tamanho.' },
      'text-till-tal': { name: 'Texto para voz', description: 'Escreva algo e oiça em voz alta.', hint: 'Pode escolher a voz, a velocidade de leitura e quão aguda soa.' },
      'bildkomprimering': { name: 'Encolher uma imagem', description: 'Torne o ficheiro mais pequeno para o poder enviar ou publicar, sem ficar pior.', hint: 'As fotografias do telemóvel pesam muitas vezes vários megabytes. Aqui decide quanto deve encolher e vê o resultado de imediato.' },
      'mediakonverterare': { name: 'Mudar formato de áudio e vídeo', description: 'Quando o ficheiro não abre nem toca. Converta-o num formato que funcione.', hint: 'Trata MP4, MP3, WAV, WebM e OGG. Também pode extrair apenas o som de um vídeo.' },
      'brodyrkortsvisare': { name: 'Padrões de bordado', description: 'Abra um ficheiro de bordado e veja o padrão antes de o coser. Cores, número de pontos e o tamanho final.', hint: 'Lê os formatos PES, DST e JEF, usados pelas máquinas de bordar.' },
      'bildbeskärare': { name: 'Recortar imagem', description: 'Corte o que não quer incluir, ou torne a fotografia quadrada.', hint: 'Arraste um retângulo sobre o que quer manter. Pode fixar a forma se a imagem precisar de proporções certas.' },
      'bakgrundsborttagare': { name: 'Remover o fundo', description: 'Retire um motivo de uma fotografia para o usar noutra coisa.', hint: 'Funciona melhor quando o fundo tem uma cor uniforme. É você que decide quanto desaparece.' },
      'heic-till-jpg': { name: 'HEIC para JPG', description: 'Fotografias de iPhone que o computador se recusa a abrir. Transforme-as em imagens normais que funcionam em todo o lado.', hint: 'O iPhone guarda as fotografias num formato chamado HEIC. Muitos computadores e programas não o conseguem abrir. Aqui converte-as em JPG ou PNG.' },
      'metadata-tvatt': { name: 'Limpar dados ocultos', description: 'Uma fotografia lembra-se de onde foi tirada, quando e com que telemóvel. Veja o que segue com ela, e apague antes de a partilhar.', hint: 'Essa informação chama-se metadados e não se vê ao olhar para a imagem. Mesmo assim viaja com ela quando a envia.' },
      'video-till-gif': { name: 'Vídeo para GIF', description: 'Corte um pedaço de um vídeo e transforme-o num GIF que roda em ciclo.', hint: 'Escolha onde o excerto começa e acaba, quantas imagens por segundo e que tamanho terá.' },
      'srt-redigerare': { name: 'Legendas', description: 'Altere o que dizem as legendas de um filme e quando aparecem.', hint: 'Trabalha com ficheiros .srt, o formato de legendas mais comum. Pode deslocar todas as linhas de uma vez se estiverem dessincronizadas.' },
      'ljudklipp': { name: 'Cortar áudio', description: 'Encurte uma gravação ou retire apenas a parte que quer.', hint: 'Escolha onde o excerto começa e acaba. Recebe-o como ficheiro WAV.' },
      'padgrid': { name: 'PadGrid', description: 'Componha música clicando numa grelha. Lance ciclos e sobreponha sons.', hint: 'Cada quadrado é um ciclo que se repete. Clique noutro quadrado da mesma coluna para trocar de ciclo. Da primeira vez, a ferramenta mostra como funciona.' },
      'ascii-konst': { name: 'Imagem feita de letras', description: 'Transforme uma fotografia numa imagem construída com caracteres e letras.', hint: 'Chama-se arte ASCII, e era assim que os computadores desenhavam antes de conseguirem mostrar fotografias verdadeiras.' },
      'skarfilsgenerator': { name: 'Ficheiro de corte para laser', description: 'Desenhe as linhas por onde a máquina deve cortar e descarregue um ficheiro que ela perceba.', hint: 'Carregue uma imagem, desenhe as linhas de corte à volta e exporte como SVG com as medidas certas em milímetros.' },
      'pdf-verktyg': { name: 'Ferramentas PDF', description: 'Junte vários ficheiros PDF, assine um documento ou preencha um formulário.', hint: 'Três tarefas comuns num só sítio. Desenha a sua assinatura diretamente no ecrã.' },
      'ocr': { name: 'Texto a partir de uma imagem', description: 'Fotografe uma página ou faça uma captura. A ferramenta lê o texto para o poder copiar.', hint: 'Funciona melhor com texto impresso, direito e focado. A letra à mão raramente sai bem.' },
      'traincells': { name: 'TrainCells', description: 'Construa o seu próprio jogo. Desenhe personagens, monte níveis e jogue logo a seguir.', hint: 'Desenha tudo você mesmo, quadrado a quadrado. O jogo pode ser guardado e partilhado.' },
      'ordbehandlare': { name: 'Escrever documentos', description: 'Escreva redações, relatórios e histórias com títulos, listas e ligações.', hint: 'O texto é guardado no navegador enquanto escreve, por isso não o perde. Pode guardá-lo como PDF ou como ficheiro Word.', screenReason: 'Escrever e formatar documentos mais longos exige teclado e espaço suficiente na tela para a barra de ferramentas. Não funciona bem numa tela pequena de celular.' },
    },
  },
}
