const homepage = (req,res)=>{
    res.render("home");
}

const aboutpage = (req,res)=>{
    res.render("about");
}

const serviceage = (req,res)=>{
    res.render("service");
}

const contactpage = (req,res)=>{
    res.render("contact");
}

module.exports={
    homepage,
    aboutpage,
    serviceage,
    contactpage
}