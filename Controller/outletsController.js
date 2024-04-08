const { catchAsyncError } = require("../Middleware/AsyncError");
const Outlets = require("../Models/outletModel");
const USER = require('../Models/userModel')

exports.outlets = catchAsyncError(async (req, res, next) => {
    const outlate = await Outlets.findById(req.params.id).populate('User').exec();
    res.json({ outlate });
});

exports.Addoutlate = catchAsyncError(async (req, res, next) => {
    const outlate = await new Outlets(req.body).save();
    const user = await USER.findById(req.params.id);
    outlate.user = user._id
    await outlate.save();
    res.json({ message: "Outlet added successfully", user:user,outlate:outlate });
});



exports.Updateoutlate = catchAsyncError(async (req, res, next) => {
    const updateoutlate = await Outlets.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec(); // Ensure new document is returned
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
