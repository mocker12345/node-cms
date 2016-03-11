/**
 * Created by rancongjie on 16/3/11.
 */

var mongoose =require('mongoose');

var newSchema = new mongoose.Schema({
  title:String,
  content:String,
  createTime:{type:Date,default:Date.now()}
});

var News = mongoose.model('News',newSchema);
