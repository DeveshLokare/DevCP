const mongoose = require('mongoose')
const FeedbackSchema = mongoose.Schema
({
	name: {
		type: String ,
		required : true


	},
	email: {
		type: String ,
		required : true,
		unique: true
	
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

const Feedback = mongoose.model('Feedback',FeedbackSchema);

module.exports = Feedback;
