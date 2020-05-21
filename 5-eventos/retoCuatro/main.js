'use strict';

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

document.querySelector('button').addEventListener('click', () => {
    document.querySelector('body').innerHTML += /*html*/`
    <ol>
        <li class="inception">${inception}</li>
        <li class="theButterFlyEffect">${theButterFlyEffect}</li>
        <li class="eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li>
        <li class="blueVelvet">${blueVelvet}</li>
        <li class="split">${split}</li>
    </ol>`;

    document.querySelector('.inception').addEventListener('click', showName);
    document.querySelector('.theButterFlyEffect').addEventListener('click', showName);
    document.querySelector('.eternalSunshineOfTheSM').addEventListener('click', showName);
    document.querySelector('.blueVelvet').addEventListener('click', showName);
    document.querySelector('.split').addEventListener('click', showName);
});

const showName = (ev) => console.log(ev.srcElement.innerText);