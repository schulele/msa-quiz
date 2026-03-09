var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_wortarten_bestimmen",
    title: "Wortarten bestimmen",
    emoji: "🔤",
    color: "#8b5cf6",
    qs: [
      {
        sub: "Adjektiv oder Adverb?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Der Aufsatz ist nicht (schwer).",
          "(Morgen) bin ich bei Maike.",
          "(Nett) waren wir doch immer.",
          "Ich gehe (gerne) zum Tanzen.",
          "Dabei zog er (komische) Grimassen.",
          "(Wann) sind Sie frei?"
        ],
        cols: ["Adjektiv", "Adverb"],
        correct: [0, 1, 0, 1, 0, 1],
        model: "schwer = Adjektiv, Morgen = Adverb, nett = Adjektiv, gerne = Adverb, komische = Adjektiv, wann = Adverb",
        rule: "<div class=rbox>Adjektive beschreiben Eigenschaften oder Zustände und können gesteigert werden. Adverbien sind Umstandswörter (Zeit, Ort, Art) und sind unveränderlich.</div>"
      },
      {
        sub: "Präposition oder Konjunktion?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Wir gehen, (weil) es gleich regnet.",
          "Morgen bin ich (bei) Maike.",
          "(Wegen) Glatteis ist heute schulfrei.",
          "Ich laufe (und) schwitzte dabei.",
          "Kevins Buch liegt (auf) der Kommode.",
          "Wir machen Feierabend, (weil) es spät ist."
        ],
        cols: ["Präposition", "Konjunktion"],
        correct: [1, 0, 0, 1, 0, 1],
        model: "weil = Konjunktion, bei, wegen, auf = Präposition, und = Konjunktion",
        rule: "<div class=rbox>Präpositionen stehen vor Nomen und geben Verhältnisse an (bei, wegen, auf). Konjunktionen verbinden Wörter oder Sätze (weil, und).</div>"
      },
      {
        sub: "Nomen oder Verb? (nominalisierte Verben)",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Das ist ein Anlass zum (Feiern).",
          "Ich gehe gerne zum (Tanzen).",
          "Beim (Schwimmen) muss man aufpassen.",
          "Das (Lachen) der Kinder war laut.",
          "Er liebt das (Reisen).",
          "Sie hat keine Lust zum (Spielen)."
        ],
        cols: ["Nomen", "Verb"],
        correct: [0, 0, 0, 0, 0, 0],
        model: "Alle unterstrichenen Wörter sind nominalisierte Verben (erkennbar an: zum, beim, das).",
        rule: "<div class=rbox>Verben können zu Nomen werden (Nominalisierung). Sie werden dann großgeschrieben und haben Begleiter wie <span class=hl>das, zum, beim</span>. In diesem Fall sind sie als Nomen zu bestimmen.</div>"
      },
      {
        sub: "Artikel oder Pronomen?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Hast du (den) Stempel gesehen?",
          "Das ist doch (euer) Hund.",
          "Ich besuche gern (meine) Oma.",
          "Sie hat (sie) doch gerade gesehen.",
          "(Der) Aufzug funktioniert nicht.",
          "Hat je (jemand) die Sterne gezählt?"
        ],
        cols: ["Artikel", "Pronomen"],
        correct: [0, 1, 1, 1, 0, 1],
        model: "den, der = Artikel; euer, meine, sie, jemand = Pronomen",
        rule: "<div class=rbox>Artikel begleiten ein Nomen (der, die, das; ein, eine). Pronomen ersetzen oder verweisen auf ein Nomen (ich, sie, mein, euer, jemand).</div>"
      },
      {
        sub: "Nebenordnende Konjunktionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚und'",
          "‚oder'",
          "‚aber'",
          "‚denn'",
          "‚sondern'"
        ],
        cols: ["nebenordnende Konjunktion", "unterordnende Konjunktion"],
        correct: [0, 0, 0, 0, 0],
        model: "und, oder, aber, denn, sondern sind nebenordnende Konjunktionen.",
        rule: "<div class=rbox>Nebenordnende Konjunktionen verbinden Hauptsätze oder Satzglieder auf gleicher Ebene. Sie lösen keine Verbendstellung aus.</div>"
      },
      {
        sub: "Unterordnende Konjunktionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚weil'",
          "‚dass'",
          "‚ob'",
          "‚wenn'",
          "‚obwohl'"
        ],
        cols: ["nebenordnende Konjunktion", "unterordnende Konjunktion"],
        correct: [1, 1, 1, 1, 1],
        model: "weil, dass, ob, wenn, obwohl sind unterordnende Konjunktionen.",
        rule: "<div class=rbox>Unterordnende Konjunktionen leiten Nebensätze ein und verlangen Verbendstellung.</div>"
      },
      {
        sub: "Numerale oder Adjektiv?",
        type: "cross",
        q: "Bestimme die Wortart des unterstrichenen Wortes.",
        rows: [
          "Claire hat (drei) verschiedene Namensschilder.",
          "Beim (zweiten) Versuch gelang es.",
          "Er ist der (erste) Mensch auf dem Mond.",
          "Sie hat (viele) Freunde.",
          "Das ist ein (schöner) Tag.",
          "Die (grüne) Wiese ist nass."
        ],
        cols: ["Numerale", "Adjektiv"],
        correct: [0, 0, 0, 0, 1, 1],
        model: "drei, zweiten, erste, viele = Numerale; schöner, grüne = Adjektive",
        rule: "<div class=rbox>Numeralien geben eine Anzahl oder Reihenfolge an (drei, zweite, erste, viele). Adjektive beschreiben Eigenschaften (schön, grün).</div>"
      },
      {
        sub: "Interjektionen",
        type: "cross",
        q: "Bestimme die Wortart:",
        rows: [
          "‚Ach'",
          "‚Oh'",
          "‚Hallo' (als Ausruf)",
          "‚Miau'",
          "‚Hurra'"
        ],
        cols: ["Interjektion", "Nomen"],
        correct: [0, 0, 0, 0, 0],
        model: "Ach, Oh, Hallo, Miau, Hurra sind Interjektionen.",
        rule: "<div class=rbox>Interjektionen sind Ausrufe oder Lautmalereien. Sie stehen oft allein und werden durch Komma oder Ausrufezeichen abgetrennt.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welche Wortart hat das unterstrichene Wort?\n\n(a) Der Aufsatz ist nicht (schwer).\n(b) Wir gehen, (weil) es gleich regnet.\n(c) (Aua)!\n(d) Claire hat (drei) verschiedene Namensschilder.\n(e) Die Kinder zeigten (unaussprechliche) Freude.",
        o: [
          "(a) Adjektiv, (b) Konjunktion, (c) Interjektion, (d) Numerale, (e) Adjektiv",
          "(a) Adverb, (b) Präposition, (c) Nomen, (d) Adjektiv, (e) Adverb",
          "(a) Adjektiv, (b) Präposition, (c) Interjektion, (d) Numerale, (e) Adverb",
          "(a) Verb, (b) Konjunktion, (c) Interjektion, (d) Pronomen, (e) Adjektiv"
        ],
        c: 0,
        model: "schwer = Adjektiv, weil = Konjunktion, Aua = Interjektion, drei = Numerale, unaussprechliche = Adjektiv",
        rule: "<div class=rbox>Adjektive beschreiben Eigenschaften, Konjunktionen verbinden Sätze, Interjektionen sind Ausrufe, Numeralien sind Zahlwörter, Adverbien sind Umstandswörter.</div>"
      }
    ]
  }
];
