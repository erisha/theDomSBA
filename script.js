document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const toDoForm = document.getElementById('toDoForm');
    const taskList = document.getElementById('taskList');
    const app = document.querySelector('#app');

    //Event listeners
    toDoForm.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);

    

    // function to add a new task
    function addTask(event){
        event.preventDefault();

        const taskTxt = taskInput.value;

        //create task element

        const taskElement = document.createElement('li');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${taskTxt}</span>
            <button> Delete</button>
        `;

        // add new elements to DOM using appendChild
        taskList.appendChild(taskElement);

        // clear input field
        taskInput.value = '';
  
    }

    // remove a task
    function removeTask(event) {
        if (event.target.tagName === 'BUTTON'){
            const taskElement = event.target.closest('.task');

            taskList.removeChild(taskElement);
        }
    }

    // documentFragment creates list of tasks
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `Task # ${i + 1}`;
        fragment.appendChild(listItem);
    }
    taskList.appendChild(fragment);

// user interactions
app.addEventListener('mouseover' , () => {
    app.innerHTML = '<h1> Mover Over Event!</h1>';
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'SPAN'){
        event.target.style.textDecoration = 'line-through';
    }
});

app.addEventListener('mouseout', () => {
    app.setAttribute('style', 'background-color: lightblue;');
});

// BOM properties/methods

console.log('Window inner width:', window.innerWidth);
console.log('Document URL:', document.URL);


});