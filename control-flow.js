// // // // // //IF se la condizione è true esegue il codice tra le graffe altrimenti lo salta

// // // // // const pippo = 5;
// // // // // const pluto = 3;

// // // // // if (pippo > pluto) {
// // // // //     console.log("pippo è maggiore di pluto");
// // // // // }

// // // // // //IF...ELSE se la condizione è true esegue il codice tra le graffe dell'if altrimenti esegue il codice tra le graffe dell'else

// // // // //     if (pippo < pluto) {
// // // // //             console.log("pippo è minore di pluto");


// // // // //         } else {
// // // // //             console.log("pippo non è minore di pluto");
// // // // //         }

// // // // // //IF...ELSE IF...ELSE se la prima condizione è true esegue il codice tra le graffe dell'if, se la seconda condizione è true esegue il codice tra le graffe dell'else if, altrimenti esegue il codice tra le graffe dell'else

// // // // const candy = prompt("Quante caramelle vuoi?");{

// // // //     alert("sei a dieta")
// // // // }



// // // //     if (candynumber < 5) {

// // // // } else if (candynumber < 10) {
// // // //     alert("puoi prenderne altre");

// // // // } else if (candynumber < 15) {
// // // //     alert("hai lavato i denti?");

// // // // }
// // // // else if (candynumber < 20) {
// // // //     alert("ciccione basta caramelle!");

// // // // }
// // // // else {
// // // //     alert("hai il diabete!");
// // // // }


// // // // // //WHILE ciclo che si ripete finché la condizione è true

// // // let counter = 0;

// // // while (counter < 20) {
// // //     console.log(counter);
// // //     counter++;
// // // }

// // // console.log("fine ciclo");

// // // let outputString = "";

// // // while (outputString.length < 100) {
// // //     outputString = outputString + "pippo ";
// // //     console.log(outputString);
// // // }
// // // console.log("fine stringa");

// // // while (true) {
// // //     const numberConverted = Number(prompt("Inserisci un numero:"));
// // //     if (!isNaN(numberConverted)) {
// // //         console.log("Hai inserito il numero:", numberConverted);

// // //         if (numberConverted === 20) {
// // //             console.log("Hai inserito il numero magico!");
// // //         }

// // //         break;
// // //     } else {
// // //         console.log("Input non valido. Riprova.");
// // //     }
// // // }
// // // let counter = 0;

// // // do {
// // //     console.log("Ciao " + counter);
// // //     counter++;
// // // } while (counter < 0);
// // // console.log("fine ciclo do while");


// // // //FOR
// // // for (let i = 0; i < 10; i++) {
// // //     console.log("Ciao " + i);
// // // }
// // // console.log("fine ciclo for");

// // for (let i = 100; i >= 0; i--) {
// //     console.log("Ciao " + i);
// // }


// // //SWITCH

// // const response = prompt("come ti senti oggi?");

// // switch (response) {
// //     case "felice":
// //         alert("Sono contento che tu sia felice!");
// //         break;
// //     case "triste":
// //         alert("Mi dispiace che tu sia triste.");
// //         break;
// //     case "arrabbiato":
// //         alert("Cerca di calmarti.");
// //         break;

// //     default:
// //         alert("Non capisco come ti senti.");
// //         break;
// // }


// // //es 7) fai un ciclo che stampi i numeri da 1 a 100 stampi pari se il numero è pari, dispari se il numero è dispari

// // for (let i = 1; i <= 101; i++) {
// //     if (i % 2 === 0) {
// //         console.log(i + " è pari");
// //     } else {
// //         console.log(i + " è dispari");
// //     }
// // }





// // Number1 = prompt("inserisci il primo numero");
// // numberconverted1 = Number(Number1);

// // Number2 = prompt("inserisci il secondo numero");
// // numberconverted2 = Number(Number2);

// // for (let i = 0; i < numberconverted1; i++) {
// //     const element = numberconverted2[i];    
// //     console.log(element);
// // }




// // let line = "#";

// // for (let i = 0; i < 7; i++) {

// //     console.log(line);

// //     line = line + "#";

// // }

// // FizzBuzz 

// // console.log("=== FizzBuzz Prova ===");

// // for (let i = 1; i <= 100; i++) {
// //     if (i % 3 === 0 && i % 5 === 0) {
// //         console.log("FizzBuzz");
// //     } else if (i % 3 === 0) {
// //         console.log("Fizz");
// //     } else if (i % 5 === 0) {
// //         console.log("Buzz");
// //     } else {
// //         console.log(i);
// //     }
// // }

// // Scacchiera
// // Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// console.log("=== Scacchiera  ===");

// let chessboard = "";

// for (let row = 0; row < 8; row++) {
//     for (let col = 0; col < 8; col++) {
//         if ((row + col) % 2 === 0) {
//             chessboard += " #";
//         } else {
//             chessboard += "";
//         }
//     }
//     chessboard += "\n";
// }

// console.log(chessboard);




