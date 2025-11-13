const express = require("express");

const route = express.Router();

const StuController= require("../controllers/stuController");

route.post("/save", StuController.dataSave);

route.get("/display", StuController.dataDisplay);
route.post("/booksave", StuController.bookdataSave);
route.get("/display1", StuController.dataDisplay1);




route.post("/search", StuController.dataSearch);

route.get("/updatedata", StuController.updateDisplay);

route.delete("/updatedelete", StuController.updateDelete);

route.get("/editdisplay/:id", StuController.editDisplay);

route.post("/editdatasave", StuController.editDataSave);

module.exports=route;