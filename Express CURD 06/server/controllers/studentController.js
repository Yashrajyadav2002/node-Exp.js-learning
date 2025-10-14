const studentModel = require("../models/studentModel");

// const dataSave = async (req,res)=>{
//     console.log(req.body);
//     const{rollno,name,city,fees}= req.body;
//     const Student = await studentModel.create({
//         rollno:rollno,
//         name:name,
//         city:city,
//         fees:fees
//     })
//     console.log(Student);
//     res.send("Data save Sucessfully",Student)
// };


const dataSave = async (req, res) => {
  try {
    const { rollno, name, city, fees } = req.body;
    const student = await studentModel.create({ rollno, name, city, fees });
    res.status(201).json({ msg: "Data saved successfully", student });
  } catch (error) {
    res.status(500).json({ msg: "Error saving data", error });
  }
};

const dataDisplay=async (req,res)=>{
    const myData = await studentModel.find();
    res.send(myData);
}

const datasearch =async(req,res)=>{
    const {rno}=req.body;
    const Student =await studentModel.find({rollno:rno});
    console.log(Student);
    res.send(Student);

}

const updateDisplay = async(req,res)=>{
    const Student = await studentModel.find();
    res.send(Student);
}

const updateDelete = async(req,res)=>{
    const {id}= req.query;
    const Student  = await studentModel.findByIdAndDelete(id);
    res.send({msg:"Data sucessfully Deleted !!"})
}

const editDisplay = async(req,res)=>{
    const {id}= req.params;
    const student  =await studentModel.findById(id);
    console.log(student);
    res.send(student);
}

const editdataSave = async (req,res)=>{
    const {_id,rollno,name,city,fees} = req.body;
    const student  =await studentModel.findByIdAndUpdate(_id,{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });
    res.send({msg:"Data succesfully Updated .."})
}

module.exports={
    dataDisplay,
    datasearch ,
    updateDisplay,
    updateDelete,
    editDisplay,
    editdataSave,
    dataSave
};