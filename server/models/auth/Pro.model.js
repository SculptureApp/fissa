const { Schema, model } = require('mongoose');

const ProSchema = new Schema({
    user: {
    	type: Schema.Types.ObjectId,
    	ref: 'User'
    },
	metier: String,
	fb: String,
    g_plus: String
});

module.exports = model('Pro', ProSchema);