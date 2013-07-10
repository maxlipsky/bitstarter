var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  var text = fs.readFileSync('index.html','utf8');
  
  var data = 'Hi!';
  response.send(text);
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
