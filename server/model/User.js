// User.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
	email: {
		type: String,
		required : [true , "Please enter your email"],
		unique : [true, "Email already taken"]
		
		
	},
	username: {
		type: String,
		required : [true , "Please enter a username"]
		
	},
	password: {
		type: String,
		required : [true , "Please enter a password"]
	}
},
{
    timestamps: true
}
)

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User)
