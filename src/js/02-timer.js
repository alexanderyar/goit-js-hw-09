import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// console.log(flatpickr)
 

let theDate = null

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.dir(selectedDates[0])
      if (selectedDates[0] < new Date()) {
          document.querySelector('[data-start]').disabled = true;
          window.alert("Please choose a date in the future")
          return
      }
      theDate = selectedDates[0]
        onCorrectDatePick()
    },
};





function onCorrectDatePick() {
    
    document.querySelector('[data-start]').disabled = false;
    refs.startButtonEl.addEventListener('click', onClick);


    // console.log(theDate)
   

}


let IntervalId = null;

const datePicker = flatpickr("#datetime-picker", options);

document.querySelector('[data-start]').disabled = true;



function onClick() {
    IntervalId = setInterval(() => {
        timeTicking(theDate)
        }, 1000);}




function timeTicking(thatDate) {
    // console.log(convertMs(selectedDates.getTime() - new Date().getTime()))
    const { days, hours, minutes, seconds } = (convertMs(thatDate.getTime() - new Date().getTime()))
    // console.log(`${days}:${hours}:${minutes}:${seconds}`)
    refs.daysEl.textContent = days;
    refs.hoursEl.textContent = hours;
    refs.minutesEl.textContent = minutes;
    refs.secondsEl.textContent = seconds;

    if (thatDate.getTime() - new Date().getTime() < 995) {
        clearInterval(IntervalId)
    }
}
   




const refs = {
    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),
    startButtonEl: document.querySelector('[data-start]')
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
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
//   console.log(convertMs(new Date()))



