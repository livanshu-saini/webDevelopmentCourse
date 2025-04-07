// Number

let balance = 120;
let anotherBalance = new Number(120);

console.log(balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());

console.log(typeof(balance));
console.log(typeof(anotherBalance));

// null and undefined

let name;
let firstName = null;
let lastName = undefined;
console.log(firstName);
console.log(lastName);

// strings

let myString = "hello";
let myStringOne = "Hola";
let userName = "livanshu"

let oldGreet = myString + " livanshu";
console.log(oldGreet);

let greetMessage = `Hello ${userName} !`;
console.log(greetMessage);

let demoOne = `value is ${2 * 2}`;
console.log(demoOne);

let sm1 = Symbol("livanshu");
let sm2 = Symbol("livanshu");
console.log(sm1 == sm2);
console.log(sm1);