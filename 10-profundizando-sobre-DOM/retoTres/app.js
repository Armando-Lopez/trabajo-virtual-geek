'use strict';

const autoCompleteData = [
    {
        "name": "James",
        "lastName": "Rodriguez",
        "phone": "3128390290"
    },
    {
        "name": "Arnold",
        "lastName": "Schwarzenegger",
        "phone": "5554849284"
    },
    {
        "name": "René",
        "lastName": "Perez",
        "phone": "63839284739"
    },
]

const select = document.querySelector('select');
const nameHolder = document.querySelector('.name');
const lastNameHolder = document.querySelector('.lastName');
const phoneHolder = document.querySelector('.phone');


select.addEventListener('change', function () {

    let name = autoCompleteData[this.value].name;
    let lastName = autoCompleteData[this.value].lastName;
    let phone = autoCompleteData[this.value].phone;

    nameHolder.setAttribute('value', name);
    lastNameHolder.setAttribute('value', lastName);
    phoneHolder.setAttribute('value', phone);
});


