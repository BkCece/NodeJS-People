
# NodeJS_People
A NodeJS assignment for CMPT276 at Simon Fraser University, taught by Bobby Chan. This assignment implements a database table that collects information about various people, using HTML, CSS, JavaScript, jQuery, and NodeJS. This is run through Heroku Server and uses a PostgreSQL database.

This repository includes assignment 2 from the course, roughly two months into the 4 month term.

## Features

**Base Features**
- The **Home Page** includes an option to **view** a specific person's details and an option to **edit** a specific person's details.
- The **Add Page** includes a form to add a new person. Base attributes were the name, size, height, and type. This new person is added to the database and then the page is reloaded.
- The **Delete Page** includes an option to remove a person, then the page is refreshed.
- The **Display Page** includes all the people in the database, displayed as boxes. Their width and height determines the size of the person, and the colour is based on their eye colour.

**Additional Features**
- The Home Page includes a **login** that uses username: *admin* and password: *this_IS_correct_276*. Correct input lets the user view the entire database, which shows the details for each person without needing to search for one person at a time.
- Each (applicable) page has a **simplified view of the database** that is more user-friendly. It includes each Person ID, Firstname, and Lastname. All searches for users can be done through their ID (which is unique) for ease of access.
- **Extra attributes** include: splitting name into First Name and Last Name, a Person ID, Age, Eye Colour, and Hair Length.
- **Dropdowns** for selecting certain attributes. This makes it easier for the user to determine the intended input for some attributes, such as Blood Type, Eye Colour, and Hair Length. For example, Blood Type can only be 8 different types, so there's no need to make it an empty text box.
- Screen-size-scaled formatting for the display page ensures that people can be displayed in rows that scale to the size of the screen, which then wraps to a new row for easy and clean viewing of all people in the database.

**Error Handling**
- A Person ID must be unique, so adding a person with the same ID does not add a new entry. The ID also cannot be edited in the Edit Page.
- Errors with loading a page or querying the database - triggered by a button (view, edit, login, add, delete) - reload the page without crashing. This gives the user an opportunity to correct their input (such as an incorrect password).
- Searches for a non-existing Person ID load and empty table with headers, showing the user that there is no entry to match, without crashing the application.
- Errors with loading individual pages (add, delete, display) simply redirect to the home page. A person can see the current database simplified here or login to view the full database, which is great for finding errors in data. Issues can be edited from the home page.
- Errors with loading the database crashes the application, leaving repairs to be done through backend, as the error is likely a database or connection issue.

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
