const stumodel = require("../models/stumodel");
const homepage = (req,res)=>{
    res.render("home");
}
const insertpage = (req,res)=>{
    res.render("insert");
}

const datasave = (req,res)=>{
    const{rno,nm,city,fs}= req.body;
    stumodel.create({
        rollno:rno,
        name:nm,
        city:city,
        fees:fs
    })
    res.render("insert");
}

const displaypage = async (req,res) =>{
    const student = await stumodel.find();
    res.render("display",{stu: student});
}
const searchpage = (req,res) =>{
    res.render("search",{stu:[]});
}

const dataEdit = async (req,res)=>{
    const {id} = req.query;
    const studata = await stumodel.findById(id);
    res.render("edit",{Data:studata});
}

const editSave = async(req,res)=>{
    const {id,rollno,name,city,fees}= req.body;
    await stumodel.findByIdUpdate(id,{
        rollno:rollno,
        name:name,
        city:city,
        fees:fees
    });
    

const student = await stumodel.find();
res.render("update",{stu: student});
}

const stuSearch = async(req,res)=>{
    const {rno}= req.body;
    const student = await stumodel.find({rollno: rno});
    console,log(student);
    res.render("search",{stu: student});
}

const updatePage = async (req,res)=>{
    const student = await stumodel.find();
    res.render("update",{stu: student});
}

const dataDelete = async (req,res)=>{
    const {id}= req.body;
    await stumodel.findByIdAndDelete(id);

    const student = await stumodel.find();
    res.render("update",{stu: student});
}

module.exports = {
    homepage,
    insertpage,
    datasave,
    displaypage,
    searchpage,
    dataEdit,
    editSave,
    stuSearch,
    updatePage,
    dataDelete

}


