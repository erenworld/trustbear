const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');
const ejsMate = require('ejs-mate');
const Dashboard = require('./models/dashboard');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.engine('ejs', ejsMate);

app.use(
  session({
    secret: 'notgood',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect('/login');
  }
  next();
};

mongoose
  .connect('mongodb://localhost:27017/pandaproof')
  .catch((error) => console.log(error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Db connected');
});

app.get('/dashboard', (req, res) => {
  const test = new Dashboard({ title: 'ereb' });
  res.send(test);
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/dashboard', (req, res) => {
  res.send('Welcome');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const findUser = await User.findAndValidate(username, password);
  if (findUser) {
    req.session.user_id = findUser._id;
    res.redirect('/secret');
  }
  if (!findUser) {
    res.redirect('/login');
  }
});

app.post('/register', async (req, res) => {
  //   res.send(req.body);
  const { password, username } = req.body;
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;

  //   res.send(hash);
  res.redirect('/dashboard');
});

app.post('/logout', (req, res) => {
  req.session.user_id = null;
  res.redirect('./login');
});

app.get('/secret', requireLogin, (req, res) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  res.render('secret');
});

app.listen(3000, () => {
  console.log('SERVER IS LIVE');
});
