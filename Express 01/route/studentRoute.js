const express = require("express");
const route=express.Router();

route.get("/home",(req,res)=>{
    res.send("<h1> Home page</h1>")
})

route.get("/about",(req,res)=>{
    res.send("<h1> about page</h1>")
})

route.get("/contact",(req,res)=>{
    res.send("<h1> contact page</h1>")
})

route.get("/fees",(req,res)=>{
    res.send("<h1> fees page</h1>")
})

route.get("/services",(req,res)=>{
    res.send("<h1> Home page</h1>")
})

route.get("/reports",(req,res)=>{
    res.send("<h1> reports page</h1>")
})

module.exports = route;