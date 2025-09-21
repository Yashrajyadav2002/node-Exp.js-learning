const http = require("http");
http.createServer((req,res)=>{
    res.write("<h1> welcome to my website friends </h1>");
    res.end("server is end !!!!");
}).listen(4400,()=>{
    console.log("server is running on port 4400")
})