var mongoose=require('mongoose');
var Schema=mongoose.Schema; 

var formdata=new Schema({
	t:{type:String},
	d:{type:String},
	img:{type:String},
});
module.exports=mongoose.model('daata', formdata);
 