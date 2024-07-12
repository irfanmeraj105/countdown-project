const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time; 
};

const updateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;

  let calcdays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
  let calchours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let calcmins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calcsecs = Math.floor(timeDifference / 1000) % 60;
  days.textContent = formatTime(calcdays);
  hours.textContent = formatTime(calchours);
  mins.textContent = formatTime(calcmins);
  secs.textContent = formatTime(calcsecs);
};

const CountDown = (targetDate) => {
  setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("August 22 2024 10:00");
CountDown(targetDate);
