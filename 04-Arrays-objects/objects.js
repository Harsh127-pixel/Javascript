/*
====================================
JavaScript Objects
====================================

Objects store data in key-value pairs.
They represent real-world entities.
*/

// ================================
// 1. Creating an Object
// ================================
const person = {
  name: "Harsh",
  age: 21,
  city: "Delhi",
  isStudent: true
};

console.log(person);

// ================================
// 2. Accessing Properties
// ================================

// Dot notation
console.log(person.name);

// Bracket notation
console.log(person["age"]);

// ================================
// 3. Modifying Properties
// ================================
person.age = 22;
person.country = "India"; // add new property

console.log(person);

// ================================
// 4. Deleting a Property
// ================================
delete person.isStudent;
console.log(person);

// ================================
// 5. Object Methods
// ================================
const user = {
  username: "admin",
  login() {
    console.log(`User ${this.username} logged in`);
  }
};

user.login();

// ================================
// 6. `this` Keyword in Objects
// ================================
const employee = {
  name: "Amit",
  getName: function () {
    return this.name;
  }
};

console.log(employee.getName());

// ================================
// 7. Looping through Objects
// ================================
for (let key in person) {
  console.log(key + ":", person[key]);
}

// ================================
// 8. Object Destructuring
// ================================
const { name, age, city } = person;
console.log(name, age, city);

// ================================
// 9. Nested Objects
// ================================
const company = {
  name: "TechCorp",
  address: {
    city: "Bangalore",
    pincode: 560001
  }
};

console.log(company.address.city);

// ================================
// 10. Object Reference Behavior
// ================================
const obj1 = { value: 10 };
const obj2 = obj1;

obj2.value = 20;
console.log(obj1.value); // 20

// ================================
// Summary
// ================================
// ✔ Objects store structured data
// ✔ Access using dot or bracket
// ✔ `this` refers to the calling object
// ✔ Objects are copied by reference

console.log("Objects file executed successfully!");
