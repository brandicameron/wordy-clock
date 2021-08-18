const hourDisplay = document.getElementById('hour');
const minDisplay = document.getElementById('min');

function hoursAsWords() {
  const hours = new Date().getHours();
  switch (hours) {
    case 1:
    case 13:
      return 'one';
      break;
    case 2:
    case 14:
      return 'two';
      break;
    case 3:
    case 15:
      return 'three';
      break;
    case 4:
    case 16:
      return 'four';
      break;
    case 5:
    case 17:
      return 'five';
      break;
    case 6:
    case 18:
      return 'six';
      break;
    case 7:
    case 19:
      return 'seven';
      break;
    case 8:
    case 20:
      return 'eight';
      break;
    case 9:
    case 21:
      return 'nine';
      break;
    case 10:
    case 22:
      return 'ten';
      break;
    case 11:
    case 23:
      return 'eleven';
      break;
    case 12:
    case 24:
      return 'twelve';
  }
}

function minutesAsWords() {
  const mins = new Date().getMinutes();

  switch (mins) {
    case 0:
      return "o'clock";
      break;
    case 1:
      return 'oh one';
      break;
    case 2:
      return 'oh two';
      break;
    case 3:
      return 'oh three';
      break;
    case 4:
      return 'oh four';
      break;
    case 5:
      return 'oh five';
      break;
    case 6:
      return 'oh six';
      break;
    case 7:
      return 'oh seven';
      break;
    case 8:
      return 'oh eight';
      break;
    case 9:
      return 'oh nine';
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
      return 'thirteen';
      break;
    case 14:
      return 'fourteen';
      break;
    case 15:
      return 'fifteen';
      break;
    case 16:
      return 'sixteen';
      break;
    case 17:
      return 'seventeen';
      break;
    case 18:
      return 'eighteen';
      break;
    case 19:
      return 'nineteen';
      break;
    case 20:
      return 'twenty';
      break;
    case 21:
      return 'twenty-one';
      break;
    case 22:
      return 'twenty-two';
      break;
    case 23:
      return 'twenty-three';
      break;
    case 24:
      return 'twenty-four';
      break;
    case 25:
      return 'twenty-five';
      break;
    case 26:
      return 'twenty-six';
      break;
    case 27:
      return 'twenty-seven';
      break;
    case 28:
      return 'twenty-eight';
      break;
    case 29:
      return 'twenty-nine';
      break;
    case 30:
      return 'thirty';
      break;
    case 31:
      return 'thirty-one';
      break;
    case 32:
      return 'thirty-two';
      break;
    case 33:
      return 'thirty-three';
      break;
    case 34:
      return 'thirty-four';
      break;
    case 35:
      return 'thirty-five';
      break;
    case 36:
      return 'thirty-six';
      break;
    case 37:
      return 'thirty-seven';
      break;
    case 38:
      return 'thirty-eight';
      break;
    case 39:
      return 'thirty-nine';
      break;
    case 40:
      return 'forty';
      break;
    case 41:
      return 'forty-one';
      break;
    case 42:
      return 'forty-two';
      break;
    case 43:
      return 'forty-three';
      break;
    case 44:
      return 'forty-four';
      break;
    case 45:
      return 'forty-five';
      break;
    case 46:
      return 'forty-six';
      break;
    case 47:
      return 'forty-seven';
      break;
    case 48:
      return 'forty-eight';
      break;
    case 49:
      return 'forty-nine';
      break;
    case 50:
      return 'fifty';
      break;
    case 51:
      return 'fifty-one';
      break;
    case 52:
      return 'fifty-two';
      break;
    case 53:
      return 'fifty-three';
      break;
    case 54:
      return 'fifty-four';
      break;
    case 55:
      return 'fifty-five';
      break;
    case 56:
      return 'fifty-six';
      break;
    case 57:
      return 'fifty-seven';
      break;
    case 58:
      return 'fifty-eight';
      break;
    case 59:
      return 'fifty-nine';
      break;
  }
}

function changeNoon() {
  if (
    new Date().getMinutes().toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) === '00' &&
    new Date().getHours() === 12
  ) {
    hourDisplay.textContent = 'noon';
    minDisplay.style.display = 'none';
  } else {
    minDisplay.style.display = 'block';
  }
}

//420 easter egg
function fourtwenty() {
  const smoke = document.getElementById('smoke');
  const allTime = document.querySelector('h1');
  let getmins = new Date().getMinutes().toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  let gethour = new Date().getHours();

  if (getmins === '20' && gethour === 16) {
    allTime.style.setProperty('--shadow-color', '#52ce00');
    smoke.classList.add('show');
  } else {
    allTime.style.setProperty('--shadow-color', '#5448ff');
    smoke.classList.remove('show');
  }
}

function displayTime() {
  hourDisplay.textContent = hoursAsWords();
  minDisplay.textContent = minutesAsWords();
  changeNoon();
  fourtwenty();
}

// Update time
window.onload = function () {
  setInterval(displayTime, 1000);
};
