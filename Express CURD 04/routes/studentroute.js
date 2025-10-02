const express = require("express");
const sturoute = require("../controllers/studentcontroller");
const route= express.Router();

route.get("home", sturoute.homepage);
route.get("about", sturoute.aboutpage);
route.get("service", sturoute.serviceage);
route.get("contact", sturoute.contactpage);

module.exports= route;