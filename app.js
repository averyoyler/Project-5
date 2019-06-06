const express = require('express');
const path = require('path');

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/form', (req, res) => {
  res.render('pages/form');
});

app.get('/users', (req, res) => {
  res.render('pages/users');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
})