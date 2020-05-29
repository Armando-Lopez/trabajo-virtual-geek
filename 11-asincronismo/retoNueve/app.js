'use strict';

let btnAsk = document.querySelector('button');
let message = document.querySelector('.message');
let counter = 0;

const count = () => {
    let increment = counter++;

    btnAsk.innerText = increment;

    if (increment % 10 === 0) {
        let pElement = document.createElement('p');
        pElement.appendChild(document.createTextNode('¿te has dormido?'))
        message.appendChild(pElement);
    }

}

const resetCounter = () => {
    counter = 0;
    message.innerText = "";
};

btnAsk.addEventListener("click", resetCounter);

let interval = setInterval(count, 1000);