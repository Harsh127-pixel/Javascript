/*
====================================
JavaScript Loops
====================================

Loops are used to execute a block of code
multiple times.
*/

// ================================
// 1. for loop
// ================================
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// ================================
// 2. while loop
// ================================
let count = 1;

while (count <= 3) {
  console.log("While loop iteration:", count);
  count++;
}

// ================================
// 3. do-while loop
// ================================
let num = 1;

do {
  console.log("Do-while iteration:", num);
  num++;
} while (num <= 2);

// ================================
// 4. break statement
// ================================
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break; // stop the loop
  }
  console.log("Break example:", i);
}

// ================================
// 5. continue statement
// ================================
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // skip this iteration
  }
  console.log("Continue example:", i);
}

// ================================
// 6. for...of loop (Arrays)
// ================================
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log("for...of:", fruit);
}

// ================================
// 7. for...in loop (Objects)
// ================================
let person = {
  name: "Harsh",
  age: 21,
  city: "Delhi"
};

for (let key in person) {
  console.log(key + ":", person[key]);
}

// ================================
// Best Practices
// ================================
// ✔ Use for...of for arrays
// ✔ Use for...in for objects
// ✔ Avoid infinite loops
// ✔ Prefer meaningful variable names

console.log("Loops file executed successfully!");

