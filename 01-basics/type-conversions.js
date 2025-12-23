/*
====================================
JavaScript Type Conversion
====================================

Type conversion means converting one data type
to another.

There are two types:
1. Implicit (Type Coercion)
2. Explicit (Manual Conversion)
*/

// ================================
// 1. Implicit Type Conversion
// ================================

// String + Number → String
console.log("5" + 2);     // "52"
console.log("Hello" + 5); // "Hello5"

// Number + Boolean
console.log(1 + true);  // 2
console.log(1 + false); // 1

// String - Number → Number
console.log("10" - 5);  // 5

// String * Number → Number
console.log("6" * 2);   // 12

// ================================
// 2. Explicit Type Conversion
// ================================

// String → Number
let numStr = "100";
let num = Number(numStr);
console.log(num, typeof num); // 100 number

// Invalid conversion
let invalid = Number("abc");
console.log(invalid); // NaN

// String → Integer / Float
console.log(parseInt("50px"));   // 50
console.log(parseFloat("10.5")); // 10.5

// Number → String
let score = 90;
let scoreStr = String(score);
console.log(scoreStr, typeof scoreStr); // "90" string

// Boolean → Number
console.log(Number(true));  // 1
console.log(Number(false)); // 0

// ================================
// 3. Boolean Conversion
// ================================

// Falsy values
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// Truthy values
console.log(Boolean(1));        // true
console.log(Boolean("text"));   // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true

// ================================
// 4. Equality & Type Conversion
// ================================

console.log(5 == "5");   // true (type coercion)
console.log(5 === "5");  // false (strict check)

console.log(null == undefined);  // true
console.log(null === undefined); // false

// ================================
// 5. Common Pitfalls
// ================================

console.log(" " == 0);    // true
console.log("" == 0);     // true
console.log([] == 0);     // true
console.log([] == false);// true

// ================================
// Best Practices
// ================================
// ✔ Avoid implicit coercion
// ✔ Use === instead of ==
// ✔ Convert explicitly when needed

console.log("Type conversion file executed successfully!");
