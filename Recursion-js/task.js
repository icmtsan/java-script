//1

function countArray(arr, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    return arr[index] + countArray(arr, index + 1);
}

const array = [1, 2, 3, 4, 5];
console.log(countArray(array));

//2

function maxNumber(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    const firstElement = arr[0];
    const maxInRest = maxNumber(arr.slice(1));

    return firstElement > maxInRest ? firstElement : maxInRest;
}

const numbers = [1, 2, 9, 3, 4, 5];
console.log(maxNumber(numbers));


//3

function createFibonacci() {
    const cache = [0, 1];

    function fib(n) {

        if (cache[n] !== undefined) {
            return cache[n];
        }

        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }

    return fib;
}

const question = createFibonacci();

console.log(question(3));
console.log(question(8));