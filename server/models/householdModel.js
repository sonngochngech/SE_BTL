const mongoose = require("mongoose");
const HouseholdSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        area:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required: true,
        },
        owner:{
            type:mongoose.Schema.ObjectId,
            ref:"Individual",
        },
        memberNumber:{
            type:Number,
            default:0
        }

    },
    {
        timestamps:true
    }
);
const Household = mongoose.models.Household || mongoose.model("Household", HouseholdSchema);

module.exports = Household;
