var http = require('http');


http.createServer(function (req, res) {
  res.write('Hello World bulit 32'); 
  res.end(); 
}).listen(8081);
