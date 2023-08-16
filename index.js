/////////////////////////////////////////////////////////////
//  Test for Azure
/////////////////////////////////////////////////////////////
const http = require('http');
const fs = require('fs');
const requestx = require('request');
const TOKEN = "0maOvAs8dtXu8h7eEPMXGk2VqMcj6LEztSP9C7kudOg"
const message = `これはテストですよ`;
sendRequest(message); // デプロイされたときに実行される
function sendRequest (message) {
  const options = {
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Authorization': `Bearer ${TOKEN}`
    },
    form: {
      ‘message’ : message
    }
  };
  requestx.post(options, (error, response, body) => {
    if (error) {
      return;
    }
  });
}
var html;
var dummy;
var filename;
const server = http.createServer((request, response) => { 
    if (request.method === 'GET'){
        [dummy,filename]=request.url.split("/");
        [file,ext]=filename.split(".");
        switch (ext) {
            case "html":
            case "css":
                response.writeHead(200, {"Content-Type": `text/${ext}`});
                html=fs.readFileSync(filename,'utf8');
                response.end(html);
                break;
            case "jpg":
            case "png":
            case "gif":                
                response.writeHead(200, {"Content-Type": `img/${ext}`});
                var image = fs.readFileSync(filename, "binary");
                response.end(image,"binary");
                break;
            default:
                response.writeHead(200, {"Content-Type": "text/html"});      
                msg = `EDIT-7.1b:method = ${request.method}, filename = ${filename}, ext = ${ext}`;
                response.end(msg);
        }
     } else if (request.method === 'POST'){
        var data = '';
    
        //POSTデータを受けとる
        request.on('data', function(chunk) {data += chunk})
           .on('end', function() {
            response.writeHead(200, {"Content-Type": "text/html"});
         datum=data.split("=");
          dat=datum[1];
          dat=dat.replace(/\+/g," ");
          dat =  decodeURIComponent(dat);
         dat = "<!DOCTYPE html><html><head><meta charset="utf8"></head><body>" . dat . "</body></html>";
          response.end(dat);
          sendRequest(dat);　 // POST されたときに実行される
            })
    }
});
const port = process.env.PORT || 1337;
server.listen(port);





