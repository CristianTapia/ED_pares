// Load modules
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const https = require('https');
const port = 3000;

// fetch('https://randomuser.me/api')
//  .then(response => response.json())
//  .then(json => console.log(json))


// Create express server
const app = express();

// Permitir archivos estaticos (JS)
app.use(express.static('public'));

// Config server to use hbs engine
app.set('view engine', 'ejs');
app.engine('ejs', ejs.renderFile);

//TODO: recuperar los roomates desde un archivo
let roommates = [];
console.log(roommates)

app.post('/roommate', (req, res, next)=>{
  // TODO:
  fetch('https://randomuser.me/api')
    .then(resonse => resonse.json())
    .then(data => {
      // console.log(data);
      // 1. Almacenar el roommate en un archivo
      //TODO:
      roommates.push(data);

      // 2. retornar el roommate
      res.send(data);
    })
    .catch((error)=> console.log(error));
});

// app.get('/roommates', (req, res, next)=>{
//   // TODO:
//   console.log('roommates', roommates);
//   res.send(roommates);
// });

// app.get('/gastos', (req, res, next)=>{
//   // TODO:
// });

// app.post('/gastos', (req, res, next)=>{
//   // TODO:
// });

// app.put('/gastos', (req, res, next)=>{
//   // TODO:
// });

// app.delete('/gastos', (req, res, next)=>{
//   // TODO:
// });


// Render pages
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)});