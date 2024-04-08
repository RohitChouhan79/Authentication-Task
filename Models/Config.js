const mongoose=require("mongoose");

exports.connectDatabase=async()=>{
   try {
       await mongoose.connect("mongodb://127.0.0.1:27017/BoostupTask");
       console.log("Database Connection Establishd!");
   } catch (error) {
       console.log(error.message);
   }
}