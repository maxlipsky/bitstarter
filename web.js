var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
  fs.readFile('./index.html', function (err, data) {
    if (err) throw err;
    Ðresponse.writeHead(200, {"Content-Type": "text/plain"});
    response.write(data);
    response.write.end();
  });
    
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
