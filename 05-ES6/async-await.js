/*
====================================
JavaScript async / await
====================================

async / await is used to handle asynchronous
operations in a clean and readable way.

It is built on top of Promises.
*/

// ================================
// 1. Synchronous vs Asynchronous
// ================================
console.log("Start");

setTimeout(() => {
  console.log("Async task");
}, 1000);

console.log("End");

// Output order:
// Start
// End
// Async task

// ================================
// 2. Promise example
// ================================
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

// ================================
// 3. Using .then() (old way)
// ================================
getData().then(result => {
  console.log("Using then:", result);
});

// ================================
// 4. async function
// ================================
async function fetchData() {
  return "Hello from async";
}

fetchData().then(data => console.log(data));

// ================================
// 5. await keyword
// ================================
async function loadData() {
  const result = await getData(); // waits for promise
  console.log("Using await:", result);
}

loadData();

// ================================
// 6. Error handling with try/catch
// ================================
function getErrorData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Something went wrong");
    }, 1000);
  });
}

async function handleError() {
  try {
    const data = await getErrorData();
    console.log(data);
  } catch (error) {
    console.log("Error caught:", error);
  }
}

handleError();

// ================================
// 7. Multiple awaits
// ================================
function task1() {
  return Promise.resolve("Task 1 done");
}

function task2() {
  return Promise.resolve("Task 2 done");
}

async function runTasks() {
  const res1 = await task1();
  const res2 = await task2();

  console.log(res1);
  console.log(res2);
}

runTasks();

// ================================
// Summary
// ================================
// ✔ async makes a function return a Promise
// ✔ await pauses execution until Promise resolves
// ✔ try/catch handles async errors
// ✔ Cleaner than .then().catch()

console.log("Async-await file executed successfully!");
