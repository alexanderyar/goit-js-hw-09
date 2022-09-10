
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    bodyEl: document.querySelector('body'),
    startEl: document.querySelector('[data-start]'),
    stopEl: document.querySelector('[data-stop]')
}

let timerId = null
let isActive = false
const DELAY = 1000;

refs.startEl.addEventListener('click', onClick)
refs.stopEl.addEventListener('click', onStop)


function bodyBackgroundChanger(color) {
    refs.bodyEl.style.backgroundColor = color;
    // console.log('поменяли цвет')
}


function onClick() {
    if (isActive)
        return 
    isActive = true
timerId = setInterval(() => {bodyBackgroundChanger(getRandomHexColor())
}, DELAY);
}

function onStop() {
    isActive = false
    console.log(timerId)
    clearInterval(timerId)
}

