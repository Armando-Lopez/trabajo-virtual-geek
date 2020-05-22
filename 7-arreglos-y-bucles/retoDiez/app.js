'use strict';

const createTree = (num) => {
    let tree = '';

    console.log('★');
    for (let i = 1; i <= num; i++) {
        console.log(tree += '▲');
    }
    console.log('|');
}

createTree(5);