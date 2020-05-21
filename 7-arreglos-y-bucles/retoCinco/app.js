'use strict';


console.log('Media');

const average = (numbers) => {
    const numberslen = numbers.length;
    let sum = 0;
    let media = 0;

    for (let i = 0; i < numberslen; i++) {
        sum += numbers[i];
    }

    media = sum / numberslen;

    return media
}

console.log(average([7, 2, 8, 4, 6, 5]));
console.log(average([1, 6, 5]));
console.log(average([1, 2, 3]));
console.log(average([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
