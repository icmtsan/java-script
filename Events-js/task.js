//1. Назначь для кнопки обработчик события click, который будет изменять текст этой кнопки при нажатии;

const button = document.getElementById("button");
button.addEventListener("click", changeText);

function changeText(){
    button.textContent = "Кнопка нажата";
}

//2. Назначь для любого элемента обработчик события mouseover, который будет изменять размер элемента при наведении;

const element = document.getElementById("hoverEffect");

element.addEventListener("mouseover", () => {
    element.style.fontSize = "30px";
});

element.addEventListener("mouseout", () => {
    element.style.fontSize = "16px";
});

//3. Назначь для инпута обработчик события keyup, который будет выводить отпущенную клавишу в консоль;

const input = document.getElementById('keyTest');

input.addEventListener('keyup', (event) => {
  console.log(event.key);
});

//4. Создай форму и добавь обработчик события submit, который будет показывать сообщение об успешной отправке;

document.getElementById("form").addEventListener('submit', function(e){
    e.preventDefault();
    console.log(e.target);
    alert("Форма успешно отправлена!");
});

/* 5. Пусть на странице есть кнопка с надписью 'Изменить тему', которая позволяет переключать тему страницы.
 Например, по умолчанию тема светлая: задний фон - белый, текст - черный. Нажимаем на кнопку -> тема меняется на темную: цвет фона - черный, текст - белый. 
 Еще раз нажимаем на кнопку -> тема снова светлая и т. д. */

 const themeButton = document.getElementById("theme-button");
 const body = document.body;
 
 body.style.transition = 'background-color 0.3s, color 0.3s';
 
 themeButton.addEventListener('click', function() {
    
     if (body.style.backgroundColor === 'black') {
         body.style.backgroundColor = 'white';
         body.style.color = 'black';
         themeButton.textContent = 'Тёмная тема';
     } else {
         body.style.backgroundColor = 'black';
         body.style.color = 'white';
         themeButton.textContent = 'Светлая тема';
     }
 });