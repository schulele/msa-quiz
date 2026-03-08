// ================================================================
// BBR-AUFGABEN.JS – Übungsaufgaben für die BBR
// 6 Oberthemen, jeweils mit mehreren Aufgaben.
//
// ÜBERARBEITETE VERSION – Änderungen:
//  • Alle self-Aufgaben, die nur einzelne Wörter/Buchstaben
//    einsetzen, wurden in cross- oder mc-Aufgaben umgewandelt.
//  • Behalten als self: Satzgefüge mit Konjunktion bilden,
//    Sätze in Zeitform umschreiben, Indirekte Rede umformen.
//  • Inhaltlicher Fehler behoben: eu/äu-Lückentext –
//    „M___er" war fehlerhaft (Mauer = au), korrigiert zu
//    „M___te" = Meute (eu) ✓
// ================================================================

var BBR_THEMES = [

// ── 1: VOKALE & DEHNUNG ─────────────────────────────────────────
{id:"bbr_vokale",title:"Vokale & Dehnung",emoji:"📏",color:"#2563eb",qs:[

{sub:"a / aa / ah",type:"cross",
q:"Ergänze die fehlenden Buchstaben (a, aa oder ah):",
rows:["w___scheinlich","st___tlich","Tr___ge","Katzenh___re","unkl___r","Bez___lung"],
cols:["a","aa","ah"],
correct:[2,1,0,1,0,2],
model:"wahrscheinlich (ah) / staatlich (aa) / Trage (a) / Katzenhaare (aa) / unklar (a) / Bezahlung (ah)",
rule:"<div class=rbox><span class=hl>ah</span>: Dehnungs‑h verlängert den Vokal (wahr, zahlen)<br><span class=hl>aa</span>: langes a ohne h (Staat, Haare)<br><span class=hl>a</span>: kurzes a (Trage, unklar)</div>"},

{sub:"i / ie / ieh",type:"cross",
q:"Ergänze die fehlenden Buchstaben (i, ie oder ieh):",
rows:["L___be","L___belle","Z___hung","B___ber","Fl___hkraft","r___chen"],
cols:["i","ie","ieh"],
correct:[1,0,2,0,2,1],
model:"Liebe (ie) / Libelle (i) / Ziehung (ieh) / Biber (i) / Fliehkraft (ieh) / riechen (ie)",
rule:"<div class=rbox><span class=hl>ie</span>: langes i (Liebe, riechen)<br><span class=hl>i</span>: kurzes i (Libelle, Biber)<br><span class=hl>ieh</span>: nur in wenigen Wörtern (ziehen, fliehen)</div>"},

{sub:"ah / ar / ahr",type:"cross",
q:"Ergänze die fehlenden Buchstaben (ah, ar oder ahr):",
rows:["W___nung","w___scheinlich","P___tner","z___m","Al___m","Abf___t"],
cols:["ah","ar","ahr"],
correct:[1,0,1,0,1,2],
model:"Warnung (ar) / wahrscheinlich (ah) / Partner (ar) / zahm (ah) / Alarm (ar) / Abfahrt (ahr)",
rule:"<div class=rbox><span class=hl>ah</span>: verlängert den Vokal (zahm, wahrscheinlich)<br><span class=hl>ahr</span>: langes a + h + r (Abfahrt, Jahr)<br><span class=hl>ar</span>: kurzes a + r (Partner, Alarm, Warnung)</div>"},

{sub:"e / ee / eh",type:"cross",
q:"Ergänze die fehlenden Buchstaben (e, ee oder eh):",
rows:["Id___","Bef___l","St___g","m___r","Sch___re","r___ge"],
cols:["e","ee","eh"],
correct:[1,2,0,2,0,0],
model:"Idee (ee) / Befehl (eh) / Steg (e) / mehr (eh) / Schere (e) / rege (e)",
rule:"<div class=rbox><span class=hl>ee</span>: langes e in Fremdwörtern (Idee, See)<br><span class=hl>eh</span>: Dehnungs‑h (Befehl, mehr)<br><span class=hl>e</span>: kurzes e (Steg, Schere)</div>"},

// Umgewandelt von self zu cross (Lückentext → Einzelwörter als Zeilen)
{sub:"Lückentext: e / ee / eh",type:"cross",
q:"Kurz oder lang? Wähle e, ee oder eh:",
rows:["S___gel (Segel)","M___r (Meer)","l___rte (lehrte)"],
cols:["e","ee","eh"],
correct:[0,1,2],
model:"Segel → kurzes e / Meer → langes e → ee / lehrte → Dehnungs-h → eh",
rule:"<div class=rbox>Segel → kurzes e<br>Meer → langes e → <span class=hl>ee</span><br>lehrte → Dehnungs-h → <span class=hl>eh</span></div>"},

{sub:"o / oo / oh",type:"cross",
q:"Ergänze die fehlenden Buchstaben (o, oo oder oh):",
rows:["M___r","w___nen","T___r","bel___nen","Z___","S___n"],
cols:["o","oo","oh"],
correct:[1,2,0,2,1,2],
model:"Moor (oo) / wohnen (oh) / Tor (o) / belohnen (oh) / Zoo (oo) / Sohn (oh)",
rule:"<div class=rbox><span class=hl>oo</span>: langes o ohne h (Moor, Zoo)<br><span class=hl>oh</span>: Dehnungs‑h (wohnen, Sohn)<br><span class=hl>o</span>: kurzes o (Tor)</div>"},

// Umgewandelt von self zu cross
{sub:"Lückentext: o / oo / oh",type:"cross",
q:"Kurz oder lang? Wähle o, oo oder oh:",
rows:["B___t (Boot)","bedr___lich (bedrohlich)","N___tlage (Notlage)"],
cols:["o","oo","oh"],
correct:[1,2,0],
model:"Boot → oo / bedrohlich → oh (Dehnungs-h) / Notlage → kurzes o",
rule:"<div class=rbox>Boot → <span class=hl>oo</span><br>bedrohlich → <span class=hl>oh</span><br>Notlage → kurzes <span class=hl>o</span></div>"},

// Umgewandelt von self zu cross – Einzelwörter als Zeilen
{sub:"eu oder äu? (1)",type:"cross",
q:"eu oder äu? (Tipp: äu wenn verwandtes Wort mit au existiert)",
rows:["Geb___den (Gebäuden)","Z___ne (Zäune)","fr___e (freue)","h___te (heute)","Kr___ter (Kräuter)","Bed___tung (Bedeutung)","h___fig (häufig)","h___ten (häuten)"],
cols:["eu","äu"],
correct:[1,1,0,0,1,0,1,1],
model:"äu: Gebäude (Bau), Zäune (Zaun), Kräuter (Kraut), häufig (Haufen), häuten (Haut) · eu: freuen, heute, Bedeutung",
rule:"<div class=rbox><span class=hl>äu</span>: verwandtes Wort mit au (Zaun→Zäune, Kraut→Kräuter)<br><span class=hl>eu</span>: kein au‑Bezug (freuen, heute, Bedeutung)</div>"},

// Umgewandelt von self zu cross
{sub:"eu oder äu? (2)",type:"cross",
q:"eu oder äu?",
rows:["H___te (Heute)","B___me (Bäume)","sch___mt (schäumt)","___re (eure)","Tr___me (Träume)","ber___e (bereue)","L___te (Leute)"],
cols:["eu","äu"],
correct:[0,1,1,0,1,0,0],
model:"eu: heute, eure, bereue, Leute · äu: Bäume (Baum), schäumt (Schaum), Träume (Traum)",
rule:"<div class=rbox>Baum→Bäume, Schaum→schäumt, Traum→Träume → <span class=hl>äu</span><br>bereuen, eure, Leute → kein au‑Bezug → <span class=hl>eu</span></div>"},

// Umgewandelt von self zu cross.
// Fehlerkorrektur: Im Original war „M___er" = Mauer (au, kein eu/äu) –
// das ist ein Fehler in der Vorlage. Korrigiert zu „M___te" = Meute (eu) ✓
// „Garten___bel" = Möbel (ö) war ebenfalls fehlerhaft und wurde entfernt.
{sub:"eu oder äu? (Lückentext)",type:"cross",
q:"eu oder äu?",
rows:["M___te (Meute = Schar)","R___bern (Räubern)","Be___te (Beute)","Geb___de (Gebäude)","Sch___ne (Scheune)","B___men (Bäumen)","M___se (Mäuse)","h___te (heute)","S___bern (Säubern)","t___ren (teuren)","n___lich (neulich)"],
cols:["eu","äu"],
correct:[0,1,0,1,0,1,1,0,1,0,0],
model:"eu: Meute, Beute, Scheune, heute, teuren, neulich · äu: Räuber(Raub), Gebäude(Bau), Bäume(Baum), Mäuse(Maus), Säubern(sauber)",
rule:"<div class=rbox>au‑Bezug → <span class=hl>äu</span> · kein au‑Bezug → <span class=hl>eu</span></div>"},

// Umgewandelt von self zu cross
{sub:"e oder ä?",type:"cross",
q:"e oder ä? (Tipp: ä wenn verwandtes Wort mit a existiert)",
rows:["G___ste (Gäste)","best___llten (bestellten)","M___nge (Menge)","Getr___nke (Getränke)","Jugendherb___rge (Jugendherberge)","K___se (Käse)","sp___ter (später)","G___rten (Gärten)","w___rmende (wärmende)","D___cken (Decken)","B___nken (Bänken)"],
cols:["e","ä"],
correct:[1,0,0,1,0,1,1,1,1,0,1],
model:"ä: Gäste(Gast), Getränke(Trank), Käse, später(spät), Gärten(Garten), wärmend(warm), Bänken(Bank) · e: bestellten, Menge, Herberge, Decken",
rule:"<div class=rbox><span class=hl>ä</span>: verwandtes Wort mit a (Gast, warm, Bank, spät)<br><span class=hl>e</span>: kein a‑Bezug (Menge, Herberge, Decke)</div>"}

]},

// ── 2: KONSONANTEN & FREMDWÖRTER ────────────────────────────────
{id:"bbr_konsonanten",title:"Konsonanten & Fremdwörter",emoji:"✍️",color:"#059669",qs:[

{sub:"s / ss / ß (1)",type:"cross",
q:"Ergänze s, ss oder ß:",
rows:["genie___en","das Schlo___","der Pa___","pa___en","wi___en","der Scho___"],
cols:["s","ss","ß"],
correct:[2,1,1,1,1,2],
model:"genießen (ß, langes ie) / Schloss (ss, kurzes o) / Pass (ss, kurzes a) / passen (ss) / wissen (ss) / Schoß (ß, langes o)",
rule:"<div class=rbox><span class=hl>ß</span>: nach langem Vokal oder Diphthong (genießen, Schoß)<br><span class=hl>ss</span>: nach kurzem Vokal (Schloss, Pass, wissen)</div>"},

// Umgewandelt von self zu cross
{sub:"s / ss / ß (Lückentext)",type:"cross",
q:"s, ss oder ß?",
rows:["wei___en (den Weg zeigen – langes ei)","Fu___ball","mu___ (er muss – kurzes u)","zum wei___en Strand (Adjektiv von weiß)"],
cols:["s","ss","ß"],
correct:[2,2,1,2],
model:"weißen (lang ei → ß) / Fußball (lang u → ß) / muss (kurz u → ss) / weißen Adj. (lang ei → ß)",
rule:"<div class=rbox><span class=hl>ß</span>: langer Vokal oder Diphthong (weiß, Fuß)<br><span class=hl>ss</span>: kurzer Vokal (muss)</div>"},

{sub:"z / tz / zz (1)",type:"cross",
q:"Ergänze z, tz oder zz:",
rows:["Kreu___ung","Ja___","plöt___lich","schmel___en","Wur___el","Pi___a"],
cols:["z","tz","zz"],
correct:[0,2,1,0,0,2],
model:"Kreuzung (z) / Jazz (zz) / plötzlich (tz) / schmelzen (z) / Wurzel (z) / Pizza (zz)",
rule:"<div class=rbox><span class=hl>tz</span>: nach kurzem Vokal (plötzlich)<br><span class=hl>z</span>: nach langem Vokal, Diphthong oder Konsonant (Kreuzung, Wurzel)<br><span class=hl>zz</span>: in Fremdwörtern (Pizza, Jazz)</div>"},

{sub:"z / tz / zz (2)",type:"cross",
q:"Ergänze z, tz oder zz:",
rows:["schüt___en","Gla___e","Bre___el","nüt___lich","ergän___en","Mo___arella"],
cols:["z","tz","zz"],
correct:[1,1,0,1,0,2],
model:"schützen (tz) / Glatze (tz) / Brezel (z) / nützlich (tz) / ergänzen (z) / Mozzarella (zz)",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (schützen, Glatze, nützlich)<br><span class=hl>z</span>: langer Vokal (Brezel, ergänzen)<br><span class=hl>zz</span>: Fremdwort (Mozzarella)</div>"},

// Umgewandelt von self zu cross
{sub:"z / tz / zz (Lückentext)",type:"cross",
q:"z, tz oder zz?",
rows:["Pu___eln (Puzzeln)","Pla___ (Platz)","ski___ierte (skizzierte)","Turmspi___e (Turmspitze)"],
cols:["z","tz","zz"],
correct:[2,1,2,1],
model:"Puzzeln(zz, Fremdwort) / Platz(tz, kurzes a) / skizzierte(zz, Fremdwort) / Turmspitze(tz, kurzes i)",
rule:"<div class=rbox><span class=hl>tz</span>: kurzer Vokal (Platz, Spitze)<br><span class=hl>zz</span>: Fremdwörter (Puzzle, Skizze)</div>"},

{sub:"x / chs / gs (1)",type:"cross",
q:"Ergänze die fehlenden Buchstaben (sch, x, hs oder gs):",
rows:["mi___en","allerdin___","verwec___eln","A___t","Fuc___","anfan___"],
cols:["sch","x","hs","gs"],
correct:[0,3,2,1,2,3],
model:"mischen (sch) / allerdings (gs) / verwechseln (hs) / Axt (x) / Fuchs (hs) / anfangs (gs)",
rule:"<div class=rbox><span class=hl>chs</span>: spricht wie 'ks' (Fuchs, verwechseln)<br><span class=hl>gs</span>: Wortende nach Stamm (anfangs, allerdings)<br><span class=hl>x</span>: in Fremdwörtern (Axt)<br><span class=hl>sch</span>: Lautverbindung (mischen)</div>"},

// Umgewandelt von self zu cross
{sub:"x / chs / gs (Lückentext)",type:"cross",
q:"x, chs oder gs?",
rows:["Eide___e (Eidechse)","geradewe___ (geradewegs)","Bo___ (Box)"],
cols:["x","chs","gs"],
correct:[1,2,0],
model:"Eidechse(chs, spricht ks) / geradewegs(gs, Weg+-s) / Box(x, Fremdwort)",
rule:"<div class=rbox>Eidechse → <span class=hl>chs</span> (spricht wie ks)<br>geradewegs → <span class=hl>gs</span> (Weg→-gs)<br>Box → <span class=hl>x</span> (Fremdwort)</div>"},

{sub:"x / cks / ks",type:"cross",
q:"Ergänze x, cks oder ks:",
rows:["Pra___is","Kle___s","zwe___s","Komple___","Ke___","hinterrü___s"],
cols:["x","cks","ks"],
correct:[0,1,1,0,2,1],
model:"Praxis (x) / Klecks (cks) / zwecks (cks) / Komplex (x) / Keks (ks) / hinterrücks (cks)",
rule:"<div class=rbox><span class=hl>x</span>: Fremdwörter (Praxis, Komplex)<br><span class=hl>cks</span>: von -ck abgeleitet (Klecks, hinterrücks)<br><span class=hl>ks</span>: einfache Form (Keks, links)</div>"},

// Umgewandelt von self zu cross
{sub:"x / cks / ks (Lückentext)",type:"cross",
q:"x, cks oder ks?",
rows:["Ta___ifahrer (Taxi)","lin___ (links)","schnurstra___ (schnurstracks)"],
cols:["x","cks","ks"],
correct:[0,2,1],
model:"Taxi(x, Fremdwort) / links(ks) / schnurstracks(cks, von Strack)",
rule:"<div class=rbox>Taxi → <span class=hl>x</span> (Fremdwort)<br>links → <span class=hl>ks</span><br>schnurstracks → <span class=hl>cks</span> (von Strack)</div>"},

// Umgewandelt von self zu cross
{sub:"-g oder -k am Wortende",type:"cross",
q:"Ergänze -g oder -k am Wortende (Ableitung hilft!):",
rows:["Schran___ (Schränke→)","san___ (sinken→)","Bu___ (biegen→)","bo___ (biegen→)","san___ (singen→)","Kerami___ (Keramiken→)"],
cols:["-g","-k"],
correct:[1,1,0,0,0,1],
model:"Schrank(-k: Schränke) / sank(-k: sinken) / Bug(-g: biegen) / bog(-g: biegen) / sang(-g: singen) / Keramik(-k: Keramiken)",
rule:"<div class=rbox>Ableitung hilft:<br><span class=hl>-k</span>: Schrank→Schränke, sank→sinken<br><span class=hl>-g</span>: Bug→biegen, sang→singen</div>"},

// Umgewandelt von self zu cross
{sub:"-d oder -t am Wortende",type:"cross",
q:"Ergänze -d oder -t am Wortende:",
rows:["Ungedul___ (ungeduldig→)","Wir___ (Wirte→)","Sei___ – zeitlich (seither→)","lei___ (leiden→)","Sei___ – Imperativ (ihr seid)","wir___ (werden→)"],
cols:["-d","-t"],
correct:[0,1,1,0,0,1],
model:"Ungeduld(-d) / Wirt(-t: Wirte) / seit(-t: seither) / leid(-d: leiden) / Seid(-d: ihr seid) / wird(-t: werden)",
rule:"<div class=rbox>Ableitung hilft:<br><span class=hl>-d</span>: Ungeduld(ungeduldig), Leid(leiden), Seid(ihr seid)<br><span class=hl>-t</span>: Wirt(Wirte), seit(seither), wird(werden)</div>"},

// Umgewandelt von self zu cross
{sub:"-nd oder -nt",type:"cross",
q:"Ergänze -nd oder -nt:",
rows:["Wi___ (Wind – weicher Klang)","bu___ (bunt – harter Klang)","ru___ (rund – weicher Klang)","Diama___ (Diamant – harter Klang)"],
cols:["-nd","-nt"],
correct:[0,1,0,1],
model:"Wind(-nd) / bunt(-nt) / rund(-nd) / Diamant(-nt)",
rule:"<div class=rbox><span class=hl>-nd</span>: weicher Auslaut (Wind, rund)<br><span class=hl>-nt</span>: härterer Auslaut (bunt, Diamant)</div>"},

// Umgewandelt von self zu cross
{sub:"-g oder -ch (Adjektivendungen)",type:"cross",
q:"Ergänze die Adjektivendung (-lich/-ch oder -(i)g):",
rows:["fröhli___ (fröhlich)","langweili___ (langweilig)","lusti___ (lustig)","herr___ (herrlich)","prächti___ (prächtig)"],
cols:["-lich / -ch","-ig / -g"],
correct:[0,1,1,0,1],
model:"fröhlich(-lich) / langweilig(-ig) / lustig(-ig) / herrlich(-lich) / prächtig(-ig)",
rule:"<div class=rbox><span class=hl>-lich</span>: fröhlich, herrlich, wöchentlich<br><span class=hl>-ig</span>: lustig, langweilig → wird wie -ich gesprochen, aber -ig geschrieben!</div>"},

{sub:"V oder W?",type:"cross",
q:"Ergänze V oder W:",
rows:["die ___itamine","das ___rack","die ___ioline","die ___itwe","die ___illa","der ___ampir"],
cols:["V","W"],
correct:[0,1,0,1,0,0],
model:"Vitamine (V, Fremdwort) / Wrack (W, deutsches Wort) / Violine (V, Fremdwort) / Witwe (W, deutsches Wort) / Villa (V, Fremdwort) / Vampir (V, Fremdwort)",
rule:"<div class=rbox>Deutsche Wörter meist <span class=hl>W</span> (Wrack, Witwe, Wasser, war)<br>Fremdwörter meist <span class=hl>V</span> (Violine, Villa, Vampir, Vitamine)</div>"},

// Umgewandelt von self zu cross
{sub:"V oder W? (Lückentext)",type:"cross",
q:"V oder W? (Das ___asser in der Blumen___ase ___ar erfault.)",
rows:["___asser (Wasser – deutsches Wort)","Blumen___ase (Vase – Fremdwort)","___ar (war – deutsches Wort)"],
cols:["V","W"],
correct:[1,0,1],
model:"Wasser(W) / Vase(V, Fremdwort) / war(W)",
rule:"<div class=rbox>Wasser, war → deutsche Wörter → <span class=hl>W</span><br>Vase → Fremdwort → <span class=hl>V</span></div>"},

// Umgewandelt von match zu cross (korrekt/falsch)
{sub:"Fremdwörter korrekt schreiben",type:"cross",
q:"Ist die Schreibweise korrekt?",
rows:["Fotografie","Reservirung","Exkursion","Tuorismus","Saison"],
cols:["korrekt","falsch"],
correct:[0,1,0,1,0],
model:"Fotografie ✓ / Reservierung (nicht: Reservirung) / Exkursion ✓ / Tourismus (nicht: Tuorismus) / Saison ✓",
rule:"<div class=rbox>Fremdwörter folgen der Herkunftssprache:<br>Fotografie (griech.) / Reservierung (lat.) / Exkursion (lat.) / Tourismus (frz.) / Saison (frz.)</div>"}

]},

// ── 3: GROß-/KLEINSCHREIBUNG & GETRENNTSCHREIBUNG ───────────────
{id:"bbr_gross_klein",title:"Groß-/Kleinschreibung & Getrenntschreibung",emoji:"🔠",color:"#dc2626",qs:[

// Umgewandelt von self zu cross
{sub:"Groß oder klein? (1)",type:"cross",
q:"Groß (G) oder klein (k)?",
rows:["meinen ___esten Freund – b/B?","meinen besten ___reund – f/F?","das ___aufräumen – a/A?","etwas ___laues – b/B?"],
cols:["GROSS","klein"],
correct:[1,0,0,0],
model:"besten → klein (Adj. als Eigenschaft) / Freund → GROSS (Nomen) / Aufräumen → GROSS (subst. Verb) / Blaues → GROSS (subst. Adj. nach etwas)",
rule:"<div class=rbox>Substantivierte Verben (Aufräumen) → GROSS<br>nach etwas/nichts/alles + Adj → GROSS (etwas Blaues)<br>Adjektive als Eigenschaft → klein (bester)</div>"},

// Umgewandelt von self zu cross
{sub:"Groß oder klein? (2)",type:"cross",
q:"Groß (G) oder klein (k)?",
rows:["der ___rüne Stift – g/G?","der grüne ___tift – s/S?","das ___anzen – t/T?","nichts ___eues – n/N?"],
cols:["GROSS","klein"],
correct:[1,0,0,0],
model:"grünen → klein (Farbadjektiv) / Stift → GROSS (Nomen) / Tanzen → GROSS (subst. Verb) / Neues → GROSS (subst. Adj. nach nichts)",
rule:"<div class=rbox>Farbadjektive → klein (grüne)<br>Substantiviertes Verb → GROSS (Tanzen)<br>nichts/etwas + Adj → GROSS (Neues)</div>"},

// Umgewandelt von self zu cross
{sub:"Groß oder klein? (3)",type:"cross",
q:"Groß (G) oder klein (k)? (Tipp: nach zum/beim → GROSS; Verb mit zu → klein; alleinst. Superlativ → GROSS)",
rows:["zum ___chwimmen – s/S?","die ___ichtigste Freizeitbeschäftigung – w/W?","Die ___üngste in unserer Gruppe – j/J?","die ___chnellste Schwimmerin – s/S?","zum ___ssen – e/E?","Das ___arten wurde zu lang – w/W?","vor ihm zu ___ssen – e/E?"],
cols:["GROSS","klein"],
correct:[0,1,0,1,0,0,1],
model:"Schwimmen(nach zum→GROSS) / wichtigste(Attr. Adj.→klein) / Jüngste(alleinst. Superlativ→GROSS) / schnellste(Attr. Adj. vor Schwimmerin→klein) / Essen(nach zum→GROSS) / Warten(subst. Verb→GROSS) / essen(Verb mit zu→klein)",
rule:"<div class=rbox>nach <em>zum/beim</em> → GROSS<br>als Verb mit <em>zu</em> → klein (zu essen)<br>Superlativ ohne Bezugsnomen → GROSS (die Jüngste)</div>"},

// Umgewandelt von self zu cross
{sub:"Anredepronomen",type:"cross",
q:"Groß (G) oder klein (k)?",
rows:["i/Ihr Verständnis","i/Ihrer Rückäußerung","verbleibe i/Ich mit freundlichen Grüßen","schreibe i/Ihnen","i/Sie um einen Gefallen bitten"],
cols:["GROSS","klein"],
correct:[0,0,1,0,0],
model:"Ihr/Ihrer/Ihnen/Sie (höfliche Anrede) → GROSS · ich (persönl. Pronomen) → klein",
rule:"<div class=rbox>Höfliche Anrede (Sie, Ihr, Ihnen) → immer GROSS<br>Persönliche Pronomen (ich, du) → klein</div>"},

// Umgewandelt von self zu mc (vollständige Sätze als Optionen)
{sub:"Sätze richtig schreiben (1)",type:"mc",
q:"Welche Version ist vollständig korrekt großgeschrieben?",
o:["Beim Einkauf sollte man die Preise vergleichen. / Manchmal verführt eine interessant aussehende Verpackung die Kunden. / Ein Einkaufszettel schützt vor unnötigen Geldausgaben.",
   "Beim einkauf sollte man die Preise vergleichen. / Manchmal verführt eine interessant aussehende Verpackung die kunden. / Ein Einkaufszettel schützt vor unnötigen Geldausgaben.",
   "Beim Einkauf sollte man die preise vergleichen. / Manchmal verführt eine interessant aussehende verpackung die Kunden. / Ein Einkaufszettel schützt vor unnötigen geldausgaben."],
c:0,
model:"Einkauf, Preise, Verpackung, Kunden, Einkaufszettel, Geldausgaben → alle Nomen GROSS",
rule:"<div class=rbox>Alle Nomen GROSS: Einkauf, Preise, Verpackung, Kunden, Einkaufszettel, Geldausgaben<br>Adjektive → klein (interessant aussehend)</div>"},

// Umgewandelt von self zu mc
{sub:"Sätze richtig schreiben (2)",type:"mc",
q:"Welche Version ist vollständig korrekt großgeschrieben?",
o:["Die Generalprobe verlief reibungslos. / Alle Beteiligten bereiten sich fieberhaft auf die erste Vorstellung vor. / Eine Aufführung in der Aula ist immer eine spannende Angelegenheit.",
   "Die generalprobe verlief reibungslos. / Alle beteiligten bereiten sich fieberhaft auf die erste Vorstellung vor. / Eine aufführung in der Aula ist eine spannende Angelegenheit.",
   "Die Generalprobe verlief reibungslos. / Alle Beteiligten bereiten sich auf die erste vorstellung vor. / Eine Aufführung in der aula ist immer eine spannende Angelegenheit."],
c:0,
model:"Generalprobe, Beteiligten (subst. Adj.), Vorstellung, Aufführung, Aula, Angelegenheit → GROSS",
rule:"<div class=rbox>Nomen GROSS: Generalprobe, Beteiligten, Vorstellung, Aufführung, Aula, Angelegenheit<br>Adjektive klein: erste, spannend</div>"},

// Umgewandelt von self zu mc
{sub:"Sätze richtig schreiben (3)",type:"mc",
q:"Welche Version ist vollständig korrekt großgeschrieben?",
o:["Nach dem Essen soll sich der Mensch bewegen. / Für die Konzentration sind regelmäßige Mahlzeiten wichtig. / Wasser ist im Überfluss vorhanden. / Oft stellen Überschwemmungen etwas Gefährliches dar.",
   "Nach dem essen soll sich der mensch bewegen. / Für die Konzentration sind regelmäßige mahlzeiten wichtig. / Wasser ist im überfluss vorhanden. / Oft stellen Überschwemmungen etwas gefährliches dar.",
   "Nach dem Essen soll sich der Mensch bewegen. / Für die konzentration sind regelmäßige Mahlzeiten wichtig. / Wasser ist im Überfluss vorhanden. / Oft stellen überschwemmungen etwas Gefährliches dar."],
c:0,
model:"Essen(nach dem→GROSS), Mensch, Konzentration, Mahlzeiten, Überfluss, Überschwemmungen, Gefährliches(subst. Adj. nach etwas) → alle GROSS",
rule:"<div class=rbox>Nomen GROSS: Essen, Mensch, Konzentration, Mahlzeiten, Überfluss, Überschwemmungen<br>etwas Gefährliches → substantiviertes Adjektiv → GROSS</div>"},

{sub:"Tageszeiten & Eigennamen",type:"mc",
q:"Groß oder klein?\n(a) Bei Regen spielen sie ___ (donnerstags / Donnerstags) in der Halle.\n(b) Zum größten ___ (teil / Teil) gab er mir Recht.\n(c) Er studiert an der ___ (technischen / Technischen) Universität Berlin.",
o:["Donnerstags / teil / Technischen",
   "donnerstags / Teil / Technischen",
   "donnerstags / Teil / technischen"],
c:1,
model:"donnerstags (Adverb auf -s → klein) / Teil (Nomen → groß) / Technischen (Teil eines Eigennamens → groß)",
rule:"<div class=rbox>Wochentage auf -s → Adverb → klein (donnerstags, montags)<br>Nomen → GROSS (Teil)<br>Eigenname / feste Bezeichnung → GROSS (Technische Universität)</div>"},

{sub:"frei sprechen / freisprechen",type:"cross",
q:"Wähle die richtige Schreibweise für jede Lücke:",
rows:["(a) Im Vortrag möglichst ___ reden","(b) Der Richter hat den Angeklagten ___"],
cols:["frei sprechen","freisprechen","freigesprochen"],
correct:[0,2],
model:"(a) frei sprechen (ohne Manuskript = wörtlich, getrennt)\n(b) freigesprochen (für unschuldig erklärt = übertragen, zusammen)",
rule:"<div class=rbox><span class=hl>frei sprechen</span>: wörtliche Bedeutung → getrennt<br><span class=hl>freisprechen</span>: für unschuldig erklären → zusammen (feste Bedeutung)</div>"},

{sub:"schwerfallen / Klavier üben",type:"cross",
q:"Wähle die richtige Schreibweise für jede Lücke:",
rows:["(a) Diese Aufgaben werden mir nicht ___","(b) Mir macht das ___ großen Spaß"],
cols:["schwer fallen","schwerfallen","Klavier üben","Klavierüben"],
correct:[1,3],
model:"(a) schwerfallen (Mühe machen, übertragene Bedeutung → zusammen)\n(b) Klavierüben (als Nomen gebraucht → zusammen + GROSS)",
rule:"<div class=rbox><span class=hl>schwerfallen</span>: Mühe machen (übertragen) → zusammen<br><span class=hl>Klavierüben</span>: als Nomen gebraucht → zusammen + GROSS<br><span class=hl>Klavier üben</span>: als Tätigkeit → getrennt</div>"},

// Umgewandelt von self zu cross
{sub:"end- oder ent-?",type:"cross",
q:"end- oder ent-?",
rows:["___lich (endlich – zum Ende hin)","___täuscht (enttäuscht – Trennungsvorsilbe)","___spurt (Endspurt – Abschlussspurt)","___fernen (entfernen – Vorsilbe der Trennung)","___station (Endstation – letzte Station)"],
cols:["end-","ent-"],
correct:[0,1,0,1,0],
model:"endlich/Endspurt/Endstation → Ende, Schluss · enttäuscht/entfernen → Trennung oder Gegenteil",
rule:"<div class=rbox><span class=hl>end-</span>: Ende, Schluss (endlich, Endspurt, Endstation)<br><span class=hl>ent-</span>: Trennung oder Gegenteil (enttäuscht, entfernen)</div>"},

// Umgewandelt von self zu cross (wie Aufgabe (3))
{sub:"wieder oder wider? (1)",type:"cross",
q:"wieder (= nochmal/zurück) oder wider (= gegen)?",
rows:["Ich möchte dich gerne ___sehen.","Es ___strebt ihr, sich zu entschuldigen.","Er hat das Buch ___holt gelesen.","Er ___spricht sich.","Die Großmutter konnte nach der OP ___ laufen."],
cols:["wieder","wider"],
correct:[0,1,0,1,0],
model:"wiedersehen(nochmal) / widerstrebt(gegen) / wiederholt(nochmal) / widerspricht(gegen) / wieder laufen(nochmal)",
rule:"<div class=rbox><span class=hl>wieder</span>: noch einmal, erneut (Eselsbrücke: nochmal wie der Anfang)<br><span class=hl>wider</span>: gegen (Widerspruch, Widerstand)</div>"},

// Umgewandelt von self (unterstreichen) zu cross
{sub:"wieder oder wider? (2)",type:"cross",
q:"wieder oder wider?",
rows:["Die Chefin will die Vorschriften ___ einführen. (erneut)","Die Klasse wird die Aufführung ___holen.","Es hat ihr ___strebt, die Hausaufgaben zu machen.","Er hat alle Bücher ___ zurückgebracht.","Du ___sprichst dir."],
cols:["wieder","wider"],
correct:[0,0,1,0,1],
model:"wieder einführen(erneut) / wiederholen(nochmal) / widerstrebt(gegen) / wieder zurück(erneut) / widersprichst(gegen)",
rule:"<div class=rbox>Wiederholung/erneut → <span class=hl>wieder</span><br>Gegen etwas → <span class=hl>wider</span></div>"},

{sub:"wieder oder wider? (3)",type:"cross",
q:"Ergänze wieder oder wider (Groß-/Kleinschreibung beachten):",
rows:["(a) Ihre ___ ließ keiner gelten.","(b) Die ___ des Projekts wurde geplant.","(c) Der ___ konnte gemessen werden.","(d) Hin und ___ klappt es gut."],
cols:["wieder","wider"],
correct:[1,0,1,0],
model:"Widerrede (wider, Gegenrede) / Wiederholung (wieder, nochmal) / Widerstand (wider, Gegenwehr) / wieder (hin und wieder = ab und zu)",
rule:"<div class=rbox><span class=hl>wider-</span>: gegen, entgegen (Widerrede, Widerstand, Widerspruch)<br><span class=hl>wieder-</span>: nochmal, zurück (Wiederholung, Wiederwahl)</div>"}

]},

// ── 4: GRAMMATIK ────────────────────────────────────────────────
{id:"bbr_grammatik",title:"Grammatik",emoji:"📘",color:"#0891b2",qs:[

// Umgewandelt von self zu cross
{sub:"Vorsilbe vor zwei Wörtern",type:"cross",
q:"Welche Vorsilbe passt zu beiden Wörtern?",
rows:["ziehen + bringen →","brecher + kehr →","wärts + tragen →","knoten + tragen →","fach + händig →","band + teidigung →"],
cols:["ver-","vor-","vier-"],
correct:[0,0,1,0,2,0],
model:"verziehen/verbringen / Verbrecher/Verkehr / vorwärts/vortragen / verknoten/vertragen / vierfach/vierhändig / Verband/Verteidigung",
rule:"<div class=rbox>ver-: verziehen, verbringen, Verbrecher, Verkehr, verknoten, vertragen, Verband, Verteidigung<br>vor-: vorwärts, vortragen<br>vier-: vierfach, vierhändig</div>"},

{sub:"Unbestimmter Artikel",type:"mc",
q:"Welcher Artikel ist richtig?\n(a) Wir brauchen noch ___ helfende Hand.\n(b) Dazu habe ich noch ___ Artikel gelesen.\n(c) ___ guten Freund hilft man gern.\n(d) Das ist ___ großer Erfolg!",
o:["eine / einen / Einem / ein",
   "eine / einen / Ein / ein",
   "einen / eine / Einem / ein"],
c:0,
model:"eine Hand (f, Nom.) / einen Artikel (m, Akk.) / Einem Freund (m, Dat.) / ein Erfolg (m, Nom.)",
rule:"<div class=rbox>Maskulinum: Nom. <span class=hl>ein</span>, Akk. <span class=hl>einen</span>, Dat. <span class=hl>einem</span><br>Femininum Nom./Akk.: <span class=hl>eine</span><br>Neutrum Nom./Akk.: <span class=hl>ein</span></div>"},

// Umgewandelt von self zu cross
{sub:"Bestimmter Artikel",type:"cross",
q:"Ergänze den richtigen bestimmten Artikel:",
rows:["für ___ Einladung (Einladung = f., Akk.)","auf ___ Geburtstag (Geburtstag = m., Akk.)","an ___ Geschenk (Geschenk = n., Dat.)","vor ___ Feier (Feier = f., Dat.)"],
cols:["die","den","das","dem","der"],
correct:[0,1,3,4],
model:"für die Einladung(f,Akk) / auf den Geburtstag(m,Akk) / an dem Geschenk(n,Dat) / vor der Feier(f,Dat)",
rule:"<div class=rbox>für/auf + Akk. → m: <span class=hl>den</span>, f: <span class=hl>die</span><br>an/vor + Dat. → m/n: <span class=hl>dem</span>, f: <span class=hl>der</span></div>"},

// Umgewandelt von self zu mc
{sub:"Bestimmter vs. unbestimmter Artikel",type:"mc",
q:"Welche Artikel sind korrekt?\n\nRebecca hat ___ neuen Computer bekommen.\n___ Computer hat ___ besonders guten Bildschirm.",
o:["einen / Der / einen",
   "ein / Der / der",
   "einen / Ein / einen"],
c:0,
model:"einen Computer(m, Akk., neu eingeführt → unbestimmt) / Der Computer(bekannt → bestimmt) / einen Bildschirm(m, Akk., neu eingeführt → unbestimmt)",
rule:"<div class=rbox>Neu eingeführt → <span class=hl>unbestimmter Artikel</span> (ein/eine/einen)<br>Bekannt, bereits erwähnt → <span class=hl>bestimmter Artikel</span> (der/die/das)</div>"},

// Umgewandelt von self zu cross (Endung -e oder -en nach best. Artikel)
{sub:"Adjektivdeklination (1)",type:"cross",
q:"Welche Endung hat das Adjektiv nach dem bestimmten Artikel?",
rows:["Die ___ (schön) Feier – Nominativ, f.","Den ___ (neu) Schüler – Akkusativ, m.","diesen ___ (grün) Mantel – Akkusativ, m.","Die ___ (groß) Begeisterung – Nominativ, f."],
cols:["…-e","…-en"],
correct:[0,1,1,0],
model:"schöne(Nom.f.→-e) / neuen(Akk.m.→-en) / grünen(nach diesem, Akk.→-en) / große(Nom.f.→-e)",
rule:"<div class=rbox>Nach bestimmtem Artikel → <span class=hl>schwache Deklination</span>:<br>Nom./Akk. n. und Nom. m./f. → <span class=hl>-e</span><br>alle anderen Formen → <span class=hl>-en</span></div>"},

// Umgewandelt von self zu cross
{sub:"Adjektivdeklination (2)",type:"cross",
q:"Welche Adjektivendung ist korrekt?",
rows:["Das ___ (heiß) Essen – Nom., n.","Die ___ (laut) Stimmen – Nom., Pl.","dem ___ (flach) Hügel – Dat., m.","mit ___ (eisig) Winden – Dat., Pl.","bei ___ (klar) Sicht – Dat., f., kein Artikel"],
cols:["…-e","…-en","…-er"],
correct:[0,1,1,1,2],
model:"heiße(Nom.n.→-e) / lauten(Pl.→-en) / flachen(Dat.m.→-en) / eisigen(Dat.Pl.→-en) / klarer(Dat.f. ohne Artikel→stark -er)",
rule:"<div class=rbox>Nach best. Artikel → schwach (-e/-en)<br>Ohne Artikel, Dat. f. → stark: <span class=hl>-er</span></div>"},

// Umgewandelt von self zu cross
{sub:"Adjektivdeklination (3)",type:"cross",
q:"Welche Adjektivendung ist korrekt?",
rows:["Das ___ (warm) Wetter – Nom., n.","Die ___ (leicht) Aufgaben – Nom., Pl.","Aus dem ___ (hell) Flur – Dat., m.","Ein ___ (klein) Teilchen – Nom., n., unb. Artikel","Bei ___ (schnell) Tempo – Dat., n., kein Artikel"],
cols:["…-e","…-en","…-em","…-es"],
correct:[0,1,1,3,2],
model:"warme(-e) / leichten(-en) / hellen(-en) / kleines(nach ein, Nom.n.→-es) / schnellem(Dat.n. kein Artikel→stark -em)",
rule:"<div class=rbox>Nach best. Artikel → schwach (-e/-en)<br>Nach unbest. Artikel Nom./Akk. n: <span class=hl>-es</span>, m: <span class=hl>-er</span><br>Dat. ohne Artikel → stark: <span class=hl>-em</span></div>"},

// Umgewandelt von self zu cross
{sub:"Pronomen einsetzen",type:"cross",
q:"Welches Personalpronomen ersetzt das unterstrichene Nomen?",
rows:["Ein <u>Fenster</u> ging zu Bruch. ___ muss repariert werden.","Erst spät sind die <u>Wanderer</u> angekommen. ___ sind sehr hungrig.","Die <u>Mannschaft</u> hatte Torchancen, aber ___ hat sie nicht genutzt.","Ein alter <u>Mann</u> hatte sich verlaufen, weshalb ___ mich fragte.","<u>Elli</u> nimmt das Fahrrad, weil ___ für sie das liebste Transportmittel ist."],
cols:["er","sie (Sg.)","es","sie (Pl.)"],
correct:[2,3,1,0,2],
model:"Fenster(n)→es / Wanderer(Pl.)→sie(Pl.) / Mannschaft(f)→sie(Sg.) / Mann(m)→er / Fahrrad(n)→es",
rule:"<div class=rbox>Pronomen nach Genus und Numerus:<br>m → <span class=hl>er</span> | f → <span class=hl>sie</span> | n → <span class=hl>es</span> | Pl. → <span class=hl>sie</span></div>"},

// Umgewandelt von self zu mc
{sub:"Verben auswählen: fallen-Komposita",type:"mc",
q:"Welches Verb passt?\n(a) Das Konzert muss heute leider ___.\n(b) Sie tut alles, um ihr zu ___.\n(c) Der Hund muss zum Arzt, weil er von Flöhen ___ ist.",
o:["ausfallen / gefallen / befallen",
   "gefallen / ausfallen / befallen",
   "ausfallen / befallen / gefallen"],
c:0,
model:"ausfallen (nicht stattfinden) / gefallen (jemandem angenehm sein) / befallen (von Parasiten heimgesucht)",
rule:"<div class=rbox>ausfallen = nicht stattfinden<br>gefallen = jemandem angenehm sein<br>befallen = von Krankheit/Parasiten heimgesucht</div>"},

// Umgewandelt von self zu mc
{sub:"Zeitformen (1)",type:"mc",
q:"Verb in der angegebenen Zeitform:\n(a) Präsens – lesen: Abends ___ ich immer ein paar Seiten.\n(b) Präteritum – spielen: Die Hauptdarstellerin ___ großartig.\n(c) Perfekt – verlieren: Wir ___ das Spiel leider ___.",
o:["lese / spielte / haben verloren",
   "lesen / spielten / haben verloren",
   "lese / spielte / hatten verloren"],
c:0,
model:"lese(Präs., ich) / spielte(Prät. schwach) / haben verloren(Perf.: haben+Part.II)",
rule:"<div class=rbox>Präsens: ich <span class=hl>lese</span><br>Präteritum schwach: <span class=hl>spielte</span> (-te)<br>Perfekt: haben + Partizip II (<span class=hl>verloren</span>)</div>"},

// Umgewandelt von self zu mc
{sub:"Zeitformen (2)",type:"mc",
q:"Verb in der angegebenen Zeitform:\n(a) Präsens – sein: Herr Schöller ___ Friseur.\n(b) Präteritum – lernen: Er ___ am Oberstufenzentrum Körperpflege.\n(c) Perfekt – sich interessieren: Schon als Kind ___ ich mich für Frisuren ___.",
o:["ist / lernte / habe mich interessiert",
   "ist / lernete / bin interessiert",
   "war / lernte / hatte mich interessiert"],
c:0,
model:"ist(Präs. sein) / lernte(Prät. schwach) / habe mich interessiert(Perf. mit haben)",
rule:"<div class=rbox>sein → Präsens: <span class=hl>ist</span><br>lernen → Präteritum: <span class=hl>lernte</span> (schwach)<br>sich interessieren → Perfekt: <span class=hl>habe mich interessiert</span></div>"},

// Umgewandelt von self zu mc
{sub:"Konjugationstabelle (1)",type:"mc",
q:"Welche Verbformen sind korrekt?\n\nmeinen: Perfekt ihr ___ / Futur I wir ___\nspringen: Perfekt ihr ___ / Futur I ihr ___\nkochen: Präteritum ihr ___ / Perfekt er ___",
o:["habt gemeint / werden meinen / seid gesprungen / werdet springen / kochtet / hat gekocht",
   "haben gemeint / werden meinen / haben gesprungen / werdet springen / kochtet / hat gekocht",
   "habt gemeint / werden meinen / seid gesprungen / werden springen / kochten / hat gekocht"],
c:0,
model:"meinen: ihr habt gemeint / wir werden meinen · springen: ihr seid gesprungen (Bewegungsverb→sein) / ihr werdet springen · kochen: ihr kochtet / er hat gekocht",
rule:"<div class=rbox>Perfekt: haben/sein + Partizip II<br>springen → Perfekt mit <span class=hl>sein</span> (Bewegungsverb)<br>Futur I: werden + Infinitiv</div>"},

// Umgewandelt von self zu mc
{sub:"Konjugationstabelle (2)",type:"mc",
q:"Welche Verbformen sind korrekt?\n\nrennen: Perfekt ihr ___ / Futur I wir ___\nspielen: Perfekt ihr ___ / Futur I ihr ___\nsagen: Präteritum ihr ___ / Perfekt er ___",
o:["seid gerannt / werden rennen / habt gespielt / werdet spielen / sagtet / hat gesagt",
   "habt gerannt / werden rennen / habt gespielt / werdet spielen / sagtet / hat gesagt",
   "seid gerannt / werden rennen / habt gespielt / werden spielen / sagtet / habt gesagt"],
c:0,
model:"rennen: ihr seid gerannt(Bewegungsverb→sein) / wir werden rennen · spielen: ihr habt gespielt / ihr werdet spielen · sagen: ihr sagtet / er hat gesagt",
rule:"<div class=rbox>rennen → Perfekt mit <span class=hl>sein</span> (Bewegungsverb)<br>spielen, sagen → schwach: haben + Partizip II</div>"},

// BEHALTEN als self: vollständiger Satz in Zeitform umschreiben
{sub:"Satz in vorgegebener Zeitform",type:"self",
q:"Schreiben Sie den Satz in der angegebenen Zeitform:\n\na) Ich plane eine Reise. → Futur I:\nb) Sie reden über den Film. → Präteritum:\nc) Wir besuchen das Museum. → Perfekt:\nd) Du lachst viel. → Perfekt:\ne) Sie schreibt eine Bewerbung. → Futur I:\nf) Er fährt mit dem Zug. → Präteritum:",
model:"a) Ich werde eine Reise planen.\nb) Sie redeten über den Film.\nc) Wir haben das Museum besucht.\nd) Du hast viel gelacht.\ne) Sie wird eine Bewerbung schreiben.\nf) Er fuhr mit dem Zug.",
rule:"<div class=rbox>Futur I: werden + Infinitiv<br>Präteritum schwach: -te (redeten)<br>Präteritum stark: fuhr (fahren)<br>Perfekt: haben + Partizip II</div>"},

// Umgewandelt von self zu mc
{sub:"Verben auswählen (Kollokationen)",type:"mc",
q:"Welche Verbkombinationen sind korrekt?\n(a) Der Ausbilder musste viele Anweisungen ___.\n(b) Auf der Feier sollte sie eine Rede ___.\n(c) Er wollte das Gespräch mit dem Lehrling ___.\n(d) Am Anfang mussten sie einen Plan ___.",
o:["Anweisungen geben / Rede halten / Gespräch führen / Plan entwerfen",
   "Anweisungen halten / Rede geben / Gespräch führen / Plan entwerfen",
   "Anweisungen machen / Rede halten / Gespräch ablegen / Plan entwerfen"],
c:0,
model:"Anweisungen geben / Rede halten / Gespräch führen / Plan entwerfen",
rule:"<div class=rbox>Feste Verbindungen (Kollokationen):<br>Anweisungen <span class=hl>geben</span> / Rede <span class=hl>halten</span> / Gespräch <span class=hl>führen</span> / Plan <span class=hl>entwerfen</span></div>"},

// Umgewandelt von self zu mc
{sub:"Komposita mit/ohne Fugenelement (1)",type:"mc",
q:"Wie werden die Wörter zusammengesetzt?\n(a) Reinigung + Kraft →\n(b) Spiel + Platz →\n(c) Maschine + Bau →\n(d) Fan + Club →",
o:["Reinigungskraft / Spielplatz / Maschinenbau / Fanclub",
   "Reinigskraft / Spielplatz / Maschinenenbau / Fanclub",
   "Reinigungskraft / Spielsplatz / Maschinenbau / Fan-Club"],
c:0,
model:"Reinigungskraft(-s-) / Spielplatz(kein) / Maschinenbau(-n-) / Fanclub(kein)",
rule:"<div class=rbox><span class=hl>Mit Fugenelement</span>: Reinigung + <em>-s-</em> + Kraft, Maschine + <em>-n-</em> + Bau<br><span class=hl>Ohne Fugenelement</span>: Spielplatz, Fanclub</div>"},

// Umgewandelt von self zu mc
{sub:"Komposita mit/ohne Fugenelement (2)",type:"mc",
q:"Wie werden die Wörter zusammengesetzt?\n(a) Geburtstag + Feier →\n(b) Keller + Tür →\n(c) Hals + Kette →\n(d) Tasche + Tuch →",
o:["Geburtstagsfeier / Kellertür / Halskette / Taschentuch",
   "Geburtstagfeier / Kellertür / Hals-Kette / Taschentuch",
   "Geburtstagsfeier / Kellerstür / Halskette / Taschetuch"],
c:0,
model:"Geburtstagsfeier(-s-) / Kellertür(kein) / Halskette(kein) / Taschentuch(kein)",
rule:"<div class=rbox>Geburtstag + <span class=hl>-s-</span> + Feier → Geburtstagsfeier<br>Keller, Hals, Tasche: kein Fugenelement nötig</div>"}

]},

// ── 5: SATZLEHRE & ZEICHENSETZUNG ───────────────────────────────
{id:"bbr_satzlehre",title:"Satzlehre & Zeichensetzung",emoji:"🔗",color:"#9333ea",qs:[

// BEHALTEN als self: Satzgefüge mit Konjunktion bilden
{sub:"Satzgefüge bilden (1)",type:"self",
q:"Bilden Sie ein Satzgefüge mit der angegebenen Konjunktion:\n\na) Sie ist abfahrbereit. Sie hat bereits gepackt. (da)\nb) Ich komme pünktlich. Die U-Bahn ist zu spät gekommen. (obwohl)\nc) Ich hatte den Aufsatz zu Ende geschrieben. Ich konnte ihn abschicken. (nachdem)",
model:"a) Sie ist abfahrbereit, da sie bereits gepackt hat.\nb) Ich komme pünktlich, obwohl die U-Bahn zu spät gekommen ist.\nc) Nachdem ich den Aufsatz zu Ende geschrieben hatte, konnte ich ihn endlich abschicken.",
rule:"<div class=rbox>da (Grund), obwohl (Gegensatz), nachdem (Vorzeitigkeit) → alle Verb ans Ende<br>Komma zwischen Haupt- und Nebensatz</div>"},

// BEHALTEN als self
{sub:"Satzgefüge bilden (2)",type:"self",
q:"Bilden Sie ein Satzgefüge:\n\na) Ich muss früh aufstehen. Wir fahren an die Ostsee. (weil)\nb) Du solltest die Blumen gießen. Sie blühen besonders schön. (damit)\nc) Ich kann mit in den Park. Du hilfst mir bei den Hausaufgaben. (wenn)\nd) Nuria geht oft ins Fitnessstudio. Sie will bessere Kondition. (denn)",
model:"a) Ich muss früh aufstehen, weil wir an die Ostsee fahren.\nb) Du solltest die Blumen gießen, damit sie besonders schön blühen.\nc) Ich kann mit in den Park kommen, wenn du mir bei den Hausaufgaben hilfst.\nd) Nuria geht oft ins Fitnessstudio, denn sie will eine bessere Kondition bekommen.",
rule:"<div class=rbox>weil, damit, wenn → NS (Verb am Ende)<br><span class=hl>denn</span> → HS-Konjunktion: Verb an Pos. 2, kein Nebensatz!</div>"},

// BEHALTEN als self
{sub:"Satzgefüge bilden (Radfahren)",type:"self",
q:"Bilden Sie Satzgefüge:\n\na) Radfahren schont die Umwelt. Man verbraucht kein Benzin. (weil)\nb) Bei Regen muss man vorsichtig sein. Man rutscht nicht aus. (damit)\nc) Eine Radtour ist anstrengend. Die Freude kann nachlassen. (sodass)\nd) Ich fahre täglich Rad. Ich finde das viel zu anstrengend. (obwohl)",
model:"a) Radfahren schont die Umwelt, weil man kein Benzin verbraucht.\nb) Bei Regen muss man vorsichtig sein, damit man nicht ausrutscht.\nc) Eine Radtour ist anstrengend, sodass die Freude nachlassen kann.\nd) Ich fahre täglich Rad, obwohl ich das viel zu anstrengend finde.",
rule:"<div class=rbox>weil (Grund), damit (Zweck), sodass (Folge), obwohl (Gegensatz) → alle NS (Verb am Ende)</div>"},

// BEHALTEN als self
{sub:"Satzgefüge bilden (Sport & Wasser)",type:"self",
q:"Bilden Sie Satzgefüge:\n\na) Ausreichend Wasser ist beim Sport wichtig. Der Körper ist sonst nicht belastbar. (weil)\nb) Sportgetränke enthalten viel Zucker. Man soll sie nur in kleinen Mengen trinken. (weshalb)\nc) Der Mensch muss auch ohne Sport ausreichend trinken. Er fühlt sich wohl. (damit)\nd) Spezielle Sportgetränke sind beliebt. Sie sind sehr süß. (obwohl)",
model:"a) Eine ausreichende Menge an Wasser zu trinken ist beim Sport wichtig, weil der Körper sonst nicht lange belastbar ist.\nb) Sportgetränke enthalten viel Zucker, weshalb man diese Getränke nur in kleinen Mengen trinken soll.\nc) Der Mensch muss auch ohne Sport ausreichend trinken, damit er sich wohl fühlt.\nd) Spezielle Sportgetränke sind bei Sportlern sehr beliebt, obwohl sie sehr süß sind.",
rule:"<div class=rbox>weshalb (Folge/Konsequenz) → NS<br>weil, damit, obwohl → NS<br>Alle: Verb am Ende</div>"},

// BEHALTEN als self
{sub:"Satzgefüge bilden (gemischt)",type:"self",
q:"Bilden Sie Satzgefüge:\n\na) Der Bus verspätete sich. Ich kam zu spät. (sodass)\nb) Ich kaufe mir neue Schuhe. Ich habe das Geld gespart. (sobald)\nc) Sie wird dir helfen. Sie ist in der Lage dazu. (falls)\nd) Er bereitet sich gut vor. Er sucht einen Praktikumsplatz. (indem)\ne) Sie besucht die Tanzschule. Ihre Freundin geht zum Musikunterricht. (während)",
model:"a) Der Bus verspätete sich, sodass ich zu spät kam.\nb) Ich kaufe mir neue Schuhe, sobald ich das Geld gespart habe.\nc) Sie wird dir helfen, falls sie in der Lage dazu ist.\nd) Er bereitet sich gut vor, indem er sich einen Praktikumsplatz sucht.\ne) Sie besucht die Tanzschule, während ihre Freundin zum Musikunterricht geht.",
rule:"<div class=rbox>sodass (Folge), sobald (Zeitpunkt), falls (Bedingung), indem (Mittel), während (Gleichzeitigkeit) → alle NS</div>"},

{sub:"Satzstellung",type:"mc",
q:"Welcher Satz ist grammatisch korrekt?\n\n(a) Ungeduldig wartet sie seit drei Stunden im Regen.\n(b) Ungeduldig sie wartet seit drei Stunden im Regen.\n(c) Ungeduldig wartet im Regen sie seit drei Stunden.",
o:["Nur (b)","Nur (a)","(a) und (c)"],
c:1,
model:"Nur (a) ist richtig: Ungeduldig wartet sie seit drei Stunden im Regen.",
rule:"<div class=rbox>Das finite Verb steht im Hauptsatz an <span class=hl>zweiter Stelle</span>.<br>Zeit (seit drei Stunden) steht vor Ort (im Regen).</div>"},

// Umgewandelt von self zu cross – Kommaposition markiert mit ()
{sub:"Nebensätze (1)",type:"cross",
q:"Komma ja oder nein? (Stelle markiert mit () )",
rows:["Sie fragt sich ernsthaft () ob die ganze Arbeit notwendig ist.","Während ich den ersten Gang vorbereite () kannst du den Tisch decken.","Ich möchte das Buch lesen () das du mir empfohlen hast.","Bevor wir beginnen () sollten wir die Regeln lesen () damit kein Fehler passiert. [beide Stellen]","Sie kommt () und bringt einen Kuchen mit."],
cols:["Komma nötig","kein Komma"],
correct:[0,0,0,0,1],
model:"ob/während/das(Rel.)/bevor+damit → Nebensatz → Komma · und (kein eigenständiger NS) → kein Komma",
rule:"<div class=rbox>Komma zwischen Haupt- und Nebensatz: ob, während, das (Rel.), bevor, damit<br>Vor <em>und</em> ohne Nebensatz: <span class=hl>kein Komma</span></div>"},

// Umgewandelt von self zu cross
{sub:"Nebensätze (2)",type:"cross",
q:"Komma ja oder nein?",
rows:["Die Mannschaft muss trainieren () da schon bald das nächste Spiel ansteht.","Bevor wir uns an den Tisch setzen () sollten wir ihn erst decken.","Jetzt sehe ich endlich das Haus () das du mir beschrieben hast.","Nachdem wir nach Hause gekommen waren () setzten wir uns () weil wir uns aufwärmen mussten. [beide Stellen]","Wir gehen ins Kino () und essen danach."],
cols:["Komma nötig","kein Komma"],
correct:[0,0,0,0,1],
model:"da/bevor/das(Rel.)/nachdem+weil → NS → Komma · und (gleiche Subjektkette, kein NS) → kein Komma",
rule:"<div class=rbox>Nebensätze (da, bevor, das, nachdem, weil) → Komma davor und/oder danach<br>Vor <em>und</em> ohne Nebensatz: kein Komma</div>"},

// Umgewandelt von self zu cross
{sub:"dass / da / anstatt",type:"cross",
q:"Komma ja oder nein?",
rows:["Ich hoffe () dass du gestern gut nach Hause gekommen bist.","Ich habe mir Sorgen gemacht () da du dich nicht gemeldet hast.","Ob Luise morgen mit uns ins Kino geht () weiß ich leider noch nicht.","Anstatt seine Hausaufgaben zu machen () spielt er auf dem Computer.","Er trinkt Kaffee () und liest die Zeitung."],
cols:["Komma nötig","kein Komma"],
correct:[0,0,0,0,1],
model:"dass/da/ob(NS)/anstatt zu → Komma · und (kein NS, gleiches Subjekt) → kein Komma",
rule:"<div class=rbox>dass, da, ob, anstatt zu, wenn → Komma trennt Haupt- und Nebensatz<br>Vor <em>und</em> ohne NS: kein Komma</div>"},

// Umgewandelt von self zu cross
{sub:"Relativsatz & Apposition",type:"cross",
q:"Komma ja oder nein?",
rows:["Unser Nachbar () den wir kaum zu Gesicht bekommen () hat uns Kuchen gebracht. [zwei Stellen]","Er traf Katie () seine Schulfreundin () am Markt. [zwei Stellen]","Er kommt () und bringt Kuchen mit.","Sie liest das Buch () das auf dem Tisch liegt."],
cols:["Komma(s) nötig","kein Komma"],
correct:[0,0,1,0],
model:"den(Rel.)/seine Schulfreundin(Apposition) → einschließen mit Kommas · und(kein NS) → kein Komma · das(Rel.) → Komma",
rule:"<div class=rbox>Eingeschobener Relativsatz → zwei Kommas<br>Apposition (erläuternder Zusatz) → zwei Kommas<br>Vor <em>und</em> ohne NS: kein Komma</div>"},

// Umgewandelt von self zu cross
{sub:"Aufzählung & aber",type:"cross",
q:"Komma ja oder nein?",
rows:["Kinder () Jugendliche und Erwachsene können das Inlineskaten erlernen.","Süßigkeiten schmecken gut () aber sind schädlich für die Zähne.","Damit unser Körper Krankheiten bekämpfen kann () ist eine gesunde Ernährung wichtig.","Die drei wichtigsten Stoffe sind Eiweiße () Kohlenhydrate und Fette.","Eiweiße () und Kohlenhydrate sind wichtig."],
cols:["Komma nötig","kein Komma"],
correct:[0,0,0,0,1],
model:"Aufzählung(zwischen Elementen)/aber(Entgegensetzung)/damit(NS)/Aufzählung → Komma · und (nur zwei Elemente) → kein Komma",
rule:"<div class=rbox>Aufzählung: Komma zwischen gleichrangigen Gliedern, <span class=hl>KEIN Komma vor und</span><br>aber → Komma davor<br>Nebensatz (damit) → Komma</div>"},

// Umgewandelt von self zu cross
{sub:"Komplexer Satz",type:"cross",
q:"Komma ja oder nein?",
rows:["Wasser ist die Grundlage allen Lebens () denn jedes Lebewesen benötigt es.","Wasser ist für viele Menschen selbstverständlich () da sie nur den Wasserhahn aufdrehen müssen () um es zu bekommen. [beide Stellen]","Kohlenhydrate liefern wichtige Energie () die wir benötigen () um den Alltag zu meistern. [beide Stellen]","Er schläft () und träumt."],
cols:["Komma nötig","kein Komma"],
correct:[0,0,0,1],
model:"denn(HS-Konj.)/da(NS)/um...zu(Infinitivgruppe)/die(Rel.)/um...zu → Komma · und(kein NS) → kein Komma",
rule:"<div class=rbox>denn (HS-Konjunktion) → Komma davor<br>da (NS) → Komma<br>um...zu (Infinitivgruppe) → Komma<br>die (Relativsatz) → Komma</div>"},

// BEHALTEN als self: vollständige Satzumformung (indirekte Rede)
{sub:"Indirekte Rede (Konjunktiv I)",type:"self",
q:"Formen Sie in indirekte Rede um:\n\nBeispiel: Anne meint: 'Der Unterricht fällt heute aus.'\n→ Anne meint, der Unterricht falle heute aus.\n\na) Rena behauptet: 'Das Theatertreffen ist erst morgen.'\nb) Walter versichert: 'Ich akzeptiere die Entscheidung.'\nc) Lukas sagt: 'Die Rechtschreib-AG wird erst morgen stattfinden.'",
model:"a) Rena behauptet, das Theatertreffen sei erst morgen.\nb) Walter versichert, er akzeptiere die Entscheidung.\nc) Lukas sagt, die Rechtschreib-AG werde erst morgen stattfinden.",
rule:"<div class=rbox>Indirekte Rede → <span class=hl>Konjunktiv I</span>:<br>ist → sei | akzeptiere → akzeptiere | wird → werde<br>Pronomen anpassen: ich → er/sie</div>"},

{sub:"das oder dass? (Kreuzen)",type:"cross",
q:"Ergänze das, Das, dass oder Dass:",
rows:["(a) Satzanfang: ___ du deine Meinung sagst, ...","(a) ..., ___ finde ich gut.","(b) Satzanfang: ___ Gute war, ...","(b) ..., ___ alle am Spiel beteiligt waren."],
cols:["das","Das","dass","Dass"],
correct:[3,0,1,2],
model:"(a) Dass du deine Meinung sagst, das finde ich gut.\n(b) Das Gute war, dass alle am Spiel beteiligt waren.",
rule:"<div class=rbox><span class=hl>das</span>: Artikel/Pronomen → durch 'dieses' ersetzbar<br><span class=hl>dass</span>: Konjunktion → nicht ersetzbar, leitet Nebensatz ein</div>"},

// Umgewandelt von self zu cross
{sub:"das oder dass? (Lücken)",type:"cross",
q:"das oder dass?",
rows:["Erkläre mir bitte, warum ___ so ist.","Ich hoffe, ___ du gut nach Hause gekommen bist.","Das Buch, ___ du mir empfohlen hast, war toll.","Er sagte, ___ er morgen kommen würde."],
cols:["das","dass"],
correct:[0,1,0,1],
model:"warum das(Pronomen, durch dieses ersetzbar) / dass(Konjunktion, NS) / das(Relativpronomen) / dass(Konjunktion, NS)",
rule:"<div class=rbox>Probe: durch 'welches/dieses' ersetzbar? → <span class=hl>das</span><br>Nicht ersetzbar → <span class=hl>dass</span> (Konjunktion)</div>"}

]},

// ── 6: WORTSCHATZ ───────────────────────────────────────────────
{id:"bbr_wortschatz",title:"Wortschatz",emoji:"📖",color:"#be185d",qs:[

// Umgewandelt von self zu mc (Gegenteil auswählen statt tippen)
{sub:"Antonyme (1)",type:"mc",
q:"Welches ist das korrekte Antonym (Gegenteil)?\n\na) warm →\nb) sauer →\nc) freundlich →\nd) Mehrheit →",
o:["kalt / süß / feindlich / Minderheit",
   "kühl / bitter / verfeindet / Mehrheit",
   "kalt / sauer / unfreundlich / Minderheit"],
c:0,
model:"kalt / süß / feindlich / Minderheit",
rule:"<div class=rbox><span class=hl>Antonym</span> = das direkte Gegenteil eines Wortes</div>"},

// Umgewandelt von self zu mc
{sub:"Antonyme (2)",type:"mc",
q:"Welches ist das korrekte Antonym (Gegenteil)?\n\na) reich →\nb) fröhlich →\nc) leise →\nd) viele →",
o:["arm / traurig / laut / wenige",
   "arm / traurig / laut / viele",
   "ärmlich / traurig / lauter / wenig"],
c:0,
model:"arm / traurig / laut / wenige",
rule:"<div class=rbox>Gegenteil bilden – achten Sie auf Wortart und Kontext!</div>"},

// Umgewandelt von self zu mc (Bedeutung auswählen statt zuordnen)
{sub:"Homonyme (1)",type:"mc",
q:"Was bedeutet das Wort in diesem Satz?\n(a) ‚Die Mutter kocht das Essen.' – Mutter =\n(b) ‚Er konnte sein Laster nicht ablegen.' – Laster =\n(c) ‚Der Leiter verteilte die Aufgaben.' – Leiter =",
o:["Person / schlechte Angewohnheit / Führungsperson",
   "Schraube / Fahrzeug / Gerät mit Sprossen",
   "Person / schlechte Angewohnheit / Gerät mit Sprossen"],
c:0,
model:"Mutter=Person / Laster=schlechte Angewohnheit / Leiter=Führungsperson",
rule:"<div class=rbox><span class=hl>Homonyme</span>: gleiche Schreibweise, unterschiedliche Bedeutung.<br>Der Kontext entscheidet!</div>"},

// Umgewandelt von self zu mc
{sub:"Homonyme (2)",type:"mc",
q:"Was bedeutet das Wort in diesem Satz?\n(a) ‚Eine Prinzessin wohnt in einem Schloss.' – Schloss =\n(b) ‚Die Wunde wurde mit einem Pflaster versorgt.' – Pflaster =\n(c) ‚Der Hahn kräht jeden Morgen.' – Hahn =",
o:["Gebäude / Wundschutzmittel / Tier",
   "Sicherungsobjekt / Straßenbelag / Sanitärobjekt",
   "Gebäude / Straßenbelag / Tier"],
c:0,
model:"Schloss=Gebäude / Pflaster=Wundschutzmittel / Hahn=Tier",
rule:"<div class=rbox>Homonyme haben dieselbe Schreibweise, aber völlig verschiedene Bedeutungen.</div>"},

// Umgewandelt von self zu cross
{sub:"Stilebenen (1)",type:"cross",
q:"Ordne die Wörter den Stilebenen zu:",
rows:["latschen","gehen","schreiten","verpulvern","verschwenden","vergeuden","Bude","Zimmer","Gemach"],
cols:["umgangssprachlich","Standardsprache","gehoben"],
correct:[0,1,2,0,1,2,0,1,2],
model:"umgangssprachlich: latschen/verpulvern/Bude · Standard: gehen/verschwenden/Zimmer · gehoben: schreiten/vergeuden/Gemach",
rule:"<div class=rbox><span class=hl>Umgangssprache</span>: informell, salopp<br><span class=hl>Standard</span>: neutral, Alltagssprache<br><span class=hl>Gehoben</span>: formell, literarisch oder veraltet</div>"},

// Umgewandelt von self zu cross
{sub:"Stilebenen (2)",type:"cross",
q:"Ordne die Wörter den Stilebenen zu:",
rows:["futtern","essen","speisen","Gaul","Pferd","Ross","klauen","stehlen","entwenden"],
cols:["umgangssprachlich","Standardsprache","gehoben"],
correct:[0,1,2,0,1,2,0,1,2],
model:"umgangssprachlich: futtern/Gaul/klauen · Standard: essen/Pferd/stehlen · gehoben: speisen/Ross/entwenden",
rule:"<div class=rbox>Gleiche Bedeutung, unterschiedliche Stilebene – je nach Kontext und Situation wählen!</div>"},

// Umgewandelt von self zu cross
{sub:"Adverbien einordnen (1)",type:"cross",
q:"Ordne die Adverbien ein (später, besonders, gegenüber, fast, dort, unten, bald, vielleicht, nachher):",
rows:["später","besonders","gegenüber","fast","dort","unten","bald","vielleicht","nachher"],
cols:["Zeit","Art und Weise","Ort"],
correct:[0,1,2,1,2,2,0,1,0],
model:"Zeit: später/bald/nachher · Art und Weise: besonders/fast/vielleicht · Ort: gegenüber/dort/unten",
rule:"<div class=rbox>Zeit: wann? (später, bald, nachher)<br>Art und Weise: wie? (besonders, fast, vielleicht)<br>Ort: wo? (dort, unten, gegenüber)</div>"},

// Umgewandelt von self zu cross
{sub:"Adverbien einordnen (2)",type:"cross",
q:"Ordne die Adverbien ein (oft, besonders, hier, gern, niemals, dort, oben, sehr, jetzt):",
rows:["oft","besonders","hier","gern","niemals","dort","oben","sehr","jetzt"],
cols:["Zeit","Art und Weise","Ort"],
correct:[0,1,2,1,0,2,2,1,0],
model:"Zeit: oft/niemals/jetzt · Art und Weise: besonders/gern/sehr · Ort: hier/dort/oben",
rule:"<div class=rbox>Zeit: oft, niemals, jetzt<br>Art: gern, sehr, besonders<br>Ort: hier, dort, oben</div>"}

]}

];
