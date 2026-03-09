var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_satzbau",
    title: "Satzbau",
    emoji: "🔗",
    color: "#9333ea",
    qs: [
      {
        sub: "Stellung der Verbzusätze (trennbare Verben)",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Sie anruft heute Abend."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil das trennbare Verb 'anrufen' im Hauptsatz getrennt werden muss: 'Sie ruft heute Abend an.'",
        rule: "<div class=rbox>Im Hauptsatz steht der konjugierte Verbteil an Position 2, der Verbzusatz am Satzende. Bei Modalverben steht der Infinitiv am Ende.</div>"
      },
      {
        sub: "Objektstellung (Dativ vor Akkusativ)",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Ich gebe den Ball dem Kind."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil normalerweise das Dativobjekt vor dem Akkusativobjekt steht: 'Ich gebe dem Kind den Ball.' (Ausnahme: Pronomen)",
        rule: "<div class=rbox>Die Reihenfolge ist meist: <span class=hl>Dativ vor Akkusativ</span>. Ausnahme: Akkusativpronomen stehen vor dem Dativ.</div>"
      },
      {
        sub: "Adverbiale (Zeit vor Ort)",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Er geht ins Kino morgen."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil die Zeitangabe vor der Ortsangabe stehen sollte: 'Er geht morgen ins Kino.'",
        rule: "<div class=rbox>Adverbiale Bestimmungen folgen meist der Reihenfolge: <span class=hl>Zeit vor Ort</span> (temporal vor lokal).</div>"
      },
      {
        sub: "Inversion (Subjekt nach Verb)",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Morgen ich gehe ins Kino."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil nach einer vorangestellten Angabe das Verb an Position 2 und das Subjekt danach folgen muss: 'Morgen gehe ich ins Kino.'",
        rule: "<div class=rbox>Wenn eine Angabe am Satzanfang steht, rückt das Subjekt hinter das Verb (<span class=hl>Inversion</span>).</div>"
      },
      {
        sub: "Nebensatz mit 'dass'",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Ich weiß, dass er ist krank."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil im dass-Satz das Verb am Ende stehen muss: 'Ich weiß, dass er krank ist.'",
        rule: "<div class=rbox>Im Nebensatz mit <span class=hl>dass</span> steht das finite Verb am Ende.</div>"
      },
      {
        sub: "weil-Satz (Verbendstellung)",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Weil er ist krank, bleibt er zu Hause."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil im weil-Satz das Verb am Ende steht: 'Weil er krank ist, bleibt er zu Hause.'",
        rule: "<div class=rbox>Im <span class=hl>weil</span>-Satz steht das Verb am Ende (Verbendstellung).</div>"
      },
      {
        sub: "Indirekte Fragesätze",
        type: "cross",
        q: "Ist der Satz korrekt?",
        rows: ["Ich frage, ob kommt er."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil in indirekten Fragesätzen das Verb am Ende steht: 'Ich frage, ob er kommt.'",
        rule: "<div class=rbox>Indirekte Fragesätze sind Nebensätze mit <span class=hl>Verbendstellung</span>.</div>"
      },
      {
        sub: "Relativsätze",
        type: "cross",
        q: "Ist der Relativsatz korrekt?",
        rows: ["Das ist der Mann, der hat mir geholfen."],
        cols: ["korrekt", "falsch"],
        correct: [1],
        model: "Der Satz ist falsch, weil im Relativsatz das Verb am Ende steht: 'Das ist der Mann, der mir geholfen hat.'",
        rule: "<div class=rbox>Relativsätze sind Nebensätze mit <span class=hl>Verbendstellung</span>.</div>"
      },
      {
        sub: "Verbposition in verschiedenen Satzarten",
        type: "cross",
        q: "Wo steht das Verb in diesem Satz?",
        rows: ["Er kommt morgen."],
        cols: ["Position 2", "Position 1", "am Ende"],
        correct: [0],
        model: "In diesem Aussagesatz steht das Verb an Position 2.",
        rule: "<div class=rbox>Verbposition: <span class=hl>Hauptsatz (Aussage)</span>: Position 2; <span class=hl>Entscheidungsfrage</span>: Position 1; <span class=hl>Nebensatz</span>: am Ende.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welcher Satz ist korrekt?",
        o: [
          "Ich weiß, dass er kommt morgen.",
          "Morgen ich gehe einkaufen.",
          "Kannst du mir helfen?",
          "Weil er ist krank, bleibt er zu Hause."
        ],
        c: 2,
        model: "Nur Satz 3 ist korrekt (Fragesatz, Verb an Position 1).",
        rule: "<div class=rbox>Beachte die Verbposition in Haupt- und Nebensätzen sowie die Inversion.</div>"
      }
    ]
  }
];