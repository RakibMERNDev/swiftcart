# JavaScript Interview Questions

### 1) What's the difference between Null and Undefined?  
**Answer:**  
`Null` is when a value is assigned but it's empty on purpose.  
`Undefined` is when a variable exists but hasn't been given any value yet.

---

### 2) What's the use of `map()` function in JavaScript? How is it different from `forEach()`?  
**Answer:**  
`map()` goes through an array and **returns a new array** with any changes you make.  
`forEach()` just goes through the array but **doesn't give you a new array**.

---

### 3) What's the difference between `==` and `===`?  
**Answer:**  
`==` checks if the **values** are the same, even if types are different.  
`===` checks if **both value and type** are exactly the same.

---

### 4) What's the significance of `async` and `await` in fetching API data?  
**Answer:**  
`async` and `await` let your code wait for API data without stopping everything else. It helps fetch data safely and makes sure your code runs smoothly.

---

### 5) Explain the concept of Scope in JavaScript (function, global, block)  
**Answer:**  
- **Global Scope:** Variables you can use anywhere.  
- **Function Scope:** Variables only usable inside a function.  
- **Block Scope:** Variables declared with `let` or `const` that only work inside `{ }` like loops or if statements.
