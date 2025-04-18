// ----------------------------------   DEPENDENCIES  ----------------------------------------------
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
const pgp = require('pg-promise')();
const bodyParser = require('body-parser');
const session = require('express-session');
 const bcrypt = require('bcryptjs'); // Added bcrypt for password hashing
const { error } = require('console');
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
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
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
      return res.status(400).render('pages/register', {message: 'All fields are required' , error: true });
    }
    // Validate identikey format: 4 letters followed by 4 digits
    const identikeyRegex = /^[a-zA-Z]{4}\d{4}$/;
    if (!identikeyRegex.test(identikey)) {
      return res.status(400).render('pages/register', { message: 'Invalid identikey format', error: true });
    }
  
    const studentOrAdvisor = isAdvisor == 'on' ? 'advisors' : 'students';

    await db.oneOrNone(`SELECT * FROM ${studentOrAdvisor} WHERE identikey = '${identikey}'`)
    .then(async (existingUser) => {
      if (existingUser) {
        return res.status(400).render('pages/register', { message: 'User already exists', error: true });
      }


      // Hash the password before storing
      const hashedPassword = await bcrypt.hash(password, 10);

       const insertUserQuery = `INSERT INTO ${studentOrAdvisor} (first_name, last_name, password, identikey) VALUES ('${first_name}', '${last_name}', '${hashedPassword}', '${identikey}')`;
       db.any(insertUserQuery)
       .then(() => {

          // Registration successful
          res.redirect('/login');
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
      return res.status(400).render('pages/login', {message: 'All fields are required', error: true });
    }
    //check if advisor or student
    const advisor = await db.oneOrNone(`SELECT identikey FROM advisors WHERE identikey = '${identikey}'`)
    const student = await db.oneOrNone(`SELECT identikey FROM students WHERE identikey = '${identikey}'`)
    
    if(!advisor && !student) {
      return res.status(400).render('pages/login', {message: 'User does not exist', error: true });
      
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

//----------Add class to student classes----------
app.post('/addStudentClass', async (req, res) => {
  const {course_id} = req.body;
  const identikey = req.session.user.identikey;
  const chosenClassFromDb = await db.oneOrNone(`SELECT * FROM courses WHERE course_id = '${course_id}'`);
  console.log("Chosen Class:");
  console.log(chosenClassFromDb);
  const course_id_from_db = chosenClassFromDb.course_id;
  const course_term_from_db = chosenClassFromDb.term;

  await db.none(`INSERT INTO student_courses (identikey, course_id, term) VALUES ('${identikey}', '${course_id_from_db}', '${course_term_from_db}')`)
  .then(() => {
    res.redirect('/schedule');

   });

})


//----------Class Search Route ---------
app.post('/getClasses', async (req, res) =>  {
  try {
    const {keyword, currentButtonId, student_courses} = req.body;
    console.log(req.body);
    let term = currentButtonId;
    console.log((student_courses));
    // if(!keyword) {
    //   return res.status(400).json({ message: 'No keyword provided' });
    // }
    // Get courses from database
    await db.any(`SELECT * FROM courses WHERE (term = '${term}') AND ((course_id ILIKE '%${keyword}%') OR (course_name ILIKE '%${keyword}%')) `)
    .then((courses) => {
      res.render('pages/schedule', {
        courses: courses,
        user: req.session.user,
        keyword: keyword,
        currentButtonId: term,
        student_courses: (student_courses)
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

//----------Schedule page Routes--------------
// app.get('/schedule', (req, res) => {
//   res.render('pages/schedule')
// });


////RUN docker and TEST NEW SCHEDULE THING/////////



const router = express.Router();
// const pool = require('../index');

app.get('/schedule', async (req, res) => {

  try {
    const coursesResult = await db.query('SELECT * FROM courses;');
    // Pass the courses data to the template as JSON data
    res.render('pages/schedule', { courses: JSON.stringify(coursesResult.rows) });
  } catch (err) {
    console.error('Error retrieving courses for schedule:', err);
    res.status(500).send('Server Error');
  }

});


//-----------Advisor Register After Route--------------

app.get('/scheduleAdvisor', (req, res) => {
  const user = req.session.user;
  if (!user || !user.isAdvisor) {
    return res.redirect('/login');
  }
  res.render('pages/scheduleAdvisor', {
    user: user
  });
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