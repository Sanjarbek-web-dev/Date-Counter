const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

const YourDate = document.getElementById("date");

function countDown() {
    const EnterYourDate = new Date(YourDate.value)
    const currentDate = new Date();

    const totalSeconds = (EnterYourDate - currentDate)/1000;

    const days = Math.floor(totalSeconds/3600/24);
    const soat = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = soat;
    minsEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countDown();
setInterval(countDown, 1000)