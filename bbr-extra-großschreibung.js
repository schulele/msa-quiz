var BBR_EXTRA_THEMES = [
  // ═══════════════════════════════════════════════════════════
  // Thema 1: Nominalisierung von Verben
  // ═══════════════════════════════════════════════════════════
  {
    id: "bbr_extra_nominalisierung",
    title: "Nominalisierung von Verben",
    emoji: "📝",
    color: "#16a34a",
    qs: [
      {
        sub: "Nominalisierte Verben im Text",
        type: "cross",
        q: "Entscheide bei den unterstrichenen Wörtern: Muss das Verb groß (nominalisiert) oder klein (als Verb) geschrieben werden?",
        rows: [
          "Das ___ (Pflanzen / pflanzen) eines Pflaumenbaums ist gut.",
          "Besitzer erleben, dass das ___ (Ernten / ernten) der Früchte toll ist.",
          "Mein sonntägliches ___ (Stehen / stehen) auf der Leiter entspannt mich.",
          "Unser ___ (Ruhen / ruhen) von der täglichen Arbeit gibt uns Frieden.",
          "Ihr ___ (Genießen / genießen) einer frischen Pflaume zu erleben, freut mich.",
          "Das ___ (Kühlen / kühlen) des Bodens ist wichtig."
        ],
        cols: ["groß (Nomen)", "klein (Verb)"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "Alle hervorgehobenen Verben sind nominalisiert, daher groß: Pflanzen, Ernten, Stehen, Ruhen, Genießen, Kühlen.",
        rule: "<div class=rbox>Verben werden großgeschrieben, wenn sie wie Nomen gebraucht werden. Man erkennt sie oft an Begleitern wie <span class=hl>Artikel (das, der, die), versteckten Artikeln (beim, zum, im)</span> oder <span class=hl>Possessivpronomen (mein, sein, unser)</span>.</div>"
      },
      {
        sub: "Nominalisierung → Verb",
        type: "cross",
        q: "Welches Verb steckt in der Nominalisierung?",
        rows: [
          "das Pflanzen → pflanzen / pflanz",
          "das Ernten → ernten / ernt",
          "mein sonntägliches Stehen → stehen / steh",
          "unser Ruhen → ruhen / ruh",
          "ihr Genießen → genießen / genieß",
          "das Kühlen → kühlen / kühl"
        ],
        cols: ["erste Option (Infinitiv)", "zweite Option (Stamm)"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "pflanzen, ernten, stehen, ruhen, genießen, kühlen sind die richtigen Verben (Infinitiv).",
        rule: "<div class=rbox>Die Nominalisierung wird vom Infinitiv des Verbs abgeleitet: pflanzen → das Pflanzen, ernten → das Ernten usw.</div>"
      },
      {
        sub: "Verb oder Nomen?",
        type: "cross",
        q: "Muss das Verb in der Klammer als Verb (klein) oder als Nomen (groß) in die Lücke?",
        rows: [
          "Pflaumen ___ (schmecken) süß.",
          "Das ___ (schenken) einer solchen Frucht eignet sich besonders.",
          "Das ___ (schmecken) von Süße zeigt die Herzlichkeit.",
          "Das ___ (erblicken) eines kräftigen Blau-Lila freut das Herz.",
          "Das Licht ___ (freuen) das Herz.",
          "Die ___ (übergeben) einer Pflaume ist das Liebevollste."
        ],
        cols: ["Verb (klein)", "Nomen (groß)"],
        correct: [0, 1, 1, 1, 0, 1],
        model: "schmecken, freuen (Verben) bleiben klein; Schenken, Schmecken, Erblicken, Übergabe werden als Nomen großgeschrieben.",
        rule: "<div class=rbox>Signalwörter wie <span class=hl>das, die, der</span> oder Possessivpronomen zeigen an, dass ein Verb als Nomen gebraucht wird. Steht kein Signalwort, bleibt es klein.</div>"
      },
      {
        sub: "Verben mit Signalwort nominalisieren",
        type: "cross",
        q: "Setze das Verb mit dem gegebenen Signalwort richtig ein (Groß- oder Kleinschreibung).",
        rows: [
          "lachen → sein ________",
          "kichern → ihr ________",
          "grinsen → das ________",
          "lieben → beim ________",
          "vergöttern → sein ________",
          "anhimmeln → zum ________"
        ],
        cols: ["groß (Nominalisierung)", "klein (Verb)"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "sein Lachen, ihr Kichern, das Grinsen, beim Lieben, sein Vergöttern, zum Anhimmeln – alle nominalisiert, daher groß.",
        rule: "<div class=rbox>Nach Signalwörtern wie <span class=hl>mein, dein, sein, ihr, unser</span> sowie nach <span class=hl>beim, zum, im, am</span> wird das Verb nominalisiert und großgeschrieben.</div>"
      },
      {
        sub: "Adjektiv + Nominalisierung",
        type: "cross",
        q: "Welche Kombination aus Signalwort, Adjektiv und nominalisiertem Verb ist korrekt geschrieben?",
        rows: [
          "ihr (fleißiges / fleißiger) Bauen",
          "sein (lautes / lauter) Lachen",
          "das (ständige / ständiger) Kichern",
          "beim (heftigen / heftiger) Grinsen",
          "mein (unvergleichliches / unvergleichlicher) Lieben",
          "zum (zarten / zarter) Anhimmeln"
        ],
        cols: ["erste Option (korrekt)", "zweite Option (falsch)"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "Richtig: ihr fleißiges Bauen, sein lautes Lachen, das ständige Kichern, beim heftigen Grinsen, mein unvergleichliches Lieben, zum zarten Anhimmeln.",
        rule: "<div class=rbox>Das nominalisierte Verb bleibt ein Nomen, daher wird das davorstehende Adjektiv wie bei einem Nomen dekliniert. Das Verb selbst wird großgeschrieben.</div>"
      },
      {
        sub: "Gemischter Lückentext",
        type: "cross",
        q: "Entscheide bei den Lücken, ob groß oder klein geschrieben wird.",
        rows: [
          "Beim ___ (bummeln) durch die Stadt habe ich viel gesehen.",
          "Morgen werden wir uns zum ___ (lernen) treffen.",
          "Das ist schon ___ (viel).",
          "Es macht das ___ (besondere) in einer Freundschaft aus.",
          "Sie ist ___ (freundlich).",
          "Sein ständiges ___ (klagen) nervt."
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 1, 0, 1, 0],
        model: "Beim Bummeln (groß), zum Lernen (groß), das Besondere (groß), Klagen (groß); viel (klein), freundlich (klein).",
        rule: "<div class=rbox>Achte auf Signalwörter: <span class=hl>beim, zum</span> verlangen Großschreibung des folgenden Verbs. Substantive wie <span class=hl>das Besondere</span> werden großgeschrieben. Normale Adjektive bleiben klein.</div>"
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // Thema 2: Groß- und Kleinschreibung (allgemein)
  // ═══════════════════════════════════════════════════════════
  {
    id: "bbr_extra_grossklein",
    title: "Groß- und Kleinschreibung",
    emoji: "🔠",
    color: "#dc2626",
    qs: [
      {
        sub: "Anredepronomen (Höflichkeitsform)",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Entschuldigen ___ Sie, wo ist der Bahnhof?",
          "Kann ich ___ dir helfen?",
          "Wir haben ___ Ihren Brief erhalten.",
          "Habt ihr ___ euch verlaufen?",
          "Darf ___ ich Ihnen eine Frage stellen?"
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 1, 0],
        model: "Sie/Ihnen groß; dir, euch klein (informell)",
        rule: "<div class=rbox>Höflichkeitsanrede <span class=hl>Sie, Ihnen, Ihr</span> wird großgeschrieben. Informelle Anrede (du, ihr, dein, euer) wird kleingeschrieben.</div>"
      },
      {
        sub: "Substantivierte Adjektive",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Das ist etwas ganz ___ Besonderes.",
          "Im ___ Großen und Ganzen stimme ich zu.",
          "Sie hat nichts ___ Neues erfahren.",
          "Er hat ___ gute Ideen.",
          "Das ___ Schöne am Urlaub ist die Freiheit."
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 1, 0],
        model: "Besonderes, Großen, Neues, Schöne – groß; gute – klein",
        rule: "<div class=rbox>Adjektive nach <span class=hl>etwas, nichts, viel, wenig, alles</span> werden als Nomen gebraucht und großgeschrieben. Auch feste Wendungen wie <span class=hl>im Großen und Ganzen</span>. Steht das Adjektiv vor einem Nomen, bleibt es klein.</div>"
      },
      {
        sub: "Substantivierte Verben",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Beim ___ Joggen höre ich immer Musik.",
          "Zum ___ Frühstücken bleibt kaum Zeit.",
          "Das ___ Lachen der Kinder war ansteckend.",
          "Er kann besonders gut ___ singen.",
          "Sein ständiges ___ Klagen nervt."
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 1, 0],
        model: "Joggen, Frühstücken, Lachen, Klagen – groß; singen – klein",
        rule: "<div class=rbox>Verben werden großgeschrieben, wenn sie als Nomen gebraucht werden (oft mit Artikel oder Präposition: <span class=hl>das Lachen, beim Joggen, zum Frühstücken</span>). Als reine Verben bleiben sie klein.</div>"
      },
      {
        sub: "Feste Wendungen mit Nomen",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Morgen möchte ich endlich ___ Rad fahren.",
          "Sie hat große ___ Angst vor Gewitter.",
          "Wir haben gestern ___ Abendbrot gegessen.",
          "Er ist mit dem Auto ___ Schuld an dem Unfall.",
          "Kannst du mir ___ recht geben?"
        ],
        cols: ["groß", "klein"],
        correct: [0, 0, 0, 0, 1],
        model: "Rad, Angst, Abendbrot, Schuld – Nomen → groß; recht – Adverb → klein",
        rule: "<div class=rbox>In festen Wendungen wie <span class=hl>Rad fahren, Angst haben, Abendbrot essen, Schuld haben</span> werden die Nomen großgeschrieben. Adverbien wie <span class=hl>recht, unrecht</span> bleiben klein.</div>"
      },
      {
        sub: "Sprachen und Nationalitäten",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Sprichst du ___ Türkisch?",
          "Das ist ein ___ türkisches Restaurant.",
          "Sie unterrichtet ___ Englisch.",
          "Er spricht sehr gut ___ spanisch.",
          "Die ___ deutsche Küche ist vielfältig."
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 1, 1],
        model: "Türkisch, Englisch – Sprache groß; türkisches, spanisch (Adverb), deutsche (Adjektiv) – klein",
        rule: "<div class=rbox>Sprachen als Nomen werden großgeschrieben (<span class=hl>Deutsch, Englisch</span>). Als Adjektive oder Adverbien schreibt man sie klein (<span class=hl>deutsches Bier, spanisch sprechen</span>).</div>"
      },
      {
        sub: "Farbbezeichnungen",
        type: "cross",
        q: "Entscheide: groß oder klein?",
        rows: [
          "Das Haus ist in einem hellen ___ Gelb gestrichen.",
          "Er trägt ein ___ blaues Hemd.",
          "Bei ___ Rot bleiben wir stehen.",
          "Die Blume leuchtet in sattem ___ Orange.",
          "Sie hat ___ rote Haare."
        ],
        cols: ["groß", "klein"],
        correct: [0, 1, 0, 0, 1],
        model: "Gelb, Rot, Orange – als Nomen groß; blaues, rote – als Adjektive klein",
        rule: "<div class=rbox>Farbbezeichnungen sind Adjektive und werden kleingeschrieben. Wenn sie als Nomen gebraucht werden (die Farbe Blau, bei Rot), werden sie großgeschrieben.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "In welchem Satz wird das Wort in Klammern großgeschrieben?",
        o: [
          "Er hat (recht) – Er hat Recht.",
          "Wir gehen (baden) – Wir gehen Baden.",
          "Das ist (neu) – Das ist Neu.",
          "Sie spricht (deutsch) – Sie spricht Deutsch."
        ],
        c: 3,
        model: "deutsch → Deutsch (Sprache als Nomen); recht → Adverb (klein), baden → Verb (klein), neu → Adjektiv (klein)",
        rule: "<div class=rbox>Nomen werden großgeschrieben, Verben und Adjektive klein. Sprachen als Nomen sind groß.</div>"
      }
    ]
  }
];
