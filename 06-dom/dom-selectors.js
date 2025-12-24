/*
====================================
JavaScript DOM Selectors
====================================

DOM selectors are used to select HTML
elements so we can read or modify them.
*/

// ================================
// 1. getElementById
// ================================
const title = document.getElementById("title");
console.log("By ID:", title);

// ================================
// 2. getElementsByClassName
// ================================
const items = document.getElementsByClassName("item");
console.log("By Class:", items);

// ================================
// 3. getElementsByTagName
// ================================
const paragraphs = document.getElementsByTagName("p");
console.log("By Tag:", paragraphs);

// ================================
// 4. querySelector (first match)
// ================================
const firstItem = document.querySelector(".item");
console.log("querySelector:", firstItem);

// ================================
// 5. querySelectorAll (all matches)
// ================================
const allItems = document.querySelectorAll(".item");
console.log("querySelectorAll:", allItems);

// ================================
// 6. Looping over selected elements
// ================================
allItems.forEach((element, index) => {
  console.log(`Item ${index}:`, element.textContent);
});

// ================================
// 7. Changing content
// ================================
title.textContent = "DOM Selectors in JavaScript";

// ================================
// 8. Changing styles
// ================================
title.style.color = "blue";
title.style.fontSize = "24px";

// ================================
// Summary
// ================================
// ✔ getElementById → single element
// ✔ querySelector → first match
// ✔ querySelectorAll → NodeList (loopable)
// ✔ Used for DOM manipulation

console.log("DOM selectors file executed successfully!");
