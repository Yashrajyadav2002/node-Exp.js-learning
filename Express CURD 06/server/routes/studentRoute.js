const express=require("express");
const stucontroller = require("../controllers/studentController");
const route=express.Router(); 

// route.post("/create",stucontroller.createStudent);
route.post("/save",stucontroller.dataSave);
route.get("/display",stucontroller.dataDisplay);
route.post("/search",stucontroller.datasearch);
route.get("/updatedata",stucontroller.updateDisplay);
route.delete("/updatedelete",stucontroller.updateDelete);
route.get("/editdisplay/:id",stucontroller.editDisplay);
route.post("/editdatasave",stucontroller.edit);



module.exports=route;