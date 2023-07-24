const mongoose = require('mongoose')
const ContactSchema = mongoose.Schema
({
	name: {
		type: String ,
		required : true
	},
	email: {
		type: String ,
		required : true,
	},
	message: {
		type: String ,
		required:[true,"Please enter your message"]
	}
},
{
    timestamps: true
}
)

const Contact = mongoose.model('Contact',ContactSchema);

module.exports = Contact;
