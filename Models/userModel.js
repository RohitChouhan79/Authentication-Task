const mongoose= require("mongoose");
const jwt=require("jsonwebtoken");

const userModel=new mongoose.Schema({
    Admin:{
        type:String,
        unique:true,
        required:[true,"Admin  is Required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
         'Please fill a valid Admin email address']
    },
    username:{
        type:String,
        required:[true,"userName  is Required"],
        minLength:[4,"User name should be atleast 4character long"]
    },

},{timestamps:true})

userModel.methods.getjwttoken=function(){
    return jwt.sign({id: this._id},process.env.JWT_SECRET_KEY,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}; 

const user=mongoose.model("user",userModel);

module.exports=user;