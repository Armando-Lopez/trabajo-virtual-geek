'use strict';

let esBorderBox = true;
let anchoCaja = 100;
let padding = 10;
let borde = 3;

function calcModeloCaja(esBorderBox, anchoCaja, padding, borde) {
    let anchoTotal;
    if (esBorderBox) {
        anchoTotal = anchoCaja - (padding * 2 + borde * 2);
    } else {
        anchoTotal = anchoCaja + (padding * 2 + borde * 2);
    }
    return anchoTotal;
}

let anchoTotal = calcModeloCaja(esBorderBox, anchoCaja, padding, borde);
console.log(`Ancho son border-box ${anchoTotal}`);

let sinBorde = calcModeloCaja(false, anchoCaja, padding, borde)
console.log(`Ancho sin border-box ${sinBorde}`);