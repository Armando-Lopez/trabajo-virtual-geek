'use strict';


const input = document.getElementById('inputEdad');
const boton = document.getElementById('calcular');
const result = document.getElementById('result');

const horasPorDia = 24;
const diasPorAño = 365;
const horasPorAño = horasPorDia * diasPorAño;

boton.addEventListener('click', () => {
    let edad = input.value;
    let horasVividas = horasPorAño * parseInt(edad);
    result.innerText = `Has vivido más de ${horasVividas} Horas :)`;
});