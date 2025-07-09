/* 1. Напиши функцию, которая принимает массив чисел, совершает над ними любую математическую операцию 
и возвращает новый массив, содержащий результаты этих операций, используя стрелочные функции; */

const doubleNumbers = (numbers) => numbers.map(num => num * 2);

const originalArray = [1, 2, 3, 4];
const resultArray = doubleNumbers(originalArray);

console.log(resultArray);

/* 2. Создай объект с методом, который использует стрелочную функцию внутри метода `setTimeout` 
для вывода значения свойства объекта через 1 секунду; */

const city = {
    town: 'Chikago',
    currentCity: function() {
        console.log(this);
        setTimeout(() => {
            console.log(`You are in ${this.town}`);
        }, 1000);
    }
};

city.currentCity()

/* 3. Реализуй функцию высшего порядка*, которая принимает функцию и массив, и применяет 
эту функцию ко всем элементам массива, используя стрелочные функции. */

const functionToArray = (func, arr) => arr.map(element => func(element));

const numbers = [1, 2, 3, 4, 5];
const square = x => x * x;

const squaredNumbers = functionToArray(square, numbers);
console.log(squaredNumbers);