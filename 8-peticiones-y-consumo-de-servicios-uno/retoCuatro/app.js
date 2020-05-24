'use strict';

const input = document.querySelector('.search__input');
const btn = document.querySelector('.search__button');
const nameContainer = document.querySelector('.org__name');
const resposUl = document.querySelector('.org__repositories');

const getOrgInfo = () => {

    let orgName = input.value;

    fetch(`https://api.github.com/orgs/${orgName}`)
        .then(response => response.json())
        .then(org => {

            nameContainer.innerText = org.name;

            fetch(org.repos_url)
                .then(response => response.json())
                .then(repos => {

                    resposUl.innerHTML = '';
                    repos.forEach(element => {
                        resposUl.innerHTML += `<li>${element.name}</li>`;
                        console.log(`<li>${element.name}</li>`);
                    });
                });

        });
};

btn.addEventListener('click', getOrgInfo);