const mongoose = require("mongoose");
const FeeSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required: true,
        },
        description:{
            type:String,
        },
        feeType:{
            type:String,
            enum:["Household","Individual"],
        },
        frequency:{
            type: String,
            enum:["yearly","monthly"],
        }

    },
    {
        timestamps:true
    }
);
module.exports=mongoose.models.Fee|| mongoose.model("Fee",FeeSchema)
