const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secondsEl = document.getElementById("seconds")
const say = document.querySelector(".status")



const newYear = '22 Oct 2022';


function countdown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    // Stops the countdown and display happy birthday
    if (currentDate >= newYearDate) {
      console.log("Happy Birthday");

      daysEl.innerHTML = "00";
      hoursEl.innerHTML = "00";
      minsEl.innerHTML = "00";
      secondsEl.innerHTML = "00";

      say.classList.add("rainbow-text")
      say.innerHTML = "Happy Birthday"
      document.body.style.backgroundImage = "url('birthday.jpg')";


    }
}

function formatTime(time){
    return time < 10 ? `0${time}`: time;
}

setInterval(countdown, 1000)

countdown();