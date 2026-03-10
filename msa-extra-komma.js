// ================================================================
// MSA-EXTRA-KOMMA.JS
// Thema: Kommasetzung
// Aufgabentypen: cross, mc, match, mc3
// Antwortvarianz: ~50% Komma / ~50% kein Komma; mc c:0/1/2 gemischt
// ================================================================

var MSA_EXTRA_KOMMA = [
{
  id: "extra_komma",
  title: "Kommasetzung",
  emoji: "🔍",
  color: "#0f766e",
  qs: [

  // ── TYP 1: CROSS (Komma / kein Komma) – ausgewogen ──

  {
    sub: "Anrede, Ausruf, Einschub",
    type: "cross",
    q: "Komma an der markierten Stelle ( ) ?",
    rows: [
      "Komm wir essen ( ) Opa!",
      "Er kommt ( ) und sie geht.",
      "Berlin ( ) die Hauptstadt ( ) ist groß.",
      "Entweder wir gehen jetzt ( ) oder wir bleiben.",
      "Nein ( ) das stimmt nicht!",
      "Sowohl er ( ) als auch ich sind da."
    ],
    cols: ["Komma", "kein Komma"],
    correct: [0, 1, 0, 0, 1, 0, 1, 1],
    model: "Komm, Opa ✓ Komma (Anrede) | und HS-HS ✓ kein Komma | Berlin, die Hauptstadt, ✓ Komma (Apposition) | entweder...oder ✓ kein Komma (zweiteilige Konj.) | Nein, ✓ Komma (Ausruf) | sowohl...als auch ✓ kein Komma",
    rule: "<div class=rbox>Anreden und Ausrufe → Komma. Appositionen → Komma rundum. Zweiteilige Konjunktionen (entweder…oder, sowohl…als auch) → kein Komma.</div>"
  },

  {
    sub: "Nebensätze: Komma ja oder nein?",
    type: "cross",
    q: "Komma an der markierten Stelle ( ) ?",
    rows: [
      "Er sagt ( ) dass er heute später kommt.",
      "Er kommt ( ) und sie geht.",
      "Ich bleibe zu Hause ( ) weil ich krank bin.",
      "Er ist groß ( ) und stark.",
      "Wir gehen ins Kino ( ) obwohl es regnet.",
      "Sie singt ( ) tanzt ( ) und malt."
    ],
    cols: ["Komma", "kein Komma"],
    correct: [0, 1, 0, 1, 0, 0, 0, 1],
    model: "dass ✓ Komma | und HS+HS ✓ kein Komma | weil ✓ Komma | und nach Adjektiv ✓ kein Komma | obwohl ✓ Komma | singt ✓ Komma | tanzt ✓ Komma | und ✓ kein Komma",
    rule: "<div class=rbox>Nebensätze (dass, weil, obwohl) → Komma. Aufzählung mit 'und' am Ende → kein Komma vor 'und'. Zwischen gleichrangigen Adjektiven/Verben → Komma.</div>"
  },

  {
    sub: "Infinitivgruppen & Partizipialkonstruktionen",
    type: "cross",
    q: "Komma an der markierten Stelle ( ) ?",
    rows: [
      "Um fit zu bleiben ( ) joggt sie jeden Tag.",
      "Er versucht ( ) zu schlafen. (einfacher Infinitiv)",
      "Ohne zu zögern ( ) sprang er ins Wasser.",
      "Ich hoffe ( ) dich bald zu sehen. (nach Signalwort)",
      "Lachend vor Glück ( ) rannte sie nach Hause.",
      "Sie arbeitete ( ) ohne zu klagen."
    ],
    cols: ["Komma", "kein Komma"],
    correct: [0, 1, 0, 0, 0, 0],
    model: "Um fit zu bleiben, ✓ Komma | versucht zu schlafen ✓ kein Komma zwingend | ohne zu zögern, ✓ Komma | hoffe, ✓ Komma (Signalwort) | Lachend vor Glück, ✓ Komma | ohne zu klagen ✓ Komma",
    rule: "<div class=rbox>Infinitivgruppen mit 'um zu', 'ohne zu' → Komma. Einfacher Infinitiv ohne Signalwort → kein Komma zwingend. Vorangestellte Partizipgruppen → Komma.</div>"
  },

  {
    sub: "Temporaler und Konditionalsatz",
    type: "cross",
    q: "Komma an der markierten Stelle ( ) ?",
    rows: [
      "Wenn du lernst ( ) wirst du Erfolg haben.",
      "Er kommt ( ) wenn er Zeit hat.",
      "Bevor wir fahren ( ) packen wir.",
      "Er duschte ( ) dann frühstückte er.",
      "Je mehr du lernst ( ) desto besser wirst du.",
      "Er sang ( ) während sie tanzte."
    ],
    cols: ["Komma", "kein Komma"],
    correct: [0, 0, 0, 0, 0, 0],
    model: "Wenn, ✓ Komma | wenn ✓ Komma | Bevor, ✓ Komma | dann HS+HS ✓ Komma (ohne Konj.) | desto ✓ Komma | während ✓ Komma",
    rule: "<div class=rbox>Konditionalsätze (wenn, falls) → Komma. Temporalsätze (bevor, sobald, während) → Komma. 'Je…desto' → Komma vor desto. Zwei HS ohne Konjunktion → Komma.</div>"
  },

  {
    sub: "Satzreihen, direkte Rede & Trickfragen",
    type: "cross",
    q: "Komma an der markierten Stelle ( ) ?",
    rows: [
      "Er schreibt ( ) sie liest. (zwei HS ohne Konj.)",
      "Er kommt ( ) und sie geht. (zwei HS mit 'und')",
      "Er sagte ( ) 'Ich komme morgen.' (vor direkter Rede)",
      "'Komm her!' ( ) rief sie. (nach direkter Rede)",
      "Das Buch ( ) das er kaufte ( ) ist interessant.",
      "Sie sang ( ) und er spielte Gitarre."
    ],
    cols: ["Komma", "kein Komma"],
    correct: [0, 1, 0, 0, 0, 0, 1],
    model: "schreibt, liest ✓ Komma (HS ohne Konj.) | und HS+HS ✓ kein Komma | sagte, ✓ Komma | 'Komm!', ✓ Komma | das, das er kaufte, ✓ Komma | und HS+HS ✓ kein Komma",
    rule: "<div class=rbox>Zwei HS ohne Konjunktion → Komma. Mit 'und' → kein Komma. Vor und nach direkter Rede → Komma. Relativsatz → Komma einschließen.</div>"
  },

  // ── TYP 2: MC – c:0/1/2 gemischt ──

  {
    sub: "Komma-Regel: Anrede",
    type: "mc",
    q: "Welcher Satz ist richtig interpunktiert?",
    o: ["Komm wir essen Opa!", "Komm, wir essen, Opa!", "Komm, wir essen Opa!"],
    c: 1,
    model: "B – Komm, wir essen, Opa! (Anrede 'Opa' wird mit Komma abgetrennt)",
    rule: "<div class=rbox>Anreden am Satzanfang, -ende oder eingeschoben → durch Komma abgetrennt.</div>"
  },

  {
    sub: "entweder … oder – Komma?",
    type: "mc",
    q: "Welcher Satz ist korrekt?",
    o: ["Entweder wir gehen, oder wir bleiben.", "Entweder wir gehen oder wir bleiben.", "Entweder, wir gehen oder wir bleiben."],
    c: 1,
    model: "B – kein Komma bei 'entweder … oder' (zweiteilige Konjunktion)",
    rule: "<div class=rbox>Bei zweiteiligen Konjunktionen (entweder…oder, sowohl…als auch, weder…noch) steht kein Komma.</div>"
  },

  {
    sub: "dass vs. das – Komma davor?",
    type: "mc",
    q: "Welcher Satz braucht zwingend ein Komma vor dem markierten Wort?\n(a) Er glaubt ___ alles gut wird.\n(b) Das Buch ___ er kaufte ___ ist interessant.",
    o: ["Nur (a) braucht Komma vor 'dass'", "Nur (b) braucht Komma", "Beide brauchen Komma"],
    c: 2,
    model: "C – Beide: 'dass' (Konjunktion) → Komma davor; 'das' (Relativpronomen) → NS in Kommas einschließen",
    rule: "<div class=rbox>Vor 'dass' (Konjunktion) → Komma. Bei 'das' als Relativpronomen → Relativsatz wird in Kommas eingeschlossen.</div>"
  },

  {
    sub: "Verknüpfungsadverb: deshalb",
    type: "mc",
    q: "'Es regnete ( ) deshalb ( ) blieben wir.' – Welche Kommasetzung ist korrekt?",
    o: ["Es regnete, deshalb, blieben wir.", "Es regnete, deshalb blieben wir.", "Es regnete deshalb, blieben wir."],
    c: 1,
    model: "B – Komma vor 'deshalb', kein Komma nach 'deshalb'",
    rule: "<div class=rbox>Konjunktionaladverbien (deshalb, daher, trotzdem) → Komma davor (Trennung der HS). Nach ihnen kein Komma.</div>"
  },

  {
    sub: "Infinitiv mit 'zu' – Komma nötig?",
    type: "mc",
    q: "'Er versucht ( ) zu schlafen.' – Komma nötig?",
    o: ["Ja, immer: Er versucht, zu schlafen.", "Nein, nicht zwingend bei einfachem Infinitiv.", "Nein, nie ein Komma vor 'zu'."],
    c: 1,
    model: "B – Einfache Infinitivgruppen ohne Signalwort (versuchen, beginnen) → Komma optional",
    rule: "<div class=rbox>Einfache Infinitivgruppen (er versucht zu schlafen) → kein Komma zwingend. Bei Signalwort (er hofft, bald zu kommen) oder erweiterten Infinitiven → Komma.</div>"
  },

  // ── TYP 3: MC3 ──

  {
    sub: "Komma oder kein Komma? (Schnelltest)",
    type: "mc3",
    q: "Komma an der markierten Stelle?",
    rows: [
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"],
      ["Komma", "kein Komma"]
    ],
    rowTexts: [
      "Er sagt, ( ) er kommt.",
      "Er schreibt ( ) und sie liest.",
      "Lachend vor Glück ( ) rannte sie.",
      "Je mehr du übst ( ) desto besser wirst du.",
      "Pizza ( ) Pasta und Eis schmecken gut.",
      "Wir gehen ( ) obwohl es regnet."
    ],
    correct: [1, 1, 0, 0, 0, 0],
    model: "er kommt: kein zweites Komma ✓ | und HS+HS: kein Komma ✓ | Lachend: Komma ✓ | desto: Komma ✓ | Pizza, Pasta: Komma ✓ | obwohl: Komma ✓",
    rule: "<div class=rbox>Nach einleitetdem 'sagt,' ist der Komma schon da; kein zweites. und HS+HS → kein Komma. Partizipgruppe → Komma. je…desto → Komma. Aufzählung → Komma. Nebensatz → Komma.</div>"
  },

  // ── TYP 4: MATCH ──

  {
    sub: "Kommaregel → Beispiel zuordnen",
    type: "match",
    q: "Ordne der Kommaregel ein passendes Beispiel zu:",
    pairs: [
      ["Anrede → Komma", "Komm, Opa!"],
      ["Nebensatz → Komma", "Ich lerne, weil es wichtig ist."],
      ["Apposition → Komma rundum", "Berlin, die Hauptstadt, ist groß."],
      ["entweder…oder → kein Komma", "Entweder wir gehen oder bleiben."],
      ["Aufzählung, letztes Glied mit 'und' → kein Komma", "Pizza, Pasta und Eis."],
      ["zwei HS ohne Konj. → Komma", "Er schreibt, sie liest."]
    ],
    model: "Anrede → Komm, Opa | NS → Komma | Apposition → rundum | entweder…oder → kein Komma | Aufzählung + und → kein Komma | HS+HS ohne Konj. → Komma",
    rule: "<div class=rbox>Kommaregeln: Anreden, Nebensätze, Appositionen → Komma. Zweiteilige Konjunktionen, 'und' vor letztem Aufzählungsglied → kein Komma.</div>"
  },

  {
    sub: "Satzstruktur → Kommaregel zuordnen",
    type: "match",
    q: "Ordne dem Satztyp die Kommaregel zu:",
    pairs: [
      ["Relativsatz", "wird in Kommas eingeschlossen"],
      ["Konditionalsatz (wenn)", "Komma zwischen NS und HS"],
      ["um…zu-Gruppe", "Komma, wenn vorangestellt oder nach Signalwort"],
      ["zwei HS mit 'und'", "kein Komma nötig (optional möglich)"],
      ["Direkte Rede", "Komma vor Anführungszeichen"],
      ["je … desto", "Komma vor 'desto'"]
    ],
    model: "Relativsatz → einschließen | wenn → NS/HS-Grenze | um zu → Signalwort | HS+und+HS → kein Komma | direkte Rede → Komma davor | je…desto → Komma vor desto",
    rule: "<div class=rbox>Jeder Satztyp hat eine eigene Kommaregel. Nebensätze werden immer durch Komma vom Hauptsatz getrennt.</div>"
  }

  ]
}
];
