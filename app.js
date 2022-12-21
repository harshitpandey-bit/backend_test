const express=require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
const mongoUrl="mongodb+srv://Test0:Test0@cluster0.a4uxvuo.mongodb.net/?retryWrites=true&w=majority"
mongoose
.connect(mongoUrl,{
    useNewUrlParser:true,
})
.then(()=>{
    console.log("connected to database");
})
.catch((e)=>console.log(e));


    app.listen(5000,()=>{
    console.log("server started");
})
app.post("/post",async(req,res)=>{
     const {data}= req.body;
    try{
     if(data=='harshit')
     {
            res.send({status:"ok"})
     }
     else{
        res.send({data:"invalid"})
     }
    }
    catch(error){
        res.send({status:"none"});
    }
});