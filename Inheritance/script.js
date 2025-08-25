//1

class Person {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);
        this.course = course;
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я учусь на ${this.course} курсе`);
    }
}

/* const person = new Person("Анна");
person.introduce();

const student = new Student("Иван", 2);
student.introduce();

console.log(Student.prototype); */

//2

class Employee extends Person {
    constructor(name, position) {
        super(name);
        this.position = position;
    }

    work() {
        console.log(`Я работаю на позиции ${this.position}`);
    }

    introduce() {
        console.log(`Привет, меня зовут ${this.name}, и я работаю на позиции ${this.position}`);
    }
}

const person = new Person("Анна");
person.introduce();

const student = new Student("Иван", 2);
student.introduce();

const employee = new Employee("Мария", "менеджер");
employee.introduce();
employee.work();

console.log(Student.prototype);
console.log(Employee.prototype);

//3

const Vehicle = {
    move() {
        console.log('Транспортное средство движется');
    }
};

const Car = Object.create(Vehicle, {
    drive: {
        value: function () {
            console.log('Автомобиль едет по дороге');
        },
        writable: true,
        configurable: true,
        enumerable: true
    },
    wheels: {
        value: 4,
        writable: true,
        enumerable: true
    }
});

const CarAlternative = Object.create(Vehicle);
CarAlternative.drive = function () {
    console.log('Автомобиль едет по дороге');
};
CarAlternative.wheels = 4;

const myCar = Object.create(Car);
const myCar2 = Object.create(CarAlternative);

myCar.move();
myCar.drive();
myCar2.move();
myCar2.drive();

console.log(Object.getPrototypeOf(myCar) === Car);
console.log(Object.getPrototypeOf(Car) === Vehicle);
console.log(Object.getPrototypeOf(Vehicle) === Object.prototype);

console.log(myCar.hasOwnProperty('move'));
console.log(Car.hasOwnProperty('move'));
console.log(Vehicle.hasOwnProperty('move'));
console.log(Car.hasOwnProperty('drive'));