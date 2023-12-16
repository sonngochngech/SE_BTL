const Fee=require("../models/feeModel")
const Contribution=require("../models/contributionModel")
const FeeHouseholdRel=require("../models/feeHouseholdRelModel")
const ContriHouseholdRel=require("../models/contriHouseholdRelModel")
const RelList=require("../models/relListModel")
const Household=require("../models/householdModel");
const asyncHandler = require("express-async-handler")
const mongoose = require("mongoose");
const  crypto = require("crypto");

const FCBList=asyncHandler(async(req,res)=>{
    try{
        const feeList=await RelList.find({type:"fee"});
        const contributionList=await RelList.find({type:"contribution"});
        res.status(200).send({
            feeList,
            contributionList,
            message:"Get Successfully",
        })
    }catch (error){
        throw new Error(error);
    }
});
const test=asyncHandler(async (req,res)=>{
    res.status(200).send({
        ok:"ok",
        // contributionList,
        message:"Get Successfully",
    })
});
const createFACList = asyncHandler(async (req, res) => {
    const session=await mongoose.startSession();
    session.startTransaction();
    try {
        const fee = await Fee.findById(req.body.feeId).session(session);
        const newRelList = await RelList.create([{
            name: req.body?.tableName ? req.body.tableName : crypto.randomBytes(20).toString('hex'),
            creator: req.user._id,
            type: "fee",
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
            id:newRelList[0]._id
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

const updateFeeList=asyncHandler(async (req,res)=>{
       try{
           const changedFeeList=req.body.changedFeeList;
           const updatedDocuments=[];
           for( const feeHouseholdRel of changedFeeList){
               const updatedDocument=await FeeHouseholdRel.findOneAndUpdate({_id: feeHouseholdRel._id},{status: feeHouseholdRel?.status,paymentTime: feeHouseholdRel?.paymentTime});
               if(!updatedDocument){
                   return res.status(404).json({ error: `Household with id ${id} not found` });
               }
               updatedDocuments.push(updatedDocument);
           }
           return res.status(200).json(updatedDocuments);
       }catch(error){
           return res.status(500).json({  error:'Internal Server Error',});
       }
});

// -----------------------------------------Contribution------------------------------------------------------
const getContributionList=asyncHandler(async(req,res)=>{
    const{id}=req.params;
    try{
        const contributionList=await  ContriHouseholdRel.find({relList: id})
            .populate('household')
            .populate('contribution')
            .populate('relList');

        return res.status(200).json({
            contributionList,
        })

    }catch(error){
        console.error(error);
        return res.status(500).json({
            error:'Internal Server Error',
        })
    }


})

const createCACList = asyncHandler(async (req, res) => {

    const session=await mongoose.startSession();
    session.startTransaction();

    try {
        const contribution = await Contribution.findById(req.body.contributionId).session(session);
        const newRelList = await RelList.create([{
            name: req.body?.tableName ? req.body.tableName : crypto.randomBytes(20).toString('hex'),
            creator: req.user._id,
            type:"contribution",
        }],{session});

        let households = [];

        for (const id of req.body?.householdIds) {
            const household = await Household.findById(id).session(session);

            if (!household) {
                session.abortTransaction();
                session.endSession();
                return res.status(404).json({ error: `Household with id ${id} not found` });
            }

            const newContriHouseholdRel = await ContriHouseholdRel.create([{
                contribution: contribution._id,
                household: household._id,
                relList: newRelList[0]._id,
            }],{session});

            households.push(newContriHouseholdRel);
        }
        await session.commitTransaction();
        session.endSession();

        return res.status(200).json({
            households,
            id:newRelList[0]._id,
            name:newRelList[0].name,
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

const updateContributionList=asyncHandler(async (req,res)=>{
    try{
        const changedContributionList=req.body.changedContributionList;
        const updatedDocuments=[];
        for( const contriHouseholdRel of changedContributionList){
            const updatedDocument=await ContriHouseholdRel.findOneAndUpdate({_id: contriHouseholdRel._id},{amount: contriHouseholdRel?.amount,paymentTime: contriHouseholdRel?.paymentTime});
            if(!updatedDocument){
                return res.status(404).json({ error: `Household with id ${id} not found` });
            }
            updatedDocuments.push(updatedDocument);
        }
        return res.status(200).json(updatedDocuments);
    }catch(error){
        return res.status(500).json({  error:'Internal Server Error',});
    }
});

const deleteList=asyncHandler(async (req,res)=>{
    const{id}=req.params;
    try{
        const FeeResult=await  FeeHouseholdRel.deleteMany({relList:id});
        const ContributionResult = await ContriHouseholdRel.deleteMany({ relList: id });
        const relListDeleteResult = await RelList.deleteOne({ _id: id });

            return res.status(200).json({
                success: true,
                message: 'Records deleted successfully.',
            });
    }catch(error){
        console.error(error);
        return res.status(500).json({
            error:'Internal Server Error',
        })
    }

});


module.exports={FCBList,createFACList,getFeeList,updateFeeList,createCACList,getContributionList,updateContributionList,deleteList};
