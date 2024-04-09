const express=require("express");
const { AddCompony,componys,UpdateCompony,deleteCompony } = require("../Controller/componyConroller");
const { isAuthenticated } = require("../Middleware/Auth");
const router=express.Router();

router.get("/componys",isAuthenticated, componys)

// Post  /Addcompony/:Outlateid
router.post("/Addcompony/:id",AddCompony)

// post /updateCompony/:componyid
router.post("/updateCompony/:id",isAuthenticated,UpdateCompony)

// post /deleteCompony/:componyid
router.post("/deleteCompony/:id",isAuthenticated,deleteCompony)



module.exports=router;