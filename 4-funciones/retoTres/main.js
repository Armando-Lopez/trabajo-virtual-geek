'use strict';

function iva(num) {
    let iva = num * 0.21;
    let total = num + iva;
    console.log(`Precio sin IVA: ${num}, IVA: ${iva} y Total: ${total}`);
}

iva(10);
iva(20);
iva(30);