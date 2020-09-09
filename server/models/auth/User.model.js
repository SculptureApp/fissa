const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	gender: String,
	firstName: String,
	lastName: String,
	state: String,
    deleg: String,
	tel: Number,
    email: String,
    metier: String,
    description: String,
    password: String,
    role:{
        type: String,
        default: 'ROLE_USER'
    },
    createdAt: {
    	type: Date,
    	default: Date.now
    },
    fb: String,
    insta: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema);