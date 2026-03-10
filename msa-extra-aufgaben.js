// ================================================================
// EXTRA-AUFGABEN.JS – Überarbeitet nach pädagogischen Prinzipien
// Mehr Interaktivität durch cross-Aufgaben, Gruppierung nach Regeln,
// beibehalten der MC für komplexe Entscheidungen.
// ================================================================

var MSA_EXTRA_THEMES = [

// ── KOMMASETZUNG (überarbeitet: cross mit markierten Stellen) ──
{
  id: "extra_komma",
  title: "Kommasetzung",
  emoji: "🔍",
  color: "#0f766e",
  qs: [
    {
      sub: "Anrede",
      type: "cross",
      q: "Entscheide, ob an der markierten Stelle ( ) ein Komma stehen muss.",
      rows: ["Komm wir essen ( ) Opa!"],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Komm wir essen, Opa!",
      rule: "<div class=rbox>Direkte Anreden werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Aufzählung",
      type: "cross",
      q: "Entscheide für jede markierte Stelle, ob ein Komma nötig ist.",
      rows: [
        "Ich mag Pizza ( ) Pasta Eis und Limo.",
        "Ich mag Pizza Pasta ( ) Eis und Limo.",
        "Er ist groß ( ) stark und mutig.",
        "Er ist groß stark ( ) und mutig."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 1],
      model: "Pizza, Pasta – Komma; vor 'und' kein Komma; stark – Komma; vor 'und' kein Komma.",
      rule: "<div class=rbox>Zwischen gleichrangigen Aufzählungsgliedern steht ein Komma, nicht vor 'und'/'oder'.</div>"
    },
    {
      sub: "Nebensatz (dass, weil, …)",
      type: "cross",
      q: "Entscheide, ob vor dem Nebensatz ein Komma steht.",
      rows: [
        "Er sagt ( ) dass er heute später kommt.",
        "Ich glaube ( ) du hast recht.",
        "Egal was passiert ( ) ich bleibe hier."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle drei Sätze brauchen ein Komma vor dem Nebensatz.",
      rule: "<div class=rbox>Nebensätze (eingeleitet durch dass, ob, weil, …) werden durch Komma vom Hauptsatz getrennt.</div>"
    },
    {
      sub: "Relativsatz",
      type: "cross",
      q: "Entscheide für jede markierte Stelle, ob ein Komma gesetzt wird.",
      rows: [
        "Der Hund ( ) der gestern bellte ( ) ist heute leise.",
        "Das ist alles ( ) was ich weiß."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Der Hund, der gestern bellte, ist … ; Das ist alles, was ich weiß.",
      rule: "<div class=rbox>Eingeschobene Relativsätze werden in Kommas eingeschlossen. Relativsätze mit 'was' nach 'alles' brauchen ein Komma davor.</div>"
    },
    {
      sub: "Infinitivgruppe (um … zu, ohne … zu, …)",
      type: "cross",
      q: "Entscheide, ob nach der Infinitivgruppe ein Komma nötig ist.",
      rows: [
        "Um fit zu bleiben ( ) joggt sie jeden Tag.",
        "Ohne zu zögern ( ) sprang er ins Wasser.",
        "Ich hoffe ( ) dich bald zu sehen.",
        "Statt zu arbeiten ( ) schläft er."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0],
      model: "Alle Infinitivgruppen werden durch Komma abgetrennt (weil vorangestellt oder durch Signalwort angekündigt).",
      rule: "<div class=rbox>Infinitivgruppen mit 'um zu', 'ohne zu', 'statt zu' und solche, die von einem Signalwort (z.B. hoffe) abhängen, werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Konzessivsatz (obwohl)",
      type: "cross",
      q: "Entscheide, ob vor 'obwohl' ein Komma steht.",
      rows: ["Wir gehen ins Kino ( ) obwohl es regnet."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Wir gehen ins Kino, obwohl es regnet.",
      rule: "<div class=rbox>Vor 'obwohl' (einleitende Konjunktion eines Nebensatzes) steht ein Komma.</div>"
    },
    {
      sub: "Apposition (Einschub)",
      type: "cross",
      q: "Entscheide für beide markierten Stellen.",
      rows: ["Berlin ( ) die Hauptstadt ( ) ist groß."],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0],
      model: "Berlin, die Hauptstadt, ist groß.",
      rule: "<div class=rbox>Einschübe (Appositionen) werden in Kommas eingeschlossen.</div>"
    },
    {
      sub: "Trickfrage (entweder … oder)",
      type: "cross",
      q: "Entscheide, ob hier ein Komma nötig ist.",
      rows: [
        "Entweder wir gehen jetzt ( ) oder wir bleiben hier.",
        "Sowohl er ( ) als auch ich sind da."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 1],
      model: "Kein Komma bei 'entweder … oder' und 'sowohl … als auch'.",
      rule: "<div class=rbox>Bei zweiteiligen Konjunktionen (entweder … oder, sowohl … als auch, weder … noch) steht kein Komma.</div>"
    },
    {
      sub: "Entgegenstellung (sondern)",
      type: "cross",
      q: "Entscheide, ob vor 'sondern' ein Komma steht.",
      rows: ["Ich helfe dir nicht nur heute ( ) sondern auch morgen."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: … nicht nur heute, sondern auch morgen.",
      rule: "<div class=rbox>Vor 'sondern' (Entgegenstellung) steht ein Komma.</div>"
    },
    {
      sub: "Indirekter Fragesatz (ob)",
      type: "cross",
      q: "Entscheide, ob vor 'ob' ein Komma steht.",
      rows: ["Sie fragte mich ( ) ob ich Zeit hätte."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Sie fragte mich, ob …",
      rule: "<div class=rbox>Indirekte Fragesätze mit 'ob' werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Partizipgruppe",
      type: "cross",
      q: "Entscheide, ob nach der Partizipgruppe ein Komma steht.",
      rows: ["Lachend vor Glück ( ) rannte sie nach Hause."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Lachend vor Glück, rannte sie …",
      rule: "<div class=rbox>Vorangestellte Partizipgruppen werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Komparativsatz (je … desto)",
      type: "cross",
      q: "Entscheide, ob vor 'desto' ein Komma steht.",
      rows: ["Je mehr du lernst ( ) desto besser wirst du."],
      cols: ["Komma", "kein Komma"],
      correct: [0],
      model: "Richtig: Je mehr du lernst, desto besser …",
      rule: "<div class=rbox>In der 'je … desto'-Konstruktion steht ein Komma vor 'desto'.</div>"
    },
    {
      sub: "Aufzählung mit mehr als 3 Gliedern",
      type: "cross",
      q: "Entscheide für jede markierte Stelle, ob ein Komma nötig ist.",
      rows: [
        "Ich kaufe Äpfel ( ) Birnen ( ) Orangen und Trauben.",
        "Sie singt ( ) tanzt ( ) malt und schreibt.",
        "Er ist klug ( ) fleißig ( ) hilfsbereit und zuverlässig."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0, 0, 0],
      model: "Äpfel, Birnen, Orangen und Trauben – Kommas zwischen allen Gliedern außer vor 'und'.",
      rule: "<div class=rbox>Zwischen gleichrangigen Aufzählungsgliedern steht ein Komma. Das letzte Glied wird mit 'und' oder 'oder' angeschlossen – kein Komma vor 'und'/'oder'.</div>"
    },
    {
      sub: "Konditionalsatz (wenn)",
      type: "cross",
      q: "Entscheide, ob an der markierten Stelle ein Komma steht.",
      rows: [
        "Wenn du lernst ( ) wirst du Erfolg haben.",
        "Ich komme ( ) wenn ich Zeit habe.",
        "Falls es regnet ( ) nehmen wir den Bus."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle drei brauchen ein Komma – Konditionalsätze werden immer abgetrennt.",
      rule: "<div class=rbox>Konditionalsätze (wenn, falls) werden durch Komma vom Hauptsatz getrennt – egal ob vor oder nach dem Hauptsatz.</div>"
    },
    {
      sub: "Kausalsatz (weil, da)",
      type: "cross",
      q: "Entscheide, ob ein Komma steht.",
      rows: [
        "Ich bleibe zu Hause ( ) weil ich krank bin.",
        "Da es regnete ( ) blieben wir drinnen.",
        "Er konnte nicht kommen ( ) da er arbeiten musste."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle drei brauchen ein Komma – Kausalsätze werden abgetrennt.",
      rule: "<div class=rbox>Kausalsätze (weil, da) werden immer durch Komma vom Hauptsatz getrennt.</div>"
    },
    {
      sub: "Zwischenruf / Ausruf",
      type: "cross",
      q: "Entscheide, ob nach dem Ausruf ein Komma steht.",
      rows: [
        "Nein ( ) das stimmt nicht!",
        "Ja ( ) ich komme morgen.",
        "Oh ( ) wie schön ist das!"
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Nach Ausrufen wie 'Nein', 'Ja', 'Oh' steht ein Komma.",
      rule: "<div class=rbox>Ausrufe und Empfindungsworte (Interjektionen: ja, nein, oh, ach) werden durch Komma vom Rest abgetrennt.</div>"
    },
    {
      sub: "Nachgestellte Erläuterung",
      type: "cross",
      q: "Entscheide, ob vor der nachgestellten Ergänzung ein Komma steht.",
      rows: [
        "Mein Bruder ( ) also mein ältester Bruder ( ) kommt morgen.",
        "Er kam spät ( ) also nach Mitternacht ( ) nach Hause.",
        "Das Buch ( ) nämlich ein Roman ( ) war spannend."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0, 0, 0],
      model: "Alle drei: Einschübe mit 'also', 'nämlich' werden in Kommas eingeschlossen.",
      rule: "<div class=rbox>Nachgestellte Erläuterungen und Einschübe mit 'also', 'nämlich', 'das heißt' werden durch Kommas abgetrennt.</div>"
    },
    {
      sub: "Adverbialsatz (obwohl, während, nachdem)",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Während sie schlief ( ) arbeitete er.",
        "Nachdem er gegessen hatte ( ) schlief er ein.",
        "Er kam ( ) obwohl er müde war."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle Adverbialsätze werden durch Komma abgetrennt.",
      rule: "<div class=rbox>Alle Nebensätze – ob temporal (während, nachdem), konzessiv (obwohl) oder kausal – werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Zwei Hauptsätze ohne Konjunktion",
      type: "cross",
      q: "Entscheide, ob zwischen den Hauptsätzen ein Komma steht.",
      rows: [
        "Er schreibt ( ) sie liest.",
        "Das Wetter ist gut ( ) wir gehen raus.",
        "Es schneit ( ) die Kinder jubeln."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Zwei Hauptsätze ohne Konjunktion → Komma zwischen ihnen.",
      rule: "<div class=rbox>Werden zwei Hauptsätze ohne Konjunktion (und, aber, denn…) verbunden, steht ein Komma dazwischen.</div>"
    },
    {
      sub: "Satzreihe mit 'und'",
      type: "cross",
      q: "Entscheide, ob vor 'und' ein Komma steht.",
      rows: [
        "Er kommt ( ) und sie geht.",
        "Sie sang ( ) und er spielte Gitarre.",
        "Der Hund bellte ( ) und die Katze lief weg."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 1, 1],
      model: "Vor 'und' zwischen zwei Hauptsätzen steht kein Komma (Hauptregel!), außer bei Einschüben.",
      rule: "<div class=rbox>Zwischen zwei Hauptsätzen, die durch 'und' verbunden sind, steht in der Regel kein Komma. Ein Komma ist möglich, aber nicht zwingend.</div>"
    },
    {
      sub: "Direkte Rede",
      type: "cross",
      q: "Entscheide, ob vor der direkten Rede ein Komma steht.",
      rows: [
        "Er sagte ( ) \u201eIch komme morgen.\u201c",
        "\u201eKomm her!\u201c ( ) rief sie.",
        "\u201eWann kommst du?\u201c ( ) fragte er."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle drei brauchen ein Komma (vor der Rede bzw. nach dem Anführungszeichen).",
      rule: "<div class=rbox>Vor und nach direkter Rede steht ein Komma (falls kein Ausrufe- oder Fragezeichen).</div>"
    },
    {
      sub: "Nachgestellte Anrede",
      type: "cross",
      q: "Entscheide, ob vor der nachgestellten Anrede ein Komma steht.",
      rows: [
        "Hör mir zu ( ) Lea!",
        "Danke ( ) lieber Freund.",
        "Schreib mir ( ) Max."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Nachgestellte Anreden werden durch Komma abgetrennt.",
      rule: "<div class=rbox>Anreden am Ende des Satzes werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Temporalsatz (bevor, sobald)",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Bevor wir fahren ( ) packen wir.",
        "Ruf an ( ) sobald du da bist.",
        "Ich warte ( ) bis du fertig bist."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle brauchen ein Komma: bevor, sobald, bis leiten Nebensätze ein.",
      rule: "<div class=rbox>Temporalsätze (bevor, sobald, bis, wenn) werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Ergänzung mit 'wie' (kein Vergleich)",
      type: "cross",
      q: "Entscheide, ob vor 'wie' ein Komma steht.",
      rows: [
        "Er ist ( ) wie ich finde ( ) sehr talentiert.",
        "Das Essen ( ) wie immer ( ) war köstlich."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0],
      model: "Eingeschobene Ausdrücke mit 'wie' werden in Kommas eingeschlossen.",
      rule: "<div class=rbox>Einschübe und Parenthesen (wie ich finde, wie immer) werden durch Kommas abgetrennt.</div>"
    },
    {
      sub: "Verkürzter Vergleichssatz",
      type: "cross",
      q: "Entscheide: Komma vor 'wie' oder 'als'?",
      rows: [
        "Sie ist klüger ( ) als ihr Bruder.",
        "Er rennt schneller ( ) als ich dachte."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 0],
      model: "als ihr Bruder → verkürzter Vergleich ohne Verb → kein Komma. als ich dachte → vollständiger NS → Komma.",
      rule: "<div class=rbox>Bei vollständigem Nebensatz (mit Verb) nach 'als' → Komma. Bei verkürztem Vergleich (ohne Verb) → kein Komma.</div>"
    },
    {
      sub: "Trickfrage: 'und' bei Aufzählung vs. HS",
      type: "cross",
      q: "Entscheide, ob vor 'und' ein Komma steht.",
      rows: [
        "Ich kaufe Brot ( ) und gehe nach Hause. (Aufzählung von Verben)",
        "Ich kaufe Brot ( ) und meine Mutter kocht. (zwei HS)"
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 1],
      model: "Beide ohne Komma: Aufzählung von Verben → kein Komma. Zwei HS mit 'und' → kein Komma zwingend.",
      rule: "<div class=rbox>Vor 'und' steht grundsätzlich kein Komma – weder bei Aufzählungen noch bei HS-Verbindungen.</div>"
    },
    {
      sub: "Nachgestelltes Adjektiv (Parenthese)",
      type: "cross",
      q: "Entscheide für die markierten Stellen.",
      rows: [
        "Die Katze ( ) jung und wild ( ) sprang über den Zaun."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0],
      model: "Die Katze, jung und wild, sprang… → eingeschobene Apposition.",
      rule: "<div class=rbox>Nachgestellte Adjektive als Einschübe (Appositionen) werden durch Kommas eingeschlossen.</div>"
    },
    {
      sub: "Statt / anstatt zu",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Anstatt zu lernen ( ) schaute er fern.",
        "Er schlief ( ) statt zu arbeiten."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0],
      model: "Infinitivgruppen mit 'anstatt zu' / 'statt zu' werden durch Komma abgetrennt.",
      rule: "<div class=rbox>Infinitivgruppen mit 'statt zu', 'anstatt zu' werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Trickfrage: kein Komma",
      type: "cross",
      q: "Entscheide: Ist hier ein Komma nötig?",
      rows: [
        "Entweder du kommst ( ) oder du bleibst.",
        "Weder er ( ) noch sie hat es gewusst.",
        "Sowohl Eis ( ) als auch Kuchen schmecken gut."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 1, 1],
      model: "Alle drei: kein Komma bei 'entweder…oder', 'weder…noch', 'sowohl…als auch'.",
      rule: "<div class=rbox>Zweiteilige Konjunktionen (entweder…oder, weder…noch, sowohl…als auch) erfordern kein Komma.</div>"
    },
    {
      sub: "Eingeschobener Hauptsatz",
      type: "cross",
      q: "Entscheide für beide markierte Stellen.",
      rows: [
        "Er kam ( ) wie ich vermutet hatte ( ) zu spät.",
        "Das Buch ( ) glaube ich ( ) ist sehr gut."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0],
      model: "Eingeschobene Sätze werden in Kommas eingeschlossen.",
      rule: "<div class=rbox>Eingeschobene Haupt- oder Nebensätze werden durch zwei Kommas eingeschlossen.</div>"
    },
    {
      sub: "Partizipialkonstruktion",
      type: "cross",
      q: "Entscheide, ob die Partizipialkonstruktion durch Komma abgetrennt wird.",
      rows: [
        "Von Müdigkeit überwältigt ( ) schlief er sofort ein.",
        "Den Rucksack schulternd ( ) verließ er das Haus.",
        "Tief nachdenkend ( ) schrieb sie weiter."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle vorangestellten Partizipkonstruktionen werden durch Komma abgetrennt.",
      rule: "<div class=rbox>Vorangestellte Partizipialkonstruktionen werden immer durch Komma abgetrennt.</div>"
    },
    {
      sub: "Appositionen mit Eigennamen",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Meine Freundin Lisa ( ) die beste Sängerin unserer Klasse ( ) tritt auf.",
        "Friedrich der Große ( ) König von Preußen ( ) war sehr mächtig."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0, 0],
      model: "Appositionen zu Eigennamen werden in Kommas eingeschlossen.",
      rule: "<div class=rbox>Appositionen (erläuternde Einschübe) werden durch Kommas eingeschlossen.</div>"
    },
    {
      sub: "Koordinierte Relativsätze",
      type: "cross",
      q: "Entscheide für die markierten Stellen.",
      rows: [
        "Das ist der Mann ( ) der gestern hier war ( ) und der heute wiederkam."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 1],
      model: "Komma vor Relativsatz (der gestern…), kein Komma vor 'und' bei gleichartigem zweiten Relativsatz.",
      rule: "<div class=rbox>Vor Relativsätzen steht ein Komma. Werden zwei Relativsätze mit 'und' verbunden, kann das Komma entfallen.</div>"
    },
    {
      sub: "Schachtelsatz mit mehreren NS",
      type: "cross",
      q: "Entscheide für die Stellen im Schachtelsatz.",
      rows: [
        "Ich glaube ( ) dass du ( ) wenn du fleißig bist ( ) Erfolg haben wirst."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Ich glaube, dass du, wenn du fleißig bist, Erfolg haben wirst.",
      rule: "<div class=rbox>Eingeschobene Nebensätze werden von beiden Seiten durch Komma abgetrennt.</div>"
    },
    {
      sub: "Finalsatz nachgestellt",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Er übt täglich ( ) damit er besser wird.",
        "Sie spart Geld ( ) um sich ein Fahrrad zu kaufen.",
        "Wir schreiben leise ( ) damit niemand gestört wird."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle drei: Finalsätze (damit, um…zu) werden durch Komma abgetrennt.",
      rule: "<div class=rbox>Finalsätze (damit, um…zu) werden immer durch Komma abgetrennt.</div>"
    },
    {
      sub: "Ausrufe und Empfindungen",
      type: "cross",
      q: "Entscheide, ob nach dem Ausruf ein Komma steht.",
      rows: [
        "Ach ( ) das ist ja schön.",
        "Hm ( ) das weiß ich nicht.",
        "Leider ( ) bin ich krank."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Ach, Hm, leider: Komma nach Empfindungs- und Einschränkungswörtern.",
      rule: "<div class=rbox>Nach Empfindungswörtern (ach, hm, leider, übrigens) und Antwortpartikeln (ja, nein) steht ein Komma.</div>"
    },
    {
      sub: "Relativsatz mit 'wo'",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Das ist die Stadt ( ) wo ich aufgewachsen bin.",
        "Das war die Zeit ( ) wo alles einfacher war."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0],
      model: "Beide brauchen ein Komma – Relativsätze mit 'wo' werden abgetrennt.",
      rule: "<div class=rbox>Relativsätze, auch mit 'wo', werden durch Komma abgetrennt.</div>"
    },
    {
      sub: "Nebensatz vor Hauptsatz",
      type: "cross",
      q: "Steht ein Komma zwischen NS und HS?",
      rows: [
        "Weil es regnete ( ) blieben wir zu Hause.",
        "Obwohl er müde war ( ) arbeitete er weiter.",
        "Wenn du willst ( ) können wir gehen."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "Alle: Vorangestellte NS werden durch Komma vom HS getrennt.",
      rule: "<div class=rbox>Wenn der Nebensatz vor dem Hauptsatz steht, trennt ein Komma beide voneinander.</div>"
    },
    {
      sub: "Verknüpfungsadverb: daher, deshalb",
      type: "cross",
      q: "Entscheide, ob nach 'daher'/'deshalb' ein Komma steht.",
      rows: [
        "Es regnete ( ) deshalb ( ) blieben wir.",
        "Er war krank ( ) daher ( ) kam er nicht."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 1, 0, 1],
      model: "Vor deshalb/daher ein Komma (Trennung der HS), nach deshalb/daher kein Komma.",
      rule: "<div class=rbox>Konjunktionaladverbien (deshalb, daher, trotzdem) werden mit Komma vom vorangehenden HS getrennt. Nach ihnen steht kein Komma.</div>"
    },
    {
      sub: "Infinitiv mit 'zu' (einfach)",
      type: "cross",
      q: "Entscheide, ob ein Komma nötig ist.",
      rows: [
        "Er versucht ( ) zu schlafen.",
        "Sie hofft ( ) bald gesund zu sein.",
        "Ich vergesse oft ( ) die Tür zu schließen."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [1, 0, 0],
      model: "versucht zu schlafen: einfache Infinitivgruppe ohne Signalwort → kein Komma zwingend. hofft → Komma empfohlen. vergesse → Komma empfohlen.",
      rule: "<div class=rbox>Einfache Infinitivgruppen nach 'versuchen', 'hoffen', 'vergessen' müssen nicht durch Komma abgetrennt werden, außer es besteht Missverständnissgefahr oder ein Signalwort ist vorhanden.</div>"
    },
    {
      sub: "Trickfrage: Gleiches Wort, verschiedene Funktion",
      type: "cross",
      q: "Entscheide: Braucht 'dass' hier ein Komma davor?",
      rows: [
        "Er glaubt ( ) dass alles gut wird.",
        "Das Buch ( ) das er kaufte ( ) ist interessant."
      ],
      cols: ["Komma", "kein Komma"],
      correct: [0, 0, 0],
      model: "dass (Konjunktion) → Komma. das (Relativpronomen) → Komma vor und hinter NS.",
      rule: "<div class=rbox>Vor 'dass' (Konjunktion) steht ein Komma. Bei 'das' als Relativpronomen wird der Relativsatz in Kommas eingeschlossen.</div>"
    }
  
  ]
},

// ── GROSS- UND KLEINSCHREIBUNG (überarbeitet: cross) ──
{
  id: "extra_gross_klein",
  title: "Groß- und Kleinschreibung",
  emoji: "🔠",
  color: "#dc2626",
  qs: [
    {
      sub: "nach 'alles'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Ich wünsche dir alles (gute / Gute).",
        "Alles (wichtige / Wichtige) steht im Buch."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "alles Gute, alles Wichtige → substantivierte Adjektive → groß.",
      rule: "<div class=rbox>Nach 'alles', 'etwas', 'nichts', 'viel' werden Adjektive wie Nomen gebraucht und großgeschrieben.</div>"
    },
    {
      sub: "nach 'beim'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Beim (laufen / Laufen) höre ich Musik."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "beim Laufen → substantivierter Infinitiv → groß.",
      rule: "<div class=rbox>Nach 'beim', 'zum', 'vom', 'im' (versteckte Artikel) wird das Verb nominalisiert und großgeschrieben.</div>"
    },
    {
      sub: "nach Artikel (das)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Das ständige (meckern / Meckern) nervt.",
        "Er liebt das (reisen / Reisen)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "das Meckern, das Reisen → substantivierte Verben → groß.",
      rule: "<div class=rbox>Nach einem Artikel (der, die, das) wird das Verb zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "nach 'etwas'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Hast du etwas (neues / Neues) gehört?"],
      cols: ["klein", "groß"],
      correct: [1],
      model: "etwas Neues → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Nach 'etwas' wird das Adjektiv zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "am + Superlativ",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Am (besten / Besten) gefällt mir das."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "am besten → feste Wendung, Superlativ → klein.",
      rule: "<div class=rbox>Verbindungen mit 'am' + Superlativ (am besten, am schönsten) werden kleingeschrieben.</div>"
    },
    {
      sub: "Tageszeit nach Zeitadverb",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Wir treffen uns morgen (abend / Abend).",
        "Heute (morgen / Morgen) war es kalt."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "morgen Abend, heute Morgen → Tageszeiten als Nomen → groß.",
      rule: "<div class=rbox>Nach Zeitadverbien (morgen, heute, gestern) werden Tageszeiten als Nomen großgeschrieben.</div>"
    },
    {
      sub: "nach 'nichts'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Ich kenne nichts (schöneres / Schöneres)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "nichts Schöneres → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Nach 'nichts' wird das Adjektiv zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "nach 'zum'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Das ist zum (lachen / Lachen)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "zum Lachen → substantivierter Infinitiv → groß.",
      rule: "<div class=rbox>Nach 'zum' wird das Verb nominalisiert und großgeschrieben.</div>"
    },
    {
      sub: "nach 'viel'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Viel (wichtiges / Wichtiges) gab es nicht."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "viel Wichtiges → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Nach 'viel' wird das Adjektiv zum Nomen und großgeschrieben.</div>"
    },
    {
      sub: "Sprache als Nomen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Sie lernt gerade (deutsch / Deutsch)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "Deutsch (Sprache) → Nomen → groß.",
      rule: "<div class=rbox>Sprachen als Schulfächer oder Bezeichnungen werden großgeschrieben.</div>"
    },
    {
      sub: "Nationalität als Person",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Er ist ein (deutscher / Deutscher)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "ein Deutscher → substantiviertes Adjektiv für Person → groß.",
      rule: "<div class=rbox>Nationalitätenbezeichnungen für Personen (ein Deutscher, eine Französin) werden großgeschrieben.</div>"
    },
    {
      sub: "Adjektiv vor Nomen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["In (naher / Naher) Zukunft passiert es."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "in naher Zukunft → Adjektiv (attributiv) → klein.",
      rule: "<div class=rbox>Adjektive vor Nomen bleiben in der Regel klein, es sei denn, sie sind Teil eines Eigennamens.</div>"
    },
    {
      sub: "Nominalisierung mit 'das'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Das (einzige / Einzige), was zählt."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "das Einzige → substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Wenn ein Adjektiv mit einem Artikel als Nomen gebraucht wird (das Einzige = das einzige Ding), schreibt man es groß.</div>"
    },
    {
      sub: "Verb als Tätigkeit (gehen + Verb)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Wir gehen heute (schwimmen / Schwimmen)."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "schwimmen gehen → Verb bleibt Verb → klein.",
      rule: "<div class=rbox>In Verbindungen mit 'gehen' + Verb (z.B. schwimmen gehen, einkaufen gehen) wird das Verb kleingeschrieben.</div>"
    },
    {
      sub: "Nomen (immer groß)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Er hat kein (interesse / Interesse)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "Interesse → Nomen → groß.",
      rule: "<div class=rbox>Substantive werden immer großgeschrieben.</div>"
    },
    {
      sub: "Zustandswort 'schade'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Es ist (schade / Schade)."],
      cols: ["klein", "groß"],
      correct: [0],
      model: "Es ist schade. → Adjektiv → klein.",
      rule: "<div class=rbox>'schade' ist ein Adjektiv und wird kleingeschrieben.</div>"
    },
    {
      sub: "nach Präposition (im)",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: ["Wir sind im (recht / Recht)."],
      cols: ["klein", "groß"],
      correct: [1],
      model: "im Recht → Nomen (Recht) → groß.",
      rule: "<div class=rbox>Nach Präpositionen + Artikel (im, am, zum) wird das folgende Wort als Nomen großgeschrieben, wenn es sich um ein substantiviertes Wort handelt.</div>"
    },

    {
      sub: "nach 'trotz'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Trotz (allem / Allem) blieb er optimistisch.",
        "Trotz des (schlechten / Schlechten) Wetters gingen wir raus."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0],
      model: "trotz allem → 'allem' = substantiviertes Pronomen → groß. trotz des schlechten Wetters → 'schlechten' = Adjektiv vor Nomen → klein.",
      rule: "<div class=rbox>Trotz allem: 'allem' ist ein substantiviertes Indefinitpronomen → groß. 'schlechten' vor Nomen ist attributives Adjektiv → klein.</div>"
    },
    {
      sub: "Nominalisierung mit Präposition 'im'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Im (Großen / großen) und Ganzen hat es geklappt.",
        "Im (Allgemeinen / allgemeinen) bin ich zufrieden."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "im Großen und Ganzen, im Allgemeinen → feste Wendungen mit nominalisierten Adjektiven → groß.",
      rule: "<div class=rbox>Im Großen und Ganzen, im Allgemeinen, im Wesentlichen: feste Wendungen → nominalisierte Adjektive → groß.</div>"
    },
    {
      sub: "Tageszeiten als feste Wendung",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Sie kommt des (öfteren / Öfteren) vorbei.",
        "Er übernimmt das des (häufigeren / Häufigeren)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "des Öfteren, des Häufigeren → feste Wendung, substantiviertes Adjektiv → groß.",
      rule: "<div class=rbox>Des Öfteren, des Weiteren, des Häufigeren: Genitivkonstruktionen mit substantivierten Adjektiven → groß.</div>"
    },
    {
      sub: "Nationalität als Adjektiv",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Sie spricht (deutsch / Deutsch) mit Akzent.",
        "Das ist ein (deutsches / Deutsches) Produkt."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0],
      model: "spricht deutsch → Adverb → klein. deutsches Produkt → Adjektiv vor Nomen → klein.",
      rule: "<div class=rbox>'deutsch' als Adverb (wie spricht sie?) → klein. Als Adjektiv vor Nomen → klein. Als Nomen (die Sprache: Deutsch) → groß.</div>"
    },
    {
      sub: "nach 'aufs'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Er hat sich aufs (schönste / Schönste) gefreut.",
        "Sie ist aufs (höchste / Höchste) erschrocken."
      ],
      cols: ["klein", "groß"],
      correct: [0, 0],
      model: "aufs schönste, aufs höchste → idiomatische Wendung → klein.",
      rule: "<div class=rbox>Feste Wendungen mit 'aufs + Superlativ' (aufs schönste, aufs beste, aufs höchste) werden kleingeschrieben.</div>"
    },
    {
      sub: "Farben als Nomen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Sie mag (blau / Blau) sehr gerne.",
        "Das Kleid ist (blau / Blau).",
        "Ein (blaues / Blaues) Kleid."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0, 0],
      model: "mag Blau → Farbe als Nomen → groß. ist blau → Prädikatsadjektiv → klein. blaues Kleid → Adjektiv → klein.",
      rule: "<div class=rbox>Farben als Nomen (sie mag Blau, ein Blau mischen) → groß. Als Adjektiv (prädikativ oder attributiv) → klein.</div>"
    },
    {
      sub: "Infinitiv nach Präposition",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Durch (üben / Üben) wird man besser.",
        "Beim (lesen / Lesen) schlief er ein.",
        "Ohne (klagen / Klagen) akzeptierte er es."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1, 1],
      model: "durch Üben, beim Lesen, ohne Klagen → nominalisierte Infinitive → groß.",
      rule: "<div class=rbox>Nach Präpositionen (durch, beim, ohne) werden nominalisierte Infinitive großgeschrieben.</div>"
    },
    {
      sub: "Eigenname + Adjektiv",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Das (schwarze / Schwarze) Meer.",
        "Die (chinesische / Chinesische) Mauer.",
        "Das (rote / Rote) Kreuz."
      ],
      cols: ["klein", "groß"],
      correct: [0, 0, 1],
      model: "das Schwarze Meer, die Chinesische Mauer → Eigennamen → groß. das Rote Kreuz → Eigenname → groß.",
      rule: "<div class=rbox>Adjektive in geografischen oder institutionellen Eigennamen werden großgeschrieben (das Schwarze Meer, die Chinesische Mauer, das Rote Kreuz).</div>"
    },
    {
      sub: "nach 'ab sofort'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Ab (sofort / Sofort) gilt die neue Regel.",
        "Von (jetzt / Jetzt) an mache ich es besser."
      ],
      cols: ["klein", "groß"],
      correct: [0, 0],
      model: "ab sofort, von jetzt an → Adverbien → klein.",
      rule: "<div class=rbox>Adverbien wie 'sofort', 'jetzt', 'nun' bleiben in festen Wendungen mit Präpositionen klein.</div>"
    },
    {
      sub: "Ordinalzahlen als Nomen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Sie kam als (erste / Erste) an.",
        "Das war sein (zweites / Zweites) Mal."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0],
      model: "als Erste → kein Nomen dahinter → Nominalisierung → groß. zweites Mal → Adjektiv vor Nomen → klein.",
      rule: "<div class=rbox>Ordinalzahlen ohne Nomen danach werden substantiviert und großgeschrieben (die Erste, als Erstes). Mit Nomen bleiben sie Adjektiv und werden klein geschrieben.</div>"
    },
    {
      sub: "nach 'im Hinblick auf'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Im (wesentlichen / Wesentlichen) stimme ich zu.",
        "Im (großen / Großen) Ganzen war es gut."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "im Wesentlichen, im Großen Ganzen → feste Wendungen → groß.",
      rule: "<div class=rbox>Im Wesentlichen, im Großen und Ganzen, im Allgemeinen: feste Redewendungen mit substantivierten Adjektiven → groß.</div>"
    },
    {
      sub: "als Adjektiv vs. als Nomen",
      type: "cross",
      q: "Entscheide: Ist das Wort hier Nomen oder Adjektiv?",
      rows: [
        "Das (böse / Böse) in der Welt.",
        "Das ist ein (böser / Böser) Mensch.",
        "Er kennt das (gute / Gute) und das (böse / Böse)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0, 1, 1],
      model: "das Böse (Nomen) → groß. ein böser Mensch (Adjektiv) → klein. das Gute / das Böse (Nomen) → groß.",
      rule: "<div class=rbox>Nach 'das' als Nomen = groß (das Böse, das Gute). Vor einem anderen Nomen = klein (ein böser Mensch).</div>"
    },
    {
      sub: "Zeitangaben",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Das Treffen war (letzten / Letzten) (montag / Montag).",
        "Sie trifft sich jeden (freitag / Freitag).",
        "Wir kommen (nächsten / Nächsten) (dienstag / Dienstag)."
      ],
      cols: ["klein", "groß"],
      correct: [0, 1, 0, 1, 0, 1],
      model: "letzten (Adjektiv) → klein; Montag (Nomen) → groß. jeden (Adjektiv) → klein; Freitag (Nomen) → groß.",
      rule: "<div class=rbox>Wochentage sind Nomen und werden immer großgeschrieben. 'letzten', 'nächsten', 'jeden' sind Adjektive → klein.</div>"
    },
    {
      sub: "Verb als Befehl (Imperativ)",
      type: "cross",
      q: "Entscheide: groß oder klein? (Satzanfang ausgenommen)",
      rows: [
        "Das war eine sehr (gute / Gute) Idee.",
        "Sie hat eine (neue / Neue) bekommen. (Idee ist weggelassen)"
      ],
      cols: ["klein", "groß"],
      correct: [0, 1],
      model: "gute Idee → Adjektiv vor Nomen → klein. eine Neue (kein Nomen danach) → substantiviert → groß.",
      rule: "<div class=rbox>Adjektiv vor Nomen → klein. Adjektiv ohne nachfolgendes Nomen (substantiviert) → groß.</div>"
    },
    {
      sub: "nach 'mit'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Er hat es mit (absicht / Absicht) gemacht.",
        "Sie spricht mit (begeisterung / Begeisterung).",
        "Wir arbeiten mit (viel / Viel) (engagement / Engagement)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1, 0, 1],
      model: "mit Absicht, mit Begeisterung, mit viel Engagement → Nomen → groß. 'viel' bleibt als Adjektiv klein.",
      rule: "<div class=rbox>Nach Präpositionen (mit, bei, für, ohne) stehen Nomen → groß. 'viel', 'wenig' vor Nomen = Adjektiv → klein.</div>"
    },
    {
      sub: "Schulfächer",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Sie lernt (mathematik / Mathematik).",
        "Das (biologische / Biologische) Experiment klappte.",
        "Er hat eine gute (note / Note) in (deutsch / Deutsch)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0, 1, 1],
      model: "Mathematik, Deutsch → Schulfächer = Nomen → groß. biologische → Adjektiv → klein. Note → Nomen → groß.",
      rule: "<div class=rbox>Schulfächer als Bezeichnungen (Mathematik, Deutsch, Biologie) → Nomen → groß.</div>"
    },
    {
      sub: "nach 'ums'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Es geht ums (überleben / Überleben).",
        "Ums (verrecken / Verrecken) würde ich das nicht tun."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1],
      model: "ums Überleben, ums Verrecken → nominalisierte Infinitive → groß.",
      rule: "<div class=rbox>Nach 'ums' (= um + das) wird der Infinitiv nominalisiert und großgeschrieben: ums Überleben, ums Verrecken.</div>"
    },
    {
      sub: "Titel und Anreden",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Guten Tag, (herr / Herr) Müller!",
        "Liebe (frau / Frau) Lehrerin,",
        "Sehr geehrte (damen / Damen) und (herren / Herren)!"
      ],
      cols: ["klein", "groß"],
      correct: [1, 1, 1, 1],
      model: "Herr, Frau, Damen, Herren → Anreden = Nomen → groß.",
      rule: "<div class=rbox>Anredeformen (Herr, Frau, Damen, Herren) sind Nomen und werden großgeschrieben.</div>"
    },
    {
      sub: "Pronomen in Briefen",
      type: "cross",
      q: "Entscheide: groß oder klein? (Höflichkeitspronomen im Brief)",
      rows: [
        "Ich freue mich, (sie / Sie) kennenzulernen.",
        "Bitte schicken (sie / Sie) mir Ihre Antwort.",
        "Ich danke (ihnen / Ihnen) herzlich."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1, 1],
      model: "Höflichkeitsform 'Sie' / 'Ihnen' → immer groß.",
      rule: "<div class=rbox>Das Höflichkeitspronomen 'Sie' und 'Ihnen' (formelle Anrede) wird immer großgeschrieben.</div>"
    },
    {
      sub: "Feststehende Wendungen",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Das ist (recht / Recht) so.",
        "Er hat (recht / Recht) behalten.",
        "Das gibt mir (recht / Recht)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1, 1],
      model: "Recht behalten, Recht haben, recht sein → Nomen → groß.",
      rule: "<div class=rbox>Recht haben, Recht behalten, Recht geben → 'Recht' ist ein Nomen → groß. Aber: Es ist mir recht → klein (Adjektiv).</div>"
    },
    {
      sub: "Adjektiv/Nomen-Entscheidung",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Das war eine (tolle / Tolle) Leistung.",
        "Das ist etwas (tolles / Tolles).",
        "Er zeigt eine (solche / Solche) Leistung."
      ],
      cols: ["klein", "groß"],
      correct: [0, 1, 0],
      model: "tolle Leistung → Adjektiv → klein. etwas Tolles → substantiviert → groß. solche Leistung → Adjektiv → klein.",
      rule: "<div class=rbox>Adjektiv vor Nomen → klein. Nach 'etwas', 'nichts', 'viel' → substantiviert → groß.</div>"
    },
    {
      sub: "nach 'auf'",
      type: "cross",
      q: "Entscheide: groß oder klein?",
      rows: [
        "Er achtet aufs (äußere / Äußere).",
        "Auf (wiedersehen / Wiedersehen)!",
        "Er besteht auf (seinem / Seinem) (recht / Recht)."
      ],
      cols: ["klein", "groß"],
      correct: [1, 1, 0, 1],
      model: "aufs Äußere → Nomen → groß. auf Wiedersehen → Nomen → groß. seinem → klein, Recht → Nomen → groß.",
      rule: "<div class=rbox>Nach Präpositionen stehen Nomen → groß. 'seinem' ist Pronomen → klein.</div>"
    },
    {
      sub: "Satzanfang nach Doppelpunkt",
      type: "cross",
      q: "Entscheide: groß oder klein nach dem Doppelpunkt?",
      rows: [
        "Er sagte: (ich / Ich) komme morgen.",
        "Das Ergebnis: (sechs / Sechs) zu drei."
      ],
      cols: ["klein", "groß"],
      correct: [1, 0],
      model: "Direktes Zitat nach Doppelpunkt → groß. Aufzählung/Erklärung nach Doppelpunkt → klein.",
      rule: "<div class=rbox>Nach einem Doppelpunkt wird großgeschrieben, wenn ein vollständiger Satz folgt (besonders bei direkter Rede). Bei Aufzählungen oder Ergänzungen → klein.</div>"
    }
  
  ]
},

// ── INDIREKTE REDE (KONJUNKTIV) – bleibt MC (keine Änderung) ──
{
  id: "extra_ind_rede",
  title: "Indirekte Rede (Konjunktiv)",
  emoji: "💬",
  color: "#7c3aed",
  qs: [
    { sub: "Konjunktiv I", type: "mc", q: "Er sagt: \u201eIch bin müde.\" → Er sagt, er ___ müde.", o: ["ist", "sei", "wäre"], c: 1, model: "B – sei (Konjunktiv I)", rule: "<div class=rbox>Indirekte Rede: Konjunktiv I. sein → sei.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "Sie fragt: \u201eKommst du morgen?\" → Sie fragt, ob ich ___.", o: ["komme", "kam", "kommest"], c: 0, model: "A – komme (Konjunktiv I)", rule: "<div class=rbox>kommen → Konjunktiv I: komme (1. Pers. Sg.).</div>" },
    { sub: "Konjunktiv II (Ersatzform)", type: "mc", q: "\u201eWir haben kein Geld.\" → Sie behaupten, sie ___ kein Geld.", o: ["haben", "hätten", "habet"], c: 1, model: "B – hätten (Konjunktiv II als Ersatz)", rule: "<div class=rbox>Konjunktiv I 'haben' = Indikativ → Ausweichen auf Konjunktiv II: hätten.</div>" },
    { sub: "Konjunktiv II", type: "mc", q: "\u201eIhr müsst mehr üben.\" → Er meint, wir ___ mehr üben.", o: ["müsstet", "müssten", "müsset"], c: 1, model: "B – müssten (Konjunktiv II)", rule: "<div class=rbox>müssen → Konjunktiv I: müsse → identisch mit Indikativ bei wir → Konjunktiv II: müssten.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eWo ist mein Schlüssel?\" → Er fragt, wo sein Schlüssel ___.", o: ["ist", "sei", "wäre"], c: 1, model: "B – sei", rule: "<div class=rbox>sein → Konjunktiv I: sei.</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "\u201eIch habe es gesehen.\" → Sie sagt, sie ___ es gesehen.", o: ["habe", "hätte", "hat"], c: 0, model: "A – habe … gesehen (Konjunktiv I Perfekt)", rule: "<div class=rbox>Perfekt in indirekter Rede: habe + Partizip II → sie habe es gesehen.</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "\u201eDer Dieb rannte weg.\" → Er sagt, der Dieb ___ weggerannt.", o: ["sei", "wäre", "ist"], c: 0, model: "A – sei weggerannt (Konjunktiv I)", rule: "<div class=rbox>Bewegungsverben → Perfekt mit sein: sei weggerannt.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "Papa sagt: \u201eIch koche heute.\" → Er sagt, er ___ heute.", o: ["koche", "kocht", "kochte"], c: 0, model: "A – koche (Konjunktiv I)", rule: "<div class=rbox>kochen → Konjunktiv I: koche.</div>" },
    { sub: "Aufforderung (Konjunktiv II)", type: "mc", q: "\u201eBleibt hier!\", rief er. → Er forderte uns auf, dass wir hier ___.", o: ["bleiben", "blieben", "bleibet"], c: 1, model: "B – blieben (Konjunktiv II)", rule: "<div class=rbox>Aufforderung in indirekter Rede → Konjunktiv II: blieben.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch werde gewinnen.\" → Sie sagt, sie ___ gewinnen.", o: ["werde", "würde", "wird"], c: 0, model: "A – werde (Konjunktiv I)", rule: "<div class=rbox>werden → Konjunktiv I: werde.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eDu kannst das.\" → Er meint, ich ___ das.", o: ["könne", "kann", "könnte"], c: 0, model: "A – könne (Konjunktiv I)", rule: "<div class=rbox>können → Konjunktiv I: könne.</div>" },
    { sub: "Konjunktiv II (Ersatz)", type: "mc", q: "\u201eWir gehen.\" → Sie sagen, sie ___.", o: ["gehen", "gingen", "gehet"], c: 1, model: "B – gingen (Konjunktiv II als Ersatz)", rule: "<div class=rbox>gehen → Konj. I: gehen = Indikativ → Ersatz: gingen (Konjunktiv II).</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "\u201eWarst du da?\" → Er fragt, ob ich da ___.", o: ["war", "gewesen sei", "gewesen wäre"], c: 1, model: "B – gewesen sei (Konjunktiv I Perfekt)", rule: "<div class=rbox>sein, Perfekt in indirekter Rede: sei gewesen.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch mag Pizza.\" → Sie sagt, sie ___ Pizza.", o: ["mag", "möge", "möchte"], c: 1, model: "B – möge (Konjunktiv I)", rule: "<div class=rbox>mögen → Konjunktiv I: möge.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eDie Arbeit muss fertig sein.\" → Er sagt, die Arbeit ___ fertig sein.", o: ["müsse", "muss", "müsste"], c: 0, model: "A – müsse (Konjunktiv I)", rule: "<div class=rbox>müssen → Konjunktiv I: müsse.</div>" },
    { sub: "Konjunktiv II (Ersatz)", type: "mc", q: "\u201eWir wissen es nicht.\" → Er sagt, sie ___ es nicht.", o: ["wissen", "wüssten", "wisset"], c: 1, model: "B – wüssten (Konjunktiv II)", rule: "<div class=rbox>wissen → Konj. I: wissen = Indikativ → Ersatz Konjunktiv II: wüssten.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eHast du Zeit?\" → Sie fragt, ob ich Zeit ___.", o: ["habe", "hätte", "hast"], c: 0, model: "A – habe (Konjunktiv I)", rule: "<div class=rbox>haben → Konjunktiv I: habe.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch bin krank\", flüstert er. → Er flüstert, er ___ krank.", o: ["sei", "ist", "wäre"], c: 0, model: "A – sei (Konjunktiv I)", rule: "<div class=rbox>sein → Konjunktiv I: sei.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eEs regnet.\" → Sie meint, es ___.", o: ["regne", "regnet", "regnete"], c: 0, model: "A – regne (Konjunktiv I)", rule: "<div class=rbox>regnen → Konjunktiv I: regne.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch komme später.\" → Er sagt, er ___ später.", o: ["komme", "kommt", "käme"], c: 0, model: "A – komme (Konjunktiv I)", rule: "<div class=rbox>kommen → Konjunktiv I: komme.</div>" },
{ sub: "Konjunktiv I", type: "mc", q: "\u201eWir arbeiten hart.\" → Er sagt, sie ___ hart.", o: ["arbeiten", "arbeiteten", "arbeiten würden"], c: 0, model: "A – arbeiten (Konjunktiv I = Indikativ bei wir → Sonderfall, aber hier korrekt)", rule: "<div class=rbox>arbeiten (wir): Konjunktiv I = Indikativ → in manchen Fällen trotzdem verwendbar im Kontext.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch bin bereit.\" → Sie erklärt, sie ___ bereit.", o: ["ist", "sei", "wäre"], c: 1, model: "B – sei (Konjunktiv I)", rule: "<div class=rbox>sein → Konjunktiv I: sei.</div>" },
    { sub: "Konjunktiv II als Ersatz", type: "mc", q: "\u201eWir brauchen Hilfe.\" → Sie sagen, sie ___ Hilfe.", o: ["brauchen", "brauchten", "brauchen würden"], c: 1, model: "B – brauchten (Konjunktiv II, da Konjunktiv I 'brauchen' = Indikativ)", rule: "<div class=rbox>brauchen (wir): Konjunktiv I = Indikativ → Ausweichen auf Konjunktiv II: brauchten.</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "\u201eIch habe das Geld gefunden.\" → Er sagt, er ___ das Geld gefunden.", o: ["habe", "hätte", "hat"], c: 0, model: "A – habe … gefunden (Perfekt Konjunktiv I)", rule: "<div class=rbox>Perfekt in indirekter Rede: habe + Partizip II (Konjunktiv I).</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eEs gibt keine Probleme.\" → Er behauptet, es ___ keine Probleme.", o: ["gibt", "gebe", "gäbe"], c: 1, model: "B – gebe (Konjunktiv I)", rule: "<div class=rbox>geben → Konjunktiv I: gebe.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eDu solltest mehr schlafen.\" → Sie rät, ich ___ mehr schlafen.", o: ["solle", "sollte", "soll"], c: 0, model: "A – solle (Konjunktiv I von sollen)", rule: "<div class=rbox>sollen → Konjunktiv I: solle.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eWir dürfen das nicht.\" → Er erklärt, sie ___ das nicht.", o: ["dürfen", "dürften", "dürfen würden"], c: 1, model: "B – dürften (Konjunktiv II als Ersatz: Konj. I = Indikativ bei 'wir')", rule: "<div class=rbox>dürfen (wir): Konjunktiv I = Indikativ → Konjunktiv II: dürften.</div>" },
    { sub: "Konjunktiv I Perfekt mit sein", type: "mc", q: "\u201eEr ist abgereist.\" → Sie meldet, er ___ abgereist.", o: ["sei", "wäre", "ist"], c: 0, model: "A – sei abgereist (Konjunktiv I mit sein)", rule: "<div class=rbox>Bewegungsverb: Perfekt mit sein → sei abgereist (Konjunktiv I).</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch kann das erklären.\" → Sie sagt, sie ___ das erklären.", o: ["kann", "könne", "könnte"], c: 1, model: "B – könne (Konjunktiv I)", rule: "<div class=rbox>können → Konjunktiv I: könne.</div>" },
    { sub: "Pronomenanpassung", type: "mc", q: "\u201eIch habe dich vermisst.\" → Er sagt, er ___ sie vermisst.", o: ["habe … vermisst\", Pronomen angepasst", "hätte … vermisst", "hat … vermisst"], c: 0, model: "A – habe … vermisst (Pronomen ich→er, dich→sie angepasst)", rule: "<div class=rbox>In der indirekten Rede müssen Personalpronomen angepasst werden: ich → er/sie, dich → ihn/sie.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eEs wird bald besser.\" → Sie hofft, es ___ bald besser.", o: ["werde", "würde", "wird"], c: 0, model: "A – werde (Konjunktiv I von werden)", rule: "<div class=rbox>werden → Konjunktiv I: werde.</div>" },
    { sub: "Konjunktiv II Ersatz", type: "mc", q: "\u201eSie laufen täglich.\" → Er sagt, sie ___ täglich.", o: ["laufen", "liefen", "laufen würden"], c: 1, model: "B – liefen (Konjunktiv II als Ersatz: Konj. I 'laufen' = Indikativ bei 'sie')", rule: "<div class=rbox>laufen (sie/Plural): Konjunktiv I = Indikativ → Konjunktiv II: liefen.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch mache keine Fehler.\" → Er sagt, er ___ keine Fehler.", o: ["macht", "mache", "machte"], c: 1, model: "B – mache (Konjunktiv I)", rule: "<div class=rbox>machen → Konjunktiv I: mache.</div>" },
    { sub: "Konjunktiv I – Frage", type: "mc", q: "\u201eBist du zufrieden?\" → Sie fragt, ob er zufrieden ___.", o: ["sei", "ist", "wäre"], c: 0, model: "A – sei (Konjunktiv I)", rule: "<div class=rbox>Indirekte Frage mit 'ob': Konjunktiv I. sein → sei.</div>" },
    { sub: "Konjunktiv I – Zeitangabe", type: "mc", q: "\u201eIch komme morgen.\" → Er sagt, er ___ am nächsten Tag.", o: ["kommt", "komme", "käme"], c: 1, model: "B – komme (Konjunktiv I, Zeitangabe angepasst)", rule: "<div class=rbox>In der indirekten Rede werden auch Zeitangaben angepasst: 'morgen' → 'am nächsten Tag'.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch verlasse die Stadt.\" → Sie sagt, sie ___ die Stadt.", o: ["verlässt", "verlasse", "verließe"], c: 1, model: "B – verlasse (Konjunktiv I)", rule: "<div class=rbox>verlassen → Konjunktiv I: verlasse.</div>" },
    { sub: "Konjunktiv II Ersatz", type: "mc", q: "\u201eWir wollen euch helfen.\" → Sie sagen, sie ___ ihnen helfen.", o: ["wollen", "wollten", "würden wollen"], c: 1, model: "B – wollten (Konjunktiv II als Ersatz: Konj. I 'wollen' = Indikativ bei 'wir/sie')", rule: "<div class=rbox>wollen (wir/sie): Konjunktiv I = Indikativ → Konjunktiv II: wollten.</div>" },
    { sub: "Konjunktiv I Perfekt", type: "mc", q: "\u201eSie hat die Aufgabe gelöst.\" → Er berichtet, sie ___ die Aufgabe gelöst.", o: ["habe", "hätte", "hat"], c: 0, model: "A – habe … gelöst (Konjunktiv I Perfekt)", rule: "<div class=rbox>Perfekt in indirekter Rede: habe + Partizip II.</div>" },
    { sub: "Konjunktiv I", type: "mc", q: "\u201eIch stehe früh auf.\" → Er sagt, er ___ früh auf.", o: ["steht", "stehe", "stünde"], c: 1, model: "B – stehe auf (Konjunktiv I)", rule: "<div class=rbox>aufstehen → Konjunktiv I: stehe auf.</div>" },
    { sub: "Konjunktiv I vs. II", type: "mc", q: "Welche Form ist Konjunktiv I?\n'gehen' (3. Pers. Sg.)", o: ["geht", "gehe", "ginge"], c: 1, model: "B – gehe (Konjunktiv I, 3. Pers. Sg.)", rule: "<div class=rbox>gehen → Konjunktiv I: er gehe. Konjunktiv II: er ginge.</div>" }
  
  ]
},

// ── AKTIV UND PASSIV – bleibt MC ──
{
  id: "extra_passiv",
  title: "Aktiv und Passiv",
  emoji: "🔄",
  color: "#b45309",
  qs: [
    { sub: "Passivbildung", type: "mc", q: "Aktiv: \u201eDer Koch bereitet das Essen zu.\" → Passiv?", o: ["Das Essen wird zubereitet.", "Der Koch wird zubereitet.", "Das Essen zubereitet der Koch."], c: 0, model: "A – Das Essen wird zubereitet.", rule: "<div class=rbox>Passiv: Objekt → Subjekt + wird/werden + Partizip II.</div>" },
    { sub: "Handelnder im Passiv", type: "mc", q: "\u201eDie Straße wird gesperrt.\" → Wer handelt vermutlich?", o: ["Die Autos", "Die Polizei", "Die Fußgänger"], c: 1, model: "B – Die Polizei", rule: "<div class=rbox>Im Passiv tritt der Handelnde in den Hintergrund – aus dem Kontext erschließbar.</div>" },
    { sub: "Tempus im Passiv", type: "mc", q: "\u201eDer Dieb wurde gefasst.\" – Welches Tempus?", o: ["Präsens", "Präteritum", "Perfekt"], c: 1, model: "B – Präteritum (wurde gefasst)", rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>" },
    { sub: "Passiv mit Modalverb", type: "mc", q: "\u201eMan darf hier nicht rauchen.\" → Wandle in Passiv um.", o: ["Hier darf nicht geraucht werden.", "Hier wird nicht geraucht.", "Rauchen ist verboten."], c: 0, model: "A – Hier darf nicht geraucht werden.", rule: "<div class=rbox>Modalverb + Passiv: darf nicht + Infinitiv Passiv (geraucht werden).</div>" },
    { sub: "Perfekt Passiv", type: "mc", q: "\u201eWir haben den Test geschrieben.\" → Passiv?", o: ["Der Test wurde geschrieben.", "Der Test ist geschrieben worden.", "Der Test wird geschrieben werden."], c: 1, model: "B – Der Test ist geschrieben worden.", rule: "<div class=rbox>Perfekt Passiv: ist/sind + Partizip II + worden.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "\u201eDie Briefe werden morgen verschickt.\" – Wann passiert es?", o: ["Vergangenheit", "Gegenwart / Zukunft", "Schon erledigt"], c: 1, model: "B – Gegenwart/Zukunft", rule: "<div class=rbox>werden + Partizip II (Präsens/Futur) → Vorgang in Gegenwart/Zukunft.</div>" },
    { sub: "Agens im Passiv", type: "mc", q: "\u201eDer Baum wurde vom Sturm gefällt.\" – Wer ist der \u201eTäter\"?", o: ["Der Baum", "Der Sturm", "Der Wald"], c: 1, model: "B – Der Sturm (von + Dativ)", rule: "<div class=rbox>Das Agens (Handelnder) wird im Passiv mit von + Dativ angegeben.</div>" },
    { sub: "Passivbildung", type: "mc", q: "Aktiv: \u201eNiemand sah ihn.\" → Passiv?", o: ["Er wurde von niemandem gesehen.", "Er sah niemanden.", "Niemand wurde von ihm gesehen."], c: 0, model: "A – Er wurde von niemandem gesehen.", rule: "<div class=rbox>Akkusativobjekt wird Subjekt; Subjekt (niemand) wird zu von + Dativ.</div>" },
    { sub: "Vorgangs- vs. Zustandspassiv", type: "mc", q: "\u201eDer Kuchen wird gerade gebacken.\" → Welche Form?", o: ["Vorgangspassiv", "Zustandspassiv"], c: 0, model: "A – Vorgangspassiv (wird gebacken)", rule: "<div class=rbox>Vorgangspassiv: wird + Partizip II → Vorgang läuft ab.</div>" },
    { sub: "Vorgangs- vs. Zustandspassiv", type: "mc", q: "\u201eDie Tür ist geschlossen.\" → Welche Form?", o: ["Vorgangspassiv", "Zustandspassiv"], c: 1, model: "B – Zustandspassiv (ist geschlossen)", rule: "<div class=rbox>Zustandspassiv: ist + Partizip II → Ergebnis eines Vorgangs.</div>" },
    { sub: "Präsens Passiv", type: "mc", q: "\u201eEr repariert das Rad.\" → Passiv (Präsens)?", o: ["Das Rad wird repariert.", "Das Rad ist repariert.", "Das Rad wurde repariert."], c: 0, model: "A – Das Rad wird repariert.", rule: "<div class=rbox>Präsens Passiv: wird + Partizip II.</div>" },
    { sub: "Präteritum Passiv", type: "mc", q: "\u201eMan baute das Haus 1990.\" → Passiv?", o: ["Das Haus wird gebaut.", "Das Haus wurde gebaut.", "Das Haus ist gebaut worden."], c: 1, model: "B – Das Haus wurde (1990) gebaut.", rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>" },
    { sub: "Modalverb + Passiv", type: "mc", q: "\u201eDie Hausaufgaben müssen gemacht werden.\" – Was ist das?", o: ["Passiv mit Modalverb", "Aktiv mit Modalverb"], c: 0, model: "A – Passiv mit Modalverb", rule: "<div class=rbox>Modalverb + werden + Partizip II = Passiv mit Modalverb.</div>" },
    { sub: "Passivbildung", type: "mc", q: "\u201eEr liest das Buch.\" → Passiv?", o: ["Das Buch wird gelesen.", "Das Buch gelesen wird.", "Er wird gelesen."], c: 0, model: "A – Das Buch wird gelesen.", rule: "<div class=rbox>Das Akkusativobjekt wird Subjekt. wird + Partizip II.</div>" },
    { sub: "Futur Passiv", type: "mc", q: "\u201eWir werden das Spiel gewinnen.\" (Aktiv) → Passiv?", o: ["Das Spiel wird gewonnen werden.", "Das Spiel wird gewonnen.", "Das Spiel wurde gewonnen."], c: 0, model: "A – Das Spiel wird gewonnen werden.", rule: "<div class=rbox>Futur Passiv: wird + Partizip II + werden.</div>" },
    { sub: "Passivbildung", type: "mc", q: "\u201eDer Hund beißt den Postboten.\" → Passiv?", o: ["Der Postbote wird gebissen.", "Der Hund wird gebissen.", "Der Postbote beißt den Hund."], c: 0, model: "A – Der Postbote wird (vom Hund) gebissen.", rule: "<div class=rbox>Akkusativobjekt (Postbote) wird Subjekt. Subjekt (Hund) fällt weg oder wird mit von angegeben.</div>" },
    { sub: "Dativpassiv", type: "mc", q: "\u201eMan hat mir geholfen.\" → Passiv?", o: ["Mir ist geholfen worden.", "Ich wurde geholfen.", "Mir wird geholfen."], c: 0, model: "A – Mir ist geholfen worden.", rule: "<div class=rbox>Bei Dativobjekten: Dativobjekt bleibt im Dativ; Passiv mit werden: Mir ist geholfen worden.</div>" },
    { sub: "Tempus", type: "mc", q: "\u201eDer Laden wurde eröffnet.\" – Wann?", o: ["Jetzt", "Damals", "In der Zukunft"], c: 1, model: "B – Damals (Präteritum)", rule: "<div class=rbox>wurde + Partizip II = Präteritum Passiv → abgeschlossene Handlung in der Vergangenheit.</div>" },
    { sub: "Präsens Passiv", type: "mc", q: "\u201eSie putzt die Fenster.\" → Passiv (Präsens)?", o: ["Die Fenster werden geputzt.", "Die Fenster sind geputzt.", "Die Fenster wurden geputzt."], c: 0, model: "A – Die Fenster werden geputzt.", rule: "<div class=rbox>Präsens Passiv: werden + Partizip II.</div>" },
    { sub: "Agens erschließen", type: "mc", q: "\u201eDas Gesetz wird verabschiedet.\" → Wer handelt?", o: ["Das Volk", "Das Parlament", "Die Richter"], c: 1, model: "B – Das Parlament", rule: "<div class=rbox>Gesetze werden im Parlament verabschiedet – aus dem Kontext erschließbar.</div>" },
{ sub: "Passivbildung", type: "mc", q: "Aktiv: \u201eDie Schüler lösen die Aufgaben.\" → Passiv?", o: ["Die Aufgaben werden gelöst.", "Die Schüler werden gelöst.", "Die Aufgaben lösen sich."], c: 0, model: "A – Die Aufgaben werden gelöst.", rule: "<div class=rbox>Akkusativobjekt → Subjekt. werden + Partizip II.</div>" },
    { sub: "Passiv erkennen", type: "mc", q: "\u201eDas Abendessen ist gekocht.\" – Welche Passivform?", o: ["Vorgangspassiv", "Zustandspassiv"], c: 1, model: "B – Zustandspassiv (ist + Partizip II = Ergebnis)", rule: "<div class=rbox>Zustandspassiv: ist/sind + Partizip II → beschreibt einen Zustand nach abgeschlossenem Vorgang.</div>" },
    { sub: "Passiv mit Präteritum", type: "mc", q: "Aktiv: \u201eMan renovierte das Haus.\" → Passiv?", o: ["Das Haus wird renoviert.", "Das Haus wurde renoviert.", "Das Haus ist renoviert worden."], c: 1, model: "B – Das Haus wurde renoviert.", rule: "<div class=rbox>Präteritum Aktiv → Präteritum Passiv: wurde + Partizip II.</div>" },
    { sub: "Passiv mit Modalverb", type: "mc", q: "\u201eMan soll die Umwelt schützen.\" → Passiv?", o: ["Die Umwelt soll geschützt werden.", "Die Umwelt wird geschützt.", "Die Umwelt muss schützen."], c: 0, model: "A – Die Umwelt soll geschützt werden.", rule: "<div class=rbox>Passiv mit Modalverb: soll + Partizip II + werden.</div>" },
    { sub: "Perfekt Passiv", type: "mc", q: "Aktiv: \u201eMan hat die Brücke gebaut.\" → Passiv?", o: ["Die Brücke wurde gebaut.", "Die Brücke ist gebaut worden.", "Die Brücke wird gebaut."], c: 1, model: "B – Die Brücke ist gebaut worden.", rule: "<div class=rbox>Perfekt Passiv: ist + Partizip II + worden.</div>" },
    { sub: "Agens bestimmen", type: "mc", q: "\u201eDas Formular wurde von der Sekretärin ausgefüllt.\" – Wer handelt?", o: ["Das Formular", "Die Sekretärin", "Die Behörde"], c: 1, model: "B – die Sekretärin (von + Dativ = Agens)", rule: "<div class=rbox>Im Passiv gibt 'von + Dativ' den Handelnden (Agens) an.</div>" },
    { sub: "Aktivsatz bilden", type: "mc", q: "\u201eDer Brief wird vom Boten überbracht.\" → Aktiv?", o: ["Der Bote überbringt den Brief.", "Der Brief überbringt den Boten.", "Den Brief überbringt man."], c: 0, model: "A – Der Bote überbringt den Brief.", rule: "<div class=rbox>Passiv → Aktiv: Agens (Bote) wird Subjekt, Subjekt (Brief) wird Akkusativobjekt.</div>" },
    { sub: "Passivbildung mit Dativobjekt", type: "mc", q: "Aktiv: \u201eMan gab ihm eine Chance.\" → Passiv?", o: ["Ihm wurde eine Chance gegeben.", "Er wurde eine Chance gegeben.", "Eine Chance ist ihm gegeben worden."], c: 0, model: "A – Ihm wurde eine Chance gegeben.", rule: "<div class=rbox>Bei Dativobjekten bleibt das Dativobjekt im Dativ: Ihm wurde … gegeben.</div>" },
    { sub: "Futur Passiv", type: "mc", q: "Aktiv: \u201eMan wird das Problem lösen.\" → Passiv?", o: ["Das Problem wird gelöst.", "Das Problem wird gelöst werden.", "Das Problem wird worden sein."], c: 1, model: "B – Das Problem wird gelöst werden.", rule: "<div class=rbox>Futur Passiv: wird + Partizip II + werden.</div>" },
    { sub: "Vorgangspassiv bilden", type: "mc", q: "Aktiv: \u201eDer Arzt untersucht den Patienten.\" → Vorgangspassiv?", o: ["Der Patient ist untersucht.", "Der Patient wird untersucht.", "Der Patient wird untersucht sein."], c: 1, model: "B – Der Patient wird untersucht.", rule: "<div class=rbox>Vorgangspassiv: wird + Partizip II → laufender Vorgang.</div>" },
    { sub: "Passiv ohne Agens", type: "mc", q: "Warum wird das Passiv oft ohne 'von'-Angabe gebraucht?", o: ["Der Handelnde ist unwichtig oder unbekannt.", "Es gibt kein Subjekt.", "Das Passiv braucht immer einen Handelnden."], c: 0, model: "A – Der Handelnde ist unwichtig oder unbekannt.", rule: "<div class=rbox>Im Passiv tritt der Handelnde in den Hintergrund – daher oft ohne Agens (von + Dativ).</div>" },
    { sub: "Passiv erkennen", type: "mc", q: "Welcher Satz ist ein Passivsatz?", o: ["Das Buch liegt auf dem Tisch.", "Das Buch wird gelesen.", "Das Buch ist interessant."], c: 1, model: "B – Das Buch wird gelesen. (werden + Partizip II)", rule: "<div class=rbox>Passiv = werden + Partizip II. Zustandsverben (liegen, sein) sind kein Passiv.</div>" },
    { sub: "Passiv mit 'lassen'", type: "mc", q: "\u201eEr lässt das Auto reparieren.\" – Was drückt dieser Satz aus?", o: ["Er repariert selbst.", "Er veranlasst, dass jemand anderes repariert.", "Das Auto wird repariert werden."], c: 1, model: "B – Er veranlasst die Reparatur (lassen + Infinitiv = kausatives Konstrukt)", rule: "<div class=rbox>'lassen + Infinitiv' drückt aus, dass man jemanden etwas tun lässt (kausativ) – ähnlich dem Passiv, aber aktiv formuliert.</div>" },
    { sub: "Präteritum Passiv bilden", type: "mc", q: "Aktiv: \u201eMan stahl das Gemälde.\" → Passiv?", o: ["Das Gemälde wird gestohlen.", "Das Gemälde wurde gestohlen.", "Das Gemälde ist gestohlen."], c: 1, model: "B – Das Gemälde wurde gestohlen.", rule: "<div class=rbox>Präteritum Passiv: wurde + Partizip II.</div>" },
    { sub: "Passiv mit 'müssen'", type: "mc", q: "\u201eMan muss das Fenster öffnen.\" → Passiv?", o: ["Das Fenster muss geöffnet werden.", "Das Fenster wird geöffnet werden.", "Das Fenster muss geöffnet sein."], c: 0, model: "A – Das Fenster muss geöffnet werden.", rule: "<div class=rbox>Passiv mit Modalverb: müssen + Partizip II + werden.</div>" },
    { sub: "Vorgangs- vs. Zustandspassiv", type: "mc", q: "\u201eDie Wunde ist verbunden.\" – Welche Form?", o: ["Vorgangspassiv", "Zustandspassiv"], c: 1, model: "B – Zustandspassiv (ist verbunden = Zustand nach Verbinden)", rule: "<div class=rbox>Zustandspassiv: ist + Partizip II → Ergebnis sichtbar. Vorgangspassiv: wird verbunden → Vorgang läuft.</div>" },
    { sub: "Passivbildung mit Reflexivverb", type: "mc", q: "Aktiv: \u201eMan behandelt die Patienten gut.\" → Passiv?", o: ["Die Patienten werden gut behandelt.", "Die Patienten behandeln sich gut.", "Gut werden die Patienten behandeln."], c: 0, model: "A – Die Patienten werden gut behandelt.", rule: "<div class=rbox>behandeln → Passiv: werden + behandelt. Das Adverb 'gut' bleibt.</div>" },
    { sub: "Passiv erkennen", type: "mc", q: "\u201eDas Licht geht aus.\" – Passiv oder nicht?", o: ["Passiv", "kein Passiv (Aktivsatz)"], c: 1, model: "B – kein Passiv (ausgehen ist ein trennbares Verb im Aktiv)", rule: "<div class=rbox>Nicht jede Form mit 'aus' ist Passiv. Passiv = werden + Partizip II. 'geht aus' = Aktivsatz mit trennbarem Verb.</div>" },
    { sub: "Passivierbarkeit", type: "mc", q: "Welcher Satz lässt sich passivieren?", o: ["Das Wasser kocht.", "Sie schläft tief.", "Der Lehrer erklärt die Aufgabe."], c: 2, model: "C – Die Aufgabe wird (vom Lehrer) erklärt.", rule: "<div class=rbox>Nur transitive Verben (mit Akkusativobjekt) können ins Passiv gesetzt werden. 'kochen' (intransitiv) und 'schlafen' (intransitiv) nicht.</div>" },
    { sub: "Passiv im Präsens", type: "mc", q: "Aktiv: \u201eMan trinkt hier viel Kaffee.\" → Passiv?", o: ["Hier wird viel Kaffee getrunken.", "Hier ist viel Kaffee getrunken.", "Hier wurde viel Kaffee getrunken."], c: 0, model: "A – Hier wird viel Kaffee getrunken.", rule: "<div class=rbox>Präsens Passiv: wird + Partizip II.</div>" }
  
  ]
},

// ── S / SS / ß (überarbeitet: cross, wo möglich) ──
{
  id: "extra_slaut",
  title: "s / ss / ß",
  emoji: "🔉",
  color: "#0891b2",
  qs: [
    {
      sub: "Einzelwörter (ss oder ß)",
      type: "cross",
      q: "Wähle die richtige Schreibweise für die Lücke.",
      rows: [
        "Der Flu__ (Fluss/Flüß) fließt ins Meer.",
        "Das ist ein gro__er Spa__.",
        "Ich wei__, da__ du kommst.",
        "Ein bi__chen Glück.",
        "Der Fu__ball ist rund.",
        "Ein sü__er Gru__.",
        "Er a__ den Apfel.",
        "Das Gebi__ ist scharf.",
        "Wir genie__en die Sonne.",
        "Eine wei__e Rose.",
        "Das Schlo__ ist alt."
      ],
      cols: ["ss", "ß"],
      correct: [0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
      model: "Fluss (ss), großer (ß), Spaß (ß), weiß (ß), dass (ss), bisschen (ss), Fußball (ß), süßer (ß), Gruß (ß), aß (ß), Gebiss (ss), genießen (ß), weiße (ß), Schloss (ss).",
      rule: "<div class=rbox>Nach kurzem Vokal schreibt man ss (Fluss, bisschen, Gebiss, Schloss). Nach langem Vokal oder Diphthong schreibt man ß (groß, Spaß, weiß, Fuß, süß, Gruß, aß, genießen, weiße).</div>"
    },
    {
      sub: "Wörter mit s/ss/ß (Spezialfälle)",
      type: "mc",
      q: "Wähle die korrekte Kombination.",
      o: [
        "fast / Glaskasten → s / s",
        "fast / Glaskasten → ss / s",
        "fast / Glaskasten → ss / ss"
      ],
      c: 0,
      model: "fast → s, Glaskasten → s",
      rule: "<div class=rbox>In 'fast' bleibt das s (kein Dehnungszeichen), 'Glas' hat langes a und bleibt s. Merke: 'ss' nur nach kurzem Vokal.</div>"
    },
    {
      sub: "hässlich / Maß / Masse",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ein hä__licher Fleck.",
        "Das Ma__ (Bierkrug) ist voll.",
        "Die Ma__e der Menschen."
      ],
      cols: ["ss", "ß"],
      correct: [0, 1, 0],
      model: "hässlich (ss), Maß (ß), Masse (ss)",
      rule: "<div class=rbox>hässlich (kurzes ä) → ss; Maß (langes a) → ß; Masse (kurzes a) → ss.</div>"
    },
    {
      sub: "reißen / draußen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er rei__t die Zeitung.",
        "Er ist drau__en."
      ],
      cols: ["ss", "ß"],
      correct: [1, 1],
      model: "reißt (Diphthong ei) → ß; draußen (Diphthong au) → ß",
      rule: "<div class=rbox>Nach Diphthongen (ei, au, eu) steht ß.</div>"
    },
    {
      sub: "Haselnuss / Vergiss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Die Ha__elnuss.",
        "Vergi__ es nicht."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Haselnuss (ss), Vergiss (ss)",
      rule: "<div class=rbox>'Nuss' hat kurzes u → ss; 'vergessen' → Imperativ 'vergiss' (kurzes i) → ss.</div>"
    },
// Aktuell: 5 → Neu: +35

// Füge nach dem letzten Element in extra_slaut.qs ein:

    {
      sub: "Küsse / Grüße",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Viele Kü__e und Grü__e!",
        "Das Wasser flie__t schnell."
      ],
      cols: ["ss", "ß"],
      correct: [1, 1],
      model: "Küsse (kurzes ü) → ss? Nein – Küsse hat kurzes ü → ss? Tatsächlich: Kuss → Küsse (ss). Aber Gruß → Grüße (ß, da langer Vokal). Flieβt (Diphthong ie) → ß.",
      rule: "<div class=rbox>Kuss (kurzes u) → ss: Küsse. Gruß (langer Vokal) → ß: Grüße. fließt (Diphthong) → ß.</div>"
    },
    {
      sub: "Straße / Gasse",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Die Stra__e ist breit.",
        "Die kleine Ga__e ist eng."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "Straße (langes a) → ß; Gasse (kurzes a) → ss",
      rule: "<div class=rbox>Straße: langes a → ß. Gasse: kurzes a → ss.</div>"
    },
    {
      sub: "essen / aß",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er i__t gerne Suppe. (Präsens)",
        "Er a__ gestern Suppe. (Präteritum)"
      ],
      cols: ["ss", "ß"],
      correct: [0, 1],
      model: "isst (kurzes i) → ss; aß (langes a) → ß",
      rule: "<div class=rbox>Präsens: isst (kurzer Vokal) → ss. Präteritum: aß (langer Vokal) → ß. Starke Verben können je nach Tempus wechseln!</div>"
    },
    {
      sub: "müssen / Fluss / Spaß",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ich mu__ jetzt gehen.",
        "Der Flu__ ist breit.",
        "Das macht Spa__!"
      ],
      cols: ["ss", "ß"],
      correct: [0, 0, 1],
      model: "muss (kurzes u) → ss; Fluss (kurzes u) → ss; Spaß (langes a) → ß",
      rule: "<div class=rbox>muss und Fluss haben kurze Vokale → ss. Spaß hat langes a → ß.</div>"
    },
    {
      sub: "heiß / Riss / Kuss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Das Wasser ist hei__.",
        "Es gibt einen Ri__ im Stoff.",
        "Gib mir einen Ku__!"
      ],
      cols: ["ss", "ß"],
      correct: [1, 0, 0],
      model: "heiß (Diphthong ei) → ß; Riss (kurzes i) → ss; Kuss (kurzes u) → ss",
      rule: "<div class=rbox>heiß: Diphthong ei → ß. Riss: kurzes i → ss. Kuss: kurzes u → ss.</div>"
    },
    {
      sub: "Schluss / Schlüsse / beschlossen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Zum Schlu__ ein Lied.",
        "Drei Bescklü__e wurden gefasst.",
        "Der Plan wurde bescblo__en."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0, 0],
      model: "Schluss (kurzes u) → ss; Beschlüsse (kurzes ü) → ss; beschlossen (kurzes o) → ss",
      rule: "<div class=rbox>Schluss, Beschlüsse, beschlossen: alle kurze Vokale → ss.</div>"
    },
    {
      sub: "weiß / wissen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ich wei__, was du meinst.",
        "Du mu__ das wi__en."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0, 0],
      model: "weiß (langer Diphtong ei) → ß; muss (kurzes u) → ss; wissen (kurzes i) → ss",
      rule: "<div class=rbox>weiß (1. Pers. Sg.) → ß (langer Vokal). wissen und muss → ss (kurze Vokale).</div>"
    },
    {
      sub: "genießen / nässer",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Sie genie__en den Sommer.",
        "Der Regen macht alles nä__er."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "genießen (Diphthong ie) → ß; nässer (kurzes ä, abgeleitet von nass) → ss",
      rule: "<div class=rbox>genießen: ie-Diphthong → ß. nässer: Steigerung von nass → kurzes ä → ss.</div>"
    },
    {
      sub: "lassen / vergessen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "La__ das bitte sein!",
        "Ich habe es verge__en."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Lass (kurzes a) → ss; vergessen (kurzes e) → ss",
      rule: "<div class=rbox>lassen: kurzes a → ss (Imperativ: Lass). vergessen: kurzes e → ss.</div>"
    },
    {
      sub: "außen / raus",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Au__en ist es kalt.",
        "Geh rau__!"
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "außen (Diphthong au) → ß; raus (Diphthong au) vor Konsonant → kein Dehnzeichen nötig → s",
      rule: "<div class=rbox>außen: Diphthong au → ß. raus: endet auf -aus → einfaches s (kein ß am Wortende vor Konsonant nötig – hier ist ß nicht korrekt).</div>"
    },
    {
      sub: "Straßenbahn / Flussufer",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Die Stra__enbahn kommt.",
        "Am Flu__ufer ist es schön."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "Straßenbahn (langes a in Straße) → ß; Flussufer (kurzes u in Fluss) → ss",
      rule: "<div class=rbox>In Komposita behält der erste Teil seine Schreibung: Straße → Straßenbahn. Fluss → Flussufer.</div>"
    },
    {
      sub: "Esszimmer / Schlossgarten",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Das E__zimmer ist groß.",
        "Der Schlo__garten ist alt."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Esszimmer (kurzes e in essen) → ss; Schlossgarten (kurzes o in Schloss) → ss",
      rule: "<div class=rbox>Essen → Esszimmer (ss). Schloss → Schlossgarten (ss, kurzes o).</div>"
    },
    {
      sub: "Füße / Busse",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Meine Fü__e sind kalt.",
        "Die Bu__e fahren pünktlich."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "Füße (Plural von Fuß, langes u) → ß; Busse (Plural von Bus, kurzes u) → ss",
      rule: "<div class=rbox>Fuß (langer Vokal) → ß → Füße (bleibt ß). Bus (kurzes u) → Busse (ss).</div>"
    },
    {
      sub: "Maßnahme / Massiv",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Das ist eine wichtige Ma__nahme.",
        "Ein ma__ives Problem."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "Maßnahme (langes a in Maß) → ß; massiv (kurzes a) → ss",
      rule: "<div class=rbox>Maß (langes a) → ß → Maßnahme. massiv (kurzes a, Fremdwort) → ss.</div>"
    },
    {
      sub: "Hässe / hassen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ha__ ist ein starkes Wort.",
        "Ich ha__e Unrecht."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Hass (kurzes a) → ss; hasse (kurzes a) → ss",
      rule: "<div class=rbox>Hass: kurzes a → ss. hassen: kurzes a → ss.</div>"
    },
    {
      sub: "groß / größer / am größten",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er ist gro__.",
        "Er ist grö__er.",
        "Er ist am grö__ten."
      ],
      cols: ["ss", "ß"],
      correct: [1, 1, 1],
      model: "groß (langer Vokal) → ß; größer (Umlaut, langer Vokal) → ß; größten → ß",
      rule: "<div class=rbox>groß: langer Vokal o → ß. Auch in Steigerungsformen bleibt ß, da der Vokal lang bleibt.</div>"
    },
    {
      sub: "Esser / Fresser",
      type: "cross",
      q: "Wähle s, ss oder ß.",
      rows: [
        "Er ist ein guter E__er.",
        "Das Tier ist ein Fre__er."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Esser (kurzes e) → ss; Fresser (kurzes e) → ss",
      rule: "<div class=rbox>Esser und Fresser: je kurzes e → ss.</div>"
    },
    {
      sub: "Schuss / schießen",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ein einziger Schu__.",
        "Er schie__t ins Tor."
      ],
      cols: ["ss", "ß"],
      correct: [0, 1],
      model: "Schuss (kurzes u) → ss; schießt (Diphthong ie) → ß",
      rule: "<div class=rbox>Schuss: kurzes u → ss. schießen/schießt: Diphthong ie → ß.</div>"
    },
    {
      sub: "Rußland (veraltet) / russisch",
      type: "mc",
      q: "Wie schreibt man heute korrekt: ‚Ru__land' und ‚ru__isch'?",
      o: ["Rußland / rußisch", "Russland / russisch", "Russland / rußisch"],
      c: 1,
      model: "Russland / russisch (ss – kurzes u)",
      rule: "<div class=rbox>Russland und russisch schreibt man mit ss (kurzes u). 'Rußland' war eine ältere Schreibweise, heute nicht mehr korrekt.</div>"
    },
    {
      sub: "fließen / Riss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Das Wasser flie__t.",
        "Er hat einen Ri__ im Ärmel."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "fließt (Diphthong ie) → ß; Riss (kurzes i) → ss",
      rule: "<div class=rbox>fließt: Diphthong ie → ß. Riss: kurzes i → ss.</div>"
    },
    {
      sub: "Genuss / Genüsse",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Das ist ein Genu__.",
        "Kleine Genü__e machen glücklich."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Genuss (kurzes u) → ss; Genüsse (kurzes ü) → ss",
      rule: "<div class=rbox>Genuss und Genüsse: kurze Vokale → ss.</div>"
    },
    {
      sub: "Verdruss / Überdruss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er hat Verdru__.",
        "Es ist zum Überdru__."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Verdruss (kurzes u) → ss; Überdruss (kurzes u) → ss",
      rule: "<div class=rbox>Verdruss und Überdruss: kurze Vokale → ss.</div>"
    },
    {
      sub: "Gebiß (alte Schreibung) / Gebiss (neu)",
      type: "mc",
      q: "Wie schreibt man ‚Gebi__' korrekt nach der Rechtschreibreform?",
      o: ["Gebiß", "Gebiss", "Gebis"],
      c: 1,
      model: "Gebiss (kurzes i) → ss",
      rule: "<div class=rbox>Seit der Reform 1996 gilt: nach kurzem Vokal immer ss (auch am Ende): Gebiss, Fluss, Kuss.</div>"
    },
    {
      sub: "Nuss / Nüsse",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Eine Nuss.",
        "Viele Nü__e."
      ],
      cols: ["ss", "ß"],
      correct: [0, 0],
      model: "Nuss (kurzes u) → ss; Nüsse (kurzes ü) → ss",
      rule: "<div class=rbox>Nuss und Nüsse: kurze Vokale → ss.</div>"
    },
    {
      sub: "beißen / biss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Der Hund bei__t.",
        "Er bi__ ihn."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "beißt (Diphthong ei) → ß; biss (kurzes i) → ss",
      rule: "<div class=rbox>beißt: Diphthong ei → ß. biss (Präteritum): kurzes i → ss.</div>"
    },
    {
      sub: "Ausreißer / Anlass",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er ist ein Aurei__er.",
        "Das ist kein Anla__ zur Sorge."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "Ausreißer (Diphthong ei) → ß; Anlass (kurzes a) → ss",
      rule: "<div class=rbox>Ausreißer: ei → ß. Anlass: kurzes a → ss.</div>"
    },
    {
      sub: "gießen / Guss",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Sie gie__t die Blumen.",
        "Ein Gu__ Wasser."
      ],
      cols: ["ss", "ß"],
      correct: [1, 0],
      model: "gießt (Diphthong ie) → ß; Guss (kurzes u) → ss",
      rule: "<div class=rbox>gießen/gießt: Diphthong ie → ß. Guss: kurzes u → ss.</div>"
    },
    {
      sub: "Kloß / Klöße",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Ein leckerer Klo__.",
        "Selbstgemachte Klö__e."
      ],
      cols: ["ss", "ß"],
      correct: [1, 1],
      model: "Kloß (langes o) → ß; Klöße (langes ö) → ß",
      rule: "<div class=rbox>Kloß und Klöße: lange Vokale → ß.</div>"
    },
    {
      sub: "bloss / bloß",
      type: "mc",
      q: "Schreibe: ‚Das war doch blo__ ein Missverständnis.'",
      o: ["bloss", "bloß", "blos"],
      c: 1,
      model: "bloß (langer o-Vokal) → ß",
      rule: "<div class=rbox>bloß: langes o → ß. 'bloss' war die alte Schweizer Schreibweise.</div>"
    },
    {
      sub: "stoßen / stieß",
      type: "cross",
      q: "Wähle ss oder ß.",
      rows: [
        "Er stö__t den Ball weg.",
        "Sie stie__ gegen die Wand."
      ],
      cols: ["ss", "ß"],
      correct: [1, 1],
      model: "stößt (langes ö) → ß; stieß (Diphthong ie) → ß",
      rule: "<div class=rbox>stoßen/stößt: langer Vokal → ß. stieß (Präteritum): Diphthong ie → ß.</div>"
    },
    {
      sub: "Gruss (CH) vs. Gruß (DE/AT)",
      type: "mc",
      q: "In Deutschland und Österreich: ‚Viele Grü__e!'",
      o: ["Grüsse", "Grüße", "Grüβe"],
      c: 1,
      model: "Grüße (langer Vokal) → ß",
      rule: "<div class=rbox>In Deutschland/Österreich: Gruß → ß (langer Vokal u). In der Schweiz entfällt ß → Grüsse.</div>"
    },
    {
      sub: "Komplexübung: alle Regeln",
      type: "cross",
      q: "Wähle für jede Lücke ss oder ß.",
      rows: [
        "Sie vermi__t ihn sehr. (vermissen)",
        "Er ist hei__. (heißen)",
        "Das ist süßes Geba__k. (Gebäck mit ss?)",
        "Der Fußball-Schie__richter pfeift."
      ],
      cols: ["ss", "ß"],
      correct: [0, 1, 0, 0],
      model: "vermisst (kurzes i) → ss; heißt (Diphthong ei) → ß; Gebäck hat ck, kein s; Schiedsrichter (kurzes ie, ds) → ss",
      rule: "<div class=rbox>vermisst: kurzes i → ss. heißt: ei → ß. Schiedsrichter: kein ss/ß betroffen (das 'ds' bleibt). Aufgepasst: nicht alle Lücken sind ss/ß-Fälle!</div>"
    },
    {
      sub: "Trickfrage: kein ss/ß",
      type: "mc",
      q: "‚Der Rei__verschluss ist kaputt.' – Was passt in die Lücke?",
      o: ["ß", "ss", "s"],
      c: 2,
      model: "Reißverschluss: ei → ß + Verschluss (kurzes u) → ss → zusammen: Reißverschluss",
      rule: "<div class=rbox>Reißverschluss: Komposition aus 'reißen' (ß nach ei) + 'Verschluss' (ss nach kurzem u).</div>"
    },
    {
      sub: "ß nur in Kleinschrift",
      type: "mc",
      q: "In der GROSSSCHREIBUNG schreibt man statt ß immer: …",
      o: ["SS", "SZ", "ß (bleibt)"],
      c: 0,
      model: "GROSSSCHREIBUNG → SS (z.B. STRASSE, MASS)",
      rule: "<div class=rbox>ß existiert nur in Kleinbuchstaben. Bei Großschreibung schreibt man immer SS: STRASSE, GENIESSEN, MASS.</div>"
    },
    {
      sub: "Endposition: Fluss/Buß",
      type: "cross",
      q: "Wähle: ss oder ß am Wortende?",
      rows: [
        "Kanu-Ku__ (Kuss am Ende)",
        "Stra__e (Straße)"
      ],
      cols: ["ss", "ß"],
      correct: [0, 1],
      model: "Kuss: kurzes u → ss am Ende. Straße: langes a → ß.",
      rule: "<div class=rbox>ss oder ß am Wortende: kurzer Vokal → ss (Kuss, Fluss). Langer Vokal → ß (Straße, Maß).</div>"
    }
  
  
  ]
},

