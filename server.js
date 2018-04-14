//set up expressJS server
const express = require('express');
const app = express();
//Port we will use
const PORT = 3000;
//Require middleWare for POST request (body-parser)
const bodyParser = require('body-parser');
//Require middleware for PUT and DELETE Routes
const methodOverride = require('method-override');
//Require controllers
const userControlller = require('./controllers/userController');
 //Connect/Require the Database file
require('./db/db');
//Use Middlewares
//Middleware to intercept POST routes and parse data
app.use(bodyParser.urlencoded({extended: false}));
//Middleware to override POST Routes to PUT OR DELETE
app.use(methodOverride('_method'));
// Middleware for ejs to use static assets and browsers to interpret.(Included with express, no requirement needed.)
app.use(express.static('public'));
//Use this controller (second parameter) when a request is made to this route
app.use('/user/', userControlller);
























//Set up server to listen on PORT 3000
app.listen(PORT, ()=>{
	console.log(`Server is listening on PORT ${PORT}...`);
})















