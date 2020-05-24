const showNewDog = () => {

    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then(response => response.html())
        .then(data => {
            const img = document.querySelector('img');
            img.src = data.message;
            img.alt = 'Un perro';
        }).catch(err => {
            console.log(err);

        })
}
showNewDog();
document.querySelector('button').addEventListener('click', showNewDog)