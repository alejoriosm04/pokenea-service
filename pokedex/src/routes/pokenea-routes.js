const express = require('express');
const { getPokeneaJson, getPokeneaImageAndPhrase } = require('../controllers/pokenea-controller');
const router = express.Router();


router.get('/json', getPokeneaJson);


router.get('/image', getPokeneaImageAndPhrase);

module.exports = router;
