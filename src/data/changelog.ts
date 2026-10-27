export interface ChangelogEntry {
  version: string
  date: string
  title: Record<string, string>
  changes: {
    type: 'added' | 'changed' | 'fixed'
    text: Record<string, string>
  }[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: '1.6.0',
    date: '2026-10-27',
    title: {
      sv: 'Verktygen hänger på väggen',
      en: 'The tools hang on the wall',
      es: 'Las herramientas cuelgan de la pared',
      fr: 'Les outils sont accrochés au mur',
      de: 'Die Werkzeuge hängen an der Wand',
      pt: 'As ferramentas ficam penduradas na parede',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'ByteBox ser ut som en verktygsvägg. I en verkstad har varje verktyg sin målade kontur på väggen, så att man ser vad som finns och var det hänger. Nu hänger varje verktyg i ByteBox i sin egen kontur. Pekar du på ett verktyg, eller tabbar dit, lyfts det ur konturen.',
          en: 'ByteBox looks like a tool wall. In a workshop every tool has its outline painted on the wall, so you can see what is there and where it hangs. Now every tool in ByteBox hangs in its own outline. Point at a tool, or tab to it, and it lifts out of the outline.',
          es: 'ByteBox parece una pared de herramientas. En un taller, cada herramienta tiene su silueta pintada en la pared, así se ve qué hay y dónde va. Ahora cada herramienta de ByteBox cuelga en su propia silueta. Si señalas una herramienta, o llegas a ella con el tabulador, se levanta de la silueta.',
          fr: 'ByteBox ressemble à un mur d’outils. Dans un atelier, chaque outil a sa silhouette peinte au mur, pour voir ce qu’il y a et où il se range. Maintenant chaque outil de ByteBox est accroché dans sa propre silhouette. Si tu pointes un outil, ou y arrives avec la touche Tab, il sort de sa silhouette.',
          de: 'ByteBox sieht aus wie eine Werkzeugwand. In einer Werkstatt hat jedes Werkzeug seinen aufgemalten Umriss an der Wand, so sieht man, was da ist und wo es hingehört. Jetzt hängt jedes Werkzeug in ByteBox in seinem eigenen Umriss. Zeigst du auf ein Werkzeug oder springst mit der Tabulatortaste hin, hebt es sich aus dem Umriss.',
          pt: 'O ByteBox parece uma parede de ferramentas. Numa oficina, cada ferramenta tem o seu contorno pintado na parede, para se ver o que existe e onde fica. Agora cada ferramenta do ByteBox fica pendurada no seu próprio contorno. Ao apontar para uma ferramenta, ou chegar a ela com a tecla Tab, ela sai do contorno.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Varje verktyg har en egen bild, ritad för ByteBox, i stället för små standardikoner. Rubrikerna är större, och varje verktygssida börjar med verktyget nedplockat bredvid sitt namn, så att du ser att du kommit rätt.',
          en: 'Every tool has its own picture, drawn for ByteBox, instead of small standard icons. The headings are bigger, and every tool page starts with the tool taken down next to its name, so you can see you are in the right place.',
          es: 'Cada herramienta tiene su propia imagen, dibujada para ByteBox, en lugar de pequeños iconos estándar. Los títulos son más grandes, y cada página de herramienta empieza con la herramienta descolgada junto a su nombre, para que veas que has llegado al sitio correcto.',
          fr: 'Chaque outil a sa propre image, dessinée pour ByteBox, à la place de petites icônes standard. Les titres sont plus grands, et chaque page d’outil commence par l’outil décroché à côté de son nom, pour que tu voies que tu es au bon endroit.',
          de: 'Jedes Werkzeug hat ein eigenes Bild, für ByteBox gezeichnet, statt kleiner Standardsymbole. Die Überschriften sind größer, und jede Werkzeugseite beginnt mit dem abgehängten Werkzeug neben seinem Namen, damit du siehst, dass du richtig bist.',
          pt: 'Cada ferramenta tem a sua própria imagem, desenhada para o ByteBox, em vez de pequenos ícones padrão. Os títulos são maiores, e cada página de ferramenta começa com a ferramenta tirada da parede ao lado do nome, para você ver que chegou ao lugar certo.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Mörkt läge är djupblått i ByteBox egen färgton, och de grå ytorna inne i verktygen följer med. Högkontrast är svart och vitt som förut, utan mönster.',
          en: 'Dark mode is a deep blue in ByteBox’s own colour, and the grey areas inside the tools follow along. High contrast is black and white as before, without patterns.',
          es: 'El modo oscuro es un azul profundo en el color propio de ByteBox, y las zonas grises dentro de las herramientas lo siguen. El alto contraste es blanco y negro como antes, sin dibujos.',
          fr: 'Le mode sombre est un bleu profond dans la couleur de ByteBox, et les zones grises dans les outils suivent. Le contraste élevé reste en noir et blanc, sans motif.',
          de: 'Der dunkle Modus ist ein tiefes Blau in der eigenen Farbe von ByteBox, und die grauen Flächen in den Werkzeugen passen dazu. Hoher Kontrast ist wie bisher schwarz und weiß, ohne Muster.',
          pt: 'O modo escuro é um azul profundo na cor do próprio ByteBox, e as áreas cinzentas dentro das ferramentas acompanham. O alto contraste continua preto e branco, sem padrões.',
        },
      },
    ],
  },
  {
    version: '1.5.1',
    date: '2026-10-27',
    title: {
      sv: 'Skärmläsare hittar skrivytan i Skriva dokument',
      en: 'Screen readers can find the writing area in Write documents',
      es: 'Los lectores de pantalla encuentran el área de escritura en Escribir documentos',
      fr: 'Les lecteurs d’écran trouvent la zone d’écriture dans Écrire des documents',
      de: 'Screenreader finden die Schreibfläche in Dokumente schreiben',
      pt: 'Os leitores de tela encontram a área de escrita em Escrever documentos',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Skrivytan i Skriva dokument hade inget namn. Efter en uppdatering läste skärmläsare upp den bara som "textfält", utan att säga vad den var till för. Nu heter den "Skriva dokument", på det språk du valt.',
          en: 'The writing area in Write documents had no name. After an update, screen readers announced it only as "text field", without saying what it was for. Now it is called "Write documents", in the language you have chosen.',
          es: 'El área de escritura de Escribir documentos no tenía nombre. Tras una actualización, los lectores de pantalla la anunciaban solo como "campo de texto", sin decir para qué servía. Ahora se llama "Escribir documentos", en el idioma que hayas elegido.',
          fr: 'La zone d’écriture d’Écrire des documents n’avait pas de nom. Après une mise à jour, les lecteurs d’écran l’annonçaient seulement comme « champ de texte », sans dire à quoi elle servait. Elle s’appelle maintenant « Écrire des documents », dans la langue que tu as choisie.',
          de: 'Die Schreibfläche in Dokumente schreiben hatte keinen Namen. Nach einem Update haben Screenreader sie nur als „Textfeld“ angesagt, ohne zu sagen, wofür sie da ist. Jetzt heißt sie „Dokumente schreiben“, in der Sprache, die du gewählt hast.',
          pt: 'A área de escrita de Escrever documentos não tinha nome. Depois de uma atualização, os leitores de tela a anunciavam só como "campo de texto", sem dizer para que servia. Agora ela se chama "Escrever documentos", no idioma que você escolheu.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Underhåll bakom kulisserna: uppdaterade beroenden, en nyare Node-version i bygget och nya tester som stoppar bygget om journalen saknar ett språk eller om storleksgränsen för bilder försvinner.',
          en: 'Maintenance behind the scenes: updated dependencies, a newer Node version for the build, and new tests that stop the build if the journal is missing a language or if the size limit for images disappears.',
          es: 'Mantenimiento interno: dependencias actualizadas, una versión más reciente de Node en la compilación y pruebas nuevas que detienen la compilación si al diario le falta un idioma o si desaparece el límite de tamaño de las imágenes.',
          fr: 'Maintenance en coulisses : dépendances mises à jour, une version plus récente de Node pour la compilation, et de nouveaux tests qui arrêtent la compilation s’il manque une langue dans le journal ou si la limite de taille des images disparaît.',
          de: 'Wartung im Hintergrund: aktualisierte Abhängigkeiten, eine neuere Node-Version im Build und neue Tests, die den Build stoppen, wenn im Journal eine Sprache fehlt oder die Größengrenze für Bilder verschwindet.',
          pt: 'Manutenção nos bastidores: dependências atualizadas, uma versão mais nova do Node na compilação e testes novos que interrompem a compilação se faltar um idioma no diário ou se o limite de tamanho das imagens desaparecer.',
        },
      },
    ],
  },
  {
    version: '1.5.0',
    date: '2026-10-15',
    title: {
      sv: 'Startsidan visar alla verktyg direkt',
      en: 'The front page shows every tool straight away',
      es: 'La página de inicio muestra todas las herramientas desde el principio',
      fr: 'La page d’accueil montre tous les outils tout de suite',
      de: 'Die Startseite zeigt alle Werkzeuge sofort',
      pt: 'A página inicial mostra todas as ferramentas logo de início',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Alla verktyg syns direkt på startsidan. Förut fick du först välja enhet eller kategori innan verktygen visades. Nu frågar sidan "Vad vill du göra?" och visar alla verktyg på en gång, ordnade efter kategori, med en rad om vad varje verktyg gör och vilka enheter det fungerar på.',
          en: 'Every tool is visible straight away on the front page. Before, you first had to pick a device or a category before the tools appeared. Now the page asks "What do you want to do?" and shows all the tools at once, sorted by category, with a line on what each one does and which devices it works on.',
          es: 'Todas las herramientas se ven desde el principio en la página de inicio. Antes tenías que elegir primero un dispositivo o una categoría para ver las herramientas. Ahora la página pregunta "¿Qué quieres hacer?" y muestra todas las herramientas a la vez, ordenadas por categoría, con una línea sobre lo que hace cada una y en qué dispositivos funciona.',
          fr: 'Tous les outils sont visibles dès la page d’accueil. Avant, il fallait d’abord choisir un appareil ou une catégorie pour voir les outils. Maintenant la page demande « Qu’est-ce que tu veux faire ? » et montre tous les outils d’un coup, classés par catégorie, avec une ligne sur ce que fait chacun et sur quels appareils il fonctionne.',
          de: 'Alle Werkzeuge sind sofort auf der Startseite zu sehen. Früher musstest du zuerst ein Gerät oder eine Kategorie wählen, bevor die Werkzeuge erschienen. Jetzt fragt die Seite „Was willst du machen?“ und zeigt alle Werkzeuge auf einmal, nach Kategorie sortiert, mit einer Zeile dazu, was jedes macht und auf welchen Geräten es läuft.',
          pt: 'Todas as ferramentas aparecem logo na página inicial. Antes era preciso escolher primeiro um aparelho ou uma categoria para ver as ferramentas. Agora a página pergunta "O que você quer fazer?" e mostra todas as ferramentas de uma vez, ordenadas por categoria, com uma linha sobre o que cada uma faz e em que aparelhos funciona.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Startsidan har fått ett nytt utseende. Rubriken är större, verktygen ligger i raka listor i stället för kort, och ytan överst har ett prickigt mönster som en hålplatta i en verkstad. Ljust, mörkt och högkontrast fungerar som förut, och i högkontrast försvinner mönstret helt. Enhetsvalet ligger nu bredvid sökfältet.',
          en: 'The front page has a new look. The heading is bigger, the tools sit in plain lists instead of cards, and the area at the top has a dotted pattern like a workshop pegboard. Light, dark and high contrast work as before, and in high contrast the pattern disappears entirely. The device choice now sits next to the search field.',
          es: 'La página de inicio tiene un aspecto nuevo. El título es más grande, las herramientas están en listas sencillas en lugar de tarjetas, y la zona superior tiene un patrón de puntos como un tablero perforado de taller. Claro, oscuro y alto contraste funcionan como antes, y en alto contraste el patrón desaparece por completo. La elección de dispositivo está ahora junto al buscador.',
          fr: 'La page d’accueil a un nouvel aspect. Le titre est plus grand, les outils sont présentés en listes simples au lieu de cartes, et la zone du haut porte un motif à points comme un panneau perforé d’atelier. Clair, sombre et contraste élevé fonctionnent comme avant, et en contraste élevé le motif disparaît complètement. Le choix de l’appareil se trouve maintenant à côté du champ de recherche.',
          de: 'Die Startseite hat ein neues Aussehen. Die Überschrift ist größer, die Werkzeuge stehen in schlichten Listen statt in Karten, und der Bereich oben hat ein Punktmuster wie eine Lochwand in der Werkstatt. Hell, dunkel und hoher Kontrast funktionieren wie bisher, und bei hohem Kontrast verschwindet das Muster ganz. Die Geräteauswahl steht jetzt neben dem Suchfeld.',
          pt: 'A página inicial tem um visual novo. O título é maior, as ferramentas ficam em listas simples em vez de cartões, e a área de cima tem um padrão de pontos como um painel perfurado de oficina. Claro, escuro e alto contraste funcionam como antes, e no alto contraste o padrão desaparece por completo. A escolha de aparelho fica agora ao lado do campo de busca.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Visa bara det som funkar med din fil. Välj vad du har, till exempel en bild, en video, ett ljud eller ingen fil än, så visas bara de verktyg som kan ta emot det. Har du redan en fil kan du släppa den på sidan, så väljer ByteBox åt dig. Filen öppnas inte och skickas ingenstans. ByteBox tittar bara på filens namn och typ.',
          en: 'Show only what works with your file. Pick what you have, such as an image, a video, a sound or no file yet, and only the tools that can take it are shown. If you already have a file you can drop it on the page and ByteBox picks for you. The file is not opened and is not sent anywhere. ByteBox only looks at the file’s name and type.',
          es: 'Muestra solo lo que funciona con tu archivo. Elige lo que tienes, por ejemplo una imagen, un vídeo, un sonido o aún ningún archivo, y solo se muestran las herramientas que pueden usarlo. Si ya tienes un archivo, puedes soltarlo en la página y ByteBox elige por ti. El archivo no se abre ni se envía a ningún sitio. ByteBox solo mira el nombre y el tipo del archivo.',
          fr: 'N’afficher que ce qui marche avec ton fichier. Choisis ce que tu as, par exemple une image, une vidéo, un son ou pas encore de fichier, et seuls les outils qui peuvent le prendre s’affichent. Si tu as déjà un fichier, tu peux le déposer sur la page et ByteBox choisit pour toi. Le fichier n’est pas ouvert et n’est envoyé nulle part. ByteBox regarde seulement le nom et le type du fichier.',
          de: 'Nur zeigen, was mit deiner Datei funktioniert. Wähle, was du hast, zum Beispiel ein Bild, ein Video, einen Ton oder noch keine Datei, und es erscheinen nur die Werkzeuge, die damit umgehen können. Hast du schon eine Datei, kannst du sie auf der Seite ablegen, und ByteBox wählt für dich. Die Datei wird nicht geöffnet und nirgendwohin geschickt. ByteBox schaut nur auf Name und Typ der Datei.',
          pt: 'Mostrar só o que funciona com o seu arquivo. Escolha o que você tem, por exemplo uma imagem, um vídeo, um som ou ainda nenhum arquivo, e só aparecem as ferramentas que podem usá-lo. Se já tiver um arquivo, pode soltá-lo na página e o ByteBox escolhe por você. O arquivo não é aberto nem enviado para lugar nenhum. O ByteBox só olha o nome e o tipo do arquivo.',
        },
      },
    ],
  },
  {
    version: '1.4.0',
    date: '2026-10-06',
    title: {
      sv: 'Hela sidan skyddas, även apparna inuti',
      en: 'The whole page is protected, including the apps inside',
      es: 'Toda la página está protegida, también las aplicaciones de dentro',
      fr: 'Toute la page est protégée, y compris les applications à l’intérieur',
      de: 'Die ganze Seite ist geschützt, auch die Apps darin',
      pt: 'Toda a página está protegida, incluindo as aplicações lá dentro',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'De inbäddade apparna skyddades inte som resten av ByteBox. TrainCells och PadGrid körs i en egen ruta inuti sidan, och en sådan ruta följer sina egna regler, inte sidans runt omkring. ByteBox spärr mot att skicka data vidare gällde därför inte dem. Nu har båda apparna en egen spärr, och bygget vägrar bli klart om den försvinner nästa gång en app byggs om.',
          en: 'The embedded apps were not protected like the rest of ByteBox. TrainCells and PadGrid run in a frame of their own inside the page, and such a frame follows its own rules, not those of the page around it. ByteBox’s block against sending data onwards therefore did not cover them. Both apps now have a block of their own, and the build refuses to finish if it disappears the next time an app is rebuilt.',
          es: 'Las aplicaciones incrustadas no estaban protegidas como el resto de ByteBox. TrainCells y PadGrid se ejecutan en un marco propio dentro de la página, y ese marco sigue sus propias reglas, no las de la página que lo rodea. El bloqueo de ByteBox contra el envío de datos no las cubría. Ahora ambas aplicaciones tienen su propio bloqueo, y la compilación se niega a terminar si desaparece la próxima vez que se reconstruya una aplicación.',
          fr: 'Les applications intégrées n’étaient pas protégées comme le reste de ByteBox. TrainCells et PadGrid s’exécutent dans un cadre qui leur est propre à l’intérieur de la page, et un tel cadre suit ses propres règles, non celles de la page qui l’entoure. Le blocage de ByteBox contre l’envoi de données ne les couvrait donc pas. Les deux applications ont maintenant leur propre blocage, et la compilation refuse d’aboutir s’il disparaît lors d’une prochaine reconstruction.',
          de: 'Die eingebetteten Apps waren nicht wie der Rest von ByteBox geschützt. TrainCells und PadGrid laufen in einem eigenen Rahmen innerhalb der Seite, und ein solcher Rahmen folgt seinen eigenen Regeln, nicht denen der umgebenden Seite. ByteBox’ Sperre gegen das Weitersenden von Daten galt daher nicht für sie. Beide Apps haben nun eine eigene Sperre, und der Build verweigert den Abschluss, wenn sie beim nächsten Neubau einer App verschwindet.',
          pt: 'As aplicações incorporadas não estavam protegidas como o resto do ByteBox. O TrainCells e o PadGrid correm num quadro próprio dentro da página, e esse quadro segue as suas próprias regras, não as da página em volta. O bloqueio do ByteBox contra o envio de dados não as abrangia. Agora ambas as aplicações têm o seu próprio bloqueio, e a compilação recusa-se a terminar se ele desaparecer na próxima vez que uma aplicação for reconstruída.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'En för stor fil säger till i stället för att fliken dör. ByteBox arbetar i webbläsarens minne, så en tillräckligt stor fil fyller det och fliken stängs mitt i arbetet, ofta utan ett ord om varför. Nu får du i stället ett meddelande som säger hur stor filen är och var gränsen går. Gränserna är satta generöst: 60 MB för bilder, 250 MB för video, 150 MB för ljud och 100 MB för PDF.',
          en: 'A file that is too large now says so instead of the tab dying. ByteBox works in the browser’s memory, so a large enough file fills it and the tab closes mid-task, often without a word about why. You now get a message instead, saying how big the file is and where the limit lies. The limits are generous: 60 MB for images, 250 MB for video, 150 MB for audio and 100 MB for PDFs.',
          es: 'Un archivo demasiado grande ahora lo avisa en lugar de que muera la pestaña. ByteBox trabaja en la memoria del navegador, así que un archivo lo bastante grande la llena y la pestaña se cierra a medio trabajo, a menudo sin una palabra sobre el motivo. Ahora recibes un mensaje que dice el tamaño del archivo y dónde está el límite. Los límites son generosos: 60 MB para imágenes, 250 MB para vídeo, 150 MB para audio y 100 MB para PDF.',
          fr: 'Un fichier trop volumineux le signale au lieu de faire mourir l’onglet. ByteBox travaille dans la mémoire du navigateur : un fichier suffisamment gros la remplit et l’onglet se ferme en pleine tâche, souvent sans un mot d’explication. Vous recevez désormais un message indiquant la taille du fichier et la limite. Les limites sont généreuses : 60 Mo pour les images, 250 Mo pour la vidéo, 150 Mo pour l’audio et 100 Mo pour les PDF.',
          de: 'Eine zu große Datei sagt es jetzt, statt dass der Tab stirbt. ByteBox arbeitet im Speicher des Browsers, also füllt eine ausreichend große Datei ihn, und der Tab schließt sich mitten in der Arbeit, oft ohne ein Wort zum Grund. Stattdessen erhalten Sie nun eine Meldung, die sagt, wie groß die Datei ist und wo die Grenze liegt. Die Grenzen sind großzügig gesetzt: 60 MB für Bilder, 250 MB für Video, 150 MB für Ton und 100 MB für PDF.',
          pt: 'Um ficheiro demasiado grande avisa agora, em vez de o separador morrer. O ByteBox trabalha na memória do navegador, pelo que um ficheiro suficientemente grande a enche e o separador fecha-se a meio do trabalho, muitas vezes sem uma palavra sobre o motivo. Agora recebe uma mensagem que diz o tamanho do ficheiro e onde está o limite. Os limites são generosos: 60 MB para imagens, 250 MB para vídeo, 150 MB para áudio e 100 MB para PDF.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Journalen visar nu version 1.0.0 och framåt. Den hade vuxit till 56 poster, hela vägen tillbaka till den första veckan, och den som öppnar sidan vill oftast veta vad som hänt den senaste tiden. Hela protokollet ligger kvar i projektets changelog på GitHub, och en rad längst ner på sidan säger var.',
          en: 'The journal now shows version 1.0.0 onwards. It had grown to 56 entries, all the way back to the first week, and whoever opens the page usually wants to know what has happened recently. The full record stays in the project’s changelog on GitHub, and a line at the bottom of the page says where.',
          es: 'El diario muestra ahora la versión 1.0.0 en adelante. Había crecido hasta 56 entradas, hasta la primera semana, y quien abre la página suele querer saber qué ha pasado últimamente. El registro completo sigue en el changelog del proyecto en GitHub, y una línea al final de la página dice dónde.',
          fr: 'Le journal affiche désormais la version 1.0.0 et les suivantes. Il avait atteint 56 entrées, jusqu’à la première semaine, et celui qui ouvre la page veut le plus souvent savoir ce qui s’est passé récemment. L’intégralité du relevé reste dans le changelog du projet sur GitHub, et une ligne en bas de page indique où.',
          de: 'Das Journal zeigt nun Version 1.0.0 und spätere. Es war auf 56 Einträge angewachsen, bis zurück zur ersten Woche, und wer die Seite öffnet, will meist wissen, was in letzter Zeit passiert ist. Das vollständige Protokoll bleibt im Changelog des Projekts auf GitHub, und eine Zeile am Seitenende sagt, wo.',
          pt: 'O diário mostra agora a versão 1.0.0 e seguintes. Tinha crescido para 56 entradas, até à primeira semana, e quem abre a página quer normalmente saber o que aconteceu recentemente. O registo completo continua no changelog do projeto no GitHub, e uma linha no fundo da página diz onde.',
        },
      },
      {
        type: 'changed',
        text: {
          sv: 'Tillgänglighetskontrollen täcker nu alla tre teman. Varje sida kontrolleras automatiskt mot WCAG 2.2 AA innan en ändring får publiceras, men kontrollen körde bara i det mörka temat. Det ljusa och det högkontrasta var alltså aldrig mätta, trots att det är där kontraster brukar fallera. Nu körs alla tre, 74 kontroller i stället för 26. Alla var rena redan, men nu kan de inte sluta vara det i tysthet.',
          en: 'The accessibility check now covers all three themes. Every page is checked automatically against WCAG 2.2 AA before a change may be published, but the check only ran in the dark theme. Light and high contrast were therefore never measured, even though contrast is exactly what tends to fail there. All three now run, 74 checks instead of 26. All were clean already, but now they cannot quietly stop being so.',
          es: 'La comprobación de accesibilidad abarca ahora los tres temas. Cada página se comprueba automáticamente contra WCAG 2.2 AA antes de poder publicar un cambio, pero la comprobación solo se ejecutaba en el tema oscuro. El claro y el de alto contraste nunca se medían, aunque es ahí donde el contraste suele fallar. Ahora se ejecutan los tres, 74 comprobaciones en lugar de 26. Todos estaban ya limpios, pero ahora no pueden dejar de estarlo en silencio.',
          fr: 'La vérification d’accessibilité couvre désormais les trois thèmes. Chaque page est vérifiée automatiquement selon WCAG 2.2 AA avant qu’une modification puisse être publiée, mais la vérification ne s’exécutait que dans le thème sombre. Le thème clair et celui à contraste élevé n’étaient donc jamais mesurés, alors que c’est justement là que le contraste pèche. Les trois sont maintenant vérifiés, 74 contrôles au lieu de 26. Tous étaient déjà propres, mais ils ne peuvent plus cesser de l’être en silence.',
          de: 'Die Barrierefreiheitsprüfung deckt nun alle drei Themen ab. Jede Seite wird automatisch gegen WCAG 2.2 AA geprüft, bevor eine Änderung veröffentlicht werden darf, doch die Prüfung lief nur im dunklen Thema. Das helle und das kontrastreiche wurden also nie gemessen, obwohl gerade dort Kontraste zu scheitern pflegen. Nun laufen alle drei, 74 Prüfungen statt 26. Alle waren bereits in Ordnung, aber jetzt können sie das nicht mehr stillschweigend aufhören zu sein.',
          pt: 'A verificação de acessibilidade abrange agora os três temas. Cada página é verificada automaticamente face às WCAG 2.2 AA antes de uma alteração poder ser publicada, mas a verificação só corria no tema escuro. O claro e o de alto contraste nunca eram medidos, apesar de ser aí que o contraste costuma falhar. Agora correm os três, 74 verificações em vez de 26. Todos já estavam limpos, mas agora não podem deixar de o estar em silêncio.',
        },
      },
    ],
  },
  {
    version: '1.3.1',
    date: '2026-09-29',
    title: {
      sv: 'TrainCells och PadGrid fungerar igen',
      en: 'TrainCells and PadGrid work again',
      es: 'TrainCells y PadGrid vuelven a funcionar',
      fr: 'TrainCells et PadGrid fonctionnent à nouveau',
      de: 'TrainCells und PadGrid funktionieren wieder',
      pt: 'TrainCells e PadGrid voltam a funcionar',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'TrainCells och PadGrid visade ByteBox i stället för verktyget. Rutan som skulle innehålla appen laddade ByteBox inuti ByteBox, så ingetdera gick att använda. Orsaken låg i förrenderingen som infördes i 1.2.0: den skrev en ByteBox-sida ovanpå varje inbäddad apps egen startfil. Testet som skulle fånga det mätte tyvärr fel sak, att det fanns en fil med titel och rubrik, vilket den överskrivna filen uppfyllde. Det mäter nu att det verkligen är appen som ligger där.',
          en: 'TrainCells and PadGrid showed ByteBox instead of the tool. The frame meant to hold the app loaded ByteBox inside ByteBox, so neither could be used. The cause was the prerendering introduced in 1.2.0: it wrote a ByteBox page on top of each embedded app’s own start file. The test meant to catch this measured the wrong thing, that a file with a title and heading existed, which the overwritten file satisfied. It now measures that the app itself is really there.',
          es: 'TrainCells y PadGrid mostraban ByteBox en lugar de la herramienta. El marco que debía contener la aplicación cargaba ByteBox dentro de ByteBox, así que ninguna se podía usar. La causa era el prerenderizado introducido en 1.2.0: escribía una página de ByteBox encima del archivo de inicio de cada aplicación incrustada. La prueba que debía detectarlo medía lo que no era, que existiera un archivo con título y encabezado, algo que el archivo sobrescrito cumplía. Ahora mide que la aplicación esté realmente ahí.',
          fr: 'TrainCells et PadGrid affichaient ByteBox au lieu de l’outil. Le cadre censé contenir l’application chargeait ByteBox dans ByteBox, si bien qu’aucun des deux n’était utilisable. La cause venait du prérendu introduit en 1.2.0 : il écrivait une page ByteBox par-dessus le fichier de démarrage de chaque application intégrée. Le test censé le détecter mesurait la mauvaise chose, l’existence d’un fichier avec un titre, ce que le fichier écrasé remplissait. Il vérifie désormais que l’application est bien là.',
          de: 'TrainCells und PadGrid zeigten ByteBox statt des Werkzeugs. Der Rahmen, der die App enthalten sollte, lud ByteBox in ByteBox, sodass beides unbrauchbar war. Ursache war das in 1.2.0 eingeführte Vorrendern: Es schrieb eine ByteBox-Seite über die eigene Startdatei jeder eingebetteten App. Der Test, der das hätte finden sollen, maß das Falsche, nämlich dass eine Datei mit Titel und Überschrift vorhanden war, was die überschriebene Datei erfüllte. Er misst nun, dass wirklich die App dort liegt.',
          pt: 'O TrainCells e o PadGrid mostravam o ByteBox em vez da ferramenta. O quadro que devia conter a aplicação carregava o ByteBox dentro do ByteBox, pelo que nenhuma podia ser usada. A causa era a pré-renderização introduzida na 1.2.0: escrevia uma página do ByteBox por cima do ficheiro de arranque de cada aplicação incorporada. O teste que devia detetar isto media a coisa errada, que existisse um ficheiro com título e cabeçalho, o que o ficheiro sobrescrito cumpria. Agora mede que é mesmo a aplicação que lá está.',
        },
      },
    ],
  },
  {
    version: '1.3.0',
    date: '2026-09-24',
    title: {
      sv: 'Sidan börjar på ditt eget språk',
      en: 'The site starts in your own language',
      es: 'El sitio empieza en tu propio idioma',
      fr: 'Le site démarre dans votre langue',
      de: 'Die Seite startet in Ihrer eigenen Sprache',
      pt: 'O site começa na sua própria língua',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Språket följer nu din webbläsare vid första besöket. Förut möttes alla av svenska, oavsett var de kom ifrån, så den som följde en länk utan att kunna svenska fick själv leta rätt på språkväljaren. Nu väljs det av ByteBox sex språk som din webbläsare ber om, och talar den inget av dem blir det engelska. Väljer du själv ett språk gäller det valet, som förut. Sidan uppgav dessutom fel språk innan koden hunnit köra, vilket gav skärmläsare fel uttal.',
          en: 'The language now follows your browser on the first visit. Everyone used to meet Swedish, wherever they came from, so anyone following a link without knowing Swedish had to find the language picker themselves. Now ByteBox picks whichever of its six languages your browser asks for, and English if it speaks none of them. Choose a language yourself and that choice stands, as before. The page also stated the wrong language before the code had run, which gave screen readers the wrong pronunciation.',
          es: 'El idioma sigue ahora a tu navegador en la primera visita. Antes todo el mundo se encontraba con sueco, viniera de donde viniera, así que quien seguía un enlace sin saber sueco tenía que buscar el selector de idioma. Ahora ByteBox elige el que tu navegador pida de sus seis idiomas, y inglés si no habla ninguno. Si eliges un idioma, esa elección se mantiene, como antes. La página además declaraba el idioma equivocado antes de ejecutarse el código, lo que daba a los lectores de pantalla la pronunciación errónea.',
          fr: 'La langue suit désormais votre navigateur lors de la première visite. Auparavant, tout le monde tombait sur du suédois, d’où qu’il vienne, si bien que celui qui suivait un lien sans connaître le suédois devait trouver lui-même le sélecteur de langue. ByteBox choisit maintenant celle de ses six langues que votre navigateur demande, et l’anglais s’il n’en parle aucune. Si vous choisissez une langue, ce choix demeure, comme avant. La page annonçait en outre la mauvaise langue avant l’exécution du code, ce qui donnait aux lecteurs d’écran une prononciation erronée.',
          de: 'Die Sprache richtet sich beim ersten Besuch nun nach Ihrem Browser. Zuvor bekamen alle Schwedisch zu sehen, woher sie auch kamen, sodass jemand, der einem Link folgte ohne Schwedisch zu können, die Sprachauswahl selbst finden musste. Jetzt wählt ByteBox diejenige seiner sechs Sprachen, die Ihr Browser verlangt, und Englisch, wenn er keine davon spricht. Wählen Sie selbst eine Sprache, bleibt diese Wahl bestehen, wie bisher. Die Seite gab zudem vor dem Ausführen des Codes die falsche Sprache an, was Screenreadern die falsche Aussprache lieferte.',
          pt: 'A língua segue agora o seu navegador na primeira visita. Antes toda a gente encontrava sueco, viesse de onde viesse, pelo que quem seguia uma ligação sem saber sueco tinha de procurar sozinho o seletor de idioma. Agora o ByteBox escolhe aquela das suas seis línguas que o seu navegador pedir, e inglês se não falar nenhuma. Se escolher uma língua, essa escolha mantém-se, como antes. A página indicava ainda a língua errada antes de o código correr, o que dava aos leitores de ecrã a pronúncia errada.',
        },
      },
    ],
  },
  {
    version: '1.2.0',
    date: '2026-09-23',
    title: {
      sv: 'Länkar till enskilda verktyg fungerar nu överallt',
      en: 'Links to individual tools now work everywhere',
      es: 'Los enlaces a herramientas concretas ya funcionan en todas partes',
      fr: 'Les liens vers un outil précis fonctionnent désormais partout',
      de: 'Links zu einzelnen Werkzeugen funktionieren jetzt überall',
      pt: 'As ligações para ferramentas específicas funcionam agora em todo o lado',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Servern svarade 404 på alla sidor utom startsidan. I en webbläsare märktes det inte, eftersom en omdirigering räddade situationen, men allt som inte kör kod såg en trasig sida: sökmotorer och länkförhandsvisningar i Slack, Discord och liknande. Varje sida byggs nu som en riktig fil och svarar 200, med sin egen titel och beskrivning. Klistrar du in en länk till Beskär bild står det just det, i stället för appens generella text.',
          en: 'The server answered 404 on every page except the start page. In a browser it went unnoticed, because a redirect saved the situation, but anything that does not run code saw a broken page: search engines and link previews in Slack, Discord and the like. Every page is now built as a real file and answers 200, with its own title and description. Paste a link to Crop an image and it says exactly that, instead of the app’s general text.',
          es: 'El servidor respondía 404 en todas las páginas salvo la de inicio. En un navegador no se notaba, porque una redirección salvaba la situación, pero todo lo que no ejecuta código veía una página rota: buscadores y vistas previas de enlaces en Slack, Discord y similares. Ahora cada página se construye como un archivo real y responde 200, con su propio título y descripción. Si pegas un enlace a Recortar imagen, dirá justo eso en lugar del texto general de la app.',
          fr: 'Le serveur répondait 404 sur toutes les pages sauf l’accueil. Dans un navigateur cela passait inaperçu, car une redirection rattrapait la situation, mais tout ce qui n’exécute pas de code voyait une page cassée : moteurs de recherche et aperçus de liens dans Slack, Discord et ailleurs. Chaque page est maintenant construite comme un vrai fichier et répond 200, avec son propre titre et sa description. Collez un lien vers Recadrer une image et c’est exactement ce qui s’affiche, au lieu du texte général de l’application.',
          de: 'Der Server antwortete auf allen Seiten außer der Startseite mit 404. Im Browser fiel das nicht auf, weil eine Weiterleitung die Lage rettete, aber alles, was keinen Code ausführt, sah eine kaputte Seite: Suchmaschinen und Linkvorschauen in Slack, Discord und ähnlichem. Jede Seite wird nun als echte Datei gebaut und antwortet mit 200, mit eigenem Titel und eigener Beschreibung. Fügen Sie einen Link zu Bild zuschneiden ein, steht genau das da, statt des allgemeinen Texts der App.',
          pt: 'O servidor respondia 404 em todas as páginas exceto a inicial. Num navegador não se notava, porque um reencaminhamento salvava a situação, mas tudo o que não executa código via uma página avariada: motores de busca e pré-visualizações de ligações no Slack, Discord e afins. Cada página é agora construída como um ficheiro real e responde 200, com o seu próprio título e descrição. Cole uma ligação para Recortar imagem e é isso que aparece, em vez do texto geral da aplicação.',
        },
      },
    ],
  },
  {
    version: '1.1.0',
    date: '2026-09-23',
    title: {
      sv: 'Under huven',
      en: 'Under the hood',
      es: 'Bajo el capó',
      fr: 'Sous le capot',
      de: 'Unter der Haube',
      pt: 'Sob o capô',
    },
    changes: [
      {
        type: 'added',
        text: {
          sv: 'En ny sida beskriver hur ByteBox är byggt, för den som vill veta mer än vad verktygen gör. Vad det tekniskt är, en webbsida utan server, utan databas och utan konton. Vad det är byggt med, varför ingenting skickas någonstans, hur det fungerar utan nät, hur tillgängligheten mäts, och vad som kontrolleras innan en ändring får publiceras. Sidan nås från menyn.',
          en: 'A new page describes how ByteBox is built, for anyone who wants to know more than what the tools do. What it technically is, a website with no server, no database and no accounts. What it is built with, why nothing is sent anywhere, how it works without a connection, how accessibility is measured, and what is checked before a change may be published. The page is reached from the menu.',
          es: 'Una página nueva describe cómo está construido ByteBox, para quien quiera saber más que lo que hacen las herramientas. Qué es técnicamente, un sitio web sin servidor, sin base de datos y sin cuentas. Con qué está construido, por qué no se envía nada a ninguna parte, cómo funciona sin conexión, cómo se mide la accesibilidad y qué se comprueba antes de que un cambio pueda publicarse. Se accede desde el menú.',
          fr: 'Une nouvelle page décrit comment ByteBox est construit, pour qui veut en savoir plus que ce que font les outils. Ce que c’est techniquement, un site web sans serveur, sans base de données et sans comptes. Avec quoi il est construit, pourquoi rien n’est envoyé nulle part, comment il fonctionne sans connexion, comment l’accessibilité est mesurée, et ce qui est vérifié avant qu’une modification puisse être publiée. La page est accessible depuis le menu.',
          de: 'Eine neue Seite beschreibt, wie ByteBox gebaut ist, für alle, die mehr wissen wollen als das, was die Werkzeuge tun. Was es technisch ist, eine Website ohne Server, ohne Datenbank und ohne Konten. Womit es gebaut ist, warum nichts irgendwohin gesendet wird, wie es ohne Verbindung funktioniert, wie Barrierefreiheit gemessen wird und was geprüft wird, bevor eine Änderung veröffentlicht werden darf. Die Seite ist über das Menü erreichbar.',
          pt: 'Uma nova página descreve como o ByteBox foi construído, para quem quiser saber mais do que aquilo que as ferramentas fazem. O que é tecnicamente, um site sem servidor, sem base de dados e sem contas. Com o que foi construído, porque nada é enviado para lado nenhum, como funciona sem ligação, como se mede a acessibilidade, e o que é verificado antes de uma alteração poder ser publicada. A página é acessível a partir do menu.',
        },
      },
    ],
  },
  {
    version: '1.0.1',
    date: '2026-09-23',
    title: {
      sv: 'Menyn på telefon ligger rakt',
      en: 'The menu on phones lines up',
      es: 'El menú en el móvil está alineado',
      fr: 'Le menu sur téléphone est aligné',
      de: 'Das Menü auf dem Telefon steht gerade',
      pt: 'O menu no telemóvel está alinhado',
    },
    changes: [
      {
        type: 'fixed',
        text: {
          sv: 'Journal låg centrerat i menyn på telefon medan Installera app, språkvalet och temavalet låg vänsterställda. Skillnaden syntes bara där, eftersom menyvalen tvingas till full bredd på en liten skärm. Nu ligger de i linje.',
          en: 'Journal sat centred in the phone menu while Install app, the language picker and the theme picker were left aligned. The difference only showed there, because the menu items are stretched to full width on a small screen. They now line up.',
          es: 'Journal aparecía centrado en el menú del móvil mientras que Instalar app, el selector de idioma y el de tema estaban alineados a la izquierda. La diferencia solo se veía ahí, porque en una pantalla pequeña las opciones ocupan todo el ancho. Ahora están alineadas.',
          fr: 'Journal était centré dans le menu du téléphone alors qu’Installer l’app, le choix de la langue et celui du thème étaient alignés à gauche. L’écart ne se voyait que là, car les entrées du menu occupent toute la largeur sur un petit écran. Elles sont désormais alignées.',
          de: 'Journal stand im Telefonmenü zentriert, während App installieren, die Sprachauswahl und die Themenauswahl linksbündig waren. Der Unterschied zeigte sich nur dort, weil die Menüeinträge auf kleinem Bildschirm auf volle Breite gezogen werden. Jetzt stehen sie in einer Linie.',
          pt: 'O Journal aparecia centrado no menu do telemóvel enquanto Instalar app, a escolha de idioma e a de tema estavam alinhadas à esquerda. A diferença só se via ali, porque num ecrã pequeno as opções ocupam toda a largura. Agora estão alinhadas.',
        },
      },
    ],
  },
  {
    version: '1.0.0',
    date: '2026-09-23',
    title: {
      sv: 'ByteBox står färdigt',
      en: 'ByteBox is complete',
      es: 'ByteBox está completo',
      fr: 'ByteBox est achevé',
      de: 'ByteBox ist fertig',
      pt: 'O ByteBox está completo',
    },
    changes: [
      {
        type: 'changed',
        text: {
          sv: 'Inget verktyg behöver internet längre. Text till tal visar nu bara röster som finns i datorn. Chrome och Edge erbjuder även moln-röster, och valde man en sådan skickades texten till Google eller Microsoft. De är bortsorterade. Därför behövs ingen varning, flikarna Online och Offline är borta, och ByteBox kan säga rakt ut att ingenting lämnar din enhet.',
          en: 'No tool needs the internet any more. Text to Speech now lists only voices installed on your computer. Chrome and Edge also offer cloud voices, and choosing one sent your text to Google or Microsoft. Those are filtered out. No warning is needed, the Online and Offline tabs are gone, and ByteBox can simply say that nothing leaves your device.',
          es: 'Ninguna herramienta necesita ya internet. Texto a voz solo muestra ahora las voces instaladas en el ordenador. Chrome y Edge ofrecen además voces en la nube, y al elegir una el texto se enviaba a Google o Microsoft. Están filtradas. Ya no hace falta advertencia, las pestañas En línea y Sin conexión han desaparecido y ByteBox puede decir sin más que nada sale de tu dispositivo.',
          fr: 'Aucun outil n’a plus besoin d’internet. Texte en parole n’affiche désormais que les voix installées sur l’ordinateur. Chrome et Edge proposent aussi des voix dans le cloud, et en choisir une envoyait le texte à Google ou Microsoft. Elles sont écartées. Plus besoin d’avertissement, les onglets En ligne et Hors ligne ont disparu, et ByteBox peut dire simplement que rien ne quitte votre appareil.',
          de: 'Kein Werkzeug braucht mehr das Internet. Text zu Sprache zeigt jetzt nur Stimmen, die auf dem Computer installiert sind. Chrome und Edge bieten zusätzlich Cloud-Stimmen, und wer eine wählte, sendete den Text an Google oder Microsoft. Diese sind aussortiert. Eine Warnung ist nicht mehr nötig, die Reiter Online und Offline sind weg, und ByteBox kann schlicht sagen, dass nichts Ihr Gerät verlässt.',
          pt: 'Nenhuma ferramenta precisa já de internet. O Texto para voz mostra agora apenas vozes instaladas no computador. O Chrome e o Edge oferecem também vozes na nuvem e, ao escolher uma, o texto era enviado para a Google ou a Microsoft. Essas foram filtradas. Deixou de ser preciso um aviso, os separadores Online e Offline desapareceram, e o ByteBox pode dizer simplesmente que nada sai do seu dispositivo.',
        },
      },
      {
        type: 'added',
        text: {
          sv: 'Beskär bild har fått mallar. I stället för siffror som 4:3 heter de nu vad de är till för: Kvadrat, Inlägg, Story, Bredbild, Fotokort och Skärm, med förhållandet som underrubrik. Brodyrmönster säger vilka maskiner formaten hör till: PES för Brother, Babylock och Bernina, DST för Tajima och de flesta industrimaskiner, JEF för Janome och Elna. Bild av bokstäver berättar att det kallas ASCII-konst och var det kommer ifrån.',
          en: 'Crop an image now has presets. Instead of numbers like 4:3 they are named for what they are for: Square, Post, Story, Widescreen, Photo print and Screen, with the ratio as a subtitle. Embroidery patterns now say which machines the formats belong to: PES for Brother, Babylock and Bernina, DST for Tajima and most industrial machines, JEF for Janome and Elna. Picture made of letters explains that it is called ASCII art and where it comes from.',
          es: 'Recortar imagen tiene ahora plantillas. En lugar de cifras como 4:3 se llaman por su uso: Cuadrado, Publicación, Story, Panorámico, Foto impresa y Pantalla, con la proporción como subtítulo. Patrones de bordado indica a qué máquinas pertenecen los formatos: PES para Brother, Babylock y Bernina, DST para Tajima y la mayoría de máquinas industriales, JEF para Janome y Elna. Imagen hecha de letras explica que se llama arte ASCII y de dónde viene.',
          fr: 'Recadrer une image dispose désormais de modèles. Au lieu de chiffres comme 4:3, ils portent le nom de leur usage : Carré, Publication, Story, Écran large, Tirage photo et Écran, avec le rapport en sous-titre. Motifs de broderie indique à quelles machines appartiennent les formats : PES pour Brother, Babylock et Bernina, DST pour Tajima et la plupart des machines industrielles, JEF pour Janome et Elna. Image faite de lettres explique que cela s’appelle l’art ASCII et d’où cela vient.',
          de: 'Bild zuschneiden hat jetzt Vorlagen. Statt Zahlen wie 4:3 heißen sie nach ihrem Zweck: Quadrat, Beitrag, Story, Breitbild, Fotoabzug und Bildschirm, mit dem Seitenverhältnis als Unterzeile. Stickmuster nennt jetzt die Maschinen zu den Formaten: PES für Brother, Babylock und Bernina, DST für Tajima und die meisten Industriemaschinen, JEF für Janome und Elna. Bild aus Buchstaben erklärt, dass es ASCII-Kunst heißt und woher das kommt.',
          pt: 'O Recortar imagem passou a ter modelos. Em vez de números como 4:3, têm o nome do que servem: Quadrado, Publicação, Story, Panorâmico, Fotografia e Ecrã, com a proporção como subtítulo. Os Padrões de bordado dizem agora a que máquinas pertencem os formatos: PES para Brother, Babylock e Bernina, DST para Tajima e a maioria das máquinas industriais, JEF para Janome e Elna. A Imagem feita de letras explica que se chama arte ASCII e de onde vem.',
        },
      },
      {
        type: 'fixed',
        text: {
          sv: 'Installation på hemskärmen fungerar nu på iPhone och iPad. Det fanns bara SVG-ikoner, och ikonen för hemskärmen pekade på en sådan. iOS ignorerar det helt, så den som lade till ByteBox fick en tom ruta. Nu finns riktiga PNG-ikoner i alla storlekar som krävs, och eftersom Safari inte tillåter en installationsknapp visas i stället en kort instruktion om hur man gör via Dela-menyn.',
          en: 'Adding ByteBox to the home screen now works on iPhone and iPad. There were only SVG icons, and the home screen icon pointed at one. iOS ignores that entirely, so anyone who added ByteBox got an empty square. There are now real PNG icons in every required size, and since Safari does not allow an install button, a short instruction for the Share menu is shown instead.',
          es: 'Añadir ByteBox a la pantalla de inicio ya funciona en iPhone y iPad. Solo había iconos SVG, y el icono de la pantalla de inicio apuntaba a uno. iOS lo ignora por completo, así que quien añadía ByteBox obtenía un cuadro vacío. Ahora hay iconos PNG reales en todos los tamaños necesarios y, como Safari no permite un botón de instalación, se muestra una breve instrucción para el menú Compartir.',
          fr: 'L’ajout de ByteBox à l’écran d’accueil fonctionne désormais sur iPhone et iPad. Il n’existait que des icônes SVG, et l’icône de l’écran d’accueil pointait vers l’une d’elles. iOS l’ignore totalement : celui qui ajoutait ByteBox obtenait un carré vide. Il existe maintenant de vraies icônes PNG dans toutes les tailles requises et, comme Safari n’autorise pas de bouton d’installation, une courte instruction pour le menu Partager est affichée à la place.',
          de: 'Das Hinzufügen von ByteBox zum Home-Bildschirm funktioniert jetzt auf iPhone und iPad. Es gab nur SVG-Symbole, und das Symbol für den Home-Bildschirm zeigte auf eines davon. iOS ignoriert das vollständig, wer ByteBox hinzufügte, bekam also ein leeres Kästchen. Jetzt gibt es echte PNG-Symbole in allen nötigen Größen, und da Safari keine Installationsschaltfläche erlaubt, erscheint stattdessen eine kurze Anleitung für das Teilen-Menü.',
          pt: 'Adicionar o ByteBox ao ecrã principal funciona agora no iPhone e no iPad. Só existiam ícones SVG e o ícone do ecrã principal apontava para um deles. O iOS ignora isso por completo, por isso quem adicionava o ByteBox ficava com um quadrado vazio. Existem agora ícones PNG reais em todos os tamanhos necessários e, como o Safari não permite um botão de instalação, é mostrada em vez disso uma breve instrução para o menu Partilhar.',
        },
      },
      {
        type: 'fixed',
        text: {
          sv: 'Ordbehandlaren lovade mer än den kunde hålla. Texten sparas i webbläsaren, men bara på den enheten, och på iPhone och iPad rensar Safari den efter ungefär en vecka utan besök. Det står nu i verktyget, tillsammans med rådet att spara ner dokumentet som PDF eller Word när man är klar.',
          en: 'The word processor promised more than it could keep. The text saves in the browser, but only on that device, and on iPhone and iPad Safari clears it after roughly a week without a visit. That is now stated in the tool, together with the advice to save the document as PDF or Word when you are done.',
          es: 'El procesador de textos prometía más de lo que podía cumplir. El texto se guarda en el navegador, pero solo en ese dispositivo, y en iPhone y iPad Safari lo borra tras aproximadamente una semana sin visitas. Ahora se indica en la herramienta, junto con el consejo de guardar el documento como PDF o Word al terminar.',
          fr: 'Le traitement de texte promettait plus qu’il ne pouvait tenir. Le texte est enregistré dans le navigateur, mais uniquement sur cet appareil, et sur iPhone et iPad Safari l’efface après environ une semaine sans visite. C’est désormais indiqué dans l’outil, avec le conseil d’enregistrer le document en PDF ou en Word une fois terminé.',
          de: 'Die Textverarbeitung versprach mehr, als sie halten konnte. Der Text wird im Browser gespeichert, aber nur auf diesem Gerät, und auf iPhone und iPad löscht Safari ihn nach etwa einer Woche ohne Besuch. Das steht jetzt im Werkzeug, zusammen mit dem Rat, das Dokument am Ende als PDF oder Word zu sichern.',
          pt: 'O processador de texto prometia mais do que podia cumprir. O texto é guardado no navegador, mas apenas nesse dispositivo, e no iPhone e no iPad o Safari limpa-o ao fim de cerca de uma semana sem visitas. Isso está agora indicado na ferramenta, juntamente com o conselho de guardar o documento como PDF ou Word ao terminar.',
        },
      },
    ],
  },
]
