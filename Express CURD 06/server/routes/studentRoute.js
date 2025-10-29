const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/update-display", studentController.updateDisplay);
router.delete("/update-delete", studentController.updateDelete);
router.get("/edit-display/:id", studentController.editDisplay);
router.post("/edit-save", studentController.editdataSave);
router.get("/display", studentController.dataDisplay);
router.post("/save", studentController.dataSave);
router.post("/search", studentController.datasearch);

module.exports = router;
