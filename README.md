
# NodeJS_People
A NodeJS assignment for CMPT276 at Simon Fraser University, taught by Bobby Chan. This assignment implements a database table that collects information about various people, using HTML, CSS, JavaScript, jQuery, and NodeJS. This is run through Heroku Server and uses a PostgreSQL database.

This repository includes assignment 2 from the course, roughly two months into the 4 month term.

## Version Specifics

Installations *in command line on windows*:
- *npm install express*
- *npm install ejs*
- *npm install pg*
- *heroku addons:create heroku-postgresql:hobby-dev*

Dependencies:
- ejs: **2.7.4**
- express: **4.17.1**
- pg: **8.2.1**

## Database Access
*In command line*

- Locally: *psql -h localhost -U postgres*
- Heroku Server: *heroku pg:psql*

## URL Information

- Git push remote: *https://github.com/BkCece/NodeJS_People.git*
- Heroku git fetch/push remote: *https://git.heroku.com/ckwright-people.git*
- Heroku server URL: *http://ckwright-people.herokuapp.com/*

## Resources
- *(Unlisted)* Bobby Chan [cmpt276 playlist for lectures and demos](https://www.youtube.com/playlist?list=PLg7lel5LdVjwy8mxysOHNdU0t7LvQyKzm)


-----------------------------------------------------------


# node-js-getting-started

A barebones Node.js app using [Express 4](http://expressjs.com/).

This application supports the [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs) article - check it out.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git # or clone your own fork
$ cd node-js-getting-started
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
