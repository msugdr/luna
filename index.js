const http = require('http');
const server = http.createServer((request, response) => { 
  response.end("Hello World");
});
server.listen(process.env.PORT);

