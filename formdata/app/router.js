var express=require('express');
var app=express();
var busboy=require('connect-busboy');
var fs=require('fs-extra');
var multipart = require('connect-multiparty');
var mime           =require('mime-types');
var path           =require('path');
var multer           =require('multer');
var table = require('./model/model');
var Aa = require('./model/aa');

var bodyParser=require('body-parser'); 

 app.post('/multi',function(req,res){ 
  
  var ss=new Aa({
    subject_name:req.body.subject_name,
    books:[{
      book_name:req.body.book_name,
      book_author:req.body.book_author
    }]
  });
  ss.save(function(err,data){
    if(err){res.json(err)}
      else{
        res.json(data)
      }
  })
})

module.exports=app;


  