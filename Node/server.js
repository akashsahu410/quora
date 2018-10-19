const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const signupRouter=require("./router/signuprouter");
const questionRouter=require("./router/questionrouter");


app.use(cors());
mongoose.connect("mongodb://localhost:27017/database");

app.use('/',signupRouter)
app.use('/profile',questionRouter)

app.listen(8085,()=>{
    console.log("starting server at port 8085");
});