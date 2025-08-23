//1

const form = document.getElementById('contactForm');
const display = document.getElementById('displayData');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const contactData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email')
    };

    localStorage.setItem('contactInfo', JSON.stringify(contactData));
    showData();
    form.reset();
});

function showData() {
    const stored = localStorage.getItem('contactInfo');
    if (stored) {
        const data = JSON.parse(stored);
        display.textContent = `Имя: ${data.name}, Телефон: ${data.phone}, Email: ${data.email}`;
    } else {
        display.textContent = 'Данных нет';
    }
}

showData();

//2

const form2 = document.getElementById('expenseForm');
const list = document.getElementById('expensesList');
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

form2.addEventListener('submit', e => {
    e.preventDefault();

    const expense = {
        id: Date.now(),
        description: form2.description.value,
        amount: form2.amount.value,
        date: form2.date.value
    };

    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
    form2.reset();
});

function renderExpenses() {
    list.innerHTML = expenses.map(expense => `
                <li>
                    ${expense.date} - ${expense.description}: ${expense.amount} руб.
                    <button onclick="deleteExpense(${expense.id})">X</button>
                </li>
            `).join('');
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}

renderExpenses();

//3

const timerElement = document.getElementById('timer');
let seconds = parseInt(sessionStorage.getItem('activeTime')) || 0;

function updateTimer() {
    seconds++;
    timerElement.textContent = seconds + ' секунд';
    sessionStorage.setItem('activeTime', seconds);
}

setInterval(updateTimer, 1000);

timerElement.textContent = seconds + ' секунд';