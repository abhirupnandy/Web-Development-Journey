console.log('Hello World');

// Declaring a variable
var full_name = 'John Doe';
console.log(full_name);

// Data Types
let name = 'John'; // String Literal
let age = 30; // Number Literal
let isApproved = true; // Boolean Literal
let firstName = undefined;
let selectedColor = null;

// Dynamic Typing
console.log(name + age); // John30
console.log(age + age); // 60

// Objects
let person = {
	name: 'John',
	age: 30,
};
console.log(person);
console.log(person.name);
console.log(person.age);

// Arrays
let selectedColors = ['red', 'blue'];
console.log(selectedColors);

// Console Methods
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');
console.time('Hello');
console.log('Hello World with time');
console.timeEnd('Hello');
console.table({ name, age, isApproved, firstName, selectedColor });
// console.clear(); // Clear the console

// Type Conversion
let score = '100';
console.log(score + 1); // 1001
console.log(Number(score) + 1); // 101
console.log(typeof score); // string
console.log(typeof Number(score)); // number

let result = Number('Hello');
console.log(result); // NaN
console.log(typeof result); // number

// Type Coercion
let value = true + 12;
console.log(value); // 13
console.log(typeof value); // number

// Falsy Values
// undefined
// null
// 0
// false
// ''
// NaN


// Truthy Values
// '0'
// ' '
// []

// Equality Operators
let value1 = 1;
let value2 = true;
console.log(value1 == value2); // true
console.log(value1 === value2); // false
