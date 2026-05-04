// Book Routes - Route handlers for book related endpoints means 
// to handle the requests related to books such as getting all books, getting a specific book by id.
// creating a new book, updating a book by id and deleting a book by id.

const express = require('express');
const BOOKS = require('../DB/book'); // this is the book database which contains the data of the books and we are importing it here to use it in the routes for the book related endpoints.
const router = express.Router(); // means to create a new router object which can be used to define routes for the book related endpoints.

router.get('/:id',(req,res)=>{
 res.json(BOOKS);
})


router.get('/:id',(req,res)=>{ // book/ id can be dynamic can be anything
      const id = req.params.id;// from the parameter get the value of id and store it in a variable id 
      const book = BOOKS.find(e => e.id == id)//SELECT * from books where id = {id}

      if(!book) // not found book 
        return res
       .status(404)
       .json({error: `Book with id ${id} does not exists!!`});
    return res.json(book);
});


router.post('/',(req,res)=>{
    const {title,author} = req.body; // from the body get the value of title and author and store it in a variable title and author
    if(!title || !author) {
        return res.status(400).json({error: "Title and author are required"});
    }
    const id = BOOKS.length ;
    const book = {id:BOOKS.length,title,author}
    BOOKS.push(book);
    return res.status(201).json({message: `Book added successfully`,id});
 });



 router.delete('/:id',(req,res)=>{
    const id = req.params.id;
    const bookIndex = BOOKS.findIndex(e => e.id == id);
    if(bookIndex === -1) {
        return res.status(404).json({error: `Book with id ${id} does not exist`});
    }
    BOOKS.splice(bookIndex, 1); // remove the book from the array using splice method
    return res.status(200).json({message: `Book with id ${id} deleted successfully`});
 });
 

 module.exports = router; // means to export the router object so that it can be used in other files such as app.js to define the routes for the book related endpoints.