const express = require("express");
const app = express();
const sturoute= require("./route/studentRoute");

app.use("/students",sturoute);


app.listen(5500,()=>{
    console.log("server is running port 5500 ...")
})