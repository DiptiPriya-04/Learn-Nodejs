const{drizzle}= require('drizzle-orm/node-postgres');


// Create a connection to the database 
// postgres://username:password@localhost:5432/database
const db = drizzle(process.env.DATABASE_URL);
module.exports = db;