const http = require('http');
const fs = require('fs');
var dat;
const server = http.createServer((request, response) => { 
  response.writeHead(200, {"Content-Type": "text/html"});
  dat=fs.readFileSync('text.txt','utf8');
  response.end(dat);
});
server.listen(process.env.PORT);

