var events = require('events');

// var myEmitter = new events.EventEmitter();
// myEmitter.on('someEvent', function(msg){
// console.log(msg);
// });
 
var util = require('util');

var Person = function(name){
	this.name=name;
};
	
util.inherits(Person, events.EventEmitter);

var abc = new Person('abc');
var pqr = new Person('pqr');
var xyz = new Person('xyz');

var people = [abc, pqr, xyz];

people.forEach(function(person){
	person.on('speak', function(mssg){
console.log(person.name + "said" + mssg);
	});

});
xyz.emit('speak', "Hello");