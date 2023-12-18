const Fee=require("../models/feeModel")
const asyncHandler=require("express-async-handler")

const getAllFee=asyncHandler(async(req,res)=>{
    try{
         const fees=await Fee.find();
         res.status(200).send({
             fees,
             message:"Get all fees Successfully"
         })
    }catch (error){
        throw new Error(error);
    }
})





module.exports={getAllFee}