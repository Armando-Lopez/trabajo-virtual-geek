'use strict';

const input = document.querySelector('input');
const button = document.querySelector('button');
const results = document.querySelector('.results');


button.addEventListener('click', () => {
    let name = input.value.trim();
    let cache = localStorage.getItem(name);

    if (!cache) {
        callServer(name);
    } else {
        getCache(name);
    }
});

const callServer = (name) => {
    fetch(`https://swapi.dev/api/people/?search=${name}`)
        .then((response) => response.json())
        .then(people => {
            primtData(people.results);
            saveCache(name, people.results);
        })
        .catch(err => {
            console.log(err);
        });
};

const saveCache = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getCache = (key) => {
    let data = localStorage.getItem(key);
    let people = JSON.parse(data);
    primtData(people);
}

const primtData = (people) => {
    results.innerHTML = '';
    let cantPeople = people.length;
    for (let i = 0; i < cantPeople; i++) {
        results.innerHTML += `<li>${people[i].name}</li>`
    };
};