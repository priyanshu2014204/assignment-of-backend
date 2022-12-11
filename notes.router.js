const express=require("express");

const Noterouter=express.Router();

Noterouter.get("/",async(req,res)=>{
    res.send("You are at the home page....")
})

module.exports={Noterouter}