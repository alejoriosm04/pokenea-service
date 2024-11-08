const { getRandomPokenea, getRandomImageAndPhrase } = require('../services/pokenea-service');


exports.getPokeneaJson = (req, res) => {
    const data = getRandomPokenea();
    res.json(data);
};


exports.getPokeneaImageAndPhrase = (req, res) => {
    const data = getRandomImageAndPhrase();
    res.send(`
    `);
};
