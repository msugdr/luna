const http = require('http');
const server = http.createServer((request, response) => { 
  response.writeHead(400, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(process.env.PORT);

