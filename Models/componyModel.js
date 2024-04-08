const mongoose=require("mongoose");



const componyModel=new mongoose.Schema({
    ComponyName:{
        type:String,
        required:[true,"userName  is Required"],
    },
    ComponyEmail:{
        type:String,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
         'Please fill a valid Admin email address']
    },
    outlets:[{type:mongoose.Schema.Types.ObjectId,ref:"outlet"}],
},{timestamps:true})


const compony=mongoose.model("compony",componyModel)

module.exports=compony