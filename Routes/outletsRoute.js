const express=require("express");
const { Addoutlate,outlets,Updateoutlate,deleteoutlate } = require("../Controller/outletsController");
const { isAuthenticated } = require("../Middleware/Auth");
const router=express.Router();

router.get("/Outlets",isAuthenticated,outlets)

// // Post /Addoutlate/:userid 
router.post("/Addoutlate/:id",Addoutlate)

// // post /updateoutlate/:outlateid
router.post("/updateoutlate/:id",isAuthenticated,Updateoutlate)

// // post /deleteoutlate/:outlateid
router.post("/deleteoutlate/:id",isAuthenticated,deleteoutlate)



module.exports=router;