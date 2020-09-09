const { Router } = require('express');
const router = Router();

const Metier = require('../../models/categories/Metier.model');

router.get('/', (req, res) => {
	Metier.find((err, docs) => {
		if(!err) res.send(docs);
		else res.status(400).send(err);
	});
});

router.post('/add', async (req, res) => {
	const { name } = req.body;
	const newMetier = new Metier({ name });

	await newMetier.save();
});