// ── WORTARTEN BESTIMMEN – bleibt MC (gemischt) ──
{
  id: "extra_wortarten",
  title: "Wortarten bestimmen",
  emoji: "🧩",
  color: "#0e7490",
  qs: [
    { sub: "Artikel", type: "mc", q: "\u201eDas Haus ist rot.\" – Wortart von Das?", o: ["Artikel", "Demonstrativpronomen", "Adjektiv"], c: 0, model: "A – Artikel", rule: "<div class=rbox>Das als Artikel begleitet ein Nomen direkt. Probe: das, die, der.</div>" },
    { sub: "Demonstrativpronomen", type: "mc", q: "\u201eDas ist mein Haus.\" – Wortart von Das?", o: ["Artikel", "Demonstrativpronomen", "Adjektiv"], c: 1, model: "B – Demonstrativpronomen", rule: "<div class=rbox>Das ohne nachfolgendes Nomen und mit Verweis auf etwas → Demonstrativpronomen (dieses).</div>" },
    { sub: "Personalpronomen", type: "mc", q: "\u201eIch helfe ihm.\" – Wortart von ihm?", o: ["Personalpronomen", "Possessivpronomen", "Relativpronomen"], c: 0, model: "A – Personalpronomen", rule: "<div class=rbox>Personalpronomen ersetzen ein Nomen: er→ihm (Dativ).</div>" },
    { sub: "Relativpronomen", type: "mc", q: "\u201eDas Kind, das dort spielt.\" – Wortart des zweiten das?", o: ["Artikel", "Relativpronomen", "Konjunktion"], c: 1, model: "B – Relativpronomen", rule: "<div class=rbox>das nach Komma und Bezugswort (Kind) → Relativpronomen (= welches).</div>" },
    { sub: "Adverb", type: "mc", q: "\u201eEr läuft schnell.\" – Wortart von schnell?", o: ["Adjektiv", "Adverb", "Verb"], c: 1, model: "B – Adverb", rule: "<div class=rbox>schnell modifiziert das Verb (läuft) → Adverb (nicht dekliniert).</div>" },
    { sub: "Präposition", type: "mc", q: "\u201eSie steht hinter mir.\" – Wortart von hinter?", o: ["Präposition", "Konjunktion", "Adverb"], c: 0, model: "A – Präposition", rule: "<div class=rbox>hinter verknüpft Nomen/Pronomen und gibt eine Beziehung an → Präposition.</div>" },
    { sub: "Konjunktion", type: "mc", q: "\u201eIch gehe, weil ich müde bin.\" – Wortart von weil?", o: ["Präposition", "Konjunktion", "Pronomen"], c: 1, model: "B – Konjunktion", rule: "<div class=rbox>weil leitet einen Nebensatz ein → unterordnende Konjunktion.</div>" },
    { sub: "Possessivpronomen", type: "mc", q: "\u201eMein Auto ist blau.\" – Wortart von Mein?", o: ["Personalpronomen", "Possessivpronomen", "Artikel"], c: 1, model: "B – Possessivpronomen", rule: "<div class=rbox>Mein drückt Besitz aus → Possessivpronomen.</div>" },
    { sub: "Gradpartikel", type: "mc", q: "\u201eEin sehr schöner Tag.\" – Wortart von sehr?", o: ["Adjektiv", "Gradpartikel / Adverb", "Nomen"], c: 1, model: "B – Gradpartikel / Adverb", rule: "<div class=rbox>sehr steigert das Adjektiv (schöner) → Gradpartikel / Adverb.</div>" },
    { sub: "Interjektion", type: "mc", q: "\u201eHuch, das war knapp!\" – Wortart von Huch?", o: ["Interjektion", "Konjunktion", "Pronomen"], c: 0, model: "A – Interjektion", rule: "<div class=rbox>Huch ist ein Ausruf ohne grammatische Funktion im Satz → Interjektion.</div>" },
    { sub: "Temporaladverb", type: "mc", q: "\u201eWir sind heute da.\" – Wortart von heute?", o: ["Lokaladverb", "Temporaladverb", "Modaladverb"], c: 1, model: "B – Temporaladverb", rule: "<div class=rbox>heute gibt eine Zeitangabe an → Temporaladverb.</div>" },
    { sub: "Adjektiv", type: "mc", q: "\u201eDer kluge Hund.\" – Wortart von kluge?", o: ["Nomen", "Adjektiv", "Verb"], c: 1, model: "B – Adjektiv", rule: "<div class=rbox>kluge beschreibt das Nomen (Hund) attributiv → Adjektiv.</div>" },
    { sub: "Verb", type: "mc", q: "\u201eEr lacht laut.\" – Wortart von lacht?", o: ["Verb", "Nomen", "Adjektiv"], c: 0, model: "A – Verb", rule: "<div class=rbox>lacht = Tätigkeit, konjugiert → Verb.</div>" },
    { sub: "Modaladverb", type: "mc", q: "\u201eVielleicht regnet es.\" – Wortart von Vielleicht?", o: ["Adverb", "Konjunktion", "Präposition"], c: 0, model: "A – Adverb (Modaladverb)", rule: "<div class=rbox>Vielleicht gibt die Möglichkeit an → Modaladverb.</div>" },
    { sub: "Kasus", type: "mc", q: "\u201eWegen des Regens.\" – Welcher Fall?", o: ["Genitiv", "Dativ", "Akkusativ"], c: 0, model: "A – Genitiv", rule: "<div class=rbox>wegen + Genitiv (wegen des Regens).</div>" },
    { sub: "Kasus", type: "mc", q: "\u201eFür mich.\" – Welcher Fall?", o: ["Nominativ", "Dativ", "Akkusativ"], c: 2, model: "C – Akkusativ", rule: "<div class=rbox>für + Akkusativ: für mich (Akkusativ).</div>" },
    { sub: "Indefinitpronomen", type: "mc", q: "\u201eMan sagt das so.\" – Wortart von Man?", o: ["Indefinitpronomen", "Personalpronomen", "Artikel"], c: 0, model: "A – Indefinitpronomen", rule: "<div class=rbox>Man verweist unbestimmt auf eine oder mehrere Personen → Indefinitpronomen.</div>" },
    { sub: "Interrogativpronomen", type: "mc", q: "\u201eWelcher Film gefällt dir?\" – Wortart von Welcher?", o: ["Interrogativpronomen", "Relativpronomen", "Artikel"], c: 0, model: "A – Interrogativpronomen", rule: "<div class=rbox>Welcher leitet eine Frage ein und fragt nach einer Auswahl → Interrogativpronomen.</div>" },
    { sub: "Numerale", type: "mc", q: "\u201eDie drei Freunde.\" – Wortart von drei?", o: ["Numerale", "Adjektiv", "Nomen"], c: 0, model: "A – Numerale", rule: "<div class=rbox>drei ist eine Kardinalzahl → Numerale.</div>" },
    { sub: "Kasus", type: "mc", q: "\u201eTrotz der Kälte.\" – Welcher Fall?", o: ["Genitiv", "Dativ", "Nominativ"], c: 0, model: "A – Genitiv", rule: "<div class=rbox>trotz + Genitiv (trotz der Kälte).</div>" },
{ sub: "Modalpartikel", type: "mc", q: "\u201eDas ist doch logisch!\" – Wortart von 'doch'?", o: ["Konjunktion", "Modalpartikel", "Adverb"], c: 1, model: "B – Modalpartikel (drückt Einstellung des Sprechers aus)", rule: "<div class=rbox>Modalpartikeln (doch, ja, eigentlich, halt) drücken die Haltung des Sprechers aus und sind nicht erfragbar.</div>" },
    { sub: "Reflexivpronomen", type: "mc", q: "\u201eEr wäscht sich.\" – Wortart von 'sich'?", o: ["Personalpronomen", "Reflexivpronomen", "Possessivpronomen"], c: 1, model: "B – Reflexivpronomen", rule: "<div class=rbox>Reflexivpronomen (sich, mich, dich, uns, euch) beziehen sich auf das Subjekt des Satzes zurück.</div>" },
    { sub: "Konjunktionaladverb", type: "mc", q: "\u201eEr war krank, trotzdem kam er.\" – Wortart von 'trotzdem'?", o: ["Konjunktion", "Konjunktionaladverb", "Präposition"], c: 1, model: "B – Konjunktionaladverb (verbindet zwei HS, Verb auf Pos. 2 nach trotzdem)", rule: "<div class=rbox>Konjunktionaladverbien (deshalb, trotzdem, dennoch, daher) verbinden Hauptsätze. Das Verb folgt direkt danach (Pos. 2).</div>" },
    { sub: "Kasus: Dativ", type: "mc", q: "\u201eMit dem Hund.\" – Welcher Fall?", o: ["Akkusativ", "Dativ", "Genitiv"], c: 1, model: "B – Dativ (mit + Dativ)", rule: "<div class=rbox>mit + Dativ: mit dem Hund (maskulin, Dativ).</div>" },
    { sub: "Partikel", type: "mc", q: "\u201eJa, ich komme.\" – Wortart von 'Ja'?", o: ["Interjektion", "Partikel", "Konjunktion"], c: 1, model: "B – Partikel (Antwortpartikel / Abtönungspartikel)", rule: "<div class=rbox>'Ja' als Antwort ist eine Partikel (nicht deklinierbar, nicht konjugierbar).</div>" },
    { sub: "Kasus: Genitiv vs. Dativ", type: "mc", q: "\u201eWährend der Ferien.\" – Welcher Fall?", o: ["Genitiv", "Dativ", "Akkusativ"], c: 0, model: "A – Genitiv (während + Genitiv)", rule: "<div class=rbox>während + Genitiv: während der Ferien.</div>" },
    { sub: "Adverb vs. Adjektiv", type: "mc", q: "\u201eSie singt wunderschön.\" – Wortart von 'wunderschön'?", o: ["Adjektiv", "Adverb", "Nomen"], c: 1, model: "B – Adverb (modifiziert das Verb 'singt', nicht dekliniert)", rule: "<div class=rbox>Wenn ein Wort ein Verb modifiziert und nicht dekliniert ist, handelt es sich um ein Adverb.</div>" },
    { sub: "Imperativ", type: "mc", q: "\u201eLerne für die Prüfung!\" – Verbform?", o: ["Indikativ", "Imperativ", "Konjunktiv"], c: 1, model: "B – Imperativ (Aufforderung)", rule: "<div class=rbox>Imperativ: Befehlsform des Verbs (lerne! komm! geht!).</div>" },
    { sub: "Wortart: 'seit'", type: "mc", q: "\u201eSeit drei Jahren lebe ich hier.\" – Wortart von 'seit'?", o: ["Konjunktion", "Präposition", "Adverb"], c: 1, model: "B – Präposition (seit + Dativ)", rule: "<div class=rbox>seit + Dativ: seit drei Jahren → Präposition.</div>" },
    { sub: "Kasus: 'entgegen'", type: "mc", q: "\u201eEntgegen allen Erwartungen.\" – Welcher Fall?", o: ["Genitiv", "Dativ", "Akkusativ"], c: 1, model: "B – Dativ (entgegen + Dativ)", rule: "<div class=rbox>entgegen + Dativ: entgegen allen Erwartungen.</div>" },
    { sub: "Partizip I als Adjektiv", type: "mc", q: "\u201eDas lachende Kind.\" – Wortart von 'lachende'?", o: ["Verb", "Adjektiv (Partizip I)", "Nomen"], c: 1, model: "B – Adjektiv (Partizip I attributiv verwendet)", rule: "<div class=rbox>Partizip I (Verb + -d) wird als Adjektiv verwendet, wenn es ein Nomen beschreibt.</div>" },
    { sub: "Wortart: 'ob'", type: "mc", q: "\u201eIch weiß nicht, ob er kommt.\" – Wortart von 'ob'?", o: ["Präposition", "Konjunktion", "Adverb"], c: 1, model: "B – Konjunktion (unterordnend: leitet Nebensatz ein)", rule: "<div class=rbox>'ob' leitet indirekte Fragesätze ein → unterordnende Konjunktion.</div>" },
    { sub: "Partizip II als Adjektiv", type: "mc", q: "\u201eDas gekochte Gemüse.\" – Wortart von 'gekochte'?", o: ["Verb", "Adjektiv (Partizip II)", "Nomen"], c: 1, model: "B – Adjektiv (Partizip II attributiv)", rule: "<div class=rbox>Partizip II als Attribut vor einem Nomen → Adjektiv (gekochtes Gemüse, gebratenes Fleisch).</div>" },
    { sub: "Kasus nach 'innerhalb'", type: "mc", q: "\u201eInnerhalb der Stadt.\" – Welcher Fall?", o: ["Dativ", "Genitiv", "Akkusativ"], c: 1, model: "B – Genitiv (innerhalb + Genitiv)", rule: "<div class=rbox>innerhalb + Genitiv: innerhalb der Stadt.</div>" },
    { sub: "Wortart: 'jemand'", type: "mc", q: "\u201eJemand hat gerufen.\" – Wortart von 'jemand'?", o: ["Personalpronomen", "Indefinitpronomen", "Demonstrativpronomen"], c: 1, model: "B – Indefinitpronomen", rule: "<div class=rbox>jemand, niemand, man, etwas, nichts → Indefinitpronomen (unbestimmte Personen/Dinge).</div>" },
    { sub: "Wortart: 'hierhin'", type: "mc", q: "\u201eKomm hierhin!\" – Wortart von 'hierhin'?", o: ["Präposition", "Lokaladverb", "Konjunktion"], c: 1, model: "B – Lokaladverb (Richtungsangabe)", rule: "<div class=rbox>hierhin, dorthin, wohin → Lokaladverbien mit Richtungsbedeutung.</div>" },
    { sub: "Wortart: 'immerhin'", type: "mc", q: "\u201eImmerhin hat er es versucht.\" – Wortart von 'immerhin'?", o: ["Konjunktion", "Modalpartikel / Adverb", "Adjektiv"], c: 1, model: "B – Modalpartikel / Adverb (drückt Einschränkung/Anerkennung aus)", rule: "<div class=rbox>immerhin, wenigstens, zumindest → Adverbien/Partikeln mit einschränkender Bedeutung.</div>" },
    { sub: "Wortart 'man'", type: "mc", q: "\u201eMan sagt das so.\" – Welcher Kasus ist 'man'?", o: ["Akkusativ", "Nominativ", "Dativ"], c: 1, model: "B – Nominativ (man = Subjekt des Satzes)", rule: "<div class=rbox>'man' ist immer Nominativ und Subjekt.</div>" },
    { sub: "Kasus: nach 'laut'", type: "mc", q: "\u201eLaut Bericht / Laut dem Bericht.\" – Welcher Fall?", o: ["Genitiv oder Dativ (beides möglich)", "nur Genitiv", "nur Dativ"], c: 0, model: "A – Genitiv oder Dativ (beide korrekt)", rule: "<div class=rbox>'laut' kann mit Genitiv (laut Berichts) oder Dativ (laut dem Bericht) gebraucht werden. Beide Formen sind korrekt.</div>" },
    { sub: "Kasus: nach 'außer'", type: "mc", q: "\u201eAußer ihr war niemand da.\" – Welcher Fall?", o: ["Nominativ", "Akkusativ", "Dativ"], c: 2, model: "C – Dativ (außer + Dativ: außer ihr)", rule: "<div class=rbox>außer + Dativ: außer ihr, außer mir, außer uns.</div>" }
  
  ]
},

