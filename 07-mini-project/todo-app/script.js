/*
====================================
Todo App - JavaScript Logic
====================================
*/

const input = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");

// Add task
addBtn.addEventListener("click", addTask);

// Add task on Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const delBtn = document.createElement("span");
  delBtn.textContent = "❌";
  delBtn.className = "delete";

  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent toggle
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}
