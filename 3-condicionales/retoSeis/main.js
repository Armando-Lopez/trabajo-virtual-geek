'use strict';

let div = document.querySelector('div');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');

(div.classList.contains('warning')) ? h1.innerText = 'AVISO' : '';
(div.classList.contains('warning')) ? p.innerText = 'Tenga cuidado' : '';

(div.classList.contains('error')) ? h1.innerText = 'ERROR' : '';
(div.classList.contains('error')) ? p.innerText = 'Ha surgido un error' : '';

(div.classList.contains('success')) ? h1.innerText = 'CORRECTO' : '';
(div.classList.contains('success')) ? p.innerText = 'Los datos son correctos' : '';
