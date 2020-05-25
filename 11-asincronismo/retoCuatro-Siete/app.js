'use strict';

let cantidad = 0;
const uvas = document.querySelector('.uvas');


const addGrape = () => {
    uvas.innerText = cantidad;
    cantidad++;

    if (cantidad > 12) {
        clearInterval(interval);
    }
}

const interval = setInterval(addGrape, 1000);