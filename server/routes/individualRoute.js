const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const {createIndividual} = require("../controllers/IndividualController");
const router=express.Router();





module.exports=router;