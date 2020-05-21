'use strict';

const geeGirl1 = {
    name: 'Diana',
    edad: '26 años',
    profetion: 'Desarrolladora Front-End',
    showBio: function () {
        alert(`Mi nombre es ${this.name}, Tengo ${this.edad} y soy ${this.profetion}.`)
    }
}
document.querySelector('.p1').innerText = `
                Mi nombre es ${geeGirl1.name},
                Tengo ${geeGirl1.edad}
                y soy ${geeGirl1.profetion}.`;
geeGirl1.showBio();

const geeGirl2 = {
    name: 'Rocio',
    edad: '25 años',
    profetion: 'Actriz',
    showBio: function () {
        alert(`Mi nombre es ${this.name}, Tengo ${this.edad} y soy ${this.profetion}.`)
    }
}

document.querySelector('.p2').innerText = `
                Mi nombre es ${geeGirl2.name},
                Tengo ${geeGirl2.edad}
                y soy ${geeGirl2.profetion}.`;
geeGirl2.showBio();