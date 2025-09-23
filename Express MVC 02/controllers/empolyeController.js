const homepage =(req,res)=>{
    res.send("<h1> This is my empolye home page </h1>")
}

const aboutpage =(req,res)=>{
    res.send("<h1> This is my empolye about page </h1>")
}

const designationpage =(req,res)=>{
    res.send("<h1> This is my empolye designation page </h1>")
}

const departmentpage =(req,res)=>{
    res.send("<h1> This is my empolye department page </h1>")
}

const salarypage =(req,res)=>{
    res.send("<h1> This is my empolye salray page </h1>")
}

module.exports={
    homepage,
    aboutpage,
    designationpage,
    departmentpage,
    salarypage
}