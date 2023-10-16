# Lesson 2.1: Functions

## Table of Contents
1. [Introduction](#introduction)
2. [Function Basics](#function-basics)
3. [Function Declaration](#function-declaration)
4. [Function Parameters](#function-parameters)
5. [Function Return](#function-return)
6. [Using Comments](#using-comments)

---

### Introduction

In this lesson, you will learn about functions in JavaScript. Functions are like little code machines that take input, perform a task, and provide an output.

#### Why Should We Use Functions?

- **Organization:** Functions help break down complex code into smaller, manageable pieces.
- **Reusability:** Once you create a function, you can use it multiple times for the same task.
- **Readability:** Function names provide labels for the code's purpose.

### Function Basics

Functions are structured like recipes or vending machines:

- **Recipe:** Takes ingredients (input), provides step-by-step instructions, and yields a completed dish (output).
- **Vending Machine:** Takes money and a selection (input), follows instructions, and dispenses a snack or drink (output).

### Function Declaration

A function has the following syntax:

```javascript
function functionName() {
  // Code goes here;
}
```

- Use the `function` keyword to declare a function.
- Give it a name followed by parentheses and curly braces.
- The function's body resides within the curly braces.

### Function Parameters

You can add parameters to a function:

```javascript
function squareNums(num) {
  console.log(num * num);
}
```

- Parameters act as placeholders for values used inside the function.

### Function Return

A function can return a value:

```javascript
function squareNumber(num) {
  let squared = num * num;
  return squared;
}
```

- The `return` statement stops the function and provides a value.
- The returned value can be a data type or variable.


### Using Comments

Comments are essential for code readability and organization. They help you:

- Test specific code blocks.
- Assign tasks.
- Provide context for your code.

**Comment Syntax:**

- **HTML:** `<!-- comment -->`
- **CSS (single-line):** `/* comment */`
- **CSS (multi-line):** `/* This is a multi-line comment */`
- **JavaScript (single-line):** `// comment`
- **JavaScript (multi-line):** `/* This is a multi-line comment */`


Happy coding! 😊