const jwt = require("jsonwebtoken");
const User= require("../models/userModel")
const asyncHandler=require("express-async-handler")
require('dotenv').config()

const authMiddleware=asyncHandler(async (request,response,next)=>{
          let token;
          if(request?.headers?.authorization?.startsWith('Bearer')){
              token=request.headers.authorization.split(" ")[1];
              try{
                  const decodedToken=await jwt.verify(token,process.env.JWT_SECRET);
                  request.user= await User.findById(decodedToken?.id);
                  next();
              }catch (e){
                  return response.status(401).json("User is not found");
              }
          }else{
              return response.status(404).json('You should authenticate');
          }
})

const isLeaderOrDeputyLeader=asyncHandler(async (req,res,next)=>{
   if(req.user.position!='Leader'&&req.user.position!='DeputyLeader'){
       return res.status(403).json("You donot have the authority");
   }else{
       next();
   }
});


module.exports={authMiddleware,isLeaderOrDeputyLeader};