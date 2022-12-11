const mongoose=require("mongoose");
require("dotenv").config()
mongoose.set('strictQuery', false)
const connection=mongoose.connect(process.env.url);

const fun=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User=mongoose.model("student",fun);

module.exports={
    User,
    connection
}