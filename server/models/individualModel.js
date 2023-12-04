const mongoose = require("mongoose");
const IndividualSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required: true,
        },
        address:{
            type:String,
            required:true,
        },
        identifyCardId:{
            type:String,
            required:true,
        },
        household:{
            type:mongoose.Schema.ObjectId,
            ref:"Household",
        }

    },
    {
        timestamps:true
    }
);
module.exports=mongoose.models.Individual|| mongoose.model("Individual",IndividualSchema)
