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
    connectionString: process.env.DATABASE_URL,
    ssl: true //|| 'postgres://postgres:cmpt276@localhost/people'

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
    var getQuery = 'SELECT * FROM person ORDER BY pid';

    //Set return values for success and failure
    pool.query(getQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleHome', results);
    });
})
app.get('/home', (req, res) => {
    //Create query to get all data from db
    var getQuery = 'SELECT * FROM person ORDER BY pid';

    //Set return values for success and failure
    pool.query(getQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleHome', results);
    });
})

app.get('/database', (req, res) => {
    //Create query to get all data from db
    var getQuery = 'SELECT * FROM person ORDER BY pid';

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
    var getQuery = 'SELECT * FROM person ORDER BY pid';

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

    window.console(type);

    /** 
    //Add new row to table
    var addQuery = 'INSERT INTO person(pid, fname, lname, size, height, type, age) VALUES (' + pid + ', \'' + fname + '\', \'' + lname + '\', ' + size + ', ' + height + ', \'' + type + '\', ' + age + ')';
    pool.query(addQuery, (error, result) => {
        if (error)
            res.end(error);
        //var results = { 'results': result.rows }
        //res.render('pages/peopleAdd', results);
        res.redirect('/database');
    });
*/
})

//Load edit page
app.post('/edit', (req, res) => {
    var pid = req.body.pid;

    //View a row's from person table
    var viewQuery = 'SELECT * FROM person WHERE pid=' + pid;
    pool.query(viewQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleEdit', results);
    });
})

//Edit person
app.post('/editPerson', (req, res) => {
    var pid = req.body.pid;
    var fname = req.body.fname;
    var lname = req.body.lname;
    var size = req.body.size;
    var height = req.body.height;
    var type = req.body.type;
    var age = req.body.age;


    //View a row's from person table
    var editQuery = 'UPDATE person SET fname=\'' + fname + '\', lname=\'' + lname + '\', size=' + size + ', height=' + height + ', type=\'' + type + '\', age=' + age + ' WHERE pid=' + pid;
    pool.query(editQuery, (error, result) => {
        if (error)
            res.end(error);
        res.redirect('/database');
    });
})

//Load delete page
app.get('/delete', (req, res) => {
    //Create query to get all data from db
    var getQuery = 'SELECT * FROM person ORDER BY pid';

    //Set return values for success and failure
    pool.query(getQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleDelete', results);
    });

})

//Delete person from table
app.post('/delete', (req, res) => {
    var pid = req.body.pid;

    //Delete row from person table
    var deleteQuery = 'DELETE FROM person WHERE pid=' + pid;
    pool.query(deleteQuery, (error, result) => {
        if (error)
            res.end(error);
        res.redirect('/delete');
    });

})

//View a person's details
app.post('/view', (req, res) => {
    var pid = req.body.pid;

    //View a row's from person table
    var viewQuery = 'SELECT * FROM person WHERE pid=' + pid;
    pool.query(viewQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleView', results);
    });
})

app.get('/display', (req, res) => {
    //Create query to get all data from db
    var getUsersQuery = 'SELECT * FROM person ORDER BY pid';

    //Set return values for success and failure
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'results': result.rows }
        res.render('pages/peopleDisplay', results);
    });

})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))