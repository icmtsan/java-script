//1

function safeDivide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Деление на ноль невозможно");
        }
        return a / b;
    } catch (error) {
        console.log('Ошибка:', error.message);
    }
}

console.log(safeDivide(10, 5));
console.log(safeDivide(10, 0));

//2

function transfromJSON(jsonString) {
    try {
      const obj = JSON.parse(jsonString);
      return obj;
    } catch (error) {
      console.error('Ошибка при парсинге JSON:', error.message);
      return null;
    }
  }

const json1 = '{"name": "Pupa", salary: 3000}';
const json2 = '{"name": "Lupa", "salary": 300000}';

console.log(transfromJSON(json1));
console.log(transfromJSON(json2));

//3

function checkAccess(age){
    try {
        if (age < 18) {
            throw new Error;
        }
        console.log('Доступ разрешен') 
        
    } catch (error) {
        console.error('Доступ запрещен', error.message);
        throw new Error('Вы должны быть старше 17 лет');
    }
}

checkAccess(17);
checkAccess(20);