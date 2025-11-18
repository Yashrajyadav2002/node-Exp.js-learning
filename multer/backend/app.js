const express = require ("express");
const app = express();
const cors= rqeuire("cors");
const mongoose= require("mongoose");
require("dotenv").config();
const bodyparser = require("body-parser");
const StuRoute = require("./routes/stuRoute");
const multer = require("multer");

mongoose.connect(process.env.DBCONN).than(()=>{
    console.log("DB is Connected is succes Fully!")
})

//body-parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use("/student",StuRoute);




// configure multer storage 

const storage = multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'uplods/');
    },

    filename:(req,file,cd)=>{
        cd(null,`${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({storage:storage});

app.post("/upload",upload.single("myfile"),(req,res)=>{
    console.log(req.file.filename);
    res.send("file uplodead !!")
})

const port = process.env.PORT || 8000;
app.listen(port,()=>{

    console.log(`server is running ${port}`)
});