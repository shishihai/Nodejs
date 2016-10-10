var buf = new Buffer(256);
var len = buf.write('hello nodejs');
console.log('buffer length:'+len);

buf = new Buffer(26);
for(var i=0;i<26;i++){
	buf[i] = i+97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,10));

//buf = new Buffer("{'id':123,'name':'scottshi'}");
//var jsondata = buf.toJSON(buf);
//console.log(jsondata);

var buf1 = new Buffer("enjoy ");
var buf2 = new Buffer("nodejs");
var buf3 = Buffer.concat([buf1,buf2]);
console.log(buf3.toString());
console.log(buf1.compare(buf2));

var buf4 = new Buffer(12);
buf3.copy(buf4);
console.log(buf4.toString());

var buf5 = buf4.slice(2,5);
console.log(buf5.toString());
console.log(buf5.length);