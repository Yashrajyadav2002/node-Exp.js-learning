const express = require("express");
const app = express();
const studentRoute = require("./routes/studentroute");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/studentdata:27017//students").then(()=>{
    console.log("mongoDB connected");
});

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/students", studentRoute);

app.set("view engine", "ejs");

app.listen(8000, ()=>{
    console.log("Server started on port 8000!")
});