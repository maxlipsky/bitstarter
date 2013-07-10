var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.write('Ho!');
  fs.readFile('/etc/passwd', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
