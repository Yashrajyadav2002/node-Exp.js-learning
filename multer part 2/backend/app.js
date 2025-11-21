const express = require("express");
const app=express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyparser = require('body-parser')
const multer = require('multer');
const StuRoute = require("./routes/stuRoute");
mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected Succesfully!");
})
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors());
app.use("/students", StuRoute);


// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("myfile"), (req, res)=>{
    console.log(req.file.filename);
    res.send("File Uploaded!!!");
})

const port  = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`server run on port ${port}`);
})