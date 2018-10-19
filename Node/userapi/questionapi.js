const userdb=require('../schema/questionschema')
module.exports={
    //to save the data of questions asked
    savedata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the question api",data)
            userdb.create(data,(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    //to find the all questions asked
    finddata(data){
        return new Promise((resolve,reject)=>{
            console.log("inside the question api of find data",data)
            userdb.find(data,(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    resolve(result)
                }
            })
        });
    },
    // to save the answer of questions
    saveanswerdata(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the question api",key,data)
            userdb.updateOne(key,{$push:{"answer":data}},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    console.log("result",result)
                    resolve(result)
                }
            })
        });
    },
    //to save the upvoters
    saveupvotedata(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the question api",key,data)
            userdb.updateOne(key,{$push:{"upvote":data.name}},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    console.log("result",result)
                    resolve(result)
                }
            })
        });
    },
    // to remove the upvote data
    removeupvotedata(key,data){
        return new Promise((resolve,reject)=>{
            console.log("inside the question api",key,data)
            userdb.updateOne(key,{$pull:{"upvote":data.name}},(err,result)=>{
                if(err)
                {
                    reject(err)
                }
                else{
                    console.log("result",result)
                    resolve(result)
                }
            })
        });
    }

}