/*
====================================
JavaScript Hoisting
====================================

Hoisting is JavaScript's behavior of moving
declarations to the top of the scope
during the memory creation phase.
*/

// ================================
// 1. Hoisting with var
// ================================
console.log(a); // undefined (not error)
var a = 10;
console.log(a); // 10

// Explanation:
// var a;          // hoisted
// console.log(a); // undefined
// a = 10;

// ================================
// 2. Hoisting with let & const
// ================================

// console.log(b); // ❌ ReferenceError
let b = 20;

// console.log(c); // ❌ ReferenceError
const c = 30;

// Explanation:
// let & const are hoisted but kept in
// Temporal Dead Zone (TDZ)

// ================================
// 3. Hoisting with function declaration
// ================================
console.log(add(2, 3)); // Works

function add(x, y) {
  return x + y;
}

// ================================
// 4. Hoisting with function expression
// ================================

// console.log(multiply(2, 3)); // ❌ TypeError
var multiply = function (x, y) {
  return x * y;
};

console.log(multiply(2, 3)); // Works

// ================================
// 5. Hoisting with arrow function
// ================================

// console.log(divide(10, 2)); // ❌ TypeError
const divide = (x, y) => x / y;

console.log(divide(10, 2)); // Works

// ================================
// Summary
// ================================
// ✔ var → hoisted (initialized as undefined)
// ✔ let & const → hoisted but TDZ
// ✔ function declaration → fully hoisted
// ✔ function expression & arrow → not hoisted

console.log("Hoisting file executed successfully!");
