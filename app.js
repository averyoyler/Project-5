const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const usersFile = require('./users.js');
const User = usersFile.User;
const users = usersFile.users;

let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/form', (req, res) => {
  res.render('pages/form');
  console.log(users.collection.length);
});

app.get('/users', (req, res) => {
  res.render('pages/users', {
    users: users.collection
  });
});

app.post('/create', (req, res) => {
  let newUser = new User(req.body.username, req.body.name, req.body.email, Number(req.body.age))
  console.log('new user', newUser);
  users.addOne(newUser);
  console.log(`USERS\n`);
  console.log(users);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

console.log(users);
// console.log(user);