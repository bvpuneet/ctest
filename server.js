var http = require('http');


http.createServer(function (req, res) {
  res.write('Hello World! node locally brainvire '); 
  res.end(); 
}).listen(8081);
