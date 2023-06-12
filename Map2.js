const numbersn = [77, 88, 2, 5,6,  2, 4]


const newArr = numbers.map(myFunction)

function myFunction(num) {
    return num * 10;
  }
  //console.log(numbers)

  const array1 = [1, 4, 9, 16];


  const map1 = array1.map(x => x / 5);

//console.log(map1);

const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));

//console.log(map1)

const stringn = "raju ahmed";
const stringnArr = stringn.split("");

let asciiArr = stringnArr.map(x => x.charCodeAt(0));

console.log(stringnArr);


console.log(asciiArr);

