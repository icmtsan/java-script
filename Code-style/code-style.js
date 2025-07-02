// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
function multiply(a, b) {
  return a * b;
}

const person = {
  name: 'Alice',
  age: 3
};

if (person.age > 18) {
  console.log('Adult');
}

else {
  console.log('Minor');
}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
function numMultiplication(fristNumber, secondNumber) {
  let multiplicationResult = fristNumber * secondNumber;
  return multiplicationResult;
}

let example = numMultiplication(5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
const items = ["apple", "banana", "orange"];
const price = { apple: 1, banana: 2, orange: 3 };
const total = price.apple + price.banana + price.orange;

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".

function validateForm(form) {

  if (!form.name || form.name.trim() === '') {
    return 'Ошибка: Поле "Имя" не заполнено';
  }

  if (!form.email || form.email.trim() === '') {
    return 'Ошибка: Поле "Email" не заполнено';
  } else if (!form.email.includes('@')) {
    return 'Ошибка: Некорректный email';
  }

  if (!form.password || form.password.trim() === '') {
    return 'Ошибка: Поле "Пароль" не заполнено';
  } else if (form.password.length < 6) {
    return 'Ошибка: Пароль должен содержать не менее 6 символов';
  }

  return 'Форма успешно отправлена';
}

const formData = {
  name: 'Иван',
  email: 'ivan@example.com',
  password: 'secret123'
};

console.log(validateForm(formData));