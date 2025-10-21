// // // console.log("Hello-World!");

// // //boolean
// // let isTrue = true;
// // let isFalse = false;

// // //Number
// // 3;
// // 3.14;
// // -5;
// // Infinity;
// // -Infinity;
// // NaN; // Not a Number

// // //String
// // "Hello";
// // 'Hello';
// // `Hello ${isTrue}`;

// // undefined //indefinita
// // null //nullo

// // //operatori logici

// // // && (AND)
// // true && true;
// // true && false;

// // false && true;
// // false && false;
// // console.log(true && true); //vero
// // console.log(true && false); //falso
// // // || (OR)

// // true || true;
// // true || false;
// // false || true;
// // false || false;
// // console.log(true || true); //vero
// // console.log(false || false); //falso
// // console.log(true || false); //vero
// // // ! (NOT)
// // true; //vero
// // !false; //falso

// // false; //falso
// // !true; //vero

// // //operatori matematici

// // //+ addizione
// // 3 + 2; //5

// // //- sottrazione
// // 3 - 2; //1

// // // * moltiplicazione
// // 3 * 2; //6

// // // / divisione
// // 3 / 2; //1.5

// // //potenza
// // 3 ** 2; //9


// // // % modulo (resto della divisione)
// // 3 % 2; //1
// // 4 % 2; //0

// // // somma di stringhe (+)
// // "ciao" + " " + "mamma"; // "ciao mamma"
// // "ciao" + "bello"; // "ciao bello"

// // //operatori di confronto

// // // == uguaglianza (== 0 ===)

// // 5 == '5'; //true
// // 5 === '5'; //false

// // 7 == "7"; //true //il doppio uguale converte prima di confrontare
// // 7 === "7"; //false

// // true === true; //true
// // true === false; //false

// // "pippo" === "pippo"; //true
// // "pippo" === "pluto"; //false

// // // != diversità (!= 0 !==)

// // 5 !== '5'; //false
// // 5 !== '5'; //true
// // !(5 == '5'); //false
// // !(5 === '5'); //true

// // // > maggiore
// // 5 > 3; //true
// // 3 > 5; //false

// // // parentesi
// // (3 + 2) * 4; //20



// // //Esercizio

// // !(true || true) //false

// // !(true || ("pippo" === "pluto")) //false

// // !true || false //false

// // //3)

// // !((12 % 5) === 3) //true

// // ("ciao mondo" !== ("ciao" + " " + "mondo")) === false; //false


// // //Variabili
// // //VAR

// // // var firstNumber = 5;
// // // console.log(firstNumber);

// // // var secondNumber = 10;
// // // console.log(secondNumber);

// // // var sum = firstNumber + secondNumber;
// // // console.log(sum);

// // // var empty;
// // // console.log(empty);

// // // //LET

// // // let firstNumber = 5;
// // // console.log(firstNumber);

// // // let secondNumber = 10;
// // // console.log(secondNumber);

// // // let sum = firstNumber + secondNumber;
// // // console.log(sum);

// // // let empty;
// // // console.log(empty);

// // // secondNumber = 15;

// // // let sum = firstNumber + secondNumber;

// // // console.log(secondNumber);

// // let firstName = "Mario";
// // let hello = "Ciao" + " " + firstName;

// // //Differenza VAR e LET


// // let pippo = 5;

// // let pluto = pippo + 10;

// // console.log(pluto);

// // var paperino = 10;
// // var paperone = paperino + 15;

// // console.log(paperone);

// // //CONST

// // const qui= true;
// // const quo = false;
// // const qua = qui || quo;
// // console.log(qua);

// // qui = false; //errore esiste gia la variabile, la costante non puo essere modificata


// //type off

// const variabile1 = 3;

// console.log(typeof variabile1);

// const variabile2 = true;
// console.log(typeof variabile2);

// const variabile3 = "Axia";
// console.log(typeof variabile3);

// const variabile4 = typeof variabile1
// console.log("il contenuto di Variabile4 è" + variabile4 + "e il suo tipo è" + typeof variabile4);

// const variabile5 = 5 > 6;
// console.log(typeof variabile5);

// let variabile6;
// console.log(typeof variabile6); //tipo undefined

// let variabile7 = null;
// console.log(typeof variabile7); //tipo object 

// let variabile8 = NaN;
// console.log(typeof variabile8); //tipo Number?

// let dynamic;
// console.log(typeof dynamic);

// dynamic = 5;
// console.log(typeof dynamic);

// dynamic = "pippo";
// console.log(typeof dynamic);


alert("ciao mondo");


//prompt
prompt("inserisci il tuo nome");

//Calcolatrice Base

const first= prompt("dammi il primo numero");
const second = prompt("dammi il secondo numero");

console.log(first + second); //concatena come stringhe


const firstNumber = Number(first);
const secondNumber = Number(second);
const sum=(firstNumber + secondNumber); //somma come numeri

alert("la somma è: " + sum);

