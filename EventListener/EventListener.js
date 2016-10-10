var events = require('events');
var eventEmitter = new events.EventEmitter();

//Listener 1
var listener1 = function(){
	console.log('listener1 exec...');
}

//Listener 2
var listener2 = function(){
	console.log('listener2 exec...');
}

//Add listeners to the eventEmitter
eventEmitter.addListener('connection',listener1);
eventEmitter.addListener('connection',listener2);

var iListenNum = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('there are '+iListenNum+' listeners...');

eventEmitter.emit('connection');

//Remove listeners from the eventEmitter
eventEmitter.removeListener('connection',listener1);
console.log('remove listener1...');

eventEmitter.emit('connection');
var iListenNum = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('there are '+iListenNum+' listeners...');

console.log('task complete');