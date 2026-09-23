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
      'png-till-svg': { name: 'Bild till vektor', description: 'Gör en bild så att den kan förstoras hur mycket som helst utan att bli suddig.', hint: 'En vanlig bild är byggd av små rutor och blir grynig när du drar upp den. En vektor är byggd av linjer och håller sig skarp i vilken storlek som helst. Behövs om bilden ska skäras, graveras eller tryckas stort.' },
      'fargpalett': { name: 'Färgpalett', description: 'Plocka ihop färgerna du vill använda i ditt projekt och kopiera deras koder.', hint: 'Varje färg har en kod, till exempel #3b82f6. Koden är det du skriver in i andra program för att få exakt samma färg.' },
      'qr-kod': { name: 'QR-kod', description: 'Gör en QR-kod som leder dit du vill — en i taget, eller hundra på en gång.', hint: 'Fungerar för länkar, wifi-lösenord eller vilken text som helst. Du väljer färg och storlek.' },
      'text-till-tal': { name: 'Text till tal', description: 'Skriv något och få det uppläst.', hint: 'Du kan välja röst, hur fort den läser och hur ljus rösten är.' },
      'bildkomprimering': { name: 'Krymp en bild', description: 'Gör bildfilen mindre så den går att skicka eller lägga upp — utan att den ser sämre ut.', hint: 'Bilder från en telefon är ofta flera megabyte. Här bestämmer du hur mycket mindre den ska bli och ser resultatet direkt.' },
      'mediakonverterare': { name: 'Byt format på ljud och film', description: 'När filen inte går att öppna eller spela upp — gör om den till ett format som fungerar.', hint: 'Hanterar MP4, MP3, WAV, WebM och OGG. Du kan också plocka ut bara ljudet ur en film.' },
      'brodyrkortsvisare': { name: 'Brodyrmönster', description: 'Öppna en brodyrfil och se mönstret innan du syr det — färger, antal stygn och hur stort det blir.', hint: 'Läser filformaten PES, DST och JEF, som brodyrmaskiner använder.' },
      'bildbeskärare': { name: 'Beskär bild', description: 'Klipp bort det du inte vill ha med, eller gör bilden kvadratisk.', hint: 'Dra en ruta över det du vill behålla. Du kan låsa formen om bilden ska ha en bestämd proportion.' },
      'bakgrundsborttagare': { name: 'Ta bort bakgrund', description: 'Plocka ut ett motiv ur en bild så du kan använda det i något annat.', hint: 'Fungerar bäst när bakgrunden har en jämn färg. Du ställer själv in hur mycket som ska bort.' },
      'heic-till-jpg': { name: 'HEIC till JPG', description: 'iPhone-bilder som datorn vägrar öppna. Gör om dem till vanliga bilder som fungerar överallt.', hint: 'iPhone sparar foton i formatet HEIC. Många datorer och program kan inte öppna det. Här gör du om dem till JPG eller PNG.' },
      'metadata-tvatt': { name: 'Rensa dolt i bilder', description: 'Ett foto minns var det togs, när, och med vilken telefon. Se vad som följer med — och ta bort det innan du delar bilden.', hint: 'Informationen kallas metadata och syns inte när du tittar på bilden. Den följer ändå med när du skickar den.' },
      'video-till-gif': { name: 'Video till GIF', description: 'Klipp ut en bit av en film och gör den till en GIF som loopar.', hint: 'Välj var klippet ska börja och sluta, hur många bilder i sekunden och hur stort det ska bli.' },
      'srt-redigerare': { name: 'Undertexter', description: 'Ändra vad som står i undertexterna till en film, och när de ska visas.', hint: 'Arbetar med .srt-filer, som är det vanligaste formatet för undertexter. Du kan flytta alla texter samtidigt om de ligger fel.' },
      'ljudklipp': { name: 'Klipp ljud', description: 'Korta ner en inspelning eller plocka ut just den bit du vill ha.', hint: 'Välj var klippet ska börja och sluta. Du får ner det som en WAV-fil.' },
      'padgrid': { name: 'PadGrid', description: 'Bygg musik genom att klicka i ett rutnät — starta loopar och lägg ljud ovanpå varandra.', hint: 'Varje ruta är en slinga som spelas om och om igen. Klickar du på en annan ruta i samma kolumn byter du slinga. Verktyget visar hur det fungerar första gången.' },
      'ascii-konst': { name: 'Bild av bokstäver', description: 'Gör om ett foto till en bild byggd av tecken och bokstäver.', hint: 'Det kallas ASCII-konst och är så datorer ritade bilder innan de kunde visa riktiga foton.' },
      'skarfilsgenerator': { name: 'Skärfil till laser', description: 'Rita linjerna där maskinen ska skära, och ladda ner en fil den förstår.', hint: 'Lägg in en bild, rita skärlinjer runt den och exportera som SVG med rätt mått i millimeter.' },
      'pdf-verktyg': { name: 'PDF-verktyg', description: 'Slå ihop flera PDF-filer, skriv under ett papper, eller fyll i en blankett.', hint: 'Tre vanliga uppgifter på ett ställe. Du ritar din namnteckning direkt på skärmen.' },
      'ocr': { name: 'Text ur en bild', description: 'Fota en sida eller ta en skärmbild — verktyget läser texten så att du kan kopiera den.', hint: 'Fungerar bäst på tryckt text som är rak och i fokus. Handskrivet blir sällan rätt.' },
      'traincells': { name: 'TrainCells', description: 'Bygg ditt eget spel. Rita figurer, bygg banor och spela direkt.', hint: 'Du ritar allt själv, ruta för ruta. Spelet går att spara ner och dela med andra.' },
      'ordbehandlare': { name: 'Skriva dokument', description: 'Skriv uppsatser, rapporter och berättelser med rubriker, listor och länkar.', hint: 'Texten sparas i webbläsaren medan du skriver, så du tappar inte bort den. Du kan spara ner den som PDF eller som en Word-fil.', screenReason: 'Att skriva och formatera längre dokument kräver tangentbord och gott om skärmyta för verktygsraden — det fungerar inte bra på en liten mobilskärm.' },
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
      'png-till-svg': { name: 'Image to vector', description: 'Turn an image into something you can enlarge as much as you like without it going blurry.', hint: 'An ordinary image is built from tiny squares and turns grainy when you scale it up. A vector is built from lines and stays sharp at any size. Needed if the image is going to be cut, engraved or printed large.' },
      'fargpalett': { name: 'Colour palette', description: 'Gather the colours you want for your project and copy their codes.', hint: 'Every colour has a code, for example #3b82f6. The code is what you type into other programs to get exactly the same colour.' },
      'qr-kod': { name: 'QR code', description: 'Make a QR code that leads wherever you want — one at a time, or a hundred at once.', hint: 'Works for links, wifi passwords or any text at all. You choose the colour and size.' },
      'text-till-tal': { name: 'Text to speech', description: 'Write something and have it read aloud.', hint: 'You can choose the voice, how fast it reads and how high it sounds.' },
      'bildkomprimering': { name: 'Shrink an image', description: 'Make the image file smaller so you can send or upload it — without it looking worse.', hint: 'Photos from a phone are often several megabytes. Here you decide how much smaller it should get and see the result straight away.' },
      'mediakonverterare': { name: 'Change audio and video format', description: 'When the file will not open or play — turn it into a format that works.', hint: 'Handles MP4, MP3, WAV, WebM and OGG. You can also pull just the audio out of a video.' },
      'brodyrkortsvisare': { name: 'Embroidery patterns', description: 'Open an embroidery file and see the pattern before you stitch it — colours, stitch count and how big it will be.', hint: 'Reads the file formats PES, DST and JEF, which embroidery machines use.' },
      'bildbeskärare': { name: 'Crop an image', description: 'Cut away what you do not want, or make the picture square.', hint: 'Drag a box over what you want to keep. You can lock the shape if the image needs fixed proportions.' },
      'bakgrundsborttagare': { name: 'Remove background', description: 'Lift a subject out of a picture so you can use it in something else.', hint: 'Works best when the background is an even colour. You decide how much gets removed.' },
      'heic-till-jpg': { name: 'HEIC to JPG', description: 'iPhone photos your computer refuses to open. Turn them into ordinary images that work everywhere.', hint: 'iPhone saves photos in a format called HEIC. Many computers and programs cannot open it. Here you turn them into JPG or PNG.' },
      'metadata-tvatt': { name: 'Clear hidden data', description: 'A photo remembers where it was taken, when, and with which phone. See what comes along — and remove it before you share the picture.', hint: 'The information is called metadata and is invisible when you look at the image. It still travels with it when you send it.' },
      'video-till-gif': { name: 'Video to GIF', description: 'Cut a piece out of a video and turn it into a looping GIF.', hint: 'Choose where the clip starts and ends, how many frames per second, and how large it should be.' },
      'srt-redigerare': { name: 'Subtitles', description: 'Change what the subtitles to a film say, and when they appear.', hint: 'Works with .srt files, the most common subtitle format. You can shift every line at once if they are out of sync.' },
      'ljudklipp': { name: 'Trim audio', description: 'Shorten a recording or pull out just the part you want.', hint: 'Choose where the clip starts and ends. You get it back as a WAV file.' },
      'padgrid': { name: 'PadGrid', description: 'Build music by clicking a grid — start loops and layer sounds on top of each other.', hint: 'Each square is a loop that plays over and over. Click another square in the same column to swap loops. The tool shows you how it works the first time.' },
      'ascii-konst': { name: 'Picture made of letters', description: 'Turn a photo into an image built from characters and letters.', hint: 'It is called ASCII art, and it is how computers drew pictures before they could show real photographs.' },
      'skarfilsgenerator': { name: 'Cut file for a laser', description: 'Draw the lines where the machine should cut, and download a file it understands.', hint: 'Load an image, draw cut lines around it and export as SVG with correct measurements in millimetres.' },
      'pdf-verktyg': { name: 'PDF tools', description: 'Merge several PDF files, sign a document, or fill in a form.', hint: 'Three common jobs in one place. You draw your signature straight onto the screen.' },
      'ocr': { name: 'Text from a picture', description: 'Photograph a page or take a screenshot — the tool reads the text so you can copy it.', hint: 'Works best on printed text that is straight and in focus. Handwriting rarely comes out right.' },
      'traincells': { name: 'TrainCells', description: 'Build your own game. Draw characters, build levels and play straight away.', hint: 'You draw everything yourself, square by square. The game can be saved and shared with others.' },
      'ordbehandlare': { name: 'Write documents', description: 'Write essays, reports and stories with headings, lists and links.', hint: 'The text saves in your browser as you write, so you will not lose it. You can save it as a PDF or as a Word file.', screenReason: 'Writing and formatting longer documents needs a keyboard and enough screen space for the toolbar — it doesn\'t work well on a small phone screen.' },
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
      'png-till-svg': { name: 'Imagen a vector', description: 'Convierte una imagen para poder ampliarla todo lo que quieras sin que se vuelva borrosa.', hint: 'Una imagen normal está hecha de cuadraditos y se ve granulada al ampliarla. Un vector está hecho de líneas y se mantiene nítido a cualquier tamaño. Necesario si la imagen se va a cortar, grabar o imprimir en grande.' },
      'fargpalett': { name: 'Paleta de colores', description: 'Reúne los colores que quieres para tu proyecto y copia sus códigos.', hint: 'Cada color tiene un código, por ejemplo #3b82f6. Ese código es lo que escribes en otros programas para obtener exactamente el mismo color.' },
      'qr-kod': { name: 'Código QR', description: 'Crea un código QR que lleve a donde quieras — de uno en uno, o cien a la vez.', hint: 'Sirve para enlaces, contraseñas de wifi o cualquier texto. Tú eliges el color y el tamaño.' },
      'text-till-tal': { name: 'Texto a voz', description: 'Escribe algo y escúchalo en voz alta.', hint: 'Puedes elegir la voz, la velocidad de lectura y lo aguda que suena.' },
      'bildkomprimering': { name: 'Reducir una imagen', description: 'Haz el archivo más pequeño para poder enviarlo o subirlo — sin que se vea peor.', hint: 'Las fotos del móvil suelen pesar varios megabytes. Aquí decides cuánto debe reducirse y ves el resultado al instante.' },
      'mediakonverterare': { name: 'Cambiar formato de audio y vídeo', description: 'Cuando el archivo no se abre o no se reproduce — conviértelo en un formato que funcione.', hint: 'Admite MP4, MP3, WAV, WebM y OGG. También puedes extraer solo el audio de un vídeo.' },
      'brodyrkortsvisare': { name: 'Patrones de bordado', description: 'Abre un archivo de bordado y mira el patrón antes de coserlo — colores, número de puntadas y qué tamaño tendrá.', hint: 'Lee los formatos PES, DST y JEF, que usan las máquinas de bordar.' },
      'bildbeskärare': { name: 'Recortar imagen', description: 'Quita lo que no quieres, o haz la foto cuadrada.', hint: 'Arrastra un recuadro sobre lo que quieras conservar. Puedes fijar la forma si la imagen necesita proporciones concretas.' },
      'bakgrundsborttagare': { name: 'Quitar el fondo', description: 'Saca un motivo de una foto para usarlo en otra cosa.', hint: 'Funciona mejor cuando el fondo es de un color uniforme. Tú decides cuánto se quita.' },
      'heic-till-jpg': { name: 'HEIC a JPG', description: 'Fotos de iPhone que el ordenador se niega a abrir. Conviértelas en imágenes normales que funcionan en todas partes.', hint: 'El iPhone guarda las fotos en un formato llamado HEIC. Muchos ordenadores y programas no pueden abrirlo. Aquí las conviertes en JPG o PNG.' },
      'metadata-tvatt': { name: 'Borrar datos ocultos', description: 'Una foto recuerda dónde se tomó, cuándo y con qué teléfono. Mira qué viaja con ella — y bórralo antes de compartirla.', hint: 'Esa información se llama metadatos y no se ve al mirar la imagen. Aun así viaja con ella cuando la envías.' },
      'video-till-gif': { name: 'Vídeo a GIF', description: 'Corta un trozo de un vídeo y conviértelo en un GIF que se repite.', hint: 'Elige dónde empieza y acaba el clip, cuántas imágenes por segundo y qué tamaño tendrá.' },
      'srt-redigerare': { name: 'Subtítulos', description: 'Cambia lo que dicen los subtítulos de una película y cuándo aparecen.', hint: 'Trabaja con archivos .srt, el formato de subtítulos más común. Puedes desplazar todas las líneas a la vez si van desincronizadas.' },
      'ljudklipp': { name: 'Recortar audio', description: 'Acorta una grabación o extrae justo la parte que quieres.', hint: 'Elige dónde empieza y acaba el fragmento. Lo recibes como archivo WAV.' },
      'padgrid': { name: 'PadGrid', description: 'Crea música pulsando en una cuadrícula — lanza bucles y superpone sonidos.', hint: 'Cada casilla es un bucle que se repite. Pulsa otra casilla de la misma columna para cambiar de bucle. La herramienta te enseña cómo funciona la primera vez.' },
      'ascii-konst': { name: 'Imagen hecha de letras', description: 'Convierte una foto en una imagen construida con caracteres y letras.', hint: 'Se llama arte ASCII, y así dibujaban los ordenadores antes de poder mostrar fotografías reales.' },
      'skarfilsgenerator': { name: 'Archivo de corte para láser', description: 'Dibuja las líneas por donde debe cortar la máquina y descarga un archivo que entienda.', hint: 'Carga una imagen, dibuja las líneas de corte a su alrededor y expórtalo como SVG con las medidas correctas en milímetros.' },
      'pdf-verktyg': { name: 'Herramientas PDF', description: 'Une varios archivos PDF, firma un documento o rellena un formulario.', hint: 'Tres tareas habituales en un solo sitio. Dibujas tu firma directamente en la pantalla.' },
      'ocr': { name: 'Texto de una imagen', description: 'Fotografía una página o haz una captura — la herramienta lee el texto para que puedas copiarlo.', hint: 'Funciona mejor con texto impreso, recto y enfocado. La letra a mano casi nunca sale bien.' },
      'traincells': { name: 'TrainCells', description: 'Crea tu propio juego. Dibuja personajes, construye niveles y juega al momento.', hint: 'Lo dibujas todo tú, casilla a casilla. El juego se puede guardar y compartir con otros.' },
      'ordbehandlare': { name: 'Escribir documentos', description: 'Escribe redacciones, informes y relatos con títulos, listas y enlaces.', hint: 'El texto se guarda en el navegador mientras escribes, así que no lo pierdes. Puedes guardarlo como PDF o como archivo de Word.', screenReason: 'Escribir y dar formato a documentos más largos requiere teclado y suficiente espacio en pantalla para la barra de herramientas — no funciona bien en una pantalla de móvil pequeña.' },
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
      'png-till-svg': { name: 'Image en vecteur', description: 'Transformez une image pour pouvoir l’agrandir autant que vous voulez sans qu’elle devienne floue.', hint: 'Une image ordinaire est faite de petits carrés et devient granuleuse quand on l’agrandit. Un vecteur est fait de lignes et reste net à n’importe quelle taille. Nécessaire si l’image doit être découpée, gravée ou imprimée en grand.' },
      'fargpalett': { name: 'Palette de couleurs', description: 'Rassemblez les couleurs de votre projet et copiez leurs codes.', hint: 'Chaque couleur a un code, par exemple #3b82f6. C’est ce code que vous saisissez dans d’autres programmes pour obtenir exactement la même couleur.' },
      'qr-kod': { name: 'Code QR', description: 'Créez un code QR qui mène où vous voulez — un à la fois, ou cent d’un coup.', hint: 'Fonctionne pour des liens, des mots de passe wifi ou n’importe quel texte. Vous choisissez la couleur et la taille.' },
      'text-till-tal': { name: 'Texte en parole', description: 'Écrivez quelque chose et faites-le lire à voix haute.', hint: 'Vous pouvez choisir la voix, la vitesse de lecture et la hauteur du son.' },
      'bildkomprimering': { name: 'Réduire une image', description: 'Rendez le fichier plus léger pour pouvoir l’envoyer ou le publier — sans qu’il soit moins beau.', hint: 'Les photos d’un téléphone pèsent souvent plusieurs mégaoctets. Ici vous décidez de combien elle doit rétrécir et voyez le résultat aussitôt.' },
      'mediakonverterare': { name: 'Changer le format audio et vidéo', description: 'Quand le fichier ne s’ouvre pas ou ne se lit pas — convertissez-le dans un format qui fonctionne.', hint: 'Gère MP4, MP3, WAV, WebM et OGG. Vous pouvez aussi extraire uniquement le son d’une vidéo.' },
      'brodyrkortsvisare': { name: 'Motifs de broderie', description: 'Ouvrez un fichier de broderie et voyez le motif avant de le coudre — couleurs, nombre de points et taille finale.', hint: 'Lit les formats PES, DST et JEF, utilisés par les machines à broder.' },
      'bildbeskärare': { name: 'Recadrer une image', description: 'Enlevez ce que vous ne voulez pas garder, ou rendez la photo carrée.', hint: 'Tracez un cadre sur ce que vous voulez conserver. Vous pouvez verrouiller la forme si l’image doit avoir des proportions précises.' },
      'bakgrundsborttagare': { name: 'Supprimer l’arrière-plan', description: 'Détourez un sujet d’une photo pour l’utiliser ailleurs.', hint: 'Fonctionne mieux quand l’arrière-plan est d’une couleur unie. Vous réglez vous-même ce qui disparaît.' },
      'heic-till-jpg': { name: 'HEIC vers JPG', description: 'Des photos d’iPhone que l’ordinateur refuse d’ouvrir. Transformez-les en images ordinaires qui fonctionnent partout.', hint: 'L’iPhone enregistre les photos dans un format appelé HEIC. Beaucoup d’ordinateurs et de programmes ne peuvent pas l’ouvrir. Ici vous les convertissez en JPG ou PNG.' },
      'metadata-tvatt': { name: 'Effacer les données cachées', description: 'Une photo se souvient d’où elle a été prise, quand, et avec quel téléphone. Voyez ce qui la suit — et supprimez-le avant de la partager.', hint: 'Ces informations s’appellent des métadonnées et ne se voient pas quand on regarde l’image. Elles voyagent pourtant avec elle quand vous l’envoyez.' },
      'video-till-gif': { name: 'Vidéo en GIF', description: 'Découpez un morceau de vidéo et transformez-le en GIF qui tourne en boucle.', hint: 'Choisissez le début et la fin du extrait, le nombre d’images par seconde et la taille.' },
      'srt-redigerare': { name: 'Sous-titres', description: 'Modifiez ce que disent les sous-titres d’un film, et quand ils apparaissent.', hint: 'Travaille avec les fichiers .srt, le format de sous-titres le plus courant. Vous pouvez décaler toutes les lignes d’un coup si elles sont désynchronisées.' },
      'ljudklipp': { name: 'Découper un son', description: 'Raccourcissez un enregistrement ou extrayez juste le passage voulu.', hint: 'Choisissez le début et la fin de l’extrait. Vous le récupérez en fichier WAV.' },
      'padgrid': { name: 'PadGrid', description: 'Composez de la musique en cliquant dans une grille — lancez des boucles et superposez les sons.', hint: 'Chaque case est une boucle qui se répète. Cliquez sur une autre case de la même colonne pour changer de boucle. L’outil vous montre comment ça marche la première fois.' },
      'ascii-konst': { name: 'Image faite de lettres', description: 'Transformez une photo en image construite avec des caractères et des lettres.', hint: 'Cela s’appelle l’art ASCII : c’est ainsi que les ordinateurs dessinaient avant de pouvoir afficher de vraies photographies.' },
      'skarfilsgenerator': { name: 'Fichier de découpe laser', description: 'Tracez les lignes où la machine doit couper et téléchargez un fichier qu’elle comprend.', hint: 'Chargez une image, tracez les lignes de découpe autour et exportez en SVG avec les bonnes mesures en millimètres.' },
      'pdf-verktyg': { name: 'Outils PDF', description: 'Fusionnez plusieurs PDF, signez un document ou remplissez un formulaire.', hint: 'Trois tâches courantes au même endroit. Vous dessinez votre signature directement à l’écran.' },
      'ocr': { name: 'Texte depuis une image', description: 'Photographiez une page ou faites une capture — l’outil lit le texte pour que vous puissiez le copier.', hint: 'Fonctionne mieux sur du texte imprimé, droit et net. L’écriture à la main donne rarement un bon résultat.' },
      'traincells': { name: 'TrainCells', description: 'Créez votre propre jeu. Dessinez des personnages, construisez des niveaux et jouez aussitôt.', hint: 'Vous dessinez tout vous-même, case par case. Le jeu peut être enregistré et partagé.' },
      'ordbehandlare': { name: 'Écrire des documents', description: 'Rédigez des dissertations, des rapports et des récits avec titres, listes et liens.', hint: 'Le texte s’enregistre dans le navigateur au fil de l’écriture, vous ne le perdez donc pas. Vous pouvez l’enregistrer en PDF ou en fichier Word.', screenReason: 'Écrire et mettre en forme des documents plus longs nécessite un clavier et assez d\'espace à l\'écran pour la barre d\'outils — cela ne fonctionne pas bien sur un petit écran de téléphone.' },
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
      'png-till-svg': { name: 'Bild zu Vektor', description: 'Machen Sie aus einem Bild etwas, das Sie beliebig vergrößern können, ohne dass es unscharf wird.', hint: 'Ein gewöhnliches Bild besteht aus winzigen Quadraten und wird beim Vergrößern körnig. Ein Vektor besteht aus Linien und bleibt in jeder Größe scharf. Nötig, wenn das Bild geschnitten, graviert oder groß gedruckt werden soll.' },
      'fargpalett': { name: 'Farbpalette', description: 'Sammeln Sie die Farben für Ihr Projekt und kopieren Sie ihre Codes.', hint: 'Jede Farbe hat einen Code, zum Beispiel #3b82f6. Diesen Code geben Sie in anderen Programmen ein, um genau dieselbe Farbe zu bekommen.' },
      'qr-kod': { name: 'QR-Code', description: 'Erstellen Sie einen QR-Code, der führt, wohin Sie wollen — einzeln oder hundert auf einmal.', hint: 'Funktioniert für Links, WLAN-Passwörter oder beliebigen Text. Farbe und Größe wählen Sie selbst.' },
      'text-till-tal': { name: 'Text zu Sprache', description: 'Schreiben Sie etwas und lassen Sie es vorlesen.', hint: 'Sie können die Stimme wählen, das Tempo und wie hoch sie klingt.' },
      'bildkomprimering': { name: 'Bild verkleinern', description: 'Machen Sie die Bilddatei kleiner, damit Sie sie senden oder hochladen können — ohne dass sie schlechter aussieht.', hint: 'Fotos vom Telefon sind oft mehrere Megabyte groß. Hier bestimmen Sie, wie viel kleiner sie werden soll, und sehen das Ergebnis sofort.' },
      'mediakonverterare': { name: 'Ton- und Videoformat ändern', description: 'Wenn die Datei sich nicht öffnen oder abspielen lässt — wandeln Sie sie in ein Format um, das funktioniert.', hint: 'Beherrscht MP4, MP3, WAV, WebM und OGG. Sie können auch nur den Ton aus einem Video herausziehen.' },
      'brodyrkortsvisare': { name: 'Stickmuster', description: 'Öffnen Sie eine Stickdatei und sehen Sie das Muster, bevor Sie es sticken — Farben, Stichzahl und die fertige Größe.', hint: 'Liest die Formate PES, DST und JEF, die Stickmaschinen verwenden.' },
      'bildbeskärare': { name: 'Bild zuschneiden', description: 'Schneiden Sie weg, was nicht mit soll, oder machen Sie das Bild quadratisch.', hint: 'Ziehen Sie einen Rahmen über das, was bleiben soll. Die Form lässt sich festhalten, wenn das Bild feste Proportionen braucht.' },
      'bakgrundsborttagare': { name: 'Hintergrund entfernen', description: 'Lösen Sie ein Motiv aus einem Bild heraus, um es woanders zu verwenden.', hint: 'Funktioniert am besten, wenn der Hintergrund eine gleichmäßige Farbe hat. Wie viel verschwindet, bestimmen Sie selbst.' },
      'heic-till-jpg': { name: 'HEIC zu JPG', description: 'iPhone-Fotos, die der Computer nicht öffnen will. Machen Sie gewöhnliche Bilder daraus, die überall funktionieren.', hint: 'Das iPhone speichert Fotos im Format HEIC. Viele Computer und Programme können es nicht öffnen. Hier wandeln Sie sie in JPG oder PNG um.' },
      'metadata-tvatt': { name: 'Verstecktes entfernen', description: 'Ein Foto merkt sich, wo es aufgenommen wurde, wann und mit welchem Telefon. Sehen Sie, was mitkommt — und entfernen Sie es, bevor Sie das Bild teilen.', hint: 'Diese Angaben heißen Metadaten und sind beim Betrachten des Bildes unsichtbar. Beim Versenden reisen sie trotzdem mit.' },
      'video-till-gif': { name: 'Video zu GIF', description: 'Schneiden Sie ein Stück aus einem Video und machen Sie ein GIF daraus, das in Schleife läuft.', hint: 'Wählen Sie Anfang und Ende des Ausschnitts, die Bilder pro Sekunde und die Größe.' },
      'srt-redigerare': { name: 'Untertitel', description: 'Ändern Sie, was die Untertitel eines Films sagen und wann sie erscheinen.', hint: 'Arbeitet mit .srt-Dateien, dem häufigsten Untertitelformat. Sie können alle Zeilen auf einmal verschieben, wenn sie nicht synchron sind.' },
      'ljudklipp': { name: 'Ton zuschneiden', description: 'Kürzen Sie eine Aufnahme oder holen Sie genau die Stelle heraus, die Sie brauchen.', hint: 'Wählen Sie Anfang und Ende des Ausschnitts. Sie bekommen ihn als WAV-Datei zurück.' },
      'padgrid': { name: 'PadGrid', description: 'Bauen Sie Musik durch Klicken in einem Raster — starten Sie Schleifen und legen Sie Klänge übereinander.', hint: 'Jedes Feld ist eine Schleife, die sich wiederholt. Ein Klick auf ein anderes Feld derselben Spalte wechselt die Schleife. Beim ersten Mal zeigt das Werkzeug, wie es geht.' },
      'ascii-konst': { name: 'Bild aus Buchstaben', description: 'Machen Sie aus einem Foto ein Bild aus Zeichen und Buchstaben.', hint: 'Das heißt ASCII-Kunst — so zeichneten Computer Bilder, bevor sie echte Fotos anzeigen konnten.' },
      'skarfilsgenerator': { name: 'Schnittdatei für den Laser', description: 'Zeichnen Sie die Linien, an denen die Maschine schneiden soll, und laden Sie eine Datei herunter, die sie versteht.', hint: 'Bild laden, Schnittlinien darum zeichnen und als SVG mit korrekten Maßen in Millimetern exportieren.' },
      'pdf-verktyg': { name: 'PDF-Werkzeuge', description: 'Führen Sie mehrere PDF-Dateien zusammen, unterschreiben Sie ein Dokument oder füllen Sie ein Formular aus.', hint: 'Drei häufige Aufgaben an einem Ort. Ihre Unterschrift zeichnen Sie direkt auf dem Bildschirm.' },
      'ocr': { name: 'Text aus einem Bild', description: 'Fotografieren Sie eine Seite oder machen Sie einen Screenshot — das Werkzeug liest den Text, damit Sie ihn kopieren können.', hint: 'Funktioniert am besten bei gedrucktem Text, der gerade und scharf ist. Handschrift wird selten richtig erkannt.' },
      'traincells': { name: 'TrainCells', description: 'Bauen Sie Ihr eigenes Spiel. Zeichnen Sie Figuren, bauen Sie Level und spielen Sie sofort.', hint: 'Sie zeichnen alles selbst, Feld für Feld. Das Spiel lässt sich speichern und mit anderen teilen.' },
      'ordbehandlare': { name: 'Dokumente schreiben', description: 'Schreiben Sie Aufsätze, Berichte und Geschichten mit Überschriften, Listen und Links.', hint: 'Der Text wird beim Schreiben im Browser gespeichert, Sie verlieren ihn also nicht. Sie können ihn als PDF oder als Word-Datei sichern.', screenReason: 'Das Schreiben und Formatieren längerer Dokumente braucht eine Tastatur und genug Bildschirmplatz für die Werkzeugleiste — auf einem kleinen Handybildschirm funktioniert das nicht gut.' },
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
      'png-till-svg': { name: 'Imagem para vetor', description: 'Transforme uma imagem para a poder ampliar à vontade sem ficar desfocada.', hint: 'Uma imagem normal é feita de quadradinhos e fica granulada quando se amplia. Um vetor é feito de linhas e mantém-se nítido em qualquer tamanho. Necessário se a imagem for cortada, gravada ou impressa em grande.' },
      'fargpalett': { name: 'Paleta de cores', description: 'Junte as cores que quer usar no seu projeto e copie os códigos.', hint: 'Cada cor tem um código, por exemplo #3b82f6. É esse código que escreve noutros programas para obter exatamente a mesma cor.' },
      'qr-kod': { name: 'Código QR', description: 'Crie um código QR que leve aonde quiser — um de cada vez, ou cem ao mesmo tempo.', hint: 'Serve para ligações, palavras-passe de wifi ou qualquer texto. Escolhe a cor e o tamanho.' },
      'text-till-tal': { name: 'Texto para voz', description: 'Escreva algo e oiça em voz alta.', hint: 'Pode escolher a voz, a velocidade de leitura e quão aguda soa.' },
      'bildkomprimering': { name: 'Encolher uma imagem', description: 'Torne o ficheiro mais pequeno para o poder enviar ou publicar — sem ficar pior.', hint: 'As fotografias do telemóvel pesam muitas vezes vários megabytes. Aqui decide quanto deve encolher e vê o resultado de imediato.' },
      'mediakonverterare': { name: 'Mudar formato de áudio e vídeo', description: 'Quando o ficheiro não abre nem toca — converta-o num formato que funcione.', hint: 'Trata MP4, MP3, WAV, WebM e OGG. Também pode extrair apenas o som de um vídeo.' },
      'brodyrkortsvisare': { name: 'Padrões de bordado', description: 'Abra um ficheiro de bordado e veja o padrão antes de o coser — cores, número de pontos e o tamanho final.', hint: 'Lê os formatos PES, DST e JEF, usados pelas máquinas de bordar.' },
      'bildbeskärare': { name: 'Recortar imagem', description: 'Corte o que não quer incluir, ou torne a fotografia quadrada.', hint: 'Arraste um retângulo sobre o que quer manter. Pode fixar a forma se a imagem precisar de proporções certas.' },
      'bakgrundsborttagare': { name: 'Remover o fundo', description: 'Retire um motivo de uma fotografia para o usar noutra coisa.', hint: 'Funciona melhor quando o fundo tem uma cor uniforme. É você que decide quanto desaparece.' },
      'heic-till-jpg': { name: 'HEIC para JPG', description: 'Fotografias de iPhone que o computador se recusa a abrir. Transforme-as em imagens normais que funcionam em todo o lado.', hint: 'O iPhone guarda as fotografias num formato chamado HEIC. Muitos computadores e programas não o conseguem abrir. Aqui converte-as em JPG ou PNG.' },
      'metadata-tvatt': { name: 'Limpar dados ocultos', description: 'Uma fotografia lembra-se de onde foi tirada, quando e com que telemóvel. Veja o que segue com ela — e apague antes de a partilhar.', hint: 'Essa informação chama-se metadados e não se vê ao olhar para a imagem. Mesmo assim viaja com ela quando a envia.' },
      'video-till-gif': { name: 'Vídeo para GIF', description: 'Corte um pedaço de um vídeo e transforme-o num GIF que roda em ciclo.', hint: 'Escolha onde o excerto começa e acaba, quantas imagens por segundo e que tamanho terá.' },
      'srt-redigerare': { name: 'Legendas', description: 'Altere o que dizem as legendas de um filme e quando aparecem.', hint: 'Trabalha com ficheiros .srt, o formato de legendas mais comum. Pode deslocar todas as linhas de uma vez se estiverem dessincronizadas.' },
      'ljudklipp': { name: 'Cortar áudio', description: 'Encurte uma gravação ou retire apenas a parte que quer.', hint: 'Escolha onde o excerto começa e acaba. Recebe-o como ficheiro WAV.' },
      'padgrid': { name: 'PadGrid', description: 'Componha música clicando numa grelha — lance ciclos e sobreponha sons.', hint: 'Cada quadrado é um ciclo que se repete. Clique noutro quadrado da mesma coluna para trocar de ciclo. Da primeira vez, a ferramenta mostra como funciona.' },
      'ascii-konst': { name: 'Imagem feita de letras', description: 'Transforme uma fotografia numa imagem construída com caracteres e letras.', hint: 'Chama-se arte ASCII, e era assim que os computadores desenhavam antes de conseguirem mostrar fotografias verdadeiras.' },
      'skarfilsgenerator': { name: 'Ficheiro de corte para laser', description: 'Desenhe as linhas por onde a máquina deve cortar e descarregue um ficheiro que ela perceba.', hint: 'Carregue uma imagem, desenhe as linhas de corte à volta e exporte como SVG com as medidas certas em milímetros.' },
      'pdf-verktyg': { name: 'Ferramentas PDF', description: 'Junte vários ficheiros PDF, assine um documento ou preencha um formulário.', hint: 'Três tarefas comuns num só sítio. Desenha a sua assinatura diretamente no ecrã.' },
      'ocr': { name: 'Texto a partir de uma imagem', description: 'Fotografe uma página ou faça uma captura — a ferramenta lê o texto para o poder copiar.', hint: 'Funciona melhor com texto impresso, direito e focado. A letra à mão raramente sai bem.' },
      'traincells': { name: 'TrainCells', description: 'Construa o seu próprio jogo. Desenhe personagens, monte níveis e jogue logo a seguir.', hint: 'Desenha tudo você mesmo, quadrado a quadrado. O jogo pode ser guardado e partilhado.' },
      'ordbehandlare': { name: 'Escrever documentos', description: 'Escreva redações, relatórios e histórias com títulos, listas e ligações.', hint: 'O texto é guardado no navegador enquanto escreve, por isso não o perde. Pode guardá-lo como PDF ou como ficheiro Word.', screenReason: 'Escrever e formatar documentos mais longos exige teclado e espaço suficiente na tela para a barra de ferramentas — não funciona bem numa tela pequena de celular.' },
    },
  },
}
