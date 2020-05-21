'use strict';

const currentYear = 3;

console.log(`Año actual ${currentYear}`);


if ((currentYear + 1) % 4 == 0) {
    console.log(`El siguiente año bisiesto es ${currentYear + 1}`);
}

if ((currentYear + 2) % 4 == 0) {
    console.log(`El siguiente año bisiesto es ${currentYear + 2}`);
}

if ((currentYear + 3) % 4 == 0) {
    console.log(`El siguiente año bisiesto es ${currentYear + 3}`);
}
