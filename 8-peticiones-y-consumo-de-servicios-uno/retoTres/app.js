const nameHolder = document.querySelector('.github-user__name');
const avatarHolder = document.querySelector('.github-user__photo');
const repositoriesHolder = document.querySelector('.github-user__repositories');

const getNewUser = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then(user => {
            nameHolder.innerText = user.name || user.login;
            avatarHolder.src = user.avatar_url;
            avatarHolder.alt = 'User Photo';
            repositoriesHolder.innerText = user.public_repos;
        })
        .catch(err => {
        })
};

document.querySelector('button').addEventListener('click', () => {
    let userName = document.querySelector('input').value;
    getNewUser(userName);
});