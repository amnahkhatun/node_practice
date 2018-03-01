function functioCall(fun){
fun();	
}

//function expression

var sayBye = function(){
	console.log("Bye");
};
functioCall(sayBye);

var stuff = require('./stuff');

console.log(stuff.counter(['dsfdf', 'dds', 'ffsd', 'ddd']));
console.log(stuff.adder(3,6));
console.log(stuff.adder(stuff.pi, 6));