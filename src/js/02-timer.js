import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const timerFields = document.querySelectorAll('.field .value');

// dateTimePicker.style.size = '100';
// dateTimePicker.style.height = '40px';

dateTimePicker.style.fontSize = '20px';
startButton.style.height = '40px';
startButton.style.width = '80px';
startButton.style.color = 'black';
startButton.style.fontSize = '18px';
startButton.style.backgroundColor = '#E0B6FD';
startButton.style.borderColor = '#CCCACD';

timer.style.display = 'flex';
timer.style.maxWidth = '390px';
timer.style.gap = '27px';

timerFields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.fontSize = '25px';
  field.style.alignItems = 'center';
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimerDisplay(time) {
  timerFields[0].textContent = time.days.toString().padStart(2, '0');
  timerFields[1].textContent = time.hours.toString().padStart(2, '0');
  timerFields[2].textContent = time.minutes.toString().padStart(2, '0');
  timerFields[3].textContent = time.seconds.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate > now) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(dateTimePicker, options);

let countdownInterval;

startButton.addEventListener('click', () => {
  const selectedDate = flatpickr.parseDate(dateTimePicker.value);
  const now = new Date();

  if (selectedDate <= now) {
    alert('Please choose a future date');
    return;
  }

  clearInterval(countdownInterval);

  countdownInterval = setInterval(() => {
    const now = new Date();
    let timeRemaining = selectedDate - now;

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
      return;
    }

    const time = convertMs(timeRemaining);
    updateTimerDisplay(time);
    timeRemaining = -1000;
  }, 1000);
});
