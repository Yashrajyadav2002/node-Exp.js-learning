const Student = require("../models/studentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const stu= await Student.create({rollno,name,city,fees});
    res.send ("data is save");
    
}


module.exports={createStudent};