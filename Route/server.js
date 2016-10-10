var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(route){
	function onRequest(request,response){

		var pathname = url.parse(request.url).pathname;
		var patharr = pathname.split("/");		
		var args = url.parse(request.url).query;
		
		console.log("Request for "+pathname+" received...");
		route(pathname);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello World\n");
		response.write("Module:"+patharr[1]+" Action:"+patharr[2]+" Method:"+patharr[3]+"\n");
		response.write("id="+querystring.parse(args).id+" name="+querystring.parse(args).name+"\n");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started...");
}

exports.start = start;