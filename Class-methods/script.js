//1

class Counter {
    #count;

    constructor(initialValue = 0) {
        this.#count = initialValue;
    }

    increment(value = 1) {
        this.#count += value;
        return this.#count;
    }

    decrement(value = 1) {
        this.#count -= value;
        return this.#count;
    }

    getValue() {
        return this.#count;
    }

}

const counter = new Counter(5);

counter.increment(3);
console.log(counter.getValue());

counter.decrement(2);
console.log(counter.getValue());

//2

class EmailValidator {
    static isValid(email) {
        return typeof email === 'string' && email.includes('@');
    }
}

console.log(EmailValidator.isValid('user@example.com'));
console.log(EmailValidator.isValid('email.com'));
console.log(EmailValidator.isValid('@'));

//3

class Order {
    #items = [];

    constructor() {
        this.#items = [];
    }

    #calculateTotal() {
        return this.#items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    getTotal() {
        return this.#calculateTotal();
    }

    addItem(name, price, quantity = 1) {
        this.#items.push({
            name,
            price,
            quantity
        });
    }

    getItems() {
        return [...this.#items];
    }
}

const order = new Order();

order.addItem("Ноутбук", 50000, 1);
order.addItem("Мышь", 2500, 2);
order.addItem("Клавиатура", 4500, 1);

console.log("Общая стоимость заказа:", order.getTotal());
console.log("Товары в заказе:", order.getItems());