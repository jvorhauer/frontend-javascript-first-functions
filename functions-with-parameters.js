/* Opdracht 0: voorbeeld */
// Schrijf een functie genaamd add, die twee getallen verwacht, die bij elkaar optelt en teruggeeft
// ---- Verwachte uitkomsten:
// add(1, 4) geeft 5
// add(2, 5) geeft 7

function add(a, b) {
  return a + b;
}
const result = add(1, 4);
console.log(result);

/* Opdracht 1 */
// Schrijf een functie genaamd greeter, die een naam verwacht en een groet teruggeeft
// ---- Verwachte uitkomsten:
// greeter("Jan") geeft "Hoi Jan!"
// greeter("Kees") geeft "Hoi Kees!"

function greeter(name) {
  return "Hoi " + name + "!";
}
const greeting = greeter("Jan");
console.log(greeting);
console.log(greeter("Kees"));

/* Opdracht 2 */
// Schrijf een functie genaamd minutesToSeconds, die een hoeveelheid minuten verwacht (als een getal) en teruggeeft hoeveel seconden dat zijn.
// ---- Verwachte uitkomsten:
// minutesToSeconds(1) geeft 60
// minutesToSeconds(3) geeft 180
// minutesToSeconds(23) geeft 1380

function minutesToSeconds(minutes) {
  return minutes * 60;
}
console.log("minutesToSeconds(1) geeft", minutesToSeconds(1), "seconden");
console.log("minutesToSeconds(3) geeft", minutesToSeconds(3), "seconden");
console.log("minutesToSeconds(23) geeft", minutesToSeconds(23), "seconden");

/* Opdracht 3 */
// Schrijf een functie genaamd merge, die twee strings verwacht en deze aan elkaar geplakt teruggeeft.
// Let op: je mag hier geen String methoden voor gebruiken zoals concat().
// ---- Verwachte uitkomsten:
// merge("abra", "cadabra") geeft "abracadabra"
// merge("zoet", "sappig") geeft "zoetsappig"

function merge(s1, s2) {
  return s1 + s2;
}
const abracadabra = merge("abra", "cadabra");
console.assert(abracadabra === "abracadabra", "merged woord is %s", abracadabra);
const zoetsappig = merge("zoet", "sappig");
console.assert(zoetsappig === "zoetsappig", "het woord is %", zoetsappig);

/* Opdracht  4 */
// Schrijf een functie genaamd calculateDogYears die de hondenleeftijd verwacht en dit omrekent naar mensenjaren (1 tot 7). Op basis daarvan wordt een zinnetje teruggegeven.
// ---- Verwachte uitkomsten:
// calculateDogYears(6) geeft "Jouw hond is 42 jaar oud in mensenjaren."
// calculateDogYears(2) geeft "Jouw hond is 14 jaar oud in mensenjaren."

function calculateHoomanYears(dogYears) {
  return 7 * dogYears;
}
const hoomanYear6 = calculateHoomanYears(6);
console.assert(hoomanYear6 === 42, "dog years zou 42 moeten zijn, maar is %d", hoomanYear6);
const hoomanYear2 = calculateHoomanYears(2);
console.assert(hoomanYear2 === 14, "dog years zou 14 moeten zijn, maar is %d", hoomanYear6);

/* Opdracht 5 */
// Schrijf een functie genaamd wrapper, die twee parameters verwacht: een woord en een karakter
// De functie omwikkelt het woord met het karakter en geeft dit terug
// ---- Verwachte uitkomsten:
// wrapper("bril", "*") geeft "*bril*"
// wrapper("beep", "_") geeft "_beep_"
// wrapper("kaas", "Q") geeft "QkaasQ"

function wrap(s, prePost) {
  return prePost + s + prePost;
}
console.assert(wrap("bril", "*") === "*bril*");


/* Bonus opdracht  */
// Schrijf een functie genaamd createDetailString, die een object met de properties firstName, lastName en profession verwacht en een zin teruggeeft
// ---- Verwachte uitkomsten:
// createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'}) geeft "Het beroep vam Jan Jansen is docent."
// createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'}) geeft "Het beroep vam Kees Klaasen is brandweerman."

function createDetailString(obj) {
  return "Het beroep van " + obj.firstName + " " + obj.lastName + " is " + obj.profession;
}
const janJansen = createDetailString({ firstName: 'Jan', lastName: 'Jansen', profession: 'docent'});
console.assert(janJansen === "Het beroep van Jan Jansen is docent", "'%s' werd niet verwacht", janJansen);
const keesKlaasen = createDetailString({ firstName: 'Kees', lastName: 'Klaasen', profession: 'brandweerman'});
console.assert(keesKlaasen === "Het beroep van Kees Klaasen is brandweerman", "'%s' werd neit verwacht", keesKlaasen);
