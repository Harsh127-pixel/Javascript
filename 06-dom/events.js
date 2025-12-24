/*
====================================
JavaScript DOM Events
====================================

Events are actions that happen in the browser,
like clicks, key presses, or page load.
*/

// ================================
// 1. Selecting Elements
// ================================
const btn = document.getElementById("btn");
const input = document.getElementById("nameInput");
const output = document.getElementById("output");

// ================================
// 2. click event
// ================================
btn.addEventListener("click", () => {
  output.textContent = "Button clicked!";
});

// ================================
// 3. input event
// ================================
input.addEventListener("input", (event) => {
  output.textContent = `You typed: ${event.target.value}`;
});

// ================================
// 4. mouseover event
// ================================
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "lightblue";
});

// mouseout
btn.addEventListener("mouseout", () => {
  btn.style.backgroundColor = "";
});

// ================================
// 5. keydown event
// ================================
document.addEventListener("keydown", (event) => {
  console.log("Key pressed:", event.key);
});

// ================================
// 6. Event object
// ================================
btn.addEventListener("click", (event) => {
  console.log("Event type:", event.type);
  console.log("Target element:", event.target);
});

// ================================
// Best Practices
// ================================
// ✔ Use addEventListener instead of inline events
// ✔ Keep event logic small
// ✔ Use event object when needed

console.log("Events file loaded successfully!");
