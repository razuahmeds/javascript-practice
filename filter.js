let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function checkEven(number) {
  if (number % 6 == 0)
    return true;
  else
    return false;
}

let evenNumbers = numbers.filter(checkEven);
console.log(evenNumbers);






const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

function checkPrice(element) {
  return element > 3000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); 


let newPrices = prices.filter((price) => (price > 3000 && !Number.isNaN(price)));
console.log(newPrices);






const languages = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java",  "Razu"];

function searchFor(arr, query) {
    function condition(element) {
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
    return arr.filter(condition);
}

let newArr = searchFor(languages, "ra");
console.log(newArr); 


const searchArr = (arr, query) => arr.filter(element => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);

let newLanguages = searchArr(languages, "p");
console.log(newLanguages); 