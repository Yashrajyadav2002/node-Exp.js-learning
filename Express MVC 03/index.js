const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRoute= require("./routes/student");
const bodyparser = require('body-parser');

mongoose.connect("mongodb://127.0.0.1:27017//yadavji").then(()=>{
    console.log("DB is connected ....")
})

// Body-parser middleware
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json());

app.set("view engine","ejs");
app.use("/student", studentRoute);


app.listen(7000,()=>{
    console.log("server is running on port 7000 .. !!!!1")
})