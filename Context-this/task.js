//1

const item = {
    quantity: 3,
    price: 100,
    onLast: function(){
        console.log(`На остатке ${this.quantity} по стоимости ${this.price}`)
    }
};

item.onLast();

const countFunc = item.onLast;
countFunc();

//В моем понимании когда что то создается внутри объекта или конкретного блока, функция понимает где конкретно брать значения и искать переменные;
// А при записи в новую переменную этот контекст теряется и он не понимает откуда брать значения

//2
const student = {
  name: 'Alice',

  greet: function() {
    console.log(`Hello, ${this.name}!`);
  },

  delayedGreet: function() {
    setTimeout(() => this.greet(), 1000);
  }

};

student.greet() // Hello, Alice
student.delayedGreet() // Hello, undefined 

//Из за того что метод выполняется через время, он пытается выполнить как обычную функцию и тк он выполняется раньше, то уже теряется контекст
//А стрелочные функции берут за основу родительский объект, поэтому берут потом параметр name


//3

function showDetails(city, country) {
    console.log(`${this.name} из ${city}, ${country}`);
  }
  
  const person = { name: "Дмитрий" };
  
  showDetails.call(person, "Москва", "Россия");
  
  showDetails.apply(person, ["Токио", "Япония"]);
  
  const showPersonDetails = showDetails.bind(person, "Нью-Йорк");
  showPersonDetails("США");


//4

function sayHello() {
    console.log('Hello, ' + this.name)
}

const admin = {
    name: 'Bob'
};

const user = {
    name: 'John'
};

const sayHelloToAdmin = sayHello.bind(admin)
sayHelloToAdmin()

const sayHelloToUser = sayHello.bind(user)
sayHelloToUser()

//bind создает жесткую функцию которую больше нельзя перепривязать, поэтому как админа лучше привязываться через изначальную функцию и объект