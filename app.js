const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// const currentYear = new Date().getFullYear();
let year = 2023;
const diwaliDate = new Date(year, 10, 12, 0, 0, 0);
function countDownTimer() {
  var currentTime = new Date();
  var diff = diwaliDate - currentTime; //ms

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  console.log(d);
}
setInterval(countDownTimer, 1000);
