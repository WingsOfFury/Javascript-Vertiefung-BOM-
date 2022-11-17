/*
Schreibe eine Funktion die beim Start, die Zahlen runter zählt.
Schau Dir die Ergebnisvorschau an.

Der HTML und CSS Code befindet sich im Kommentar.
Nutze  window.onload setInterval() clearInterval()
getElementsByClassName()/getElementById()
if, else if
*/



timeLeft = 10;

document.getElementById("txt").style.color = "white";
document.getElementById("txt").style.fontSize = "80px";

function countdown() {
    timeLeft--;
    document.getElementById("txt").innerHTML = String(timeLeft);
    if (timeLeft > 0) {
        setTimeout(countdown, 1000);
    }
};

setTimeout(countdown, 1000);


setTimeout(function () {
    let message = document.getElementById("txt");
    message.parentElement.remove(message);

}, 11000);
