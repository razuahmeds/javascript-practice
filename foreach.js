
let students = ['John', 'aksha', 'Sara', 'Jack'];


students.forEach(myFunction);

function myFunction(items) {

    console.log(items);
}



let strings = ['John', 'Sara', 'Jack'];


students.forEach(myFunction);

function myFunction(item, index, arr) {

   
    arr[index] = 'Hello '+ item;
}

console.log(students);






const studentsn = ['John', 'Sara', 'Jack'];

students.forEach(element => {
  console.log(element);
});







const arrayItems = ['item6', 'item2', 'item3'];
const copyItems = [];

for (let i = 0; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);






const arrayobj = ['item1', 'item2', 'item3'];
const copyobj = [];

arrayItems.forEach(function(obj){
  copyItems.push(obj);
})

console.log(copyobj);




const set = new Set([1, 2, 3]);


set.forEach(myFunction);

function myFunction(item) {
    console.log(item);
}





let map = new Map();


map.set('name', 'Jack');
map.set('age', '27');


map.forEach (myFunction);

function myFunction(value, key) {
    
    console.log(key + '- ' + value);
}