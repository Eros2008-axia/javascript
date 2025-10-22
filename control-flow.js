// // // //IF se la condizione è true esegue il codice tra le graffe altrimenti lo salta

// // // const pippo = 5;
// // // const pluto = 3;

// // // if (pippo > pluto) {
// // //     console.log("pippo è maggiore di pluto");
// // // }

// // // //IF...ELSE se la condizione è true esegue il codice tra le graffe dell'if altrimenti esegue il codice tra le graffe dell'else

// // //     if (pippo < pluto) {
// // //             console.log("pippo è minore di pluto");


// // //         } else {
// // //             console.log("pippo non è minore di pluto");
// // //         }

// // // //IF...ELSE IF...ELSE se la prima condizione è true esegue il codice tra le graffe dell'if, se la seconda condizione è true esegue il codice tra le graffe dell'else if, altrimenti esegue il codice tra le graffe dell'else

// // const candy = prompt("Quante caramelle vuoi?");{

// //     alert("sei a dieta")
// // }



// //     if (candynumber < 5) {

// // } else if (candynumber < 10) {
// //     alert("puoi prenderne altre");

// // } else if (candynumber < 15) {
// //     alert("hai lavato i denti?");

// // }
// // else if (candynumber < 20) {
// //     alert("ciccione basta caramelle!");

// // }
// // else {
// //     alert("hai il diabete!");
// // }


// // // //WHILE ciclo che si ripete finché la condizione è true

// let counter = 0;

// while (counter < 20) {
//     console.log(counter);
//     counter++;
// }

// console.log("fine ciclo");

// let outputString = "";

// while (outputString.length < 100) {
//     outputString = outputString + "pippo ";
//     console.log(outputString);
// }
// console.log("fine stringa");

// while (true) {
//     const numberConverted = Number(prompt("Inserisci un numero:"));
//     if (!isNaN(numberConverted)) {
//         console.log("Hai inserito il numero:", numberConverted);

//         if (numberConverted === 20) {
//             console.log("Hai inserito il numero magico!");
//         }

//         break;
//     } else {
//         console.log("Input non valido. Riprova.");
//     }
// }
// let counter = 0;

// do {
//     console.log("Ciao " + counter);
//     counter++;
// } while (counter < 0);
// console.log("fine ciclo do while");


// //FOR
// for (let i = 0; i < 10; i++) {
//     console.log("Ciao " + i);
// }
// console.log("fine ciclo for");

for (let i = 100; i >= 0; i--) {
    console.log("Ciao " + i);
}


//SWITCH

const response = prompt("come ti senti oggi?");

switch (response) {
    case "felice":
        alert("Sono contento che tu sia felice!");
        break;
    case "triste":
        alert("Mi dispiace che tu sia triste.");
        break;
    case "arrabbiato":
        alert("Cerca di calmarti.");
        break;

    default:
        alert("Non capisco come ti senti.");
        break;
}


//es 7) fai un ciclo che stampi i numeri da 1 a 100 stampi pari se il numero è pari, dispari se il numero è dispari

for (let i = 1; i <= 101; i++) {
    if (i % 2 === 0) {
        console.log(i + " è pari");
    } else {
        console.log(i + " è dispari");
    }