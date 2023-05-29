/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

let catName = "Nando"; // In questo esempio abbiamo assegnato alla variabile catName un valore di string, ossia valore testuale. Possiamo racchiudere il testo che scegliamo tra graffe doppie ""  singole '' . o `
let catAge = 3; // In questo esempio abbiamo assegnato all variabile catAge un valore di number, ossia numerico,  di 3. Il number può essere anche espresso in decimali  let catAge = 3.5;  e si comporta come un vero e proprio numero, potremo quindi utilizzarlo per fare calcoli.
let isCatFeline = true; // In questo esempio abbiamo assegnato alla variabile isCatFeline un valore booleano di true. Avremo potuto anche assegnare un valore di false, l'altro booleano.
let catIll; //In questo esempio abbiamo creato una variabile catIll, ma non abbiamo assegnato ad essa nessun valore. Questa variabile però esiste, ed ha in questo mommento valore di undefined
let catBrother = null; // In questo esempio abbiamo assegnato alla variabile catBrother un valore di null. Null, a differenza di undefined, rappresenta un vero e proprio valore vuoto.

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Alessandro";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let sum = 12 + 20;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Giorgino";

// const region = "Tuscany";
// region = "Puglia";
//La console risponderà con un errore "D1.js:47 Uncaught TypeError: Assignment to constant variable."
//lascio commentato per poter vedere esercizi dopo senza errore

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let esercizioSei = 4 - x;
console.log(esercizioSei);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";

let differentNameTest = name1 === name2 ? true : false;
console.log("differentNameTest is " + differentNameTest);

// qui soluzione conn toLowerCase()
name2 = name2.toLowerCase();
let equalNameTest = name1 === name2 ? true : false;
console.log("equalNameTest is " + equalNameTest);

// QUI soluzione "cambiando" il valore di name2
name2 = name1;

let equalNameTest2 = name1 === name2 ? true : false;
console.log("equalNameTest2 is " + equalNameTest2);
