'use strict';

const inputNombre = document.getElementById('nombre');

document.getElementById('btnEntrar').addEventListener('click', () => {
    if (inputNombre.value == "Diego" || inputNombre.value == "diego") {
        alert('Bienvenido Diego :)');
    } else {
        alert('El usuario introducido no está registrado. You Shall not pass! >:(');
    }
})