// 1

function createGreeter(name) {
    let callCount = 0;
    
    return function() {
      callCount++;
      if (callCount === 1) {
        return `Привет, ${name}! Ты зашел впервые!`;
      } else {
        return `Снова привет, ${name}! Это уже твой ${callCount} раз здесь!`;
      }
    };
  }

  const greetAlex = createGreeter("Алекс");
  
  console.log(greetAlex());
  console.log(greetAlex());
  console.log(greetAlex());

//2

function createFullName(name) {
    const firstName = "Иван";
    console.log(`Привет, ${name}`);

    function middleNameFunc() {
        const middleName = "Иванович";
        console.log(`Твое отчество: ${middleName}`);

        function fullNameFunc() {
            console.log(`Не забывай, кто ты: ${name} ${firstName} ${middleName}`);
        }

        return fullNameFunc;
    }

    return middleNameFunc;
}

const greetBoba = createFullName("Боба");
const middleFunc = greetBoba();
const fullFunc = middleFunc();

//3

function createFibonacci() {
  const cache = [0, 1];

  return function(a) {
      if (cache[a] !== undefined) {
          return cache[a];
      }

      for (let i = cache.length; i <= a; i++) {
          cache[i] = cache[i - 1] + cache[i - 2];
      }
      return cache[a];
  };
}

const question = createFibonacci();

console.log(question(3));
console.log(question(8));