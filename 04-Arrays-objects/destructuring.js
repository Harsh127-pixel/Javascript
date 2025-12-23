/*
====================================
JavaScript Destructuring
====================================

Destructuring allows you to unpack values
from arrays or properties from objects
into separate variables.
*/

// ================================
// 1. Array Destructuring
// ================================
const fruits = ["Apple", "Banana", "Mango"];

// Traditional way
const firstFruit = fruits[0];
const secondFruit = fruits[1];

// Destructuring way
const [fruit1, fruit2, fruit3] = fruits;

console.log(fruit1, fruit2, fruit3);

// ================================
// 2. Skipping elements
// ================================
const [first, , third] = fruits;
console.log(first, third);

// ================================
// 3. Default values
// ================================
const numbers = [10];

const [a = 0, b = 0] = numbers;
console.log(a, b); // 10 0

// ================================
// 4. Swapping variables
// ================================
let x = 5;
let y = 10;

[x, y] = [y, x];
console.log(x, y);

// ================================
// 5. Object Destructuring
// ================================
const person = {
  name: "Harsh",
  age: 21,
  city: "Delhi"
};

const { name, age, city } = person;
console.log(name, age, city);

// ================================
// 6. Renaming variables
// ================================
const { name: fullName, age: personAge } = person;
console.log(fullName, personAge);

// ================================
// 7. Default values in objects
// ================================
const { country = "India" } = person;
console.log(country);

// ================================
// 8. Nested destructuring
// ================================
const student = {
  id: 1,
  details: {
    course: "JavaScript",
    duration: "3 months"
  }
};

const {
  details: { course, duration }
} = student;

console.log(course, duration);

// ================================
// 9. Destructuring in function parameters
// ================================
function printUser({ name, city }) {
  console.log(`${name} lives in ${city}`);
}

printUser(person);

// ================================
// Summary
// ================================
// ✔ Cleaner syntax
// ✔ Less repetitive code
// ✔ Common in React/Vue

console.log("Destructuring file executed successfully!");
