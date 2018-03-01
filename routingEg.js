var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
console.log('request was made: ' + req.url);
if(req.url === '/home' || req === '/'){
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.createReadStream(__dirname + '/index.html').pipe(res);
}

});
server.listen(3000, '127.0.0.1');
console.log('you are listning to port 3000');