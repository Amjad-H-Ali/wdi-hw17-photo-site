//We need express to serve requests to these routes
const express = require('express');
//We need to use the router from express
const router = express.Router();
//We need to require the models file in order to use the schema
const User = require('../models/user.js');


//Add Page for User (Sign Up Page)
router.get('/new', (req, res)=>{
	res.render('user/new.ejs');
});


//Route to add User to Database
router.post('/', (req, res)=>{
	//call create function (it's a mongo function) and pass in the new user object (req.body). This will comunicate with the DB and add our user to the DB
	User.create(req.body, (err, createdUser)=>{
		if(err){
			console.log(err);
		}else{
			console.log(createdUser);
			res.redirect('/user')
		}

	});
});

//Route to index page where we can see user names
router.get('/', (req, res)=>{
	User.find((err, user)=>{
		res.render('user/index.ejs', {
			user: user
		})
	})
})

//Route to Show Page
router.get('/:id', (req, res)=>{
	User.findById(req.params.id, (err, foundUser)=>{
		res.render('user/show.ejs', {
			user: foundUser

		})
	})
})


router.post('/:id', (req, res)=>{
	console.log('We hit this route------------------------------------------------------');
	User.findById(req.params.id, (err, user)=>{

		if(err){
			console.log(err);
		}
		else{
			user.name = req.body.profilePicture;
		}
		res.redirect('/user')
	})
})





















//Export router for server.js to use
module.exports = router;