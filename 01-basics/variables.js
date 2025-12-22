/*
====================================
JavaScript Variables
====================================

There are three ways to declare variables in JavaScript:
1. var   (old way – avoid using)
2. let   (modern – use when value can change)
3. const (modern – use when value should not change)
*/

// -------------------------------
// var (Function Scoped)
// -------------------------------
var city = "Delhi";
console.log("City:", city);

city = "Mumbai"; // var allows re-declaration and re-assignment
console.log("Updated City:", city);

// -------------------------------
// let (Block Scoped)
// -------------------------------
let age = 21;
console.log("Age:", age);

age = 22; // re-assignment allowed
console.log("Updated Age:", age);

// -------------------------------
// const (Block Scoped)
// -------------------------------
const country = "India";
console.log("Country:", country);

// ❌ Not allowed – will throw error
// country = "USA";

// -------------------------------
// Block Scope Example
// -------------------------------
if (true) {
  let blockLet = "I exist only inside this block";
  const blockConst = "Me too!";
  console.log(blockLet);
  console.log(blockConst);
}

// ❌ These will cause ReferenceError
// console.log(blockLet);
// console.log(blockConst);

// -------------------------------
// Hoisting Example
// -------------------------------

// var is hoisted (value is undefined)
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// let and const are hoisted but in Temporal Dead Zone (TDZ)
// Uncommenting below lines will cause ReferenceError

// console.log(hoistedLet);
// let hoistedLet = "Not accessible before declaration";

// -------------------------------
// Best Practices
// -------------------------------
// ✔ Prefer const by default
// ✔ Use let only when re-assignment is needed
// ❌ Avoid var

console.log("Variables file executed successfully!");
