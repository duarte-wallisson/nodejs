const http = require('http')
http.createServer(function(req, res){
    res.end("Hello World, welcome!");
}).listen(8080)

console.log("Server on!")