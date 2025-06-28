//1

const string = "JavaScript is fun!";
console.log(string.includes("fun"));

//2

function uncreativeFunc(i){
    if (i === 0 || i === null || i === undefined) {
        console.log('You using falsy value');
    } else {
        console.log('Everything okay');
    }
}

uncreativeFunc(0);
uncreativeFunc(null);
uncreativeFunc(undefined);
uncreativeFunc(5);

//3

let firstName = "John";
let lastName = "Doe";
let occupation = "software developer";

console.log(`Hello, my name is ${firstName} ${lastName}. I am a ${occupation}.`);

//4

console.log(null === undefined);
console.log(null == undefined);

//В первом значении проверка не прошла потому что имеет тип object. А во втором случае они true потому что оба подрузумевают отсутствие значения или обозначение что "тут" пустоъ

//5

console.log(1 + "1");

//Из за того что вторая единица - это строка, все преоброзовалось в строковый тип