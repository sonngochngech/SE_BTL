const mongoose = require("mongoose");
const RelListSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        creator:{
            type:mongoose.Schema.ObjectId,
            ref:'User'
        },
        type:{
            type:String,
        }
    },
    {
        timestamps:true
    }
);
module.exports=mongoose.models.RelList|| mongoose.model("RelList",RelListSchema)
