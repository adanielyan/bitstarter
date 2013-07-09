var express = require('express');
//var express = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('index.html', function(err, data) {
    if (err) throw err;
    console.log(data);
    response.send(data.toString());
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
