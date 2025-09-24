const express = require("express");
const route = express.Router();
const sturoute = require("../controllers/studentController");

route.get("/home",sturoute.homepage);
route.get("/about",sturoute.aboutpage);
route.get("/service",sturoute.servivepage);
route.get("/contact",sturoute.contactpage);
route.get("/salary",sturoute.salarypage);


module.exports = route;