const targetDate = new Date("2023-12-25 00:00:00 PST"); // countdown target end date 
const testDate = new Date("2023-12-01 10:56:00 PST");

// Render countdown data to the DOM
function renderCountdown(clockData){
  const { days, hours, minutes, seconds } = clockData;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update countdown clock
function updateClock(endTime) {
  const timeDiff = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((timeDiff / 1000) % 60);
  const minutes = Math.floor((timeDiff / 1000/60) % 60);
  const hours = Math.floor(timeDiff / (1000*60*60) % 24);
  const days = Math.floor(timeDiff / (1000*60*60*24));
  renderCountdown({ days, hours, minutes, seconds});
}

let handleCountdown = setInterval(() => {
  // update countdown timer
  updateClock(targetDate);
  // check if target date has been reached, stop the timer
  if (Date.parse(targetDate) <= Date.parse(new Date())) {
    clearInterval(handleCountdown);
    document.getElementById('countdown-list').style.display = 'none';
    document.getElementById('elf-gif').style.display = 'block';
    document.getElementById('headline').textContent = `🎄 Merry Christmas! 🎄`
  }
}, 1000)