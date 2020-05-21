'use strict';

const counter = {
    inicialValue: 0,
    currentValue: 0,
    minValue: 1,
    maxValue: 10,
    increase: function () {
        if (this.currentValue < this.maxValue) {
            this.currentValue += 1;
        }
    },
    decrease: function () {
        if (this.currentValue >= this.minValue) {
            this.currentValue -= 1;
        }
    },
    reset: function () {
        this.currentValue = this.inicialValue;
    }
}

const num = document.querySelector('h2');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');

num.innerText = counter.inicialValue;

increaseBtn.addEventListener('click', () => {
    counter.increase();
    num.innerText = counter.currentValue;
});
decreaseBtn.addEventListener('click', () => {
    counter.decrease();
    num.innerText = counter.currentValue;
});
resetBtn.addEventListener('click', () => {
    counter.reset();
    num.innerText = counter.currentValue;
});