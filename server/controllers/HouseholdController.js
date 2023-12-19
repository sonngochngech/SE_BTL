const Household = require("../models/householdModel");
const asyncHandler = require("express-async-handler");
const  Individual=require("../models/individualModel")
const getHouseholdBasedOnParams = asyncHandler(async (req, res) => {
    try {
        const area = req.query.area;
        const memberNumber = req.query.memberNumber;
        const querys = {};
        if (area) {
            querys.area = area;
        }
        if (memberNumber) {
            querys.memberNumber = { $gte: memberNumber };
        }

        const households = await Household.find(querys);

        res.status(200).send({
            households,
            message: 'Get households successfully'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error fetching households',
            error: error.message
        });
    }
});

const createHousehold = asyncHandler(async (req, res) => {
    try {
        const newHousehold = await Household.create(req.body);
        res.status(200).send({
            newHousehold,
            message: 'Create household successfully'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error creating household',
            error: error.message
        });
    }
});

const getHouseholds = asyncHandler(async (req, res) => {
    try {
        const households = await Household.find();
        res.status(200).send({
            households,
            message: 'Get households successfully'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error fetching households',
            error: error.message
        });
    }
});

const getHouseholdDetail = asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const household = await Household.findById(id).populate('owner');

        res.status(200).send({
            household,
            message: 'Get household successfully'
        });
    } catch (error) {
        res.status(500).send({
            message: 'Error fetching household details',
            error: error.message
        });
    }
});

module.exports = { getHouseholdBasedOnParams, createHousehold, getHouseholds, getHouseholdDetail };
