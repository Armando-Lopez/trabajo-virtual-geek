'use strict';

const activableSection = document.querySelector('.oculto');

if (activableSection.classList.contains('hidden')) {
    activableSection.classList.remove('hidden');
} else {
    activableSection.classList.add('hidden');
}