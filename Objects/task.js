//1. Создай объект, ключи в котором будут описывать тебя. Например, твое имя, возраст, увлечения и т.д. 
//Обязательно используй разные типы данных: имя - строка, возраст - число, хобби - массив и  т.д. Затем выведи все свои свойства/свойства объекта в консоль(разными способами!);   

const person = {
    name : "Ayanami Rei",
    age : 17,
    hobbies: ["poems", "singing", "dancing"],
    city : "Japan",
    job : false
}

console.log(person);
console.log(person.age);
console.log(person["hobbies"]);
console.log(person["name"]);

/* 2. В объект из предыдущего пункта:

- добавь новое свойство;
- измени значение существующего свойства;
- удали любое свойство.
И снова выведи все свойства объекта в консоль разными способами! */

person.adress = "Fokuoka";
delete person.city;
person.name = "Reiko";

console.log(person);
console.log(person.age);
console.log(person["hobbies"]);
console.log(person["name"]);