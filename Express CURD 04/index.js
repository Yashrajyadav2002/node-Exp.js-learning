const express = require("express");
const app = express();
const studata = require("./routes/studentroute");

app.use("/student",studata);

app.listen(8000,()=>{
    console.log("server is running ..")

})