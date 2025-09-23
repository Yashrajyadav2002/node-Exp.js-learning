const express = require("express");
const route= express.Router();
const stuController = require("../controllers/studentController")

route.get("/home",stuController.homepage );
route.get("/about",stuController.aboutpage );
route.get("/service",stuController.servicepage );
route.get("/contact",stuController.contactpage );

module.exports= route;