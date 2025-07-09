//1

/* const student = {
    name: "Karl",
    age: 21,
    university: "Stanford",
    address: {
        city: "California",
        street: "Eskondido Mall",
        building: 20
    },
    courses: ["Math", "Physics"]
};

const copiedStudent1 = Object.assign({}, student);
const copiedStudent2 = { ...student };

copiedStudent1.name = "Steve";
copiedStudent1.age = 22;
copiedStudent1.address.building = 40;
copiedStudent1.courses.push("Chemistry");

console.log(student);
console.log(copiedStudent1);
console.log(copiedStudent2); */

//Объект копируется на верхнем уровне, все что вложено - это ссылка и будет меняться у всех объектов которые ссылались на данный объект

//2

/* const user = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: "12345"
    },
    sayHi: () => console.log('Hello, Alice!')
}; */

/* const userCopy = JSON.parse(JSON.stringify(user)); // выдает ошибку в консоль Uncaught TypeError: userCopy.sayHi is not a function

console.log(userCopy); 
userCopy.sayHi(); */
//Из за того что json не поддерживает методы и после преоборазования функции нет, поэтому ему нечего выполнять



//3

function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') { //условие если переменная нуловая или она не является типом 'объект'
        return obj; //возвращаем переменную
    }
    const copy = Array.isArray(obj) ? [] : {}; //проверяем является ли obj массивом, иначе создаем пустой объект
    for (let key in obj) { //перебирает все свойства объекта
        if (obj.hasOwnProperty(key)) { // проверка на пренадлежность свойства объекту obj
            copy[key] = deepCopy(obj[key]); //для каждого свойства снова вызывается функция deepCopy
        }
    }
    return copy;
}

const original = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original);
deepCopyObj.b.c = 3; //меняем значение в копии

console.log(original.b.c); // 2

//я вроде поняла что вся суть в copy[key] = deepCopy(obj[key]);, потому что он с помощью рекурсии разбивает на более низкие уровни
//но все равно тяэело это визуализировать для себя