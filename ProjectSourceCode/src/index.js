// // ----------------------------------   DEPENDENCIES  ----------------------------------------------
// const express = require('express');
// const app = express();
// const handlebars = require('express-handlebars');
// const path = require('path');
// const pgp = require('pg-promise')();
// const bodyParser = require('body-parser');
// const session = require('express-session');

// // -------------------------------------  APP CONFIG   ----------------------------------------------

// // create `ExpressHandlebars` instance and configure the layouts and partials dir.
// const hbs = handlebars.create({
//   extname: 'hbs',
//   layoutsDir: __dirname + '/views/layouts',
//   partialsDir: __dirname + '/views/partials',
// });

// // Register `hbs` as our view engine using its bound `engine()` function.
// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(bodyParser.json());
// // set Session
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     saveUninitialized: true,
//     resave: true,
//   })
// );
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// // -------------------------------------  DB CONFIG AND CONNECT   ---------------------------------------
// const dbConfig = {
//   host: 'db',
//   port: 5432,
//   database: process.env.POSTGRES_DB,
//   user: process.env.POSTGRES_USER,
//   password: process.env.POSTGRES_PASSWORD,
// };
// const db = pgp(dbConfig);

// // db test
// db.connect()
//   .then(obj => {
//     // Can check the server version here (pg-promise v10.1.0+):
//     console.log('Database connection successful');
//     obj.done(); // success, release the connection;
//   })
//   .catch(error => {
//     console.log('ERROR', error.message || error);
//   });





app.get('/welcome', (req, res) => {
    res.json({status: 'success', message: 'Welcome!'});
  });


  app.get('/register', (req,res) =>{
    res.render('pages/register')
});

// Register
app.post('/register', async (req, res) => {
    //hash the password using bcrypt library
    const hash = await bcrypt.hash(req.body.password, 10);
  
    try {
      const { username, password } = req.body;

  

        const hash = await bcrypt.hash(password, 10);
        
        const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';

        const queryResult = await db.any(query, [username, hash]);
        console.log(await db.any("select * from users"))
        console.log(username, hash);
        res.redirect('/login');
    } catch(error) {
        console.error('Error Inserting User:', error);
        res.redirect('/register');
      };
        
    });

// *****************************************************
// <!-- Section 5 : Start Server-->
// *****************************************************
// starting the server and keeping the connection open to listen for more requests
module.exports = app.listen(3000);
console.log('Server is listening on port 3000');