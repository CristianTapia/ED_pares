// Load modules
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const port = 3000;

// Create express server
const app = express();

// Permitir archivos estaticos (JS)
app.use(express.static('public'));

// Config server to use hbs engine
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

// Render pages
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('Servicio levantado');
});