//EventEmitter is a class in Node.js that allows you to create and handle custom events. 
// It is part of the 'events' module, which provides a way to work with events in Node.js applications.

const EventEmitter = require("event");
const eventEmitter= new EventEmitter();

// Registering an event listener for the 'greet' event
eventEmitter.on('greet', (username) => {
    console.log(`Hello, ${username}! Welcome to Node.js events!`);
});

// Emitting the 'greet' event
eventEmitter.emit('greet', 'Alice'); 

eventEmitter.once('pushnotify',()=>{
    console.log("this will emit only once");
})
eventEmitter.emit('pushnotify'); // This will trigger the event and log the message

// 