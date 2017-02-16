var express=require('express');
var app=express();
var router=require('./app/router');
var db=require('./database');
var multipart = require('connect-multiparty');
var mime           =require('mime-types');
var bodyParser=require('body-parser');
var busboy=require('connect-busboy'); 
var fs=require('fs-extra');
var mongoose=require('mongoose');


mongoose.connect(db.database);

app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json()); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});
app.use(express.static('public'));
app.use(busboy());


app.use('/', router);

app.listen(3000, function(req,res){
 console.log("Server is Started"); 
});