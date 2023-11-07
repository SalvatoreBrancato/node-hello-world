const http = require("http");
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

require('dotenv').config()

let arrayFrasi = 
[
    "Cominciate col fare ciò che è necessario, poi ciò che è possibile, e all’improvviso vi sorprenderete a fare l’impossibile.",
    "L’unico modo per fare un buon lavoro è amare quello che fai.",
    "Alla fine, ciò che conta non sono gli anni della tua vita, ma la vita che metti in quegli anni.",
    "Aspettare la perfezione non è mai stato un buon modo di fare progressi.",
    "Ciò che mi fa andare avanti sono i miei obiettivi."
];

let fraseInPagina = [];

fraseInPagina.push(arrayFrasi[Math.floor(Math.random() * arrayFrasi.length)]);
console.log(fraseInPagina)




function htmlResponse(res, content) {
    res.writeHead(200, {  "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
  }

const server = http.createServer(function (req, res){
    res.writeHead(200 , {"Content-Type": "text/html"});
    htmlResponse(res, '<h1>' + fraseInPagina + '</h1>')
    
    //htmlResponse(res, process.env.PAROLA)

 })


server.listen(port, host, ()=>{
    const serverUrl =  `http://${host}:${port}`
    console.log(`server avviato su ${serverUrl}`)
});




