// ================================================================
// MSA-EXTRA-WORTARTEN.JS
// Thema: Wortarten bestimmen
// Aufgabentypen: mc, cross, match, mc3
// Antwortvarianz: mc c:0/1/2 gemischt; cross ausgewogen
// ================================================================

var MSA_EXTRA_WORTARTEN = [
{
  id: "extra_wortarten",
  title: "Wortarten bestimmen",
  emoji: "🧩",
  color: "#0e7490",
  qs: [

  // ── TYP 1: CROSS (Wortart zuordnen) ──

  {
    sub: "Nomen / Verb / Adjektiv / Adverb",
    type: "cross",
    q: "Bestimme die Wortart der markierten Wörter:",
    rows: [
      "'Das **Haus** ist alt.' – Haus",
      "'Er **läuft** schnell.' – läuft",
      "'Ein **kluger** Hund.' – kluger",
      "'Sie singt **wunderschön**.' – wunderschön",
      "'Das **Lachen** ist ansteckend.' – Lachen",
      "'Wir fahren **heute**.' – heute"
    ],
    cols: ["Nomen / Verb / Adj.", "Adverb"],
    correct: [0, 0, 0, 1, 0, 1],
    model: "Haus ✓ Nomen | läuft ✓ Verb | kluger ✓ Adjektiv | wunderschön ✓ Adverb (modifiziert Verb) | Lachen ✓ Nomen | heute ✓ Adverb",
    rule: "<div class=rbox>Adverb: modifiziert Verb/Adjektiv, nicht dekliniert (wunderschön, heute, schnell). Adjektiv: dekliniert, beschreibt Nomen. Nomen: großgeschrieben, mit Artikel.</div>"
  },

  {
    sub: "Pronomenarten",
    type: "cross",
    q: "Handelt es sich um ein Personalpronomen oder ein anderes Pronomen?",
    rows: [
      "'Er hilft **ihr**.' – ihr",
      "'**Das** ist mein Haus.' – Das (zeigt auf etwas)",
      "'Das ist **mein** Auto.' – mein",
      "'**Man** sagt das so.' – Man",
      "'Das Kind, **das** dort spielt.' – das (nach Komma)",
      "'**Jemand** hat gerufen.' – Jemand"
    ],
    cols: ["Personalpronomen", "anderes Pronomen (Demonstrativ, Possessiv, Indefinit, Relativ)"],
    correct: [0, 1, 1, 1, 1, 1],
    model: "ihr ✓ Personal | das ✓ Demonstrativ | mein ✓ Possessiv | man ✓ Indefinit | das ✓ Relativpronomen | Jemand ✓ Indefinit",
    rule: "<div class=rbox>Personalpronomen: ich, du, er, sie, es, wir, ihr, sie (ersetzen Nomen). Demonstrativ: dieser, das (zeigen). Possessiv: mein, dein. Relativ: der/die/das nach Nomen. Indefinit: man, jemand, etwas.</div>"
  },

  {
    sub: "Konjunktion oder Präposition oder Adverb?",
    type: "cross",
    q: "Ist das Wort Konjunktion (leitet NS ein), Präposition (mit Kasus) oder Adverb?",
    rows: [
      "'Ich gehe, **weil** ich müde bin.' – weil",
      "'**Mit** dem Hund.' – mit",
      "'**Trotzdem** kam er.' – trotzdem",
      "'**Seit** drei Jahren.' – seit",
      "'Er kam, **obwohl** er müde war.' – obwohl",
      "'**Deshalb** blieb sie.' – deshalb"
    ],
    cols: ["Konjunktion (NS-Einleiter)", "Präposition / Adverb (HS-Anschluss)"],
    correct: [0, 1, 1, 1, 0, 1],
    model: "weil ✓ Konjunktion | mit ✓ Präposition | trotzdem ✓ Konjunktionaladverb (HS) | seit ✓ Präposition | obwohl ✓ Konjunktion | deshalb ✓ Konjunktionaladverb (HS)",
    rule: "<div class=rbox>Konjunktionen (weil, obwohl, dass) leiten Nebensätze ein (Verb ans Ende). Präpositionen regieren Kasus. Konjunktionaladverbien (trotzdem, deshalb) verbinden Hauptsätze (Verb auf Pos. 2).</div>"
  },

  // ── TYP 2: MC – c:0/1/2 gemischt ──

  {
    sub: "'Das' – Artikel oder Demonstrativpronomen?",
    type: "mc",
    q: "'**Das** Haus ist rot.' – Wortart von 'Das'?",
    o: ["Artikel", "Demonstrativpronomen", "Relativpronomen"],
    c: 0,
    model: "A – Artikel (begleitet direkt das Nomen 'Haus')",
    rule: "<div class=rbox>'Das' als Artikel begleitet ein Nomen direkt. Als Demonstrativpronomen steht es allein: 'Das ist mein Haus.'</div>"
  },

  {
    sub: "'Das' – Demonstrativpronomen",
    type: "mc",
    q: "'**Das** ist mein Haus.' – Wortart von 'Das'?",
    o: ["Artikel", "Demonstrativpronomen", "Adjektiv"],
    c: 1,
    model: "B – Demonstrativpronomen (zeigt auf etwas, kein Nomen direkt dahinter)",
    rule: "<div class=rbox>'Das' ohne nachfolgendes Nomen, mit Verweis auf etwas → Demonstrativpronomen (= dieses hier).</div>"
  },

  {
    sub: "Gradpartikel",
    type: "mc",
    q: "'Ein **sehr** schöner Tag.' – Wortart von 'sehr'?",
    o: ["Adjektiv", "Gradpartikel / Adverb", "Nomen"],
    c: 1,
    model: "B – Gradpartikel / Adverb (steigert das Adjektiv 'schöner')",
    rule: "<div class=rbox>Gradpartikeln (sehr, ziemlich, außerordentlich) steigern oder abschwächen ein Adjektiv oder Adverb.</div>"
  },

  {
    sub: "Modalpartikel",
    type: "mc",
    q: "'Das ist **doch** logisch!' – Wortart von 'doch'?",
    o: ["Konjunktion", "Modalpartikel", "Adverb"],
    c: 1,
    model: "B – Modalpartikel (drückt Einstellung des Sprechers aus, nicht erfragbar)",
    rule: "<div class=rbox>Modalpartikeln (doch, ja, eigentlich, halt, denn) drücken die Haltung des Sprechers aus und sind nicht erfragbar.</div>"
  },

  {
    sub: "Numerale",
    type: "mc",
    q: "'Die **drei** Freunde.' – Wortart von 'drei'?",
    o: ["Numerale", "Adjektiv", "Nomen"],
    c: 0,
    model: "A – Numerale (Kardinalzahl)",
    rule: "<div class=rbox>'drei' ist eine Kardinalzahl → Numerale. Numeralia bezeichnen Anzahl oder Reihenfolge.</div>"
  },

  {
    sub: "Reflexivpronomen",
    type: "mc",
    q: "'Er wäscht **sich**.' – Wortart von 'sich'?",
    o: ["Personalpronomen", "Reflexivpronomen", "Possessivpronomen"],
    c: 1,
    model: "B – Reflexivpronomen (bezieht sich auf das Subjekt zurück)",
    rule: "<div class=rbox>Reflexivpronomen (sich, mich, dich, uns, euch) beziehen sich auf das Subjekt des Satzes zurück.</div>"
  },

  {
    sub: "Konjunktionaladverb",
    type: "mc",
    q: "'Er war krank, **trotzdem** kam er.' – Wortart von 'trotzdem'?",
    o: ["Konjunktion", "Konjunktionaladverb", "Präposition"],
    c: 1,
    model: "B – Konjunktionaladverb (verbindet zwei HS; Verb auf Pos. 2 nach trotzdem)",
    rule: "<div class=rbox>Konjunktionaladverbien (deshalb, trotzdem, dennoch, daher) verbinden Hauptsätze. Das Verb folgt direkt danach (Position 2).</div>"
  },

  {
    sub: "Kasus: Genitiv oder Dativ?",
    type: "mc",
    q: "'Wegen des Regens.' – Welcher Fall?",
    o: ["Genitiv", "Dativ", "Akkusativ"],
    c: 0,
    model: "A – Genitiv (wegen + Genitiv)",
    rule: "<div class=rbox>wegen + Genitiv: wegen des Regens, wegen der Kälte.</div>"
  },

  {
    sub: "Kasus: Dativ oder Akkusativ?",
    type: "mc",
    q: "'Für **mich**.' – Welcher Fall?",
    o: ["Nominativ", "Dativ", "Akkusativ"],
    c: 2,
    model: "C – Akkusativ (für + Akkusativ: für mich)",
    rule: "<div class=rbox>für + Akkusativ: für mich, für dich, für ihn.</div>"
  },

  {
    sub: "Kasus nach 'mit'",
    type: "mc",
    q: "'Mit **dem** Hund.' – Welcher Fall?",
    o: ["Akkusativ", "Dativ", "Genitiv"],
    c: 1,
    model: "B – Dativ (mit + Dativ: mit dem Hund, maskulin Dativ = dem)",
    rule: "<div class=rbox>mit + Dativ: mit dem Hund (mask.), mit der Katze (fem.), mit dem Kind (neutr.).</div>"
  },

  {
    sub: "Kasus nach 'während'",
    type: "mc",
    q: "'Während **der** Ferien.' – Welcher Fall?",
    o: ["Genitiv", "Dativ", "Akkusativ"],
    c: 0,
    model: "A – Genitiv (während + Genitiv)",
    rule: "<div class=rbox>während + Genitiv: während der Ferien, während des Unterrichts.</div>"
  },

  {
    sub: "Kasus nach 'außer'",
    type: "mc",
    q: "'Außer **ihr** war niemand da.' – Welcher Fall?",
    o: ["Nominativ", "Akkusativ", "Dativ"],
    c: 2,
    model: "C – Dativ (außer + Dativ: außer ihr)",
    rule: "<div class=rbox>außer + Dativ: außer ihr, außer mir, außer uns.</div>"
  },

  // ── TYP 3: MC3 (Wortart-Auswahl per Zeile) ──

  {
    sub: "Wortart bestimmen (gemischt)",
    type: "mc3",
    q: "Wähle die richtige Wortart:",
    rows: [
      ["Nomen", "Verb", "Adjektiv"],
      ["Adverb", "Adjektiv", "Nomen"],
      ["Personalpronomen", "Reflexivpronomen", "Possessivpronomen"],
      ["Konjunktion", "Präposition", "Konjunktionaladverb"],
      ["Numerale", "Adjektiv", "Adverb"],
      ["Modalpartikel", "Konjunktion", "Adverb"]
    ],
    labels: ["'Das Lachen' – Lachen", "'wunderschön' – Adv. oder Adj.?", "'sich' in 'er wäscht sich'", "'deshalb' in HS-Verbindung", "'drei Freunde' – drei", "'doch' in 'das ist doch klar'"],
    correct: [0, 0, 1, 2, 0, 0],
    model: "Lachen ✓ Nomen | wunderschön ✓ Adverb | sich ✓ Reflexivpronomen | deshalb ✓ Konjunktionaladverb | drei ✓ Numerale | doch ✓ Modalpartikel",
    rule: "<div class=rbox>Nominalisierter Infinitiv = Nomen. Adverb modifiziert Verb (nicht dekliniert). sich = Reflexivpronomen. deshalb = HS-Verbinder. drei = Numerale. doch = Einstellungsausdruck → Modalpartikel.</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Wortart → Beispiel zuordnen",
    type: "match",
    q: "Ordne der Wortart ein passendes Beispiel zu:",
    pairs: [
      ["Personalpronomen", "er, sie, es, wir, ihr, mir, ihm"],
      ["Reflexivpronomen", "sich, mich, dich, uns, euch"],
      ["Modalpartikel", "doch, ja, halt, eigentlich"],
      ["Konjunktionaladverb", "deshalb, trotzdem, dennoch, daher"],
      ["Numerale", "drei, zwölf, erste, zweimal"],
      ["Interjektion", "Huch! Oh! Ach! Hm!"]
    ],
    model: "Personalpronomen → er/sie | Reflexivpronomen → sich | Modalpartikel → doch/ja | Konjunktionaladverb → deshalb | Numerale → drei | Interjektion → Huch!",
    rule: "<div class=rbox>Jede Wortart hat charakteristische Merkmale: Personalpronomen ersetzen Nomen, Reflexivpronomen verweisen auf Subjekt, Modalpartikeln drücken Einstellung aus.</div>"
  },

  {
    sub: "Kasus → Präposition zuordnen",
    type: "match",
    q: "Ordne der Präposition den Kasus zu, den sie regiert:",
    pairs: [
      ["wegen", "Genitiv"],
      ["mit", "Dativ"],
      ["für", "Akkusativ"],
      ["während", "Genitiv"],
      ["außer", "Dativ"],
      ["durch", "Akkusativ"]
    ],
    model: "wegen → Genitiv | mit → Dativ | für → Akkusativ | während → Genitiv | außer → Dativ | durch → Akkusativ",
    rule: "<div class=rbox>Genitiv: wegen, während, trotz, anstatt. Dativ: mit, bei, außer, nach, seit, von, zu, gegenüber. Akkusativ: durch, für, gegen, ohne, um.</div>"
  }

  ]
}
];
