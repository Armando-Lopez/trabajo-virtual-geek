'use strict';

let avatar = 'http://www.fillmurray.com/300/300';
const noAvatar = 'http://placehold.it/300x300';

document.getElementById('container').innerHTML = `<img src="${avatar || noAvatar}" alt="">`;