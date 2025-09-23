const express = require("express");
const app = express();
const sturoute = require("./routes/studentRoute");
const employeeroute = require("./routes/emoplyeRoute");

app.use("/student",sturoute);
app.use("/employee",employeeroute);


app.listen(9000,()=>{
    console.log("server is running port 9000..")
})

