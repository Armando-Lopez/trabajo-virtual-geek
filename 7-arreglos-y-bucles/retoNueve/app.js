'use strict';

const createTree = (num) => {
    let tree = '';
    for (let i = 1; i <= num; i++) {
        console.log(tree += '▲');
    }
}

createTree(4);