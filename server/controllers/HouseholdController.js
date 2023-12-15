const Household=require("../models/householdModel")
const asyncHandler=require("express-async-handler")
const {query} = require("express");

const getHouseholdBasedOnParams=asyncHandler(async(req,res)=>{
    const area=req.query.area;
    const memberNumber=req.query.memberNumber;
    const querys={};
    if(area) {
        querys.area=area;
    }
    if(memberNumber){
        querys.memberNumber={$gte:memberNumber};
    }

    const households=await  Household.find(querys);

        res.status(200).send({
            households,
            message:'Get households successfully'
        })



})
const createHousehold=asyncHandler(async (req,res)=>{
     const newHousehold=await Household.create(req.body);
     res.status(200).send({
         newHousehold
     })
});
module.exports={getHouseholdBasedOnParams,createHousehold}