var fs = require('fs');
// for syncronous
//var readMe = fs.readFileSync('readMe.txt', 'utf8');
//to print in the console
//console.log(readMe);

//to write in the file

//fs.writeFileSync('writeMe.txt', readMe);

//for asynchronous
fs.readFile('readMe.txt', 'utf8', function(err, data){
fs.writeFileSync('writeMe.txt', data);

	});
