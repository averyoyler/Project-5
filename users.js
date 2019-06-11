class Users {
  constructor() {
    this.collection = [];
  }
  addOne(user) {
    this.collection.push(user);
  }
  findOne(email) {
    for(let i = 0; i < this.users.length; i++) {
      if(this.users[i].email === email) {
        return this.users[i];
      }
    }
  }
}

class User {
  constructor(username, name, email, age) {
    this.username = username;
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

let users = new Users();
let avery = new User('averrryyyyyy', 'Avery Oyler', 'avery.oyler@hotmail.com', 19);
let admin = new User('admin', 'root', 'root@mtech.org', 29);

users.addOne(admin);
users.addOne(avery);

// app.post('/adduser', (req, res) => {
//   let first = req.body.first;
//   let last = req.body.last;
//   users.addOne(new User(first, last ...));
// })

module.exports = {
  User,
  users
};