// ── SATZBAU & SATZVERBINDUNGEN – bleibt MC ──
{
  id: "extra_satzbau",
  title: "Satzbau & Satzverbindungen",
  emoji: "🔗",
  color: "#9333ea",
  qs: [
    { sub: "Finalsatz", type: "mc", q: "\u201eIch lerne viel, ___ ich die Prüfung bestehe.\"", o: ["weil", "damit", "obwohl"], c: 1, model: "B – damit (Ziel)", rule: "<div class=rbox>damit = Absicht/Ziel → Finalsatz.</div>" },
    { sub: "Konzessivsatz", type: "mc", q: "\u201e___ es regnete, gingen wir spazieren.\"", o: ["Weil", "Obwohl", "Dass"], c: 1, model: "B – Obwohl", rule: "<div class=rbox>Obwohl = Gegensatz/Einräumung → Konzessivsatz.</div>" },
    { sub: "Konsekutivadverb", type: "mc", q: "\u201eEr ist krank, ___ kommt er nicht.\"", o: ["trotzdem", "deshalb", "weil"], c: 1, model: "B – deshalb", rule: "<div class=rbox>deshalb = Folge (HS + deshalb + HS). Hauptsatz-Anschluss.</div>" },
    { sub: "Indirekter Fragesatz", type: "mc", q: "\u201eIch weiß nicht, ___ er kommt.\"", o: ["ob", "weil", "dass"], c: 0, model: "A – ob", rule: "<div class=rbox>Indirekter Fragesatz: ob → Frage ohne Fragezeichen.</div>" },
    { sub: "Temporaladverb", type: "mc", q: "\u201eZuerst essen wir, ___ gehen wir raus.\"", o: ["dann", "denn", "dass"], c: 0, model: "A – dann", rule: "<div class=rbox>dann = zeitliche Abfolge (dann = danach). Hauptsatz-Anschluss.</div>" },
    { sub: "Temporalsatz", type: "mc", q: "\u201e___ ich zu Hause war, rief er an.\"", o: ["Als", "Wenn", "Da"], c: 0, model: "A – Als (einmaliges Ereignis in der Vergangenheit)", rule: "<div class=rbox>Als = einmalige Vergangenheit. Wenn = Wiederholung oder Zukunft.</div>" },
    { sub: "Hauptsatz-Konjunktion", type: "mc", q: "\u201eIch gehe schlafen, ___ ich bin müde.\"", o: ["weil", "denn", "obwohl"], c: 1, model: "B – denn (Hauptsatz-Konjunktion)", rule: "<div class=rbox>denn = kausal, verbindet zwei HS (Verb bleibt auf Pos. 2). weil → NS (Verb ans Ende).</div>" },
    { sub: "Adversativsatz", type: "mc", q: "\u201eEr ist reich, ___ er ist unglücklich.\"", o: ["aber", "sondern", "oder"], c: 0, model: "A – aber", rule: "<div class=rbox>aber = Gegensatz zweier HS.</div>" },
    { sub: "Entgegenstellung", type: "mc", q: "\u201eNicht nur ich, ___ auch du bist da.\"", o: ["sondern", "aber", "oder"], c: 0, model: "A – sondern", rule: "<div class=rbox>nicht nur…sondern auch = Erweiterung/Steigerung.</div>" },
    { sub: "Konditionalsatz", type: "mc", q: "\u201e___ du Zeit hast, hilf mir.\"", o: ["Wenn", "Ob", "Dass"], c: 0, model: "A – Wenn", rule: "<div class=rbox>Wenn = Bedingung → Konditionalsatz.</div>" },
    { sub: "dass-Satz", type: "mc", q: "\u201eEr sagt, ___ er kommt.\"", o: ["dass", "das", "weil"], c: 0, model: "A – dass", rule: "<div class=rbox>dass leitet einen NS ein (Inhaltssatz). Probe: kein Relativpronomen-Ersatz möglich.</div>" },
    { sub: "Temporalsatz", type: "mc", q: "\u201eIch bleibe hier, ___ du gehst.\"", o: ["während", "als", "wenn"], c: 0, model: "A – während", rule: "<div class=rbox>während = Gleichzeitigkeit zweier Handlungen.</div>" },
    { sub: "Adversativadverb", type: "mc", q: "\u201eEs ist kalt, ___ scheint die Sonne.\"", o: ["trotzdem", "deshalb", "weil"], c: 0, model: "A – trotzdem", rule: "<div class=rbox>trotzdem = obwohl (Adverb, HS-Anschluss).</div>" },
    { sub: "Temporalsatz", type: "mc", q: "\u201e___ er ankam, war es dunkel.\"", o: ["Als", "Wenn", "Ob"], c: 0, model: "A – Als", rule: "<div class=rbox>Als = einmalig in der Vergangenheit. Wenn = Wiederholung/Zukunft.</div>" },
    { sub: "Alternative", type: "mc", q: "\u201eDu kannst gehen ___ bleiben.\"", o: ["oder", "aber", "sondern"], c: 0, model: "A – oder", rule: "<div class=rbox>oder = Wahl zwischen zwei Möglichkeiten.</div>" },
    { sub: "Komparativsatz", type: "mc", q: "\u201e___ du lernst, wirst du besser.\"", o: ["Je mehr", "Sowie", "Dass"], c: 0, model: "A – Je mehr", rule: "<div class=rbox>Je mehr…desto/umso = Steigerungskorrelation.</div>" },
    { sub: "Indirekter Fragesatz", type: "mc", q: "\u201eIch frage mich, ___ das wahr ist.\"", o: ["ob", "dass", "weil"], c: 0, model: "A – ob", rule: "<div class=rbox>ob leitet indirekte Entscheidungsfragen ein.</div>" },
    { sub: "Finalsatz", type: "mc", q: "\u201eEr arbeitet, ___ Geld zu verdienen.\"", o: ["um", "damit", "weil"], c: 0, model: "A – um (zu verdienen)", rule: "<div class=rbox>um…zu + Infinitiv = Absicht (wenn Subjekt gleich bleibt).</div>" },
    { sub: "Konsekutivsatz", type: "mc", q: "\u201eEr rennt, ___ er den Bus kriegt.\"", o: ["sodass", "weil", "obwohl"], c: 0, model: "A – sodass", rule: "<div class=rbox>sodass = Folge des Rennens.</div>" },
    { sub: "Temporalsatz", type: "mc", q: "\u201e___ ich klein war, spielte ich viel.\"", o: ["Als", "Wenn", "Wann"], c: 0, model: "A – Als", rule: "<div class=rbox>Als = einmaliger Zeitraum in der Vergangenheit.</div>" },
{ sub: "Kausalsatz", type: "mc", q: "\u201eEr blieb zu Hause, ___ er erkältet war.\"", o: ["damit", "weil", "obwohl"], c: 1, model: "B – weil (Grund)", rule: "<div class=rbox>weil = Kausalkonjunktion (Grund). Verb ans Ende.</div>" },
    { sub: "Konzessivsatz", type: "mc", q: "\u201e___ er alles wusste, schwieg er.\"", o: ["Weil", "Obwohl", "Damit"], c: 1, model: "B – Obwohl", rule: "<div class=rbox>Obwohl = Konzessivkonjunktion (Einräumung).</div>" },
    { sub: "Temporalsatz", type: "mc", q: "\u201e___ es aufgehört hatte zu regnen, gingen sie raus.\"", o: ["Als", "Nachdem", "Sobald"], c: 1, model: "B – Nachdem (Vorzeitigkeit: zuerst Regen aufgehört, dann rausgehen)", rule: "<div class=rbox>nachdem = Vorzeitigkeit (erst A, dann B). Plusquamperfekt im NS.</div>" },
    { sub: "Adversativkonjunktion", type: "mc", q: "\u201eEr ist nicht reich, ___ er gibt viel aus.\"", o: ["sondern", "trotzdem", "aber"], c: 2, model: "C – aber (HS + aber + HS = Gegensatz)", rule: "<div class=rbox>aber verbindet zwei Hauptsätze gegensätzlich. 'sondern' nur nach Verneinung.</div>" },
    { sub: "Lokaladverbialsatz", type: "mc", q: "\u201eEr geht ___ er will.\"", o: ["als", "wo", "während"], c: 1, model: "B – wo (Ortsangabe)", rule: "<div class=rbox>wo(hin), woher → lokale Nebensätze.</div>" },
    { sub: "Satzverbindung: Reihenfolge", type: "mc", q: "\u201eEr duschte. Danach frühstückte er.\" → Eine Aussage?", o: ["Nachdem er gefrühstückt hatte, duschte er.", "Nachdem er geduscht hatte, frühstückte er.", "Während er duschte, frühstückte er."], c: 1, model: "B – Nachdem er geduscht hatte, frühstückte er.", rule: "<div class=rbox>Reihenfolge: zuerst duschen, dann frühstücken → nachdem (Vorzeitigkeit).</div>" },
    { sub: "Indirekter Fragesatz", type: "mc", q: "\u201eIch fragte mich, ___ das alles enden würde.\"", o: ["ob", "wenn", "wann"], c: 2, model: "C – wann (Zeitfrage)", rule: "<div class=rbox>Indirekter Fragesatz: wer, was, wann, wo, wie → Fragewort leitet NS ein.</div>" },
    { sub: "Irrealer Konditionalsatz", type: "mc", q: "\u201e___ ich Zeit hätte, würde ich dir helfen.\"", o: ["Wenn", "Als", "Dass"], c: 0, model: "A – Wenn (irrealer Konditionalsatz mit Konjunktiv II)", rule: "<div class=rbox>Irrealer Konditionalsatz: wenn + Konjunktiv II.</div>" },
    { sub: "Satzgefüge erkennen", type: "mc", q: "\u201eEr lachte, weil er die Lösung kannte.\" – Struktur?", o: ["Parataxe (HS + HS)", "Hypotaxe (HS + NS)"], c: 1, model: "B – Hypotaxe (HS: Er lachte + NS: weil er…)", rule: "<div class=rbox>Hypotaxe = Satzgefüge aus HS + NS. Parataxe = zwei gleichwertige HS.</div>" },
    { sub: "Verb-End-Stellung", type: "mc", q: "Welcher Satz ist korrekt formuliert?", o: ["Ich weiß, dass er morgen kommt.", "Ich weiß, dass er kommt morgen.", "Ich weiß, er kommt morgen dass."], c: 0, model: "A – Im Nebensatz steht das Verb am Ende.", rule: "<div class=rbox>Im Nebensatz (nach 'dass', 'weil', 'obwohl' etc.) steht das finite Verb am Ende.</div>" },
    { sub: "Verb-Zweit-Stellung", type: "mc", q: "Welcher Satz ist korrekt?", o: ["Gestern bin ich in die Stadt gegangen.", "Gestern ich bin in die Stadt gegangen.", "In die Stadt gegangen ich bin gestern."], c: 0, model: "A – Verb an Position 2 (Gestern [1] – bin [2] – ich…)", rule: "<div class=rbox>Im Hauptsatz steht das finite Verb immer an zweiter Stelle (V2-Stellung).</div>" },
    { sub: "Konsekutivkonjunktion", type: "mc", q: "\u201eEr lief so schnell, ___ er den Bus noch erwischte.\"", o: ["dass", "sodass", "damit"], c: 1, model: "B – sodass (Folge)", rule: "<div class=rbox>sodass = Konsekutivkonjunktion (Folge). 'damit' drückt Absicht aus.</div>" },
    { sub: "als vs. wenn", type: "mc", q: "\u201e___ ich als Kind war, spielte ich viel draußen.\"", o: ["Als", "Wenn", "Während"], c: 0, model: "A – Als (einmaliger Zeitabschnitt in der Vergangenheit)", rule: "<div class=rbox>als = einmalige Handlung/Zeitraum in der Vergangenheit. wenn = Wiederholung oder Zukunft.</div>" },
    { sub: "Relativsatz", type: "mc", q: "\u201eDas ist der Schüler, ___ morgen eine Prüfung hat.\"", o: ["den", "der", "dem"], c: 1, model: "B – der (Bezugswort 'Schüler' = Maskulinum, Nominativ im Relativsatz)", rule: "<div class=rbox>Relativpronomen richtet sich nach Genus und Kasus des Bezugsworts. Schüler = mask. → der (Nom.).</div>" },
    { sub: "Relativpronomen Kasus", type: "mc", q: "\u201eDas Buch, ___ ich lese, ist spannend.\"", o: ["das", "dem", "den"], c: 0, model: "A – das (Buch = Neutrum, Akkusativ im Relativsatz – Objekt von 'lese')", rule: "<div class=rbox>Buch = Neutrum. Im Relativsatz ist es Akkusativobjekt (ich lese es) → das.</div>" },
    { sub: "Konjunktionaladverb Stellung", type: "mc", q: "Welcher Satz ist korrekt?", o: ["Er war müde, deshalb er schlafen ging.", "Er war müde, deshalb ging er schlafen.", "Er war müde, er deshalb schlafen ging."], c: 1, model: "B – deshalb → Verb an Pos. 2 danach: ging", rule: "<div class=rbox>Nach Konjunktionaladverbien (deshalb, trotzdem) steht das Verb an zweiter Stelle.</div>" },
    { sub: "Nebensatz mit Infinitiv", type: "mc", q: "\u201eEr kaufte Blumen, ___ ihr eine Freude zu machen.\"", o: ["um", "damit", "weil"], c: 0, model: "A – um … zu (wenn Subjekt gleich bleibt)", rule: "<div class=rbox>um … zu + Infinitiv = Absicht, wenn Subjekt in HS und NS identisch ist. damit = wenn unterschiedliche Subjekte.</div>" },
    { sub: "Temporalsatz: sobald vs. nachdem", type: "mc", q: "\u201eRuf mich an, ___ du angekommen bist.\"", o: ["sobald", "nachdem", "seitdem"], c: 0, model: "A – sobald (unmittelbar nach Ankunft)", rule: "<div class=rbox>sobald = unmittelbar danach. nachdem = Vorzeitigkeit mit zeitlichem Abstand. seitdem = andauernde Folge.</div>" },
    { sub: "Parataxe erkennen", type: "mc", q: "\u201eEr sang, sie tanzte.\" – Struktur?", o: ["Hypotaxe", "Parataxe"], c: 1, model: "B – Parataxe (zwei gleichwertige HS, kein NS)", rule: "<div class=rbox>Parataxe (Satzreihe): zwei oder mehr Hauptsätze nebeneinandergestellt.</div>" },
    { sub: "Bedingungssatz ohne 'wenn'", type: "mc", q: "Welcher Satz bedeutet dasselbe wie: 'Wenn du Zeit hast, komm vorbei.'?", o: ["Hast du Zeit, komm vorbei.", "Du hast Zeit, also komm vorbei.", "Komm vorbei, du hast Zeit."], c: 0, model: "A – Hast du Zeit, komm vorbei. (Inversion ohne 'wenn')", rule: "<div class=rbox>Konditionalsätze können ohne 'wenn' durch Verberststellung ausgedrückt werden.</div>" }
  
  ]
},

