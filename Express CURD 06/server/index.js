const express = require("express");
const app = express();
// const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const stuRoute=require("./routes/studentRoute");

// app.use(express.json());
// // app.use(bodyparser.urlencoded({ extended: true }));
// app.use(cors());
// app.use("/student",stuRoute);


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/student", stuRoute);


mongoose.connect("mongodb+srv://yyash9631_db_user:r2aNVJ217CJS5Biv@cluster0.wrnngf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => console.log("connected to db"));



app.listen(8000, () => {
    console.log("Server running on port 8000")
});