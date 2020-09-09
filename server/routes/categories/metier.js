const { Router } = require('express');
const router = Router();

const metiers = require('../../models/categories/Metier.model');

router.get('/json', (req, res) => {
	res.send(metiers);
});