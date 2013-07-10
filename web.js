var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var data = fs.readFile('index.html', 'utf-8');
  response.write('1 - '+data);
});



var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
