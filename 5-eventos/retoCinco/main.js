'use strict';

let teacherIsra = document.querySelector('.teacher--isra');
let teacherTuerto = document.querySelector('.teacher--tuerto');
let teacherNasi = document.querySelector('.teacher--nasi');

const toggleClass = (ev) => {
    ev.target.classList.toggle('teacher--selected')
    // ev.srcElement.classList.toggle('teacher--selected');
}

teacherIsra.addEventListener('click', toggleClass);
teacherTuerto.addEventListener('click', toggleClass);
teacherNasi.addEventListener('click', toggleClass);