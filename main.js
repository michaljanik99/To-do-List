const inputTask = document.querySelector('form input');
const inputBtn = document.querySelector('form button');
const list = document.querySelector('ul');
const deleteBtn = document.querySelector('ul button');
const elementsList = document.getElementsByClassName('task')
const searchInput = document.querySelector('form input:last-child');
const counter = document.querySelector('h1 span');
let eleme = []


const deleteFunction = e => {
    e.target.parentNode.remove();
    counter.textContent = elementsList.length;


}

const addTask = e => {
    e.preventDefault()
    if (inputTask.value === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = inputTask.value + '<button>Delete</button>';

    list.appendChild(task);
    task.querySelector('button').addEventListener('click', deleteFunction);
    eleme.push(task);
    counter.textContent = elementsList.length;
}

const searchTask = e => {
    e.preventDefault()
    if (e.target.value !== '') {
        const serchTask = e.target.value.toLowerCase();
        let tasks = [...elementsList];
        tasks = tasks.filter(task => task.textContent.toLowerCase().includes(serchTask));


        list.textContent = ''
        tasks.forEach(t => list.appendChild(t));

    } else {
        eleme.forEach(el => list.appendChild(el))
    }


}


searchInput.addEventListener('input', searchTask)

inputBtn.addEventListener('click', addTask);