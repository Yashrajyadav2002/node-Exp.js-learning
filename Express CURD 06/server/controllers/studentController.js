const studentModel = require("../models/studentModel");

// ✅ INSERT /student/insert
const dataSave = async (req, res) => {
  try {
    const { rollno, name, city, fees } = req.body;
    const student = await studentModel.create({ rollno, name, city, fees });
    res.status(201).json({ msg: "Data saved successfully", student });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ msg: "Error saving data", error });
  }
};

// ✅ DISPLAY ALL /student/display
const dataDisplay = async (req, res) => {
  try {
    const myData = await studentModel.find();
    res.status(200).json(myData);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching data", error });
  }
};

// ✅ SEARCH /student/search
const datasearch = async (req, res) => {
  try {
    const { rno } = req.body;
    console.log("Searching for Roll No:", rno);

    const student = await studentModel.findOne({ rollno: rno });

    if (!student) {
      console.log("No record found");
      return res.status(404).json({ msg: "No record found" });
    }

    console.log("Found student:", student);
    res.status(200).json(student);
  } catch (error) {
    console.error("Error while searching:", error);
    res.status(500).json({ msg: "Server error while searching" });
  }
};

// ✅ UPDATE DISPLAY /student/update-display
const updateDisplay = async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching update data", error });
  }
};

// ✅ DELETE /student/delete?id=...
const updateDelete = async (req, res) => {
  try {
    const { id } = req.query;
    await studentModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Data successfully deleted!" });
  } catch (error) {
    res.status(500).json({ msg: "Error deleting data", error });
  }
};

// ✅ EDIT DISPLAY /student/edit/:id
const editDisplay = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await studentModel.findById(id);
    if (!student) return res.status(404).json({ msg: "No record found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ msg: "Error fetching edit data", error });
  }
};

// ✅ EDIT SAVE /student/edit
const editdataSave = async (req, res) => {
  try {
    const { _id, rollno, name, city, fees } = req.body;
    await studentModel.findByIdAndUpdate(_id, { rollno, name, city, fees });
    res.status(200).json({ msg: "Data successfully updated." });
  } catch (error) {
    res.status(500).json({ msg: "Error updating data", error });
  }
};

module.exports = {
  dataSave,
  dataDisplay,
  datasearch,
  updateDisplay,
  updateDelete,
  editDisplay,
  editdataSave,
};
