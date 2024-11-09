require('dotenv').config();
const express = require('express');
const path = require('path');
const pokeneaRoutes = require('./routes/pokenea-routes');

const app = express();
const PORT = process.env.PORT;

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/pokeneas', pokeneaRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
