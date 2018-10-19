const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{type:String},
    question:{type:String},
    date:{type:String},
    answer : { type : Array , default : [{name:{type:String},date:{type:String},comment:{type:String}}] },
    upvote:{type:Array}
});

module.exports=mongoose.model("quora_questioncollections",userSchema);