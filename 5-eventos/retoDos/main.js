'use strict';

document.querySelector('button').addEventListener('click', () => {
    let nombre = document.querySelector('input').value;
    alert(`Hola, ${nombre} :)`);
    console.log(`Hola, ${nombre} :)`);
})