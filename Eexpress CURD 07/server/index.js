const express = require("express");
const app = express();
const cors=require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const stuRoute=require("./routes/studentRoute");
require('dotenv').config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use("/student",stuRoute);
mongoose.connect(process.env.DBCONNECTION).then(() => console.log("connected to db"));

const port = process.env.PORT;

app.get("/home",(req,res)=>{
    let name = true;
    if(name){
      res.status(200).send("home page no error");
    }
    else{
        res.status(404).send("home page error occours");

    }
})

app.listen(port, () => {
    console.log("Server running on port 3001");
})