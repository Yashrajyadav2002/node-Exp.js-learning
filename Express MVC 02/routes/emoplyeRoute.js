const express  = require("express");
const route = express.Router();
const empolyeeController = require("../controllers/empolyeController")

route.get("/home",empolyeeController.homepage);
route.get("/about",empolyeeController.aboutpage);
route.get("/designation",empolyeeController.designationpage);
route.get("/department",empolyeeController.departmentpage);
route.get("/salary",empolyeeController.salarypage);

module.exports=route;
