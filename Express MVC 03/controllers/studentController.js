
const studentModels = require("../models/studentModels");
const stuModel = require("../models/studentModels");
const homepage=(req,res)=>{
    res.render("home");
}

const aboutpage=(req,res)=>{
    res.render("about");
}

const servivepage=(req,res)=>{
    res.render("service");
}

const contactpage=(req,res)=>{
    res.render("contact");
}

const salarypage=(req,res)=>{
    res.render("salary");
}

const datasave=(req,res)=>{
    const{rno,nm,city,fs}=req.body;
    studentModels.create({
        rollno:rno,
        name:nm,
        city:city,
        fees:fs
    })
    res.render("insert");

}

module.exports ={
    homepage,
    aboutpage,
    servivepage,
    contactpage,
    salarypage
}