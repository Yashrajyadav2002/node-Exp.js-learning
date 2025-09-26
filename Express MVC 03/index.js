const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRoute= require("./routes/student");

mongoose.connect("mongodb://127.0.0.1:27017/yadavji").then(()=>{
    console.log("DB is connected ....")
})

app.set("view engine","ejs");

app.use("/student", studentRoute);


app.listen(7000,()=>{
    console.log("server is running port on 7000")
})