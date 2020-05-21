'use strict';

const geeGirl1 = {
    name: 'Diana',
    edad: '26 años',
    profetion: 'Desarrolladora Front-End',
    run: () => console.log('Estoy corriendo'),
    runAMarathon: (distance) => console.log(`Estoy corriendo un maraton de ${distance} kilometros`)

}
// document.querySelector('h2').innerText = `
// Mi nombre es ${geeGirl1.name},
// Tengo ${geeGirl1.edad}
// y soy ${geeGirl1.profetion}.`;

geeGirl1.run()
geeGirl1.runAMarathon(30);

