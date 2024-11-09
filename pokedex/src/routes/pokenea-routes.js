const express = require('express');
const { getPokeneaJson, getPokeneaImageAndPhrase } = require('../controllers/pokenea-controller');
const router = express.Router();


router.get('/pokenea-json', getPokeneaJson);


router.get('/pokenea-image', getPokeneaImageAndPhrase);

module.exports = router;
