// Create web server
// Create a server with Express
const express = require('express');
const app = express();
// Set the port
const port = 3000;
// Define the route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

// Path: comments.js
// Use the built-in path module
const path = require('path');
// Define the public directory
const publicDirectory = path.join(__dirname, './public');
// Set the static directory
app.use(express.static(publicDirectory));

// Path: comments.js
// Define the views directory
const viewsPath = path.join(__dirname, './views');
// Set the views directory
app.set('views', viewsPath);

// Path: comments.js
// Define the view engine
app.set('view engine', 'hbs');

// Path: comments.js
// Define the route for the home page
app.get('/', (req, res) => {
  res.render('home');
});

// Path: comments.js
// Define the route for the about page
app.get('/about', (req, res) => {
  res.render('about');
});

// Path: comments.js
// Define the route for the contact page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Path: comments.js
// Define the route for the 404 page
app.get('*', (req, res) => {
  res.render('404');
});

// Path: comments.js
// Define the route for the 404 page
app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found'
  });
});

// Path: comments.js
// Define the route for the 404 page
app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found',
    title: '404 Page'
  });
});

// Path: comments.js
// Define the route for the 404 page
app.get('*', (req, res) => {
  res.render('404', {
    errorMessage: 'Page not found',
    title: '404 Page',
    name: 'John Doe'
  });
});

// Path: comments.js
// Define the route for the 404 page
app.get('*', (req