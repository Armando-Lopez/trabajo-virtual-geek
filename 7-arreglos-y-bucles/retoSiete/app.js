'use strict';

const geekGirls = [
    {
        'name': 'Maria',
        'age': 29,
        'job': 'Diseñadora'
    },
    {
        'name': 'Lucia',
        'age': 37,
        'job': 'Ingeniera química'
    },
    {
        'name': 'Susana',
        'age': 34,
        'job': 'Periodista'
    },
    {
        'name': 'Rocío',
        'age': 25,
        'job': 'Actriz'
    },
    {
        'name': 'Inmaculada',
        'age': 21,
        'job': 'Diseñadora'
    },
]

const countGeekGirls = (geekGirls) => geekGirls.length;

const averageAge = (geekGirls) => {
    let sumAge = 0;
    let averageAge = 0;
    for (let girl of geekGirls) {
        sumAge += girl.age;
    }
    return sumAge / countGeekGirls(geekGirls);
}

const theYoungest = (geekGirls) => {
    let youngest = 100;
    for (let geekGirl of geekGirls) {
        if (geekGirl.age < youngest) {
            youngest = geekGirl.age;
        }
    }
    return youngest;
}

const countDesigners = (geekGirls) => {
    let designers = 0;
    for (let geekGirl of geekGirls) {
        if (geekGirl.job === 'Diseñadora' || geekGirl.job === 'diseñadora') {
            designers++;
        }
    }
    return designers;
}

console.log(`Cantidad de chicas geek = ${countGeekGirls(geekGirls)}`);
console.log(`Edad media de chicas geek = ${averageAge(geekGirls)}`);
console.log(`Chica geek más joven = ${theYoungest(geekGirls)}`);
console.log(`Cantidad de diseñadoras = ${countDesigners(geekGirls)}`);

