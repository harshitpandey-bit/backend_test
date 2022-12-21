const express=require('express');
const app=express();
app.use(express.json());
let cors = require("cors");
app.use(cors());



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
     const {email,password}= req.body;
    try{
        let exitingEmail=await findOne({email}) || ""
 

        if(exitingEmail.email==email)
        {
           res.send("Email or User Name Already Exist")
        }
   
         let user=await create({...req.body}) 
         res.send(user)
    }
    catch(error){
        res.send({status:"none"});
    }
});