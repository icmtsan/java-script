for (let i = 1; i <= 10; i++) {
    console.log(i);
}


let sum = 0;
let a = 1;

while (a <= 100) {
    sum = sum + a;
    a++;
    console.log(sum);
}


//Я в математике не то что ноль, а ниже нуля поэтому я гуглила реализацию(

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let b = 3; b <= Math.sqrt(num); b += 2) {
        if (num % b === 0) return false;
    }
    return true;
}

let currentNumber = 0;
while (currentNumber <= 100) {
    if (isPrime(currentNumber)) {
        console.log(currentNumber);
    }
    currentNumber++;
}