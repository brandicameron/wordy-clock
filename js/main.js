const hourDisplay = document.getElementById('hour');
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');
const smoke = document.getElementById('smoke');

function hoursAsWords() {
  const hours = new Date().getHours();
  switch (hours) {
    case 1:
      return 'one';
      break;
    case 2:
      return 'two';
      break;
    case 3:
      return 'three';
      break;
    case 4:
      return 'four';
      break;
    case 5:
      return 'five';
      break;
    case 6:
      return 'six';
      break;
    case 7:
      return 'seven';
      break;
    case 8:
      return 'eight';
      break;
    case 9:
      return 'nine';
      break;
    case 10:
      return 'ten';
      break;
    case 11:
      return 'eleven';
      break;
    case 12:
      return 'twelve';
      break;
    case 13:
      return 'one';
      break;
    case 14:
      return 'two';
      break;
    case 15:
      return 'three';
      break;
    case 16:
      return 'four';
      break;
    case 17:
      return 'five';
      break;
    case 18:
      return 'six';
      break;
    case 19:
      return 'seven';
      break;
    case 20:
      return 'eight';
      break;
    case 21:
      return 'nine';
      break;
    case 22:
      return 'ten';
      break;
    case 23:
      return 'eleven';
      break;
    case 24:
      return 'twelve';
  };
};
hoursAsWords();

function changeNoon() {
  if (new Date().getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) === '00' && new Date().getHours() === 12) {
    hourDisplay.textContent = 'noon';
    minDisplay.style.display = 'none';
  } else {
    minDisplay.style.display = 'block';
  };
};

function changeOClock() {
  if (new Date().getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    }) === '00') {
    minDisplay.textContent = 'o\'clock';
  };
};

function changeThirty() {
  if (new Date().getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,useGrouping: false}) === '30') {
    minDisplay.textContent = 'thirty';
  };
};

//420 easter egg
function fourtwenty() {
  const allTime = document.getElementById('time');
  const getmins = new Date().getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,useGrouping: false});
  
  if (getmins === '20' && new Date().getHours() === 16) {
    allTime.classList.add('fourtwenty');
    smoke.classList.add('show');
  } else {
    allTime.classList.remove('fourtwenty');
    smoke.classList.remove('show');
  };
};

function displayTime() {
  hourDisplay.textContent = hoursAsWords();
  minDisplay.textContent = new Date().getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2,useGrouping: false});
  secDisplay.textContent = new Date().getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2,useGrouping: false});
  changeNoon();
  changeOClock();
  changeThirty();
  fourtwenty();
};

// Updates the time
window.onload = function () {
  setInterval(displayTime, 500);
};