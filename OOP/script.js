//1,2

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getInfo() {
        return `${this.brand} ${this.model}`;
    }

    displayInfo() {
        console.log(`Автомобиль: ${this.brand} ${this.model}`);
    }
}

class ElectricCar extends Car {
    constructor(brand, model, batteryCapacity) {
        super(brand, model);
        this.batteryCapacity = batteryCapacity;
    }

    getInfo() {
        return `${super.getInfo()} (Батарея: ${this.batteryCapacity})`;
    }

    displayInfo() {
        console.log(`Электромобиль: ${this.brand} ${this.model}`);
        console.log(`Ёмкость батареи: ${this.batteryCapacity}`);
    }
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

const electricCar1 = new ElectricCar("Tesla", "Model S", 100);
const electricCar2 = new ElectricCar("Nissan", "Leaf", 40);

console.log(car1.getInfo());
console.log(car2.getInfo());

console.log(electricCar1.getInfo());
console.log(electricCar2.getInfo());


//3

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        return "Звуки животных";
    }

    introduce() {
        return `Я ${this.name} и я говорю: ${this.makeSound()}`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    makeSound() {
        return "Гав";
    }

    fetch() {
        return `${this.name} приносит палку!`;
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    makeSound() {
        return "Мяу";
    }

    purr() {
        return `${this.name} мурчит`;
    }
}

class Bird extends Animal {
    constructor(name, canFly) {
        super(name);
        this.canFly = canFly;
    }

    makeSound() {
        return "Чирик";
    }

    fly() {
        return this.canFly ? `${this.name} летит!` : `${this.name} не умеет летать`;
    }
}

const animals = [
    new Dog("Бобик", "Овчарка"),
    new Cat("Вася", "Серая"),
    new Bird("Кеша", true),
    new Dog("Рекс", "Дворняжка"),
    new Bird("Страус", false)
];

animals.forEach(animal => {
    console.log(animal.introduce());
});

animals.forEach(animal => {
    console.log(`${animal.name} является Animal: ${animal instanceof Animal}`);
    console.log(`${animal.name} является Dog: ${animal instanceof Dog}`);
    console.log(`${animal.name} является Cat: ${animal instanceof Cat}`);
    console.log(`${animal.name} является Bird: ${animal instanceof Bird}`);
});