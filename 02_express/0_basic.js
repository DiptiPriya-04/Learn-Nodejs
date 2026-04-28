// What is Express?     

// Express is a web application framework for Node.js. 
// It provides a set of features and tools to build web applications and APIs quickly and easily. 
// Express simplifies the process of handling HTTP requests, routing, middleware, and more,
// allowing developers to focus on building their applications
//  rather than dealing with low-level details of the underlying HTTP server.

// To use Express, you first need to install it using npm (Node Package Manager):
// npm install express

// Once you have Express installed, you can create a simple web server like this: 

// Import the Express module
const express = require('express');

// Create an instance of the Express application
//  means we are creating an Express application by calling the express() function.

const app = express(); //we can structure our application around this instance


app.get('/',function (req,res){
    res.end("hello u r at homepage");
});
app.get('/contact-us',function(req,res){
    res.end("hello u r at contact us page");
});
app.post('/tweet' , (req,res)=>{
    res.status(201).end("hello u r at tweet page");
});

// Start the server and listen on a specific port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


// 👉 Why do we need Express.js?
// - Node.js itself can create servers (using the 'http' module).
// - But building large apps becomes messy (handling routes, middlewares, parsing body, etc.).
// - Express gives us:
//    1. Routing (easy GET, POST, PUT, DELETE handling)
//    2. Middleware support (e.g., logging, authentication, parsing JSON)
//    3. Easy integration with templates and databases
//    4. Cleaner, faster development compared to raw Node.js HTTP

// 👉 Difference: Node.js vs Express.js
// - Node.js: Runtime environment (can run JS on server, has http module).
// - Express.js: A framework built on top of Node.js to make web development easier.

// 👉 Why Express is better?
// - Less code, more features
// - Readable & maintainable
// - Middleware support
// - Works well with databases (MongoDB, MySQL, etc.)
// - Huge community, lots of plugins