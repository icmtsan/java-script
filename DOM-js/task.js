//1. Найди элемент на странице по его ID и измени его текстовое содержимое на что-то новое;

const header = document.getElementById('header1');
header.textContent = "Блог о похудении";

//2. Используй JavaScript, чтобы изменить фон и цвет текста элемента с определенным классом;

header.style.color = "green";
header.style.background = "yellow";

//3. Напиши код, который создает новый параграф с текстом и добавляет его в конец документа;

const newElement = document.createElement('p');
newElement.textContent = 'Новый параграф';
document.body.appendChild(newElement);

//4. Напиши функцию, которая удаляет элемент с указанным ID из документа;

function removeElementById(id) {

    const element = document.getElementById(id);

    if (element) {
        element.remove();
    } else {
        console.log(`Элемент не найден.`);
    }
}

removeElementById("br");
removeElementById("br2");

//5. Измени атрибут ссылки на новый URL и выведи его значение в консоль;

const link = document.querySelector('a');
link.setAttribute('href', 'https://mail.ru');
console.log(link.getAttribute('href'));

//6. Создай новый элемент, добавь к нему класс и добавь его в DOM;

const newHeader = document.createElement('h2');
newHeader.textContent = 'Польза правильного питания';
newHeader.classList.add('header-2');
document.body.appendChild(newHeader);

//7. Переключи класс у существующего элемента и проверьте его наличие в консоли.

const header1 = document.getElementById('header1');
header1.classList.toggle('top-header');
console.log(header1.classList.contains('top-header'));