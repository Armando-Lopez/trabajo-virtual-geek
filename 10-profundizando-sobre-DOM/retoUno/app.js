'use strict';

const numbers = [1, 2, 3];
const ul = document.querySelector('ul');

for (let i = 0; i < numbers.length; i++) {
    let li = document.createElement('li');
    let liContent = document.createTextNode(numbers[i]);
    li.appendChild(liContent);
    ul.appendChild(li);
}
