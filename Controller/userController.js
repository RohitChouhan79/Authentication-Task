const { catchAsyncError } = require("../Middleware/AsyncError");
const USER=require("../Models/userModel");
const Errorhandler = require("../Utils/ErrorHandle");
const { sendtokens } = require("../Utils/sendtoken");



exports.currentUser=catchAsyncError(async(req,res,next)=>{
    const user= await USER.findById(req.id).exec()
    res.json({user});
})

exports.AdminSignup=catchAsyncError(async (req,res,next)=>{
    const user= await new USER(req.body).save();
    sendtokens(user,200,res)
})

exports.Adminsignin=catchAsyncError(async(req,res,next)=>{
    // res.json(req.body)
    const user= await USER.findOne({username:req.body.username})


    if (!user) return next(new Errorhandler("User not found by this Username",404))

    sendtokens(user,200,res)

})

exports.Adminsignout=catchAsyncError(async(req,res,next)=>{
    res.clearCookie("token");
    res.json({message:"Succesfully signout"})
})


exports.Adminupdate=catchAsyncError(async(req,res,next)=>{
    await USER.findByIdAndUpdate(req.params.id,req.body).exec();
    res.status(200).json({
        sucess:true,
        message:"User update Suceesfully",
       
    })
})

exports.Admindelete=catchAsyncError(async(req,res,next)=>{
    const user= await USER.findByIdAndDelete(req.params.id).exec();
    res.json({message:"User Delete Succesfully"});
})