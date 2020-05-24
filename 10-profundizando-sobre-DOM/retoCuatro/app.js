'use strict';

const ps = document.querySelectorAll('p');

ps.forEach(p => {
    p.style.height = `${p.offsetHeight / 3}px`;
});