const http = require('http');
var msg;
const server = http.createServer((request, response) => { 
  response.end(" URI    : " + request.url + "\n"); 
});
server.listen(process.env.PORT);







