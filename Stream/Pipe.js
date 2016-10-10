var fs = require('fs');
var readerStream = fs.createReadStream('input2.txt');
readerStream.on('error',function(err){
	console.log(err.stack);
});
var writeStream = fs.createWriteStream('output2.txt');
writeStream.on('error',function(err){
	console.log(err.stack);
});
readerStream.pipe(writeStream);
console.log('task complete');