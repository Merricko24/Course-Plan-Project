// ----------------------------------   DEPENDENCIES  ----------------------------------------------
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const session = require('express-session');
 const bcrypt = require('bcryptjs'); // Added bcrypt for password hashing
app.use(express.static(__dirname + ''));

app.use('/resources', express.static(path.join(__dirname, 'resources')));

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
  res.render('pages/login');
});

// Handle user registration
// Register API (Add User) /add-user is the register


app.post('/register', async (req, res) => {
  try {
    const { first_name, last_name, identikey, password, isAdvisor} = req.body;
    if (!first_name || !last_name || !password || !identikey) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // Validate identikey format: 4 letters followed by 4 digits
    const identikeyRegex = /^[a-zA-Z]{4}\d{4}$/;
    if (!identikeyRegex.test(identikey)) {
      return res.status(400).json({ message: 'Invalid identikey format' });
    }
  
    const studentOrAdvisor = isAdvisor == 'on' ? 'advisors' : 'students';

    await db.oneOrNone(`SELECT * FROM ${studentOrAdvisor} WHERE identikey = '${identikey}'`)
    .then(async (existingUser) => {
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }


      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);

       const insertUserQuery = `INSERT INTO ${studentOrAdvisor} (first_name, last_name, password, identikey) VALUES ('${first_name}', '${last_name}', '${hashedPassword}', '${identikey}')`;
       db.any(insertUserQuery)
       .then(() => {

          // Registration successful
          res.status(201).json({ message: 'User registered successfully' });
        })
        .finally(() => {
          res.render('pages/schedule')
        });
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

//-----------Login Route--------------
app.get('/login', (req, res) => {
  res.render('pages/login')
});


app.post('/login', async (req, res) =>  {
  const {identikey, password} = req.body;
try {
    if(!identikey || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    //check if advisor or student
    const advisor = await db.oneOrNone(`SELECT identikey FROM advisors WHERE identikey = '${identikey}'`)
    const student = await db.oneOrNone(`SELECT identikey FROM students WHERE identikey = '${identikey}'`)
    
    if(!advisor && !student) {
      return res.status(400).json({ message: 'User does not exist' });
    }
    let a_or_s = null;
    if(advisor) {
      a_or_s = 'advisors';
    }
    if(student) {
      a_or_s = 'students';
    }
    //check if password is correct
    const user = await db.oneOrNone(`SELECT password FROM ${a_or_s} WHERE identikey = '${identikey}'`);
    const match = await bcrypt.compare(password, user.password);
    if(match) {
       // console.log("Login success");
            user.identikey = identikey;
            user.password = password;
            req.session.user = user;
            req.session.save();
    }

    // Redirect to the appropriate page based on user type
    if (a_or_s === 'advisors') {
      res.render('pages/scheduleAdvisor', {
        user: req.session.user,
      });
    } else {
      //redirect to student schedule
      res.redirect('/schedule');
    }
  } 
 
 catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
 }

  
});

// Authentication Middleware.
const auth = (req, res, next) => {
  if (!req.session.user) {
    // Default to login page.
    return res.redirect('/login');
  }
  next();
};

// Authentication Required
app.use(auth);



//----------Class Search Route ---------
app.post('/getClasses', async (req, res) =>  {
  try {
    const {keyword} = req.body;
    console.log(req.body)
    // if(!keyword) {
    //   return res.status(400).json({ message: 'No keyword provided' });
    // }
    // Get courses from database
    await db.any(`SELECT * FROM courses WHERE course_id ILIKE '%${keyword}%'`)
    .then((courses) => {
      res.render('pages/schedule', {
        courses: courses,
        user: req.session.user,
        keyword: keyword,
        // change body style so the search modal is still open

      })


     });


  }
  catch (error) {
    return res.status(500).json({ message: 'Internal server error' });
  }
});



//-----------Logout Route--------------
app.get('/logout', (req, res) => {
  res.render('pages/logout')
  req.session.destroy();
});

//-----------Login Route--------------
app.get('/schedule', (req, res) => {
  res.render('pages/schedule')
});

//-----------Advisor Register After Route--------------
app.get('/scheduleAdvisor', (req, res) => {
  res.render('pages/scheduleAdvisor')
});

////profile//////////
// Authentication Required

app.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Not authenticated');
  }
  try {
    res.status(200).json({
      user: req.session.user,
    });
  } catch (err) {
    console.error('Profile error:', err);
    res.status(500).send('Internal Server Error');
  }
});
///////////////

//-----------Courses Route--------------


// -------------------------------------  START SERVER   ----------------------------------------------

// Start the server on port 3000
const server = app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

module.exports = server;