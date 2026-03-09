var BBR_EXTRA_THEMES = [
  {
    id: "bbr_extra_rechtschreibung",
    title: "Häufige Rechtschreibprobleme",
    emoji: "✏️",
    color: "#b45309",
    qs: [
      {
        sub: "das oder dass",
        type: "cross",
        q: "das oder dass?",
        rows: [
          "Ich hoffe, ___ du kommst.",
          "___ Buch ist interessant.",
          "Das Auto, ___ er fährt, ist rot.",
          "Sie sagte, ___ sie müde sei.",
          "Weißt du, ___ er meint?"
        ],
        cols: ["das", "dass"],
        correct: [1, 0, 0, 1, 1],
        model: "dass leitet Nebensatz ein (hoffe dass, sagte dass, weißt dass); das als Artikel oder Relativpronomen (das Buch, das er fährt).",
        rule: "<div class=rbox>Ersatzprobe: Kann man 'dieses' oder 'welches' einsetzen? → <span class=hl>das</span>. Sonst → <span class=hl>dass</span>.</div>"
      },
      {
        sub: "wieder oder wider",
        type: "cross",
        q: "wieder (erneut/zurück) oder wider (gegen)?",
        rows: [
          "Er kommt ___ (erneut).",
          "Das ist ___ (gegen) die Regeln.",
          "Ich habe ihn ___ (zurück) gesehen.",
          "Sie sprach ___ (dagegen) den Vorschlag.",
          "Wir treffen uns ___ (erneut)."
        ],
        cols: ["wieder", "wider"],
        correct: [0, 1, 0, 1, 0],
        model: "wieder = noch einmal, zurück; wider = gegen.",
        rule: "<div class=rbox><span class=hl>wieder</span> bedeutet 'noch einmal' oder 'zurück', <span class=hl>wider</span> bedeutet 'gegen'.</div>"
      },
      {
        sub: "seid oder seit",
        type: "cross",
        q: "seid (ihr seid) oder seit (zeitlich)?",
        rows: [
          "___ wann wart ihr da?",
          "Ihr ___ so lustig!",
          "___ dem Unfall hat er Angst.",
          "___ ihr endlich fertig?",
          "___ Jahren wohnen wir hier."
        ],
        cols: ["seid", "seit"],
        correct: [1, 0, 1, 0, 1],
        model: "seit = zeitlich (wann, dem Unfall, Jahren); seid = 2. Pers. Pl. von sein (ihr seid).",
        rule: "<div class=rbox>Probe: Kann man 'seid' durch 'seid ihr' ersetzen? Ja → <span class=hl>seid</span>. Zeitangabe → <span class=hl>seit</span>.</div>"
      },
      {
        sub: "end oder ent?",
        type: "cross",
        q: "end (Ende) oder ent (Vorsilbe)?",
        rows: [
          "Das ___e des Films war spannend.",
          "Er ___schied sich für das Angebot.",
          "Am ___e der Straße.",
          "Sie ___deckte einen Fehler.",
          "Das Buch ist zu ___e."
        ],
        cols: ["end-", "ent-"],
        correct: [0, 1, 0, 1, 0],
        model: "Ende (Nomen): end-; entschied, entdeckte: ent- (Vorsilbe).",
        rule: "<div class=rbox><span class=hl>end-</span> kommt von Ende (Nomen), <span class=hl>ent-</span> ist eine Vorsilbe (entdecken, entscheiden).</div>"
      },
      {
        sub: "fiel oder viel?",
        type: "cross",
        q: "fiel (Verb: fallen) oder viel (Menge)?",
        rows: [
          "Er ___ vom Fahrrad.",
          "Sie hat ___ Geld.",
          "Das ___ ihm schwer.",
          "Es gab ___ zu tun.",
          "Der Apfel ___ vom Baum."
        ],
        cols: ["fiel", "viel"],
        correct: [0, 1, 0, 1, 0],
        model: "fiel = Präteritum von fallen; viel = große Menge.",
        rule: "<div class=rbox><span class=hl>fiel</span> ist die Vergangenheit von fallen, <span class=hl>viel</span> bedeutet 'eine große Menge'.</div>"
      },
      {
        sub: "mal oder Mahl?",
        type: "cross",
        q: "mal (Zeitpunkt/Multiplikation) oder Mahl (Essen)?",
        rows: [
          "Komm ___ vorbei!",
          "Das ___ ist angerichtet.",
          "Drei ___ vier ist zwölf.",
          "Wir essen ein ___.",
          "Ich war schon ___ da."
        ],
        cols: ["mal", "Mahl"],
        correct: [0, 1, 0, 1, 0],
        model: "mal = Partikel oder Multiplikationszeichen; Mahl = Mahlzeit.",
        rule: "<div class=rbox><span class=hl>mal</span> (klein) ist ein Adverb oder Multiplikationszeichen, <span class=hl>Mahl</span> (groß) ist das Essen.</div>"
      },
      {
        sub: "Doppelkonsonanten",
        type: "cross",
        q: "Ist die Schreibweise korrekt?",
        rows: [
          "Komm mit",
          "renen",
          "Schwimmen",
          "Tip",
          "Schifffahrt"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 1, 0],
        model: "Komm, Schwimmen, Schifffahrt sind korrekt; renen (→ rennen) und Tip (→ Tipp) sind falsch.",
        rule: "<div class=rbox>Nach kurzem Vokal wird der Konsonant verdoppelt. Bei drei gleichen Buchstaben bleiben alle erhalten (Schifffahrt).</div>"
      },
      {
        sub: "Dehnungs-h",
        type: "cross",
        q: "Ist die Schreibweise mit h korrekt?",
        rows: [
          "fahren",
          "sehren",
          "Zahl",
          "Kohle",
          "Das erste Mal war er dabei."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 0],
        model: "fahren, Zahl, Kohle, Mal sind korrekt; sehren → sehr (kein h).",
        rule: "<div class=rbox>Dehnungs-h steht nach langem Vokal bei bestimmten Wörtern (fahren, Zahl, Kohle). Es gibt Ausnahmen (sehr ohne h).</div>"
      },
      {
        sub: "Gemischte Rechtschreibung",
        type: "cross",
        q: "Ist die Schreibweise korrekt?",
        rows: [
          "Das ist das Beste.",
          "Er fährt rad.",
          "Heute Abend.",
          "Sie hat recht.",
          "Ich bin der Meinung."
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 1, 0, 0, 0],
        model: "Das Beste (groß) korrekt; rad (klein) falsch, muss Rad heißen; heute Abend (groß) korrekt; recht haben (klein) korrekt; Meinung (groß) korrekt.",
        rule: "<div class=rbox>Substantive groß, Adjektive/Verben klein. 'recht haben' ist eine feste Wendung mit kleinem Adjektiv.</div>"
      },
      {
        sub: "Fremdwörter",
        type: "cross",
        q: "Ist die Schreibweise (heute) korrekt?",
        rows: [
          "Telefon",
          "Fotografie",
          "Portemonnaie",
          "Spaghetti",
          "Mayonnaise"
        ],
        cols: ["korrekt", "falsch"],
        correct: [0, 0, 0, 0, 0],
        model: "Telefon, Fotografie, Portemonnaie, Spaghetti, Mayonnaise sind alle korrekt (nach aktueller Rechtschreibung).",
        rule: "<div class=rbox>Aktuelle Schreibweisen: Telefon (nicht Telephon), Fotografie (nicht Photographie), Spaghetti, Mayonnaise.</div>"
      },
      {
        sub: "Gemischte Übung",
        type: "mc",
        q: "Welcher Satz ist korrekt geschrieben?\n\n(A) Er hat viel Geld.\n(B) Er fiel vom Fahrrad.\n(C) Seid wann wart ihr da?\n(D) Das ist wieder die Regeln.",
        o: [
          "nur A",
          "A und B",
          "B und C",
          "alle außer D"
        ],
        c: 1,
        model: "A (viel) und B (fiel) sind korrekt. C falsch (→ seit), D falsch (→ wider).",
        rule: "<div class=rbox>Übung zu häufigen Fehlerwörtern: viel/fiel, seit/seid, wieder/wider.</div>"
      }
    ]
  }
];
