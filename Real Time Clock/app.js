// document.body.style.backgroundImage = "url('image.jpg')";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";

let spanHour = document.querySelector("#hour");
let spanMinute = document.querySelector("#minute");
let spanSecond = document.querySelector("#second");
let spanDayTime = document.querySelector("#dayTime");

function clock() {
    let ceas = new Date();

    let seconds = ceas.getSeconds();
    let minutes = ceas.getMinutes();
    let hours = ceas.getHours();
    let dayTime = "AM";

    if (hours >= 12) {
        dayTime = "PM";
        spanDayTime.innerHTML = dayTime;
    } else {
        spanDayTime.innerHTML = dayTime;
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours < 10) {
        spanHour.innerHTML = "0" + hours + ":";
    } else {
        spanHour.innerHTML = hours + ":";
    }

    if (minutes < 10) {
        spanMinute.innerHTML = "0" + minutes + ":";
    } else {
        spanMinute.innerHTML = minutes + ":";
    }

    if (seconds < 10) {
        spanSecond.innerHTML = "0" + seconds;
    } else {
        spanSecond.innerHTML = seconds;
    }
}

function setClock() {
    clock();
    window.setInterval("clock()", 500);
}
