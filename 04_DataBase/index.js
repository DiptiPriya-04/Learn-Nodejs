// This file serves as the main entry point for the database operations in our application.
//  It imports the database connection from the 'db' module and defines functions to interact with the database, such as retrieving all users.
// Import the database connection from the 'db' module


const dotenv = require('dotenv/config'); // Import dotenv to load environment variables from .env file
const db = require('./db');
const {usersTable} = require('./drizzle/schema'); 
dotenv.config(); // Load environment variables from .env file

async function getAllUsers(){ 
  const users = await db.select().from(usersTable);
  // use await to wait for the query to complete and return the results ans asyn is used to handle the asynchronous nature of database operations. 
  // which allows us to write code that looks synchronous while still being non-blocking.
  console.log("All users in DB:", users);
  return users;
}

async function createuser(id,name,email){
  await db.insert(usersTable).values({
    id,
    name,
    email,
});
}

createuser({id :1 ,name:"Dipti ", email:"dipti.@example.com"});
createuser({id :2 ,name:"John ", email:"john.@example.com"});
getAllUsers();
