var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_faelle",
    title: "Fälle (Kasus)",
    emoji: "📘",
    color: "#0891b2",
    qs: [
      {
        sub: "Nominativ (Wer? Was?)",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes:",
        rows: [
          "<u>Der Hund</u> bellt.",
          "<u>Ein Auto</u> fährt.",
          "<u>Die Kinder</u> spielen.",
          "<u>Mein Bruder</u> ist groß.",
          "<u>Sie</u> lacht."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [0, 0, 0, 0, 0],
        model: "Alle unterstrichenen Wörter sind Subjekte im Nominativ.",
        rule: "<div class=rbox>Der <span class=hl>Nominativ</span> antwortet auf 'Wer oder was?' und ist meist das Subjekt.</div>"
      },
      {
        sub: "Akkusativ (Wen? Was?)",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes:",
        rows: [
          "Ich sehe <u>den Hund</u>.",
          "Er kauft <u>ein Auto</u>.",
          "Sie mag <u>die Kinder</u>.",
          "Wir besuchen <u>meinen Bruder</u>.",
          "Hörst du <u>mich</u>?"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [1, 1, 1, 1, 1],
        model: "Alle unterstrichenen Wörter sind Akkusativobjekte.",
        rule: "<div class=rbox>Der <span class=hl>Akkusativ</span> antwortet auf 'Wen oder was?' und ist oft das direkte Objekt.</div>"
      },
      {
        sub: "Dativ (Wem?)",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes:",
        rows: [
          "Ich helfe <u>dem Hund</u>.",
          "Er gibt <u>dem Kind</u> ein Buch.",
          "Sie dankt <u>der Lehrerin</u>.",
          "Wir gehören <u>dem Verein</u> an.",
          "Das Buch gehört <u>mir</u>."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 2, 2, 2, 2],
        model: "Alle unterstrichenen Wörter sind Dativobjekte.",
        rule: "<div class=rbox>Der <span class=hl>Dativ</span> antwortet auf 'Wem?' und ist oft das indirekte Objekt.</div>"
      },
      {
        sub: "Genitiv (Wessen?)",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes:",
        rows: [
          "Das Haus <u>des Nachbarn</u> ist groß.",
          "Die Farbe <u>der Blume</u> ist rot.",
          "Wegen <u>des Regens</u> bleiben wir zu Hause.",
          "Trotz <u>des Lärms</u> schlief er.",
          "Die Mutter <u>des Kindes</u> kommt."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [3, 3, 3, 3, 3],
        model: "Alle unterstrichenen Wörter sind Genitivattribute oder folgen auf Genitivpräpositionen.",
        rule: "<div class=rbox>Der <span class=hl>Genitiv</span> antwortet auf 'Wessen?' und zeigt Besitz oder Zugehörigkeit an.</div>"
      },
      {
        sub: "Präpositionen mit Akkusativ",
        type: "cross",
        q: "Welcher Fall folgt auf die Präposition?",
        rows: [
          "für ___ (der Freund)",
          "durch ___ (das Fenster)",
          "gegen ___ (der Baum)",
          "ohne ___ (die Brille)",
          "um ___ (der See)"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [1, 1, 1, 1, 1],
        model: "für, durch, gegen, ohne, um verlangen Akkusativ.",
        rule: "<div class=rbox>Präpositionen mit Akkusativ: <span class=hl>für, durch, gegen, ohne, um</span>.</div>"
      },
      {
        sub: "Präpositionen mit Dativ",
        type: "cross",
        q: "Welcher Fall folgt auf die Präposition?",
        rows: [
          "mit ___ (der Hund)",
          "nach ___ (die Schule)",
          "von ___ (der Vater)",
          "aus ___ (das Haus)",
          "bei ___ (der Freund)"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 2, 2, 2, 2],
        model: "mit, nach, von, aus, bei verlangen Dativ.",
        rule: "<div class=rbox>Präpositionen mit Dativ: <span class=hl>mit, nach, von, aus, bei, seit, zu, außer</span>.</div>"
      },
      {
        sub: "Präpositionen mit Genitiv",
        type: "cross",
        q: "Welcher Fall folgt auf die Präposition?",
        rows: [
          "trotz ___ (der Regen)",
          "wegen ___ (der Stau)",
          "während ___ (die Vorstellung)",
          "statt ___ (das Buch)",
          "innerhalb ___ (die Stadt)"
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [3, 3, 3, 3, 3],
        model: "trotz, wegen, während, statt, innerhalb verlangen Genitiv.",
        rule: "<div class=rbox>Präpositionen mit Genitiv: <span class=hl>trotz, wegen, während, statt, innerhalb, außerhalb</span>.</div>"
      },
      {
        sub: "Wechselpräpositionen (Dativ oder Akkusativ?)",
        type: "cross",
        q: "Akkusativ (wohin?) oder Dativ (wo?)?",
        rows: [
          "Er geht in ___ (der Park). (wohin?)",
          "Er spielt in ___ (der Park). (wo?)",
          "Sie legt das Buch auf ___ (der Tisch). (wohin?)",
          "Das Buch liegt auf ___ (der Tisch). (wo?)",
          "Wir stellen das Auto vor ___ (das Haus). (wohin?)"
        ],
        cols: ["Akkusativ", "Dativ"],
        correct: [0, 1, 0, 1, 0],
        model: "Wohin? → Akkusativ; Wo? → Dativ.",
        rule: "<div class=rbox>Wechselpräpositionen (in, an, auf, unter, über, vor, hinter, neben, zwischen): bei Bewegung (wohin?) → <span class=hl>Akkusativ</span>, bei Ort (wo?) → <span class=hl>Dativ</span>.</div>"
      },
      {
        sub: "Verben mit Dativ oder Akkusativ",
        type: "cross",
        q: "Welcher Fall folgt auf das Verb?",
        rows: [
          "Ich helfe ___ (der Freund).",
          "Er fragt ___ (der Lehrer).",
          "Sie dankt ___ (die Mutter).",
          "Wir sehen ___ (das Kind).",
          "Das Buch gehört ___ (der Mann)."
        ],
        cols: ["Akkusativ", "Dativ"],
        correct: [1, 0, 1, 0, 1],
        model: "helfen, danken, gehören → Dativ; fragen, sehen → Akkusativ.",
        rule: "<div class=rbox>Bestimmte Verben verlangen immer einen bestimmten Fall: <span class=hl>helfen, danken, gehören</span> + Dativ; <span class=hl>fragen, sehen, hören</span> + Akkusativ.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "cross",
        q: "Bestimme den Fall des unterstrichenen Wortes:",
        rows: [
          "Ich gebe <u>dem Kind</u> einen Ball.",
          "Das Auto <u>des Nachbarn</u> ist neu.",
          "Er wartet auf <u>den Bus</u>.",
          "Sie wohnt bei <u>ihrer Tante</u>.",
          "Wegen <u>des Sturms</u> fiel der Strom aus."
        ],
        cols: ["Nominativ", "Akkusativ", "Dativ", "Genitiv"],
        correct: [2, 3, 1, 2, 3],
        model: "dem Kind=Dativ, des Nachbarn=Genitiv, den Bus=Akkusativ, ihrer Tante=Dativ, des Sturms=Genitiv.",
        rule: "<div class=rbox>Übung zu allen vier Fällen.</div>"
      }
    ]
  }
];
