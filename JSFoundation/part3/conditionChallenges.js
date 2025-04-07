// check if the number is greater than another number

let num1 = 10;
let num2 = 20;

if(num1 < num2){
    console.log(num2 + " is greater");
}else{
    console.log(num1 + " is greater");
}

// checking if a string is equal to another string

let user1 = "livanshu";
let user2 = "notlivanshu";

if(user1 == user2){
    console.log("same string");
}else{
    console.log("different string");
}

// checking if a variable is number or not

let score = "44";
if(typeof(score) === 'number'){
    console.log("this is a number");
}else{
    console.log("this is not a number");
}

// check if boolean value is true or false

let isLoggedIn = false;
if(isLoggedIn){
    console.log("user is logged in");
}else{
    console.log("user is not logged in");
}

// check if array is empty or not

let arr = [];
if(arr.length == 0){
    console.log("array is empty");
}else{
    console.log("array is not empty");
}