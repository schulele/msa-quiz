var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_zeitformen",
    title: "Zeitformen",
    emoji: "⏰",
    color: "#16a34a",
    qs: [
      {
        sub: "Zeitform erkennen",
        type: "cross",
        q: "Bestimme die Zeitform des unterstrichenen Verbs:",
        rows: [
          "Er <u>singt</u>.",
          "Sie <u>sang</u>.",
          "Wir <u>haben gesungen</u>.",
          "Ihr <u>werdet singen</u>.",
          "Nachdem er <u>gesungen hatte</u>, ..."
        ],
        cols: ["Präsens", "Präteritum", "Perfekt", "Futur I", "Plusquamperfekt"],
        correct: [0, 1, 2, 3, 4],
        model: "singt=Präsens, sang=Präteritum, haben gesungen=Perfekt, werdet singen=Futur I, hatte gesungen=Plusquamperfekt",
        rule: "<div class=rbox>Zeitformen: Präsens, Präteritum, Perfekt (haben/sein + Partizip), Plusquamperfekt (hatte/war + Partizip), Futur I (werden + Infinitiv).</div>"
      },
      {
        sub: "Futur II",
        type: "cross",
        q: "Bestimme die Zeitform:",
        rows: [
          "Er <u>wird gesungen haben</u>.",
          "Sie <u>wird gekommen sein</u>.",
          "Wir <u>werden gearbeitet haben</u>.",
          "Ich <u>werde gesehen haben</u>.",
          "Du <u>wirst geschlafen haben</u>."
        ],
        cols: ["Futur I", "Futur II", "Perfekt"],
        correct: [1, 1, 1, 1, 1],
        model: "Futur II: werden + Partizip II + haben/sein",
        rule: "<div class=rbox>Futur II bildet man mit <span class=hl>werden + Partizip II + haben/sein</span>.</div>"
      },
      {
        sub: "Hilfsverb im Perfekt: haben oder sein?",
        type: "cross",
        q: "Welches Hilfsverb wird für das Perfekt benötigt?",
        rows: [
          "Er ___ gelaufen.",
          "Sie ___ gegessen.",
          "Wir ___ gefahren.",
          "Ich ___ geschlafen.",
          "Das Kind ___ eingeschlafen."
        ],
        cols: ["haben", "sein"],
        correct: [1, 0, 1, 0, 1],
        model: "laufen, fahren, einschlafen → sein (Bewegung/Zustandsänderung); essen, schlafen → haben.",
        rule: "<div class=rbox>Verben der Bewegung und Zustandsänderung bilden das Perfekt mit <span class=hl>sein</span>, die meisten anderen mit <span class=hl>haben</span>.</div>"
      },
      {
        sub: "Präteritum starker Verben",
        type: "cross",
        q: "Ist die Präteritum-Form korrekt?",
        rows: [
          "Er singte (statt sang)",
          "Sie lief",
          "Wir gehen (statt gingen)",
          "Ich denkte (statt dachte)",
          "Du aßest"
        ],
        cols: ["korrekt", "falsch"],
        correct: [1, 0, 1, 1, 0],
        model: "lief, aßest korrekt; singte (→ sang), gehen als Präteritum (→ gingen), denkte (→ dachte) sind falsch.",
        rule: "<div class=rbox>Starke Verben ändern im Präteritum den Stamm (singen – sang, denken – dachte, essen – aß).</div>"
      },
      {
        sub: "Partizip II",
        type: "cross",
        q: "Ist das Partizip II korrekt gebildet?",
        rows: [
          "gesungen",
          "gelaufen",
          "geht (statt gegangen)",
          "gedacht",
          "geschlafen"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 1, 0, 0],
        model: "gesungen, gelaufen, gedacht, geschlafen sind korrekt; geht ist falsch (→ gegangen).",
        rule: "<div class=rbox>Partizip II: schwache Verben → ge- + -t; starke Verben → ge- + -en.</div>"
      },
      {
        sub: "Futur I vs Futur II",
        type: "cross",
        q: "Futur I oder Futur II?",
        rows: [
          "Er <u>wird kommen</u>.",
          "Er <u>wird gekommen sein</u>.",
          "Sie <u>wird singen</u>.",
          "Sie <u>wird gesungen haben</u>.",
          "Wir <u>werden arbeiten</u>."
        ],
        cols: ["Futur I", "Futur II"],
        correct: [0, 1, 0, 1, 0],
        model: "Futur I: werden + Infinitiv; Futur II: werden + Partizip II + haben/sein",
        rule: "<div class=rbox>Futur II erkennt man am Partizip II und dem Hilfsverb am Ende (haben/sein).</div>"
      },
      {
        sub: "Konjunktiv II",
        type: "cross",
        q: "Ist die Form Konjunktiv II?",
        rows: [
          "Er würde kommen.",
          "Sie käme.",
          "Ich hätte gearbeitet.",
          "Er wird kommen.",
          "Sie wäre gegangen."
        ],
        cols: ["Konjunktiv II", "Indikativ"],
        correct: [0, 0, 0, 1, 0],
        model: "würde kommen, käme, hätte gearbeitet, wäre gegangen = Konjunktiv II; wird kommen = Indikativ Futur I.",
        rule: "<div class=rbox>Konjunktiv II drückt Möglichkeit, Wunsch oder Irrealis aus. Bildung: würde + Infinitiv oder besondere Formen (käme, hätte).</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "cross",
        q: "Bestimme die Zeitform:",
        rows: [
          "‚Ich habe gegessen.'",
          "‚Du wirst schlafen.'",
          "‚Er war gekommen.'",
          "‚Wir sangen.'",
          "‚Nachdem sie gekocht hatte, aßen wir.'"
        ],
        cols: ["Präsens", "Präteritum", "Perfekt", "Plusquamperfekt", "Futur I"],
        correct: [2, 4, 3, 1, 3],
        model: "habe gegessen=Perfekt, wirst schlafen=Futur I, war gekommen=Plusquamperfekt, sangen=Präteritum, hatte gekocht=Plusquamperfekt",
        rule: "<div class=rbox>Übung zu allen Zeitformen.</div>"
      },
      {
        sub: "Zeitformen erkennen (schwer)",
        type: "cross",
        q: "Bestimme die Zeitform:",
        rows: [
          "‚Er ist gelaufen.'",
          "‚Sie wird gekocht haben.'",
          "‚Wir hatten gespielt.'",
          "‚Ihr werdet lachen.'",
          "‚Ich dachte nach.'"
        ],
        cols: ["Perfekt", "Futur II", "Plusquamperfekt", "Futur I", "Präteritum"],
        correct: [0, 1, 2, 3, 4],
        model: "ist gelaufen=Perfekt, wird gekocht haben=Futur II, hatten gespielt=Plusquamperfekt, werdet lachen=Futur I, dachte=Präteritum",
        rule: "<div class=rbox>Alle Zeitformen im Überblick: Perfekt (hat/ist + Partizip), Futur II (wird + Partizip + haben/sein), Plusquamperfekt (hatte/war + Partizip).</div>"
      }
    ]
  }
];
