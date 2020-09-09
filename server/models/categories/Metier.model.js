const { Schema, model } = require('mongoose');

const metierSchema = new Schema({
	id: Number,
	name: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
});

modules.exports = model('Metier', metierSchema, 'metiers');