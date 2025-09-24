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

module.exports ={
    homepage,
    aboutpage,
    servivepage,
    contactpage,
    salarypage
}