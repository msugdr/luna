const http = require('http');

const requestx = require('request');
const TOKEN = "0maOvAs8dtXu8h7eEPMXGk2VqMcj6LEztSP9C7kudOg"
sendRequest("デプロイされました"); // デプロイされたときに実行される
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
  response.end(" URI    : " + request.url + "\n"); 
});
server.listen(process.env.PORT);







