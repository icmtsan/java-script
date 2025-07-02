//1

function isPalindrome(str) {
    const cleanedStr = str.replace(/\s+/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  console.log(isPalindrome("А роза упала на лапу Азора"));
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("hello"));
  console.log(isPalindrome("12321"));

//2

function isShort(sentence) {
    const words = sentence.split(/\s+/);

    if (words.length === 0) return "";

    let shortestWord = words[0];
    for (const word of words) {

      const cleanedWord = word.replace(/[.,!?]+$/, '');

      if (cleanedWord.length < shortestWord.length) {
        shortestWord = cleanedWord;
      }
    }
    return shortestWord;
  }
  
  console.log(isShort("А роза упала на лапу Азора"));
  console.log(isShort("Красивый летний вечер"));

//3

function createPhoneNumber(number) {

    let str = number.toString();

    let part1 = str.slice(0, 3);
    let part2 = str.slice(3, 6);
    let part3 = str.slice(6);
    
    return `8 (${part1}) ${part2}-${part3}`;
  }
  
  console.log(createPhoneNumber(123456789));
  console.log(createPhoneNumber(555123434));

//4

function findMinMax(arr) {

    if (arr.length === 0) {
      return "";
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
  
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  
  let numbers = [5, 2, 9, 1, 5, 6];
  let result = findMinMax(numbers);
  console.log(`Минимальное значение: ${result.min}, максимальное значение: ${result.max}`);

//5

function sortArray(arr) {

    return [...arr].sort((a, b) => a - b);
  }

  let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
  let sortedNumbers = sortArray(numbers);
  console.log(sortedNumbers);