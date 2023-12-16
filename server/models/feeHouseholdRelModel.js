const mongoose = require("mongoose");
const FeeHouseholdRelSchema = new mongoose.Schema(
    {
        household:{
            type: mongoose.Schema.ObjectId,
            ref:"Household"
        },
        fee:{
            type: mongoose.Schema.ObjectId,
            ref:"Fee"
        },
        paymentTime:{
            type:Date,
        },
        amount:{
            type:Number,
            required:true,
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
module.exports=mongoose.models.FeeHouseholdRel|| mongoose.model("FeeHouseholdRel",FeeHouseholdRelSchema)