// ── ZEITFORMEN (TEMPORA) – bleibt MC ──
{
  id: "extra_zeitformen",
  title: "Zeitformen (Tempora)",
  emoji: "⏰",
  color: "#16a34a",
  qs: [
    { sub: "Präteritum", type: "mc", q: "Gestern ___ ich im Kino.", o: ["bin", "war", "werde sein"], c: 1, model: "B – war (Präteritum)", rule: "<div class=rbox>Zeitangabe 'gestern' → Vergangenheit. war = Präteritum von sein.</div>" },
    { sub: "Perfekt", type: "mc", q: "Ich ___ den Test bereits geschrieben.", o: ["habe", "bin", "werde"], c: 0, model: "A – habe … geschrieben (Perfekt)", rule: "<div class=rbox>haben + Partizip II = Perfekt (schreiben → geschrieben).</div>" },
    { sub: "Futur I", type: "mc", q: "Morgen ___ wir nach Berlin fahren.", o: ["werden", "sind", "waren"], c: 0, model: "A – werden … fahren (Futur I)", rule: "<div class=rbox>werden + Infinitiv = Futur I.</div>" },
    { sub: "Plusquamperfekt", type: "mc", q: "Bevor er kam, ___ ich schon gegessen.", o: ["habe", "hatte", "bin"], c: 1, model: "B – hatte … gegessen (Plusquamperfekt)", rule: "<div class=rbox>Vorzeitigkeit zur Vergangenheit → Plusquamperfekt: hatte + Partizip II.</div>" },
    { sub: "Präsens", type: "mc", q: "Er ___ gerade ein Buch.", o: ["liest", "las", "hat gelesen"], c: 0, model: "A – liest (Präsens)", rule: "<div class=rbox>gerade = laufende Handlung im Präsens.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "\u201eIch schwamm.\" – Welches Tempus?", o: ["Präsens", "Präteritum", "Perfekt"], c: 1, model: "B – Präteritum", rule: "<div class=rbox>schwamm = Präteritum von schwimmen (starkes Verb).</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "\u201eDu hast gesungen.\" – Welches Tempus?", o: ["Präteritum", "Perfekt", "Futur"], c: 1, model: "B – Perfekt", rule: "<div class=rbox>hast + Partizip II (gesungen) = Perfekt.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "\u201eEr wird gewinnen.\" – Welches Tempus?", o: ["Futur I", "Futur II", "Präsens"], c: 0, model: "A – Futur I", rule: "<div class=rbox>wird + Infinitiv = Futur I.</div>" },
    { sub: "Vorzeitigkeit", type: "mc", q: "Was ist die Vorzeitigkeit zum Präsens?", o: ["Perfekt", "Plusquamperfekt", "Futur"], c: 0, model: "A – Perfekt", rule: "<div class=rbox>Relativ zur Gegenwart (Präsens) → das Vorher ist das Perfekt.</div>" },
    { sub: "Vorzeitigkeit", type: "mc", q: "Was ist die Vorzeitigkeit zum Präteritum?", o: ["Perfekt", "Plusquamperfekt", "Präsens"], c: 1, model: "B – Plusquamperfekt", rule: "<div class=rbox>Relativ zur Vergangenheit (Präteritum) → das Vorher ist das Plusquamperfekt.</div>" },
    { sub: "Perfekt mit sein", type: "mc", q: "Ich ___ nach Hause gegangen.", o: ["habe", "bin", "werde"], c: 1, model: "B – bin … gegangen", rule: "<div class=rbox>gehen = Bewegungsverb → Perfekt mit sein: bin gegangen.</div>" },
    { sub: "Perfekt", type: "mc", q: "Du ___ mir das versprochen.", o: ["hast", "bist", "wirst"], c: 0, model: "A – hast … versprochen", rule: "<div class=rbox>versprechen → Perfekt mit haben: hast versprochen.</div>" },
    { sub: "Passiv Präteritum", type: "mc", q: "Das Haus ___ 1920 gebaut.", o: ["wurde", "wird", "ist"], c: 0, model: "A – wurde (Präteritum Passiv)", rule: "<div class=rbox>1920 = Vergangenheit → Präteritum Passiv: wurde gebaut.</div>" },
    { sub: "Futur I", type: "mc", q: "Wir ___ bald fertig sein.", o: ["werden", "sind", "waren"], c: 0, model: "A – werden … sein", rule: "<div class=rbox>bald → Zukunft. werden + Infinitiv = Futur I.</div>" },
    { sub: "Perfekt", type: "mc", q: "Er ___ den ganzen Tag geschlafen.", o: ["hat", "ist", "war"], c: 0, model: "A – hat … geschlafen", rule: "<div class=rbox>schlafen → kein Bewegungsverb → Perfekt mit haben: hat geschlafen.</div>" },
    { sub: "Perfekt mit sein", type: "mc", q: "Sie ___ sehr schnell gerannt.", o: ["ist", "hat", "wird"], c: 0, model: "A – ist … gerannt", rule: "<div class=rbox>rennen = Bewegungsverb → Perfekt mit sein: ist gerannt.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "\u201eIch dachte.\" – Welches Tempus?", o: ["Präsens", "Präteritum", "Perfekt"], c: 1, model: "B – Präteritum", rule: "<div class=rbox>dachte = Präteritum von denken (gemischtes Verb).</div>" },
    { sub: "Futur II", type: "mc", q: "\u201eWir werden geschlafen haben.\" – Welches Tempus?", o: ["Futur I", "Futur II"], c: 1, model: "B – Futur II", rule: "<div class=rbox>werden + Partizip II + haben/sein = Futur II (vollendete Zukunft).</div>" },
    { sub: "Futur I", type: "mc", q: "Ich ___ dich morgen anrufen.", o: ["werde", "habe", "bin"], c: 0, model: "A – werde … anrufen", rule: "<div class=rbox>morgen → Zukunft. werden + Infinitiv = Futur I.</div>" },
    { sub: "Perfekt", type: "mc", q: "Er ___ es nicht gewusst.", o: ["hat", "ist", "war"], c: 0, model: "A – hat … gewusst", rule: "<div class=rbox>wissen → Perfekt mit haben: hat … gewusst.</div>" },
{ sub: "Präteritum starkes Verb", type: "mc", q: "\u201eEr ___ das Buch schnell durch.\" (lesen, Präteritum)", o: ["leste", "las", "gelesen"], c: 1, model: "B – las (Präteritum von lesen, starkes Verb)", rule: "<div class=rbox>lesen → Präteritum: las (starkes Verb mit Stammvokaländerung e→a).</div>" },
    { sub: "Perfekt mit sein", type: "mc", q: "\u201eSie ___ in die Küche gegangen.\"", o: ["hat", "ist", "wird"], c: 1, model: "B – ist … gegangen", rule: "<div class=rbox>gehen = Bewegungsverb → Perfekt mit sein.</div>" },
    { sub: "Präteritum gemischtes Verb", type: "mc", q: "\u201eEr ___ an eine Lösung.\" (denken, Präteritum)", o: ["denkete", "dachte", "gedacht"], c: 1, model: "B – dachte (gemischtes Verb: Umlaut + -te)", rule: "<div class=rbox>denken → Präteritum: dachte (gemischtes Verb).</div>" },
    { sub: "Plusquamperfekt erkennen", type: "mc", q: "\u201eNachdem die Sonne ___, gingen wir raus.\" (untergehen)", o: ["untergeht", "unterging", "untergegangen war"], c: 2, model: "C – untergegangen war (Plusquamperfekt)", rule: "<div class=rbox>nachdem → Vorzeitigkeit → Plusquamperfekt im NS: war + Partizip II.</div>" },
    { sub: "Futur II", type: "mc", q: "\u201eBis morgen ___ er die Aufgabe fertig gestellt haben.\" (welches Tempus?)", o: ["Futur I", "Futur II", "Perfekt"], c: 1, model: "B – Futur II (abgeschlossene Handlung in der Zukunft)", rule: "<div class=rbox>Futur II = wird + Partizip II + haben/sein → Handlung bis zu einem Zeitpunkt in der Zukunft abgeschlossen.</div>" },
    { sub: "Perfekt mit haben/sein", type: "mc", q: "\u201eIch ___ eingeschlafen.\"", o: ["habe", "bin", "werde"], c: 1, model: "B – bin … eingeschlafen (Zustandswechsel)", rule: "<div class=rbox>Verben mit Zustandsveränderung (einschlafen, aufwachen) → Perfekt mit sein.</div>" },
    { sub: "Präteritum: schwaches Verb", type: "mc", q: "\u201eSie ___ das Ergebnis.\" (fragen, Präteritum)", o: ["fragete", "fragte", "gefragt"], c: 1, model: "B – fragte (schwaches Verb: Stamm + -te)", rule: "<div class=rbox>Schwache Verben: Stamm + -te im Präteritum: fragen → fragte.</div>" },
    { sub: "Plusquamperfekt bilden", type: "mc", q: "\u201eAls wir ankamen, ___ er bereits gegessen.\"", o: ["hat", "hatte", "wird haben"], c: 1, model: "B – hatte … gegessen (Plusquamperfekt)", rule: "<div class=rbox>Vorzeitigkeit zur Vergangenheit → Plusquamperfekt: hatte + Partizip II.</div>" },
    { sub: "Tempus: Erzählung", type: "mc", q: "In einer Erzählung steht die Haupthandlung meist im:", o: ["Präteritum", "Plusquamperfekt", "Futur"], c: 0, model: "A – Präteritum (Erzähltempus)", rule: "<div class=rbox>In schriftlichen Erzählungen und Berichten ist das Präteritum das typische Erzähltempus.</div>" },
    { sub: "Präsens als Zukunft", type: "mc", q: "\u201eIch fahre morgen weg.\" – Welches Tempus, welche Bedeutung?", o: ["Präsens, Gegenwart", "Präsens, Zukunft", "Futur I, Zukunft"], c: 1, model: "B – Präsens mit Zukunftsbedeutung (durch Zeitadverb 'morgen')", rule: "<div class=rbox>Präsens + Zeitadverb (morgen, bald, nächste Woche) kann Zukunft ausdrücken.</div>" },
    { sub: "Perfekt von starkem Verb", type: "mc", q: "\u201eDu ___ ihn gestern getroffen.\"", o: ["hast", "bist", "wirst"], c: 0, model: "A – hast … getroffen (treffen → Perfekt mit haben)", rule: "<div class=rbox>treffen = transitives Verb → Perfekt mit haben.</div>" },
    { sub: "Futur I bilden", type: "mc", q: "\u201eSie ___ das Buch morgen zurückgeben.\"", o: ["wird", "hat", "war"], c: 0, model: "A – wird … zurückgeben (Futur I: werden + Infinitiv)", rule: "<div class=rbox>Futur I: werden + Infinitiv.</div>" },
    { sub: "Tempus erkennen", type: "mc", q: "\u201eEr hatte das Geld verloren.\" – Tempus?", o: ["Perfekt", "Plusquamperfekt", "Präteritum"], c: 1, model: "B – Plusquamperfekt (hatte + Partizip II)", rule: "<div class=rbox>hatte + Partizip II = Plusquamperfekt.</div>" },
    { sub: "Präteritum: sein", type: "mc", q: "\u201eEs ___ einmal ein König.\" (Märchenanfang)", o: ["ist", "war", "wäre"], c: 1, model: "B – war (Präteritum von sein)", rule: "<div class=rbox>Es war einmal → typischer Märchenanfang im Präteritum.</div>" },
    { sub: "Futur II: Vermutung", type: "mc", q: "\u201eEr wird wohl schon nach Hause gegangen sein.\" – Was drückt das aus?", o: ["Gewissheit", "Vermutung", "Aufforderung"], c: 1, model: "B – Vermutung (wohl + Futur II)", rule: "<div class=rbox>Futur II mit 'wohl' drückt eine Vermutung über vergangene oder abgeschlossene Handlungen aus.</div>" },
    { sub: "Tempus Passiv", type: "mc", q: "\u201eDie Hausaufgaben waren schon gemacht.\" – Welche Passivform?", o: ["Vorgangspassiv Präteritum", "Zustandspassiv Präteritum"], c: 1, model: "B – Zustandspassiv Präteritum (waren gemacht = Zustand)", rule: "<div class=rbox>Zustandspassiv im Präteritum: waren + Partizip II.</div>" },
    { sub: "Perfekt mit Zustandswechsel", type: "mc", q: "\u201eEr ___ krank geworden.\"", o: ["hat", "ist", "war"], c: 1, model: "B – ist … geworden (Zustandsveränderung → sein)", rule: "<div class=rbox>werden → Zustandsveränderung → Perfekt mit sein: ist geworden.</div>" },
    { sub: "Präteritum: unregelmäßig", type: "mc", q: "\u201eEr ___ das Licht aus.\" (ausmachen, Präteritum)", o: ["machte aus", "machte", "gemacht"], c: 0, model: "A – machte aus (trennbares Verb im Präteritum)", rule: "<div class=rbox>Trennbare Verben: Präteritum = Stamm + -te + Vorsilbe am Ende: machte aus.</div>" },
    { sub: "Futur I: Vermutung", type: "mc", q: "\u201eEr wird gerade schlafen.\" – Was drückt das aus?", o: ["Zukunft", "Vermutung (Gegenwart)", "Vergangenheit"], c: 1, model: "B – Vermutung über Gegenwartshandlung", rule: "<div class=rbox>Futur I ohne Zeitangabe drückt oft eine Vermutung über die Gegenwart aus (er wird gerade… = er schläft wahrscheinlich).</div>" },
    { sub: "Präsens: historisch", type: "mc", q: "\u201e1945 fällt Berlin.\" (historisches Präsens) – Welche Wirkung?", o: ["Distanz", "Vergegenwärtigung / Unmittelbarkeit", "Zukunftsbezug"], c: 1, model: "B – Vergegenwärtigung (historisches Präsens macht Vergangenheit lebendig)", rule: "<div class=rbox>Historisches Präsens: Vergangenheit wird durch Präsensform unmittelbar und lebendig dargestellt.</div>" }
  
  ]
},

