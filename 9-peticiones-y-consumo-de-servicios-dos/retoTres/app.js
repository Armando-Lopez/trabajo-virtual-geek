'use strict';

const input = document.querySelector('input');
const button = document.querySelector('button');
const results = document.querySelector('.results');


button.addEventListener('click', () => {
    let name = input.value;

    fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            results.innerHTML = '';
            let cantResults = data.results.length;

            for (let i = 0; i < cantResults; i++) {
                results.innerHTML += `<li>${data.results[i].name}</li>`
            };

        })
        .catch(err => {
            console.log(err);
        });
});