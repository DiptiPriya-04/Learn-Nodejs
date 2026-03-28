/* =============================
   JAVASCRIPT BASICS – REVISION
   ============================= */

/* ---------- VARIABLES ---------- */

// var (old style)
var name = "Dipti";
console.log(name);
name = 10;
console.log(name);

// let (block scoped)
let age = 22;
console.log(age);

// const (cannot reassign)
const fixedAge = 23;
console.log(fixedAge);


/* ---------- DATA TYPES ---------- */

// Numbers
let num1 = 2.98;
let num2 = 9.3;
console.log(num1 + num2);

// Strings
let firstName = "Dipti";
const lastName = "Priya";
console.log(firstName + " " + lastName);

// Boolean
let isLoggedIn = true;
console.log(isLoggedIn);

// Null & Undefined
let lastLoginDate = null;
console.log(lastLoginDate);

let futureDate = undefined;
console.log(futureDate);

// Object
const person = {
  firstName: "Dipti",
  lastName: "Priya",
  age: 99,
  isLoggedIn: false,
  lastLogin: null
};
console.log(person.firstName);
console.log(typeof person);


/* ---------- CONDITIONALS ---------- */

const voteAge = 18;

if (voteAge >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

// Ternary
let result = voteAge >= 18 ? "Yes" : "No";
console.log(result);

// Switch
const option = 3;
switch (option) {
  case 1:
    console.log("Hello");
    break;
  case 2:
    console.log("Namaste");
    break;
  case 3:
    console.log("Billa");
    break;
  default:
    console.log("Invalid choice");
}


/* ---------- LOOPS ---------- */

// For loop
for (let i = 1; i <= 5; i++) {
  console.log("Dipti " + i);
}

// While loop
let steps = 1;
while (steps <= 5) {
  console.log("Step " + steps);
  steps++;
}

// Do-while
let count = 1;
do {
  console.log("Count " + count);
  count++;
} while (count <= 3);


/* ---------- FUNCTIONS ---------- */

// Basic function
function sayHello() {
  console.log("Hey Dipti");
}
sayHello();

// Multiply function
function multiply(a, b) {
  return a * b;
}
console.log(multiply(12, 9));

// Unlimited arguments
function addNumbers() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(addNumbers(10, 20, 30));

// Spread operator
function addNumbersV2(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(addNumbersV2(5, 5, 5));


/* ---------- ARROW FUNCTIONS ---------- */

const greet = () => console.log("Hello");
greet();

const add = (a, b) => a + b;
console.log(add(4, 5));


/* ---------- ARRAYS ---------- */

const myArray = [1, true, "Dipti"];
myArray.push("Alexa");
myArray.push({ name: "Dipti" });
console.log(myArray);
console.log(myArray.indexOf("Alexa"));
myArray.reverse();
console.log(myArray);


/* ---------- HIGH ORDER ARRAY ---------- */

const students = ["Dipti", "True", "Smjhe na"];
students.forEach(val => console.log(val));

const numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
console.log(doubled);


/* ---------- END ---------- */

console.log("JS Revision Complete 🚀");
