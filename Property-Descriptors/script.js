//1

const person = {};

Object.defineProperty(person, 'name', {
    value: 'Иван',
    writable: false,
    enumerable: true,
    configurable: false
});

Object.defineProperty(person, 'age', {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: false
});

Object.defineProperty(person, 'city', {
    value: 'Москва',
    writable: false,
    enumerable: true,
    configurable: false
});

try {
    person.name = 'Петр';
    console.log('name изменен:', person.name);
} catch (error) {
    console.log('Не удалось изменить name:', error.message);
}

console.log(person.name);
console.log(person.age);
console.log(person.city);  //ничего не изменилось


//2

const cities = {
    moscow: 'Москва',
    spb: 'Санкт-Петербург',
    kazan: 'Казань'
};

Object.defineProperty(cities, 'population', {
    value: 10000000,
    enumerable: false,
    writable: true,
    configurable: true
});

console.log('Проверка');
for (let key in cities) {
    console.log(key + ':', cities[key]);
}