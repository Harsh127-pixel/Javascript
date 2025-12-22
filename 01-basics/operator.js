/*
====================================
JavaScript Operators
====================================

Operators are symbols used to perform operations
on values (operands).
*/

// ================================
// 1. Arithmetic Operators
// ================================
let a = 10;
let b = 3;

console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);  // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponent:", a ** b);       // 1000

// Increment / Decrement
let count = 5;
count++;
console.log("Increment:", count);       // 6
count--;
console.log("Decrement:", count);       // 5

// ================================
// 2. Assignment Operators
// ================================
let x = 10;
x += 5;   // x = x + 5
console.log("+= :", x); // 15

x -= 3;
console.log("-= :", x); // 12

x *= 2;
console.log("*= :", x); // 24

x /= 4;
console.log("/= :", x); // 6

// ================================
// 3. Comparison Operators
// ================================
let p = 10;
let q = "10";

console.log("== :", p == q);    // true (value only)
console.log("=== :", p === q);  // false (value + type)
console.log("!= :", p != q);    // false
console.log("!== :", p !== q);  // true
console.log("> :", p > 5);      // true
console.log("< :", p < 5);      // false

// ================================
// 4. Logical Operators
// ================================
let isLoggedIn = true;
let isAdmin = false;

console.log("AND (&&):", isLoggedIn && isAdmin); // false
console.log("OR (||):", isLoggedIn || isAdmin);  // true
console.log("NOT (!):", !isLoggedIn);            // false

// ================================
// 5. Ternary Operator
// ================================
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
console.log("Ternary Result:", result);

// ================================
// 6. Type Operators
// ================================
console.log("typeof age:", typeof age); // number

let arr = [];
console.log("Array check:", Array.isArray(arr)); // true

// ================================
// 7. String Operators
// ================================
let firstName = "Harsh";
let lastName = "Bhojwani";

let fullName = firstName + " " + lastName;
console.log("Full Name:", fullName);

// ================================
// Summary
// ================================
// ✔ Use === instead of ==
// ✔ Use const/let instead of var
// ✔ Understand logical & ternary operators well

console.log("Operators file executed successfully!");
