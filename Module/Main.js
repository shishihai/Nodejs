//load module 
//load order: (module cache -> native module -> user-defined module in the file)
var MyModule = require('./MyModule');
//initialize module
var mymodule = new MyModule();
//invoke functions
mymodule.setName('scottshi');
mymodule.sayHi();