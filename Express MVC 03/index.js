const express = require("express");
const app = express();
const studentRoute= require("./routes/student");

app.set("view engine","ejs");

app.use("/student", studentRoute);


app.listen(8000,()=>{
    console.log("server is running port on 8000")
})