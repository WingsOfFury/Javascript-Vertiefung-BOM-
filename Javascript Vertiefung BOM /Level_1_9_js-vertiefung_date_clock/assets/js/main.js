/*
Zeige eine Uhr, die mit einem Timing-Event erstellt wurde.

Schreibe eine Funktion startTime, die die aktuelle Uhrzeit anzeigt.

Versuche es selbst zu schreiben.

Zeige das Ergebnis im HTML Dokument an.

Verbinde das Uhrendesign von Aufgabe Lev1_2 GET Date Methods mit dieser Funktion.
*/



function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ms = today.getMilliseconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h + ":" + m + ":" + s + ":" + ms;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
setInterval(startTime, 1000);