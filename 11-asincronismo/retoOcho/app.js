'use strict';

const time = document.querySelector('.time');
const stop = document.querySelector('.stop');
const continuebtn = document.querySelector('.continue');
let seconds = 0;

const count = () => time.innerText = seconds++;

const crono = setInterval(count, 1000);

stop.addEventListener('click', () => clearInterval(crono));

continuebtn.addEventListener('click', () => {
    seconds = 0;
    const crono = setInterval(count, 1000);
})