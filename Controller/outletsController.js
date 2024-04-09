const { catchAsyncError } = require("../Middleware/AsyncError");
const Outlets = require("../Models/outletModel");
const USER = require('../Models/userModel');



exports.Addoutlate = catchAsyncError(async (req, res, next) => {
    const outlate = await new Outlets(req.body).save();
    const user = await USER.findById(req.params.id);
    outlate.user = user
    await outlate.save();
    res.json({ message: "Outlet added successfully" });
});



exports.Updateoutlate = catchAsyncError(async (req, res, next) => {
    const updateoutlate = await Outlets.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec(); 
    res.status(200).json({
        success: true,
        message: "Outlet updated successfully",
        outlate: updateoutlate
    });
});

exports.deleteoutlate = catchAsyncError(async (req, res, next) => {
    await Outlets.findByIdAndDelete(req.params.id).exec();
    res.json({ message: "Outlet deleted successfully" });
});


exports.outlets = catchAsyncError(async (req, res, next) => {
    try {
        const outlets = await Outlets.find().populate('user').exec();
        res.json({ outlets });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred while fetching outlets data' });
    }
});