function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var array = [
  getRandomInt(1, 11),
  getRandomInt(1, 11),
  getRandomInt(1, 11),
  getRandomInt(1, 11),
  getRandomInt(1, 11),
];

console.log(`Array is ${array}`);

function addArray() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(`Sum is ${sum}`);
}

function multiply(num1, num2) {
    return num1 * num2;
  }
  
function mulitplyArray() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = array.reduce(multiply);
  }
  console.log(`Product is ${sum}`);
}

addArray();
mulitplyArray();
