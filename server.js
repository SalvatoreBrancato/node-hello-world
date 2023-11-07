const http = require("http");


const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

require('dotenv').config()

function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  }

const server = http.createServer(function (req, res){
    res.writeHead(200 , {"Content-Type": "text/html"});
    htmlResponse(res, '<h1>' + process.env.PAROLA + '</h1>')
 })


server.listen(port, host, ()=>{
    const serverUrl =  `http://${host}:${port}`
    console.log(`server avviato su ${serverUrl}`)
});