// ── GETRENNT- UND ZUSAMMENSCHREIBUNG (überarbeitet: cross) ──
{
  id: "extra_getrennt",
  title: "Getrennt- und Zusammenschreibung",
  emoji: "🧩",
  color: "#ca8a04",
  qs: [
    {
      sub: "Sportarten / feste Verbindungen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Lass uns heute (Eis laufen / eislaufen).",
        "Ich werde (Rad fahren / radfahren)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "eislaufen, radfahren → Sportarten als feste Gefüge → zusammen.",
      rule: "<div class=rbox>Sportarten und feste Tätigkeitsbezeichnungen werden als Verb oft zusammengeschrieben: eislaufen, radfahren, kegeln gehen? Aber 'Rad fahren' ist getrennt? Achtung: Als Verb 'radfahren' ist zusammen (Duden erlaubt beides, aber empfohlen: radfahren). Hier ist die Sportart gemeint, daher zusammen. Im Zweifel die Regel: Wenn das Nomen seine Selbstständigkeit verloren hat, wird zusammengeschrieben.</div>"
    },
    {
      sub: "übertragene Bedeutung",
      type: "cross",
      q: "Entscheide: getrennt (wörtlich) oder zusammen (übertragen)?",
      rows: [
        "Er ist in der 9. Klasse (sitzen geblieben / sitzengeblieben). (nicht versetzt)",
        "Du sollst das Projekt (niedrig halten / niedrighalten). (begrenzen)",
        "Das ist (schwer wiegend / schwerwiegend). (ernst)",
        "Er will (fest halten / festhalten) am Plan.",
        "Ich kann das (gut heißen / gutheißen). (zustimmen)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1, 1, 1],
      model: "sitzengeblieben, niedrighalten, schwerwiegend, festhalten, gutheißen → übertragene Bedeutung → zusammen.",
      rule: "<div class=rbox>Bei übertragener Bedeutung werden Verbindungen aus Adjektiv/Partikel und Verb oft zusammengeschrieben (z.B. sitzenbleiben = nicht versetzt werden, gutheißen = zustimmen).</div>"
    },
    {
      sub: "kennenlernen",
      type: "mc",
      q: "\u201eIch möchte dich gerne (kennen lernen / kennenlernen).\"",
      o: ["kennen lernen", "kennenlernen", "Beides ist korrekt"],
      c: 2,
      model: "C – Beides korrekt (Empfehlung: kennenlernen)",
      rule: "<div class=rbox>Beide Schreibweisen sind laut Duden korrekt. Zusammenschreibung ist empfohlen.</div>"
    },
    {
      sub: "Nomen + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er kann sehr gut (Auto fahren / Autofahren).",
        "Ich werde (Rad fahren / radfahren)." // schon oben, aber zur Sicherheit
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 1], // Auto fahren (Verb) getrennt; radfahren (Sport) zusammen
      model: "Auto fahren (Verb-Konstruktion) → getrennt; radfahren (Sportart) → zusammen.",
      rule: "<div class=rbox>Bei 'Nomen + Verb' wird meist getrennt geschrieben, wenn das Nomen Objekt ist (Auto fahren, Klavier spielen). Bei festen Sportarten kann auch Zusammenschreibung vorkommen (radfahren).</div>"
    },
    {
      sub: "Verb + gehen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Wir müssen heute (einkaufen gehen / einkaufengehen).",
        "Sie will (spazieren gehen / spazierengehen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 0],
      model: "einkaufen gehen, spazieren gehen → zwei Verben, lockere Verbindung → getrennt.",
      rule: "<div class=rbox>Verbindungen aus zwei Verben (einkaufen gehen, spazieren gehen) werden getrennt geschrieben.</div>"
    },
    {
      sub: "hoch + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Das ist (hoch interessant / hochinteressant)."],
      cols: ["getrennt", "zusammen"],
      correct: [1],
      model: "hochinteressant → übertragene Steigerung → zusammen.",
      rule: "<div class=rbox>Verbindungen mit 'hoch' + Adjektiv werden bei übertragener Bedeutung zusammengeschrieben: hochinteressant, höchstpersönlich.</div>"
    },
    {
      sub: "beisammen + sein",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Wir wollen (beisammen sein / beisammensein)."],
      cols: ["getrennt", "zusammen"],
      correct: [0],
      model: "beisammen sein → Adverb + sein → getrennt.",
      rule: "<div class=rbox>Adverb + sein wird getrennt geschrieben (da sein, beisammen sein).</div>"
    },
    {
      sub: "wiederholt",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Er hat (wieder holt / wiederholt) gelogen."],
      cols: ["getrennt", "zusammen"],
      correct: [1],
      model: "wiederholt (Adverb) → zusammen. (wieder holen = zurückholen → getrennt)",
      rule: "<div class=rbox>'wiederholt' im Sinne von 'mehrmals' wird zusammengeschrieben. 'wieder holen' (zurückholen) getrennt.</div>"
    },
    {
      sub: "fallen lassen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Sie lässt das Glas (fallen / fallenlassen)."],
      cols: ["getrennt", "zusammen"],
      correct: [0],
      model: "fallen lassen (wörtlich) → getrennt.",
      rule: "<div class=rbox>Wörtliche Bedeutung → getrennt: fallen lassen, liegen lassen.</div>"
    },
    {
      sub: "Partikelverben",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Komm bitte (her ein / herein).",
        "Er hat den Termin (bei behalten / beibehalten).",
        "Wir (fern sehen / fernsehen) heute."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1],
      model: "herein, beibehalten, fernsehen → Partikelverben → zusammen.",
      rule: "<div class=rbox>Untrennbare und trennbare Partikelverben werden im Infinitiv zusammengeschrieben: herein, beibehalten, fernsehen.</div>"
    },
    {
      sub: "Adverb + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: ["Er ist (völlig wertlos / völligwertlos)."],
      cols: ["getrennt", "zusammen"],
      correct: [0],
      model: "völlig wertlos → Adverb + Adjektiv → getrennt.",
      rule: "<div class=rbox>Adverbien + Adjektive bleiben in der Regel getrennt: sehr schön, völlig sinnlos.</div>"
    },
    {
      sub: "Nominalisierung",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen? (als Nomen)",
      rows: ["Das (Zusammen kommen / Zusammenkommen) war schön."],
      cols: ["getrennt", "zusammen"],
      correct: [1],
      model: "das Zusammenkommen → nominalisierter Infinitiv → zusammen und groß.",
      rule: "<div class=rbox>Nominalisierte Infinitive werden zusammengeschrieben und groß: das Zusammenkommen, das Spazierengehen.</div>"
    },
{
      sub: "Verb + Adverb (wörtlich vs. übertragen)",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er hat sie (fallen lassen / fallenlassen). (wörtlich)",
        "Er hat sie (fallen lassen / fallenlassen). (übertragen: aufgegeben)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 1],
      model: "wörtlich: fallen lassen (getrennt); übertragen: fallenlassen (aufgeben) zusammen.",
      rule: "<div class=rbox>Wörtliche Bedeutung → getrennt (fallen lassen). Übertragene Bedeutung → zusammen (fallenlassen = aufgeben).</div>"
    },
    {
      sub: "auf + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er ist (aufmerksam / auf merksam) geworden.",
        "Das Gespräch war sehr (aufschlussreich / auf schlussreich)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "aufmerksam, aufschlussreich → Ableitungen mit 'auf' → zusammen.",
      rule: "<div class=rbox>Präfix + Adjektiv bei Ableitungen: aufmerksam, aufschlussreich → zusammen.</div>"
    },
    {
      sub: "liegen lassen vs. liegenlassen",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das Buch liegt auf dem Boden – ich lasse es (liegen / liegen lassen). (wörtlich)",
        "Er hat sie einfach (liegen gelassen / liegengelassen). (übertragen: ignoriert)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 1],
      model: "wörtlich: liegen lassen. Übertragen: liegengelassen (ignoriert).",
      rule: "<div class=rbox>liegen lassen (wörtlich) → getrennt. liegengelassen (im Stich lassen) → zusammen.</div>"
    },
    {
      sub: "Komposita vs. freie Verbindung",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er will (Schach spielen / Schachspielen).",
        "Er will (Klavier spielen / Klavierspielen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 0],
      model: "Schach spielen, Klavier spielen → Nomen + Verb, Nomen behält Eigenständigkeit → getrennt.",
      rule: "<div class=rbox>Nomen + spielen / schreiben / fahren etc. → getrennt, da das Nomen selbstständig bleibt (Klavier spielen, Schach spielen).</div>"
    },
    {
      sub: "auseinander + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Sie haben sich (auseinander gelebt / auseinandergelebt).",
        "Die Puzzleteile sind (auseinander gefallen / auseinandergefallen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "auseinandergelebt, auseinandergefallen → Partikelverb → zusammen.",
      rule: "<div class=rbox>auseinander- als Verbpartikel → zusammen im Infinitiv und Partizip: auseinanderleben, auseinanderfallen.</div>"
    },
    {
      sub: "zusammen + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Wir wollen (zusammen arbeiten / zusammenarbeiten).",
        "Sie arbeiten (zusammen / zusammen). (Adverb)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "zusammenarbeiten (trennbares Partikelverb) → im Infinitiv zusammen. Als Adverb: getrennt.",
      rule: "<div class=rbox>zusammenarbeiten, zusammenleben etc. → Partikelverb → zusammen im Infinitiv. 'wir arbeiten zusammen' (zusammen = Adverb) → getrennt.</div>"
    },
    {
      sub: "Infinitiv mit 'zu'",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Es ist wichtig, (zusammenzuarbeiten / zusammen zu arbeiten).",
        "Er versucht, (aufzustehen / auf zu stehen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "zusammenzuarbeiten, aufzustehen → 'zu' tritt zwischen Verbpartikel und Verb → zusammen.",
      rule: "<div class=rbox>Bei Partikelverben tritt 'zu' zwischen Partikel und Verbstamm und bleibt zusammengeschrieben: aufzustehen, zusammenzuarbeiten.</div>"
    },
    {
      sub: "halb + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Sie war (halbherzig / halb herzig) dabei.",
        "Das ist ein (halbjährlicher / halb jährlicher) Termin."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "halbherzig, halbjährlich → feste Komposita → zusammen.",
      rule: "<div class=rbox>halb + Adjektiv bildet feste Komposita: halbherzig, halbjährlich, halbstündig → zusammen.</div>"
    },
    {
      sub: "los + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Wir können (losfahren / los fahren).",
        "Er fährt (los / los). (Adverb, trennbar)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "losfahren (Infinitiv → zusammen); fährt los (konjugiert, trennbar → getrennt).",
      rule: "<div class=rbox>Trennbare Verben: im Infinitiv zusammen (losfahren), bei Konjugation getrennt (er fährt los).</div>"
    },
    {
      sub: "irgend + Wort",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "(Irgendwer / Irgend wer) hat das getan.",
        "(Irgendwie / Irgend wie) klappt das schon.",
        "(Irgend etwas / Irgendetwas) fehlt hier."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1],
      model: "irgendwer, irgendwie, irgendetwas → immer zusammen.",
      rule: "<div class=rbox>irgend- + Pronomen/Adverb → immer zusammengeschrieben: irgendwer, irgendwie, irgendetwas, irgendwo.</div>"
    },
    {
      sub: "weit + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das ist (weitgehend / weit gehend) korrekt.",
        "Er ist (weit gereist / weitgereist)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "weitgehend, weitgereist → feste Verbindungen → zusammen.",
      rule: "<div class=rbox>weitgehend, weitgereist → feste Zusammensetzungen → zusammen.</div>"
    },
    {
      sub: "ab + Verb",
      type: "cross",
      q: "Entscheide (Infinitiv): getrennt oder zusammen?",
      rows: [
        "Er will die Aufgabe (abgeben / ab geben).",
        "Wir möchten (abfahren / ab fahren)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "abgeben, abfahren → Partikelverben → im Infinitiv zusammen.",
      rule: "<div class=rbox>Partikelverben mit ab- → im Infinitiv zusammen: abgeben, abfahren, abschreiben.</div>"
    },
    {
      sub: "über + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er denkt (darüber nach / darüber nachzudenken). (Infinitiv mit zu)",
        "Es ist wichtig, (nachzudenken / nach zu denken)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 1],
      model: "darüber nachdenken → trennbar (getrennt bei Konjugation). nachzudenken → Infinitiv mit zu zusammen.",
      rule: "<div class=rbox>Trennbare Verben: getrennt bei Konjugation, zusammen im Infinitiv. 'zu' tritt zwischen Partikel und Stamm.</div>"
    },
    {
      sub: "gut + Verb (übertragen)",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das kann ich (gutheißen / gut heißen). (zustimmen)",
        "Er hat mich (gut heißen / gutheißen). (freundlich begrüßt)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "gutheißen (zustimmen) → übertragen → zusammen. gut heißen (freundlich begrüßen) → wörtlich → getrennt.",
      rule: "<div class=rbox>gutheißen (= zustimmen) → übertragene Bedeutung → zusammen. gut heißen (= nett begrüßen) → wörtlich → getrennt.</div>"
    },
    {
      sub: "fern + halten",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er will ihn (fernhalten / fern halten). (auf Distanz halten)",
        "Er hält ihn (fern / fern). (Konjugation)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "fernhalten → Infinitiv zusammen; hält fern → Konjugation getrennt.",
      rule: "<div class=rbox>Trennbare Partikelverben: im Infinitiv zusammen (fernhalten), konjugiert getrennt (hält fern).</div>"
    },
    {
      sub: "voll + Adjektiv vs. Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das war (vollkommen / voll kommen) überraschend.",
        "Das Glas ist (voll / voll gefüllt)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "vollkommen → Adjektiv/Adverb (feste Bildung) → zusammen. voll gefüllt → Adverb + Adjektiv → getrennt.",
      rule: "<div class=rbox>vollkommen, vollständig, vollendet → feste Wortbildungen → zusammen. voll gefüllt, voll beladen → Adverb + Adjektiv → getrennt.</div>"
    },
    {
      sub: "kurz + schreiben",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Bitte (kurzfassen / kurz fassen)!",
        "Das Konzert war (kurz weilig / kurzweilig)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [0, 1],
      model: "kurz fassen → kurz + Verb → getrennt. kurzweilig → festes Adjektiv → zusammen.",
      rule: "<div class=rbox>kurz + Verb → getrennt (kurz fassen, kurz schneiden). kurzweilig, kurzfristig → feste Adjektive → zusammen.</div>"
    },
    {
      sub: "so + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das ist (sogenannt / so genannt). (als solches bezeichnet)",
        "Das war (so genannte / sogenannte) Glück."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "sogenannt, sogenannte → feste Verbindung → zusammen.",
      rule: "<div class=rbox>sogenannt(e) → feste Zusammensetzung → immer zusammen.</div>"
    },
    {
      sub: "schwer + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das Problem ist (schwerwiegend / schwer wiegend).",
        "Er ist (schwer verletzt / schwerverletzt)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "schwerwiegend (ernsthafte Bedeutung) → zusammen. schwerverletzt (intensiv verletzt) → zusammen.",
      rule: "<div class=rbox>schwerwiegend, schwerverletzt → Intensivierungen → zusammen.</div>"
    },
    {
      sub: "Nomen + Verb (Sonderfälle)",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er will (Eis laufen / eislaufen).",
        "Wir werden (Schlittschuh laufen / Schlittschuhlaufen).",
        "Sie kann gut (Kopf stehen / Kopfstehen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0, 1],
      model: "eislaufen → zusammen (Eis hat selbstständige Bedeutung verloren). Schlittschuh laufen → getrennt. Kopfstehen → zusammen.",
      rule: "<div class=rbox>Wenn das Nomen seine Eigenständigkeit verloren hat → zusammen (eislaufen). Bei erkennbaren Nomen als Objekt → getrennt (Schlittschuh laufen).</div>"
    },
    {
      sub: "Adjektiv + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das war (bitterernst / bitter ernst).",
        "Er ist (taubstumm / taub stumm).",
        "Das ist (eiskalt / eis kalt)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1],
      model: "bitterernst, taubstumm, eiskalt → Intensivierungen / feste Komposita → zusammen.",
      rule: "<div class=rbox>Adjektiv + Adjektiv als Intensivierung → zusammen: eiskalt, bitterernst, taubstumm.</div>"
    },
    {
      sub: "wieder + Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er will das (wiederholen / wieder holen). (nochmals sagen)",
        "Er will das (wiederholen / wieder holen). (zurückholen)"
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "wiederholen (nochmals sagen) → zusammen. wieder holen (zurückbringen) → getrennt.",
      rule: "<div class=rbox>wiederholen (= nochmals tun/sagen) → zusammen. wieder holen (= zurückholen) → getrennt.</div>"
    },
    {
      sub: "wohl + bekannt",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das ist (wohlbekannt / wohl bekannt).",
        "Er ist (wohlgesonnen / wohl gesonnen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "wohlbekannt, wohlgesonnen → feste Verbindungen → zusammen.",
      rule: "<div class=rbox>wohl + Adjektiv/Partizip als feste Verbindung → zusammen: wohlbekannt, wohlgesonnen, wohltuend.</div>"
    },
    {
      sub: "an + Verb",
      type: "cross",
      q: "Entscheide (Infinitiv): getrennt oder zusammen?",
      rows: [
        "Sie will ihn (anrufen / an rufen).",
        "Er möchte (anfangen / an fangen)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "anrufen, anfangen → Partikelverben → im Infinitiv zusammen.",
      rule: "<div class=rbox>Partikelverben mit an- → im Infinitiv zusammen: anrufen, anfangen, ankommen.</div>"
    },
    {
      sub: "irre + Adjektiv",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das ist (irreführend / irre führend).",
        "Das war (irre witzig / irrwitzig)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "irreführend, irrwitzig → Komposita → zusammen.",
      rule: "<div class=rbox>irre- als Vorsilbe → zusammen: irreführend, irrwitzig, irrsinnig.</div>"
    },
    {
      sub: "Nominalgruppe als Verb",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Er will das (in Frage stellen / infrage stellen).",
        "Das kommt (in Betracht / inbetracht) nicht."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 0],
      model: "infrage stellen → zusammen (Empfehlung). 'in Betracht kommen' → getrennt.",
      rule: "<div class=rbox>infrage stellen, infrage kommen → zusammen (neue Regelung). In Betracht kommen → noch getrennt (da als Präpositionalgruppe erkennbar).</div>"
    },
    {
      sub: "täglich / gelegentlich",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Das ist (alltäglich / all täglich).",
        "Er kommt (gelegentlich / gelegent lich)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1],
      model: "alltäglich, gelegentlich → feste Wortbildungen → zusammen.",
      rule: "<div class=rbox>Adverbien und Adjektive aus Wortbildungen → immer zusammen: alltäglich, gelegentlich, angeblich.</div>"
    },
    {
      sub: "Trickfrage: immer getrennt",
      type: "cross",
      q: "Entscheide: getrennt oder zusammen?",
      rows: [
        "Sie war (bitter kalt / bitterkalt) draußen.",
        "Er ist (blau äugig / blauäugig). (naiv)",
        "Das Kind ist (quiek vergnügt / quietschvergnügt)."
      ],
      cols: ["getrennt", "zusammen"],
      correct: [1, 1, 1],
      model: "bitterkalt, blauäugig, quietschvergnügt → Komposita → zusammen.",
      rule: "<div class=rbox>Adjektiv + Adjektiv als Intensivierung und feste Wortbildungen → zusammen.</div>"
    }
  
  ]
},

