var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = 1337;

var server = http.createServer(function(request, response){

	console.log('read ' + request.url);

	fs.readFile('.'+request.url, function(error, data){

		if(error){
			response.writeHead(404, {"Content-Type":"text/plain"});
			response.end('404 file not found');
		}else{
			response.writeHead(200);
			response.end(data);
		}
	});

});

server.listen(port, host, function(){
console.log('server is listeneing at' + host + ':' + port)

})