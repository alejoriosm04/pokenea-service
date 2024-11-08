
const pokeneas = [

];


exports.getRandomPokenea = () => {
    const index = Math.floor(Math.random() * pokeneas.length);
    const { id, name, height, skill } = pokeneas[index];
    return { id, name, height, skill };
};

exports.getRandomImageAndPhrase = () => {
    const index = Math.floor(Math.random() * pokeneas.length);
    const { image, phrase } = pokeneas[index];
    return { image, phrase };
};