// ── STILMITTEL & RHETORIK – bleibt MC ──
{
  id: "extra_stilmittel",
  title: "Stilmittel & Rhetorik",
  emoji: "🎭",
  color: "#be185d",
  qs: [
    { sub: "Vergleich", type: "mc", q: "\u201eStark wie ein Bär.\" – Welches Stilmittel?", o: ["Metapher", "Vergleich", "Ironie"], c: 1, model: "B – Vergleich (wie)", rule: "<div class=rbox>Vergleich: Verwendung von wie. Metapher: ohne wie (z. B. er ist ein Bär).</div>" },
    { sub: "Personifikation", type: "mc", q: "\u201eDie Sonne lacht.\" – Welches Stilmittel?", o: ["Personifikation", "Alliteration", "Ellipse"], c: 0, model: "A – Personifikation", rule: "<div class=rbox>Personifikation: menschliche Eigenschaft wird auf unbelebtes Ding übertragen.</div>" },
    { sub: "Metapher", type: "mc", q: "\u201eEin Meer aus Tränen.\" – Welches Stilmittel?", o: ["Metapher", "Vergleich", "Klimax"], c: 0, model: "A – Metapher", rule: "<div class=rbox>Metapher: sprachliches Bild ohne wie. Meer = übertragen für sehr viele Tränen.</div>" },
    { sub: "Alliteration", type: "mc", q: "\u201eMilch macht müde Männer munter.\" – Stilmittel?", o: ["Alliteration", "Metapher", "Anapher"], c: 0, model: "A – Alliteration", rule: "<div class=rbox>Alliteration: Anlautwiederholung am Wortanfang (m/m/m/m).</div>" },
    { sub: "Hyperbel", type: "mc", q: "\u201eIch habe es dir tausendmal gesagt!\" – Stilmittel?", o: ["Hyperbel", "Ironie", "Symbol"], c: 0, model: "A – Hyperbel (Übertreibung)", rule: "<div class=rbox>Hyperbel: bewusste Übertreibung zur Verstärkung.</div>" },
    { sub: "Klimax", type: "mc", q: "\u201eVeni, vidi, vici.\" (Ich kam, sah, siegte) – Stilmittel?", o: ["Klimax", "Ellipse", "Alliteration"], c: 0, model: "A – Klimax", rule: "<div class=rbox>Klimax: Steigerung in einer Aufzählung (kommen → sehen → siegen = Steigerung).</div>" },
    { sub: "Litotes", type: "mc", q: "\u201eNicht unhübsch.\" (Bedeutet: sehr hübsch) – Stilmittel?", o: ["Litotes", "Metapher", "Vergleich"], c: 0, model: "A – Litotes", rule: "<div class=rbox>Litotes: Untertreibung durch doppelte Verneinung → verstärkt die positive Aussage.</div>" },
    { sub: "Ironie", type: "mc", q: "\u201eDas ist ja eine schöne Bescherung!\" (negativ gemeint) – Stilmittel?", o: ["Ironie", "Personifikation", "Hyperbel"], c: 0, model: "A – Ironie", rule: "<div class=rbox>Ironie: Das Gemeinte ist das Gegenteil des Gesagten.</div>" },
    { sub: "Ellipse", type: "mc", q: "\u201eEnde gut, alles gut.\" – Stilmittel?", o: ["Ellipse", "Metapher", "Vergleich"], c: 0, model: "A – Ellipse", rule: "<div class=rbox>Ellipse: Auslassung von Satzteilen (hier fehlt das Verb).</div>" },
    { sub: "Metapher", type: "mc", q: "\u201eWir müssen den Gürtel enger schnallen.\" – Stilmittel?", o: ["Metapher", "Alliteration", "Anapher"], c: 0, model: "A – Metapher", rule: "<div class=rbox>Metapher: sprachliches Bild für Sparmaßnahmen.</div>" },
    { sub: "Antithese", type: "mc", q: "\u201eHeiß und kalt.\" – Stilmittel?", o: ["Antithese", "Metapher", "Vergleich"], c: 0, model: "A – Antithese", rule: "<div class=rbox>Antithese: Gegenüberstellung von Gegensätzen.</div>" },
    { sub: "Klimax", type: "mc", q: "\u201eGestern, heute, morgen.\" – Stilmittel?", o: ["Klimax", "Anapher", "Symbol"], c: 0, model: "A – Klimax", rule: "<div class=rbox>Klimax: Steigerung / zeitliche Abfolge als Aufzählung.</div>" },
    { sub: "Euphemismus", type: "mc", q: "\u201eEr ist von uns gegangen.\" (für: gestorben) – Stilmittel?", o: ["Euphemismus", "Hyperbel", "Ironie"], c: 0, model: "A – Euphemismus", rule: "<div class=rbox>Euphemismus: Beschönigung eines unangenehmen Begriffs.</div>" },
    { sub: "Symbol", type: "mc", q: "\u201eEin Herz für Kinder.\" (Herz als …) – Stilmittel?", o: ["Symbol", "Metapher", "Vergleich"], c: 0, model: "A – Symbol", rule: "<div class=rbox>Symbol: ein Bild steht stellvertretend für eine Idee (Herz = Liebe/Fürsorge).</div>" },
    { sub: "Antithese", type: "mc", q: "\u201eDas Glas ist halb leer / halb voll.\" – Stilmittel?", o: ["Antithese", "Ironie", "Ellipse"], c: 0, model: "A – Antithese", rule: "<div class=rbox>Antithese: zwei gegensätzliche Perspektiven auf dasselbe.</div>" },
    { sub: "Rhetorische Frage", type: "mc", q: "\u201eBist du blöd?\" (Frage, auf die man keine Antwort erwartet) – Stilmittel?", o: ["Rhetorische Frage", "Alliteration", "Hyperbel"], c: 0, model: "A – Rhetorische Frage", rule: "<div class=rbox>Rhetorische Frage: wird gestellt, ohne eine echte Antwort zu erwarten.</div>" },
    { sub: "Repetitio", type: "mc", q: "\u201eWarten, warten, warten.\" – Stilmittel?", o: ["Repetitio", "Klimax", "Vergleich"], c: 0, model: "A – Repetitio", rule: "<div class=rbox>Repetitio: Wiederholung desselben Wortes zur Betonung.</div>" },
    { sub: "Personifikation", type: "mc", q: "\u201eVäterchen Frost.\" – Stilmittel?", o: ["Personifikation", "Metapher", "Alliteration"], c: 0, model: "A – Personifikation", rule: "<div class=rbox>Personifikation: Frost wird vermenschlicht (Väterchen).</div>" },
    { sub: "Antithese", type: "mc", q: "\u201eHimmel und Hölle.\" – Stilmittel?", o: ["Antithese", "Ironie", "Symbol"], c: 0, model: "A – Antithese", rule: "<div class=rbox>Antithese: Gegensatzpaar (Himmel ↔ Hölle).</div>" },
    { sub: "Alliteration", type: "mc", q: "\u201eHaus, Hof, Hund.\" – Stilmittel?", o: ["Alliteration", "Metapher", "Vergleich"], c: 0, model: "A – Alliteration", rule: "<div class=rbox>Alliteration: gleicher Anlaut H in allen drei Wörtern.</div>" },
// Relevante Stilmittel laut regeln.js: Metapher, Vergleich, Ellipse, Alliteration, 
// Anapher, Ironie, Parallelismus, Neologismus, Lautmalerei, Personifikation
// + Hyperbel, Klimax, Litotes, Euphemismus, Symbol, Antithese, Rhetorische Frage, Repetitio

    { sub: "Anapher", type: "mc", q: "\u201eIch will Frieden. Ich will Gerechtigkeit. Ich will Freiheit.\" – Stilmittel?", o: ["Anapher", "Alliteration", "Klimax"], c: 0, model: "A – Anapher (Wiederholung von 'Ich will' am Satzanfang)", rule: "<div class=rbox>Anapher: dasselbe Wort oder dieselbe Wortgruppe wiederholt sich am Anfang aufeinanderfolgender Sätze.</div>" },
    { sub: "Parallelismus", type: "mc", q: "\u201eEr lacht, sie lacht, alle lachen.\" – Stilmittel?", o: ["Anapher", "Parallelismus", "Klimax"], c: 1, model: "B – Parallelismus (gleiche Satzstruktur)", rule: "<div class=rbox>Parallelismus: Wiederholung der gleichen grammatischen Struktur in mehreren Sätzen.</div>" },
    { sub: "Lautmalerei", type: "mc", q: "\u201eDas Feuer knisterte und prasselte.\" – Stilmittel?", o: ["Metapher", "Lautmalerei", "Alliteration"], c: 1, model: "B – Lautmalerei (Onomatopoesie: knistern, prasseln klingen wie das Geräusch)", rule: "<div class=rbox>Lautmalerei (Onomatopoesie): Wörter, die einen Laut imitieren (knistern, zischen, plätschern).</div>" },
    { sub: "Neologismus", type: "mc", q: "\u201eDas war ein totales Handy-Versagen.\" – Was ist 'Handy-Versagen'?", o: ["Metapher", "Neologismus", "Ellipse"], c: 1, model: "B – Neologismus (Wortneuschöpfung / Zusammensetzung)", rule: "<div class=rbox>Neologismus: ein neu gebildetes Wort oder eine neue Bedeutung eines bestehenden Wortes.</div>" },
    {
      sub: "Stilmittel zuordnen (gemischt)",
      type: "cross",
      q: "Ordne den Sätzen das passende Stilmittel zu.",
      rows: [
        "(a) Das Internet verschluckt Zeit.",
        "(b) Er ist so dünn wie ein Zahnstocher.",
        "(c) Die Bäume flüsterten im Wind.",
        "(d) Kommen. Sehen. Siegen."
      ],
      cols: ["Metapher", "Vergleich", "Personifikation", "Ellipse"],
      correct: [0, 1, 2, 3],
      model: "(a) Metapher, (b) Vergleich, (c) Personifikation, (d) Ellipse",
      rule: "<div class=rbox>Metapher: Übertragung ohne 'wie'. Vergleich: mit 'wie'. Personifikation: Vermenschlichung. Ellipse: fehlende Satzteile.</div>"
    },
    { sub: "Klimax vs. Antiklimax", type: "mc", q: "\u201eEr seufzte, jammerte, schrie.\" – Stilmittel?", o: ["Klimax (Steigerung)", "Antiklimax (Abstieg)", "Repetitio"], c: 0, model: "A – Klimax (seufzen → jammern → schreien: Steigerung)", rule: "<div class=rbox>Klimax: Aufzählung mit Steigerung von schwächer zu stärker. Antiklimax: umgekehrt.</div>" },
    { sub: "Euphemismus erkennen", type: "mc", q: "\u201eDie Firma musste einige Mitarbeiter freisetzen.\" (für: entlassen) – Stilmittel?", o: ["Euphemismus", "Ironie", "Metapher"], c: 0, model: "A – Euphemismus (Beschönigung von 'entlassen')", rule: "<div class=rbox>Euphemismus: Ersatz eines unangenehmen Begriffs durch eine freundlichere Formulierung.</div>" },
    {
      sub: "Stilmittel zuordnen (Rhetorik)",
      type: "cross",
      q: "Ordne die Stilmittel zu.",
      rows: [
        "(a) Willst du das wirklich nicht wissen? (keine echte Antwort erwartet)",
        "(b) Der Tod erntet uns alle.",
        "(c) Nicht gerade ein Genie. (Litotes für: sehr dumm)"
      ],
      cols: ["Rhetorische Frage", "Metapher", "Litotes"],
      correct: [0, 1, 2],
      model: "(a) Rhetorische Frage, (b) Metapher, (c) Litotes",
      rule: "<div class=rbox>Rhetorische Frage: ohne echte Antwort. Metapher: Übertragung. Litotes: Untertreibung durch Verneinung.</div>"
    },
    { sub: "Symbol erkennen", type: "mc", q: "\u201eEine weiße Taube flog auf.\" (im Kontext eines Friedensgesprächs) – Stilmittel?", o: ["Metapher", "Symbol", "Vergleich"], c: 1, model: "B – Symbol (weiße Taube = Frieden)", rule: "<div class=rbox>Symbol: ein konkretes Bild steht für eine abstrakte Idee (weiße Taube → Frieden).</div>" },
    { sub: "Alliteration vs. Anapher", type: "mc", q: "\u201eViele Versuche verursachten Verwirrung.\" – Stilmittel?", o: ["Anapher", "Alliteration", "Parallelismus"], c: 1, model: "B – Alliteration (gleicher Anlaut v)", rule: "<div class=rbox>Alliteration: gleicher Anlautlaut mehrerer aufeinanderfolgender Wörter.</div>" },
    {
      sub: "Stilmittel in Werbesprache",
      type: "cross",
      q: "Ordne die Werbeslogan den Stilmitteln zu.",
      rows: [
        "(a) Geiz ist geil.",
        "(b) Think different.",
        "(c) Vorsprung durch Technik."
      ],
      cols: ["Alliteration", "Ellipse", "Parallelismus"],
      correct: [0, 1, 1],
      model: "(a) Alliteration (g/g). (b) Ellipse (kein vollständiger Satz). (c) Ellipse (kein Verb).",
      rule: "<div class=rbox>Alliteration: gleicher Anlaut. Ellipse: fehlende Satzteile – typisch in Werbung für Prägnanz.</div>"
    },
    { sub: "Hyperbel vs. Litotes", type: "mc", q: "\u201eDas ist nicht das Schlechteste.\" (gemeint: das ist gut) – Stilmittel?", o: ["Hyperbel", "Litotes", "Ironie"], c: 1, model: "B – Litotes (doppelte Verneinung verstärkt positiv)", rule: "<div class=rbox>Litotes: 'nicht + Negatives' = Abschwächung mit verstärkender Wirkung ('nicht schlecht' = gut).</div>" },
    { sub: "Personifikation vs. Metapher", type: "mc", q: "\u201eDer Winter zieht seinen Mantel aus.\" – Stilmittel?", o: ["Vergleich", "Personifikation", "Metapher"], c: 1, model: "B – Personifikation (Winter handelt wie ein Mensch)", rule: "<div class=rbox>Personifikation: einer nicht-menschlichen Sache werden menschliche Handlungen oder Eigenschaften zugeschrieben.</div>" },
    {
      sub: "Stilmittel: Ironie erkennen",
      type: "cross",
      q: "Ist der folgende Satz ironisch gemeint?",
      rows: [
        "(a) 'Na toll, du hast schon wieder alles perfekt hingekriegt.' (nach einem Fehler)",
        "(b) 'Du hast das wirklich super gemacht!' (nach echtem Erfolg)",
        "(c) 'Wie schön, dass du wieder zu spät bist.' (nach Verspätung)"
      ],
      cols: ["Ironie", "keine Ironie"],
      correct: [0, 1, 0],
      model: "(a) Ironie (Fehler = perfekt?), (b) keine Ironie (echter Erfolg), (c) Ironie (Verspätung = schön?)",
      rule: "<div class=rbox>Ironie: Das Gemeinte ist das Gegenteil des Gesagten. Erkennbar oft am Kontext.</div>"
    },
    { sub: "Oxymoron", type: "mc", q: "\u201eBeredtes Schweigen.\" – Welches Stilmittel?", o: ["Antithese", "Oxymoron", "Metapher"], c: 1, model: "B – Oxymoron (zwei gegensätzliche Begriffe in direkter Verbindung)", rule: "<div class=rbox>Oxymoron: zwei sich widersprechende Begriffe werden direkt miteinander verbunden ('beredtes Schweigen', 'bittere Süße').</div>" },
    { sub: "Chiasmus", type: "mc", q: "\u201eDer Mensch denkt, Gott lenkt.\" – Stilmittel?", o: ["Parallelismus", "Chiasmus", "Antithese"], c: 1, model: "B – Chiasmus (überkreuzte Satzstruktur: Mensch-denkt / Gott-lenkt → S-V / S-V gespiegelt)", rule: "<div class=rbox>Chiasmus: überkreuzte Anordnung von Satzteilen (AB – BA). Erkennbar, wenn die zweite Hälfte die erste spiegelt.</div>" },
    {
      sub: "Stilmittel in Gedichtzeilen",
      type: "cross",
      q: "Ordne zu.",
      rows: [
        "(a) Komm, komm, komm zu mir!",
        "(b) Die Nacht birgt tausend Augen.",
        "(c) Wer, wenn nicht du, soll es tun?"
      ],
      cols: ["Repetitio", "Metapher", "Rhetorische Frage"],
      correct: [0, 1, 2],
      model: "(a) Repetitio, (b) Metapher, (c) Rhetorische Frage",
      rule: "<div class=rbox>Repetitio: Wiederholung desselben Wortes. Metapher: 'Augen' für Sterne. Rhetorische Frage: keine Antwort erwartet.</div>"
    },
    { sub: "Antithese vs. Oxymoron", type: "mc", q: "\u201eKlein, aber oho!\" – Stilmittel?", o: ["Antithese", "Oxymoron", "Ironie"], c: 0, model: "A – Antithese (Gegenüberstellung: klein vs. oho/großartig)", rule: "<div class=rbox>Antithese: Gegenüberstellung zweier gegensätzlicher Begriffe oder Aussagen. (Klein ↔ oho)</div>" },
    {
      sub: "Stilmittelanalyse: kurzer Text",
      type: "cross",
      q: "Wähle das Stilmittel für jede unterstrichene Stelle.\n\u201eDas Herz der Stadt schlägt schnell (1). Er kam, er sah, er siegte (2). Mit einem Wort: alles (3).",
      rows: [
        "(1) Das Herz der Stadt schlägt schnell.",
        "(2) Er kam, er sah, er siegte.",
        "(3) Mit einem Wort: alles."
      ],
      cols: ["Metapher", "Klimax", "Ellipse"],
      correct: [0, 1, 2],
      model: "(1) Metapher (Herz der Stadt), (2) Klimax (kommen → sehen → siegen), (3) Ellipse (kein Verb)",
      rule: "<div class=rbox>Metapher: bildliche Übertragung. Klimax: Steigerung. Ellipse: unvollständiger Satz.</div>"
    },
    { sub: "Lautmalerei erkennen", type: "mc", q: "\u201eDas Wasser zischte und blubberte.\" – Stilmittel?", o: ["Alliteration", "Lautmalerei", "Personifikation"], c: 1, model: "B – Lautmalerei (zischen, blubbern imitieren Geräusche)", rule: "<div class=rbox>Lautmalerei: Wörter, die klingen wie das, was sie beschreiben.</div>" },
    { sub: "Synästhesie", type: "mc", q: "\u201eSein Lachen klingt wie Schokolade.\" – Stilmittel?", o: ["Vergleich", "Synästhesie", "Metapher"], c: 0, model: "A – Vergleich (mit 'wie') mit synästhetischem Element – Primärantwort: Vergleich", rule: "<div class=rbox>Hier liegt formal ein Vergleich vor (mit 'wie'). Die Vermischung von Sinneswahrnehmungen (hören + schmecken) ist Synästhesie – ein spezieller Untertyp der Metapher.</div>" }
  
  ]
}

];

// ================================ INIT ================================