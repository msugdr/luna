const http = require('http');
const fs = require('fs');
var dat;

const requestx = require('request');
const TOKEN = "0maOvAs8dtXu8h7eEPMXGk2VqMcj6LEztSP9C7kudOg"
//sendRequest("デプロイされました"); // デプロイされたときに実行される
function sendRequest (message) {
  const options = {
    uri: "https://notify-api.line.me/api/notify",
    headers: {
      "Authorization": `Bearer ${TOKEN}`
    },
    form: {
      "message" : message
    }
  };
  requestx.post(options, (error, response, body) => {
    if (error) {
      return;
    }
  });
}

var msg;
const server = http.createServer((request, response) => { 

fs.appendFileSync("text.txt", request.url + "\n");
  
  [dum, msg] = request.url.split("=");
  msg = decodeURIComponent(msg);
  msg = msg.replace(/\+/g, ' ');
//  sendRequest(msg);
//  response.write (" URL : " + request.url + "\n");
//  response.end(   " MSG : " + msg + "\n"); 
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Contents of text.txt\n");
  dat=fs.readFileSync('text.txt','utf8');
  response.end(dat);
});
server.listen(process.env.PORT);







