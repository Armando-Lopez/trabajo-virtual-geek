'use strict';

const paragraphs = document.querySelector('#parrafos');
let paragraphsToAdd = 100;

const colors = [
    'white',
    'blue',
    'red',
    'green',
    'yellow',
    'pink'
]

//create and add paragraphs
for (let i = 1; i <= paragraphsToAdd; i++) {
    let p_element = document.createElement('p');
    let p_content = document.createTextNode('He aprendido bien cómo funcionan los bucles');
    p_element.appendChild(p_content);
    paragraphs.appendChild(p_element);
}

//create and add select to each paragraph
const createdParagraphs = document.querySelectorAll('p');
createdParagraphs.forEach(paragraph => {
    let select = document.createElement('select');

    for (const color of colors) {
        let option = document.createElement('option');
        option.appendChild(document.createTextNode(color));
        select.appendChild(option);
    };
    paragraph.appendChild(select);
    // console.log(option);
});


//add events to each select
const selects = document.querySelectorAll('select');
selects.forEach((select, index) => {
    select.addEventListener('change', (ev) => {
        let colorIndex = ev.target.selectedIndex;
        createdParagraphs[index].style.color = colors[colorIndex];
    });
});
// console.log(selects);

console.log(createdParagraphs[4]);


