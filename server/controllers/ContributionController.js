const Contribution=require("../models/contributionModel")
const asyncHandler=require("express-async-handler")
const getAllContributions=asyncHandler(async (req,res)=>{
    try{
        const contributions=await  Contribution.find();
        res.status(200).send({
            contributions,
            message:"Get Contributions successfully"
        })
    }catch (error){
        throw  new Error(error);
    }

})
module.exports={getAllContributions}