var express = require('express');
var app = express();
var port = 5000;
var path = require("path");
//include css files
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


// what port to run server on
app.listen(port, function () {
  console.log('server started on port 5000');
});