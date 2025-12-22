/*
====================================
JavaScript Data Types
====================================

JavaScript has two main categories of data types:
1. Primitive Data Types
2. Non-Primitive (Reference) Data Types
*/

// ================================
// 1. Primitive Data Types
// ================================

// 1. Number
let age = 21;
let price = 99.99;
console.log("Number:", age, price);

// 2. String
let firstName = "Harsh";
let greeting = 'Hello';
let message = `Welcome, ${firstName}`; // template literal
console.log("String:", greeting, message);

// 3. Boolean
let isLoggedIn = true;
let hasPaid = false;
console.log("Boolean:", isLoggedIn, hasPaid);

// 4. Undefined
let city;
console.log("Undefined:", city);

// 5. Null (intentional empty value)
let selectedUser = null;
console.log("Null:", selectedUser);

// 6. Symbol (unique identifiers)
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol:", id1 === id2); // false

// 7. BigInt (for very large numbers)
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// ================================
// typeof Operator
// ================================
console.log("typeof age:", typeof age);              // number
console.log("typeof firstName:", typeof firstName);  // string
console.log("typeof isLoggedIn:", typeof isLoggedIn); // boolean
console.log("typeof city:", typeof city);            // undefined
console.log("typeof selectedUser:", typeof selectedUser); // object (JS bug)
console.log("typeof bigNumber:", typeof bigNumber);  // bigint

// ================================
// 2. Non-Primitive Data Types
// ================================

// Object
let person = {
  name: "Harsh",
  age: 21,
  isStudent: true
};
console.log("Object:", person);

// Array (special type of object)
let skills = ["JavaScript", "HTML", "CSS"];
console.log("Array:", skills);

// Function
function greet(name) {
  return `Hello, ${name}`;
}
console.log("Function:", greet("Harsh"));

// ================================
// Primitive vs Reference Example
// ================================

// Primitive (copied by value)
let x = 10;
let y = x;
y = 20;
console.log("Primitive:", x, y); // 10 20

// Reference (copied by reference)
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log("Reference:", obj1.value, obj2.value); // 20 20

// ================================
// Summary
// ================================
// ✔ Primitive → stored by value
// ✔ Non-Primitive → stored by reference
// ✔ Use typeof to check type (except null)

console.log("Data types file executed successfully!");
