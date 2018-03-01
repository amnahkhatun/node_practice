//module.exports.counter = function(arr){
var counter = function(arr){
	return 'There are ' + arr.length + ' number of elements';
};

//module.exports.adder = function(a,b){
 var adder = function(a,b){
	return `the sum of the two number is ${a+b}`;
};

//module.exports.pi = 3.142;
var pi = 3.142;
// another way
module.exports = {
counter: counter,
adder: adder,
pi: pi
};
