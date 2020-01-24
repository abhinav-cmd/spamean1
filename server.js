var express=require('express');
var expobj=express();
var bodyParser=require('body-parser');
var methodOverride=require('method-override');
var mongoose=require('mongoose');
var db=require('./backendconfiguration/db');
var port=process.env.PORT||8080;
expobj.use(bodyParser.json());
expobj.use(bodyParser.json({type:'application/vnd.api+json'}));
expobj.use(bodyParser.urlencoded({extended : true}));
expobj.use(methodOverride('X-HTTP-Method-Override'));
expobj.use(express.static(__dirname+'/public'));
require('./backendapp/routes')(expobj)
expobj.listen(port);
console.log('Node serves has started');
exports=module.exports=expobj;
mongoose.connect('mongodb://localhost:27017/contactlist');
mongoose.connection.on('connected',function(){
  console.log('Connected to the Database at 27017');
});
mongoose.connection.on('err',function(err){
if(err)
  console.log('Error in the database :'+err);
});
mongoose.connection.on('disconnected',function(){
  console.log('Disonnected to the Database at 27017');
});
process.on('SIGINT',function(){
  console.log('Disconnected due to app termination');
  process.exit(0);
});
