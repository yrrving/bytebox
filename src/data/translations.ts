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
  privacy?: {
    externalIntro: string
    speechService: string
    speechNote: string
    ttsNote: string
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
  categories?: {
    bild: string
    text: string
    ljud: string
    produktivitet: string
    spelutveckling: string
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
  imageCropper?: {
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
    tagline: 'ByteBox är gratis verktyg för digitalt skapande — bild, ljud, video, text och spel. De flesta körs helt på din enhet: det du arbetar med lämnar aldrig datorn. Inget konto, ingen spårning. Verktyg som behöver internet säger det, och berättar vad som skickas.',
    newBadge: 'Nytt',
    categoriesHeading: 'Kategorier',
    showAll: 'Visa alla verktyg',
    common: {
      imageLoadError: 'Kunde inte läsa bildfilen. Den kan vara skadad eller i ett format webbläsaren inte stöder.',
    },
    privacy: {
      externalIntro: 'Det här verktyget kommunicerar med en extern tjänst:',
      speechService: 'din webbläsares röstmotor',
      speechNote: 'Ljudet från din mikrofon skickas till din webbläsares taltjänst (i Chrome: Google) för att tolkas. Bytebox sparar ingenting själv.',
      ttsNote: 'Det här är det enda verktyget i ByteBox där din text kan lämna enheten — och det är webbläsaren som gör det, inte ByteBox. Windows och macOS har röster inbyggda och läser upp lokalt. Chrome och Edge har även moln-röster, och väljer du en sådan skickas texten till Google respektive Microsoft för att läsas upp. Vilka röster som är lokala syns inte i listan. Vill du vara säker: klistra inte in namn, personnummer eller annat känsligt.',
    },
    tabletRequired: {
      title: 'Kräver större skärm',
      body: 'Det här verktyget behöver minst en surfplatta i skärmstorlek för att fungera bra. Öppna det på en surfplatta eller dator.',
      computerTitle: 'Fungerar bäst på dator',
      computerBody: 'Det här verktyget är gjort för en dator. Öppna det på en dator för att kunna använda det.',
      recommend: 'Det här verktyget fungerar bäst på en dator — på mindre skärm kan det bli trångt.',
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
      mission: 'Vi tror att datorer kan göra fantastiska saker — och att alla ska ha tillgång till dem. Teknik ska inte vara något man betalar för bara för att få tillgång till det andra redan byggt. Därför skapar vi dessa verktyg, fria och öppna, för alla.',
      direction: 'Just nu smalnar vi av. ByteBox har vuxit till ett stort antal verktyg, och flera av dem löser problem som redan är lösta på tusen andra ställen. Vi går därför igenom verktyg för verktyg och behåller det som hör hemma i digitalt skapande — och som går att förstå utan förkunskaper. Målet är färre verktyg, tydligare förklarade, och användbara för alla: med skärmläsare, med enbart tangentbord, på flera språk. Säkerhet och integritet är inget vi lägger till efteråt, utan ett krav vi ställer på varje verktyg innan det får finnas här.',
      added: 'Nytt',
      changed: 'Ändrat',
      fixed: 'Fixat',
    },
    allCategories: 'Alla kategorier',
    installApp: 'Installera app',
    categories: {
      bild: 'Bild & Media',
      text: 'Text & Dokument',
      ljud: 'Ljud & Tal',
      produktivitet: 'Produktivitet & Verktyg',
      spelutveckling: 'Spelutveckling',
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
    wordProcessor: {
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
      privacyNote: 'Din PDF behandlas helt lokalt i webbläsaren och laddas aldrig upp någonstans. Originalfilen skrivs aldrig över — du laddar ner en ny, ifylld fil.',
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
      none: 'Ingen metadata hittades i den här bilden — den är redan ren.',
      clean: 'Rensa metadata',
      cleaned: 'Metadata borttagen — ladda ner den rena bilden.',
      download: 'Ladda ner ren bild',
    },
    imageCropper: {
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
      'png-till-svg': { name: 'PNG till SVG', description: 'Omvandla en vanlig pixelbild (PNG) till skalbar vektorgrafik (SVG) som kan förstoras utan att bli suddig', hint: 'Konvertera pixelbilder till skalbar vektorgrafik. Välj svartvitt eller färgläge, justera tröskel och upplösning — allt sker lokalt i webbläsaren.' },
      'fargpalett': { name: 'Färgpalett', description: 'Skapa och hantera färgpaletter', hint: 'Skapa färgpaletter för dina projekt. Välj färger med en color picker, se HEX/RGB/HSL-värden och kopiera dem direkt.' },
      'qr-kod': { name: 'QR-kod', description: 'Skapa QR-koder — en i taget eller många på en gång', hint: 'Skapa QR-koder för URL:er, Wi-Fi-lösenord eller valfri text. Välj färger och storlek. Fliken \'Flera koder\' gör en hel lista på en gång, från inklistrad text eller en .txt/.csv-fil. Allt sker lokalt i webbläsaren.' },
      'text-till-tal': { name: 'Text till tal', description: 'Omvandla skriven text till talat ljud' },
      'bildkomprimering': { name: 'Bildkomprimering', description: 'Komprimera bilder utan att tappa kvalitet', hint: 'Minska filstorleken på bilder utan att tappa för mycket kvalitet. Välj komprimeringsnivå och max bredd — allt sker lokalt.' },
      'mediakonverterare': { name: 'Mediakonverterare', description: 'Konvertera mellan ljud- och videoformat — MP4, MP3, WAV, WebM, OGG och fler', hint: 'Konvertera ljud- och videofiler direkt i webbläsaren utan att ladda upp till någon server. Stöder WAV, WebM och ljudextraktion från video.' },
      'brodyrkortsvisare': { name: 'Brodyrkortsvisare', description: 'Visa och förhandsgranska brodyrmönster från PES, DST, JEF och andra format', hint: 'Ladda in brodyrifiler och se mönstret renderat med trådfärger, stygnantal och dimensioner. Stöder PES-, DST- och JEF-format.' },
      'bildbeskärare': { name: 'Bildbeskärare', description: 'Beskär bilder till önskad storlek och proportioner' },
      'bakgrundsborttagare': { name: 'Bakgrundsborttagare', description: 'Ta bort bakgrund från bilder automatiskt' },
      'heic-till-jpg': { name: 'HEIC till JPG', description: 'Konvertera iPhone-bilder (HEIC) till JPG eller PNG', hint: 'iPhone sparar foton som HEIC, som många datorer inte kan öppna. Konvertera till JPG eller PNG — allt sker lokalt, inget laddas upp.' },
      'metadata-tvatt': { name: 'Metadata-tvätt', description: 'Se och ta bort dold metadata (GPS, datum, kamera) från bilder', hint: 'Foton innehåller ofta din exakta GPS-position. Se vad som gömmer sig i bilden och ta bort allt — lokalt, inget laddas upp.' },
      'video-till-gif': { name: 'Video till GIF', description: 'Gör en animerad GIF av ett videoklipp – välj start, slut, bildrutor och storlek', hint: 'Allt sker lokalt i webbläsaren – videon laddas aldrig upp.' },
      'srt-redigerare': { name: 'SRT-redigerare', description: 'Redigera undertexter i SRT-format – ändra text, justera tider och förskjut hela filen', hint: 'Ladda upp eller klistra in en .srt-fil. Allt sker lokalt i webbläsaren.' },
      'ljudklipp': { name: 'Ljudklippare', description: 'Klipp och trimma ljudfiler direkt i webbläsaren – välj start och slut och ladda ner en WAV', hint: 'Perfekt för att korta ner en inspelning eller plocka ut ett klipp. Inget laddas upp.' },
      'padgrid': { name: 'PadGrid', description: 'Musikprototyp med rutnät — klicka pads för att spela loopar och lager ihop ljud', hint: 'En clip-launcher-inspirerad prototyp: klicka på en ruta för att spela en loop, klicka på en annan i samma kolumn för att byta, eller lägg till en helt annan kolumn för att bygga upp ett lager. Har en guidad genomgång som visar hur det funkar.' },
      'ascii-konst': { name: 'ASCII-konst', description: 'Gör om en bild till en bild byggd av bokstäver och tecken (ASCII-konst)' },
      'skarfilsgenerator': { name: 'Skärfilsgenerator', description: 'Skapa skärfiler för lasergravering — rita skärlinjer runt bilder och exportera som SVG' },
      'pdf-verktyg': { name: 'PDF-verktyg', description: 'Slå ihop, signera och fyll i PDF-filer', hint: 'Tre vanliga PDF-uppgifter på ett ställe: slå ihop flera filer till en, rita din signatur direkt på dokumentet, eller klicka dig fram och skriv text i en blankett. Allt sker lokalt i webbläsaren.' },
      'ocr': { name: 'OCR — Textigenkänning', description: 'Läs av text ur en bild eller skärmdump så du kan kopiera och redigera den (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Bygg ditt eget 2D-spel — rita brickor, bygg banor och testa direkt i webbläsaren' },
      'ordbehandlare': { name: 'Ordbehandlare', description: 'Skriv och formatera dokument direkt i webbläsaren — rubriker, listor, länkar och mer, exportera till PDF eller Word', hint: 'Ett skrivverktyg för uppsatser, rapporter och läxor. Dokumentet sparas automatiskt i webbläsaren och lämnar aldrig din dator. Exportera som PDF (utskrift) eller riktig Word-fil (.docx).', screenReason: 'Att skriva och formatera längre dokument kräver tangentbord och gott om skärmyta för verktygsraden — det fungerar inte bra på en liten mobilskärm.' },
    },
  },
  en: {
    toolsHeading: 'Tools',
    tagline: 'ByteBox is free tools for making things — images, audio, video, text and games. Most run entirely on your device: what you work on never leaves your computer. No account, no tracking. Tools that need the internet say so, and tell you what gets sent.',
    newBadge: 'New',
    categoriesHeading: 'Categories',
    showAll: 'Show all tools',
    common: {
      imageLoadError: 'Could not read the image file. It may be damaged or in a format the browser does not support.',
    },
    privacy: {
      externalIntro: 'This tool communicates with an external service:',
      speechService: 'your browser’s speech engine',
      speechNote: 'Audio from your microphone is sent to your browser\'s speech service (in Chrome: Google) to be transcribed. Bytebox itself stores nothing.',
      ttsNote: 'This is the only tool in ByteBox where your text can leave the device — and it is the browser doing it, not ByteBox. Windows and macOS have built-in voices that read aloud locally. Chrome and Edge also offer cloud voices, and choosing one sends your text to Google or Microsoft to be spoken. The list does not show which voices are local. To be safe: do not paste names, ID numbers or anything sensitive.',
    },
    tabletRequired: {
      title: 'Needs a bigger screen',
      body: 'This tool needs at least a tablet-sized screen to work well. Open it on a tablet or computer.',
      computerTitle: 'Works best on a computer',
      computerBody: 'This tool is made for a computer. Open it on a computer to use it.',
      recommend: 'This tool works best on a computer — it may feel cramped on a smaller screen.',
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
      mission: 'We believe computers can do amazing things — and that everyone should have access to them. Technology shouldn\'t be something you pay for just because someone else built it. That\'s why we create these tools, free and open, for everyone.',
      direction: 'Right now we are narrowing down. ByteBox has grown to a large number of tools, and several of them solve problems already solved in a thousand other places. So we are going through them one by one, keeping what belongs to digital creativity — and what can be understood without prior knowledge. The goal is fewer tools, explained more clearly, and usable by everyone: with a screen reader, with the keyboard alone, in several languages. Security and privacy are not added afterwards but a requirement every tool must meet before it belongs here.',
      added: 'Added',
      changed: 'Changed',
      fixed: 'Fixed',
    },
    allCategories: 'All categories',
    installApp: 'Install app',
    categories: {
      bild: 'Image & Media',
      text: 'Text & Documents',
      ljud: 'Audio & Speech',
      produktivitet: 'Productivity & Tools',
      spelutveckling: 'Game Development',
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
    wordProcessor: {
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
      privacyNote: 'Your PDF is processed entirely locally in your browser and is never uploaded anywhere. The original file is never overwritten — you download a new, filled-in file.',
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
      none: 'No metadata found in this image — it\'s already clean.',
      clean: 'Remove metadata',
      cleaned: 'Metadata removed — download the clean image.',
      download: 'Download clean image',
    },
    imageCropper: {
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
      'png-till-svg': { name: 'PNG to SVG', description: 'Turn an ordinary pixel image (PNG) into scalable vector graphics (SVG) that enlarge without going blurry', hint: 'Convert pixel images to scalable vector graphics. Choose black & white or color mode, adjust threshold and resolution — everything happens locally in your browser.' },
      'fargpalett': { name: 'Color Palette', description: 'Create and manage color palettes', hint: 'Create color palettes for your projects. Pick colors with a color picker, see HEX/RGB/HSL values and copy them directly.' },
      'qr-kod': { name: 'QR Code', description: 'Create QR codes — one at a time or many at once', hint: 'Create QR codes for URLs, Wi-Fi passwords or any text. Choose colors and size. The \'Several codes\' tab makes a whole list at once, from pasted text or a .txt/.csv file. Everything happens locally in your browser.' },
      'text-till-tal': { name: 'Text to Speech', description: 'Convert written text to spoken audio' },
      'bildkomprimering': { name: 'Image Compression', description: 'Compress images without losing quality', hint: 'Reduce image file size without losing too much quality. Choose compression level and max width — everything happens locally.' },
      'mediakonverterare': { name: 'Media Converter', description: 'Convert between audio and video formats — MP4, MP3, WAV, WebM, OGG and more', hint: 'Convert audio and video files directly in your browser without uploading to any server. Supports WAV, WebM and audio extraction from video.' },
      'brodyrkortsvisare': { name: 'Embroidery Viewer', description: 'View and preview embroidery patterns from PES, DST, JEF and other formats', hint: 'Load embroidery files and see the pattern rendered with thread colors, stitch count and dimensions. Supports PES, DST and JEF formats.' },
      'bildbeskärare': { name: 'Image Cropper', description: 'Crop images to desired size and aspect ratio' },
      'bakgrundsborttagare': { name: 'Background Remover', description: 'Automatically remove backgrounds from images' },
      'heic-till-jpg': { name: 'HEIC to JPG', description: 'Convert iPhone photos (HEIC) to JPG or PNG', hint: 'iPhones save photos as HEIC, which many computers can\'t open. Convert to JPG or PNG — all locally, nothing uploaded.' },
      'metadata-tvatt': { name: 'Metadata Cleaner', description: 'View and remove hidden metadata (GPS, date, camera) from images', hint: 'Photos often contain your exact GPS location. See what\'s hidden in the image and strip it — locally, nothing uploaded.' },
      'video-till-gif': { name: 'Video to GIF', description: 'Turn a video clip into an animated GIF – choose start, end, frame rate and size', hint: 'Everything runs locally in your browser — the video is never uploaded.' },
      'srt-redigerare': { name: 'SRT Editor', description: 'Edit SRT subtitles – change text, adjust timings and shift the whole file at once', hint: 'Upload or paste a .srt file. Everything runs locally in your browser.' },
      'ljudklipp': { name: 'Audio Trimmer', description: 'Cut and trim audio files right in your browser – pick a start and end and download a WAV', hint: 'Great for shortening a recording or grabbing a clip. Nothing is uploaded.' },
      'padgrid': { name: 'PadGrid', description: 'A grid-based music prototype — click pads to trigger loops and layer sounds together', hint: 'A clip-launcher-inspired prototype: click a pad to play a loop, click another in the same column to switch it, or add a completely different column to build up a layer. Includes a guided walkthrough of how it works.' },
      'ascii-konst': { name: 'ASCII Art', description: 'Turn a picture into an image built from letters and characters (ASCII art)' },
      'skarfilsgenerator': { name: 'Cut File Generator', description: 'Create cut files for laser engraving — draw cut lines around images and export as SVG' },
      'pdf-verktyg': { name: 'PDF Tools', description: 'Merge, sign and fill in PDF files', hint: 'Three common PDF tasks in one place: combine multiple files into one, draw your signature directly onto the document, or click around and type text into a form. Everything happens locally in your browser.' },
      'ocr': { name: 'OCR — Text Recognition', description: 'Read text out of a picture or screenshot so you can copy and edit it (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Build your own 2D game — draw tiles, design levels and play right in the browser' },
      'ordbehandlare': { name: 'Word Processor', description: 'Write and format documents right in your browser — headings, lists, links and more, export to PDF or Word', hint: 'A writing tool for essays, reports and homework. Your document is auto-saved in the browser and never leaves your computer. Export as PDF (print) or a real Word file (.docx).', screenReason: 'Writing and formatting longer documents needs a keyboard and enough screen space for the toolbar — it doesn\'t work well on a small phone screen.' },
    },
  },
  es: {
    toolsHeading: 'Herramientas',
    tagline: 'ByteBox son herramientas gratuitas para crear — imágenes, audio, vídeo, texto y juegos. La mayoría se ejecutan íntegramente en tu dispositivo: lo que trabajas nunca sale de tu ordenador. Sin cuenta, sin seguimiento. Las herramientas que necesitan internet lo indican y explican qué se envía.',
    newBadge: 'Nuevo',
    categoriesHeading: 'Categorías',
    showAll: 'Mostrar todas las herramientas',
    common: {
      imageLoadError: 'No se pudo leer el archivo de imagen. Puede estar dañado o en un formato que el navegador no admite.',
    },
    privacy: {
      externalIntro: 'Esta herramienta se comunica con un servicio externo:',
      speechService: 'el motor de voz de tu navegador',
      speechNote: 'El audio de tu micrófono se envía al servicio de voz de tu navegador (en Chrome: Google) para transcribirlo. Bytebox no guarda nada.',
      ttsNote: 'Esta es la única herramienta de ByteBox donde tu texto puede salir del dispositivo — y lo hace el navegador, no ByteBox. Windows y macOS tienen voces integradas que leen en local. Chrome y Edge ofrecen además voces en la nube, y al elegir una tu texto se envía a Google o Microsoft para ser leído. La lista no indica qué voces son locales. Para estar seguro: no pegues nombres, números de identidad ni nada sensible.',
    },
    tabletRequired: {
      title: 'Requiere una pantalla más grande',
      body: 'Esta herramienta necesita al menos una pantalla del tamaño de una tableta para funcionar bien. Ábrela en una tableta o un ordenador.',
      computerTitle: 'Funciona mejor en un ordenador',
      computerBody: 'Esta herramienta está pensada para un ordenador. Ábrela en un ordenador para usarla.',
      recommend: 'Esta herramienta funciona mejor en un ordenador — en una pantalla más pequeña puede quedar apretada.',
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
      mission: 'Creemos que las computadoras pueden hacer cosas increíbles — y que todos deberían tener acceso a ellas. La tecnología no debería ser algo por lo que se pague solo porque alguien más la construyó. Por eso creamos estas herramientas, libres y abiertas, para todos.',
      direction: 'Ahora mismo estamos reduciendo. ByteBox ha crecido hasta un gran número de herramientas, y varias resuelven problemas ya resueltos en otros mil sitios. Por eso las revisamos una a una y conservamos lo que pertenece a la creación digital — y lo que se entiende sin conocimientos previos. El objetivo es menos herramientas, mejor explicadas y utilizables por todos: con lector de pantalla, solo con el teclado, en varios idiomas. La seguridad y la privacidad no se añaden después, sino que son un requisito que cada herramienta debe cumplir antes de estar aquí.',
      added: 'Añadido',
      changed: 'Cambiado',
      fixed: 'Corregido',
    },
    allCategories: 'Todas las categorías',
    installApp: 'Instalar app',
    categories: {
      bild: 'Imagen y Medios',
      text: 'Texto y Documentos',
      ljud: 'Audio y Voz',
      produktivitet: 'Productividad y Herramientas',
      spelutveckling: 'Desarrollo de juegos',
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
    wordProcessor: {
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
      privacyNote: 'Tu PDF se procesa totalmente en local en tu navegador y nunca se sube a ningún sitio. El archivo original nunca se sobrescribe — descargas un archivo nuevo y rellenado.',
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
      none: 'No se encontraron metadatos en esta imagen — ya está limpia.',
      clean: 'Eliminar metadatos',
      cleaned: 'Metadatos eliminados — descarga la imagen limpia.',
      download: 'Descargar imagen limpia',
    },
    imageCropper: {
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
      'png-till-svg': { name: 'PNG a SVG', description: 'Convierte una imagen de píxeles normal (PNG) en gráficos vectoriales (SVG) que se amplían sin verse borrosos', hint: 'Convierte imágenes de píxeles a gráficos vectoriales escalables. Elige modo blanco y negro o color, ajusta el umbral y la resolución — todo ocurre localmente.' },
      'fargpalett': { name: 'Paleta de colores', description: 'Crear y gestionar paletas de colores', hint: 'Crea paletas de colores para tus proyectos. Elige colores con un selector, ve valores HEX/RGB/HSL y cópialos directamente.' },
      'qr-kod': { name: 'Código QR', description: 'Crea códigos QR — de uno en uno o muchos a la vez', hint: 'Crea códigos QR para URL, contraseñas de Wi-Fi o cualquier texto. Elige colores y tamaño. La pestaña \'Varios códigos\' genera una lista entera de una vez, desde texto pegado o un archivo .txt/.csv. Todo ocurre localmente en tu navegador.' },
      'text-till-tal': { name: 'Texto a voz', description: 'Convertir texto escrito en audio hablado' },
      'bildkomprimering': { name: 'Compresión de imágenes', description: 'Comprimir imágenes sin perder calidad', hint: 'Reduce el tamaño de archivo de imágenes sin perder demasiada calidad. Elige nivel de compresión y ancho máximo — todo ocurre localmente.' },
      'mediakonverterare': { name: 'Conversor de medios', description: 'Convertir entre formatos de audio y video — MP4, MP3, WAV, WebM, OGG y más', hint: 'Convierte archivos de audio y video directamente en tu navegador sin subir a ningún servidor. Soporta WAV, WebM y extracción de audio.' },
      'brodyrkortsvisare': { name: 'Visor de bordado', description: 'Ver y previsualizar patrones de bordado de formatos PES, DST, JEF y otros', hint: 'Carga archivos de bordado y ve el patrón renderizado con colores de hilo, conteo de puntadas y dimensiones.' },
      'bildbeskärare': { name: 'Recortador de imágenes', description: 'Recortar imágenes al tamaño y proporción deseados' },
      'bakgrundsborttagare': { name: 'Eliminador de fondo', description: 'Eliminar fondos de imágenes automáticamente' },
      'heic-till-jpg': { name: 'HEIC a JPG', description: 'Convierte fotos de iPhone (HEIC) a JPG o PNG', hint: 'Los iPhone guardan las fotos como HEIC, que muchos ordenadores no pueden abrir. Conviértelas a JPG o PNG — todo localmente, sin subir nada.' },
      'metadata-tvatt': { name: 'Limpiador de metadatos', description: 'Ver y eliminar metadatos ocultos (GPS, fecha, cámara) de imágenes', hint: 'Las fotos suelen contener tu ubicación GPS exacta. Mira lo que se oculta en la imagen y elimínalo — localmente, sin subir nada.' },
      'video-till-gif': { name: 'Vídeo a GIF', description: 'Convierte un clip de vídeo en un GIF animado: elige inicio, fin, fotogramas y tamaño', hint: 'Todo funciona localmente en tu navegador — el vídeo nunca se sube.' },
      'srt-redigerare': { name: 'Editor de SRT', description: 'Edita subtítulos SRT: cambia el texto, ajusta los tiempos y desplaza todo el archivo', hint: 'Sube o pega un archivo .srt. Todo funciona localmente en tu navegador.' },
      'ljudklipp': { name: 'Recortador de audio', description: 'Corta y recorta archivos de audio directamente en tu navegador: elige inicio y fin y descarga un WAV', hint: 'Ideal para acortar una grabación o extraer un fragmento. No se sube nada.' },
      'padgrid': { name: 'PadGrid', description: 'Un prototipo musical en cuadrícula — pulsa pads para reproducir bucles y capas de sonido', hint: 'Un prototipo inspirado en lanzadores de clips: pulsa un pad para reproducir un bucle, pulsa otro en la misma columna para cambiarlo, o añade una columna completamente distinta para crear una capa. Incluye una guía paso a paso de cómo funciona.' },
      'ascii-konst': { name: 'Arte ASCII', description: 'Convierte una imagen en un dibujo hecho de letras y caracteres (arte ASCII)' },
      'skarfilsgenerator': { name: 'Generador de archivos de corte', description: 'Crear archivos de corte para grabado láser — dibujar líneas de corte alrededor de imágenes y exportar como SVG' },
      'pdf-verktyg': { name: 'Herramientas PDF', description: 'Fusiona, firma y rellena archivos PDF', hint: 'Tres tareas habituales de PDF en un solo lugar: combina varios archivos en uno, dibuja tu firma directamente en el documento, o haz clic y escribe texto en un formulario. Todo ocurre localmente en tu navegador.' },
      'ocr': { name: 'OCR — Reconocimiento de texto', description: 'Extrae el texto de una imagen o captura para poder copiarlo y editarlo (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Crea tu propio juego 2D: dibuja fichas, diseña niveles y juega directamente en el navegador' },
      'ordbehandlare': { name: 'Procesador de textos', description: 'Escribe y da formato a documentos directamente en el navegador — encabezados, listas, enlaces y más, exporta a PDF o Word', hint: 'Una herramienta de escritura para ensayos, informes y deberes. Tu documento se guarda automáticamente en el navegador y nunca sale de tu ordenador. Exporta como PDF (impresión) o un archivo Word real (.docx).', screenReason: 'Escribir y dar formato a documentos más largos requiere teclado y suficiente espacio en pantalla para la barra de herramientas — no funciona bien en una pantalla de móvil pequeña.' },
    },
  },
  fr: {
    toolsHeading: 'Outils',
    tagline: 'ByteBox, ce sont des outils gratuits pour créer — images, audio, vidéo, texte et jeux. La plupart fonctionnent entièrement sur votre appareil : ce sur quoi vous travaillez ne quitte jamais votre ordinateur. Sans compte, sans suivi. Les outils qui ont besoin d’internet le disent et précisent ce qui est envoyé.',
    newBadge: 'Nouveau',
    categoriesHeading: 'Catégories',
    showAll: 'Afficher tous les outils',
    common: {
      imageLoadError: 'Impossible de lire le fichier image. Il est peut-être endommagé ou dans un format non pris en charge par le navigateur.',
    },
    privacy: {
      externalIntro: 'Cet outil communique avec un service externe :',
      speechService: 'le moteur vocal de votre navigateur',
      speechNote: 'L’audio de votre microphone est envoyé au service vocal de votre navigateur (dans Chrome : Google) pour être transcrit. Bytebox ne stocke rien lui-même.',
      ttsNote: 'C’est le seul outil de ByteBox où votre texte peut quitter l’appareil — et c’est le navigateur qui le fait, pas ByteBox. Windows et macOS disposent de voix intégrées qui lisent en local. Chrome et Edge proposent aussi des voix dans le cloud ; en choisir une envoie votre texte à Google ou Microsoft pour être lu. La liste n’indique pas quelles voix sont locales. Par précaution : ne collez ni noms, ni numéros d’identité, ni rien de sensible.',
    },
    tabletRequired: {
      title: 'Nécessite un écran plus grand',
      body: 'Cet outil nécessite au moins un écran de la taille d’une tablette pour bien fonctionner. Ouvrez-le sur une tablette ou un ordinateur.',
      computerTitle: 'Fonctionne mieux sur un ordinateur',
      computerBody: 'Cet outil est conçu pour un ordinateur. Ouvrez-le sur un ordinateur pour l’utiliser.',
      recommend: 'Cet outil fonctionne mieux sur un ordinateur — il peut être à l’étroit sur un écran plus petit.',
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
      mission: 'Nous croyons que les ordinateurs peuvent faire des choses incroyables — et que tout le monde devrait y avoir accès. La technologie ne devrait pas être quelque chose pour lequel on paie simplement parce que quelqu\'un d\'autre l\'a créée. C\'est pourquoi nous créons ces outils, libres et ouverts, pour tous.',
      direction: 'Nous resserrons actuellement le périmètre. ByteBox a grandi jusqu’à un grand nombre d’outils, dont plusieurs résolvent des problèmes déjà résolus mille fois ailleurs. Nous les passons donc en revue un par un et gardons ce qui relève de la création numérique — et ce qui se comprend sans connaissances préalables. L’objectif : moins d’outils, mieux expliqués, utilisables par tous — au lecteur d’écran, au clavier seul, en plusieurs langues. La sécurité et la confidentialité ne s’ajoutent pas après coup : c’est une exigence que chaque outil doit remplir pour avoir sa place ici.',
      added: 'Ajouté',
      changed: 'Modifié',
      fixed: 'Corrigé',
    },
    allCategories: 'Toutes les catégories',
    installApp: 'Installer l\'app',
    categories: {
      bild: 'Image et Médias',
      text: 'Texte et Documents',
      ljud: 'Audio et Parole',
      produktivitet: 'Productivité et Outils',
      spelutveckling: 'Développement de jeux',
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
    wordProcessor: {
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
      privacyNote: 'Votre PDF est traité entièrement en local dans votre navigateur et n\'est jamais envoyé nulle part. Le fichier original n\'est jamais écrasé — vous téléchargez un nouveau fichier rempli.',
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
      none: 'Aucune métadonnée trouvée dans cette image — elle est déjà propre.',
      clean: 'Supprimer les métadonnées',
      cleaned: 'Métadonnées supprimées — téléchargez l\'image propre.',
      download: 'Télécharger l\'image propre',
    },
    imageCropper: {
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
      'png-till-svg': { name: 'PNG vers SVG', description: 'Transformez une image pixel ordinaire (PNG) en graphiques vectoriels (SVG) qui s\'agrandissent sans devenir flous', hint: 'Convertissez des images pixelisées en graphiques vectoriels. Choisissez le mode noir et blanc ou couleur, ajustez le seuil et la résolution — tout se passe localement.' },
      'fargpalett': { name: 'Palette de couleurs', description: 'Créer et gérer des palettes de couleurs', hint: 'Créez des palettes de couleurs pour vos projets. Choisissez des couleurs, voyez les valeurs HEX/RGB/HSL et copiez-les directement.' },
      'qr-kod': { name: 'Code QR', description: 'Créez des codes QR — un par un ou plusieurs à la fois', hint: 'Créez des codes QR pour des URL, des mots de passe Wi-Fi ou n’importe quel texte. Choisissez les couleurs et la taille. L’onglet \'Plusieurs codes\' en génère toute une liste d’un coup, à partir de texte collé ou d’un fichier .txt/.csv. Tout se passe localement dans votre navigateur.' },
      'text-till-tal': { name: 'Texte en parole', description: 'Convertir du texte écrit en audio parlé' },
      'bildkomprimering': { name: "Compression d'images", description: 'Compresser des images sans perte de qualité', hint: 'Réduisez la taille des fichiers image sans perdre trop de qualité. Choisissez le niveau de compression et la largeur max — tout se passe localement.' },
      'mediakonverterare': { name: 'Convertisseur multimédia', description: 'Convertir entre formats audio et vidéo — MP4, MP3, WAV, WebM, OGG et plus', hint: 'Convertissez des fichiers audio et vidéo directement dans votre navigateur sans envoyer de fichiers. Supporte WAV, WebM et extraction audio.' },
      'brodyrkortsvisare': { name: 'Visionneuse de broderie', description: 'Afficher et prévisualiser des motifs de broderie aux formats PES, DST, JEF et autres', hint: 'Chargez des fichiers de broderie et voyez le motif rendu avec les couleurs de fil, le nombre de points et les dimensions.' },
      'bildbeskärare': { name: 'Rogneur d\'images', description: 'Rogner des images à la taille et aux proportions souhaitées' },
      'bakgrundsborttagare': { name: 'Suppression d\'arrière-plan', description: 'Supprimer automatiquement l\'arrière-plan des images' },
      'heic-till-jpg': { name: 'HEIC vers JPG', description: 'Convertir des photos iPhone (HEIC) en JPG ou PNG', hint: 'Les iPhone enregistrent les photos en HEIC, que beaucoup d\'ordinateurs ne peuvent pas ouvrir. Convertissez en JPG ou PNG — tout en local, rien n\'est envoyé.' },
      'metadata-tvatt': { name: 'Nettoyeur de métadonnées', description: 'Voir et supprimer les métadonnées cachées (GPS, date, appareil) des images', hint: 'Les photos contiennent souvent votre position GPS exacte. Voyez ce qui est caché dans l\'image et supprimez-le — en local, rien n\'est envoyé.' },
      'video-till-gif': { name: 'Vidéo en GIF', description: 'Transformez un clip vidéo en GIF animé : choisissez début, fin, images par seconde et taille', hint: 'Tout fonctionne en local dans votre navigateur — la vidéo n\'est jamais envoyée.' },
      'srt-redigerare': { name: 'Éditeur SRT', description: 'Modifiez des sous-titres SRT : changez le texte, ajustez les temps et décalez tout le fichier', hint: 'Importez ou collez un fichier .srt. Tout fonctionne en local dans votre navigateur.' },
      'ljudklipp': { name: 'Découpe audio', description: 'Coupez et rognez des fichiers audio directement dans votre navigateur : choisissez le début et la fin et téléchargez un WAV', hint: 'Parfait pour raccourcir un enregistrement ou extraire un extrait. Rien n\'est envoyé.' },
      'padgrid': { name: 'PadGrid', description: 'Un prototype musical en grille — cliquez sur les pads pour déclencher des boucles et superposer des sons', hint: 'Un prototype inspiré des lanceurs de clips : cliquez sur un pad pour jouer une boucle, sur un autre dans la même colonne pour la remplacer, ou ajoutez une colonne différente pour superposer une couche. Comprend une visite guidée de son fonctionnement.' },
      'ascii-konst': { name: 'Art ASCII', description: 'Transformez une image en dessin composé de lettres et de caractères (art ASCII)' },
      'skarfilsgenerator': { name: 'Générateur de fichiers de découpe', description: 'Créer des fichiers de découpe pour la gravure laser — dessiner des lignes de découpe autour des images et exporter en SVG' },
      'pdf-verktyg': { name: 'Outils PDF', description: 'Fusionnez, signez et remplissez des fichiers PDF', hint: 'Trois tâches PDF courantes réunies : combinez plusieurs fichiers en un seul, dessinez votre signature directement sur le document, ou cliquez pour écrire du texte dans un formulaire. Tout se passe localement dans votre navigateur.' },
      'ocr': { name: 'OCR — Reconnaissance de texte', description: 'Extrayez le texte d\'une image ou capture d\'écran pour le copier et le modifier (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Créez votre propre jeu 2D — dessinez des tuiles, concevez des niveaux et jouez directement dans le navigateur' },
      'ordbehandlare': { name: 'Traitement de texte', description: 'Écrivez et mettez en forme des documents directement dans le navigateur — titres, listes, liens et plus, exportez en PDF ou Word', hint: 'Un outil d\'écriture pour dissertations, rapports et devoirs. Votre document est sauvegardé automatiquement dans le navigateur et ne quitte jamais votre ordinateur. Exportez en PDF (impression) ou en vrai fichier Word (.docx).', screenReason: 'Écrire et mettre en forme des documents plus longs nécessite un clavier et assez d\'espace à l\'écran pour la barre d\'outils — cela ne fonctionne pas bien sur un petit écran de téléphone.' },
    },
  },
  de: {
    toolsHeading: 'Werkzeuge',
    tagline: 'ByteBox sind kostenlose Werkzeuge zum Gestalten — Bilder, Audio, Video, Text und Spiele. Die meisten laufen vollständig auf Ihrem Gerät: Woran Sie arbeiten, verlässt Ihren Computer nie. Kein Konto, kein Tracking. Werkzeuge, die das Internet brauchen, sagen es und nennen, was gesendet wird.',
    newBadge: 'Neu',
    categoriesHeading: 'Kategorien',
    showAll: 'Alle Werkzeuge anzeigen',
    common: {
      imageLoadError: 'Die Bilddatei konnte nicht gelesen werden. Sie ist möglicherweise beschädigt oder in einem Format, das der Browser nicht unterstützt.',
    },
    privacy: {
      externalIntro: 'Dieses Werkzeug kommuniziert mit einem externen Dienst:',
      speechService: 'die Sprachausgabe Ihres Browsers',
      speechNote: 'Das Audio deines Mikrofons wird an den Sprachdienst deines Browsers (in Chrome: Google) gesendet, um transkribiert zu werden. Bytebox selbst speichert nichts.',
      ttsNote: 'Dies ist das einzige Werkzeug in ByteBox, bei dem Ihr Text das Gerät verlassen kann — und das tut der Browser, nicht ByteBox. Windows und macOS haben eingebaute Stimmen, die lokal vorlesen. Chrome und Edge bieten zusätzlich Cloud-Stimmen; wählen Sie eine davon, wird Ihr Text zum Vorlesen an Google bzw. Microsoft gesendet. Die Liste zeigt nicht, welche Stimmen lokal sind. Sicherheitshalber: Fügen Sie keine Namen, Personennummern oder andere sensible Angaben ein.',
    },
    tabletRequired: {
      title: 'Benötigt einen größeren Bildschirm',
      body: 'Dieses Werkzeug benötigt mindestens einen tabletgroßen Bildschirm, um gut zu funktionieren. Öffne es auf einem Tablet oder Computer.',
      computerTitle: 'Funktioniert am besten am Computer',
      computerBody: 'Dieses Werkzeug ist für einen Computer gemacht. Öffne es an einem Computer, um es zu verwenden.',
      recommend: 'Dieses Werkzeug funktioniert am besten am Computer — auf einem kleineren Bildschirm kann es eng werden.',
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
      mission: 'Wir glauben, dass Computer erstaunliche Dinge tun können — und dass alle Zugang dazu haben sollten. Technologie sollte nicht etwas sein, wofür man bezahlt, nur weil jemand anderes sie gebaut hat. Deshalb schaffen wir diese Werkzeuge, frei und offen, für alle.',
      direction: 'Derzeit verschlanken wir. ByteBox ist auf eine große Zahl von Werkzeugen angewachsen, von denen mehrere Probleme lösen, die anderswo längst tausendfach gelöst sind. Wir gehen sie deshalb einzeln durch und behalten, was zum digitalen Gestalten gehört — und was sich ohne Vorkenntnisse verstehen lässt. Das Ziel: weniger Werkzeuge, klarer erklärt und für alle nutzbar — mit Screenreader, allein mit der Tastatur, in mehreren Sprachen. Sicherheit und Datenschutz werden nicht nachträglich ergänzt, sondern sind eine Anforderung, die jedes Werkzeug erfüllen muss, bevor es hier Platz hat.',
      added: 'Hinzugefügt',
      changed: 'Geändert',
      fixed: 'Behoben',
    },
    allCategories: 'Alle Kategorien',
    installApp: 'App installieren',
    categories: {
      bild: 'Bild & Medien',
      text: 'Text & Dokumente',
      ljud: 'Audio & Sprache',
      produktivitet: 'Produktivität & Werkzeuge',
      spelutveckling: 'Spieleentwicklung',
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
    wordProcessor: {
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
      privacyNote: 'Deine PDF wird komplett lokal in deinem Browser verarbeitet und nie irgendwohin hochgeladen. Die Originaldatei wird nie überschrieben — du lädst eine neue, ausgefüllte Datei herunter.',
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
      none: 'Keine Metadaten in diesem Bild gefunden — es ist bereits sauber.',
      clean: 'Metadaten entfernen',
      cleaned: 'Metadaten entfernt — lade das saubere Bild herunter.',
      download: 'Sauberes Bild herunterladen',
    },
    imageCropper: {
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
      'png-till-svg': { name: 'PNG zu SVG', description: 'Wandle ein normales Pixelbild (PNG) in skalierbare Vektorgrafik (SVG) um, die sich ohne Unschärfe vergrößern lässt', hint: 'Konvertieren Sie Pixelbilder in skalierbare Vektorgrafiken. Wählen Sie Schwarz-Weiß oder Farbmodus, passen Sie Schwellenwert und Auflösung an — alles geschieht lokal.' },
      'fargpalett': { name: 'Farbpalette', description: 'Farbpaletten erstellen und verwalten', hint: 'Erstellen Sie Farbpaletten für Ihre Projekte. Wählen Sie Farben, sehen Sie HEX/RGB/HSL-Werte und kopieren Sie sie direkt.' },
      'qr-kod': { name: 'QR-Code', description: 'QR-Codes erstellen — einzeln oder viele auf einmal', hint: 'Erstellen Sie QR-Codes für URLs, WLAN-Passwörter oder beliebigen Text. Farben und Größe frei wählbar. Der Tab \'Mehrere Codes\' erzeugt eine ganze Liste auf einmal, aus eingefügtem Text oder einer .txt/.csv-Datei. Alles passiert lokal im Browser.' },
      'text-till-tal': { name: 'Text zu Sprache', description: 'Geschriebenen Text in gesprochenes Audio umwandeln' },
      'bildkomprimering': { name: 'Bildkomprimierung', description: 'Bilder ohne Qualitätsverlust komprimieren', hint: 'Reduzieren Sie die Dateigröße von Bildern ohne zu viel Qualitätsverlust. Wählen Sie Komprimierungsstufe und maximale Breite — alles geschieht lokal.' },
      'mediakonverterare': { name: 'Medienkonverter', description: 'Zwischen Audio- und Videoformaten konvertieren — MP4, MP3, WAV, WebM, OGG und mehr', hint: 'Konvertieren Sie Audio- und Videodateien direkt im Browser ohne Upload. Unterstützt WAV, WebM und Audioextraktion aus Videos.' },
      'brodyrkortsvisare': { name: 'Stickdatei-Betrachter', description: 'Stickmuster aus PES, DST, JEF und anderen Formaten anzeigen und vorab ansehen', hint: 'Laden Sie Stickdateien und sehen Sie das Muster mit Fadenfarben, Stichanzahl und Abmessungen gerendert.' },
      'bildbeskärare': { name: 'Bildzuschnitt', description: 'Bilder auf gewünschte Größe und Proportionen zuschneiden' },
      'bakgrundsborttagare': { name: 'Hintergrundentferner', description: 'Hintergründe automatisch aus Bildern entfernen' },
      'heic-till-jpg': { name: 'HEIC zu JPG', description: 'iPhone-Fotos (HEIC) in JPG oder PNG umwandeln', hint: 'iPhones speichern Fotos als HEIC, das viele Computer nicht öffnen können. In JPG oder PNG umwandeln — alles lokal, nichts wird hochgeladen.' },
      'metadata-tvatt': { name: 'Metadaten-Reiniger', description: 'Versteckte Metadaten (GPS, Datum, Kamera) aus Bildern anzeigen und entfernen', hint: 'Fotos enthalten oft deinen genauen GPS-Standort. Sieh, was im Bild versteckt ist, und entferne es — lokal, nichts wird hochgeladen.' },
      'video-till-gif': { name: 'Video zu GIF', description: 'Verwandle ein Videoclip in ein animiertes GIF – wähle Anfang, Ende, Bildrate und Größe', hint: 'Alles läuft lokal im Browser — das Video wird nie hochgeladen.' },
      'srt-redigerare': { name: 'SRT-Editor', description: 'Bearbeite SRT-Untertitel – ändere Text, passe Zeiten an und verschiebe die ganze Datei', hint: 'Lade eine .srt-Datei hoch oder füge sie ein. Alles läuft lokal im Browser.' },
      'ljudklipp': { name: 'Audio-Schneider', description: 'Schneide und kürze Audiodateien direkt im Browser – wähle Anfang und Ende und lade eine WAV herunter', hint: 'Perfekt, um eine Aufnahme zu kürzen oder einen Ausschnitt herauszunehmen. Nichts wird hochgeladen.' },
      'padgrid': { name: 'PadGrid', description: 'Ein rasterbasierter Musik-Prototyp — Pads antippen, um Loops abzuspielen und Klangebenen zu schichten', hint: 'Ein von Clip-Launchern inspirierter Prototyp: Ein Pad antippen, um einen Loop abzuspielen, ein anderes in derselben Spalte für einen Wechsel, oder eine ganz andere Spalte hinzufügen, um eine Ebene aufzubauen. Enthält eine geführte Tour durch die Funktionsweise.' },
      'ascii-konst': { name: 'ASCII-Kunst', description: 'Verwandle ein Bild in ein aus Buchstaben und Zeichen gebautes Bild (ASCII-Kunst)' },
      'skarfilsgenerator': { name: 'Schnittdatei-Generator', description: 'Schnittdateien für Lasergravur erstellen — Schnittlinien um Bilder zeichnen und als SVG exportieren' },
      'pdf-verktyg': { name: 'PDF-Werkzeuge', description: 'PDF-Dateien zusammenführen, signieren und ausfüllen', hint: 'Drei gängige PDF-Aufgaben an einem Ort: mehrere Dateien zu einer zusammenführen, Ihre Unterschrift direkt auf das Dokument zeichnen, oder Text per Klick in ein Formular eintragen. Alles geschieht lokal in Ihrem Browser.' },
      'ocr': { name: 'OCR — Texterkennung', description: 'Lies Text aus einem Bild oder Screenshot heraus, damit du ihn kopieren und bearbeiten kannst (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Baue dein eigenes 2D-Spiel — zeichne Kacheln, gestalte Level und spiele direkt im Browser' },
      'ordbehandlare': { name: 'Textverarbeitung', description: 'Schreibe und formatiere Dokumente direkt im Browser — Überschriften, Listen, Links und mehr, exportiere als PDF oder Word', hint: 'Ein Schreibwerkzeug für Aufsätze, Berichte und Hausaufgaben. Dein Dokument wird automatisch im Browser gespeichert und verlässt nie deinen Computer. Exportiere als PDF (Druck) oder echte Word-Datei (.docx).', screenReason: 'Das Schreiben und Formatieren längerer Dokumente braucht eine Tastatur und genug Bildschirmplatz für die Werkzeugleiste — auf einem kleinen Handybildschirm funktioniert das nicht gut.' },
    },
  },
  pt: {
    toolsHeading: 'Ferramentas',
    tagline: 'O ByteBox são ferramentas gratuitas para criar — imagens, áudio, vídeo, texto e jogos. A maioria corre inteiramente no seu dispositivo: aquilo em que trabalha nunca sai do computador. Sem conta, sem rastreamento. As ferramentas que precisam de internet dizem-no e explicam o que é enviado.',
    newBadge: 'Novo',
    categoriesHeading: 'Categorias',
    showAll: 'Mostrar todas as ferramentas',
    common: {
      imageLoadError: 'Não foi possível ler o ficheiro de imagem. Pode estar danificado ou num formato que o navegador não suporta.',
    },
    privacy: {
      externalIntro: 'Esta ferramenta comunica com um serviço externo:',
      speechService: 'o motor de voz do seu navegador',
      speechNote: 'O áudio do seu microfone é enviado para o serviço de voz do seu navegador (no Chrome: Google) para ser transcrito. O Bytebox não guarda nada.',
      ttsNote: 'Esta é a única ferramenta do ByteBox onde o seu texto pode sair do dispositivo — e é o navegador que o faz, não o ByteBox. O Windows e o macOS têm vozes integradas que leem localmente. O Chrome e o Edge oferecem também vozes na nuvem e, ao escolher uma, o seu texto é enviado para a Google ou a Microsoft para ser lido. A lista não mostra quais vozes são locais. Por precaução: não cole nomes, números de identificação nem nada sensível.',
    },
    tabletRequired: {
      title: 'Requer um ecrã maior',
      body: 'Esta ferramenta precisa de pelo menos um ecrã do tamanho de um tablet para funcionar bem. Abra-a num tablet ou computador.',
      computerTitle: 'Funciona melhor num computador',
      computerBody: 'Esta ferramenta foi feita para um computador. Abra-a num computador para a utilizar.',
      recommend: 'Esta ferramenta funciona melhor num computador — num ecrã mais pequeno pode ficar apertada.',
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
      mission: 'Acreditamos que os computadores podem fazer coisas incríveis — e que todos devem ter acesso a elas. A tecnologia não deveria ser algo pelo qual se paga apenas porque alguém a construiu. Por isso criamos estas ferramentas, livres e abertas, para todos.',
      direction: 'Neste momento estamos a reduzir. O ByteBox cresceu até um grande número de ferramentas, várias das quais resolvem problemas já resolvidos em mil outros sítios. Por isso analisamo-las uma a uma e mantemos o que pertence à criação digital — e o que se percebe sem conhecimentos prévios. O objetivo é menos ferramentas, mais bem explicadas e utilizáveis por todos: com leitor de ecrã, apenas com o teclado, em várias línguas. A segurança e a privacidade não são acrescentadas depois, mas um requisito que cada ferramenta tem de cumprir antes de ter lugar aqui.',
      added: 'Adicionado',
      changed: 'Alterado',
      fixed: 'Corrigido',
    },
    allCategories: 'Todas as categorias',
    installApp: 'Instalar app',
    categories: {
      bild: 'Imagem e Midia',
      text: 'Texto e Documentos',
      ljud: 'Audio e Fala',
      produktivitet: 'Produtividade e Ferramentas',
      spelutveckling: 'Desenvolvimento de jogos',
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
    wordProcessor: {
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
      privacyNote: 'O seu PDF é processado totalmente em local no seu navegador e nunca é enviado para lugar nenhum. O ficheiro original nunca é substituído — você baixa um novo ficheiro preenchido.',
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
      none: 'Nenhum metadado encontrado nesta imagem — já está limpa.',
      clean: 'Remover metadados',
      cleaned: 'Metadados removidos — descarregue a imagem limpa.',
      download: 'Descarregar imagem limpa',
    },
    imageCropper: {
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
      'png-till-svg': { name: 'PNG para SVG', description: 'Converta uma imagem de pixels normal (PNG) em gráficos vetoriais (SVG) que aumentam sem ficar desfocados', hint: 'Converta imagens de pixels para gráficos vetoriais escaláveis. Escolha modo preto e branco ou cor, ajuste o limiar e a resolução — tudo acontece localmente.' },
      'fargpalett': { name: 'Paleta de cores', description: 'Criar e gerenciar paletas de cores', hint: 'Crie paletas de cores para seus projetos. Escolha cores com um seletor, veja valores HEX/RGB/HSL e copie-os diretamente.' },
      'qr-kod': { name: 'Código QR', description: 'Crie códigos QR — um de cada vez ou muitos ao mesmo tempo', hint: 'Crie códigos QR para URLs, palavras-passe de Wi-Fi ou qualquer texto. Escolha cores e tamanho. O separador \'Vários códigos\' gera uma lista inteira de uma vez, a partir de texto colado ou de um ficheiro .txt/.csv. Tudo acontece localmente no navegador.' },
      'text-till-tal': { name: 'Texto para fala', description: 'Converter texto escrito em áudio falado' },
      'bildkomprimering': { name: 'Compressão de imagens', description: 'Comprimir imagens sem perder qualidade', hint: 'Reduza o tamanho de arquivos de imagem sem perder muita qualidade. Escolha nível de compressão e largura máxima — tudo acontece localmente.' },
      'mediakonverterare': { name: 'Conversor de mídia', description: 'Converter entre formatos de áudio e vídeo — MP4, MP3, WAV, WebM, OGG e mais', hint: 'Converta arquivos de áudio e vídeo diretamente no navegador sem enviar a nenhum servidor. Suporta WAV, WebM e extração de áudio.' },
      'brodyrkortsvisare': { name: 'Visualizador de bordado', description: 'Visualizar e pré-visualizar padrões de bordado em formatos PES, DST, JEF e outros', hint: 'Carregue arquivos de bordado e veja o padrão renderizado com cores de linha, contagem de pontos e dimensões.' },
      'bildbeskärare': { name: 'Recortador de imagens', description: 'Recortar imagens no tamanho e proporção desejados' },
      'bakgrundsborttagare': { name: 'Removedor de fundo', description: 'Remover fundos de imagens automaticamente' },
      'heic-till-jpg': { name: 'HEIC para JPG', description: 'Converter fotos de iPhone (HEIC) para JPG ou PNG', hint: 'Os iPhones guardam fotos como HEIC, que muitos computadores não conseguem abrir. Converta para JPG ou PNG — tudo localmente, nada é enviado.' },
      'metadata-tvatt': { name: 'Limpador de metadados', description: 'Ver e remover metadados ocultos (GPS, data, câmara) de imagens', hint: 'As fotos contêm frequentemente a sua localização GPS exata. Veja o que está oculto na imagem e remova tudo — localmente, nada é enviado.' },
      'video-till-gif': { name: 'Vídeo para GIF', description: 'Transforme um clipe de vídeo num GIF animado – escolha início, fim, fotogramas e tamanho', hint: 'Tudo funciona localmente no navegador — o vídeo nunca é enviado.' },
      'srt-redigerare': { name: 'Editor de SRT', description: 'Edite legendas SRT – altere o texto, ajuste os tempos e desloque o ficheiro inteiro', hint: 'Carregue ou cole um ficheiro .srt. Tudo funciona localmente no navegador.' },
      'ljudklipp': { name: 'Cortador de áudio', description: 'Corte e apare ficheiros de áudio diretamente no navegador – escolha o início e o fim e descarregue um WAV', hint: 'Ideal para encurtar uma gravação ou extrair um excerto. Nada é enviado.' },
      'padgrid': { name: 'PadGrid', description: 'Um protótipo musical em grelha — clica nos pads para tocar loops e sobrepor sons', hint: 'Um protótipo inspirado em lançadores de clips: clica num pad para tocar um loop, noutro na mesma coluna para o trocar, ou adiciona uma coluna totalmente diferente para construir uma camada. Inclui uma visita guiada de como funciona.' },
      'ascii-konst': { name: 'Arte ASCII', description: 'Transforme uma imagem num desenho feito de letras e caracteres (arte ASCII)' },
      'skarfilsgenerator': { name: 'Gerador de arquivo de corte', description: 'Criar arquivos de corte para gravação a laser — desenhar linhas de corte ao redor de imagens e exportar como SVG' },
      'pdf-verktyg': { name: 'Ferramentas PDF', description: 'Mescle, assine e preencha arquivos PDF', hint: 'Três tarefas comuns de PDF num só lugar: combine vários arquivos num só, desenhe a sua assinatura diretamente no documento, ou clique para escrever texto num formulário. Tudo acontece localmente no seu navegador.' },
      'ocr': { name: 'OCR — Reconhecimento de texto', description: 'Extraia o texto de uma imagem ou captura de ecrã para o poder copiar e editar (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Crie seu próprio jogo 2D — desenhe blocos, monte fases e jogue direto no navegador' },
      'ordbehandlare': { name: 'Processador de texto', description: 'Escreva e formate documentos direto no navegador — títulos, listas, links e mais, exporte para PDF ou Word', hint: 'Uma ferramenta de escrita para redações, relatórios e lições de casa. Seu documento é salvo automaticamente no navegador e nunca sai do seu computador. Exporte como PDF (impressão) ou um arquivo Word real (.docx).', screenReason: 'Escrever e formatar documentos mais longos exige teclado e espaço suficiente na tela para a barra de ferramentas — não funciona bem numa tela pequena de celular.' },
    },
  },
}
