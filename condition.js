
const getGrade = (result)=>{
    
if(result>32 && result<40 ){
    console.log("Your grade : D");
}
else if(result>39 && result<50){
    console.log("Your grade : C");
}
else if(result>49 && result<60){
    console.log("YOur grade : B")
}
else if(result>59 && result<70){
    console.log("Your grade : A-")
}
else if(result>69 && result<80){
    console.log("Your grade : A")
}
else if(result>79 && result<100){
    console.log("Your grade : A+")
}

else {
    console.log("Your are Faill")
}




}




const getBigNumber=(num1, num2)=>{
    if(num1>num2){
        console.log(num1);
    }else{
        console.log(num2);
    }
}


// getBigNumber(44,55)






const getOddEven = (number)=>{
    if(number%2===0){
        console.log("Your number is even");
    }else{
        console.log("Your number is odd");
    }
};


//getOddEven(66);
//getOddEven(33);




