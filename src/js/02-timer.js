import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timer = document.querySelector('.timer');
const fields = document.querySelectorAll('.field');

dateTimePicker.style.width = '300px';
dateTimePicker.style.height = '40px';
startButton.style.height = '40px';
startButton.style.width = '80px';
startButton.style.color = 'black';
startButton.style.fontSize = '18px';
startButton.style.backgroundColor = '#E0B6FD';
startButton.style.borderColor = '#CCCACD';

timer.style.display = 'flex';
timer.style.maxWidth = '390px';
timer.style.gap = '27px';

fields.forEach(field => {
  field.style.display = 'flex';
  field.style.flexDirection = 'column';
  field.style.fontSize = '25px';
  field.style.alignItems = 'center';
});

let selectedDates = [];
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    if (selectedDates[0] > new Date()) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
      return window.alert(`Please choose a date in the future`);
    }
  },
};

flatpickr(dateTimePicker, options);

// const date = new Date();
// console.log(date.getTime());

// startButton.addEventListener('click', () => {});

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

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
