const taskForm = document.getElementById('task-form');
const taskInput = document.querySelector('.input-field');
const tasksList = document.getElementById('tasks-list');
const filterButtons = document.querySelectorAll('.filter-btn');
const currentFilter = 'all';
const reminderTimers = {};

function setReminder(taskId, taskText, seconds) {

    if (reminderTimers[taskId]) {
        clearTimeout(reminderTimers[taskId]);
        delete reminderTimers[taskId];
    }

    reminderTimers[taskId] = setTimeout(() => {
        alert(`⏰ НАПОМИНАНИЕ: "${taskText}"`);
        delete reminderTimers[taskId];
    }, seconds * 1000);

    alert(`Напоминание установлено! Оно сработает через ${seconds} секунд.`);
}

function addTaskToDOM(task) {

    const taskEl = document.createElement('li');
    taskEl.className = `task ${task.completed ? 'completed' : ''}`;
    taskEl.dataset.id = task.id;

    taskEl.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
        <span class="task-text">${task.title}</span>
        <button class="reminder-btn" aria-label="Поставить напоминание">⏰</button>
        <button class="delete-task" aria-label="Удалить задачу">×</button>
    `;

    tasksList.appendChild(taskEl);

    const checkbox = taskEl.querySelector('.task-checkbox');
    const deleteBtn = taskEl.querySelector('.delete-task');
    const reminderBtn = taskEl.querySelector('.reminder-btn');
    const taskTextElement = taskEl.querySelector('.task-text');

    reminderBtn.addEventListener('click', function () {
        const seconds = prompt(`Через сколько напомнить о задаче "${task.title}"?\n(Введите число секунд)`);

        if (seconds === null) return;

        if (seconds && !isNaN(seconds) && seconds > 0) {
            setReminder(task.id, task.title, parseInt(seconds));
        } else {
            alert('Введите корректное количество секунд (число больше 0)');
        }
    });

    deleteBtn.addEventListener('click', function () {

        if (reminderTimers[task.id]) {
            clearTimeout(reminderTimers[task.id]);
            delete reminderTimers[task.id];
        }

        taskEl.remove();
    });
}

function addNewTask(taskText) {

    if (taskText.trim() === '') {
        alert('Пожалуйста, введите текст задачи');
        return;
    }

    const newTask = {
        id: Date.now(),
        title: taskText,
        completed: false
    };

    addTaskToDOM(newTask);

    taskInput.value = '';
}

async function fetchTasks() {
    try {

        tasksList.innerHTML = '<div class="loading">Загрузка задач...</div>';
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

        if (!response.ok) {
            throw new Error('Не удалось загрузить задачи');
        }

        const tasks = await response.json();

        tasksList.innerHTML = '';

        tasks.forEach(task => {
            addTaskToDOM(task);
        });

    } catch (error) {

        console.error('Ошибка:', error);
        tasksList.innerHTML = `
            <div class="error">
                Ошибка загрузки задач: ${error.message}
                <button onclick="fetchTasks()">Попробовать снова</button>
            </div>
        `;
    }
}

function filterTasks(filter) {

    const tasks = tasksList.querySelectorAll('.task');

    tasks.forEach(task => {
        const isCompleted = task.classList.contains('completed');

        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'active':
                task.style.display = isCompleted ? 'none' : 'flex';
                break;
            case 'completed':
                task.style.display = isCompleted ? 'flex' : 'none';
                break;
        }
    });
}

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addNewTask(taskInput.value);
});

filterButtons.forEach(button => {
    button.addEventListener('click', function () {

        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentFilter = this.dataset.filter;

        filterTasks(currentFilter);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    fetchTasks();
});