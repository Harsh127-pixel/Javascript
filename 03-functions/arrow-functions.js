/*
====================================
JavaScript Arrow Functions
====================================

Arrow functions are a shorter syntax
for writing functions.
Introduced in ES6.
*/

// ================================
// 1. Regular function
// ================================
function add(a, b) {
  return a + b;
}

console.log("Regular function:", add(2, 3));

// ================================
// 2. Arrow function (basic)
// ================================
const addArrow = (a, b) => {
  return a + b;
};

console.log("Arrow function:", addArrow(2, 3));

// ================================
// 3. Arrow function (implicit return)
// ================================
const multiply = (a, b) => a * b;

console.log("Implicit return:", multiply(3, 4));

// ================================
// 4. Single parameter
// ================================
const square = x => x * x;

console.log("Square:", square(5));

// ================================
// 5. Arrow function with no parameters
// ================================
const greet = () => "Hello, World!";

console.log(greet());

// ================================
// 6. Arrow functions with arrays
// ================================
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// ================================
// 7. Arrow function vs regular function (this)
// ================================
const person = {
  name: "Harsh",
  regularFunction: function () {
    console.log("Regular:", this.name);
  },
  arrowFunction: () => {
    // Arrow functions do NOT have their own 'this'
    console.log("Arrow:", this.name);
  }
};

person.regularFunction(); // Harsh
person.arrowFunction();   // undefined

// ================================
// Best Practices
// ================================
// ✔ Use arrow functions for callbacks
// ✔ Avoid arrow functions as object methods
// ✔ Use regular functions when 'this' is needed

console.log("Arrow functions file executed successfully!");
