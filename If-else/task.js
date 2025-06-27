/* Task #1 */
const number = prompt('Введите любое число');

if (number > 0) {
    console.log(`Ваше число ${number} положительное`)
} else if (number == 0) {
    console.log(`Ваше число ${number} - это ноль`)
} else {
    console.log(`Ваше число ${number} отрицательное`)
}

/* task #2 */

const weight = prompt('Введите вес');
const height = prompt('Введите рост');

let IMT = weight / (height / 100) ** 2;

if (IMT <= 18) {
    console.log(`Ваш ИМТ ${IMT}, у вас недостаточный вес`)
} else if (IMT > 18 && IMT <= 24) {
    console.log(`Ваш ИМТ ${IMT}, ваш вес в норме`)
} else if (IMT > 24 && IMT <= 28) {
    console.log(`Ваш ИМТ ${IMT}, у вас избыточный вес`)
} else {
    console.log(`Ваш ИМТ ${IMT}, у вас ожирение`)
}

/* task #3 */

let month = Number(prompt('Введите число месяца от 1-12'));
let monthName;

switch (month) {
    case 1:
        monthName = 'Январь';
        break;
    case 2:
        monthName = 'Февраль';
        break;
    case 3:
        monthName = 'Март';
        break;
    case 4:
        monthName = 'Апрель';
        break;
    case 5:
        monthName = 'Май';
        break;
    case 6:
        monthName = 'Июнь';
        break;
    case 7:
        monthName = 'Июль';
        break;
    case 8:
        monthName = 'Август';
        break;
    case 9:
        monthName = 'Сентябрь';
        break;
    case 10:
        monthName = 'Октябрь';
        break;
    case 11:
        monthName = 'Ноябрь';
        break;
    case 12:
        monthName = 'Декабрь';
        break;
    default:
        monthName = 'Неверный месяц';
}

console.log(monthName);


/* task #4 */

const day = prompt('Введите день недели').toLowerCase().trim();
let plan;

switch (day) {
    case "понедельник":
        plan = 'Помыть посуду';
        break;
    case "вторник":
        plan = 'Почитать книгу';
        break;
    case "среда":
        plan = 'Помедитировать о бесконечно вечном';
        break;
    case "четверг":
        plan = 'Поплакать';
        break;
    case "пятница":
        plan = 'Помыть полы';
        break;
    case "суббота":
        plan = 'Сходить в магазин';
        break;
    case "воскресенье":
        plan = 'Приготовить кушать';
        break;
    default:
        plan = "Окак";
}

console.log(plan);