const mongoose=require("mongoose");



const outletModel=new mongoose.Schema({
    outletName:{
        type:String,
        required:[true,"userName  is Required"],
        unique:true,
    },
    outletDestination:{
        type:String
    },
    user:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
},{timestamps:true})


const outlet=mongoose.model("outlet",outletModel)

module.exports=outlet