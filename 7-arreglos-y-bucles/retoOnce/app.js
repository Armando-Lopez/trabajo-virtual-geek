'use strict';

const createTree = (num) => {
    let traingle = '▲';
    let tree = '';
    let space = ' '.repeat(num);

    console.log(`${space}★`);
    for (let i = 1; i <= num; i++) {

        let space = ' '.repeat(num - i);

        console.log(`${space} ${tree += traingle.repeat(2)} ${space} `);
    }
    console.log(`${space}|`);
}

createTree(5);