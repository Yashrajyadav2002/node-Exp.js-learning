const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const stuRoute=require("./routes/StudentRoute");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
app.use("/student",stuRoute);
mongoose.connect("mongodb://127.0.0.1:27017/cybromnode").then(() => console.log("connected to db"));



app.listen(8000, () => {
    console.log("Server running on port 8000")
});