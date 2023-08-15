const http = require('http');
var msg;
const server = http.createServer((request, response) => { 
  response.write(" URI    : " + request.url + “\n”); 
  response.write(" METHOD : " + request.method + “\n”); 
  response.end();});
server.listen(process.env.PORT);



