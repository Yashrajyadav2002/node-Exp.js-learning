const express = require("express");
const stucontroller = require("../controllers/studentcontroller");
const route= express.Router();

route.get("home", stucontroller.homepage);
route.get("about", stucontroller.aboutpage);
route.get("service", stucontroller.serviceage);
route.get("contact", stucontroller.contactpage);

module.exports= route;