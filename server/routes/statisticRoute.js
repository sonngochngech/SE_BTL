const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const StatisticRouter=express.Router();
const {getFee}=require("../controllers/StatisticController")


// router.post("/createFAC",authMiddleware,createFACList);
router.get("/getFee",authMiddleware,getFee);

module.exports=StatisticRouter;