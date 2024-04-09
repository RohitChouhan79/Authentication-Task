const { catchAsyncError } = require("../Middleware/AsyncError");
const Compony=require("../Models/componyModel");
const Errorhandler = require("../Utils/ErrorHandle");
const Outlets = require("../Models/outletModel");




exports.componys=catchAsyncError(async(req,res,next)=>{
    try {
        const companies = await Compony.find().populate('outlets').exec();
        res.json({ companies, message: "Successfully fetched company data" });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while fetching company data' });
    }
})

exports.AddCompony=catchAsyncError(async (req,res,next)=>{
    const compony= await new Compony(req.body).save();
    const outlate = await Outlets.findById(req.params.id)

    compony.outlets=outlate
    compony.save()
    res.send({message:"Compony added Succesfully"})
})



exports.UpdateCompony=catchAsyncError(async(req,res,next)=>{
    const updatecopony= await Compony.findByIdAndUpdate(req.params.id,req.body).exec();
    res.status(200).json({
        sucess:true,
        message:"Company  updation Suceesfully",
        updatecopony:updatecopony
       
    })
})

exports.deleteCompony=catchAsyncError(async(req,res,next)=>{
    await Compony.findByIdAndDelete(req.params.id).exec();
    res.json({message:"Compony Delete Succesfully"});
})