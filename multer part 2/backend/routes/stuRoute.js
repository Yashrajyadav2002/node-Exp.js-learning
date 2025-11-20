const express = require("express");
const route = express.Router();
const StuController= require("../controllers/stuController");
route.post("/studentsave",  StuController.stuSave);

route.get("/display",  StuController.stuDisplay);



module.exports=route;