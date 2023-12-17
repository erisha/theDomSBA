document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const toDoForm = document.getElementById('toDoForm');
    const taskList = document.getElementById('taskList');
    const container = document.querySelector('#app');

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
    
})