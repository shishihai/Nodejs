var sys = require('sys');
var mysql = require('mysql'); 

var client = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'asdf',
	port:'3306'
});

console.log('Connecting to MySQL...');
client.connect(function(error,results){
	if(error){
		console.log('Connection Error:'+error.message);
		return;
	}
	console.log('Connected to MySQL...');
	ClientConnectionReady(client);
});

ClientConnectionReady = function(client){
	client.query("USE dbScottshi_20160505_Nodejs",function(error,results){
		if(error){
			console.log('ClientConnectionReady Error:'+error.message);
			client.end();
			return;
		}
		ClientReady(client);

	});
}

ClientReady = function(client){
	var values = ['scott','shi','hello nodejs'];
	var sQueryStr = " "
	client.query('INSERT INTO tbUserInfo set firstname=?,lastname=?,message=?',values,function(error,results){
		if(error){
			console.log("ClientReady Error:"+error.message);
			client.end();
			return;
		}
		console.log('Inserted:'+results.affectedRows+' row');
		console.log('Id inserted:'+results.insertId);
	});
	GetData(client);
}

GetData = function(client){
	client.query('SELECT * FROM tbUserInfo',function(error,results,fields){
		if(error){
			console.log('GetData Error:'+error.message);
			client.end();
			return;
		}
		if(results.length>0){
			var firstResult = results[0];
			console.log('First Name: ' + firstResult['firstname']); 
			console.log('Last Name: ' + firstResult['lastname']); 
			console.log('Message: ' + firstResult['message']); 
		}
	});
	client.end();
	console.log("Connection Closed...");

}