const User = require("../models/userModel")
const catchAsyncError = require("../middleware/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");

//*refistration
exports.registerUser = catchAsyncError(
    async (req, res, next) => {
        const { name, email, password } = req.body;

        const user = await User.create({
            name, email, password, avatar: {
                public_id: "this is a sample is",
                url: "profilepictureurl"
            }
        })

        const token = user.getJWTtoken();

        res.status(201).json({
            success: true,
            // user,
            token
        });
    }
)


//* login
exports.loginUser = catchAsyncError(
    async (req, res, next) => {
        const { email, password } = req.body;
        if(!email || !password){
            return next(new ErrorHandler("please Enter Email and password",400))
        }

        const user = await User.findOne({email}).select("+password");
        if(!user){
            return next(new ErrorHandler("invalid Email or password",401))
        }

        const isValidPassword = await user.comparePassword(password);

        if(!isValidPassword){
            return next(new ErrorHandler("invalid Email or password",401))
        }

        const token = user.getJWTtoken();

        res.status(200).json({
            success: true,
            token
        });

    }
)