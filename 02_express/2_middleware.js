// 1. What is Middleware?
// Middleware = a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
//  The next middleware function is commonly denoted by a variable named next.

// 2. Why use Middleware?
// - Middleware functions can perform the following tasks:
//   - Execute any code.(authentication, logging, etc)
//   - Make changes to the request and the response objects.
//   - End the request-response cycle.(using res.send(), res.json(), send a msg)
//   - Call the next middleware function in the stack.(using next())

const express =  require('express');
const { parse } = require('node:path');
const app = express();
const PORT = 8000;

// Artificial database for testing purpose
const books = [
    {id : 1, title: 'Book one',author: 'Author 1'},
    {id : 2, title: 'Book two',author: 'Author 2'},
];

// this below is used to parse the incoming request body in JSON format and make it available in req.body. It is a built-in middleware function in Express.js that is used to handle JSON data sent in the request body. By using this middleware, you can easily access the data sent by the client in a structured format, which makes it easier to work with in your application.
app.use(express.json()); 

// Middleware function to log request details
app.use(function(req,res,next){
    console.log('im middleware A');
    next();// unless next() is used the code will hang.
});

app.use(()=>{
    console.log('im middleware B');
    return res.json({msg: `Boom! i m middleware B`});
    
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/books/:id',(req,res)=>{
 res.json(books);
})

// Types of Middleware:

//global middleware: This type of middleware is executed for every incoming request to the application. 
// It is defined using app.use() and can be used for tasks such as logging, authentication, and error handling.


//route-specific middleware: This type of middleware is executed only for specific routes. 
// It is defined using app.METHOD() (where METHOD is the HTTP method such as GET, POST, etc.)
//  and can be used for tasks such as validating request parameters or checking user permissions for a specific route.

// router-level middleware: This type of middleware is executed for all routes defined within a specific router.
// It is defined using router.use() and can be used for tasks such as authentication or logging for a specific group of routes

// error-handling middleware: This type of middleware is used to handle errors that occur during the request-response cycle.
// It is defined using app.use() and has a specific signature that includes an additional error parameter (err, req, res, next).
// It can be used to catch and handle errors in a centralized manner, allowing for better error management and response formatting.


//custom middleware: This type of middleware is created by the developer to perform specific tasks that are not covered by the built-in middleware functions.
// It can be used for tasks such as custom authentication, logging, or any other functionality that is specific to the application’s needs.

