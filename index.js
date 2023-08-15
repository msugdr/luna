const http = require('http');
const fs = require('fs');
var dat;
const server = http.createServer((request, response) => { 
  response.writeHead(200, {"Content-Type": "img/png"});
  dat=fs.readFileSync('girl.png','binary');
  response.end(dat,'binary');
});
server.listen(process.env.PORT);

