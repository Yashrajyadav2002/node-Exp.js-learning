const http = require("http");
http.createServer((req,res)=>{
    res.write("<h1> welcome to my website friends </h1>");
    res.write("<p> This is my pera for my personal information </p> ");
    res.write("<h2> For more details contact me </h2>")
    res.end("server is end !!!!");
}).listen(4400,()=>{
    console.log("server is running on port 4400")
})