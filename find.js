let numbers = [1, 3, 4, 9, 8, 6, 5, 7];


function isEven(element) {
  return element % 4 == 0;
}

let evenNumber = numbers.find(isEven);
console.log(evenNumber);





function isEven(element) {
    return element % 2 == 0;
  }
  
  let randomArray = [1, 45, 8, 98, 7];
  
  let firstEven = randomArray.find(isEven);
  console.log(firstEven); 
  
 
  let firstOdd = randomArray.find((element) => element % 8 == 5);
  console.log(firstOdd); 







  const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  function isAdult(member) {
    return member.age >= 21;
  }
  
  console.log(team.find(isAdult)); 
  

  let adultMember = team.find(({ age }) => age >= 21);
  
  console.log(adultMember); 
