const homepage=(req,res)=>{
    res.send("<h1> welcome to home page</h1>")
}

const aboutpage=(req,res)=>{
    res.send("<h1> welcome to about page</h1>")
}

const servicepage=(req,res)=>{
    res.send("<h1> welcome to service page</h1>")
}

const contactpage=(req,res)=>{
    res.send("<h1> welcome to contact page</h1>")
}

module.exports = {
    homepage,
    aboutpage,
    servicepage,
    contactpage
}