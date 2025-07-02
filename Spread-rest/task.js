//1

function numbers(...num){
    let sum = num.reduce((a, b) => a + b, 0);
    let result = sum/num.length;
    return result;
}

console.log(numbers(1, 2, 3, 11)); 

//2

function printUser({ name, age, city }) {
    console.log(`Name: ${name}, Age: ${age}`, `City: ${city}`);
  };

  const user = {
    name: 'Mikle',
    age: 40,
    city: 'Haddonfield'
  };

  printUser(user);

//3

const house = {
    floors: 10,
    rooms_on_one_floor: {
        left_room: 202,
        right_room: 203
    },
    price: 2000,
    residents: ['Alice', 'Bob', 'Charlie']
}

const {
    floors,
    rooms_on_one_floor: { left_room, right_room },
    residents: [firstResident, ,thirdResident]
} = house;

console.log(floors);
console.log(left_room);
console.log(right_room);
console.log(firstResident);
console.log(thirdResident);

//4

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];

copiedArray.push(9);
copiedArray.unshift(4);

console.log(originalArray);
console.log(copiedArray);

//5

function removeProperty(obj, propertyToRemove) {
    const { [propertyToRemove]: empty, ...rest } = obj;
    return rest;
  }
  
  const user1 = {
    name: 'Mikle',
    age: 40,
    city: 'Haddonfield'
  };
  
  const userWithoutAge = removeProperty(user1, 'age');
  console.log(userWithoutAge);
  
  const userWithoutCity = removeProperty(user1, 'city');
  console.log(userWithoutCity);