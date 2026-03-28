/* Js runs because chrome has a built in engine called v8, which is written in c++. 
 It compiles js to machine code and runs it.
 Node.js uses v8 to run js on the server side. 

 
 Limitations of js:-
 it just provode the interaction with the user, it cannot access the file system or network.
 it is inside the browser, so it can only access the DOM and other browser APIs.
 It is single threaded, so it can only do one thing at a time. 
 It is synchronous, so it will block the execution of other code until it is done.

 Ques: - What is node.js?
 Ans: - Node.js was just a project by ryan dahl which was open sourced V8 engine embedded into c++ prgm.
  It is a runtime environment that allows you to run js on the browser side. It is built on top of v8 and provides a lot of additional features and APIs that are not available in the browser. 
  It is also asynchronous and non-blocking, which means it can handle multiple requests at the same time without blocking the execution of other code.
  It is also cross-platform, which means it can run on different operating systems like windows, mac, linux etc. 
*/
let sum1 = 3;
let sum2 = 4;
let sum3 = sum1 + sum2;
console.log(`sum of two number sum3 ${sum3}`);


/* WHY NODE?
 - Fast execution (V8 engine).
 - Non-blocking async code → handles thousands of requests at once.
 - Huge ecosystem via npm.(node package manager)
 - Perfect for APIs, real-time apps, microservices*/

 /*Types of Modules:
1. Built‑in Modules (fs, http, path, os, etc.)
2. Local Modules (files created inside the project)
3. Third‑party Modules (installed via npm)

CommonJS Syntax:
- require() → used to import modules
- module.exports → used to export modules*/
