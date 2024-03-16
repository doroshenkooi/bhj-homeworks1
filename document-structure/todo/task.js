const taskInput = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

function addTask(event) {
  event.preventDefault();
  
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskTemplate = 
      `<div class="task">
        <div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">×</a>
      </div>`
    ;
    
    taskList.insertAdjacentHTML('beforeend', taskTemplate);
    taskInput.value = '';
  }
}

function removeTask(event) {
  if (event.target.classList.contains('task__remove')) {
    const task = event.target.closest('.task');
    task.remove();
  }
}

document.getElementById('tasks__form').addEventListener('submit', addTask);

taskList.addEventListener('click', removeTask);
