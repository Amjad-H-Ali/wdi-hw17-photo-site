//set up expressJS server
const express = require('express');
const app = express();
//Port we will use
const PORT = 3000;


//Connect/Require the Database
require('./db/db');






















//Set up server to listen on PORT 3000
app.listen(PORT, ()=>{
	console.log(`Server is listening on PORT ${PORT}...`);
})















