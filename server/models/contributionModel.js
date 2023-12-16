const mongoose = require("mongoose");
const ContributionSchema = new mongoose.Schema(
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
        startTime:{
            Type:Date,
        },
        endTime:{
            Type:Date,
        }

    },
    {
        timestamps:true
    }
);
module.exports=mongoose.models.Contribution|| mongoose.model("Contribution",ContributionSchema)
