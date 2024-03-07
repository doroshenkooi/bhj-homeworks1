document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const list = document.getElementById('tasks__list');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (input.value.trim() !== '') {
        addTask(input.value.trim());
        input.value = '';
      }
    });
  
    function addTask(text) {
      const task = document.createElement('div');
      task.classList.add('task');
  
      const title = document.createElement('div');
      title.classList.add('task__title');
      title.textContent = text;
  
      const removeBtn = document.createElement('a');
      removeBtn.classList.add('task__remove');
      removeBtn.setAttribute('href', '#');
      removeBtn.textContent = '×';
  
      removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        list.removeChild(task);
      });
  
      task.appendChild(title);
      task.appendChild(removeBtn);
      list.appendChild(task);
    }
  });
