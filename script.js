function eventWithDate(year, month, day, class1, class2, class3, class4) {

    var now = new Date();
    var eventDate = new Date(year, month, day);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remainingTime = eventTime - currentTime; // in milliseconds...

    var s = Math.floor(remainingTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    m %= 60;
    s %= 60;

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    console.log(d);
    console.log(h);
    console.log(m);
    console.log(s);

    document.getElementById(class1).textContent = d;
    document.getElementById(class2).textContent = h;
    document.getElementById(class3).textContent = m;
    document.getElementById(class4).textContent = s;

}

window.setInterval(function(){
    /// call your function here
    eventWithDate(2019, 4, 16, "days", "hours", "minutes", "seconds");
    eventWithDate(2018, 4, 20, "days2", "hours2", "minutes2", "seconds2");
  }, 1000);


