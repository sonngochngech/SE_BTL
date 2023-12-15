const mongoose = require("mongoose");
const ContributionHouseholdRelSchema = new mongoose.Schema(
    {
        household:{
            type: mongoose.Schema.ObjectId,
            ref:"Household"
        },
        contribution:{
            type: mongoose.Schema.ObjectId,
            ref:"Contribution"
        },
        paymentTime:{
            type:Date,
        },
        amount:{
            type:Number,
        },
        status:{
            type: Boolean,
            default: false

        },
        relList:{
            type:mongoose.Schema.ObjectId,
            ref:"RelList"
        }
    }
);
module.exports=mongoose.models.ContributionHouseholdRel|| mongoose.model("ContributionHouseholdRel",ContributionHouseholdRelSchema)
