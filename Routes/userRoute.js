const express=require("express");
const { currentUser,AdminSignup,Adminsignin,Adminsignout,Adminupdate,Admindelete,AllUser } = require("../Controller/userController");
const { isAuthenticated } = require("../Middleware/Auth");
const router=express.Router();

router.post("/currentUser",isAuthenticated, currentUser)

router.get('/Alluser',AllUser)

// Post /user/Signup
router.post("/signup",AdminSignup)

// Post /user/Signup
router.post("/signin",Adminsignin)

// Get Signout
router.get("/signout" , isAuthenticated,Adminsignout)

// post /update/:userid
router.post("/update/:id",isAuthenticated,Adminupdate)

// post /delete/:userid
router.post("/delete/:id",isAuthenticated,Admindelete)

module.exports=router;