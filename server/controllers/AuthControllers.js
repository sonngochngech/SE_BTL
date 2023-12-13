const generateToken = require("../config/jwtToken")
const User = require("../models/userModel")
const asyncHandler = require("express-async-handler")

//function
const createUser = asyncHandler(async (req, res) => {

})

const login = asyncHandler(async (request, response) => {
    const {email,password}=request.body;
    const currentUser=await User.findOne({email:email});
    if(currentUser && (await currentUser.isPasswordMatched(password))){
        response.status(200).send({
            message: "Login Successfully",
            currentUser,
            token: generateToken(currentUser._id),
        })
    }else{
        response.status(401).send({
            message:"Login failure",
        })
    }
})

module.exports={login}