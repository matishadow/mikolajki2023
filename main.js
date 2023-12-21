function updateTimer() {
    past  = Date.parse("November 11, 2008 11:30:00");
    now     = new Date();
    diff    = now - past;

    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );

    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;

    document.getElementById("timer")
        .innerHTML =
        '<div style="margin-bottom: 6rem">' + '<span>Iza i Szymon 💘</span></div>' +
        '<div style="margin-bottom: 3rem">' + d + '<span>dni</span></div>' +
        '<div style="margin-top: 6rem">' + '<span>razem</span></div>';
}
setInterval('updateTimer()', 1000 );
