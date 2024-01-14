import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
let userSelectedDate
const daysDisplay = document.querySelector("[data-days]")
const hoursDisplay = document.querySelector("[data-hours]")
const minutesDisplay = document.querySelector("[data-minutes]")
const secondsDisplay = document.querySelector("[data-seconds]")
const startButton = document.querySelector('.start-btn');
startButton.disabled = true
const options = {
  enableTime: true,
    time_24hr: true,
  defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
      const selectedDate = selectedDates[0]
        if (selectedDate < new Date()) {
            iziToast.error({
            title:'ERROR',
            message:'Please choose a date in the future',
            position: "topRight"
            })
            startButton.disabled = true
        } else {
            startButton.disabled = false
            userSelectedDate = selectedDate
            console.log(userSelectedDate);
        }
  },
};
flatpickr("#datetime-picker", options)

let intervalId
startButton.addEventListener("click", () => {
    startButton.disabled = true
    intervalId = setInterval(updateTimer, 1000);

})
function updateTimer() {
    const timer = userSelectedDate - new Date();
    if (timer <= 0) {
        clearInterval(intervalId);
        daysDisplay.textContent = "00";
        hoursDisplay.textContent = "00";
        minutesDisplay.textContent = "00";
        secondsDisplay.textContent = "00";
        return;
    }
    const { days, hours, minutes, seconds } = convertMs(timer);
daysDisplay.textContent = addLeadingZero(days),
  hoursDisplay.textContent = addLeadingZero(hours),
  minutesDisplay.textContent = addLeadingZero(minutes),
secondsDisplay.textContent = addLeadingZero(seconds)

}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

  
function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}

