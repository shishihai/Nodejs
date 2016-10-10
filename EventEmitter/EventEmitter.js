var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection',function(){
	console.log('connected...');
	eventEmitter.emit('datareceived');
});

eventEmitter.on('datareceived',function(){
	console.log('received...');
});

eventEmitter.emit('connection');
console.log('task complete');