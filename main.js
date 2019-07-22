// dowoland items
const inputTaskTitle = document.querySelector('.addTask form .title');
const inputTaskDescription = document.querySelector('.addTask form .description');
const inputTaskTime = document.querySelector('.addTask form .time');
const inputTaskDate = document.querySelector('.addTask form .date');
const inputAddBtn = document.querySelector('.tasks button')
const inputBtn = document.querySelector('.addTask form button');
const list = document.querySelector('.things');
const deleteBtn = document.querySelector('things button');
const elementsList = document.getElementsByClassName('task')
const searchInput = document.querySelector('.tasks form input');
const counter = document.querySelector('h1 span');
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let eleme = []

inputAddBtn.addEventListener('click', () => {
    document.querySelector('.addTask').style.left = `0`;
})

document.querySelector('.addTask i').addEventListener('click', () => {
    document.querySelector('.addTask').style.left = `100%`;
})
// delete task item
const deleteFunction = e => {
    e.target.parentNode.remove();
    counter.textContent = elementsList.length;


}
// add new task item
const addTask = e => {
    e.preventDefault()
    if (inputTaskTitle.value === '') return;
    const task = document.createElement('div');
    task.className = 'task';
    const dateOfTask = new Date(inputTaskDate.value)
    const month = dateOfTask.getMonth()
    const year = dateOfTask.getFullYear()
    const day = dateOfTask.getDate()
    task.innerHTML = `<h1>${inputTaskTitle.value}</h1>` + `<p>${inputTaskDescription.value}</p>` + `<p>${inputTaskTime.value}</p>` + `<p>${day} ${months[month]} ${year} </p>` + '<button>Delete</button>';
    list.appendChild(task);
    task.querySelector('button').addEventListener('click', deleteFunction);
    eleme.push(task);
    counter.textContent = elementsList.length;
    document.querySelector('.addTask').style.left = `100%`;
    document.getElementById('form').reset()
}
// serch bar script
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