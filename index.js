const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//For use with PostgreSQL database
//From cmpt276 demo 5 
const { Pool } = require('pg');
var pool;
pool = new Pool({
    //connection to the local database
    //scheme://user:password@localhost/<localDBName>
    connectionString: 'postgres://postgres:cmpt276@localhost/people'

    //to connect to heroku server
    //connectionString: process.env.DATABASE_URL, ssl: true
})

//Using express calls
var app = express();

//Needed to work with json 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//File access through http
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//app.get('/', (req, res) => res.render('pages/index'))
app.get('/', (req, res) => {
    //Create query to get all data from db
    var getQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleDB', results);
    });
})
app.get('/database', (req, res) => {
    //Create query to get all data from db
    var getQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleDB', results);
    });
})

//Add Person to database
//Load add page
app.get('/add', (req, res) => {
    //Create query to get all data from db
    var getQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleAdd', results);
    });

})

//Add new person
app.post('/add', (req, res) => {
    var pid = req.body.pid;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var size = req.body.size;
    var height = req.body.height;
    var type = req.body.type;
    var age = req.body.age;

    //Add new row to table
    var addQuery = 'INSERT INTO person(pid, fname, lname, size, height, type, age) VALUES (' + pid + ', \'' + fname + '\', \'' + lname + '\', ' + size + ', ' + height + ', \'' + type + '\', ' + age + ')';
    pool.query(addQuery, (error, result) => {
        if (error)
            res.end(error);
        //var results = { 'results': result.rows }
        //res.render('pages/peopleAdd', results);
        res.redirect('/add');
    });

})

app.get('/edit', (req, res) => {
    //Create query to get all data from db
    var getUsersQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleEdit', results);
    });

})
app.get('/delete', (req, res) => {
    //Create query to get all data from db
    var getUsersQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleDelete', results);
    });

})
app.get('/view', (req, res) => {
    //Create query to get all data from db
    var getUsersQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleView', results);
    });

})
app.get('/display', (req, res) => {
    //Create query to get all data from db
    var getUsersQuery = 'SELECT * FROM person';

    //Set return values for success and failure
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleDisplay', results);
    });

})




app.listen(PORT, () => console.log(`Listening on ${ PORT }`))