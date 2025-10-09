const studentModel = require("../models/studentModel");
const Student = require("../models/studentModel");


const createStudent=async(req,res)=>{
    const {rollno,name,city,fees}=req.body;
    const stu= await Student.create({rollno,name,city,fees});
    res.send ("data is save");
    
}

const dataDisplay=async (req,res)=>{
    const myData = await studentModel.find();
    res.send(myData);
}


const datasearch =async(req,res)=>{
    const {rno}=req.body;
    const student =await studentModel.find({rollno:rno});
    console.log(student);
    res.send(student);

}

module.exports={createStudent,
    dataDisplay,
    datasearch 
};