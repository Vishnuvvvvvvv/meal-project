//jshint esversion:6
const express = require("express");
const bodyParser =  require("body-parser");
const ejs = require("ejs");
const app =express();
const mongoose = require("mongoose")

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/secret")

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/login",(req,res)=>{
    res.render("login")
})


app.get("/register",(req,res)=>{
    res.render("register")
})


const DataSchema = {
    email:String,
    pass:String
}

const Data = mongoose.model("Data", DataSchema)


app.post("/register",(req,res)=>{


Data.findOne({email:req.body.username},(err,founditem)=>{

if(!founditem)
{
    const reg = new Data({
        email:req.body.username,
        pass:req.body.password
    
    })

    reg.save((err)=>{
        if(!err)
        {
            res.render("secrets");
        }
    });
   

}
else
{
   res.redirect("/login");


}

})




   



})

app.post("/login",(req,res)=>{
console.log(req.body.username)
var user = req.body.username
 var password = req.body.password


 Data.findOne({email:user},(err,founditems)=>{

if(founditems)
{
    if(founditems.pass === password)
    {
        res.render("secrets")
    }
}

    })



})
app.listen(3000,(req,res)=>{

    console.log("hy!");
})