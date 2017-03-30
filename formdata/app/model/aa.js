var mongoose		=require('mongoose');
var Schema			=mongoose.Schema; 

var postSchema=new Schema({
	subject_name:{type:String},
	books:[{
		book_name:String,
		book_author:String
	}] 
}); 
module.exports=mongoose.model('aaa', postSchema);