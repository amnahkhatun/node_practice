var http = require('http');

var fs = require('fs');





//for manual data check
// myreadStream.on('data', function(chunk){
// console.log('new chunk recieved');	
// myWriteStream.write(chunk);
// //console.log(chunk);
// });


// server creation code	
var server = http.createServer(function(req, res){
console.log('request was made: ' + req.url);
//res.writeHead(200, {'Content-Type': 'text/html'});// for sending html

res.writeHead(200, {'Content-Type': 'application/json'});

var myObj = {
name: 'amnah',
job: 'coder',
age: 22
};
res.end(JSON.stringify(myObj));// for converting json to string


// var myreadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');//will create readable stream

// myreadStream.pipe(res); //whole line of code can be removed by single one using pipe

 });

 server.listen(3000, '127.0.0.1');
console.log('you are listning to port 3000');