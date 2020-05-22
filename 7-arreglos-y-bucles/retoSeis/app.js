'use strict';

const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');
const result = document.querySelector('.result');

btn.addEventListener('click', () => {
    result.innerText = "";
    for (const input of inputs) {
        let obra = input.value;
        if (obra != "") {
            result.innerHTML += `<p>Que buen gusto. A mi también me gusta <b>${obra}</b> <br/>Tenemos mucho en común, humana.</p>`
        }
    }
});