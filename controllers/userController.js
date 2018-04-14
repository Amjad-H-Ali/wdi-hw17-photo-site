//We need express to serve requests to these routes
const express = require('express');
//We need to use the router from express
const router = express.Router();
//We need to require the models file in order to use the schema
const user = require('../models/user.js');


























//Export router for server.js to use
module.exports = router;