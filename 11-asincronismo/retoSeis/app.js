'use strict';

const message = document.querySelector('.message');

setTimeout(() => {
    message.classList.remove('hide');
}, 1000 * 15);