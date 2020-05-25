'use strict';

const timeContainer = document.querySelector('.time');
let seconds = 0;
let message = 'segundos';

setInterval(() => {
    seconds++;

    if (seconds > 60) {
        message = 'mas de 1 minutos';
        timeContainer.innerText = `${message}`
    } else {
        timeContainer.innerText = `${seconds} ${message}`
    }

}, 1000)