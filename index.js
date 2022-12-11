const express=require("express");

// const bcrypt=require("bcrypt")
const app=express();
app.use(express.json())
app.use(cors())
const {connection,User}=require("./db.js")
const {Note}=require("./notes.js")
const {Noterouter}=require("./notes.router.js")

app.post("/signup",async(req,res)=>{
  const params=req.body;
  await User.insertMany(params);
  res.send("...You have signed up succesfully")
})

app.get("/",async(req,res)=>{
    let data=await User.find();
    res.send(data)
})

app.patch("/update/:id",async(req,res)=>{
    const id=req.params.id;
    const params=req.body;
    await User.findByIdAndUpdate(id,params);
    res.send("User got update successfully...")
})

app.delete("/delete/:id",async(req,res)=>{
  const id=req.params.id;
  await User.findByIdAndDelete(id);
  res.send("User got deleted successfully...")
})

app.use("/notes",Noterouter)



app.listen(8080,async()=>{
     connection
     try{
        console.log("connecting...")
     }
     catch(err){
        console.log(err)
     }
})
