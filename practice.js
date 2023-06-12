const employees = [
    { name: "Nazmul", tax: 25 },
    { name: "Razu", tax: 18 },
   
];


const getAges = employees.map(item=>{item.name, item.name})

// console.log(getAges);

const calcAmt = (obj) => {
    newObj = {};
    newObj.name = obj.name;
    newObj.ary =obj.tax;
    return newObj;
};

let newArr = employees.map(calcAmt);
// console.log(newArr);




const string = [1,3,5,7,8,3,5];

const newString = string.map(item=>item.toString())


//console.log("Strign:",newString);




const text = "Razu, Nazmul";
const textArr = text.split(); 
//console.log(textArr);


// 1. hello world


// 2. add two number


// 2. convert kilometer to mile




let numbers = [1, 2, 5];

function square(number) {
  return number * 5;
}

let square_numbers = numbers.map(square);
// console.log(square_numbers);

5*4*3*2*1
