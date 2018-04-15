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

	const date = Date.now();

	console.log('------------------------------------------------');
	User.findById(req.params.id, (err, foundUser)=>{
		res.render('user/show.ejs', {
			user: foundUser

		})
	})
})

//route to add photos for user
router.post('/:id/pic',(req, res)=>{
	const today = Date.now();

	console.log('We hit route pic -------------------------------------------------------------------------------------');
	User.findByIdAndUpdate(req.params.id, {$push:{photo:req.body.photo}}, (err, updatedUser)=>{
		if(err){
			console.log(err);
		}
		else{
			res.redirect(`/user/${updatedUser.id}`)
		}
	})
})


//Route to change profile picture
router.post('/:id', (req, res)=>{
	console.log('We hit this route------------------------------------------------------');
	 
	User.findByIdAndUpdate(req.params.id, {profilePicture: req.body.profilePicture}, (err, updatedUser)=>{
		if(err){
			console.log(err);
		}
		else{
			res.redirect(`/user/${updatedUser.id}`)
		}
	})
});


//Delete Route for photos
router.delete('/:id/:photoId', (req, res)=>{
	console.log('-----------------------------------------------DELETE------------------');
	User.findByIdAndUpdate(req.params.id, {$pull:{photo:req.params.photoId}} , (err, foundUser)=>{
		if(err)console.log(err);

		res.redirect('/user')
		
	});
});


//Route to edit page

router.get('/:id/edit',(req, res)=>{
	User.findById(req.params.id, (err, foundUser)=>{
		if(err)console.log(err);

		res.render('user/edit.ejs',{
			user: foundUser
		})
	})
})

//Route to edit User Data
router.put('/:id',(req, res)=>{


	User.findByIdAndUpdate(req.params.id, req.body, (err, updatedUser)=>{
		if(err)console.log(err);

		res.redirect(`/user/${updatedUser.id}`)
	})
})


















//Export router for server.js to use
module.exports = router;