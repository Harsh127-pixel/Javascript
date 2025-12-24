/*
====================================
JavaScript let & const
====================================

let and const were introduced in ES6
to replace var in most cases.
*/

// ================================
// 1. let keyword
// ================================
let age = 20;
console.log(age);

age = 21; // re-assignment allowed
console.log(age);

// ================================
// 2. const keyword
// ================================
const name = "Harsh";
console.log(name);

// ❌ Re-assignment not allowed
// name = "Aman"; // TypeError

// ================================
// 3. Block Scope
// ================================
if (true) {
  let x = 10;
  const y = 20;
  console.log(x, y);
}

// console.log(x); // ❌ ReferenceError
// console.log(y); // ❌ ReferenceError

// ================================
// 4. const with Objects & Arrays
// ================================
const user = {
  username: "admin"
};

user.username = "root"; // allowed
console.log(user);

// ❌ Not allowed
// user = {}; // TypeError

const numbers = [1, 2, 3];
numbers.push(4); // allowed
console.log(numbers);

// ================================
// 5. Hoisting difference
// ================================

// console.log(a); // ❌ ReferenceError
let a = 10;

// console.log(b); // ❌ ReferenceError
const b = 20;

// Explanation:
// let & const are hoisted but
// exist in Temporal Dead Zone (TDZ)

// ================================
// Best Practices
// ================================
// ✔ Use const by default
// ✔ Use let when value needs to change
// ❌ Avoid var

console.log("let & const file executed successfully!");
