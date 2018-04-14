//Database, Connecting to Server
//Require mongoose
const mongoose = require('mongoose');
//Connection String to link mongoose to mongoDB
const connectionString = 'mongodb://localhost/Photo-App';
//connecting mongoose to mongodb
mongoose.connect(connectionString);
//Callbacks
//If connection is successful
mongoose.connection.on('connected', ()=>{
	console.log(`Mongoose connected to ${connectionString}...`);
})
//If connection failed
mongoose.connection.on('error', (err)=>{
	console.log(`Failed to connect to ${connectionString}. Error: ${err}...`);
})
//if disconnected
mongoose.connection.on('disconnected', () =>{
	console.log(`Mongoose disconnected from ${connectionString}`);
} )