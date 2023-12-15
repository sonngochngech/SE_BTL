const User=require("../models/userModel")
const asyncHandler=require("express-async-handler")
const {query} = require("express");
const listUser=asyncHandler(async(req,res)=>{
    const users=await User.find({}).lean()
    if (!users){
        res.status(500).send({
            message:'Error getting users'
        })
        return
    }
    let userMap = [];
    users.forEach(function(user) {
      userMap.push({
        "email":user.email,
        "firstName":(user.firstName?user.firstName:""),
        "lastname":(user.lastname?user.lastname:"")
      });
    });
    res.status(200).send(
        {"users":userMap}
    )
})
const getUser=asyncHandler(async(req,res)=>{
    const email=req.body.email;
    if(!email){
        res.status(500).send({
            message:'No email provided'
        })
        return
    }
    const user=await  User.findOne({"email":email}).lean();
    if (!user){
        res.status(500).send({
            message:'Get user error'
        })
        return
    }
    delete user.password
    res.status(200).send({
        user:user,
        message:'Get user successfully'
    })
})
const createUser=asyncHandler(async (req,res)=>{
    console.log(req.body.password)
    const newUser=await User.create(req.body);
    console.log(newUser.password)

    res.status(200).send({
        newUser
    })
});
const deleteUser=asyncHandler(async (req,res)=>{
    const email=req.body.email;
    if(!email){
        res.status(500).send({
            message:'No email provided'
        })
        return
    }
    const result=await  User.deleteOne({"email":email});
    if (!result || result?.deletedCount==0||! result?.acknowledged){
        res.status(500).send({
            message:'Delete user error'
        })
        return
    }
    res.status(200).send({
        message:'Delete user successfully'
    })
});
module.exports={getUser,listUser,createUser,deleteUser}