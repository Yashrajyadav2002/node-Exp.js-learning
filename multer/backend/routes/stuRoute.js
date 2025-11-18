const express = require("express");
const route = express.Router();
const StuController = require("../controllers/stuController");

route.post("/registraction",StuController);
route.post("/login",StuController,StuController.stulogin);
route.post("/userauth",StuController,StuController.userAuth);

module.exports= route;