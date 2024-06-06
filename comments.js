// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set the directory for the app
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Get the home page
app.get('/', function(req, res) {
    res.render('index', {
        comments: comments
    });
});

// Post a comment
app.post('/comments', function(req, res) {
    comments.push(req.body);
    fs.writeFile('comments.json', JSON.stringify(comments, null, 4), function(err) {
        console.log('Comment added');
    });
    res.redirect('/');
});

// Start the server
app.listen(3000, function() {
    console.log('Server is running on http://localhost:3000');
});