/*
====================================
JavaScript switch Statement
====================================

The switch statement is used to perform
different actions based on different values.
*/

// ================================
// 1. Basic switch example
// ================================
let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// ================================
// 2. switch with strings
// ================================
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access granted");
    break;
  case "editor":
    console.log("Edit access granted");
    break;
  case "viewer":
    console.log("View-only access");
    break;
  default:
    console.log("No access");
}

// ================================
// 3. Multiple cases sharing logic
// ================================
let grade = "B";

switch (grade) {
  case "A":
  case "B":
    console.log("Excellent performance");
    break;
  case "C":
    console.log("Good performance");
    break;
  case "D":
    console.log("Needs improvement");
    break;
  default:
    console.log("Invalid grade");
}

// ================================
// 4. switch vs if-else (example)
/// ================================
let trafficLight = "yellow";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid signal");
}

// ================================
// Best Practices
// ================================
// ✔ Always use break (unless intentional fall-through)
// ✔ Use switch for multiple fixed values
// ❌ Avoid complex conditions in switch

console.log("Switch file executed successfully!");
