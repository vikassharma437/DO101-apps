var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/jupiter', function(req, res) {
  res.send("Welcome to Jupiter!!!\n");
});

app.get('/mars', function(req, res) {
  res.send("Welcome to Mars!!!");
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

