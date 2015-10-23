var express = require('express');
var app = express();
var root = __dirname;
app.use(express.static(root));

app.get('/', function(req, res) {
  res.sendFile(root + '/index.html');
});

var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Todo list app listening at http://%s:%s', host, port);
});
