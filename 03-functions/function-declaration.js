/*
====================================
JavaScript Function Declaration
====================================

A function declaration defines a function
with the `function` keyword.
*/

// ================================
// 1. Function Declaration
// ================================
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Harsh")); // Works

// ================================
// 2. Hoisting (Important)
// ================================

// Function declarations are hoisted
console.log(add(2, 3)); // Works due to hoisting

function add(a, b) {
  return a + b;
}

// ================================
// 3. Function Expression
// ================================

const multiply = function (a, b) {
  return a * b;
};

// console.log(multiply(2, 3)); // ❌ Cannot call before declaration
console.log(multiply(2, 3));    // Works after declaration

// ================================
// 4. Named Function Expression
// ================================

const divide = function division(a, b) {
  return a / b;
};

console.log(divide(10, 2));

// ================================
// 5. Function Declaration vs Expression
// ================================

// Declaration → Hoisted
// Expression  → NOT hoisted

// ================================
// Best Practices
// ================================
// ✔ Use function declaration for reusable logic
// ✔ Use function expression for conditional functions
// ✔ Understand hoisting clearly

console.log("Function declaration file executed successfully!");
