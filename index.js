const http = require('http');
var msg;
const server = http.createServer((request, response) => { 
  response.write(" URI    : " + request.url + "\n"); 
  response.write(" METHOD : " + request.method + "\n"); 

  if (request.method === 'POST'){
//    response.write("POST\n");
        var data = '';
        request.on('data', function(chunk) {data += chunk})
           .on('end', function() {
             response.end('POST DATA : ' + data);
            })
  } else {
//   response.write("NON POST\n");
   response.end();
  }
});
server.listen(process.env.PORT);



