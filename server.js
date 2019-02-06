var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');
var port = 5000;
var path = require("path");

//include Folders
app.use(express.static('public'));    //CSS Folder
app.use(express.static('public/images'));   //Images Folder
app.use(express.static('public/json'));   //Images Folder
app.use(express.static('javascript'));    //Javascript Folder
app.use(express.static('node_modules/jquery/dist'));    //JQuery Folder

// Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


// Get Requests
app.get('/', function (req, res) {
    res.render(path.join(__dirname+'/app/views/index.handlebars'));
});

app.get('/about', function (req, res) {
  res.render(path.join(__dirname+'/app/views/about.handlebars'));
});

app.get('/fun', function (req, res) {
  res.render(path.join(__dirname+'/app/views/fun.handlebars'));
});

app.get('/contact', function (req, res) {
  res.render(path.join(__dirname+'/app/views/contact.handlebars'));
});

// Listen to Port: 5000
app.listen(port, function () {
  console.log('server started on port 5000');
});

