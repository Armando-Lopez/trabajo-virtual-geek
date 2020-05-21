'use strict';

let div = document.querySelector('div');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');

if (div.classList.contains('warning')) {
    h1.innerText = 'AVISO';
    p.innerText = 'Tenga cuidado';
}
else if (div.classList.contains('error')) {
    h1.innerText = 'ERROR';
    p.innerText = 'Ha surgido un error';
}
else if (div.classList.contains('success')) {
    h1.innerText = 'CORRECTO';
    p.innerText = 'Los datos son correctos';
}