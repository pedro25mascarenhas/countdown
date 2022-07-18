const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const launch = '20 Jul 2022'

function countdown(){
  const launchDate = new Date(launch);
  const currentDate = new Date();
  const totalSeconds = (launchDate - currentDate) / 1000;
  const daysEl = Math.floor(totalSeconds/3600/24);
  const hoursEl = Math.floor(totalSeconds/3600) % 24;
  const minutesEl= Math.floor(totalSeconds/60) % 60;
  const secondsEl = Math.floor(totalSeconds) % 60;

  days.innerHTML = daysEl;
  hours.innerHTML = formatTime(hoursEl);
  minutes.innerHTML = formatTime(minutesEl);
  seconds.innerHTML = formatTime(secondsEl);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown()
setInterval(countdown, 1000)

//Show demais
