const Pokenea = require('./pokenea-model');
require('dotenv').config();

const BUCKET_URL = process.env.BUCKET_URL;

const pokeneas = [
    new Pokenea(1, 'Bulbasaur', 0.7, "Nature's Blessing", `${BUCKET_URL}/Bulbasaur.jpeg`, 'The power is within you.'),
    new Pokenea(2, 'Ivysaur', 1.0, 'Solar Pulse', `${BUCKET_URL}/Ivysaur.jpg`, 'Life is a challenge.'),
    new Pokenea(3, 'Venusaur', 2.0, 'Thorn Barrier', `${BUCKET_URL}/Venusaur.jpg`, 'Success is built daily.'),
    new Pokenea(4, 'Charmander', 0.6, 'Inferno Spark', `${BUCKET_URL}/Charmander.jpg`, 'Be brave in adversity.'),
    new Pokenea(5, 'Charmeleon', 1.1, 'Crimson Flame', `${BUCKET_URL}/Charmeleon.jpg`, 'Keep the flame alive.'),
    new Pokenea(6, 'Charizard', 1.7, 'Sky Blaze', `${BUCKET_URL}/Charizard.jpg`, 'Soar above challenges.'),
    new Pokenea(7, 'Squirtle', 0.5, 'Aqua Shield', `${BUCKET_URL}/Squirtle.jpg`, 'Flow with the current.'),
    new Pokenea(8, 'Wartortle', 1.0, 'Tidal Crash', `${BUCKET_URL}/Wartortle.jpg`, 'Perseverance is key.'),
    new Pokenea(9, 'Blastoise', 1.6, 'Hydro Fortress', `${BUCKET_URL}/Blastoise.jpg`, 'Stand strong under pressure.'),
    new Pokenea(10, 'Pikachu', 0.4, 'Thunder Veil', `${BUCKET_URL}/Pikachu.jpg`, 'Electricity flows within you.')
];

module.exports = pokeneas;
