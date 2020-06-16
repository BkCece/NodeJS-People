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

var app = express();
//express()

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

app.get('/add', (req, res) => {
        //Create query to get all data from db
        var getUsersQuery = 'SELECT * FROM person';

        //Set return values for success and failure
        pool.query(getUsersQuery, (error, result) => {
            if (error)
                res.end(error);
            var results = { 'results': result.rows }
            res.render('pages/peopleAdd', results);
        });

    })
    /** 
    app.get('/add', (req, res) => res.render('pages/peopleAdd'))
    app.post('/add', async(req, res) => {
        try {
            var addQuery = (`INSERT INTO person VALUES(${req.body.pid}, $1, $2, ${req.body.size}, ${req.body.height}, $3, ${req.body.age})`, [req.body.fname, req.body.lname, req.body.type]);

            //Set return values for success and failure
            pool.query(addQuery, (error, result) => {
                if (error)
                    res.end(error);
                var results = { 'results': result.rows }
                res.render('pages/peopleAdd', results);
            });
        } catch (err) {
            console.error(err);
            res.send("Error " + err);
        }
    })
    */
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