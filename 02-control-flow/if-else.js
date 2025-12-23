/*
====================================
JavaScript if / else Statement
====================================

Used to execute code based on a condition.
*/

// ================================
// 1. Basic if statement
// ================================
let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day");
}

// ================================
// 2. if - else
// ================================
let age = 16;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// ================================
// 3. if - else if - else
// ================================
let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// ================================
// 4. Nested if-else
// ================================
let username = "admin";
let password = "1234";

if (username === "admin") {
  if (password === "1234") {
    console.log("Login successful");
  } else {
    console.log("Wrong password");
  }
} else {
  console.log("Invalid username");
}

// ================================
// 5. Logical operators with if
// ================================
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Admin access granted");
} else if (isLoggedIn) {
  console.log("User access granted");
} else {
  console.log("Please login");
}

// ================================
// 6. Truthy / Falsy with if
// ================================
let email = "";

if (email) {
  console.log("Email exists");
} else {
  console.log("Email is empty");
}

// ================================
// 7. if vs ternary
// ================================
let number = 7;

// if-else
if (number % 2 === 0) {
  console.log("Even number");
} else {
  console.log("Odd number");
}

// ternary operator
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

// ================================
// Best Practices
// ================================
// ✔ Use === instead of ==
// ✔ Avoid deep nesting
// ✔ Use meaningful conditions

console.log("if-else file executed successfully!");
