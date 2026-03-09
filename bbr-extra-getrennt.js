var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_getrennt",
    title: "Getrennt- und Zusammenschreibung",
    emoji: "🧩",
    color: "#ca8a04",
    qs: [
      // ── Nomen + Verb ───────────────────────────────────────────
      {
        sub: "Nomen + Verb",
        type: "cross",
        q: "Lena erzählt von ihrem Alltag. Entscheide, ob die Verbindungen aus Nomen und Verb getrennt oder zusammengeschrieben werden.",
        rows: [
          "Am Nachmittag geht sie gerne ___ (Rad fahren / Radfahren).",
          "Sie freut sich auf das ___ (Fahrrad fahren / Fahrradfahren).",
          "Ihr Bruder übt jeden Tag ___ (Klavier spielen / Klavierspielen).",
          "Beim ___ (Fußball spielen / Fußballspielen) schreien die Fans."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1],
        model: "Rad fahren (getrennt, Infinitiv ohne Artikel); Fahrradfahren (zusammen, nach 'das'); Klavier spielen (getrennt); Fußballspielen (zusammen, nach 'beim').",
        rule: "<div class=rbox>Wenn das Nomen ein eigenständiges Objekt ist (Was wird gefahren? Rad), schreibt man getrennt: <span class=hl>Rad fahren</span>.<br>Wird die Tätigkeit als Nomen verwendet (mit Artikel oder Präposition wie <span class=hl>das, beim, zum</span>), schreibt man zusammen: <span class=hl>das Radfahren, beim Fußballspielen</span>.</div>"
      },
      // ── Verb + Verb ────────────────────────────────────────────
      {
        sub: "Verb + Verb",
        type: "cross",
        q: "Tim plant sein Wochenende. Welche Schreibweise ist richtig? (Zwei Verben werden immer getrennt geschrieben.)",
        rows: [
          "Am Samstag will er mit Freunden ___ (schwimmen gehen / schwimmengehen).",
          "Seine Schwester möchte ___ (tanzen lernen / tanzenlernen).",
          "Die Eltern wollen abends ___ (essen gehen / essengehen).",
          "Tim überlegt, ob er noch ___ (einkaufen fahren / einkaufenfahren) soll."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0],
        model: "Alle Verbindungen aus zwei Verben werden getrennt geschrieben: schwimmen gehen, tanzen lernen, essen gehen, einkaufen fahren.",
        rule: "<div class=rbox>Zwei Verben im Infinitiv schreibt man immer getrennt: <span class=hl>spazieren gehen, lesen üben, kochen lernen</span>. Nur wenn sie als Nomen gebraucht werden, gibt es Ausnahmen: das Spazierengehen.</div>"
      },
      // ── Partizip + Verb ────────────────────────────────────────
      {
        sub: "Partizip + Verb",
        type: "cross",
        q: "Entscheide, ob die Partizip-Verb-Verbindungen getrennt oder zusammengeschrieben werden.",
        rows: [
          "Wir haben die Pizza endlich ___ (geliefert bekommen / geliefertbekommen).",
          "Der Dieb wurde von der Polizei ___ (gefangen genommen / gefangengenommen).",
          "Ist dir dein Handy ___ (verloren gegangen / verlorengegangen)?",
          "Die Klasse soll ___ (getrennt arbeiten / getrenntarbeiten)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0],
        model: "geliefert bekommen, gefangen nehmen, verloren gehen, getrennt arbeiten – alle getrennt.",
        rule: "<div class=rbox>Verbindungen aus Partizip und Verb werden fast immer getrennt geschrieben, auch bei festen Wendungen: <span class=hl>bekannt geben, gefangen nehmen, getrennt leben</span>.</div>"
      },
      // ── Adjektiv + Verb: wörtlich oder übertragen ─────────────
      {
        sub: "Adjektiv + Verb (wörtlich oder übertragen?)",
        type: "cross",
        q: "Wörtliche Bedeutung = getrennt, übertragene Bedeutung = zusammen.",
        rows: [
          "Im Diktat ist es wichtig, dass du ___ (gut schreibst / gutschreibst).",
          "Die Bank will die Zinsen auf mein Konto ___ (gut schreiben / gutschreiben).",
          "Kannst du bitte die Leiter ___ (fest halten / festhalten), damit ich runterklettern kann?",
          "Wir sollten die wichtigsten Regeln im Heft ___ (fest halten / festhalten).",
          "Mit rutschigen Schuhen kannst du nicht ___ (sicher gehen / sichergehen).",
          "Bevor du losfährst, solltest du ___ (sicher gehen / sichergehen), dass du genug Benzin hast."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1, 0, 1],
        model: "gut schreiben (wörtlich: leserlich) – gutschreiben (übertragen: anrechnen); fest halten (physisch) – festhalten (notieren); sicher gehen (ohne Sturz) – sichergehen (sich vergewissern).",
        rule: "<div class=rbox>Wörtliche Bedeutung = getrennt: <span class=hl>fest halten</span> (anfassen), <span class=hl>gut schreiben</span> (leserlich).<br>Übertragene Bedeutung = zusammen: <span class=hl>festhalten</span> (notieren), <span class=hl>gutschreiben</span> (anrechnen).</div>"
      },
      // ── Verbindungen mit 'zu' ──────────────────────────────────
      {
        sub: "Verbindungen mit 'zu'",
        type: "cross",
        q: "Entscheide, ob 'zu' als Vorsilbe (zusammen) oder als Teil des Infinitivs (getrennt) geschrieben wird.",
        rows: [
          "Kannst du mir bitte dein Heft ___ (zu geben / zugeben)?",
          "Ich muss ___ (zu geben / zugeben), dass ich keine Ahnung habe.",
          "Er versucht, seiner Freundin ___ (zu hören / zuzuhören).",
          "Vergiss nicht, die Tür ___ (zu schließen / zuzuschließen).",
          "Er hat versucht, die Wahrheit ___ (zu sagen / zuzusagen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 1, 1, 0],
        model: "zu geben (Infinitiv von geben) – zugeben (Verb); zuhören → zuzuhören; zuschließen → zuzuschließen; zu sagen (Infinitiv) – zusagen (eigenständiges Verb).",
        rule: "<div class=rbox>Wenn 'zu' zum Verb gehört (Vorsilbe), schreibt man zusammen: <span class=hl>zugeben, zuhören, zumachen</span>.<br>Wenn 'zu' nur den Infinitiv einleitet, schreibt man getrennt: <span class=hl>zu geben, zu hören</span>.<br>Die Betonung hilft: Bei Zusammenschreibung liegt sie auf 'zu', bei Getrenntschreibung auf dem Verb.</div>"
      },
      // ── Verbindungen mit 'zusammen' ────────────────────────────
      {
        sub: "Verbindungen mit 'zusammen'",
        type: "cross",
        q: "Entscheide, ob 'zusammen' getrennt (= gemeinsam) oder als Verbzusatz (zusammengeschrieben) steht.",
        rows: [
          "Am Ende müssen alle ihre Sachen ___ (zusammen packen / zusammenpacken).",
          "Wir werden die Tische ___ (zusammen tragen / zusammentragen), um sie in die Aula zu bringen.",
          "Für das Plakat müssen wir viele Bilder ___ (zusammen stellen / zusammenstellen).",
          "Die Stühle wurden bereits ___ (zusammen gestellt / zusammengestellt)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 0, 1, 1],
        model: "zusammenpacken (festes Verb: einpacken); zusammen tragen (gemeinsam tragen, ersetzbar durch 'gemeinsam'); zusammenstellen (festes Verb: sammeln/ordnen); zusammengestellt (Partizip, festes Verb).",
        rule: "<div class=rbox>Kannst du 'zusammen' durch 'gemeinsam' ersetzen? Dann getrennt: <span class=hl>zusammen tragen</span> = gemeinsam tragen.<br>Geht das nicht, ist es ein festes Verb: <span class=hl>zusammenpacken, zusammenstellen</span>.</div>"
      },
      // ── Verbindungen mit 'sein' ────────────────────────────────
      {
        sub: "Verbindungen mit 'sein'",
        type: "cross",
        q: "Entscheide, ob die Verbindungen mit 'sein' getrennt (Verb) oder zusammen (Nomen) geschrieben werden.",
        rows: [
          "Es ist wichtig, im Leben glücklich ___ (zu sein / zusein).",
          "Das ___ (Glücklichsein / Glücklich sein) ist das Ziel vieler Menschen.",
          "Wirst du morgen auch ___ (da sein / dasein)?",
          "Sein ___ (Da sein / Dasein) auf der Insel war traumhaft."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1],
        model: "zu sein (Infinitiv von sein); das Glücklichsein (Nomen); da sein (Verb); das Dasein (Nomen).",
        rule: "<div class=rbox>Das Verb 'sein' wird immer getrennt geschrieben: <span class=hl>da sein, glücklich sein</span>.<br>Wird die Kombination zum Nomen (mit Artikel), schreibt man zusammen: <span class=hl>das Dasein, das Glücklichsein</span>.</div>"
      },
      // ── Substantiv + Verb (Motorrad fahren etc.) ──────────────
      {
        sub: "Substantiv + Verb (weitere Beispiele)",
        type: "cross",
        q: "Getrennt oder zusammen?",
        rows: [
          "Er möchte ___ (Motorrad fahren).",
          "Wir gehen im Winter gerne ___ (Schlittschuh laufen).",
          "Kannst du ___ (Klavier spielen)?",
          "Das Kind lernt ___ (Rad fahren).",
          "Sie hat starke ___ (Kopfschmerzen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0, 1],
        model: "Motorrad fahren, Schlittschuh laufen, Klavier spielen, Rad fahren → getrennt; Kopfschmerzen → zusammengesetztes Nomen → zusammen",
        rule: "<div class=rbox>Substantiv + Verb wird in der Regel getrennt geschrieben (Auto fahren, Rad fahren, Klavier spielen). Zusammengesetzte Nomen (Kopfschmerzen) werden zusammengeschrieben.</div>"
      },
      // ── Verbindungen mit 'wieder' ──────────────────────────────
      {
        sub: "Verbindungen mit 'wieder'",
        type: "cross",
        q: "Getrennt oder zusammen? ('wieder' zurück = zusammen, 'wieder' erneut = oft getrennt)",
        rows: [
          "Gleich nach der Tour werde ich dir das Rad wieder ___ (bringen).",
          "Nach der Trennung wollte er ihr Herz wieder ___ (gewinnen).",
          "Ich werde den Kandidaten nie wieder ___ (wählen).",
          "Das dürfen wir nicht wieder ___ (zulassen).",
          "Herr Grau wollte den ehemaligen Mitarbeiter wieder ___ (einstellen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 0, 0, 1],
        model: "wiederbringen (zurück), wiedergewinnen (zurück), wiedereinstellen (zurück/erneut festes Verb) → zusammen; nie wieder wählen, nicht wieder zulassen (erneut, locker) → getrennt.",
        rule: "<div class=rbox>Bei 'wieder' im Sinne von 'zurück' meist zusammen: <span class=hl>wiederbringen, wiedergewinnen</span>. Im Sinne von 'erneut' kann es getrennt oder zusammen sein; feste Komposita wie <span class=hl>wiedereinstellen</span> werden zusammengeschrieben.</div>"
      },
      // ── Gemischte Übung ────────────────────────────────────────
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welches Wort wird zusammengeschrieben?",
        o: [
          "spazieren gehen",
          "kennenlernen",
          "Rad fahren",
          "schwimmen gehen"
        ],
        c: 1,
        model: "kennenlernen wird nach neuer Rechtschreibung zusammengeschrieben; die anderen getrennt.",
        rule: "<div class=rbox>Nach neuer Rechtschreibung werden Verbindungen wie <span class=hl>kennenlernen</span> zusammengeschrieben.</div>"
      }
    ]
  }
];
