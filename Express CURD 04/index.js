const express = require("express");
const app = express();
const sturoute = require("./routes/studentroute");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");

mongoose.connect("").then(()=>{
    console.log("DB is connected ..... ")
})

// body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.set ("view engine","ejs");
app.use("/student",sturoute);

app.listen(8000,()=>{
    console.log("server is running on port 8000..")

});