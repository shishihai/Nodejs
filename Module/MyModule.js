var MyModule = function MyModule(){
	var name;
	this.setName = function(sName){
		this.name = sName;
	}
	this.sayHi = function(){
		console.log("hi,"+this.name);
	}
}
module.exports = MyModule;