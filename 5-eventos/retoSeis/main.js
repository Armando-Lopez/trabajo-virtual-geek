'use strict';

const body = document.querySelector('body');

document.addEventListener('keypress', (ev) => {

    if (ev.key == 'r') {
        body.style.backgroundColor = 'red';
    }
    else if (ev.key == 'm') {
        body.style.backgroundColor = 'violet';
    }
    else if (ev.key == 'g') {
        body.style.backgroundColor = 'green';
    }
    else if (ev.key == 'y') {
        body.style.backgroundColor = 'yellow';
    }
    else if (ev.key == 'b') {
        body.style.backgroundColor = 'blue';
    }
    else if (ev.key == 'o') {
        body.style.backgroundColor = 'orange';
    }
    else if (ev.key == 'd') {
        body.style.backgroundColor = 'black';
    }
    else if (ev.key == 'w') {
        body.style.backgroundColor = 'white';
    }
    console.log(ev.key);
})