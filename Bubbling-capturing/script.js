//1

/* document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', () => {
    console.log('Child clicked');
});
document.getElementById('appendage').addEventListener('click', () => {
    console.log('Appendage clicked');
}); */

//2

document.getElementById('parent').addEventListener('click', () => {
    console.log('Parent clicked');
});
document.getElementById('child').addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие
    console.log('Child clicked');
});
document.getElementById('appendage').addEventListener('click', () => {
    console.log('Appendage clicked');
});

//3

document.getElementById('myForm').addEventListener('input', function (event) {
    if (event.target.tagName === 'INPUT') {
        validateField(event.target);
    }
});

function validateField(field) {
    const value = field.value.trim();

    if (value.length > 10) {
        field.style.borderColor = 'red';
        console.log(`Ошибка: поле "${field.name}" превышает 10 символов`);
    } else {
        field.style.borderColor = 'green';
    }
}

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Форма отправлена');
});