/*
 * To start the server 'node app.js' in the root directory of your app
 * You can configure the package.json script to run 'node app.js' when npm start is called
 */

// hosts it on the express web
const express = require('express');
const path = require('path');
const app = express();

// creates a virtual path prefix called 'static
// to serve static files from the 'public' directory
// ex. http://localhost:8080/static/img/kitten.jpg
app.use('/static', express.static(path.join(__dirname, 'public')));

// routes roots path to serve specific file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// starts server on port 8080
app.listen('8080', () => console.log("listening on port 8080"));