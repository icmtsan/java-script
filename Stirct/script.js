"use strict";

//1

/* const sum = (a, b) => {
    c = a + b;
    return c;
}; */

const sum = (a, b) => a + b;

console.log(sum(10, 5));

//2

function sumDuplicates(params) {
    return params.num1 + params.num2;
}

console.log(sumDuplicates({num1: 10, num2: 10}));


//3

function showThis() {
    console.log(this);
}
showThis();

//4

const obj = {};
delete obj.toString; //Встроенные методы объектов имеют флаг configurable: false поэтому их нельзя удалить или изменить дескрипторы. Чтобы избежать ошибок лучше и не пытаться их удалять