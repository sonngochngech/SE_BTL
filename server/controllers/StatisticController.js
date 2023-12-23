const asyncHandler = require("express-async-handler");
const feeHouseholdRelModel = require("../models/feeHouseholdRelModel");
const feeModel=require("../models/feeModel");
const ContributionModel=require("../models/contributionModel");
const contributionHouseholdModel = require("../models/contriHouseholdRelModel");
const HouseholdModel = require("../models/householdModel");

const getFee = asyncHandler(async (req, res) => {
    try {
        const feeHouseholdRelSchema = await feeHouseholdRelModel.findAll();
        if (feeHouseholdRelSchema) {
            res.status(200).send(feeHouseholdRelSchema);
        } else {
            throw new Error('Cannot get all fee');
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
});

const getInformation = asyncHandler(async (req, res) => {
    try {
        const feeHouseholdRelSchema = await feeHouseholdRelModel.find();
        const contributionHouseholdRelSchema = await contributionHouseholdModel.find();
        let feeSum = 0;
        let contributionSum = 0;
        const householdSet = new Set();
        const householdList = [];

        if (feeHouseholdRelSchema) {
            for (let i of feeHouseholdRelSchema) {
                if(i.status){
                    feeSum = feeSum + i.amount;
                    householdSet.add(i.household.toString());
                }
                // Convert ObjectId to string for Set comparison
            }
        }

        if (contributionHouseholdRelSchema) {
            for (let i of contributionHouseholdRelSchema) {
                if(i.amount>0){
                    feeSum= feeSum+ i.amount;
                    householdSet.add(i.household.toString());
                }// Convert ObjectId to string for Set comparison
            }
        }

// Fetch unique households based on the Set
        for (let householdId of householdSet) {
            const household = await HouseholdModel.findById(householdId);
            if (household) {
                const feeList=await  feeHouseholdRelModel.find({household: householdId});
                const newFeeList=[];
                for(var feeRel of feeList){
                    const fee=await  feeModel.find({_id: feeRel.fee});
                    newFeeList.push(fee[0]);
                }
                const contributionList=await  contributionHouseholdModel.find({household: householdId});
                const newContributionList=[];
                for(var contributionRel of contributionList){
                    const fee=await  ContributionModel.find({_id: contributionRel.contribution});
                    newContributionList.push(fee[0]);
                }
                householdList.push({
                    _id: household._id,
                    owner: household.owner,
                    address: household.address,
                    area: household.area,
                    memberNumber: household.memberNumber,
                    name: household.name,
                    feeList: newFeeList,
                    contributionList:newContributionList
                });


            }
        }
        res.status(200).send({
            householdList,
            feeSum,
            householdListSize: householdList.length
        });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = { getFee, getInformation };
