// REST API with Express.js

// 👉 What is API ?
//Application Programming Interface (API)
//It is a set of rules and protocols that allows different software applications 
// to communicate with each other.

// 👉 What is REST API ?
//Representational State Transfer (REST) API 
// Its an architectural style for designing networked applications.
//It allow clients to interact with the API over the HTTP protocol.(Get,post,tweet,delete)

// 👉 Why Rest API ?
// - It is stateless, meaning each request from a client to the server must contain all the information needed to understand and process the request.
// - It is scalable, allowing for easy expansion and maintenance of the API as the application grows.
// - It is flexible, allowing for a wide range of data formats and communication protocols to be used.
// - It is widely adopted, making it easier to find resources and support for building and consuming REST APIs.


// 👉 Is thier any differnce between RESTful API and Rest api?
// RESTful API is a specific implementation of REST API that follows the principles of REST architecture.
// exaplain in layman term: REST API is a general term for any API that follows the principles of REST architecture, 
// while RESTful API is a specific implementation of REST API that adheres to the principles of REST architecture.
// In other words, all RESTful APIs are REST APIs, but not all REST APIs are RESTful APIs.


// 👉 Principal of REST APIs?

// 1. Stateless: Each request from a client to the server must contain all the information needed to understand and process the request. 
// The server should not store any information about the client's state between requests.


// 2. Client-Server Architecture: The client and server are separate entities that communicate with each other over a network.
// The client is responsible for the user interface and user experience, while the server is responsible for processing requests and managing data.

// 3. Uniform Interface: The API should have a consistent and standardized way of accessing resources and performing operations.
// This includes using standard HTTP methods (GET, POST, PUT, DELETE) and consistent URL structures for accessing resources. 

// 4. Cacheable: Responses from the server should be cacheable means to
//  improve performance and reduce the load on the server.

// 5. Layered System: The API should be designed in a way that allows for the use of intermediaries (such as proxies and gateways)
//  to improve scalability and security.
//  proxies mwans an intermediary server that sits between the client and the server, forwarding requests and responses between them.

// question 1 - 
// Get /books - get all books
// Get /books/:id - get a specific book by id
// Post /books - create a new book
// Put /books/:id - update a book by id
// Delete /books/:id - delete a book by id

const express = require('express');
const app = express();

const PORT = 8000;
  

// this part is done in databases but we are doing it here for testing purpose

const books = [
    {id : 1, title: 'Book one',author: 'Author 1'},
    {id : 2, title: 'Book two',author: 'Author 2'},
];

// MIDDLEWARE -> Plugins that can be used to modify the request and response objects before they are sent to the client.
// It can be used for tasks such as authentication, logging, and error handling.
app.use(express.json());

//Route to get all books    
app.get('/books/:id',(req,res)=>{ // book/ id can be dynamic can be anything
      const id = req.params.id;// from the parameter get the value of id and store it in a variable id 
      const book = books.find(e => e.id == id)//SELECT * from books where id = {id}

      if(!book) // not found book 
        return res
       .status(404)
       .json({error: `Book with id ${id} does not exists!!`});
    return res.json(book);
});

app.get('/books',(req,res)=>{
    // res.end("book added")--> this is text respond but prefer json 
    res.setHeader('x-dip','dipti priya'); // custom header
    res.json(books); // json is a key value 
});


 app.post('/books',(req,res)=>{
    const {title,author} = req.body; // from the body get the value of title and author and store it in a variable title and author
    if(!title || !author) {
        return res.status(400).json({error: "Title and author are required"});
    }
    const id = books.length ;
    const book = {id:books.length,title,author}
    books.push(book);
    return res.status(201).json({message: `Book added successfully`,id});
 });


 app.delete('/books/:id',(req,res)=>{
    const id = req.params.id;
    const bookIndex = books.findIndex(e => e.id == id);
    if(bookIndex === -1) {
        return res.status(404).json({error: `Book with id ${id} does not exist`});
    }
    books.splice(bookIndex, 1); // remove the book from the array using splice method
    return res.status(200).json({message: `Book with id ${id} deleted successfully`});
 });

app.use('/books', bookRouter); // this is the middleware which will use the bookRouter for all the routes starting with /books

 app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
}); 

