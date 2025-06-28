//1

const numberArray = [2, 3, 5, 7, 9, 10];
const quadro = numberArray.map(num => num * num);
console.log(numberArray);
console.log(quadro);

//2

const unsortedArray = [1, 2, 2, 3, 4, 5, 5, 5, 6];
const sortedArray =  unsortedArray.filter((item, index) => unsortedArray.indexOf(item) === index);

console.log(unsortedArray);
console.log(sortedArray);

//3

const randomArray = [2, 3, 15, 9, 5, 7, 9, 10];
const sumOfArray = randomArray.reduce((total, num) => total + num, 0);

console.log(randomArray);
console.log(sumOfArray);

//4

const myArray = [1, 2, 3, 4, 5];
const reversedMyArray = [];

for (let i = myArray.length - 1; i >= 0; i--) {
    reversedMyArray.push(myArray[i]);
}

console.log(myArray);
console.log(reversedMyArray);

//5

let value1 = "Some text here";
const value2 = "Some text here too";

console.log(value1);
console.log(value2);

value1 = "new text"; //эта переменная поменяет свое значение, потому что она создана с помощью let
//value2 = "new text"; //эта переменная создана через константу, константу нельзя менять

console.log(value1);
console.log(value2);

let testArray = [1, 2, 3, 4, 5];
const testArray2 = [1, 2, 3, 4, 5];

console.log(testArray);
console.log(testArray2);

testArray.push(8);
testArray2.push(8);

console.log(testArray);
console.log(testArray2);

testArray.shift();
testArray2.shift();

console.log(testArray);
console.log(testArray2);

testArray = [4, 6, 9, 2]; //с let можно менять что угодно
//testArray2 = [4, 6, 9, 2]; //Запрещает переопределять переменную, но не запрещает изменять содержимое

console.log(testArray);
console.log(testArray2);