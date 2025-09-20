const http = require("http");
const school=require("./bhopal");
http.createServer((req,res)=>{
    res.write("<h1> welcome to my website bhai log ...");
    res.write(school.mycollage());
    res.write(school.myfess());
    res.write(school.mypresent());
    res.end();
})
.listen(3000,()=>{
    console.log("the server is runnig bhai ....")
})