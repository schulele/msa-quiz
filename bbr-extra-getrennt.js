var BBR_GETRENNT_THEMES = [
  {
    id: "getrennt_zusammen",
    title: "Getrennt- und Zusammenschreibung",
    emoji: "📝",
    color: "#16a34a",
    qs: [
      // Aufgabe 1: Nomen + Verb (Alltag)
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
        model: "Rad fahren (getrennt, Infinitiv ohne Artikel); Fahrradfahren (zusammen, nach Artikel 'das'); Klavier spielen (getrennt, Infinitiv); Fußballspielen (zusammen, nach 'beim').",
        rule: "<div class=rbox>👉 Wenn das Nomen ein eigenständiges Objekt ist („Was wird gefahren? Rad“), schreibst du getrennt: <b>Rad fahren</b>.<br>👉 Wird die Tätigkeit als Nomen verwendet (oft mit Artikel oder Präposition wie <b>das, beim, zum</b>), schreibst du zusammen: <b>das Radfahren, beim Fußballspielen</b>.</div>"
      },
      // Aufgabe 2: Verb + Verb (Freizeit)
      {
        sub: "Verb + Verb",
        type: "cross",
        q: "Tim plant sein Wochenende. Welche Aktivitäten sind richtig geschrieben? (Tipp: Zwei Verben werden immer getrennt geschrieben.)",
        rows: [
          "Am Samstag will er mit Freunden ___ (schwimmen gehen / schwimmengehen).",
          "Seine Schwester möchte ___ (tanzen lernen / tanzenlernen).",
          "Die Eltern wollen abends ___ (essen gehen / essengehen).",
          "Tim überlegt, ob er noch ___ (einkaufen fahren / einkaufenfahren) soll."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0],
        model: "Alle Verbindungen aus zwei Verben werden getrennt geschrieben: schwimmen gehen, tanzen lernen, essen gehen, einkaufen fahren.",
        rule: "<div class=rbox>👉 Zwei Verben im Infinitiv schreibt man immer getrennt: <b>spazieren gehen, lesen üben, kochen lernen</b>. Ganz einfach – keine Ausnahme! (Nur wenn sie als Nomen gebraucht werden, gibt’s Ausnahmen: das Spazierengehen.)</div>"
      },
      // Aufgabe 3: Partizip + Verb (Gerüchte in der Schule)
      {
        sub: "Partizip + Verb",
        type: "cross",
        q: "In der Schule kursieren Gerüchte. Entscheide, ob die Partizip-Verb-Verbindungen getrennt oder zusammengeschrieben werden. (Alle werden getrennt geschrieben.)",
        rows: [
          "Wir haben die Pizza endlich ___ (geliefert bekommen / geliefertbekommen).",
          "Der Dieb wurde von der Polizei ___ (gefangen genommen / gefangengenommen).",
          "Ist dir dein Handy ___ (verloren gegangen / verlorengegangen)?",
          "Die Klasse soll ___ (getrennt arbeiten / getrenntarbeiten)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 0, 0, 0],
        model: "geliefert bekommen, gefangen nehmen, verloren gehen, getrennt arbeiten – alle getrennt.",
        rule: "<div class=rbox>👉 Verbindungen aus Partizip und Verb werden fast immer getrennt geschrieben, auch wenn sie feste Wendungen sind: <b>bekannt geben, gefangen nehmen, getrennt leben</b>.</div>"
      },
      // Aufgabe 4: Adjektiv + Verb (wörtlich oder übertragen)
      {
        sub: "Adjektiv + Verb",
        type: "cross",
        q: "Achtung, Bedeutungsunterschied! Entscheide bei jedem Satz, ob die Adjektiv-Verb-Verbindung wörtlich gemeint ist (getrennt) oder eine übertragene Bedeutung hat (zusammen).",
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
        model: "gut schreiben (wörtlich: leserlich) – gutschreiben (übertragen: anrechnen); fest halten (wörtlich: physisch) – festhalten (übertragen: notieren); sicher gehen (wörtlich: ohne Sturz) – sichergehen (übertragen: sich vergewissern).",
        rule: "<div class=rbox>👉 Wörtliche Bedeutung = getrennt: <b>fest halten</b> (anfassen), <b>gut schreiben</b> (leserlich).<br>👉 Übertragene Bedeutung = zusammen: <b>festhalten</b> (notieren), <b>gutschreiben</b> (anrechnen). Frage dich: Ist die Bedeutung wörtlich oder bildlich?</div>"
      },
      // Aufgabe 5: Verbindungen mit "zu" (Hilfe bei Hausaufgaben)
      {
        sub: "Verbindungen mit 'zu'",
        type: "cross",
        q: "Hilf Max bei seinen Deutsch-Hausaufgaben. Entscheide, ob 'zu' als Vorsilbe (zusammen) oder als Teil des Infinitivs (getrennt) geschrieben wird.",
        rows: [
          "Kannst du mir bitte dein Heft ___ (zu geben / zugeben)?",
          "Ich muss ___ (zu geben / zugeben), dass ich keine Ahnung habe.",
          "Er versucht, seiner Freundin ___ (zu hören / zuzuhören).",
          "Vergiss nicht, die Tür ___ (zu schließen / zuzuschließen).",
          "Er hat versucht, die Wahrheit ___ (zu sagen / zuzusagen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 1, 1, 0],
        model: "zu geben (Infinitiv von geben) – zugeben (Verb); zuhören → zuzuhören; zuschließen → zuzuschließen; zu sagen (Infinitiv von sagen) – zusagen (gibt es, passt aber nicht).",
        rule: "<div class=rbox>👉 Wenn ‚zu‘ zum Verb gehört (Vorsilbe), schreibst du zusammen: <b>zugeben, zuhören, zumachen</b>.<br>👉 Wenn ‚zu‘ nur den Infinitiv einleitet und das Verb auch ohne ‚zu‘ existiert, schreibst du getrennt: <b>zu geben, zu hören, zu machen</b>.<br>💡 Die Betonung hilft: Bei Zusammenschreibung liegt sie auf ‚zu‘, bei Getrenntschreibung auf dem Verb.</div>"
      },
      // Aufgabe 6: Verbindungen mit "zusammen" (Projektwoche)
      {
        sub: "Verbindungen mit 'zusammen'",
        type: "cross",
        q: "Die Klasse 9b plant eine Projektwoche. Entscheide, ob 'zusammen' getrennt (im Sinne von 'gemeinsam') oder als Verbzusatz (zusammen) geschrieben wird.",
        rows: [
          "Am Ende müssen alle ihre Sachen ___ (zusammen packen / zusammenpacken).",
          "Wir werden die Tische ___ (zusammen tragen / zusammentragen), um sie in die Aula zu bringen.",
          "Für das Plakat müssen wir viele Bilder ___ (zusammen stellen / zusammenstellen).",
          "Die Stühle wurden bereits ___ (zusammen gestellt / zusammengestellt)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 0, 1, 1],
        model: "zusammenpacken (fest: einpacken); zusammen tragen (gemeinsam tragen); zusammenstellen (fest: eine Liste anfertigen); zusammengestellt (Partizip, fest).",
        rule: "<div class=rbox>👉 Kannst du ‚zusammen‘ durch ‚gemeinsam‘ ersetzen? Dann getrennt: <b>zusammen tragen</b> = gemeinsam tragen.<br>👉 Geht das nicht, ist es ein festes Verb: <b>zusammenpacken</b> (einpacken), <b>zusammenstellen</b> (sammeln/ordnen).</div>"
      },
      // Aufgabe 7: Verbindungen mit "sein" (Philosophie)
      {
        sub: "Verbindungen mit 'sein'",
        type: "cross",
        q: "Im Philosophieunterricht diskutiert die Klasse über das Sein. Entscheide, ob die Verbindungen mit 'sein' getrennt (Verb) oder zusammen (Nomen) geschrieben werden.",
        rows: [
          "Es ist wichtig, im Leben glücklich ___ (zu sein / zusein).",
          "Das ___ (Glücklichsein / Glücklich sein) ist das Ziel vieler Menschen.",
          "Wirst du morgen auch ___ (da sein / dasein)?",
          "Sein ___ (Da sein / Dasein) auf der Insel war traumhaft."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [0, 1, 0, 1],
        model: "zu sein (Infinitiv von sein); das Glücklichsein (Nomen); da sein (Verb); das Dasein (Nomen).",
        rule: "<div class=rbox>👉 Das Verb ‚sein‘ wird immer getrennt geschrieben: <b>da sein, glücklich sein, freundlich sein</b>.<br>👉 Wird die Kombination zum Nomen (mit Artikel, z.B. ‚das‘), schreibst du zusammen: <b>das Dasein, das Glücklichsein</b>.</div>"
      }
    ]
  }
];