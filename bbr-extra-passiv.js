var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_passiv",
    title: "Aktiv und Passiv",
    emoji: "⚙️",
    color: "#7c3aed",
    qs: [
      {
        sub: "Aktiv oder Passiv erkennen",
        type: "cross",
        q: "Aktiv oder Passiv?",
        rows: [
          "Der Brief wird geschrieben.",
          "Die Kinder spielen im Garten.",
          "Das Haus wurde gebaut.",
          "Er hat das Buch gelesen.",
          "Das Lied ist gesungen worden."
        ],
        cols: ["Aktiv", "Passiv"],
        correct: [1, 0, 1, 0, 1],
        model: "wird geschrieben, wurde gebaut, ist gesungen worden = Passiv; spielen, hat gelesen = Aktiv.",
        rule: "<div class=rbox>Passiv erkennt man an der Form von <span class=hl>werden + Partizip II</span>.</div>"
      },
      {
        sub: "Passiv mit Modalverben",
        type: "cross",
        q: "Ist der Passivsatz korrekt?",
        rows: [
          "Der Brief muss geschrieben werden.",
          "Das Haus kann gebaut werden.",
          "Die Aufgabe soll gemacht werden.",
          "Das Buch muss gelesen werden.",
          "Die Kinder müssen abgeholt werden."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Sätze sind korrekte Passivsätze mit Modalverb.",
        rule: "<div class=rbox>Im Passiv mit Modalverb: Modalverb + Partizip II + <span class=hl>werden</span> (Infinitiv).</div>"
      },
      {
        sub: "Zustandspassiv vs Vorgangspassiv",
        type: "cross",
        q: "Zustandspassiv (sein + Partizip) oder Vorgangspassiv (werden + Partizip)?",
        rows: [
          "Die Tür ist geöffnet.",
          "Das Fenster wird geöffnet.",
          "Das Auto ist repariert.",
          "Der Brief ist geschrieben worden.",
          "Das Haus ist gebaut."
        ],
        cols: ["Zustandspassiv", "Vorgangspassiv"],
        correct: [0, 1, 0, 1, 0],
        model: "ist geöffnet, ist repariert, ist gebaut = Zustandspassiv; wird geöffnet, ist geschrieben worden = Vorgangspassiv.",
        rule: "<div class=rbox>Zustandspassiv (sein + Partizip II) beschreibt einen Zustand. Vorgangspassiv (werden + Partizip II) beschreibt einen Vorgang.</div>"
      },
      {
        sub: "Unpersönliches Passiv",
        type: "cross",
        q: "Liegt ein unpersönliches Passiv vor?",
        rows: [
          "Es wird getanzt.",
          "Hier wird gearbeitet.",
          "Es wird gelacht.",
          "Er wird gelobt.",
          "Es wurde gesungen."
        ],
        cols: ["ja (unpersönlich)", "nein (persönlich)"],
        correct: [0, 0, 0, 1, 0],
        model: "Sätze ohne personenbezogenes Subjekt sind unpersönliches Passiv. 'Er wird gelobt' ist persönlich.",
        rule: "<div class=rbox>Unpersönliches Passiv wird verwendet, wenn kein Handelnder genannt wird. Es steht oft 'es' an Position 1 (als Platzhalter).</div>"
      },
      {
        sub: "Passiv-Zeitformen bestimmen",
        type: "cross",
        q: "Welche Passiv-Zeitform liegt vor?",
        rows: [
          "Das Haus wird gebaut.",
          "Das Haus wurde gebaut.",
          "Das Haus ist gebaut worden.",
          "Das Haus war gebaut worden.",
          "Das Haus wird gebaut werden."
        ],
        cols: ["Präsens Passiv", "Präteritum Passiv", "Perfekt Passiv", "Plusquamperfekt Passiv", "Futur I Passiv"],
        correct: [0, 1, 2, 3, 4],
        model: "wird gebaut=Präsens, wurde gebaut=Präteritum, ist gebaut worden=Perfekt, war gebaut worden=Plusquamperfekt, wird gebaut werden=Futur I.",
        rule: "<div class=rbox>Passiv wird mit 'werden' in der entsprechenden Zeitform und Partizip II gebildet.</div>"
      },
      {
        sub: "Aktiv → Passiv Umwandlung",
        type: "cross",
        q: "Ist die Umwandlung korrekt?",
        rows: [
          "Aktiv: Der Hund beißt den Mann. → Passiv: Der Mann wird vom Hund gebissen.",
          "Aktiv: Die Mutter kocht das Essen. → Passiv: Das Essen wird von der Mutter gekocht.",
          "Aktiv: Man sagt, er ist klug. → Passiv: Es wird gesagt, dass er klug ist.",
          "Aktiv: Sie reparierte das Auto. → Passiv: Das Auto wurde von ihr repariert.",
          "Aktiv: Das Kind liest das Buch. → Passiv: Das Buch wird von dem Kind gelesen."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle Umwandlungen sind korrekt.",
        rule: "<div class=rbox>Bei der Umwandlung wird das Akkusativobjekt zum Subjekt. Der Täter wird mit <span class=hl>von + Dativ</span> eingeführt.</div>"
      },
      {
        sub: "Passiv Präteritum vs Perfekt",
        type: "cross",
        q: "Präteritum Passiv oder Perfekt Passiv?",
        rows: [
          "Das Haus wurde gebaut.",
          "Das Haus ist gebaut worden.",
          "Die Tür wurde geöffnet.",
          "Die Tür ist geöffnet worden.",
          "Das Lied wurde gesungen."
        ],
        cols: ["Präteritum Passiv", "Perfekt Passiv"],
        correct: [0, 1, 0, 1, 0],
        model: "wurde gebaut=Prät., ist gebaut worden=Perf., wurde geöffnet=Prät., ist geöffnet worden=Perf., wurde gesungen=Prät.",
        rule: "<div class=rbox>Präteritum Passiv: <span class=hl>wurde + Partizip II</span>; Perfekt Passiv: <span class=hl>ist + Partizip II + worden</span>.</div>"
      },
      {
        sub: "Passiv im Futur",
        type: "cross",
        q: "Futur I Passiv oder Futur II Passiv?",
        rows: [
          "Das Haus wird gebaut werden.",
          "Das Haus wird gebaut worden sein.",
          "Die Aufgabe wird gelöst werden.",
          "Die Aufgabe wird gelöst worden sein.",
          "Der Brief wird geschrieben werden."
        ],
        cols: ["Futur I Passiv", "Futur II Passiv"],
        correct: [0, 1, 0, 1, 0],
        model: "Futur I: wird + Partizip II + werden; Futur II: wird + Partizip II + worden sein.",
        rule: "<div class=rbox>Futur I Passiv: <span class=hl>werden (konj.) + Partizip II + werden (Inf.)</span>; Futur II Passiv: <span class=hl>werden (konj.) + Partizip II + worden sein</span>.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welche Sätze stehen im Passiv?\n\n(A) Der Hund wird gebürstet.\n(B) Die Katze schläft.\n(C) Das Haus wurde gestrichen.\n(D) Er hat das Buch gelesen.\n(E) Es wird getanzt.",
        o: [
          "A, C und E",
          "A, B und C",
          "nur A und C",
          "alle außer B"
        ],
        c: 0,
        model: "A (wird gebürstet), C (wurde gestrichen), E (wird getanzt) sind Passiv. B und D sind Aktiv.",
        rule: "<div class=rbox>Passiv erkennt man an <span class=hl>werden + Partizip II</span>.</div>"
      }
    ]
  }
];
