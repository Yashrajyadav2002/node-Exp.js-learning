const StuModel = require("../models/stuModel");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const stuModel = require("../models/stuModel");


const stuRegenstraction = async(req,res)=>{
    const {name,email,password}=req.body;
    const user = await stuModel.create({
        name:name,
        email:email,
        password:password
    })
    res.send("user succesfully Registerd!!")
}

const stuLogin = async(req,res)=>{
    const {email,password}= req.body;
    const user = await stuModel.findOne
    ({email:email});

    if(!user){
        res.status(400).send({msg:"Invalid email"});
    }

    const passwordValidate = await bcrypt.compare(password, user.password);

    if(!passwordValidate){
        res.status(400).send({msg:"Invalid password"});
    }
}

module.exports={
    stuRegenstraction,
    stuLogin
}