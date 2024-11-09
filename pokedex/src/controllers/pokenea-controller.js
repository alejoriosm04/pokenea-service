const { getRandomPokenea, getRandomImageAndPhrase } = require('../services/pokenea-service');
exports.getPokeneaJson = (req, res, next) => {
    try {
        const data = getRandomPokenea(); 
        if (!data) throw new Error('No Pokenea found');
        res.json(data); 
    } catch (error) {
        next(error); 
    }
};

exports.getPokeneaImageAndPhrase = (req, res) => {
    try {
        const data = getRandomImageAndPhrase(); 
        res.render('pokenea', {  
            name: data.name,
            image: data.image,
            phrase: data.phrase,
            containerId: data.containerId
        });
    } catch (error) {
        res.status(500).send('Error rendering Pokenea image and phrase');
    }
};
