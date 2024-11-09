const pokeneas = require('../models/pokenea-data');
const os = require('os');

exports.getRandomPokenea = () => {
    const index = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[index];

    return {
        id: pokenea.getId(),
        name: pokenea.getName(),
        height: pokenea.getHeight(),
        skill: pokenea.getSkill(),
        containerId: os.hostname()
    };
};

exports.getRandomImageAndPhrase = () => {
    const index = Math.floor(Math.random() * pokeneas.length);
    const pokenea = pokeneas[index];

    return {
        image: pokenea.getImage(),
        phrase: pokenea.getPhrase(),
        containerId: os.hostname()  
    };
};
