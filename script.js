document.addEventListener('DOMContentLoaded', () => {
    // cache elements
    const taskInput = document.getElementById('taskInput');
    const toDoForm = document.getElementById('toDoForm');
    const taskList = document.getElementById('taskList');
    const app = document.querySelector('#app');

    //Event listeners
    toDoForm.addEventListener('submit', addTask);
   

    

    // function to add a new task
    function addTask (event){
        event.preventDefault();

        const taskTxt = taskInput.value;

        if(taskTxt !== '') {
            // create new task element
            const newTask = document.createElement('li');
            const deleteBtn = document.createElement('button');

            newTask.textContent = taskTxt;
            deleteBtn.textContent = 'Delete';

            // event listener completed task 
            newTask.addEventListener('click', toggleTask);

            // event listener delete button 
            deleteBtn.addEventListener('click', deleteTask);

            //append delete btn 
            newTask.appendChild(deleteBtn);

            
            
            //new btn for strikethrough 
            //****(removed this. Don't need this button. Just click the completed task)
            
            // const togglebtn = document.createElement('button');
            // togglebtn.textContent = 'Done';
            // togglebtn.addEventListener('click', toggleTask);
            // newTask.appendChild(togglebtn);
            

            // append newTask to taskList
            taskList.appendChild(newTask);
            
            
            //clear input
            taskInput.value = '';
        }

    }


function toggleTask(){
    this.classList.toggle('completed')
}


// delete task 
function deleteTask(){
    this.parentNode.remove();
}


//event listener for strikthrough button
taskList.addEventListener('click', function (event){
    const target = event.target;
    
    // check if the clicked element is a button inside a task
    if(target.tagName === 'BUTTON' && target.parentNode.tagName === 'LI') {
        toggleTask.call(target.parentNode); // toggle strikethrough
    }
    
    
});

});
// BOM properties/methods

console.log('Window inner width:', window.innerWidth);
console.log('Document URL:', document.URL);
