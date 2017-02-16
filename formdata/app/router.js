var express=require('express');
var app=express();
var busboy=require('connect-busboy');
var fs=require('fs-extra');
var multipart = require('connect-multiparty');
var mime           =require('mime-types');
var path           =require('path');
var table = require('./model/model');

var bodyParser=require('body-parser');

 app.post('/upload', function(req,res){
 	var fstream;
 	req.pipe(req.busboy);
 	req.busboy.on('file', function(fieldname,file,filename){ 
 		console.log(filename);
 		var filePath=path.join(__dirname, '../file', filename);
 		fstream=fs.createWriteStream(filePath);
 		file.pipe(fstream);
 		fstream.on('close', function(){
 			console.log('file saved...');  
 			var data=new table({
 				t:req.body.t,
 				d:req.body.d,
 				img:filename
 			});
 			data.save(function(err,data){
 				if(err){throw err}
 					else{
 						console.log(data);
 						res.json(data)
 					}
 			})
 		});

 	});

 })

module.exports=app;