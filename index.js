const http = require('http');
var msg;
const server = http.createServer((request, response) => { 
  msg = " URI : " + request.url; 
  response.end(msg);});
server.listen(process.env.PORT);


