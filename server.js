var express = require('express');
var app = express();
var port = 5000;
var path = require("path");

//include Folders
app.use(express.static('public'));    //CSS Folder
app.use(express.static('public/images'));   //Images Folder
app.use(express.static('javascript'));    //CSS Folder


// Get Requests
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/app/views/index.html'));
});

app.get('/fun', function (req, res) {
  res.sendFile(path.join(__dirname+'/app/views/fun.html'));
});

// Listen to Port: 5000
app.listen(port, function () {
  console.log('server started on port 5000');
});

