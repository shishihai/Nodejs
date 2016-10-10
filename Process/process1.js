process.stdout.write("Hello World\n");
process.argv.forEach(function(val,index,array){
	console.log(index+':'+val);
});
console.log(process.execPath);
console.log(process.platform);
console.log('current dir:'+process.cwd());
console.log('current version:'+process.version);
console.log('memory in use:'+process.memoryUsage().heapTotal);