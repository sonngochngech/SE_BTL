const Fee=require("../models/feeModel")
const Contribution=require("../models/contributionModel")
const FeeHouseholdRel=require("../models/feeHouseholdRelModel")
const ContriHouseholdRel=require("../models/contriHouseholdRelModel")
const RelList=require("../models/relListModel")
const Household=require("../models/householdModel");
const asyncHandler = require("express-async-handler")
const mongoose = require("mongoose");

const FCBList=asyncHandler(async(req,res)=>{
    try{
        const fees=await Fee.find();
        const contributions=await Contribution.find();
        res.status(200).send({
            fees,
            contributions,
            message:"Get Fees and Contributions Successfully",
        })
    }catch (error){
        throw new Error(error);
    }
});
const createFACList = asyncHandler(async (req, res) => {
    const session=await mongoose.startSession();
    session.startTransaction();
    try {
        const fee = await Fee.findById(req.body.feeId).session(session);
        const newRelList = await RelList.create([{
            name: req.body?.tableName,
            creator: req.user._id,
        }],{session});

        let households = [];

        for (const id of req.body?.householdIds) {
            const household = await Household.findById(id).session(session);

            if (!household) {
                session.abortTransaction();
                session.endSession();
                return res.status(404).json({ error: `Household with id ${id} not found` });
            }

            const newFeeHouseholdRel = await FeeHouseholdRel.create([{
                fee: fee._id,
                household: household._id,
                relList: newRelList[0]._id,
                amount: fee.amount * household.memberNumber,
            }],{session});

            households.push(newFeeHouseholdRel);
        }
        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({
            households,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging purposes
        await  session.abortTransaction();
        session.endSession();

        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
});

const getFeeList=asyncHandler(async(req,res)=>{
    const{id}=req.params;
    try{
        const feeList=await  FeeHouseholdRel.find({relList: id})
                                                            .populate('household')
                                                            .populate('fee')
                                                            .populate('relList');

        return res.status(200).json({
            feeList,
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            error:'Internal Server Error',
        })
    }


})
module.exports={FCBList,createFACList,getFeeList};