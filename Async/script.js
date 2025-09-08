//1
/* let count = 30;

function timer() {
    console.log(`Осталось: ${count} секунд`);
    
    if (count > 0) {
        count--;
        setTimeout(timer, 1000);
    } else {
        console.log("Время вышло!");
    }
}

timer();
 */

//2. 

/* function showReminder() {
    console.log('Не забудь выпить воды!');
}

const reminderInterval = setInterval(showReminder, 30 * 60 * 1000);

showReminder(); */


//3

let intervalId = null;
const startBtn = document.getElementById('startBtn');
const delayInput = document.getElementById('delay');
const textInput = document.getElementById('text');

startBtn.addEventListener('click', function () {
    if (intervalId) {
        // Если таймер уже работает - останавливаем
        clearInterval(intervalId);
        intervalId = null;
        startBtn.textContent = 'Начать';
        console.log('Таймер остановлен');
    } else {
        // Если таймер не работает - запускаем
        const delay = parseInt(delayInput.value);
        const text = textInput.value;

        if (delay < 1) {  //добавлена проверка
            alert('Ошибка: введите корректное значение');
            console.error('Ошибка: некорректное значение delay:', delayInput.value);
            return;
        }

        intervalId = setInterval(() => {
            console.log(text);
        }, delay);

        startBtn.textContent = 'Остановить';
        console.log('Таймер запущен');
    }
});