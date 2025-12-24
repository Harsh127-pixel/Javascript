/*
====================================
JavaScript Spread & Rest Operator
====================================

Both use the same syntax: ...
Meaning depends on where it is used.

Spread → expands values
Rest   → collects values
*/

// ================================
// 1. Spread with Arrays
// ================================
const arr1 = [1, 2, 3];
const arr2 = [4, 5];

const combined = [...arr1, ...arr2];
console.log("Combined array:", combined);

// Copy array (no reference issue)
const copyArr = [...arr1];
copyArr.push(99);
console.log("Original:", arr1);
console.log("Copy:", copyArr);

// ================================
// 2. Spread with Objects
// ================================
const user = { name: "Harsh", age: 21 };
const address = { city: "Delhi", country: "India" };

const userDetails = { ...user, ...address };
console.log("Merged object:", userDetails);

// Update property immutably
const updatedUser = { ...user, age: 22 };
console.log("Updated user:", updatedUser);

// ================================
// 3. Spread with Functions
// ================================
const numbers = [10, 20, 30];

function sum(a, b, c) {
  return a + b + c;
}

console.log("Sum using spread:", sum(...numbers));

// ================================
// 4. Rest in Function Parameters
// ================================
function addAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log("Add all:", addAll(1, 2, 3, 4, 5));

// ================================
// 5. Rest with Destructuring (Array)
// ================================
const fruits = ["Apple", "Banana", "Mango", "Orange"];

const [first, ...restFruits] = fruits;
console.log("First:", first);
console.log("Rest:", restFruits);

// ================================
// 6. Rest with Destructuring (Object)
// ================================
const person = {
  name: "Harsh",
  age: 21,
  city: "Delhi",
  country: "India"
};

const { name, ...otherDetails } = person;
console.log("Name:", name);
console.log("Other details:", otherDetails);

// ================================
// Summary
// ================================
// ✔ Spread → expands values (arrays/objects)
// ✔ Rest   → collects values into array/object
// ✔ Same syntax (...) different usage

console.log("Spread & Rest file executed successfully!");
