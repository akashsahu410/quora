const express=require('express');
const app=express.Router();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const userapi=require('../userapi/questionapi');
//to save the post
app.post("/question",async (req,res)=>{
    try{
        console.log("inside question router",req.body);
            const userdata=await userapi.savedata(req.body)
            res.status(200).send(userdata);
        }
    catch(err){
        console.log("error in question router",err)
        res.status(404).send(err);

    }
})
//to get the post
app.post("/getposts",async (req,res)=>{
    try{
        console.log("inside question router",req.body);
            const userdata=await userapi.finddata(req.body)
            res.status(200).send(userdata);
        }
    catch(err){
        console.log("error in question router",err)
        res.status(404).send(err);

    }
})
//to save the answer of question
app.post("/answer",async (req,res)=>{
    try{
        console.log("inside question router",req.body);
            const userdata=await userapi.saveanswerdata({"_id":req.body.question_id},{"name":req.body.name,
            "date":req.body.date,"comment":req.body.comment})
            res.status(200).send(userdata);
        }
    catch(err){
        console.log("error in question router",err)
        res.status(404).send(err);

    }
})
//to save or delete the upvoters
app.post("/upvote",async (req,res)=>{
    try{
        let userdata;
        console.log("inside question router",req.body);
        if(req.body.upvotetoggle === true){
            userdata=await userapi.saveupvotedata({"_id":req.body._id},{"name":req.body.name})
        }
        else{
            userdata=await userapi.removeupvotedata({"_id":req.body._id},{"name":req.body.name})
        }
            res.status(200).send(userdata);
        }
    catch(err){
        console.log("error in question router",err)
        res.status(404).send(err);

    }
})
module.exports=app;