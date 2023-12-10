const taskInput = document.querySelector('.task-input');
        const taskList = document.querySelector('.task-list');
       // taskItem.classList.add('task-item');


        function addTask() {
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                const taskItem = document.createElement('li');
                taskItem.classList.add('task-item');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const span = document.createElement('span');
                span.textContent = taskText;

                const button = document.createElement('button');
                button.textContent = 'Delete';

                taskItem.appendChild(checkbox);
                taskItem.appendChild(span);
                taskItem.appendChild(button);

                taskList.appendChild(taskItem);

                taskInput.value = '';
            }
        }

        function deleteTask(event) {
            const taskItem = event.target.closest('.task-item');
            taskItem.remove();
        }

        taskInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                addTask();
            }
        });

        taskList.addEventListener('click', function(event) {
            if (event.target.tagName === 'BUTTON') {
                deleteTask(event);
            }
        });