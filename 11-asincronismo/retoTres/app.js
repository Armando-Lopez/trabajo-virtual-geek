'use strict';

let counter = 0;
const time = document.querySelector('.time');

setInterval(() => {
    counter++;
    time.innerHTML = counter;
}, 2000);