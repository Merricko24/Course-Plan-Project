// ----------------------------------   DEPENDENCIES  ----------------------------------------------
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const session = require('express-session');
// const bcrypt = require('bcrypt'); // Added bcrypt for password hashing
app.use(express.static(__dirname + '/'));

// -------------------------------------  APP CONFIG   ----------------------------------------------

// Create an instance of ExpressHandlebars and configure the layouts and partials directories.
const hbs = handlebars.create({
  extname: 'hbs',
  defaultLayout: 'main', // ensures that views are rendered within views/layouts/main.hbs

  layoutsDir: __dirname + '/views/layouts',
  partialsDir: __dirname + '/views/partials',
});

// Register `hbs` as our view engine using its bound `engine()` function.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Set up session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

// -------------------------------------  DB CONFIG AND CONNECT   ---------------------------------------
const dbConfig = {
  host: 'db',
  port: 5432,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
};
const db = pgp(dbConfig);

// Test the database connection
db.connect()
  .then(obj => {
    console.log('Database connection successful');
    obj.done(); // release the connection;
  })
  .catch(error => {
    console.log('ERROR', error.message || error);
  });

// -------------------------------------  ROUTES   ----------------------------------------------

// A simple welcome route
app.get('/welcome', (req, res) => {
  res.json({ status: 'success', message: 'Welcome!' });
});

// Render the registration page
app.get('/register', (req, res) => {
  res.render('pages/register');
});

// Handle user registration
// app.post('/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hash = await bcrypt.hash(password, 10);
//     const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
//     await db.any(query, [username, hash]);
//     console.log(`User registered: ${username}`);
//     res.redirect('/login');
//   } catch (error) {
//     console.error('Error Inserting User:', error);
//     res.redirect('/register');
//   }
// });

//-----------Login Route--------------
app.get('/login', (req,res) =>{
  res.render('pages/login')
});

//-----------Logout Route--------------
app.get('/logout', (req,res) =>{
  res.render('pages/logout')
});


app.get('/schedule', (req,res) => {
  res.render('pages/schedule')
});

// -------------------------------------  START SERVER   ----------------------------------------------

// Start the server on port 3000
const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = server;
