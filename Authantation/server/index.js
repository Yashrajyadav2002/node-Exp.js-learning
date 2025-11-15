const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyparser = require('body-parser');
const StuRoute = require ("./routes/stuRoute");

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB is Connected Succesfully");
})


//body parser middleware
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json());
app.use(cors());
app.use("/student",StuRoute);


const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server is run on ${port}port` )
})