const express = require("express");
const urlroutes = require("./routes/url")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
app.use(express.json())


dotenv.config()

mongoose.connect(process.env.mongoUrl)
.then(()=>console.log("DB connected sucessfully"))
.catch((err)=>console.log("Error connecting db",err))

app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+"/urlform.html")
})

app.use(urlroutes)

app.listen(10000,()=>{
    console.log("server is up at port no 10000");
})