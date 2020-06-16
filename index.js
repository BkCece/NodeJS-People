const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

//For use with PostgreSQL database
//From cmpt276 demo 5 
const { Pool } = require('pg');
var pool;
pool = new Pool({
    //connection to the database
    //scheme://user:password@localhost/<localDBName>
    connectionString: 'postgres://postgres:cmpt276@localhost/users'
})

var app = express();
//express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//File access through http
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index'))
app.get('/database', (req, res) => {
    //Create query to get all data from db
    var getUsersQuery = 'SELECT * FROM userTable';

    //Set return values for success and failure
    pool.query(getUsersQuery, (error, result) => {
        if (error)
            res.end(error);
        var results = { 'rows': result.rows }
        res.render('pages/db', results);
    });

})




app.listen(PORT, () => console.log(`Listening on ${ PORT }`))