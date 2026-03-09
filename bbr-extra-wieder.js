var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_wieder_wider",
    title: "wieder oder wider",
    emoji: "🔁",
    color: "#2563eb",
    qs: [
      {
        sub: "Lückentext",
        type: "cross",
        q: "Entscheide: wieder (ie) oder wider (i)?",
        rows: [
          "die W___dereröffnung des Sportplatzes",
          "der Termin hatte sich immer w___der verzögert",
          "der Sportplatz ist kaum w___derzuerkennen",
          "nur w___derwillig reichte er die Hand",
          "seinem W___dersacher",
          "beim W___dersehen"
        ],
        cols: ["wieder (ie)", "wider (i)"],
        correct: [0, 0, 0, 1, 1, 0],
        model: "Wiedereröffnung, wieder verzögert, wiederzuerkennen, Wiedersehen = wieder; widerwillig, Widersacher = wider",
        rule: "<div class=rbox><span class=hl>wider</span> bedeutet „gegen" (widerwillig, Widersacher). <span class=hl>wieder</span> bedeutet „erneut" oder „zurück" (wiedereröffnen, wiedersehen).</div>"
      },
      {
        sub: "Wortbildung: wieder- oder wider-?",
        type: "cross",
        q: "Welche Vorsilbe ergibt ein sinnvolles Wort?",
        rows: [
          "holen → ___holen",
          "legen → ___legen",
          "sprechen → ___sprechen",
          "rufen → ___rufen",
          "beleben → ___beleben",
          "kommen → ___kommen"
        ],
        cols: ["wieder-", "wider-"],
        correct: [0, 1, 1, 1, 0, 0],
        model: "wiederholen, wiederbeleben, wiederkommen = wieder; widerlegen, widersprechen, widerrufen = wider",
        rule: "<div class=rbox><span class=hl>Wieder-</span> bedeutet „erneut" oder „zurück" (wiederholen, wiederbeleben). <span class=hl>Wider-</span> bedeutet „gegen" (widerlegen, widersprechen, widerrufen).</div>"
      },
      {
        sub: "Sätze ergänzen",
        type: "cross",
        q: "Setze das passende Wort mit wieder oder wider ein.",
        rows: [
          "Ich empfehle euch, die Vokabeln zu ___",
          "Da muss ich dir entschieden ___",
          "Der Notarzt konnte den Verunglückten ___",
          "Leider hat der Zeuge seine Aussage zu dem Vorgang ___",
          "Wir würden gerne im Herbst ___",
          "Einer der Einbrecher versuchte, sich seiner Festnahme zu ___"
        ],
        cols: ["wieder", "wider"],
        correct: [0, 1, 0, 1, 0, 1],
        model: "wiederholen, widersprechen, wiederbeleben, widerrufen, wiederkommen, widersetzen",
        rule: "<div class=rbox>wiederholen (erneut), widersprechen (gegen), wiederbeleben (erneut), widerrufen (gegen), wiederkommen (zurück), widersetzen (gegen).</div>"
      },
      {
        sub: "Entscheidungspaare",
        type: "cross",
        q: "Wieder oder wider? Wähle die richtige Schreibweise.",
        rows: [
          "Die Gläubigen durften sich nach dem Gebet ___ (setzen).",
          "Die Fahrgäste ___ (setzen) sich nicht der Anweisung.",
          "Das kleine Dorf leistete den Römern ___ (stand).",
          "Der Tierpfleger blieb, bis das Tier ___ (stand).",
          "Man sieht sich in den Kacheln ___ (spiegeln).",
          "Das Verhalten der Hauptperson empfinde ich als ___ (natürlich).",
          "Nach der Renaturierung sieht das Flussbett ___ (natürlich) aus.",
          "Es ist spät geworden, lass uns ___ (fahren).",
          "Du siehst blass aus. Was ist dir ___ (fahren)?"
        ],
        cols: ["wieder", "wider"],
        correct: [0, 1, 1, 0, 1, 1, 0, 0, 1],
        model: "wieder setzen (erneut), widersetzen (gegen), Widerstand, wieder stand (erneut), widerspiegeln (gegen), widernatürlich (gegen), wieder natürlich (erneut), wieder fahren (zurück), widerfahren (gegen/passieren)",
        rule: "<div class=rbox><span class=hl>Wider-</span> bedeutet „gegen" (widersetzen, Widerstand, widerspiegeln, widernatürlich, widerfahren). <span class=hl>Wieder</span> bedeutet „erneut" oder „zurück" (wieder setzen, wieder fahren).</div>"
      },
      {
        sub: "Getrennt- oder Zusammenschreibung mit 'wieder'",
        type: "cross",
        q: "Entscheide, ob das Verb mit 'wieder' getrennt oder zusammengeschrieben wird.",
        rows: [
          "Gleich nach der Tour werde ich dir das Rad wieder ___ (bringen).",
          "Nach der Trennung wollte er ihr Herz wieder ___ (gewinnen).",
          "Ich werde den Kandidaten nie wieder ___ (wählen).",
          "Das dürfen wir nicht wieder ___ (zulassen).",
          "Die Ranger konnten dem Tier die Freiheit wieder ___ (schenken).",
          "Herr Grau wollte den ehemaligen Mitarbeiter wieder ___ (einstellen)."
        ],
        cols: ["getrennt", "zusammen"],
        correct: [1, 1, 0, 0, 1, 1],
        model: "wiederbringen (zurück), wiedergewinnen (zurück), wiederschenken (zurück), wiedereinstellen (festes Verb) → zusammen; nie wieder wählen, nicht wieder zulassen (erneut, locker) → getrennt.",
        rule: "<div class=rbox>Bei „wieder" im Sinne von „zurück" wird meist zusammengeschrieben (wiederbringen, wiedergewinnen). Im Sinne von „erneut" kann es getrennt oder zusammen sein; feste Komposita wie wiedereinstellen werden zusammengeschrieben.</div>"
      }
    ]
  }
];
