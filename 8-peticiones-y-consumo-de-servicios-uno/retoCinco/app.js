'use strict';

const breedsList = document.querySelector('.breeds-list');
const selectButton = document.querySelector('.select-random');
const selectedBreedName = document.querySelector('.results__chosen-breed');
const selectedBreedPhoto = document.querySelector('.results__dog-photo');

selectButton.addEventListener('click', () => { selectRandom() });

const showBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list')
        .then((response) => response.json())
        .then(breeds => {
            console.log(breeds);
            breeds.message.forEach(breed => {
                breedsList.innerHTML += /*html */`
                <button class="breeds-list__breed ${breed}" >${breed}</button>`
            });
            makeBreedsClickeable();
        });
}
showBreeds();

const makeBreedsClickeable = () => {
    const breedsButtons = document.querySelectorAll('.breeds-list__breed');
    breedsButtons.forEach(breed => {
        breed.addEventListener('click', () => {
            breed.classList.toggle('selected');
        });
    });
};

const selectRandom = () => {
    const selectedBreeds = document.querySelectorAll('.selected');
    let counter = selectedBreeds.length - 1;

    let randomNumber = Math.round(Math.random() * counter);

    let randomSelected = selectedBreeds[randomNumber].innerText;

    showSelectedBreed(randomSelected);
};

const showSelectedBreed = (selectedBreed) => {

    // console.log(selectedBreed);

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
        .then(response => response.json())
        .then(breed => {
            console.log(breed);
            selectedBreedName.innerText = `La elegida al azar fue ${selectedBreed}`;
            selectedBreedPhoto.src = breed.message;
            selectedBreedPhoto.alt = `Foto de un perro ${selectedBreed}`;
        });
};