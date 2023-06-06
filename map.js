const numbersn = [77, 88, 2, 5,6,  2, 4]


const newArr = numbers.map(myFunction)

function myFunction(num) {
    return num * 10;
  }
  //console.log(numbers)





  let persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  
  persons.map(getFullName);
  
  function getFullName(item) {
    return [item.firstname,item.lastname].join(" ");
  }



  //console.log(persons)



  const array1 = [1, 4, 9, 16];


const map1 = array1.map(x => x / 5);

//console.log(map1);





const numbers = [1, 4, 9];
const roots = numbers.map((num) => Math.sqrt(num));



//console.log(map1)















let languages = ["razu-ahmed", "java-,,,", "C++"];

let iteratorObject = languages.values();

for (let value of iteratorObject) {
  console.log(value);
}
