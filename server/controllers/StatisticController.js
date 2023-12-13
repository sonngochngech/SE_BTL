const FeeHouseholdRelSchema = require("../models/feeHouseholdRelModel")
const asyncHandler = require("express-async-handler")
const { query } = require("express");
const feeHouseholdRelModel = require("../models/feeHouseholdRelModel");

const getFee = asyncHandler(async (req, res) => {
    try {
        const feeHouseholdRelSchema = await FeeHouseholdRelSchema.findAll();
        if (feeHouseholdRelSchema) {
            res.status(200).send(feeHouseholdRelSchema)
        }
        else {
            throw new Error('Cannot get all fee')
        }
    }
    catch (e) {
        res.status(500).send(e)

    }
}

)

module.exports = { getFee }