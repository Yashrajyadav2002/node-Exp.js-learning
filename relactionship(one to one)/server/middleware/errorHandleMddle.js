


const ErrorHandler=(err, req, res, next)=>{
       res.status(500).send(err.message);
}

module.exports=ErrorHandler;