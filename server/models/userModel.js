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
UserSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(5, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});


module.exports=mongoose.models.User|| mongoose.model("User",UserSchema)