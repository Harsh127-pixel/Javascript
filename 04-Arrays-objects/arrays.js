/*
====================================
JavaScript Arrays
====================================

An array is a data structure used to
store multiple values in a single variable.
*/

// ================================
// 1. Creating Arrays
// ================================
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Mango"];

console.log(numbers);
console.log(fruits);

// ================================
// 2. Accessing Elements
// ================================
console.log(numbers[0]); // first element
console.log(numbers[2]); // third element

// ================================
// 3. Modifying Elements
// ================================
numbers[1] = 20;
console.log(numbers);

// ================================
// 4. Array Length
// ================================
console.log("Length:", numbers.length);

// ================================
// 5. Common Array Methods
// ================================

// push → add at end
numbers.push(6);
console.log("push:", numbers);

// pop → remove last
numbers.pop();
console.log("pop:", numbers);

// unshift → add at start
numbers.unshift(0);
console.log("unshift:", numbers);

// shift → remove from start
numbers.shift();
console.log("shift:", numbers);

// ================================
// 6. map()
/// ================================
let doubled = numbers.map(num => num * 2);
console.log("map:", doubled);

// ================================
// 7. filter()
/// ================================
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter:", evenNumbers);

// ================================
// 8. reduce()
/// ================================
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("reduce (sum):", sum);

// ================================
// 9. Looping through arrays
// ================================

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("for:", fruits[i]);
}

// for...of
for (let fruit of fruits) {
  console.log("for...of:", fruit);
}

// ================================
// 10. Checking array type
// ================================
console.log("Is Array:", Array.isArray(numbers));

// ================================
// Summary
// ================================
// ✔ Arrays store multiple values
// ✔ map/filter/reduce do NOT modify original array
// ✔ push/pop modify original array

console.log("Arrays file executed successfully!");
