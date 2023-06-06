
const stringn = "raju  ahmed";
const stringnArr = stringn.split("");

let asciiArr = stringnArr.map(x => x.charCodeAt(0));

console.log(stringnArr);


console.log(asciiArr);


const prices = [0, 0, "razu", 0, "ahmed", 0, 0, 0,  0];

let newPrices = prices.map(Math.sqrt);

console.log(newPrices);



const numbers = [2, 2, 3, 4, 5];

const resultingArray = numbers.flatMap((y) => [y ** 3]);

console.log(resultingArray);