'use strict';
const tasksContainer = document.querySelector('.tasks');

const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: false },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false }
];

//imprint tasks on screen
for (let task of tasks) {
    let taskItem =/*html*/`
                <li class="task">
                    <input class="checkBox" type="checkbox"/>
                    ${task.name}
                </li>
            `;
    tasksContainer.innerHTML += taskItem;
};

//get tasks and checkBoxes imprinted
let tasksItems = tasksContainer.querySelectorAll('.task');
let checkBoxes = tasksContainer.querySelectorAll('input');

//mark already complete tasks
tasks.forEach((element, index) => {
    if (element.completed) {
        checkBoxes[index].checked = true;
        tasksItems[index].classList.add('done');
    };
});


checkBoxes.forEach((element, index) => {
    element.addEventListener('change', (e) => completeTask(e, index));
});

const completeTask = (e, index) => {
    tasks[index].completed = !tasks[index].completed;
    markChek(index);
};

const markChek = (index) => {
    if (tasks[index].completed) {
        tasksItems[index].classList.add('done');
    } else {
        tasksItems[index].classList.remove('done');
    };
    countTasksStatus();
};

const countTasksStatus = () => {
    document.getElementById('totalTasks').innerText = tasks.length;
    document.getElementById('completedTasks').innerText = tasks.filter(task => task.completed).length;
    document.getElementById('pendingTasks').innerText = tasks.filter(task => !task.completed).length;
};
countTasksStatus();