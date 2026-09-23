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
    sendsLabel: string
    sendsIp: string
    sendsSsl: string
    sendsDns: string
    sendsHeaders: string
    sendsBandwidth: string
    headersWarning: string
    externalOutro: string
    translatorWarning: string
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
    kod: string
    natverk: string
    berakning: string
    produktivitet: string
    spelutveckling: string
  }
  hashGenerator?: {
    input: string
    placeholder: string
    copy: string
    copied: string
  }
  base64?: {
    encode: string
    decode: string
    textInput: string
    textOutput: string
    encodePlaceholder: string
    decodePlaceholder: string
    copy: string
    copied: string
    swap: string
    invalidBase64: string
    encodingError: string
  }
  jsonFormatter?: {
    input: string
    output: string
    placeholder: string
    format: string
    minify: string
    copy: string
    copied: string
    clear: string
    indent: string
    error: string
  }
  regexTester?: {
    pattern: string
    patternPlaceholder: string
    flags: string
    testString: string
    testPlaceholder: string
    result: string
    matches: string
    groups: string
    index: string
    copy: string
    copied: string
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
  unitConverter?: {
    length: string
    weight: string
    temperature: string
    speed: string
    data: string
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
  markdownPreview?: {
    edit: string
    split: string
    preview: string
    copyHtml: string
    copied: string
    clear: string
    placeholder: string
    bold?: string
    italic?: string
    strikethrough?: string
    heading?: string
    quote?: string
    code?: string
    link?: string
    bulletList?: string
    numberedList?: string
    table?: string
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
  fileAnalyzer?: {
    upload: string
    anyFile: string
    fileName: string
    fileSize: string
    fileType: string
    extension: string
    modified: string
    dimensions: string
    preview: string
    contentPreview: string
  }
  ipInfo?: {
    ipAddress: string
    city: string
    region: string
    country: string
    isp: string
    timezone: string
    coordinates: string
    yourIp: string
    copy: string
    copied: string
    refresh: string
    error: string
    retry: string
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
  percentCalc?: {
    modeOf: string
    modeIs: string
    modeChange: string
    percent: string
    value: string
    total: string
    from: string
    to: string
    result: string
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
  metronome?: {
    start: string
    stop: string
    tapTempo: string
  }
  userAgent?: {
    browser: string
    os: string
    device: string
    platform: string
    language: string
    screen: string
    window: string
    colorDepth: string
    pixelRatio: string
    touch: string
    cores: string
    cookies: string
    onlineStatus: string
    copy: string
    copied: string
    yes: string
    no: string
  }
  jwtDecoder?: {
    input: string
    placeholder: string
    invalid: string
    signature: string
    issuedAt: string
    expires: string
    notBefore: string
  }
  cronParser?: {
    expression: string
    meaning: string
    examples: string
    minute: string
    hour: string
    dayOfMonth: string
    month: string
    dayOfWeek: string
    every: string
    at: string
    minuteLabel: string
    minutesLabel: string
    hourLabel: string
    hoursLabel: string
    dayLabel: string
    on: string
    inMonth: string
    onDay: string
  }
  csvJson?: {
    input: string
    output: string
    convert: string
    copy: string
    copied: string
    error: string
    csvPlaceholder: string
    jsonPlaceholder: string
  }
  diffCompare?: {
    original: string
    modified: string
    placeholderA: string
    placeholderB: string
    compare: string
    linesAdded: string
    linesRemoved: string
  }
  whiteNoise?: {
    white: string
    pink: string
    brown: string
    volume: string
    play: string
    stop: string
  }
  pitchDetector?: {
    start: string
    stop: string
    detecting: string
    pressStart: string
    notSupported: string
  }
  codeMinifier?: {
    placeholder: string
    minify: string
    copy: string
    copied: string
    saved: string
  }
  cssGradient?: {
    linear: string
    radial: string
    angle: string
    colors: string
    addColor: string
    presets: string
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
  dnsLookup?: {
    domainLabel: string
    typeLabel: string
    lookup: string
    looking: string
    results: string
    noResults: string
    noRecords: string
    error: string
    placeholder: string
    search: string
    loading: string
  }
  sslCheck?: {
    check: string
    valid: string
    expired: string
    revoked: string
    issuer: string
    error: string
    notFound: string
    rateLimited: string
    placeholder: string
    loading: string
    daysLeft: string
    subject: string
    validFrom: string
    validTo: string
    covers: string
    ctNote: string
  }
  httpHeaders?: {
    urlLabel: string
    fetch: string
    fetching: string
    headers: string
    error: string
    placeholder: string
    loading: string
    copied: string
    copyAll: string
  }
  faviconGenerator?: {
    upload: string
    downloadIco: string
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
  pixelCounter?: {
    upload: string
    dimensions: string
    totalPixels: string
    distance: string
    newImage: string
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
      sendsLabel: 'Det som skickas:',
      sendsIp: 'Din IP-adress. Den är i sig en personuppgift — verktyget kan inte visa den utan att fråga tjänsten. Ingen text du skriver skickas.',
      sendsSsl: 'Bara domännamnet du skriver in. Certifikatuppgifterna som visas är redan offentliga.',
      sendsDns: 'Bara domännamnet du slår upp.',
      sendsHeaders: 'Hela adressen du klistrar in — inklusive allt efter frågetecknet.',
      sendsBandwidth: 'Ingen text. Testet laddar bara ner och upp testdata.',
      headersWarning: 'Adressen passerar en öppen gratisproxy (AllOrigins) som vi inte har något avtal med. Klistra aldrig in länkar som innehåller inloggningstokens, nycklar eller engångslänkar — de blir läsbara för den som driver proxyn.',
      externalOutro: 'Bytebox sparar ingenting själv. Undvik att skicka känsliga personuppgifter.',
      translatorWarning: 'Texten skickas till MyMemory, som kan spara och återanvända den i ett publikt översättningsminne. Klistra inte in namn, personnummer eller annan känslig information.',
      speechService: 'webbläsarens taltjänst',
      speechNote: 'Ljudet från din mikrofon skickas till din webbläsares taltjänst (i Chrome: Google) för att tolkas. Bytebox sparar ingenting själv.',
      ttsNote: 'Uppläsningen görs av din webbläsares röstmotor. I vissa webbläsare (t.ex. Chrome) kan din text skickas till en molntjänst för vissa röster. Bytebox sparar ingenting själv.',
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
      kod: 'Kod & Data',
      natverk: 'Nätverk & Säkerhet',
      berakning: 'Beräkning & Konvertering',
      produktivitet: 'Produktivitet & Verktyg',
      spelutveckling: 'Spelutveckling',
    },
    hashGenerator: {
      input: 'Text',
      placeholder: 'Skriv eller klistra in text att hasha...',
      copy: 'Kopiera',
      copied: 'Kopierat!',
    },
    base64: {
      encode: 'Koda',
      decode: 'Avkoda',
      textInput: 'Text',
      textOutput: 'Text',
      encodePlaceholder: 'Skriv text att koda...',
      decodePlaceholder: 'Klistra in Base64 att avkoda...',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      swap: 'Byt',
      invalidBase64: 'Ogiltig Base64-sträng',
      encodingError: 'Kunde inte koda texten',
    },
    jsonFormatter: {
      input: 'Indata',
      output: 'Resultat',
      placeholder: 'Klistra in JSON här...',
      format: 'Formatera',
      minify: 'Minifiera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      clear: 'Rensa',
      indent: 'Indrag',
      error: 'Fel',
    },
    regexTester: {
      pattern: 'Mönster',
      patternPlaceholder: 'Skriv regex här...',
      flags: 'Flaggor',
      testString: 'Teststräng',
      testPlaceholder: 'Skriv text att testa mot...',
      result: 'Resultat',
      matches: 'Matchningar',
      groups: 'Grupper',
      index: 'index',
      copy: 'Kopiera',
      copied: 'Kopierat!',
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
    unitConverter: {
      length: 'Längd',
      weight: 'Vikt',
      temperature: 'Temperatur',
      speed: 'Hastighet',
      data: 'Data',
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
    markdownPreview: {
      edit: 'Redigera',
      split: 'Delad',
      preview: 'Förhandsgranskning',
      copyHtml: 'Kopiera HTML',
      copied: 'Kopierat!',
      clear: 'Rensa',
      placeholder: 'Skriv Markdown här...',
      bold: 'Fet',
      italic: 'Kursiv',
      strikethrough: 'Genomstruken',
      heading: 'Rubrik',
      quote: 'Citat',
      code: 'Kod',
      link: 'Länk',
      bulletList: 'Punktlista',
      numberedList: 'Numrerad lista',
      table: 'Tabell',
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
    fileAnalyzer: {
      upload: 'Klicka eller dra hit en fil',
      anyFile: 'Alla filtyper stöds',
      fileName: 'Filnamn',
      fileSize: 'Storlek',
      fileType: 'MIME-typ',
      extension: 'Filändelse',
      modified: 'Senast ändrad',
      dimensions: 'Dimensioner',
      preview: 'Förhandsgranskning',
      contentPreview: 'Innehåll (förhandsgranskning)',
    },
    percentCalc: {
      modeOf: 'X% av Y',
      modeIs: 'X är ?% av Y',
      modeChange: '% förändring',
      percent: 'Procent',
      value: 'Värde',
      total: 'Totalt',
      from: 'Från',
      to: 'Till',
      result: 'Resultat',
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
    metronome: {
      start: 'Starta',
      stop: 'Stoppa',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Webbläsare',
      os: 'Operativsystem',
      device: 'Enhetstyp',
      platform: 'Plattform',
      language: 'Språk',
      screen: 'Skärmupplösning',
      window: 'Fönsterstorlek',
      colorDepth: 'Färgdjup',
      pixelRatio: 'Pixelförhållande',
      touch: 'Pekskärm',
      cores: 'CPU-kärnor',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      yes: 'Ja',
      no: 'Nej',
    },
    jwtDecoder: {
      input: 'JWT-token',
      placeholder: 'Klistra in en JWT-token här...',
      invalid: 'Ogiltig JWT-token',
      signature: 'Signatur',
      issuedAt: 'Utfärdat',
      expires: 'Utgår',
      notBefore: 'Ej före',
    },
    cronParser: {
      expression: 'Cron-uttryck',
      meaning: 'Betydelse',
      examples: 'Exempel',
      minute: 'Minut',
      hour: 'Timme',
      dayOfMonth: 'Dag i månaden',
      month: 'Månad',
      dayOfWeek: 'Veckodag',
      every: 'Varje',
      at: 'Vid',
      minuteLabel: 'minut',
      minutesLabel: 'minuter',
      hourLabel: 'timme',
      hoursLabel: 'timmar',
      dayLabel: 'dag',
      on: 'på',
      inMonth: 'i',
      onDay: 'den',
    },
    csvJson: {
      input: 'Indata',
      output: 'Resultat',
      convert: 'Konvertera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      error: 'Konverteringsfel — kontrollera indata',
      csvPlaceholder: 'namn,ålder,stad\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"namn":"Anna","ålder":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Ändrad',
      placeholderA: 'Klistra in originaltext...',
      placeholderB: 'Klistra in ändrad text...',
      compare: 'Jämför',
      linesAdded: 'tillagda',
      linesRemoved: 'borttagna',
    },
    whiteNoise: {
      white: 'Vitt brus',
      pink: 'Rosa brus',
      brown: 'Brunt brus',
      volume: 'Volym',
      play: 'Spela',
      stop: 'Stoppa',
    },
    pitchDetector: {
      start: 'Starta',
      stop: 'Stoppa',
      detecting: 'Lyssnar...',
      pressStart: 'Tryck för att börja',
      notSupported: 'Mikrofon stöds inte i denna webbläsare',
    },
    codeMinifier: {
      placeholder: 'Klistra in kod här...',
      minify: 'Minifiera',
      copy: 'Kopiera',
      copied: 'Kopierat!',
      saved: 'Sparat',
    },
    cssGradient: {
      linear: 'Linjär',
      radial: 'Radiell',
      angle: 'Vinkel',
      colors: 'Färger',
      addColor: 'Lägg till',
      presets: 'Förval',
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
    dnsLookup: {
      domainLabel: 'Domännamn',
      typeLabel: 'Posttyp',
      lookup: 'Slå upp',
      looking: 'Söker...',
      results: 'Resultat',
      noResults: 'Inga poster hittades',
      noRecords: 'Inga poster hittades',
      error: 'Kunde inte slå upp domänen',
      placeholder: 'example.com',
      search: 'Sök',
      loading: 'Söker...',
    },
    sslCheck: {
      check: 'Kontrollera',
      valid: 'SSL-certifikatet är giltigt',
      expired: 'Certifikatet har gått ut',
      revoked: 'Certifikatet är återkallat',
      issuer: 'Utfärdare',
      error: 'Kunde inte kontrollera certifikatet. Kontrollera domännamnet.',
      notFound: 'Hittade inget certifikat utfÃ¤rdat fÃ¶r exakt det namnet. Prova huvuddomÃ¤nen (t.ex. example.com i stÃ¤llet fÃ¶r www.example.com) — wildcard-certifikat listas pÃ¥ huvuddomÃ¤nen.',
      rateLimited: 'För många förfrågningar just nu. Vänta en stund och försök igen.',
      placeholder: 'example.com',
      loading: 'Kontrollerar...',
      daysLeft: 'dagar kvar',
      subject: 'Domän',
      validFrom: 'Giltig från',
      validTo: 'Giltig till',
      covers: 'Täcker antal domäner',
      ctNote: 'Uppgifterna kommer från offentliga Certificate Transparency-loggar och visar det senast utfärdade certifikatet för domänen. Det är nästan alltid det servern använder, men i sällsynta fall kan servern köra ett annat.',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Hämta',
      fetching: 'Hämtar...',
      headers: 'Headers',
      error: 'Kunde inte hämta headers',
      placeholder: 'https://example.com',
      loading: 'Hämtar...',
      copied: 'Kopierat!',
      copyAll: 'Kopiera alla',
    },
    faviconGenerator: {
      upload: 'Klicka eller dra hit en bild',
      downloadIco: 'Ladda ner favicon.ico',
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
    pixelCounter: {
      upload: 'Klicka eller dra hit en bild',
      dimensions: 'Dimensioner',
      totalPixels: 'Totalt',
      distance: 'Avstånd',
      newImage: 'Ny bild',
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
      'filanalys': { name: 'Filanalys', description: 'Analysera filinnehåll och metadata', hint: 'Dra in valfri fil och se namn, storlek, MIME-typ, filändelse och senast ändrad. Bilder visar dimensioner, textfiler visar innehållet.' },
      'qr-kod': { name: 'QR-kod', description: 'Skapa QR-koder — en i taget eller många på en gång', hint: 'Skapa QR-koder för URL:er, Wi-Fi-lösenord eller valfri text. Välj färger och storlek. Fliken \'Flera koder\' gör en hel lista på en gång, från inklistrad text eller en .txt/.csv-fil. Allt sker lokalt i webbläsaren.' },
      'base64-kodare': { name: 'Base64-kodare', description: 'Koda om text och data till Base64 och tillbaka — ett textformat för att skicka data i länkar, e-post och kod', hint: 'Base64 gör om vilken data som helst (bilder, filer, text) till en lång sträng av bokstäver och siffror, typ "SGVqIQ==" — inget hemligt, bara ett sätt att skicka data där bara text går fram. Om någon skickat dig en sådan sträng och du vill se vad den betyder, klistra in den och välj "Avkoda".' },
      'linjal': { name: 'Linjal', description: 'Mät avstånd på skärmen', hint: 'Mät avstånd direkt på skärmen i cm eller tum. Kalibrera med ett kreditkort för exakta mått. Klicka och dra för att mäta.' },
      'enhetsomvandlare': { name: 'Enhetsomvandlare', description: 'Konvertera mellan olika måttenheter', hint: 'Konvertera snabbt mellan metriska och imperiala enheter — längd, vikt, temperatur, hastighet och datastorlek.' },
      'hash-generator': { name: 'Hash-generator', description: 'Skapa ett digitalt fingeravtryck (hash) av text eller data — för att kontrollera att inget ändrats', hint: 'En hash är som ett digitalt fingeravtryck — samma text ger alltid exakt samma hash, men även en enda ändrad bokstav ger ett helt annat resultat. Används t.ex. för att kontrollera att en nedladdad fil inte skadats på vägen, eller för att spara lösenord säkert utan att spara det riktiga lösenordet.' },
      'oversattare': { name: 'Översättare', description: 'Översätt text mellan olika språk', hint: 'Översätt text mellan 19 språk direkt i webbläsaren. Byt snabbt språkriktning med en knapptryckning. Drivs av MyMemory Translation API.' },
      'ip-info': { name: 'IP-info', description: 'Visa din IP-adress och nätverksinformation' },
      'bandbreddstest': { name: 'Bandbreddstest', description: 'Testa din internetanslutningshastighet', hint: 'Mät din nedladdningshastighet och latens med en enkel knapptryckning. Resultat visas i Mbps med en visuell mätare och historik.' },
      'json-formaterare': { name: 'JSON-formaterare', description: 'Städa upp och kontrollera JSON — dataformatet som appar och webbtjänster utbyter information i', hint: 'JSON är ett sätt att strukturera information med krullparenteser och kolon — typ {"namn": "Anna", "ålder": 28}. Om du fått en hög hopklumpad JSON (t.ex. från en utvecklare eller en export) och vill se den snyggt uppradad, klistra in den här.' },
      'text-till-tal': { name: 'Text till tal', description: 'Omvandla skriven text till talat ljud' },
      'regex-testare': { name: 'Regex-testare', description: 'Testa sökmönster (regex) som hittar och matchar text — se träffarna markeras direkt', hint: 'Ett regex-mönster (kort för "reguljärt uttryck") beskriver hur en text ska se ut, för att hitta eller kontrollera den — t.ex. "är det här en giltig e-postadress?". Används mest av utvecklare. Skriv ett mönster och se matchningar markeras live i din text, med fångstgrupper och index.' },
      'bildkomprimering': { name: 'Bildkomprimering', description: 'Komprimera bilder utan att tappa kvalitet', hint: 'Minska filstorleken på bilder utan att tappa för mycket kvalitet. Välj komprimeringsnivå och max bredd — allt sker lokalt.' },
      'markdown-forhandsgranskning': { name: 'Markdown-förhandsgranskning', description: 'Skriv text med Markdown (enkel formatering med tecken som * och #) och se den färdiga sidan direkt', hint: 'Skriv Markdown och se resultatet live. Perfekt för README-filer, dokumentation eller blogginlägg — med delad vy och HTML-export.' },
      'mediakonverterare': { name: 'Mediakonverterare', description: 'Konvertera mellan ljud- och videoformat — MP4, MP3, WAV, WebM, OGG och fler', hint: 'Konvertera ljud- och videofiler direkt i webbläsaren utan att ladda upp till någon server. Stöder WAV, WebM och ljudextraktion från video.' },
      'brodyrkortsvisare': { name: 'Brodyrkortsvisare', description: 'Visa och förhandsgranska brodyrmönster från PES, DST, JEF och andra format', hint: 'Ladda in brodyrifiler och se mönstret renderat med trådfärger, stygnantal och dimensioner. Stöder PES-, DST- och JEF-format.' },
      'bildbeskärare': { name: 'Bildbeskärare', description: 'Beskär bilder till önskad storlek och proportioner' },
      'bakgrundsborttagare': { name: 'Bakgrundsborttagare', description: 'Ta bort bakgrund från bilder automatiskt' },
      'heic-till-jpg': { name: 'HEIC till JPG', description: 'Konvertera iPhone-bilder (HEIC) till JPG eller PNG', hint: 'iPhone sparar foton som HEIC, som många datorer inte kan öppna. Konvertera till JPG eller PNG — allt sker lokalt, inget laddas upp.' },
      'metadata-tvatt': { name: 'Metadata-tvätt', description: 'Se och ta bort dold metadata (GPS, datum, kamera) från bilder', hint: 'Foton innehåller ofta din exakta GPS-position. Se vad som gömmer sig i bilden och ta bort allt — lokalt, inget laddas upp.' },
      'passfoto': { name: 'Passfoto', description: 'Skapa passfoto och ID-foto i rätt mm-mått', hint: 'Beskär, zooma och skriv ut flera kopior på ett ark — allt lokalt i webbläsaren, inget laddas upp.' },
      'svg-optimering': { name: 'SVG-optimerare', description: 'Krymp och städa SVG-filer direkt i webbläsaren – ta bort metadata, kommentarer och onödig kod', hint: 'Klistra in eller ladda upp en SVG och ladda ner en mindre version. Allt sker lokalt.' },
      'video-till-gif': { name: 'Video till GIF', description: 'Gör en animerad GIF av ett videoklipp – välj start, slut, bildrutor och storlek', hint: 'Allt sker lokalt i webbläsaren – videon laddas aldrig upp.' },
      'srt-redigerare': { name: 'SRT-redigerare', description: 'Redigera undertexter i SRT-format – ändra text, justera tider och förskjut hela filen', hint: 'Ladda upp eller klistra in en .srt-fil. Allt sker lokalt i webbläsaren.' },
      'uuid-generator': { name: 'UUID-generator', description: 'Skapa unika ID-koder (UUID) som aldrig krockar — praktiskt för att märka poster, filer och saker i program', hint: 'Ett UUID är en unik kod som ser ut som "f47ac10b-58cc-4372-a567-0e02b2c3d479" — så lång och slumpmässig att risken att två program råkar skapa samma är i praktiken noll. Används för att ge unika ID:n åt saker i program. Kopiera en eller alla på en gång.' },
      'epoch-omvandlare': { name: 'Epoch-omvandlare', description: 'Översätt mellan vanligt datum/tid och Unix-tidsstämpel (sekunderna datorer räknar tid i), åt båda hållen', hint: 'Datorer räknar ofta tid som ett enda stort tal — antal sekunder sedan midnatt 1 januari 1970 (t.ex. 1700000000), kallat en Unix-tidsstämpel eller "epoch time". Om du stött på ett sånt tal i en logg eller databas och undrar vilket datum det är, omvandla det här. Stödjer både sekunder och millisekunder.' },
      'bas-omvandlare': { name: 'Bas-omvandlare', description: 'Omvandla tal mellan olika talsystem — binärt, oktalt, decimalt (vanliga tal) och hexadecimalt', hint: 'Vi räknar normalt i "bas 10" (decimalt, 0–9), men datorer jobbar egentligen i "bas 2" (binärt, bara 0 och 1) och programmerare använder ofta "bas 16" (hexadecimalt, 0–9 och A–F) som en kortare skrivform för binärt. Skriv i valfritt fält så uppdateras de andra direkt.' },
      'ljudklipp': { name: 'Ljudklippare', description: 'Klipp och trimma ljudfiler direkt i webbläsaren – välj start och slut och ladda ner en WAV', hint: 'Perfekt för att korta ner en inspelning eller plocka ut ett klipp. Inget laddas upp.' },
      'padgrid': { name: 'PadGrid', description: 'Musikprototyp med rutnät — klicka pads för att spela loopar och lager ihop ljud', hint: 'En clip-launcher-inspirerad prototyp: klicka på en ruta för att spela en loop, klicka på en annan i samma kolumn för att byta, eller lägg till en helt annan kolumn för att bygga upp ett lager. Har en guidad genomgång som visar hur det funkar.' },
      'streckkod': { name: 'Streckkodsgenerator', description: 'Skapa streckkoder (CODE128, EAN, UPC m.fl.) och ladda ner som PNG eller SVG', hint: 'Allt sker lokalt i webbläsaren – inget laddas upp.' },
      'favicon-generator': { name: 'Favicon-generator', description: 'Skapa den lilla ikonen som visas i webbläsarens flik (favicon) från valfri bild' },
      'pixelraknare': { name: 'Pixelräknare', description: 'Räkna pixlar och mät avstånd i bilder' },
      'ascii-konst': { name: 'ASCII-konst', description: 'Gör om en bild till en bild byggd av bokstäver och tecken (ASCII-konst)' },
      'skarfilsgenerator': { name: 'Skärfilsgenerator', description: 'Skapa skärfiler för lasergravering — rita skärlinjer runt bilder och exportera som SVG' },
      'diff-jamforare': { name: 'Diff-jämförare', description: 'Jämför två texter och se skillnaderna markerade' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Omvandla mellan CSV (tabeller/kalkylark) och JSON (dataformat för appar) åt båda hållen' },
      'pdf-verktyg': { name: 'PDF-verktyg', description: 'Slå ihop, signera och fyll i PDF-filer', hint: 'Tre vanliga PDF-uppgifter på ett ställe: slå ihop flera filer till en, rita din signatur direkt på dokumentet, eller klicka dig fram och skriv text i en blankett. Allt sker lokalt i webbläsaren.' },
      'ocr': { name: 'OCR — Textigenkänning', description: 'Läs av text ur en bild eller skärmdump så du kan kopiera och redigera den (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Bygg ditt eget 2D-spel — rita brickor, bygg banor och testa direkt i webbläsaren' },
      'metronom': { name: 'Metronom', description: 'Håll takten med en digital metronom' },
      'tonhojdsmatare': { name: 'Tonhöjdsmätare', description: 'Mät tonhöjd och frekvens via mikrofonen' },
      'vit-brus': { name: 'Vitt brus', description: 'Spela upp vitt brus och andra bakgrundsljud för fokus' },
      'kodminifierare': { name: 'Kodminifierare', description: 'Krymp JavaScript-, CSS- och HTML-kod genom att ta bort onödiga tecken — så webbsidor laddar snabbare', hint: 'Att "minifiera" kod betyder att ta bort allt en dator inte behöver för att förstå den — mellanslag, radbyten, kommentarer — så filen blir mindre och webbsidan laddar snabbare. Koden funkar likadant efteråt, den blir bara svårare för en människa att läsa.' },
      'css-gradient': { name: 'CSS Gradient', description: 'Skapa mjuka färgövergångar och få färdig CSS-kod att klistra in på en webbsida', hint: 'CSS är koden som styr hur en webbsida ser ut, och en gradient är en mjuk övergång mellan färger (t.ex. från blått till lila). Ställ in färgerna och vinkeln här, kopiera sedan koden och klistra in den där du bygger en webbsida.' },
      'cron-tolkare': { name: 'Cron-tolkare', description: 'Översätt ett cron-schema (t.ex. "0 9 * * 1") till vanlig text så du ser när det körs', hint: 'Ett cron-schema är ett sätt att säga åt en dator "kör det här varje måndag klockan 9" med bara siffror och stjärnor — det används för att schemalägga automatiska uppgifter på servrar. Klistra in ett sådant schema för att se i klartext när det faktiskt kör.' },
      'jwt-dekodare': { name: 'JWT-dekodare', description: 'Öppna och läs innehållet i en JWT — den kodade inloggningsnyckeln som appar och webbtjänster skickar', hint: 'En JWT (JSON Web Token) är en kodad "inloggningsbiljett" som webbtjänster skickar fram och tillbaka för att komma ihåg att du är inloggad, utan att skicka ditt lösenord varje gång. Klistra in en JWT för att se vad som faktiskt står i den — den är kodad, inte hemlig, så vem som helst kan läsa innehållet.' },
      'dns-uppslagning': { name: 'DNS-uppslagning', description: 'Slå upp en domäns DNS-poster — internets "telefonbok" som kopplar ett domännamn till rätt server' },
      'ssl-kontroll': { name: 'SSL-kontroll', description: 'Kontrollera en webbplats säkerhetscertifikat (SSL) — om det är giltigt och när det går ut' },
      'http-headers': { name: 'HTTP Headers', description: 'Se de dolda svarshuvudena (HTTP headers) en webbplats skickar tillbaka — teknisk info bakom en sida' },
      'useragent-info': { name: 'User Agent-info', description: 'Visa information om din webbläsare och enhet' },
      'procent-raknare': { name: 'Procenträknare', description: 'Beräkna procent, ökning, minskning och andelar' },
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
      sendsLabel: 'What gets sent:',
      sendsIp: 'Your IP address. That is personal data in itself — the tool cannot show it without asking the service. Nothing you type is sent.',
      sendsSsl: 'Only the domain name you enter. The certificate details shown are already public.',
      sendsDns: 'Only the domain name you look up.',
      sendsHeaders: 'The full address you paste — including everything after the question mark.',
      sendsBandwidth: 'No text. The test only downloads and uploads test data.',
      headersWarning: 'The address passes through an open free proxy (AllOrigins) we have no agreement with. Never paste links containing login tokens, keys or one-time links — whoever runs the proxy can read them.',
      externalOutro: 'Bytebox itself stores nothing. Avoid sending sensitive personal data.',
      translatorWarning: 'The text is sent to MyMemory, which may store and reuse it in a public translation memory. Do not paste names, ID numbers or other sensitive information.',
      speechService: 'your browser\'s speech service',
      speechNote: 'Audio from your microphone is sent to your browser\'s speech service (in Chrome: Google) to be transcribed. Bytebox itself stores nothing.',
      ttsNote: 'The reading is done by your browser\'s voice engine. In some browsers (e.g. Chrome) your text may be sent to a cloud service for certain voices. Bytebox itself stores nothing.',
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
      kod: 'Code & Data',
      natverk: 'Network & Security',
      berakning: 'Calculation & Conversion',
      produktivitet: 'Productivity & Tools',
      spelutveckling: 'Game Development',
    },
    hashGenerator: {
      input: 'Text',
      placeholder: 'Type or paste text to hash...',
      copy: 'Copy',
      copied: 'Copied!',
    },
    base64: {
      encode: 'Encode',
      decode: 'Decode',
      textInput: 'Text',
      textOutput: 'Text',
      encodePlaceholder: 'Type text to encode...',
      decodePlaceholder: 'Paste Base64 to decode...',
      copy: 'Copy',
      copied: 'Copied!',
      swap: 'Swap',
      invalidBase64: 'Invalid Base64 string',
      encodingError: 'Could not encode text',
    },
    jsonFormatter: {
      input: 'Input',
      output: 'Result',
      placeholder: 'Paste JSON here...',
      format: 'Format',
      minify: 'Minify',
      copy: 'Copy',
      copied: 'Copied!',
      clear: 'Clear',
      indent: 'Indent',
      error: 'Error',
    },
    regexTester: {
      pattern: 'Pattern',
      patternPlaceholder: 'Type regex here...',
      flags: 'Flags',
      testString: 'Test string',
      testPlaceholder: 'Type text to test against...',
      result: 'Result',
      matches: 'Matches',
      groups: 'Groups',
      index: 'index',
      copy: 'Copy',
      copied: 'Copied!',
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
    unitConverter: {
      length: 'Length',
      weight: 'Weight',
      temperature: 'Temperature',
      speed: 'Speed',
      data: 'Data',
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
    markdownPreview: {
      edit: 'Edit',
      split: 'Split',
      preview: 'Preview',
      copyHtml: 'Copy HTML',
      copied: 'Copied!',
      clear: 'Clear',
      placeholder: 'Write Markdown here...',
      bold: 'Bold',
      italic: 'Italic',
      strikethrough: 'Strikethrough',
      heading: 'Heading',
      quote: 'Quote',
      code: 'Code',
      link: 'Link',
      bulletList: 'Bullet list',
      numberedList: 'Numbered list',
      table: 'Table',
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
    fileAnalyzer: {
      upload: 'Click or drag a file here',
      anyFile: 'All file types supported',
      fileName: 'File name',
      fileSize: 'Size',
      fileType: 'MIME type',
      extension: 'Extension',
      modified: 'Last modified',
      dimensions: 'Dimensions',
      preview: 'Preview',
      contentPreview: 'Content (preview)',
    },
    percentCalc: {
      modeOf: 'X% of Y',
      modeIs: 'X is ?% of Y',
      modeChange: '% change',
      percent: 'Percent',
      value: 'Value',
      total: 'Total',
      from: 'From',
      to: 'To',
      result: 'Result',
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
    metronome: {
      start: 'Start',
      stop: 'Stop',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Browser',
      os: 'Operating system',
      device: 'Device type',
      platform: 'Platform',
      language: 'Language',
      screen: 'Screen resolution',
      window: 'Window size',
      colorDepth: 'Color depth',
      pixelRatio: 'Pixel ratio',
      touch: 'Touch screen',
      cores: 'CPU cores',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Copy',
      copied: 'Copied!',
      yes: 'Yes',
      no: 'No',
    },
    jwtDecoder: {
      input: 'JWT token',
      placeholder: 'Paste a JWT token here...',
      invalid: 'Invalid JWT token',
      signature: 'Signature',
      issuedAt: 'Issued at',
      expires: 'Expires',
      notBefore: 'Not before',
    },
    cronParser: {
      expression: 'Cron expression',
      meaning: 'Meaning',
      examples: 'Examples',
      minute: 'Minute',
      hour: 'Hour',
      dayOfMonth: 'Day of month',
      month: 'Month',
      dayOfWeek: 'Day of week',
      every: 'Every',
      at: 'At',
      minuteLabel: 'minute',
      minutesLabel: 'minutes',
      hourLabel: 'hour',
      hoursLabel: 'hours',
      dayLabel: 'day',
      on: 'on',
      inMonth: 'in',
      onDay: 'the',
    },
    csvJson: {
      input: 'Input',
      output: 'Result',
      convert: 'Convert',
      copy: 'Copy',
      copied: 'Copied!',
      error: 'Conversion error — check your input',
      csvPlaceholder: 'name,age,city\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"name":"Anna","age":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modified',
      placeholderA: 'Paste original text...',
      placeholderB: 'Paste modified text...',
      compare: 'Compare',
      linesAdded: 'added',
      linesRemoved: 'removed',
    },
    whiteNoise: {
      white: 'White noise',
      pink: 'Pink noise',
      brown: 'Brown noise',
      volume: 'Volume',
      play: 'Play',
      stop: 'Stop',
    },
    pitchDetector: {
      start: 'Start',
      stop: 'Stop',
      detecting: 'Listening...',
      pressStart: 'Press to start',
      notSupported: 'Microphone not supported in this browser',
    },
    codeMinifier: {
      placeholder: 'Paste code here...',
      minify: 'Minify',
      copy: 'Copy',
      copied: 'Copied!',
      saved: 'Saved',
    },
    cssGradient: {
      linear: 'Linear',
      radial: 'Radial',
      angle: 'Angle',
      colors: 'Colors',
      addColor: 'Add',
      presets: 'Presets',
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
    dnsLookup: {
      domainLabel: 'Domain name',
      typeLabel: 'Record type',
      lookup: 'Lookup',
      looking: 'Looking up...',
      results: 'Results',
      noResults: 'No records found',
      noRecords: 'No records found',
      error: 'Could not look up domain',
      placeholder: 'example.com',
      search: 'Search',
      loading: 'Looking up...',
    },
    sslCheck: {
      check: 'Check',
      valid: 'SSL certificate is valid',
      expired: 'The certificate has expired',
      revoked: 'The certificate has been revoked',
      issuer: 'Issuer',
      error: 'Could not check the certificate. Check the domain name.',
      notFound: 'No certificate was issued for that exact name. Try the main domain (e.g. example.com instead of www.example.com) — wildcard certificates are listed under the main domain.',
      rateLimited: 'Too many requests right now. Wait a moment and try again.',
      placeholder: 'example.com',
      loading: 'Checking...',
      daysLeft: 'days left',
      subject: 'Domain',
      validFrom: 'Valid from',
      validTo: 'Valid to',
      covers: 'Domains covered',
      ctNote: 'This data comes from public Certificate Transparency logs and shows the most recently issued certificate for the domain. That is almost always the one the server uses, but in rare cases the server may serve a different one.',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Fetch',
      fetching: 'Fetching...',
      headers: 'Headers',
      error: 'Could not fetch headers',
      placeholder: 'https://example.com',
      loading: 'Fetching...',
      copied: 'Copied!',
      copyAll: 'Copy all',
    },
    faviconGenerator: {
      upload: 'Click or drag an image here',
      downloadIco: 'Download favicon.ico',
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
    pixelCounter: {
      upload: 'Click or drag an image here',
      dimensions: 'Dimensions',
      totalPixels: 'Total',
      distance: 'Distance',
      newImage: 'New image',
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
      'filanalys': { name: 'File Analysis', description: 'Analyze file content and metadata', hint: 'Drop any file and see name, size, MIME type, extension and last modified. Images show dimensions, text files show content.' },
      'qr-kod': { name: 'QR Code', description: 'Create QR codes — one at a time or many at once', hint: 'Create QR codes for URLs, Wi-Fi passwords or any text. Choose colors and size. The \'Several codes\' tab makes a whole list at once, from pasted text or a .txt/.csv file. Everything happens locally in your browser.' },
      'base64-kodare': { name: 'Base64 Encoder', description: 'Encode text and data to Base64 and back — a text format for sending data in links, email and code', hint: 'Base64 turns any data (images, files, text) into a long string of letters and numbers, like "SGVqIQ==" — nothing secret, just a way to send data through places where only plain text gets through. If someone sent you a Base64 string and you want to see what it actually says, paste it in and choose "Decode".' },
      'linjal': { name: 'Ruler', description: 'Measure distances on screen', hint: 'Measure distances directly on your screen in cm or inches. Calibrate with a credit card for accurate measurements. Click and drag to measure.' },
      'enhetsomvandlare': { name: 'Unit Converter', description: 'Convert between different units of measurement', hint: 'Quickly convert between metric and imperial units — length, weight, temperature, speed and data size.' },
      'hash-generator': { name: 'Hash Generator', description: 'Create a digital fingerprint (hash) of text or data — to check that nothing has been changed', hint: 'A hash is like a digital fingerprint — the same text always gives exactly the same hash, but even one changed letter gives a completely different result. Used to check that a downloaded file wasn\'t damaged along the way, or to store passwords safely without storing the actual password.' },
      'oversattare': { name: 'Translator', description: 'Translate text between different languages', hint: 'Translate text between 19 languages directly in your browser. Quickly swap language direction with one click. Powered by MyMemory Translation API.' },
      'ip-info': { name: 'IP Info', description: 'Show your IP address and network information' },
      'bandbreddstest': { name: 'Bandwidth Test', description: 'Test your internet connection speed', hint: 'Measure your download speed and latency with a single click. Results shown in Mbps with a visual gauge and history.' },
      'json-formaterare': { name: 'JSON Formatter', description: 'Tidy up and check JSON — the data format apps and web services use to exchange information', hint: 'JSON is a way to structure information with curly braces and colons — like {"name": "Anna", "age": 28}. If you\'ve been handed a wall of squished-together JSON (say, from a developer or an export) and want to see it laid out nicely, paste it here.' },
      'text-till-tal': { name: 'Text to Speech', description: 'Convert written text to spoken audio' },
      'regex-testare': { name: 'Regex Tester', description: 'Test search patterns (regex) that find and match text — see the matches highlighted live', hint: 'A regex pattern (short for "regular expression") describes what a piece of text should look like, so you can find or check it — e.g. "is this a valid email address?". Mostly used by developers. Write a pattern and watch matches get highlighted live in your text, with capture groups and index.' },
      'bildkomprimering': { name: 'Image Compression', description: 'Compress images without losing quality', hint: 'Reduce image file size without losing too much quality. Choose compression level and max width — everything happens locally.' },
      'markdown-forhandsgranskning': { name: 'Markdown Preview', description: 'Write text with Markdown (simple formatting using symbols like * and #) and see the finished page instantly', hint: 'Write Markdown and see the result live. Perfect for README files, documentation or blog posts — with split view and HTML export.' },
      'mediakonverterare': { name: 'Media Converter', description: 'Convert between audio and video formats — MP4, MP3, WAV, WebM, OGG and more', hint: 'Convert audio and video files directly in your browser without uploading to any server. Supports WAV, WebM and audio extraction from video.' },
      'brodyrkortsvisare': { name: 'Embroidery Viewer', description: 'View and preview embroidery patterns from PES, DST, JEF and other formats', hint: 'Load embroidery files and see the pattern rendered with thread colors, stitch count and dimensions. Supports PES, DST and JEF formats.' },
      'bildbeskärare': { name: 'Image Cropper', description: 'Crop images to desired size and aspect ratio' },
      'bakgrundsborttagare': { name: 'Background Remover', description: 'Automatically remove backgrounds from images' },
      'heic-till-jpg': { name: 'HEIC to JPG', description: 'Convert iPhone photos (HEIC) to JPG or PNG', hint: 'iPhones save photos as HEIC, which many computers can\'t open. Convert to JPG or PNG — all locally, nothing uploaded.' },
      'metadata-tvatt': { name: 'Metadata Cleaner', description: 'View and remove hidden metadata (GPS, date, camera) from images', hint: 'Photos often contain your exact GPS location. See what\'s hidden in the image and strip it — locally, nothing uploaded.' },
      'passfoto': { name: 'Passport Photo', description: 'Create passport and ID photos at exact mm sizes', hint: 'Crop, zoom and print multiple copies on one sheet — all locally in your browser, nothing uploaded.' },
      'svg-optimering': { name: 'SVG Optimizer', description: 'Shrink and clean up SVG files right in your browser – strip metadata, comments and redundant code', hint: 'Paste or upload an SVG and download a smaller version. Everything runs locally.' },
      'video-till-gif': { name: 'Video to GIF', description: 'Turn a video clip into an animated GIF – choose start, end, frame rate and size', hint: 'Everything runs locally in your browser — the video is never uploaded.' },
      'srt-redigerare': { name: 'SRT Editor', description: 'Edit SRT subtitles – change text, adjust timings and shift the whole file at once', hint: 'Upload or paste a .srt file. Everything runs locally in your browser.' },
      'uuid-generator': { name: 'UUID Generator', description: 'Create unique ID codes (UUIDs) that never clash — handy for labelling records, files and things in software', hint: 'A UUID is a unique code that looks like "f47ac10b-58cc-4372-a567-0e02b2c3d479" — long and random enough that the odds of two programs accidentally creating the same one are essentially zero. Used to give unique IDs to things inside software. Copy one or all at once.' },
      'epoch-omvandlare': { name: 'Epoch Converter', description: 'Convert between a normal date/time and a Unix timestamp (the seconds computers count time in), both ways', hint: 'Computers often count time as one big number — the number of seconds since midnight, January 1, 1970 (e.g. 1700000000), called a Unix timestamp or "epoch time". If you\'ve spotted one of these in a log or database and want to know what date it is, convert it here. Supports both seconds and milliseconds.' },
      'bas-omvandlare': { name: 'Base Converter', description: 'Convert numbers between number systems — binary, octal, decimal (ordinary numbers) and hexadecimal', hint: 'We normally count in "base 10" (decimal, 0–9), but computers actually work in "base 2" (binary, just 0 and 1), and programmers often use "base 16" (hexadecimal, 0–9 and A–F) as a shorter way to write binary. Type into any field and the others update instantly.' },
      'ljudklipp': { name: 'Audio Trimmer', description: 'Cut and trim audio files right in your browser – pick a start and end and download a WAV', hint: 'Great for shortening a recording or grabbing a clip. Nothing is uploaded.' },
      'padgrid': { name: 'PadGrid', description: 'A grid-based music prototype — click pads to trigger loops and layer sounds together', hint: 'A clip-launcher-inspired prototype: click a pad to play a loop, click another in the same column to switch it, or add a completely different column to build up a layer. Includes a guided walkthrough of how it works.' },
      'streckkod': { name: 'Barcode Generator', description: 'Create barcodes (CODE128, EAN, UPC and more) and download them as PNG or SVG', hint: 'Everything runs locally in your browser — nothing is uploaded.' },
      'favicon-generator': { name: 'Favicon Generator', description: 'Create the little icon shown in a browser tab (favicon) from any image' },
      'pixelraknare': { name: 'Pixel Counter', description: 'Count pixels and measure distances in images' },
      'ascii-konst': { name: 'ASCII Art', description: 'Turn a picture into an image built from letters and characters (ASCII art)' },
      'skarfilsgenerator': { name: 'Cut File Generator', description: 'Create cut files for laser engraving — draw cut lines around images and export as SVG' },
      'diff-jamforare': { name: 'Diff Compare', description: 'Compare two texts and see the differences highlighted' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Convert between CSV (spreadsheet tables) and JSON (data format for apps) both ways' },
      'pdf-verktyg': { name: 'PDF Tools', description: 'Merge, sign and fill in PDF files', hint: 'Three common PDF tasks in one place: combine multiple files into one, draw your signature directly onto the document, or click around and type text into a form. Everything happens locally in your browser.' },
      'ocr': { name: 'OCR — Text Recognition', description: 'Read text out of a picture or screenshot so you can copy and edit it (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Build your own 2D game — draw tiles, design levels and play right in the browser' },
      'metronom': { name: 'Metronome', description: 'Keep the beat with a digital metronome' },
      'tonhojdsmatare': { name: 'Pitch Detector', description: 'Measure pitch and frequency via the microphone' },
      'vit-brus': { name: 'White Noise', description: 'Play white noise and other ambient sounds for focus' },
      'kodminifierare': { name: 'Code Minifier', description: 'Shrink JavaScript, CSS and HTML code by removing unnecessary characters — so web pages load faster', hint: 'To "minify" code means stripping out everything a computer doesn\'t need to understand it — spaces, line breaks, comments — so the file gets smaller and the website loads faster. The code works exactly the same afterwards, it just gets harder for a human to read.' },
      'css-gradient': { name: 'CSS Gradient', description: 'Create smooth colour blends and get ready-made CSS code to paste into a web page', hint: 'CSS is the code that controls how a website looks, and a gradient is a smooth transition between colors (e.g. from blue to purple). Set the colors and angle here, then copy the code shown and paste it wherever you\'re building a website.' },
      'cron-tolkare': { name: 'Cron Parser', description: 'Translate a cron schedule (e.g. "0 9 * * 1") into plain words so you can see when it runs', hint: 'A cron schedule is a way to tell a computer "run this every Monday at 9am" using just numbers and asterisks — used to schedule automatic tasks on servers. Paste one in to see, in plain language, when it actually runs.' },
      'jwt-dekodare': { name: 'JWT Decoder', description: 'Open and read what\'s inside a JWT — the encoded login token apps and web services use', hint: 'A JWT (JSON Web Token) is an encoded "login ticket" that web services pass back and forth to remember you\'re signed in, without sending your password every time. Paste a JWT here to see what\'s actually inside it — it\'s encoded, not secret, so anyone can read the contents.' },
      'dns-uppslagning': { name: 'DNS Lookup', description: 'Look up a domain\'s DNS records — the internet\'s "phone book" that maps a domain name to the right server' },
      'ssl-kontroll': { name: 'SSL Check', description: 'Check a website\'s security certificate (SSL) — whether it\'s valid and when it expires' },
      'http-headers': { name: 'HTTP Headers', description: 'See the hidden response headers (HTTP headers) a website sends back — the technical info behind a page' },
      'useragent-info': { name: 'User Agent Info', description: 'View information about your browser and device' },
      'procent-raknare': { name: 'Percentage Calculator', description: 'Calculate percentages, increases, decreases and ratios' },
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
      sendsLabel: 'Lo que se envía:',
      sendsIp: 'Tu dirección IP. Es un dato personal en sí mismo — la herramienta no puede mostrarla sin preguntar al servicio. No se envía nada de lo que escribas.',
      sendsSsl: 'Solo el nombre de dominio que introduces. Los datos del certificado ya son públicos.',
      sendsDns: 'Solo el nombre de dominio que consultas.',
      sendsHeaders: 'La dirección completa que pegas, incluido todo lo que va después del signo de interrogación.',
      sendsBandwidth: 'Ningún texto. La prueba solo descarga y sube datos de prueba.',
      headersWarning: 'La dirección pasa por un proxy gratuito abierto (AllOrigins) con el que no tenemos ningún acuerdo. Nunca pegues enlaces que contengan tokens de sesión, claves o enlaces de un solo uso — quien gestione el proxy puede leerlos.',
      externalOutro: 'Bytebox no guarda nada. Evita enviar datos personales sensibles.',
      translatorWarning: 'El texto se envía a MyMemory, que puede guardarlo y reutilizarlo en una memoria de traducción pública. No pegues nombres, números de identificación ni otra información sensible.',
      speechService: 'el servicio de voz de tu navegador',
      speechNote: 'El audio de tu micrófono se envía al servicio de voz de tu navegador (en Chrome: Google) para transcribirlo. Bytebox no guarda nada.',
      ttsNote: 'La lectura la hace el motor de voz de tu navegador. En algunos navegadores (p. ej. Chrome) tu texto puede enviarse a un servicio en la nube para ciertas voces. Bytebox no guarda nada.',
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
      kod: 'Código y Datos',
      natverk: 'Red y Seguridad',
      berakning: 'Cálculo y Conversión',
      produktivitet: 'Productividad y Herramientas',
      spelutveckling: 'Desarrollo de juegos',
    },
    hashGenerator: {
      input: 'Texto',
      placeholder: 'Escribe o pega texto para generar hash...',
      copy: 'Copiar',
      copied: '¡Copiado!',
    },
    base64: {
      encode: 'Codificar',
      decode: 'Decodificar',
      textInput: 'Texto',
      textOutput: 'Texto',
      encodePlaceholder: 'Escribe texto para codificar...',
      decodePlaceholder: 'Pega Base64 para decodificar...',
      copy: 'Copiar',
      copied: '¡Copiado!',
      swap: 'Intercambiar',
      invalidBase64: 'Cadena Base64 no válida',
      encodingError: 'No se pudo codificar el texto',
    },
    jsonFormatter: {
      input: 'Entrada',
      output: 'Resultado',
      placeholder: 'Pega JSON aquí...',
      format: 'Formatear',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: '¡Copiado!',
      clear: 'Limpiar',
      indent: 'Sangría',
      error: 'Error',
    },
    regexTester: {
      pattern: 'Patrón',
      patternPlaceholder: 'Escribe regex aquí...',
      flags: 'Banderas',
      testString: 'Cadena de prueba',
      testPlaceholder: 'Escribe texto para probar...',
      result: 'Resultado',
      matches: 'Coincidencias',
      groups: 'Grupos',
      index: 'índice',
      copy: 'Copiar',
      copied: '¡Copiado!',
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
    unitConverter: {
      length: 'Longitud',
      weight: 'Peso',
      temperature: 'Temperatura',
      speed: 'Velocidad',
      data: 'Datos',
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
    markdownPreview: {
      edit: 'Editar',
      split: 'Dividido',
      preview: 'Vista previa',
      copyHtml: 'Copiar HTML',
      copied: '¡Copiado!',
      clear: 'Limpiar',
      placeholder: 'Escribe Markdown aquí...',
      bold: 'Negrita',
      italic: 'Cursiva',
      strikethrough: 'Tachado',
      heading: 'Encabezado',
      quote: 'Cita',
      code: 'Código',
      link: 'Enlace',
      bulletList: 'Lista con viñetas',
      numberedList: 'Lista numerada',
      table: 'Tabla',
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
    fileAnalyzer: {
      upload: 'Haz clic o arrastra un archivo aquí',
      anyFile: 'Todos los tipos de archivo soportados',
      fileName: 'Nombre del archivo',
      fileSize: 'Tamaño',
      fileType: 'Tipo MIME',
      extension: 'Extensión',
      modified: 'Última modificación',
      dimensions: 'Dimensiones',
      preview: 'Vista previa',
      contentPreview: 'Contenido (vista previa)',
    },
    percentCalc: {
      modeOf: 'X% de Y',
      modeIs: 'X es ?% de Y',
      modeChange: '% de cambio',
      percent: 'Porcentaje',
      value: 'Valor',
      total: 'Total',
      from: 'De',
      to: 'A',
      result: 'Resultado',
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
    metronome: {
      start: 'Iniciar',
      stop: 'Parar',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Navegador',
      os: 'Sistema operativo',
      device: 'Tipo de dispositivo',
      platform: 'Plataforma',
      language: 'Idioma',
      screen: 'Resolución de pantalla',
      window: 'Tamaño de ventana',
      colorDepth: 'Profundidad de color',
      pixelRatio: 'Relación de píxeles',
      touch: 'Pantalla táctil',
      cores: 'Núcleos de CPU',
      cookies: 'Cookies',
      onlineStatus: 'En línea',
      copy: 'Copiar',
      copied: '¡Copiado!',
      yes: 'Sí',
      no: 'No',
    },
    jwtDecoder: {
      input: 'Token JWT',
      placeholder: 'Pega un token JWT aquí...',
      invalid: 'Token JWT no válido',
      signature: 'Firma',
      issuedAt: 'Emitido en',
      expires: 'Expira',
      notBefore: 'No antes de',
    },
    cronParser: {
      expression: 'Expresión cron',
      meaning: 'Significado',
      examples: 'Ejemplos',
      minute: 'Minuto',
      hour: 'Hora',
      dayOfMonth: 'Día del mes',
      month: 'Mes',
      dayOfWeek: 'Día de la semana',
      every: 'Cada',
      at: 'A las',
      minuteLabel: 'minuto',
      minutesLabel: 'minutos',
      hourLabel: 'hora',
      hoursLabel: 'horas',
      dayLabel: 'día',
      on: 'el',
      inMonth: 'en',
      onDay: 'el',
    },
    csvJson: {
      input: 'Entrada',
      output: 'Resultado',
      convert: 'Convertir',
      copy: 'Copiar',
      copied: '¡Copiado!',
      error: 'Error de conversión — comprueba los datos',
      csvPlaceholder: 'nombre,edad,ciudad\nAnna,28,Estocolmo',
      jsonPlaceholder: '[{"nombre":"Anna","edad":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modificado',
      placeholderA: 'Pega el texto original...',
      placeholderB: 'Pega el texto modificado...',
      compare: 'Comparar',
      linesAdded: 'añadidas',
      linesRemoved: 'eliminadas',
    },
    whiteNoise: {
      white: 'Ruido blanco',
      pink: 'Ruido rosa',
      brown: 'Ruido marrón',
      volume: 'Volumen',
      play: 'Reproducir',
      stop: 'Parar',
    },
    pitchDetector: {
      start: 'Iniciar',
      stop: 'Parar',
      detecting: 'Escuchando...',
      pressStart: 'Pulsa para empezar',
      notSupported: 'Micrófono no soportado en este navegador',
    },
    codeMinifier: {
      placeholder: 'Pega código aquí...',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: '¡Copiado!',
      saved: 'Ahorrado',
    },
    cssGradient: {
      linear: 'Lineal',
      radial: 'Radial',
      angle: 'Ángulo',
      colors: 'Colores',
      addColor: 'Añadir',
      presets: 'Preajustes',
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
    dnsLookup: {
      domainLabel: 'Nombre de dominio',
      typeLabel: 'Tipo de registro',
      lookup: 'Buscar',
      looking: 'Buscando...',
      results: 'Resultados',
      noResults: 'No se encontraron registros',
      noRecords: 'No se encontraron registros',
      error: 'No se pudo buscar el dominio',
      placeholder: 'example.com',
      search: 'Buscar',
      loading: 'Buscando...',
    },
    sslCheck: {
      check: 'Verificar',
      valid: 'El certificado SSL es válido',
      expired: 'El certificado ha caducado',
      revoked: 'El certificado ha sido revocado',
      issuer: 'Emisor',
      error: 'No se pudo verificar el certificado. Comprueba el nombre de dominio.',
      notFound: 'No se emitiÃ³ ningÃºn certificado para ese nombre exacto. Prueba con el dominio principal (p. ej. example.com en lugar de www.example.com) — los certificados comodÃ­n se listan en el dominio principal.',
      rateLimited: 'Demasiadas solicitudes en este momento. Espera un momento e inténtalo de nuevo.',
      placeholder: 'example.com',
      loading: 'Verificando...',
      daysLeft: 'días restantes',
      subject: 'Dominio',
      validFrom: 'Válido desde',
      validTo: 'Válido hasta',
      covers: 'Dominios cubiertos',
      ctNote: 'Estos datos provienen de los registros públicos de Certificate Transparency y muestran el certificado emitido más recientemente para el dominio. Casi siempre es el que usa el servidor, pero en casos raros el servidor puede usar otro.',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Obtener',
      fetching: 'Obteniendo...',
      headers: 'Headers',
      error: 'No se pudieron obtener los headers',
      placeholder: 'https://example.com',
      loading: 'Obteniendo...',
      copied: '¡Copiado!',
      copyAll: 'Copiar todo',
    },
    faviconGenerator: {
      upload: 'Haz clic o arrastra una imagen aquí',
      downloadIco: 'Descargar favicon.ico',
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
    pixelCounter: {
      upload: 'Haz clic o arrastra una imagen aquí',
      dimensions: 'Dimensiones',
      totalPixels: 'Total',
      distance: 'Distancia',
      newImage: 'Nueva imagen',
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
      'filanalys': { name: 'Análisis de archivos', description: 'Analizar contenido y metadatos de archivos', hint: 'Arrastra cualquier archivo y ve nombre, tamaño, tipo MIME, extensión y última modificación. Las imágenes muestran dimensiones, los archivos de texto muestran contenido.' },
      'qr-kod': { name: 'Código QR', description: 'Crea códigos QR — de uno en uno o muchos a la vez', hint: 'Crea códigos QR para URL, contraseñas de Wi-Fi o cualquier texto. Elige colores y tamaño. La pestaña \'Varios códigos\' genera una lista entera de una vez, desde texto pegado o un archivo .txt/.csv. Todo ocurre localmente en tu navegador.' },
      'base64-kodare': { name: 'Codificador Base64', description: 'Codifica texto y datos a Base64 y de vuelta — un formato de texto para enviar datos en enlaces, correos y código', hint: 'Base64 convierte cualquier dato (imágenes, archivos, texto) en una larga cadena de letras y números, como "SGVqIQ==" — no es secreto, solo una forma de enviar datos por sitios donde solo pasa texto plano. Si alguien te envió una cadena en Base64 y quieres ver qué dice, pégala y elige "Decodificar".' },
      'linjal': { name: 'Regla', description: 'Medir distancias en la pantalla', hint: 'Mide distancias directamente en tu pantalla en cm o pulgadas. Calibra con una tarjeta de crédito para medidas exactas.' },
      'enhetsomvandlare': { name: 'Conversor de unidades', description: 'Convertir entre diferentes unidades de medida', hint: 'Convierte rápidamente entre unidades métricas e imperiales — longitud, peso, temperatura, velocidad y tamaño de datos.' },
      'hash-generator': { name: 'Generador de hash', description: 'Crea una huella digital (hash) de un texto o datos — para comprobar que nada ha cambiado', hint: 'Un hash es como una huella digital — el mismo texto siempre da exactamente el mismo hash, pero cambiar una sola letra da un resultado completamente distinto. Se usa para comprobar que un archivo descargado no se dañó por el camino, o para guardar contraseñas de forma segura sin guardar la contraseña real.' },
      'oversattare': { name: 'Traductor', description: 'Traducir texto entre diferentes idiomas', hint: 'Traduce texto entre 19 idiomas directamente en tu navegador. Cambia la dirección del idioma con un clic.' },
      'ip-info': { name: 'Info IP', description: 'Mostrar tu dirección IP e información de red' },
      'bandbreddstest': { name: 'Test de ancho de banda', description: 'Probar la velocidad de tu conexión a Internet', hint: 'Mide tu velocidad de descarga y latencia con un solo clic. Resultados en Mbps con indicador visual e historial.' },
      'json-formaterare': { name: 'Formateador JSON', description: 'Ordena y comprueba JSON — el formato de datos que apps y servicios web usan para intercambiar información', hint: 'JSON es una forma de estructurar información con llaves y dos puntos — algo como {"nombre": "Ana", "edad": 28}. Si te han dado un montón de JSON apelmazado (por ejemplo, de un desarrollador o una exportación) y quieres verlo bien ordenado, pégalo aquí.' },
      'text-till-tal': { name: 'Texto a voz', description: 'Convertir texto escrito en audio hablado' },
      'regex-testare': { name: 'Probador de regex', description: 'Prueba patrones de búsqueda (regex) que encuentran y coinciden con texto — ve las coincidencias resaltadas al instante', hint: 'Un patrón regex (abreviatura de "expresión regular") describe cómo debería verse un texto, para poder encontrarlo o comprobarlo — por ejemplo, "¿es esto una dirección de correo válida?". Lo usan sobre todo desarrolladores. Escribe un patrón y mira cómo se resaltan las coincidencias en vivo, con grupos de captura e índice.' },
      'bildkomprimering': { name: 'Compresión de imágenes', description: 'Comprimir imágenes sin perder calidad', hint: 'Reduce el tamaño de archivo de imágenes sin perder demasiada calidad. Elige nivel de compresión y ancho máximo — todo ocurre localmente.' },
      'markdown-forhandsgranskning': { name: 'Vista previa de Markdown', description: 'Escribe texto con Markdown (formato simple con símbolos como * y #) y ve la página terminada al instante', hint: 'Escribe Markdown y ve el resultado en vivo. Perfecto para archivos README, documentación o publicaciones de blog — con vista dividida y exportación HTML.' },
      'mediakonverterare': { name: 'Conversor de medios', description: 'Convertir entre formatos de audio y video — MP4, MP3, WAV, WebM, OGG y más', hint: 'Convierte archivos de audio y video directamente en tu navegador sin subir a ningún servidor. Soporta WAV, WebM y extracción de audio.' },
      'brodyrkortsvisare': { name: 'Visor de bordado', description: 'Ver y previsualizar patrones de bordado de formatos PES, DST, JEF y otros', hint: 'Carga archivos de bordado y ve el patrón renderizado con colores de hilo, conteo de puntadas y dimensiones.' },
      'bildbeskärare': { name: 'Recortador de imágenes', description: 'Recortar imágenes al tamaño y proporción deseados' },
      'bakgrundsborttagare': { name: 'Eliminador de fondo', description: 'Eliminar fondos de imágenes automáticamente' },
      'heic-till-jpg': { name: 'HEIC a JPG', description: 'Convierte fotos de iPhone (HEIC) a JPG o PNG', hint: 'Los iPhone guardan las fotos como HEIC, que muchos ordenadores no pueden abrir. Conviértelas a JPG o PNG — todo localmente, sin subir nada.' },
      'metadata-tvatt': { name: 'Limpiador de metadatos', description: 'Ver y eliminar metadatos ocultos (GPS, fecha, cámara) de imágenes', hint: 'Las fotos suelen contener tu ubicación GPS exacta. Mira lo que se oculta en la imagen y elimínalo — localmente, sin subir nada.' },
      'passfoto': { name: 'Foto de pasaporte', description: 'Crea fotos de pasaporte y de identidad con las medidas exactas en mm', hint: 'Recorta, amplía e imprime varias copias en una hoja — todo localmente en tu navegador, sin subir nada.' },
      'svg-optimering': { name: 'Optimizador SVG', description: 'Reduce y limpia archivos SVG directamente en tu navegador: elimina metadatos, comentarios y código redundante', hint: 'Pega o sube un SVG y descarga una versión más pequeña. Todo funciona localmente.' },
      'video-till-gif': { name: 'Vídeo a GIF', description: 'Convierte un clip de vídeo en un GIF animado: elige inicio, fin, fotogramas y tamaño', hint: 'Todo funciona localmente en tu navegador — el vídeo nunca se sube.' },
      'srt-redigerare': { name: 'Editor de SRT', description: 'Edita subtítulos SRT: cambia el texto, ajusta los tiempos y desplaza todo el archivo', hint: 'Sube o pega un archivo .srt. Todo funciona localmente en tu navegador.' },
      'uuid-generator': { name: 'Generador de UUID', description: 'Crea códigos de identificación únicos (UUID) que nunca se repiten — útiles para etiquetar registros y archivos', hint: 'Un UUID es un código único con el aspecto de "f47ac10b-58cc-4372-a567-0e02b2c3d479" — tan largo y aleatorio que la probabilidad de que dos programas creen el mismo por casualidad es prácticamente cero. Se usa para dar identificadores únicos a cosas dentro de un programa. Copia uno o todos a la vez.' },
      'epoch-omvandlare': { name: 'Conversor de epoch', description: 'Convierte entre una fecha/hora normal y una marca de tiempo Unix (los segundos con que los ordenadores miden el tiempo)', hint: 'Los ordenadores suelen contar el tiempo como un único número grande — segundos desde la medianoche del 1 de enero de 1970 (por ejemplo, 1700000000), llamado marca de tiempo Unix o "epoch time". Si viste uno de estos números en un registro y quieres saber la fecha, conviértelo aquí. Admite segundos y milisegundos.' },
      'bas-omvandlare': { name: 'Conversor de bases', description: 'Convierte números entre sistemas numéricos — binario, octal, decimal (números normales) y hexadecimal', hint: 'Normalmente contamos en "base 10" (decimal, 0–9), pero los ordenadores en realidad trabajan en "base 2" (binario, solo 0 y 1), y los programadores suelen usar "base 16" (hexadecimal, 0–9 y A–F) como una forma más corta de escribir binario. Escribe en cualquier campo y los demás se actualizan al instante.' },
      'ljudklipp': { name: 'Recortador de audio', description: 'Corta y recorta archivos de audio directamente en tu navegador: elige inicio y fin y descarga un WAV', hint: 'Ideal para acortar una grabación o extraer un fragmento. No se sube nada.' },
      'padgrid': { name: 'PadGrid', description: 'Un prototipo musical en cuadrícula — pulsa pads para reproducir bucles y capas de sonido', hint: 'Un prototipo inspirado en lanzadores de clips: pulsa un pad para reproducir un bucle, pulsa otro en la misma columna para cambiarlo, o añade una columna completamente distinta para crear una capa. Incluye una guía paso a paso de cómo funciona.' },
      'streckkod': { name: 'Generador de códigos de barras', description: 'Crea códigos de barras (CODE128, EAN, UPC y más) y descárgalos como PNG o SVG', hint: 'Todo funciona localmente en tu navegador — no se sube nada.' },
      'favicon-generator': { name: 'Generador de favicon', description: 'Crea el pequeño icono que aparece en la pestaña del navegador (favicon) desde cualquier imagen' },
      'pixelraknare': { name: 'Contador de píxeles', description: 'Contar píxeles y medir distancias en imágenes' },
      'ascii-konst': { name: 'Arte ASCII', description: 'Convierte una imagen en un dibujo hecho de letras y caracteres (arte ASCII)' },
      'skarfilsgenerator': { name: 'Generador de archivos de corte', description: 'Crear archivos de corte para grabado láser — dibujar líneas de corte alrededor de imágenes y exportar como SVG' },
      'diff-jamforare': { name: 'Comparador Diff', description: 'Comparar dos textos y ver las diferencias resaltadas' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Convierte entre CSV (tablas de hoja de cálculo) y JSON (formato de datos para apps) en ambos sentidos' },
      'pdf-verktyg': { name: 'Herramientas PDF', description: 'Fusiona, firma y rellena archivos PDF', hint: 'Tres tareas habituales de PDF en un solo lugar: combina varios archivos en uno, dibuja tu firma directamente en el documento, o haz clic y escribe texto en un formulario. Todo ocurre localmente en tu navegador.' },
      'ocr': { name: 'OCR — Reconocimiento de texto', description: 'Extrae el texto de una imagen o captura para poder copiarlo y editarlo (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Crea tu propio juego 2D: dibuja fichas, diseña niveles y juega directamente en el navegador' },
      'metronom': { name: 'Metrónomo', description: 'Mantén el ritmo con un metrónomo digital' },
      'tonhojdsmatare': { name: 'Detector de tono', description: 'Medir tono y frecuencia a través del micrófono' },
      'vit-brus': { name: 'Ruido blanco', description: 'Reproducir ruido blanco y otros sonidos ambientales para concentrarse' },
      'kodminifierare': { name: 'Minificador de código', description: 'Reduce código JavaScript, CSS y HTML quitando caracteres innecesarios — para que las páginas carguen más rápido', hint: '"Minificar" código significa quitar todo lo que un ordenador no necesita para entenderlo — espacios, saltos de línea, comentarios — para que el archivo sea más pequeño y la web cargue más rápido. El código funciona exactamente igual después, solo que resulta más difícil de leer para una persona.' },
      'css-gradient': { name: 'Gradiente CSS', description: 'Crea degradados de color suaves y obtén el código CSS listo para pegar en una página web', hint: 'CSS es el código que controla el aspecto de una página web, y un degradado es una transición suave entre colores (por ejemplo, de azul a morado). Configura los colores y el ángulo aquí, luego copia el código y pégalo donde estés construyendo una web.' },
      'cron-tolkare': { name: 'Intérprete Cron', description: 'Traduce un horario cron (p. ej. "0 9 * * 1") a texto claro para ver cuándo se ejecuta', hint: 'Un horario cron es una forma de decirle a un ordenador "ejecuta esto todos los lunes a las 9" usando solo números y asteriscos — se usa para programar tareas automáticas en servidores. Pega uno aquí para ver, en lenguaje claro, cuándo se ejecuta realmente.' },
      'jwt-dekodare': { name: 'Decodificador JWT', description: 'Abre y lee el contenido de un JWT — el token de inicio de sesión codificado que usan apps y servicios web', hint: 'Un JWT (JSON Web Token) es un "ticket de acceso" codificado que los servicios web se pasan entre sí para recordar que has iniciado sesión, sin enviar tu contraseña cada vez. Pega un JWT aquí para ver qué contiene realmente — está codificado, no es secreto, así que cualquiera puede leerlo.' },
      'dns-uppslagning': { name: 'Búsqueda DNS', description: 'Consulta los registros DNS de un dominio — la "guía telefónica" de internet que conecta un nombre de dominio con el servidor correcto' },
      'ssl-kontroll': { name: 'Verificación SSL', description: 'Comprueba el certificado de seguridad (SSL) de un sitio web — si es válido y cuándo caduca' },
      'http-headers': { name: 'Cabeceras HTTP', description: 'Ve las cabeceras de respuesta ocultas (HTTP headers) que envía un sitio web — la información técnica detrás de una página' },
      'useragent-info': { name: 'Info de User Agent', description: 'Ver información sobre tu navegador y dispositivo' },
      'procent-raknare': { name: 'Calculadora de porcentajes', description: 'Calcular porcentajes, aumentos, disminuciones y proporciones' },
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
      sendsLabel: 'Ce qui est envoyé :',
      sendsIp: 'Votre adresse IP. C’est en soi une donnée personnelle — l’outil ne peut pas l’afficher sans interroger le service. Rien de ce que vous saisissez n’est envoyé.',
      sendsSsl: 'Uniquement le nom de domaine que vous saisissez. Les informations du certificat affichées sont déjà publiques.',
      sendsDns: 'Uniquement le nom de domaine que vous recherchez.',
      sendsHeaders: 'L’adresse complète que vous collez, y compris tout ce qui suit le point d’interrogation.',
      sendsBandwidth: 'Aucun texte. Le test se contente de télécharger et d’envoyer des données de test.',
      headersWarning: 'L’adresse transite par un proxy gratuit ouvert (AllOrigins) avec lequel nous n’avons aucun accord. Ne collez jamais de liens contenant des jetons de connexion, des clés ou des liens à usage unique — la personne qui gère le proxy peut les lire.',
      externalOutro: 'Bytebox ne stocke rien lui-même. Évitez d’envoyer des données personnelles sensibles.',
      translatorWarning: 'Le texte est envoyé à MyMemory, qui peut le stocker et le réutiliser dans une mémoire de traduction publique. Ne collez pas de noms, de numéros d’identité ou d’autres informations sensibles.',
      speechService: 'le service vocal de votre navigateur',
      speechNote: 'L’audio de votre microphone est envoyé au service vocal de votre navigateur (dans Chrome : Google) pour être transcrit. Bytebox ne stocke rien lui-même.',
      ttsNote: 'La lecture est faite par le moteur vocal de votre navigateur. Dans certains navigateurs (p. ex. Chrome), votre texte peut être envoyé à un service cloud pour certaines voix. Bytebox ne stocke rien lui-même.',
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
      kod: 'Code et Données',
      natverk: 'Réseau et Sécurité',
      berakning: 'Calcul et Conversion',
      produktivitet: 'Productivité et Outils',
      spelutveckling: 'Développement de jeux',
    },
    hashGenerator: {
      input: 'Texte',
      placeholder: 'Tapez ou collez du texte à hacher...',
      copy: 'Copier',
      copied: 'Copié !',
    },
    base64: {
      encode: 'Encoder',
      decode: 'Décoder',
      textInput: 'Texte',
      textOutput: 'Texte',
      encodePlaceholder: 'Tapez du texte à encoder...',
      decodePlaceholder: 'Collez du Base64 à décoder...',
      copy: 'Copier',
      copied: 'Copié !',
      swap: 'Échanger',
      invalidBase64: 'Chaîne Base64 invalide',
      encodingError: 'Impossible d\'encoder le texte',
    },
    jsonFormatter: {
      input: 'Entrée',
      output: 'Résultat',
      placeholder: 'Collez du JSON ici...',
      format: 'Formater',
      minify: 'Minifier',
      copy: 'Copier',
      copied: 'Copié !',
      clear: 'Effacer',
      indent: 'Indentation',
      error: 'Erreur',
    },
    regexTester: {
      pattern: 'Motif',
      patternPlaceholder: 'Tapez un regex ici...',
      flags: 'Drapeaux',
      testString: 'Chaîne de test',
      testPlaceholder: 'Tapez du texte à tester...',
      result: 'Résultat',
      matches: 'Correspondances',
      groups: 'Groupes',
      index: 'index',
      copy: 'Copier',
      copied: 'Copié !',
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
    unitConverter: {
      length: 'Longueur',
      weight: 'Poids',
      temperature: 'Température',
      speed: 'Vitesse',
      data: 'Données',
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
    markdownPreview: {
      edit: 'Éditer',
      split: 'Divisé',
      preview: 'Aperçu',
      copyHtml: 'Copier HTML',
      copied: 'Copié !',
      clear: 'Effacer',
      placeholder: 'Écrivez du Markdown ici...',
      bold: 'Gras',
      italic: 'Italique',
      strikethrough: 'Barré',
      heading: 'Titre',
      quote: 'Citation',
      code: 'Code',
      link: 'Lien',
      bulletList: 'Liste à puces',
      numberedList: 'Liste numérotée',
      table: 'Tableau',
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
    fileAnalyzer: {
      upload: 'Cliquez ou glissez un fichier ici',
      anyFile: 'Tous les types de fichiers supportés',
      fileName: 'Nom du fichier',
      fileSize: 'Taille',
      fileType: 'Type MIME',
      extension: 'Extension',
      modified: 'Dernière modification',
      dimensions: 'Dimensions',
      preview: 'Aperçu',
      contentPreview: 'Contenu (aperçu)',
    },
    percentCalc: {
      modeOf: 'X% de Y',
      modeIs: 'X est ?% de Y',
      modeChange: '% de variation',
      percent: 'Pourcentage',
      value: 'Valeur',
      total: 'Total',
      from: 'De',
      to: 'À',
      result: 'Résultat',
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
    metronome: {
      start: 'Démarrer',
      stop: 'Arrêter',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Navigateur',
      os: 'Système d\'exploitation',
      device: 'Type d\'appareil',
      platform: 'Plateforme',
      language: 'Langue',
      screen: 'Résolution d\'écran',
      window: 'Taille de la fenêtre',
      colorDepth: 'Profondeur de couleur',
      pixelRatio: 'Ratio de pixels',
      touch: 'Écran tactile',
      cores: 'Cœurs CPU',
      cookies: 'Cookies',
      onlineStatus: 'En ligne',
      copy: 'Copier',
      copied: 'Copié !',
      yes: 'Oui',
      no: 'Non',
    },
    jwtDecoder: {
      input: 'Token JWT',
      placeholder: 'Collez un token JWT ici...',
      invalid: 'Token JWT invalide',
      signature: 'Signature',
      issuedAt: 'Émis le',
      expires: 'Expire',
      notBefore: 'Pas avant',
    },
    cronParser: {
      expression: 'Expression cron',
      meaning: 'Signification',
      examples: 'Exemples',
      minute: 'Minute',
      hour: 'Heure',
      dayOfMonth: 'Jour du mois',
      month: 'Mois',
      dayOfWeek: 'Jour de la semaine',
      every: 'Chaque',
      at: 'À',
      minuteLabel: 'minute',
      minutesLabel: 'minutes',
      hourLabel: 'heure',
      hoursLabel: 'heures',
      dayLabel: 'jour',
      on: 'le',
      inMonth: 'en',
      onDay: 'le',
    },
    csvJson: {
      input: 'Entrée',
      output: 'Résultat',
      convert: 'Convertir',
      copy: 'Copier',
      copied: 'Copié !',
      error: 'Erreur de conversion — vérifiez les données',
      csvPlaceholder: 'nom,age,ville\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"nom":"Anna","age":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modifié',
      placeholderA: 'Collez le texte original...',
      placeholderB: 'Collez le texte modifié...',
      compare: 'Comparer',
      linesAdded: 'ajoutées',
      linesRemoved: 'supprimées',
    },
    whiteNoise: {
      white: 'Bruit blanc',
      pink: 'Bruit rose',
      brown: 'Bruit brun',
      volume: 'Volume',
      play: 'Jouer',
      stop: 'Arrêter',
    },
    pitchDetector: {
      start: 'Démarrer',
      stop: 'Arrêter',
      detecting: 'Écoute en cours...',
      pressStart: 'Appuyez pour commencer',
      notSupported: 'Microphone non pris en charge dans ce navigateur',
    },
    codeMinifier: {
      placeholder: 'Collez du code ici...',
      minify: 'Minifier',
      copy: 'Copier',
      copied: 'Copié !',
      saved: 'Économisé',
    },
    cssGradient: {
      linear: 'Linéaire',
      radial: 'Radial',
      angle: 'Angle',
      colors: 'Couleurs',
      addColor: 'Ajouter',
      presets: 'Préréglages',
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
    dnsLookup: {
      domainLabel: 'Nom de domaine',
      typeLabel: 'Type d\'enregistrement',
      lookup: 'Rechercher',
      looking: 'Recherche...',
      results: 'Résultats',
      noResults: 'Aucun enregistrement trouvé',
      noRecords: 'Aucun enregistrement trouvé',
      error: 'Impossible de rechercher le domaine',
      placeholder: 'example.com',
      search: 'Rechercher',
      loading: 'Recherche...',
    },
    sslCheck: {
      check: 'Vérifier',
      valid: 'Le certificat SSL est valide',
      expired: 'Le certificat a expiré',
      revoked: 'Le certificat a été révoqué',
      issuer: 'Émetteur',
      error: 'Impossible de vérifier le certificat. Vérifiez le nom de domaine.',
      notFound: 'Aucun certificat n’a Ã©tÃ© Ã©mis pour ce nom exact. Essayez le domaine principal (par ex. example.com au lieu de www.example.com) — les certificats gÃ©nÃ©riques sont listÃ©s sur le domaine principal.',
      rateLimited: 'Trop de requêtes pour le moment. Patientez un instant et réessayez.',
      placeholder: 'example.com',
      loading: 'Vérification...',
      daysLeft: 'jours restants',
      subject: 'Domaine',
      validFrom: 'Valide à partir du',
      validTo: 'Valide jusqu’au',
      covers: 'Domaines couverts',
      ctNote: 'Ces données proviennent des journaux publics Certificate Transparency et montrent le certificat le plus récemment émis pour le domaine. C’est presque toujours celui utilisé par le serveur, mais dans de rares cas le serveur peut en utiliser un autre.',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Récupérer',
      fetching: 'Récupération...',
      headers: 'Headers',
      error: 'Impossible de récupérer les headers',
      placeholder: 'https://example.com',
      loading: 'Récupération...',
      copied: 'Copié !',
      copyAll: 'Tout copier',
    },
    faviconGenerator: {
      upload: 'Cliquez ou glissez une image ici',
      downloadIco: 'Télécharger favicon.ico',
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
    pixelCounter: {
      upload: 'Cliquez ou glissez une image ici',
      dimensions: 'Dimensions',
      totalPixels: 'Total',
      distance: 'Distance',
      newImage: 'Nouvelle image',
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
      'filanalys': { name: 'Analyse de fichiers', description: 'Analyser le contenu et les métadonnées des fichiers', hint: 'Déposez n\'importe quel fichier et voyez le nom, la taille, le type MIME, l\'extension et la dernière modification. Les images affichent les dimensions, les fichiers texte affichent le contenu.' },
      'qr-kod': { name: 'Code QR', description: 'Créez des codes QR — un par un ou plusieurs à la fois', hint: 'Créez des codes QR pour des URL, des mots de passe Wi-Fi ou n’importe quel texte. Choisissez les couleurs et la taille. L’onglet \'Plusieurs codes\' en génère toute une liste d’un coup, à partir de texte collé ou d’un fichier .txt/.csv. Tout se passe localement dans votre navigateur.' },
      'base64-kodare': { name: 'Encodeur Base64', description: 'Encodez du texte et des données en Base64 et inversement — un format texte pour envoyer des données dans les liens, e-mails et le code', hint: 'Base64 transforme n\'importe quelle donnée (images, fichiers, texte) en une longue chaîne de lettres et de chiffres, comme « SGVqIQ== » — rien de secret, juste un moyen d\'envoyer des données là où seul du texte brut passe. Si quelqu\'un vous a envoyé une chaîne en Base64, collez-la et choisissez « Décoder » pour voir ce qu\'elle dit vraiment.' },
      'linjal': { name: 'Règle', description: "Mesurer les distances à l'écran", hint: "Mesurez les distances directement sur votre écran en cm ou pouces. Calibrez avec une carte bancaire pour des mesures précises." },
      'enhetsomvandlare': { name: 'Convertisseur d\'unités', description: 'Convertir entre différentes unités de mesure', hint: 'Convertissez rapidement entre unités métriques et impériales — longueur, poids, température, vitesse et taille des données.' },
      'hash-generator': { name: 'Générateur de hash', description: 'Créez une empreinte numérique (hash) d\'un texte ou de données — pour vérifier que rien n\'a été modifié', hint: 'Un hachage (hash) est comme une empreinte numérique — le même texte donne toujours exactement le même hachage, mais même une seule lettre modifiée donne un résultat totalement différent. Utilisé pour vérifier qu\'un fichier téléchargé n\'a pas été endommagé en route, ou pour stocker des mots de passe en sécurité sans stocker le mot de passe réel.' },
      'oversattare': { name: 'Traducteur', description: 'Traduire du texte entre différentes langues', hint: 'Traduisez du texte entre 19 langues directement dans votre navigateur. Changez la direction de la langue en un clic.' },
      'ip-info': { name: 'Info IP', description: 'Afficher votre adresse IP et les informations réseau' },
      'bandbreddstest': { name: 'Test de bande passante', description: 'Tester la vitesse de votre connexion Internet', hint: 'Mesurez votre vitesse de téléchargement et latence en un clic. Résultats en Mbps avec jauge visuelle et historique.' },
      'json-formaterare': { name: 'Formateur JSON', description: 'Mettez de l\'ordre et vérifiez du JSON — le format de données que les applis et services web utilisent pour échanger des informations', hint: 'JSON est une façon de structurer l\'information avec des accolades et des deux-points — comme {"nom": "Anna", "âge": 28}. Si on vous a donné un bloc de JSON compact (par un développeur ou un export, par exemple) et que vous voulez le voir bien présenté, collez-le ici.' },
      'text-till-tal': { name: 'Texte en parole', description: 'Convertir du texte écrit en audio parlé' },
      'regex-testare': { name: 'Testeur de regex', description: 'Testez des motifs de recherche (regex) qui trouvent et correspondent au texte — voyez les correspondances surlignées en direct', hint: 'Un motif regex (abréviation d\'« expression régulière ») décrit à quoi doit ressembler un texte, pour le trouver ou le vérifier — par exemple « est-ce une adresse e-mail valide ? ». Surtout utilisé par les développeurs. Écrivez un motif et voyez les correspondances se surligner en direct, avec groupes de capture et index.' },
      'bildkomprimering': { name: "Compression d'images", description: 'Compresser des images sans perte de qualité', hint: 'Réduisez la taille des fichiers image sans perdre trop de qualité. Choisissez le niveau de compression et la largeur max — tout se passe localement.' },
      'markdown-forhandsgranskning': { name: 'Aperçu Markdown', description: 'Écrivez du texte avec Markdown (mise en forme simple avec des symboles comme * et #) et voyez la page finie aussitôt', hint: 'Écrivez du Markdown et voyez le résultat en direct. Parfait pour les fichiers README, la documentation ou les articles de blog — avec vue partagée et export HTML.' },
      'mediakonverterare': { name: 'Convertisseur multimédia', description: 'Convertir entre formats audio et vidéo — MP4, MP3, WAV, WebM, OGG et plus', hint: 'Convertissez des fichiers audio et vidéo directement dans votre navigateur sans envoyer de fichiers. Supporte WAV, WebM et extraction audio.' },
      'brodyrkortsvisare': { name: 'Visionneuse de broderie', description: 'Afficher et prévisualiser des motifs de broderie aux formats PES, DST, JEF et autres', hint: 'Chargez des fichiers de broderie et voyez le motif rendu avec les couleurs de fil, le nombre de points et les dimensions.' },
      'bildbeskärare': { name: 'Rogneur d\'images', description: 'Rogner des images à la taille et aux proportions souhaitées' },
      'bakgrundsborttagare': { name: 'Suppression d\'arrière-plan', description: 'Supprimer automatiquement l\'arrière-plan des images' },
      'heic-till-jpg': { name: 'HEIC vers JPG', description: 'Convertir des photos iPhone (HEIC) en JPG ou PNG', hint: 'Les iPhone enregistrent les photos en HEIC, que beaucoup d\'ordinateurs ne peuvent pas ouvrir. Convertissez en JPG ou PNG — tout en local, rien n\'est envoyé.' },
      'metadata-tvatt': { name: 'Nettoyeur de métadonnées', description: 'Voir et supprimer les métadonnées cachées (GPS, date, appareil) des images', hint: 'Les photos contiennent souvent votre position GPS exacte. Voyez ce qui est caché dans l\'image et supprimez-le — en local, rien n\'est envoyé.' },
      'passfoto': { name: 'Photo d\'identité', description: 'Créez des photos de passeport et d\'identité aux dimensions exactes en mm', hint: 'Recadrez, zoomez et imprimez plusieurs copies sur une feuille — tout en local dans votre navigateur, rien n\'est envoyé.' },
      'svg-optimering': { name: 'Optimiseur SVG', description: 'Réduisez et nettoyez les fichiers SVG directement dans votre navigateur : supprimez métadonnées, commentaires et code inutile', hint: 'Collez ou importez un SVG et téléchargez une version plus petite. Tout fonctionne en local.' },
      'video-till-gif': { name: 'Vidéo en GIF', description: 'Transformez un clip vidéo en GIF animé : choisissez début, fin, images par seconde et taille', hint: 'Tout fonctionne en local dans votre navigateur — la vidéo n\'est jamais envoyée.' },
      'srt-redigerare': { name: 'Éditeur SRT', description: 'Modifiez des sous-titres SRT : changez le texte, ajustez les temps et décalez tout le fichier', hint: 'Importez ou collez un fichier .srt. Tout fonctionne en local dans votre navigateur.' },
      'uuid-generator': { name: 'Générateur d\'UUID', description: 'Créez des codes d\'identification uniques (UUID) qui ne se répètent jamais — pratique pour étiqueter enregistrements et fichiers', hint: 'Un UUID est un code unique qui ressemble à « f47ac10b-58cc-4372-a567-0e02b2c3d479 » — assez long et aléatoire pour que le risque que deux programmes créent le même par hasard soit quasiment nul. Utilisé pour donner des identifiants uniques à des éléments dans un logiciel. Copiez-en un ou tous à la fois.' },
      'epoch-omvandlare': { name: 'Convertisseur epoch', description: 'Convertissez entre une date/heure normale et un horodatage Unix (les secondes avec lesquelles les ordinateurs comptent le temps)', hint: 'Les ordinateurs comptent souvent le temps comme un seul grand nombre — le nombre de secondes depuis minuit, le 1er janvier 1970 (par exemple 1700000000), appelé timestamp Unix ou « epoch time ». Si vous avez repéré un tel nombre et voulez savoir quelle date cela représente, convertissez-le ici. Prend en charge les secondes et les millisecondes.' },
      'bas-omvandlare': { name: 'Convertisseur de bases', description: 'Convertissez des nombres entre systèmes de numération — binaire, octal, décimal (nombres ordinaires) et hexadécimal', hint: 'Nous comptons normalement en « base 10 » (décimal, 0–9), mais les ordinateurs travaillent en réalité en « base 2 » (binaire, seulement 0 et 1), et les programmeurs utilisent souvent la « base 16 » (hexadécimal, 0–9 et A–F) comme façon plus courte d\'écrire du binaire. Tapez dans un champ et les autres se mettent à jour instantanément.' },
      'ljudklipp': { name: 'Découpe audio', description: 'Coupez et rognez des fichiers audio directement dans votre navigateur : choisissez le début et la fin et téléchargez un WAV', hint: 'Parfait pour raccourcir un enregistrement ou extraire un extrait. Rien n\'est envoyé.' },
      'padgrid': { name: 'PadGrid', description: 'Un prototype musical en grille — cliquez sur les pads pour déclencher des boucles et superposer des sons', hint: 'Un prototype inspiré des lanceurs de clips : cliquez sur un pad pour jouer une boucle, sur un autre dans la même colonne pour la remplacer, ou ajoutez une colonne différente pour superposer une couche. Comprend une visite guidée de son fonctionnement.' },
      'streckkod': { name: 'Générateur de codes-barres', description: 'Créez des codes-barres (CODE128, EAN, UPC et plus) et téléchargez-les en PNG ou SVG', hint: 'Tout fonctionne en local dans votre navigateur — rien n\'est envoyé.' },
      'favicon-generator': { name: 'Générateur de favicon', description: 'Créez la petite icône affichée dans l\'onglet du navigateur (favicon) à partir de n\'importe quelle image' },
      'pixelraknare': { name: 'Compteur de pixels', description: 'Compter les pixels et mesurer les distances dans les images' },
      'ascii-konst': { name: 'Art ASCII', description: 'Transformez une image en dessin composé de lettres et de caractères (art ASCII)' },
      'skarfilsgenerator': { name: 'Générateur de fichiers de découpe', description: 'Créer des fichiers de découpe pour la gravure laser — dessiner des lignes de découpe autour des images et exporter en SVG' },
      'diff-jamforare': { name: 'Comparateur Diff', description: 'Comparer deux textes et voir les différences surlignées' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Convertissez entre CSV (tableaux de tableur) et JSON (format de données pour applis) dans les deux sens' },
      'pdf-verktyg': { name: 'Outils PDF', description: 'Fusionnez, signez et remplissez des fichiers PDF', hint: 'Trois tâches PDF courantes réunies : combinez plusieurs fichiers en un seul, dessinez votre signature directement sur le document, ou cliquez pour écrire du texte dans un formulaire. Tout se passe localement dans votre navigateur.' },
      'ocr': { name: 'OCR — Reconnaissance de texte', description: 'Extrayez le texte d\'une image ou capture d\'écran pour le copier et le modifier (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Créez votre propre jeu 2D — dessinez des tuiles, concevez des niveaux et jouez directement dans le navigateur' },
      'metronom': { name: 'Métronome', description: 'Gardez le rythme avec un métronome numérique' },
      'tonhojdsmatare': { name: 'Détecteur de tonalité', description: 'Mesurer la tonalité et la fréquence via le microphone' },
      'vit-brus': { name: 'Bruit blanc', description: 'Jouer du bruit blanc et d\'autres sons ambiants pour la concentration' },
      'kodminifierare': { name: 'Minifieur de code', description: 'Réduisez le code JavaScript, CSS et HTML en supprimant les caractères inutiles — pour des pages qui se chargent plus vite', hint: '« Minifier » du code signifie retirer tout ce qu\'un ordinateur n\'a pas besoin de comprendre — espaces, sauts de ligne, commentaires — pour que le fichier soit plus petit et que le site charge plus vite. Le code fonctionne exactement pareil ensuite, il devient juste plus difficile à lire pour un humain.' },
      'css-gradient': { name: 'Dégradé CSS', description: 'Créez des dégradés de couleurs et obtenez le code CSS prêt à coller dans une page web', hint: 'CSS est le code qui contrôle l\'apparence d\'un site web, et un dégradé est une transition douce entre des couleurs (par exemple du bleu au violet). Réglez les couleurs et l\'angle ici, puis copiez le code affiché et collez-le là où vous construisez un site web.' },
      'cron-tolkare': { name: 'Interpréteur Cron', description: 'Traduisez une planification cron (p. ex. "0 9 * * 1") en langage clair pour voir quand elle s\'exécute', hint: 'Une planification cron est une façon de dire à un ordinateur « exécute ceci tous les lundis à 9h » avec juste des chiffres et des astérisques — utilisé pour planifier des tâches automatiques sur des serveurs. Collez-en une pour voir, en langage clair, quand elle s\'exécute réellement.' },
      'jwt-dekodare': { name: 'Décodeur JWT', description: 'Ouvrez et lisez le contenu d\'un JWT — le jeton de connexion codé qu\'utilisent les applis et services web', hint: 'Un JWT (JSON Web Token) est un « ticket de connexion » codé que les services web s\'échangent pour se souvenir que vous êtes connecté, sans renvoyer votre mot de passe à chaque fois. Collez un JWT ici pour voir ce qu\'il contient réellement — il est codé, pas secret, n\'importe qui peut en lire le contenu.' },
      'dns-uppslagning': { name: 'Recherche DNS', description: 'Consultez les enregistrements DNS d\'un domaine — l\'« annuaire » d\'internet qui relie un nom de domaine au bon serveur' },
      'ssl-kontroll': { name: 'Vérification SSL', description: 'Vérifiez le certificat de sécurité (SSL) d\'un site web — s\'il est valide et quand il expire' },
      'http-headers': { name: 'En-têtes HTTP', description: 'Voyez les en-têtes de réponse cachés (HTTP headers) qu\'un site web renvoie — les infos techniques derrière une page' },
      'useragent-info': { name: 'Info User Agent', description: 'Afficher des informations sur votre navigateur et appareil' },
      'procent-raknare': { name: 'Calculatrice de pourcentages', description: 'Calculer des pourcentages, augmentations, diminutions et proportions' },
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
      sendsLabel: 'Was gesendet wird:',
      sendsIp: 'Ihre IP-Adresse. Sie ist selbst ein personenbezogenes Datum — das Werkzeug kann sie nicht anzeigen, ohne den Dienst zu fragen. Nichts, was Sie eingeben, wird gesendet.',
      sendsSsl: 'Nur der Domainname, den Sie eingeben. Die angezeigten Zertifikatsdaten sind bereits öffentlich.',
      sendsDns: 'Nur der Domainname, den Sie abfragen.',
      sendsHeaders: 'Die vollständige Adresse, die Sie einfügen — einschließlich allem nach dem Fragezeichen.',
      sendsBandwidth: 'Kein Text. Der Test lädt nur Testdaten herunter und hoch.',
      headersWarning: 'Die Adresse läuft über einen offenen Gratis-Proxy (AllOrigins), mit dem wir keine Vereinbarung haben. Fügen Sie niemals Links mit Login-Tokens, Schlüsseln oder Einmal-Links ein — wer den Proxy betreibt, kann sie lesen.',
      externalOutro: 'Bytebox selbst speichert nichts. Sende keine sensiblen personenbezogenen Daten.',
      translatorWarning: 'Der Text wird an MyMemory gesendet, das ihn in einem öffentlichen Übersetzungsspeicher speichern und wiederverwenden kann. Füge keine Namen, Ausweisnummern oder andere sensible Informationen ein.',
      speechService: 'der Sprachdienst deines Browsers',
      speechNote: 'Das Audio deines Mikrofons wird an den Sprachdienst deines Browsers (in Chrome: Google) gesendet, um transkribiert zu werden. Bytebox selbst speichert nichts.',
      ttsNote: 'Das Vorlesen übernimmt die Sprachausgabe deines Browsers. In manchen Browsern (z. B. Chrome) kann dein Text für bestimmte Stimmen an einen Cloud-Dienst gesendet werden. Bytebox selbst speichert nichts.',
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
      kod: 'Code & Daten',
      natverk: 'Netzwerk & Sicherheit',
      berakning: 'Berechnung & Umrechnung',
      produktivitet: 'Produktivität & Werkzeuge',
      spelutveckling: 'Spieleentwicklung',
    },
    hashGenerator: {
      input: 'Text',
      placeholder: 'Text zum Hashen eingeben oder einfügen...',
      copy: 'Kopieren',
      copied: 'Kopiert!',
    },
    base64: {
      encode: 'Kodieren',
      decode: 'Dekodieren',
      textInput: 'Text',
      textOutput: 'Text',
      encodePlaceholder: 'Text zum Kodieren eingeben...',
      decodePlaceholder: 'Base64 zum Dekodieren einfügen...',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      swap: 'Tauschen',
      invalidBase64: 'Ungültige Base64-Zeichenkette',
      encodingError: 'Text konnte nicht kodiert werden',
    },
    jsonFormatter: {
      input: 'Eingabe',
      output: 'Ergebnis',
      placeholder: 'JSON hier einfügen...',
      format: 'Formatieren',
      minify: 'Minifizieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      clear: 'Löschen',
      indent: 'Einzug',
      error: 'Fehler',
    },
    regexTester: {
      pattern: 'Muster',
      patternPlaceholder: 'Regex hier eingeben...',
      flags: 'Flags',
      testString: 'Testzeichenkette',
      testPlaceholder: 'Text zum Testen eingeben...',
      result: 'Ergebnis',
      matches: 'Treffer',
      groups: 'Gruppen',
      index: 'Index',
      copy: 'Kopieren',
      copied: 'Kopiert!',
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
    unitConverter: {
      length: 'Länge',
      weight: 'Gewicht',
      temperature: 'Temperatur',
      speed: 'Geschwindigkeit',
      data: 'Daten',
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
    markdownPreview: {
      edit: 'Bearbeiten',
      split: 'Geteilt',
      preview: 'Vorschau',
      copyHtml: 'HTML kopieren',
      copied: 'Kopiert!',
      clear: 'Löschen',
      placeholder: 'Markdown hier schreiben...',
      bold: 'Fett',
      italic: 'Kursiv',
      strikethrough: 'Durchgestrichen',
      heading: 'Überschrift',
      quote: 'Zitat',
      code: 'Code',
      link: 'Link',
      bulletList: 'Aufzählung',
      numberedList: 'Nummerierte Liste',
      table: 'Tabelle',
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
    fileAnalyzer: {
      upload: 'Klicken oder Datei hierher ziehen',
      anyFile: 'Alle Dateitypen unterstützt',
      fileName: 'Dateiname',
      fileSize: 'Größe',
      fileType: 'MIME-Typ',
      extension: 'Erweiterung',
      modified: 'Zuletzt geändert',
      dimensions: 'Abmessungen',
      preview: 'Vorschau',
      contentPreview: 'Inhalt (Vorschau)',
    },
    percentCalc: {
      modeOf: 'X% von Y',
      modeIs: 'X ist ?% von Y',
      modeChange: '% Veränderung',
      percent: 'Prozent',
      value: 'Wert',
      total: 'Gesamt',
      from: 'Von',
      to: 'Bis',
      result: 'Ergebnis',
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
    metronome: {
      start: 'Starten',
      stop: 'Stoppen',
      tapTempo: 'Tap Tempo',
    },
    userAgent: {
      browser: 'Browser',
      os: 'Betriebssystem',
      device: 'Gerätetyp',
      platform: 'Plattform',
      language: 'Sprache',
      screen: 'Bildschirmauflösung',
      window: 'Fenstergröße',
      colorDepth: 'Farbtiefe',
      pixelRatio: 'Pixelverhältnis',
      touch: 'Touchscreen',
      cores: 'CPU-Kerne',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      yes: 'Ja',
      no: 'Nein',
    },
    jwtDecoder: {
      input: 'JWT-Token',
      placeholder: 'JWT-Token hier einfügen...',
      invalid: 'Ungültiges JWT-Token',
      signature: 'Signatur',
      issuedAt: 'Ausgestellt am',
      expires: 'Läuft ab',
      notBefore: 'Nicht vor',
    },
    cronParser: {
      expression: 'Cron-Ausdruck',
      meaning: 'Bedeutung',
      examples: 'Beispiele',
      minute: 'Minute',
      hour: 'Stunde',
      dayOfMonth: 'Tag des Monats',
      month: 'Monat',
      dayOfWeek: 'Wochentag',
      every: 'Jede',
      at: 'Um',
      minuteLabel: 'Minute',
      minutesLabel: 'Minuten',
      hourLabel: 'Stunde',
      hoursLabel: 'Stunden',
      dayLabel: 'Tag',
      on: 'am',
      inMonth: 'im',
      onDay: 'den',
    },
    csvJson: {
      input: 'Eingabe',
      output: 'Ergebnis',
      convert: 'Konvertieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      error: 'Konvertierungsfehler — Eingabe überprüfen',
      csvPlaceholder: 'Name,Alter,Stadt\nAnna,28,Stockholm',
      jsonPlaceholder: '[{"Name":"Anna","Alter":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Geändert',
      placeholderA: 'Originaltext einfügen...',
      placeholderB: 'Geänderten Text einfügen...',
      compare: 'Vergleichen',
      linesAdded: 'hinzugefügt',
      linesRemoved: 'entfernt',
    },
    whiteNoise: {
      white: 'Weißes Rauschen',
      pink: 'Rosa Rauschen',
      brown: 'Braunes Rauschen',
      volume: 'Lautstärke',
      play: 'Abspielen',
      stop: 'Stoppen',
    },
    pitchDetector: {
      start: 'Starten',
      stop: 'Stoppen',
      detecting: 'Hört zu...',
      pressStart: 'Drücken zum Starten',
      notSupported: 'Mikrofon wird in diesem Browser nicht unterstützt',
    },
    codeMinifier: {
      placeholder: 'Code hier einfügen...',
      minify: 'Minifizieren',
      copy: 'Kopieren',
      copied: 'Kopiert!',
      saved: 'Gespart',
    },
    cssGradient: {
      linear: 'Linear',
      radial: 'Radial',
      angle: 'Winkel',
      colors: 'Farben',
      addColor: 'Hinzufügen',
      presets: 'Voreinstellungen',
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
    dnsLookup: {
      domainLabel: 'Domainname',
      typeLabel: 'Eintragstyp',
      lookup: 'Nachschlagen',
      looking: 'Suche...',
      results: 'Ergebnisse',
      noResults: 'Keine Einträge gefunden',
      noRecords: 'Keine Einträge gefunden',
      error: 'Domain konnte nicht nachgeschlagen werden',
      placeholder: 'example.com',
      search: 'Suchen',
      loading: 'Suche...',
    },
    sslCheck: {
      check: 'Prüfen',
      valid: 'SSL-Zertifikat ist gültig',
      expired: 'Das Zertifikat ist abgelaufen',
      revoked: 'Das Zertifikat wurde widerrufen',
      issuer: 'Aussteller',
      error: 'Zertifikat konnte nicht geprüft werden. Prüfen Sie den Domainnamen.',
      notFound: 'FÃ¼r genau diesen Namen wurde kein Zertifikat ausgestellt. Versuchen Sie die Hauptdomain (z. B. example.com statt www.example.com) — Wildcard-Zertifikate sind unter der Hauptdomain gelistet.',
      rateLimited: 'Zu viele Anfragen im Moment. Warten Sie kurz und versuchen Sie es erneut.',
      placeholder: 'example.com',
      loading: 'Prüfe...',
      daysLeft: 'Tage verbleibend',
      subject: 'Domain',
      validFrom: 'Gültig ab',
      validTo: 'Gültig bis',
      covers: 'Abgedeckte Domains',
      ctNote: 'Diese Daten stammen aus öffentlichen Certificate-Transparency-Logs und zeigen das zuletzt ausgestellte Zertifikat der Domain. Fast immer ist das auch das vom Server verwendete, in seltenen Fällen kann der Server jedoch ein anderes ausliefern.',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Abrufen',
      fetching: 'Abrufen...',
      headers: 'Headers',
      error: 'Headers konnten nicht abgerufen werden',
      placeholder: 'https://example.com',
      loading: 'Abrufen...',
      copied: 'Kopiert!',
      copyAll: 'Alle kopieren',
    },
    faviconGenerator: {
      upload: 'Klicken oder Bild hierher ziehen',
      downloadIco: 'Favicon.ico herunterladen',
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
    pixelCounter: {
      upload: 'Klicken oder Bild hierher ziehen',
      dimensions: 'Abmessungen',
      totalPixels: 'Gesamt',
      distance: 'Abstand',
      newImage: 'Neues Bild',
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
      'filanalys': { name: 'Dateianalyse', description: 'Dateiinhalte und Metadaten analysieren', hint: 'Ziehen Sie eine beliebige Datei hinein und sehen Sie Name, Größe, MIME-Typ, Erweiterung und letzte Änderung. Bilder zeigen Dimensionen, Textdateien zeigen den Inhalt.' },
      'qr-kod': { name: 'QR-Code', description: 'QR-Codes erstellen — einzeln oder viele auf einmal', hint: 'Erstellen Sie QR-Codes für URLs, WLAN-Passwörter oder beliebigen Text. Farben und Größe frei wählbar. Der Tab \'Mehrere Codes\' erzeugt eine ganze Liste auf einmal, aus eingefügtem Text oder einer .txt/.csv-Datei. Alles passiert lokal im Browser.' },
      'base64-kodare': { name: 'Base64-Kodierer', description: 'Kodiere Text und Daten in Base64 und zurück — ein Textformat, um Daten in Links, E-Mails und Code zu senden', hint: 'Base64 wandelt beliebige Daten (Bilder, Dateien, Text) in eine lange Zeichenfolge aus Buchstaben und Zahlen um, etwa „SGVqIQ==" — nichts Geheimes, nur ein Weg, Daten dorthin zu schicken, wo nur reiner Text durchkommt. Wenn Ihnen jemand eine Base64-Zeichenfolge geschickt hat, fügen Sie sie ein und wählen Sie „Dekodieren", um zu sehen, was tatsächlich drinsteht.' },
      'linjal': { name: 'Lineal', description: 'Abstände auf dem Bildschirm messen', hint: 'Messen Sie Abstände direkt auf Ihrem Bildschirm in cm oder Zoll. Kalibrieren Sie mit einer Kreditkarte für genaue Messungen.' },
      'enhetsomvandlare': { name: 'Einheitenumrechner', description: 'Zwischen verschiedenen Maßeinheiten umrechnen', hint: 'Schnell zwischen metrischen und imperialen Einheiten umrechnen — Länge, Gewicht, Temperatur, Geschwindigkeit und Datengröße.' },
      'hash-generator': { name: 'Hash-Generator', description: 'Erzeuge einen digitalen Fingerabdruck (Hash) von Text oder Daten — um zu prüfen, dass nichts verändert wurde', hint: 'Ein Hash ist wie ein digitaler Fingerabdruck — derselbe Text ergibt immer genau denselben Hash, aber schon ein einziger geänderter Buchstabe ergibt ein völlig anderes Ergebnis. Wird verwendet, um zu prüfen, ob eine heruntergeladene Datei unterwegs nicht beschädigt wurde, oder um Passwörter sicher zu speichern, ohne das eigentliche Passwort zu speichern.' },
      'oversattare': { name: 'Übersetzer', description: 'Text zwischen verschiedenen Sprachen übersetzen', hint: 'Übersetzen Sie Text zwischen 19 Sprachen direkt im Browser. Wechseln Sie die Sprachrichtung mit einem Klick.' },
      'ip-info': { name: 'IP-Info', description: 'Ihre IP-Adresse und Netzwerkinformationen anzeigen' },
      'bandbreddstest': { name: 'Bandbreitentest', description: 'Ihre Internetverbindungsgeschwindigkeit testen', hint: 'Messen Sie Ihre Download-Geschwindigkeit und Latenz mit einem Klick. Ergebnisse in Mbps mit visueller Anzeige und Verlauf.' },
      'json-formaterare': { name: 'JSON-Formatierer', description: 'Räume JSON auf und prüfe es — das Datenformat, mit dem Apps und Webdienste Informationen austauschen', hint: 'JSON ist eine Art, Informationen mit geschweiften Klammern und Doppelpunkten zu strukturieren — etwa {"name": "Anna", "alter": 28}. Wenn Sie einen zusammengequetschten JSON-Klumpen erhalten haben (z. B. von einem Entwickler oder einem Export) und ihn übersichtlich sehen möchten, fügen Sie ihn hier ein.' },
      'text-till-tal': { name: 'Text zu Sprache', description: 'Geschriebenen Text in gesprochenes Audio umwandeln' },
      'regex-testare': { name: 'Regex-Tester', description: 'Teste Suchmuster (Regex), die Text finden und abgleichen — sieh die Treffer live hervorgehoben', hint: 'Ein Regex-Muster (kurz für „regulärer Ausdruck") beschreibt, wie ein Text aussehen soll, um ihn zu finden oder zu prüfen — z. B. „ist das eine gültige E-Mail-Adresse?". Wird meist von Entwicklern genutzt. Schreiben Sie ein Muster und sehen Sie Treffer live markiert, mit Erfassungsgruppen und Index.' },
      'bildkomprimering': { name: 'Bildkomprimierung', description: 'Bilder ohne Qualitätsverlust komprimieren', hint: 'Reduzieren Sie die Dateigröße von Bildern ohne zu viel Qualitätsverlust. Wählen Sie Komprimierungsstufe und maximale Breite — alles geschieht lokal.' },
      'markdown-forhandsgranskning': { name: 'Markdown-Vorschau', description: 'Schreibe Text mit Markdown (einfache Formatierung mit Zeichen wie * und #) und sieh die fertige Seite sofort', hint: 'Schreiben Sie Markdown und sehen Sie das Ergebnis live. Perfekt für README-Dateien, Dokumentation oder Blog-Posts — mit geteilter Ansicht und HTML-Export.' },
      'mediakonverterare': { name: 'Medienkonverter', description: 'Zwischen Audio- und Videoformaten konvertieren — MP4, MP3, WAV, WebM, OGG und mehr', hint: 'Konvertieren Sie Audio- und Videodateien direkt im Browser ohne Upload. Unterstützt WAV, WebM und Audioextraktion aus Videos.' },
      'brodyrkortsvisare': { name: 'Stickdatei-Betrachter', description: 'Stickmuster aus PES, DST, JEF und anderen Formaten anzeigen und vorab ansehen', hint: 'Laden Sie Stickdateien und sehen Sie das Muster mit Fadenfarben, Stichanzahl und Abmessungen gerendert.' },
      'bildbeskärare': { name: 'Bildzuschnitt', description: 'Bilder auf gewünschte Größe und Proportionen zuschneiden' },
      'bakgrundsborttagare': { name: 'Hintergrundentferner', description: 'Hintergründe automatisch aus Bildern entfernen' },
      'heic-till-jpg': { name: 'HEIC zu JPG', description: 'iPhone-Fotos (HEIC) in JPG oder PNG umwandeln', hint: 'iPhones speichern Fotos als HEIC, das viele Computer nicht öffnen können. In JPG oder PNG umwandeln — alles lokal, nichts wird hochgeladen.' },
      'metadata-tvatt': { name: 'Metadaten-Reiniger', description: 'Versteckte Metadaten (GPS, Datum, Kamera) aus Bildern anzeigen und entfernen', hint: 'Fotos enthalten oft deinen genauen GPS-Standort. Sieh, was im Bild versteckt ist, und entferne es — lokal, nichts wird hochgeladen.' },
      'passfoto': { name: 'Passfoto', description: 'Erstelle Pass- und Ausweisfotos in exakten mm-Maßen', hint: 'Zuschneiden, zoomen und mehrere Kopien auf einem Blatt drucken — alles lokal im Browser, nichts wird hochgeladen.' },
      'svg-optimering': { name: 'SVG-Optimierer', description: 'Verkleinere und bereinige SVG-Dateien direkt im Browser – entferne Metadaten, Kommentare und überflüssigen Code', hint: 'Füge ein SVG ein oder lade es hoch und lade eine kleinere Version herunter. Alles läuft lokal.' },
      'video-till-gif': { name: 'Video zu GIF', description: 'Verwandle ein Videoclip in ein animiertes GIF – wähle Anfang, Ende, Bildrate und Größe', hint: 'Alles läuft lokal im Browser — das Video wird nie hochgeladen.' },
      'srt-redigerare': { name: 'SRT-Editor', description: 'Bearbeite SRT-Untertitel – ändere Text, passe Zeiten an und verschiebe die ganze Datei', hint: 'Lade eine .srt-Datei hoch oder füge sie ein. Alles läuft lokal im Browser.' },
      'uuid-generator': { name: 'UUID-Generator', description: 'Erzeuge eindeutige ID-Codes (UUIDs), die sich nie überschneiden — praktisch zum Kennzeichnen von Einträgen und Dateien', hint: 'Eine UUID ist ein eindeutiger Code, der aussieht wie „f47ac10b-58cc-4372-a567-0e02b2c3d479" — so lang und zufällig, dass die Chance, dass zwei Programme versehentlich dieselbe erzeugen, praktisch null ist. Wird verwendet, um Dingen in Software eindeutige IDs zu geben. Kopiere eine oder alle auf einmal.' },
      'epoch-omvandlare': { name: 'Epoch-Umrechner', description: 'Rechne zwischen normalem Datum/Uhrzeit und Unix-Zeitstempel (den Sekunden, in denen Computer die Zeit zählen) um', hint: 'Computer zählen Zeit oft als eine einzige große Zahl — Sekunden seit Mitternacht, 1. Januar 1970 (z. B. 1700000000), genannt Unix-Zeitstempel oder „Epoch Time". Wenn Sie eine solche Zahl in einem Log entdeckt haben und das Datum wissen möchten, wandeln Sie sie hier um. Unterstützt Sekunden und Millisekunden.' },
      'bas-omvandlare': { name: 'Basis-Umrechner', description: 'Rechne Zahlen zwischen Zahlensystemen um — binär, oktal, dezimal (gewöhnliche Zahlen) und hexadezimal', hint: 'Wir zählen normalerweise im Zehnersystem (dezimal, 0–9), aber Computer arbeiten eigentlich im Zweiersystem (binär, nur 0 und 1), und Programmierer verwenden oft das Sechzehnersystem (hexadezimal, 0–9 und A–F) als kürzere Schreibweise für binär. Tippen Sie in ein beliebiges Feld, und die anderen aktualisieren sich sofort.' },
      'ljudklipp': { name: 'Audio-Schneider', description: 'Schneide und kürze Audiodateien direkt im Browser – wähle Anfang und Ende und lade eine WAV herunter', hint: 'Perfekt, um eine Aufnahme zu kürzen oder einen Ausschnitt herauszunehmen. Nichts wird hochgeladen.' },
      'padgrid': { name: 'PadGrid', description: 'Ein rasterbasierter Musik-Prototyp — Pads antippen, um Loops abzuspielen und Klangebenen zu schichten', hint: 'Ein von Clip-Launchern inspirierter Prototyp: Ein Pad antippen, um einen Loop abzuspielen, ein anderes in derselben Spalte für einen Wechsel, oder eine ganz andere Spalte hinzufügen, um eine Ebene aufzubauen. Enthält eine geführte Tour durch die Funktionsweise.' },
      'streckkod': { name: 'Barcode-Generator', description: 'Erstelle Barcodes (CODE128, EAN, UPC u. a.) und lade sie als PNG oder SVG herunter', hint: 'Alles läuft lokal im Browser — nichts wird hochgeladen.' },
      'favicon-generator': { name: 'Favicon-Generator', description: 'Erstelle das kleine Symbol im Browser-Tab (Favicon) aus einem beliebigen Bild' },
      'pixelraknare': { name: 'Pixelzähler', description: 'Pixel zählen und Abstände in Bildern messen' },
      'ascii-konst': { name: 'ASCII-Kunst', description: 'Verwandle ein Bild in ein aus Buchstaben und Zeichen gebautes Bild (ASCII-Kunst)' },
      'skarfilsgenerator': { name: 'Schnittdatei-Generator', description: 'Schnittdateien für Lasergravur erstellen — Schnittlinien um Bilder zeichnen und als SVG exportieren' },
      'diff-jamforare': { name: 'Diff-Vergleicher', description: 'Zwei Texte vergleichen und Unterschiede hervorgehoben sehen' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Wandle zwischen CSV (Tabellen aus Tabellenkalkulationen) und JSON (Datenformat für Apps) in beide Richtungen um' },
      'pdf-verktyg': { name: 'PDF-Werkzeuge', description: 'PDF-Dateien zusammenführen, signieren und ausfüllen', hint: 'Drei gängige PDF-Aufgaben an einem Ort: mehrere Dateien zu einer zusammenführen, Ihre Unterschrift direkt auf das Dokument zeichnen, oder Text per Klick in ein Formular eintragen. Alles geschieht lokal in Ihrem Browser.' },
      'ocr': { name: 'OCR — Texterkennung', description: 'Lies Text aus einem Bild oder Screenshot heraus, damit du ihn kopieren und bearbeiten kannst (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Baue dein eigenes 2D-Spiel — zeichne Kacheln, gestalte Level und spiele direkt im Browser' },
      'metronom': { name: 'Metronom', description: 'Den Takt halten mit einem digitalen Metronom' },
      'tonhojdsmatare': { name: 'Tonhöhenmesser', description: 'Tonhöhe und Frequenz über das Mikrofon messen' },
      'vit-brus': { name: 'Weißes Rauschen', description: 'Weißes Rauschen und andere Hintergrundgeräusche zur Konzentration abspielen' },
      'kodminifierare': { name: 'Code-Minifizierer', description: 'Verkleinere JavaScript-, CSS- und HTML-Code, indem unnötige Zeichen entfernt werden — damit Webseiten schneller laden', hint: '„Minifizieren" von Code bedeutet, alles zu entfernen, was ein Computer nicht braucht, um ihn zu verstehen — Leerzeichen, Zeilenumbrüche, Kommentare — sodass die Datei kleiner wird und die Website schneller lädt. Der Code funktioniert danach genauso, er wird nur für Menschen schwerer lesbar.' },
      'css-gradient': { name: 'CSS-Gradient', description: 'Erstelle sanfte Farbverläufe und erhalte fertigen CSS-Code zum Einfügen in eine Webseite', hint: 'CSS ist der Code, der das Aussehen einer Website steuert, und ein Farbverlauf (Gradient) ist ein sanfter Übergang zwischen Farben (z. B. von Blau zu Lila). Stellen Sie hier Farben und Winkel ein, kopieren Sie den angezeigten Code und fügen Sie ihn dort ein, wo Sie eine Website bauen.' },
      'cron-tolkare': { name: 'Cron-Interpreter', description: 'Übersetze einen Cron-Zeitplan (z. B. "0 9 * * 1") in Klartext, damit du siehst, wann er läuft', hint: 'Ein Cron-Zeitplan ist eine Möglichkeit, einem Computer zu sagen „führe das jeden Montag um 9 Uhr aus" — nur mit Zahlen und Sternchen. Wird verwendet, um automatische Aufgaben auf Servern zu planen. Fügen Sie einen ein, um in Klartext zu sehen, wann er tatsächlich läuft.' },
      'jwt-dekodare': { name: 'JWT-Decoder', description: 'Öffne und lies den Inhalt eines JWT — des kodierten Login-Tokens, das Apps und Webdienste verwenden', hint: 'Ein JWT (JSON Web Token) ist ein codiertes „Anmelde-Ticket", das Webdienste hin- und herschicken, um sich zu merken, dass Sie angemeldet sind, ohne jedes Mal Ihr Passwort zu senden. Fügen Sie hier ein JWT ein, um zu sehen, was tatsächlich darin steht — es ist codiert, nicht geheim.' },
      'dns-uppslagning': { name: 'DNS-Abfrage', description: 'Schlage die DNS-Einträge einer Domain nach — das "Telefonbuch" des Internets, das einen Domainnamen mit dem richtigen Server verbindet' },
      'ssl-kontroll': { name: 'SSL-Prüfung', description: 'Prüfe das Sicherheitszertifikat (SSL) einer Website — ob es gültig ist und wann es abläuft' },
      'http-headers': { name: 'HTTP-Header', description: 'Sieh die verborgenen Antwort-Header (HTTP-Header), die eine Website zurücksendet — die technischen Infos hinter einer Seite' },
      'useragent-info': { name: 'User-Agent-Info', description: 'Informationen über Ihren Browser und Ihr Gerät anzeigen' },
      'procent-raknare': { name: 'Prozentrechner', description: 'Prozentsätze, Zunahmen, Abnahmen und Verhältnisse berechnen' },
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
      sendsLabel: 'O que é enviado:',
      sendsIp: 'O seu endereço IP. É em si um dado pessoal — a ferramenta não o consegue mostrar sem perguntar ao serviço. Nada do que escreve é enviado.',
      sendsSsl: 'Apenas o nome de domínio que introduz. Os dados do certificado mostrados já são públicos.',
      sendsDns: 'Apenas o nome de domínio que consulta.',
      sendsHeaders: 'O endereço completo que cola — incluindo tudo o que vem depois do ponto de interrogação.',
      sendsBandwidth: 'Nenhum texto. O teste apenas descarrega e envia dados de teste.',
      headersWarning: 'O endereço passa por um proxy gratuito aberto (AllOrigins) com o qual não temos qualquer acordo. Nunca cole ligações que contenham tokens de sessão, chaves ou ligações de utilização única — quem gere o proxy consegue lê-las.',
      externalOutro: 'O Bytebox não guarda nada. Evite enviar dados pessoais sensíveis.',
      translatorWarning: 'O texto é enviado para o MyMemory, que pode guardá-lo e reutilizá-lo numa memória de tradução pública. Não cole nomes, números de identificação ou outras informações sensíveis.',
      speechService: 'o serviço de voz do seu navegador',
      speechNote: 'O áudio do seu microfone é enviado para o serviço de voz do seu navegador (no Chrome: Google) para ser transcrito. O Bytebox não guarda nada.',
      ttsNote: 'A leitura é feita pelo motor de voz do seu navegador. Em alguns navegadores (p. ex. Chrome) o seu texto pode ser enviado para um serviço na nuvem para certas vozes. O Bytebox não guarda nada.',
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
      kod: 'Codigo e Dados',
      natverk: 'Rede e Seguranca',
      berakning: 'Calculo e Conversao',
      produktivitet: 'Produtividade e Ferramentas',
      spelutveckling: 'Desenvolvimento de jogos',
    },
    hashGenerator: {
      input: 'Texto',
      placeholder: 'Digite ou cole texto para gerar hash...',
      copy: 'Copiar',
      copied: 'Copiado!',
    },
    base64: {
      encode: 'Codificar',
      decode: 'Decodificar',
      textInput: 'Texto',
      textOutput: 'Texto',
      encodePlaceholder: 'Digite texto para codificar...',
      decodePlaceholder: 'Cole Base64 para decodificar...',
      copy: 'Copiar',
      copied: 'Copiado!',
      swap: 'Trocar',
      invalidBase64: 'String Base64 inválida',
      encodingError: 'Não foi possível codificar o texto',
    },
    jsonFormatter: {
      input: 'Entrada',
      output: 'Resultado',
      placeholder: 'Cole JSON aqui...',
      format: 'Formatar',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: 'Copiado!',
      clear: 'Limpar',
      indent: 'Recuo',
      error: 'Erro',
    },
    regexTester: {
      pattern: 'Padrão',
      patternPlaceholder: 'Digite regex aqui...',
      flags: 'Flags',
      testString: 'String de teste',
      testPlaceholder: 'Digite texto para testar...',
      result: 'Resultado',
      matches: 'Correspondências',
      groups: 'Grupos',
      index: 'índice',
      copy: 'Copiar',
      copied: 'Copiado!',
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
    unitConverter: {
      length: 'Comprimento',
      weight: 'Peso',
      temperature: 'Temperatura',
      speed: 'Velocidade',
      data: 'Dados',
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
    markdownPreview: {
      edit: 'Editar',
      split: 'Dividido',
      preview: 'Pré-visualização',
      copyHtml: 'Copiar HTML',
      copied: 'Copiado!',
      clear: 'Limpar',
      placeholder: 'Escreva Markdown aqui...',
      bold: 'Negrito',
      italic: 'Itálico',
      strikethrough: 'Tachado',
      heading: 'Título',
      quote: 'Citação',
      code: 'Código',
      link: 'Link',
      bulletList: 'Lista com marcadores',
      numberedList: 'Lista numerada',
      table: 'Tabela',
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
    fileAnalyzer: {
      upload: 'Clique ou arraste um arquivo aqui',
      anyFile: 'Todos os tipos de arquivo suportados',
      fileName: 'Nome do arquivo',
      fileSize: 'Tamanho',
      fileType: 'Tipo MIME',
      extension: 'Extensão',
      modified: 'Última modificação',
      dimensions: 'Dimensões',
      preview: 'Pré-visualização',
      contentPreview: 'Conteúdo (pré-visualização)',
    },
    percentCalc: {
      modeOf: 'X% de Y',
      modeIs: 'X é ?% de Y',
      modeChange: '% de mudança',
      percent: 'Porcentagem',
      value: 'Valor',
      total: 'Total',
      from: 'De',
      to: 'Para',
      result: 'Resultado',
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
    metronome: {
      start: 'Iniciar',
      stop: 'Parar',
      tapTempo: 'Tap tempo',
    },
    userAgent: {
      browser: 'Navegador',
      os: 'Sistema operacional',
      device: 'Tipo de dispositivo',
      platform: 'Plataforma',
      language: 'Idioma',
      screen: 'Resolução da tela',
      window: 'Tamanho da janela',
      colorDepth: 'Profundidade de cor',
      pixelRatio: 'Proporção de pixels',
      touch: 'Tela sensível ao toque',
      cores: 'Núcleos de CPU',
      cookies: 'Cookies',
      onlineStatus: 'Online',
      copy: 'Copiar',
      copied: 'Copiado!',
      yes: 'Sim',
      no: 'Não',
    },
    jwtDecoder: {
      input: 'Token JWT',
      placeholder: 'Cole um token JWT aqui...',
      invalid: 'Token JWT inválido',
      signature: 'Assinatura',
      issuedAt: 'Emitido em',
      expires: 'Expira',
      notBefore: 'Não antes de',
    },
    cronParser: {
      expression: 'Expressão cron',
      meaning: 'Significado',
      examples: 'Exemplos',
      minute: 'Minuto',
      hour: 'Hora',
      dayOfMonth: 'Dia do mês',
      month: 'Mês',
      dayOfWeek: 'Dia da semana',
      every: 'Cada',
      at: 'Às',
      minuteLabel: 'minuto',
      minutesLabel: 'minutos',
      hourLabel: 'hora',
      hoursLabel: 'horas',
      dayLabel: 'dia',
      on: 'no',
      inMonth: 'em',
      onDay: 'o',
    },
    csvJson: {
      input: 'Entrada',
      output: 'Resultado',
      convert: 'Converter',
      copy: 'Copiar',
      copied: 'Copiado!',
      error: 'Erro de conversão — verifique os dados',
      csvPlaceholder: 'nome,idade,cidade\nAnna,28,Estocolmo',
      jsonPlaceholder: '[{"nome":"Anna","idade":28}]',
    },
    diffCompare: {
      original: 'Original',
      modified: 'Modificado',
      placeholderA: 'Cole o texto original...',
      placeholderB: 'Cole o texto modificado...',
      compare: 'Comparar',
      linesAdded: 'adicionadas',
      linesRemoved: 'removidas',
    },
    whiteNoise: {
      white: 'Ruído branco',
      pink: 'Ruído rosa',
      brown: 'Ruído marrom',
      volume: 'Volume',
      play: 'Reproduzir',
      stop: 'Parar',
    },
    pitchDetector: {
      start: 'Iniciar',
      stop: 'Parar',
      detecting: 'Ouvindo...',
      pressStart: 'Pressione para começar',
      notSupported: 'Microfone não suportado neste navegador',
    },
    codeMinifier: {
      placeholder: 'Cole código aqui...',
      minify: 'Minificar',
      copy: 'Copiar',
      copied: 'Copiado!',
      saved: 'Economizado',
    },
    cssGradient: {
      linear: 'Linear',
      radial: 'Radial',
      angle: 'Ângulo',
      colors: 'Cores',
      addColor: 'Adicionar',
      presets: 'Predefinições',
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
    dnsLookup: {
      domainLabel: 'Nome de domínio',
      typeLabel: 'Tipo de registro',
      lookup: 'Pesquisar',
      looking: 'Pesquisando...',
      results: 'Resultados',
      noResults: 'Nenhum registro encontrado',
      noRecords: 'Nenhum registro encontrado',
      error: 'Não foi possível pesquisar o domínio',
      placeholder: 'example.com',
      search: 'Pesquisar',
      loading: 'Pesquisando...',
    },
    sslCheck: {
      check: 'Verificar',
      valid: 'O certificado SSL é válido',
      expired: 'O certificado expirou',
      revoked: 'O certificado foi revogado',
      issuer: 'Emissor',
      error: 'Não foi possível verificar o certificado. Verifique o nome de domínio.',
      notFound: 'NÃ£o foi emitido nenhum certificado para esse nome exato. Experimente o domÃ­nio principal (p. ex. example.com em vez de www.example.com) — os certificados wildcard sÃ£o listados no domÃ­nio principal.',
      rateLimited: 'Demasiados pedidos neste momento. Aguarde um pouco e tente novamente.',
      placeholder: 'example.com',
      loading: 'Verificando...',
      daysLeft: 'dias restantes',
      subject: 'Domínio',
      validFrom: 'Válido desde',
      validTo: 'Válido até',
      covers: 'Domínios abrangidos',
      ctNote: 'Estes dados provêm dos registos públicos de Certificate Transparency e mostram o certificado emitido mais recentemente para o domínio. É quase sempre o que o servidor utiliza, mas em casos raros o servidor pode usar outro.',
    },
    httpHeaders: {
      urlLabel: 'URL',
      fetch: 'Buscar',
      fetching: 'Buscando...',
      headers: 'Headers',
      error: 'Não foi possível buscar os headers',
      placeholder: 'https://example.com',
      loading: 'Buscando...',
      copied: 'Copiado!',
      copyAll: 'Copiar tudo',
    },
    faviconGenerator: {
      upload: 'Clique ou arraste uma imagem aqui',
      downloadIco: 'Baixar favicon.ico',
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
    pixelCounter: {
      upload: 'Clique ou arraste uma imagem aqui',
      dimensions: 'Dimensões',
      totalPixels: 'Total',
      distance: 'Distância',
      newImage: 'Nova imagem',
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
      'filanalys': { name: 'Análise de arquivos', description: 'Analisar conteúdo e metadados de arquivos', hint: 'Arraste qualquer arquivo e veja nome, tamanho, tipo MIME, extensão e última modificação. Imagens mostram dimensões, arquivos de texto mostram o conteúdo.' },
      'qr-kod': { name: 'Código QR', description: 'Crie códigos QR — um de cada vez ou muitos ao mesmo tempo', hint: 'Crie códigos QR para URLs, palavras-passe de Wi-Fi ou qualquer texto. Escolha cores e tamanho. O separador \'Vários códigos\' gera uma lista inteira de uma vez, a partir de texto colado ou de um ficheiro .txt/.csv. Tudo acontece localmente no navegador.' },
      'base64-kodare': { name: 'Codificador Base64', description: 'Codifique texto e dados para Base64 e de volta — um formato de texto para enviar dados em links, e-mails e código', hint: 'Base64 transforma qualquer dado (imagens, ficheiros, texto) numa longa sequência de letras e números, tipo "SGVqIQ==" — nada secreto, apenas uma forma de enviar dados por sítios onde só passa texto simples. Se alguém te enviou uma sequência em Base64, cola-a e escolhe "Descodificar" para ver o que realmente diz.' },
      'linjal': { name: 'Régua', description: 'Medir distâncias na tela', hint: 'Meça distâncias diretamente na sua tela em cm ou polegadas. Calibre com um cartão de crédito para medidas exatas.' },
      'enhetsomvandlare': { name: 'Conversor de unidades', description: 'Converter entre diferentes unidades de medida', hint: 'Converta rapidamente entre unidades métricas e imperiais — comprimento, peso, temperatura, velocidade e tamanho de dados.' },
      'hash-generator': { name: 'Gerador de hash', description: 'Crie uma impressão digital (hash) de um texto ou dados — para verificar que nada foi alterado', hint: 'Um hash é como uma impressão digital — o mesmo texto dá sempre exatamente o mesmo hash, mas até uma única letra alterada dá um resultado completamente diferente. Usado para verificar que um ficheiro descarregado não foi danificado pelo caminho, ou para guardar palavras-passe com segurança sem guardar a palavra-passe real.' },
      'oversattare': { name: 'Tradutor', description: 'Traduzir texto entre diferentes idiomas', hint: 'Traduza texto entre 19 idiomas diretamente no seu navegador. Troque a direção do idioma com um clique.' },
      'ip-info': { name: 'Info IP', description: 'Mostrar seu endereço IP e informações de rede' },
      'bandbreddstest': { name: 'Teste de largura de banda', description: 'Testar a velocidade da sua conexão com a Internet', hint: 'Meça sua velocidade de download e latência com um clique. Resultados em Mbps com indicador visual e histórico.' },
      'json-formaterare': { name: 'Formatador JSON', description: 'Organize e verifique JSON — o formato de dados que apps e serviços web usam para trocar informação', hint: 'JSON é uma forma de estruturar informação com chavetas e dois pontos — algo como {"nome": "Ana", "idade": 28}. Se te deram um bloco de JSON todo amontoado (por exemplo, de um programador ou uma exportação) e queres vê-lo bem organizado, cola-o aqui.' },
      'text-till-tal': { name: 'Texto para fala', description: 'Converter texto escrito em áudio falado' },
      'regex-testare': { name: 'Testador de regex', description: 'Teste padrões de busca (regex) que encontram e correspondem a texto — veja as correspondências destacadas ao vivo', hint: 'Um padrão regex (abreviatura de "expressão regular") descreve como um texto deve ser, para o encontrar ou verificar — por exemplo, "isto é um endereço de e-mail válido?". Usado sobretudo por programadores. Escreve um padrão e vê as correspondências a serem destacadas ao vivo, com grupos de captura e índice.' },
      'bildkomprimering': { name: 'Compressão de imagens', description: 'Comprimir imagens sem perder qualidade', hint: 'Reduza o tamanho de arquivos de imagem sem perder muita qualidade. Escolha nível de compressão e largura máxima — tudo acontece localmente.' },
      'markdown-forhandsgranskning': { name: 'Pré-visualização Markdown', description: 'Escreva texto com Markdown (formatação simples com símbolos como * e #) e veja a página final na hora', hint: 'Escreva Markdown e veja o resultado ao vivo. Perfeito para arquivos README, documentação ou posts de blog — com vista dividida e exportação HTML.' },
      'mediakonverterare': { name: 'Conversor de mídia', description: 'Converter entre formatos de áudio e vídeo — MP4, MP3, WAV, WebM, OGG e mais', hint: 'Converta arquivos de áudio e vídeo diretamente no navegador sem enviar a nenhum servidor. Suporta WAV, WebM e extração de áudio.' },
      'brodyrkortsvisare': { name: 'Visualizador de bordado', description: 'Visualizar e pré-visualizar padrões de bordado em formatos PES, DST, JEF e outros', hint: 'Carregue arquivos de bordado e veja o padrão renderizado com cores de linha, contagem de pontos e dimensões.' },
      'bildbeskärare': { name: 'Recortador de imagens', description: 'Recortar imagens no tamanho e proporção desejados' },
      'bakgrundsborttagare': { name: 'Removedor de fundo', description: 'Remover fundos de imagens automaticamente' },
      'heic-till-jpg': { name: 'HEIC para JPG', description: 'Converter fotos de iPhone (HEIC) para JPG ou PNG', hint: 'Os iPhones guardam fotos como HEIC, que muitos computadores não conseguem abrir. Converta para JPG ou PNG — tudo localmente, nada é enviado.' },
      'metadata-tvatt': { name: 'Limpador de metadados', description: 'Ver e remover metadados ocultos (GPS, data, câmara) de imagens', hint: 'As fotos contêm frequentemente a sua localização GPS exata. Veja o que está oculto na imagem e remova tudo — localmente, nada é enviado.' },
      'passfoto': { name: 'Foto de passaporte', description: 'Crie fotos de passaporte e de identificação com as medidas exatas em mm', hint: 'Recorte, aproxime e imprima várias cópias numa folha — tudo localmente no seu navegador, nada é enviado.' },
      'svg-optimering': { name: 'Otimizador SVG', description: 'Reduza e limpe ficheiros SVG diretamente no navegador – remova metadados, comentários e código desnecessário', hint: 'Cole ou carregue um SVG e descarregue uma versão mais pequena. Tudo funciona localmente.' },
      'video-till-gif': { name: 'Vídeo para GIF', description: 'Transforme um clipe de vídeo num GIF animado – escolha início, fim, fotogramas e tamanho', hint: 'Tudo funciona localmente no navegador — o vídeo nunca é enviado.' },
      'srt-redigerare': { name: 'Editor de SRT', description: 'Edite legendas SRT – altere o texto, ajuste os tempos e desloque o ficheiro inteiro', hint: 'Carregue ou cole um ficheiro .srt. Tudo funciona localmente no navegador.' },
      'uuid-generator': { name: 'Gerador de UUID', description: 'Crie códigos de identificação únicos (UUID) que nunca se repetem — úteis para etiquetar registos e ficheiros', hint: 'Um UUID é um código único que se parece com "f47ac10b-58cc-4372-a567-0e02b2c3d479" — suficientemente longo e aleatório para que a hipótese de dois programas criarem o mesmo por acaso seja praticamente nula. Usado para dar identificadores únicos a coisas dentro de um programa. Copia um ou todos de uma vez.' },
      'epoch-omvandlare': { name: 'Conversor de epoch', description: 'Converta entre uma data/hora normal e uma marca de tempo Unix (os segundos com que os computadores contam o tempo)', hint: 'Os computadores costumam contar o tempo como um único número grande — segundos desde a meia-noite de 1 de janeiro de 1970 (por exemplo, 1700000000), chamado timestamp Unix ou "epoch time". Se encontraste um número desses num registo e queres saber a data, converte-o aqui. Suporta segundos e milissegundos.' },
      'bas-omvandlare': { name: 'Conversor de bases', description: 'Converta números entre sistemas numéricos — binário, octal, decimal (números normais) e hexadecimal', hint: 'Normalmente contamos em "base 10" (decimal, 0–9), mas os computadores trabalham na realidade em "base 2" (binário, só 0 e 1), e os programadores costumam usar "base 16" (hexadecimal, 0–9 e A–F) como forma mais curta de escrever binário. Escreve em qualquer campo e os outros atualizam-se instantaneamente.' },
      'ljudklipp': { name: 'Cortador de áudio', description: 'Corte e apare ficheiros de áudio diretamente no navegador – escolha o início e o fim e descarregue um WAV', hint: 'Ideal para encurtar uma gravação ou extrair um excerto. Nada é enviado.' },
      'padgrid': { name: 'PadGrid', description: 'Um protótipo musical em grelha — clica nos pads para tocar loops e sobrepor sons', hint: 'Um protótipo inspirado em lançadores de clips: clica num pad para tocar um loop, noutro na mesma coluna para o trocar, ou adiciona uma coluna totalmente diferente para construir uma camada. Inclui uma visita guiada de como funciona.' },
      'streckkod': { name: 'Gerador de códigos de barras', description: 'Crie códigos de barras (CODE128, EAN, UPC e outros) e descarregue como PNG ou SVG', hint: 'Tudo funciona localmente no navegador — nada é enviado.' },
      'favicon-generator': { name: 'Gerador de favicon', description: 'Crie o pequeno ícone que aparece no separador do navegador (favicon) a partir de qualquer imagem' },
      'pixelraknare': { name: 'Contador de pixels', description: 'Contar pixels e medir distâncias em imagens' },
      'ascii-konst': { name: 'Arte ASCII', description: 'Transforme uma imagem num desenho feito de letras e caracteres (arte ASCII)' },
      'skarfilsgenerator': { name: 'Gerador de arquivo de corte', description: 'Criar arquivos de corte para gravação a laser — desenhar linhas de corte ao redor de imagens e exportar como SVG' },
      'diff-jamforare': { name: 'Comparador Diff', description: 'Comparar dois textos e ver as diferenças destacadas' },
      'csv-json': { name: 'CSV ↔ JSON', description: 'Converta entre CSV (tabelas de folha de cálculo) e JSON (formato de dados para apps) nos dois sentidos' },
      'pdf-verktyg': { name: 'Ferramentas PDF', description: 'Mescle, assine e preencha arquivos PDF', hint: 'Três tarefas comuns de PDF num só lugar: combine vários arquivos num só, desenhe a sua assinatura diretamente no documento, ou clique para escrever texto num formulário. Tudo acontece localmente no seu navegador.' },
      'ocr': { name: 'OCR — Reconhecimento de texto', description: 'Extraia o texto de uma imagem ou captura de ecrã para o poder copiar e editar (OCR)' },
      'traincells': { name: 'TrainCells', description: 'Crie seu próprio jogo 2D — desenhe blocos, monte fases e jogue direto no navegador' },
      'metronom': { name: 'Metrônomo', description: 'Mantenha o ritmo com um metrônomo digital' },
      'tonhojdsmatare': { name: 'Detector de tom', description: 'Medir tom e frequência pelo microfone' },
      'vit-brus': { name: 'Ruído branco', description: 'Reproduzir ruído branco e outros sons ambientes para foco' },
      'kodminifierare': { name: 'Minificador de código', description: 'Encolha código JavaScript, CSS e HTML removendo caracteres desnecessários — para páginas que carregam mais rápido', hint: '"Minificar" código significa remover tudo o que um computador não precisa para o entender — espaços, quebras de linha, comentários — para que o ficheiro fique mais pequeno e o site carregue mais depressa. O código funciona exatamente na mesma depois, só fica mais difícil de ler para uma pessoa.' },
      'css-gradient': { name: 'Gradiente CSS', description: 'Crie transições de cor suaves e obtenha o código CSS pronto para colar numa página web', hint: 'CSS é o código que controla o aspeto de um site, e um gradiente é uma transição suave entre cores (por exemplo, de azul a roxo). Define as cores e o ângulo aqui, depois copia o código apresentado e cola-o onde estiveres a construir um site.' },
      'cron-tolkare': { name: 'Interpretador Cron', description: 'Traduza um agendamento cron (p. ex. "0 9 * * 1") para texto claro e veja quando é executado', hint: 'Um agendamento cron é uma forma de dizer a um computador "executa isto todas as segundas às 9h" usando apenas números e asteriscos — usado para agendar tarefas automáticas em servidores. Cola um aqui para ver, em linguagem simples, quando é que ele realmente é executado.' },
      'jwt-dekodare': { name: 'Decodificador JWT', description: 'Abra e leia o conteúdo de um JWT — o token de início de sessão codificado que apps e serviços web usam', hint: 'Um JWT (JSON Web Token) é um "bilhete de acesso" codificado que os serviços web trocam entre si para se lembrarem de que estás autenticado, sem enviar a tua palavra-passe todas as vezes. Cola um JWT aqui para ver o que realmente contém — está codificado, não é secreto.' },
      'dns-uppslagning': { name: 'Consulta DNS', description: 'Consulte os registros DNS de um domínio — a "lista telefónica" da internet que liga um nome de domínio ao servidor certo' },
      'ssl-kontroll': { name: 'Verificação SSL', description: 'Verifique o certificado de segurança (SSL) de um site — se é válido e quando expira' },
      'http-headers': { name: 'Cabeçalhos HTTP', description: 'Veja os cabeçalhos de resposta ocultos (HTTP headers) que um site devolve — a informação técnica por trás de uma página' },
      'useragent-info': { name: 'Info User Agent', description: 'Ver informações sobre seu navegador e dispositivo' },
      'procent-raknare': { name: 'Calculadora de porcentagem', description: 'Calcular porcentagens, aumentos, diminuições e proporções' },
      'ordbehandlare': { name: 'Processador de texto', description: 'Escreva e formate documentos direto no navegador — títulos, listas, links e mais, exporte para PDF ou Word', hint: 'Uma ferramenta de escrita para redações, relatórios e lições de casa. Seu documento é salvo automaticamente no navegador e nunca sai do seu computador. Exporte como PDF (impressão) ou um arquivo Word real (.docx).', screenReason: 'Escrever e formatar documentos mais longos exige teclado e espaço suficiente na tela para a barra de ferramentas — não funciona bem numa tela pequena de celular.' },
    },
  },
}
