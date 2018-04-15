//We will need mongoose in order to create schema for our database
const mongoose = require('mongoose');
//Fruit schema, the model we want our information to be in the DB
const userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	userName:{
		type: String,
		required: true,
		unique: true
	},
	password:{
		type: String,
		required: true,
		unique: true
	},
	bday:{
		type: Date,
		required: true
	},
	gender:{
		type: String,
		required: false,
		default: 'Other'
	},
	profilePicture:{
		type:String,
		default: 'https://npengage.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png'

	},
	photo:{
		type:[String],


	}



})



//Export for controller to use model
module.exports = mongoose.model('User',userSchema);