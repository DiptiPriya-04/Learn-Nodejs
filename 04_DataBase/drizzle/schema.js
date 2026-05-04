const { integer } = require('drizzle-orm/gel-core')
const {pgTable} = require('drizzle-orm/pg-core')
const {varchar} = require('drizzle-orm/pg-core')

const usersTable = pgTable('users',{
    id : integer().primaryKey(), 
    name : varchar(255).notNull(),
    email : varchar(255).notNull().unique(),

});
module.exports = {
    usersTable,
};
// schema file is actually a representation of the database structure in code. 
// It defines the tables, columns, and their data types that will be used in the application. 
// In this example, we have defined a 'users' table with three columns: 'id', 'name', and 'email'. 
// The 'id' column is an integer and serves as the primary key, while the 'name' and 'email' columns are variable character fields that cannot be null.
//  The 'email' column is also set to be unique, ensuring that no two users can have the same email address.