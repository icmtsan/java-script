// 1 задание
// В следующем коде несколько раз повторяются похожие операции. Проведите рефакторинг, чтобы избежать дублирования,
// используя функции или другие средства:
/* const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };
const total1 = product1.price * 1.2;
const total2 = product2.price * 1.2;
console.log('Total for Product 1:', total1);
console.log('Total for Product 2:', total2);
 */

const product1 = { name: 'Product 1', price: 10 };
const product2 = { name: 'Product 2', price: 20 };

function calculateTotal(product) {
    return product.price * 1.2;
}

function logTotal(product) {
    console.log(`Total for ${product.name}:`, calculateTotal(product));
}

logTotal(product1);
logTotal(product2);

// 2 задание
// Код ниже содержит сложные вложенные условия. Упростите его, чтобы улучшить читаемость и уменьшить вероятность ошибок:
/* if (user.isAdmin) {
  if (user.isActive) {
    if (user.age > 18) {
      console.log('Access granted');
    }
  }
} */

if (user.isAdmin && user.isActive && user.age > 18) {
  console.log('Access granted');
}

// 3 задание
// В следующей функции выполняется слишком много операций. Разделите её на несколько более коротких функций,
// чтобы улучшить читаемость и повторное использование кода:
/* function checkStock(item) {
  return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
}
function processOrder(order) {
  // Валидация данных заказа
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return;
  }
  // Рассчет суммы
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  // Проверка наличия на складе
  for (let item of order.items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return;
    }
  }
  // Выполнение заказа
  console.log('Order processed with total:', total);
}
 */

function checkStock(item) {
  return Math.random() < 0.5; // Возвращает рандомно true или false, это просто иммитация функции!
}

function validateOrder(order) {
  if (!order.id || !order.items || order.items.length === 0) {
    console.log('Invalid order');
    return false;
  }
  return true;
}

function calculateTotal(items) {
  let total = 0;
  for (let item of items) {
    total += item.price * item.quantity;
  }
  return total;
}

function checkItemsInStock(items) {
  for (let item of items) {
    if (!checkStock(item)) {
      console.log('Item out of stock:', item.name);
      return false;
    }
  }
  return true;
}

function processOrder(order) {
  if (!validateOrder(order)) return;
  
  const total = calculateTotal(order.items);
  
  if (!checkItemsInStock(order.items)) return;
  
  console.log('Order processed with total:', total);
}
