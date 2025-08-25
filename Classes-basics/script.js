//1

class Book {
    constructor(author, title, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    bookInfo() {
        console.log(`Название книги: ${this.author}, автор: ${this.title}, страниц в книге: ${this.pages}`);
    }
}

const newBook = new Book('Цветок', 'Роулинг', 100);
newBook.bookInfo();

//2

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    displayInfo() {
        console.log(`Пользователь: ${this.name}`);
        console.log(`Email: ${this.email}`);
    }
}

const user1 = new User('Иван Иванов', 'ivan@example.com');
const user2 = new User('Милана Петрова', 'mila@example.com');
const user3 = new User('Алексей Смирнов', 'alex@example.com');

user1.displayInfo();
user2.displayInfo();
user3.displayInfo();

//3

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;

        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }

    set width(value) {
        if (value <= 0) {
            console.error('Ширина должна быть положительным числом.');
        } else {
            this._width = value;
        }
    }

    get width() {
        return this._width;
    }

    set height(value) {
        if (value <= 0) {
            console.error('Высота должна быть положительным числом.');
        } else {
            this._height = value;
        }
    }

    get height() {
        return this._height;
    }
}

const myRect = new Rectangle(5, -10);
console.log('Площадь:', myRect.area);
console.log('Периметр:', myRect.perimeter);

const rect2 = new Rectangle(3, 4);
console.log('Площадь:', rect2.area);
console.log('Периметр:', rect2.perimeter);