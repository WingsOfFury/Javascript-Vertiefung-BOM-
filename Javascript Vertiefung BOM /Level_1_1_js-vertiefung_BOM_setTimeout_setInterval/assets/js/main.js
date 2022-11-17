/*
Schreibe eine Funktion, die nach X Sekunden einen Text anzeigt.
Nutze setTimeout
*/
console.log("Start Warten für 3 Sekunden");
setTimeout(function () {
    console.log("Erledigt. Du hast 3 Sekunden verschwendet");
}, 3000);




/*
Schreibe eine Funktion die das Ergebnis der Vorschau anzeigt.
Nutze setInterval new Date()
*/
// function myTimer() {
//     const d = new Date();
//     console.log(d.toLocaleTimeString("de-DE"));
// }
// const timerId = setInterval(myTimer, 1000);




/*
Schreibe eine Funktion die das Ergebnis der Vorschau ausgibt.
Nutze setInterval, clearInterval, if, else
*/

// function startCountdown(seconds) {
//     let counter = seconds;

//     const interval = setInterval(() => {
//         console.log(counter);
//         counter--;

//         if (counter < 1) {
//             clearInterval(interval);
//             console.log("Endlich Feierabend!");
//         }
//     }, 1000);
// }
// startCountdown(10)















// Test


// let i = 10;
// let timer = setInterval(function () {
//     console.log(i--);
//     if (i < 1) clearInterval(timer);
//     console.log("Endlich Feierabend!");
// }, 1000);
