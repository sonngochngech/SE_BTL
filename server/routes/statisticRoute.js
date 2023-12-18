const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const router=express.Router();
const { 
    //getFee, 
    getFeeHousehold }=require("../controllers/StatisticController")


// router.get("/getFee",authMiddleware,getFee);
router.get("/getFeeHousehold",authMiddleware,  getFeeHousehold)


module.exports=router;