exports.generatedErrors=(err,req,res,next)=>{
    const statusCode=err.statusCode ||500;    //Agr koi statusCodeni aa rha to vo 500 dikha dega

    if(err.name==="MongoServerError" && err.message.includes("E11000 duplicate key")){
        err.message="Admin with this username is Already exits"
    }
    res.status(statusCode).json({
        message:err.message,
        errName:err.name,
        stack:err.stack
    }) 
}