/*
Schreibe eine Funktion, die beim Drücken des Buttons von 100% bis 0% runter zählt (siehe Ergebnisvorschau).

HTML und CSS befindet sich im Kommentar.
Nutze onclick setInterval clearInterval if, else if querySelector
*/




let startCount = 100;

const stopCount = 0,
    duration = 5000,
    countDownElement = document.querySelector(".zeit"),
    downElement = document.getElementById("btn"),

    intervalTime = duration / Math.abs(startCount - stopCount);

function myFunction() {
    let countDown = setInterval(
        function () {
            if (startCount === stopCount) clearInterval(countDown)
            countDownElement.innerHTML = startCount + "%";
            if (startCount > stopCount) {
                startCount--
            } else {
                startCount++
            }
        },
        200
    );
}
