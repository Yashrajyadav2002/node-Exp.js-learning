const StuModel = require("../models/stuModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const stuModel = require("../models/stuModel");

const stuRegistration = async(req,res)=>{
    const {name,email,password}=req.body;
    const passwordHash = await bcrypt.hash(password,10);
    const user = await stuModel.create({
        name:name,
        email:email,
        password:passwordHash,
    })

    res.send("user Succesfully Registerd");
}

const stulogin = async(req,res)=>{
    const {email,password}= req.body;
    const user = await stuModel.findOne({email:email});

    if(!user){
        res.status(401).send({msg:"Invalid Email Id !"});
    }

    const passwordvalidate = await bcrypt.compare(password,user.password);
    if(!passwordvalidate){
        res.status(401).send({mas:"Invalid Password !!"})
    }

    const token = jwt.sign({id:user._id},
    "yash123",{expiresIn:"1d"});
    res.status(200).send({token:token,msg:"user succesfully login"});

}
const userAuth = async(req,res)=>{
    const token = req.headr('auth-token');
    const decode = await jwt.verify(token,"yash123");
    console.log(decode.id);

    const user = await stuModel.findById(decode.id).select("-password");
    console.log(user);
    res.send(user);
}

module.exports = {stuRegistration,
    stulogin,
    userAuth,
}