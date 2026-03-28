// Modules in node.js 

// Modules are reusable pieces of code that can be imported and used in other files.
// In node.js, there are two types of modules.
// Built-in modules and user-defined modules
// Built-in modules are provided by node.js and can be used without installing any additional packages.
// User-defined modules are created by the user and can be imported using the require() function.

// >>>>> Build In Modules
// const fs = require('fs'); // fs stands for file system, it is a built-in module that provides an API for interacting with the file system. 
// It allows you to read, write, delete, and manipulate files and directories on your computer.
const fs = require('fs');

// WRITE FILE
fs.writeFileSync("hello.txt","Hello World!"); 

// READ FILE
const data = fs.readFileSync("hello.txt","utf-8");
console.log("file content:", data);

// LOCAL MODULE IMPORT
const greet = require("./greet");
console.log(greet("dipti"));

// THIRD PARTY MODULE
require('colors');

console.log("hello world".green);
console.log("hello this is dipti".blue);

// >>>>>> LOCAL MODULES 
// Local modules are user-defined modules that are created by the user and can be imported using the require() function.
// For example, if you have a file named math.js that contains some functions, you can import it in another file using the require() function.
// In this example, we have created a local module named math.js that contains a function named greet. We have exported the greet function using module.exports and imported it in another file using the require() function. We can then use the greet function to greet the user.


// >>>>> 3rd PARTY MODULES
// 3rd party modules are modules that are created by other developers and 
// can be installed using npm (node package manager).

const color = require ('colors');
console.log("hello world".green);
console.log("hello this is dipti".blue);


