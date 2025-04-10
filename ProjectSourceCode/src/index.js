// ----------------------------------   DEPENDENCIES  ----------------------------------------------
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcryptjs'); // Added bcrypt for password hashing

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

app.get('/', (req, res) => {
  res.render('pages/home'); // Ensure 'home.hbs' exists in the views/pages directory
});

// Handle user registration
// Register API (Add User) /add-user is the register


app.post('/register', async (req, res) => {
  try {
    const { name, password, identikey } = req.body;

    if (!name || !password || !identikey) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate identikey format: 4 letters followed by 4 digits
    const identikeyRegex = /^[a-zA-Z]{4}\d{4}$/;
    if (!identikeyRegex.test(identikey)) {
      return res.status(400).json({ message: 'Invalid identikey format' });
    }

    const checkUserQuery = 'SELECT * FROM users WHERE identikey = ?';
    db.query(checkUserQuery, [identikey], async (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Database error', error: err });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertUserQuery = 'INSERT INTO users (name, password, identikey) VALUES (?, ?, ?)';
      db.query(insertUserQuery, [name, hashedPassword, identikey], (err, result) => {
        if (err) {
          return res.status(500).json({ message: 'Database error', error: err });
        }
        res.status(200).json({ message: 'Success' });
      });
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

//-----------Login Route--------------
app.get('/login', (req,res) =>{
  res.render('pages/login')
});


////profile//////////
// Authentication Required

app.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Not authenticated');
  }
  try {
    res.status(200).json({
      username: req.session.user.username,
    });
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).send('Internal Server Error');
  }
});
///////////////


// -------------------------------------  START SERVER   ----------------------------------------------

// Start the server on port 3000
const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = server;
