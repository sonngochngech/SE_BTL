const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
        },
        sex: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "user",
        },
        position: {
            type: String,
            enum:["Leader","Officer","DeputyLeader"],
            default:"Officer"
        }
    },
    {
        timestamps:true
    }
);

UserSchema.methods.isPasswordMatched=async function (password){
    return await bcrypt.compare(password,this.password);
}


module.exports=mongoose.models.User|| mongoose.model("User",UserSchema)