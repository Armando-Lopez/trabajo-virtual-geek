'use strict';

let edadPerro = 12;
let firstDogYear = 15;
let secondDogYear = firstDogYear + 9;
let thirsDogYear = secondDogYear + 5;
let edadHumano = 0;

if (edadPerro <= 1) {
    edadHumano = 15;
} else if (edadPerro == 2) {
    edadHumano = secondDogYear;
} else if (edadPerro == 3) {
    edadHumano = thirsDogYear;
}
else {
    edadHumano = ((edadPerro - 3) * 5) + thirsDogYear;
}
console.log(`${edadPerro} años perro son ${edadHumano} años humanos`)