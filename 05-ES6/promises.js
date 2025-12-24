/*
====================================
JavaScript Promises
====================================

A Promise represents a value that may be
available now, later, or never.
*/

// ================================
// 1. Creating a Promise
// ================================
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 1000);
});

// ================================
// 2. Consuming a Promise (.then / .catch)
// ================================
myPromise
  .then(result => {
    console.log("Then:", result);
  })
  .catch(error => {
    console.log("Catch:", error);
  });

// ================================
// 3. Promise States
// ================================
// Pending   → initial state
// Fulfilled → resolve() called
// Rejected  → reject() called

// ================================
// 4. Promise Chaining
// ================================
function step1() {
  return Promise.resolve("Step 1 completed");
}

function step2(msg) {
  return Promise.resolve(`${msg} → Step 2 completed`);
}

function step3(msg) {
  return Promise.resolve(`${msg} → Step 3 completed`);
}

step1()
  .then(step2)
  .then(step3)
  .then(result => {
    console.log("Chaining result:", result);
  });

// ================================
// 5. Error Handling in Chains
// ================================
function errorStep() {
  return Promise.reject("Something went wrong");
}

errorStep()
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Handled error:", error);
  });

// ================================
// 6. Promise.all()
// ================================
const p1 = Promise.resolve("Task 1");
const p2 = Promise.resolve("Task 2");
const p3 = Promise.resolve("Task 3");

Promise.all([p1, p2, p3])
  .then(results => {
    console.log("Promise.all:", results);
  });

// ================================
// 7. Promise.race()
// ================================
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 1000));

Promise.race([fast, slow])
  .then(result => {
    console.log("Promise.race:", result);
  });

// ================================
// Summary
// ================================
// ✔ Promises handle async operations
// ✔ then() for success
// ✔ catch() for errors
// ✔ finally() runs always
// ✔ async/await is built on promises

console.log("Promises file executed successfully!");
