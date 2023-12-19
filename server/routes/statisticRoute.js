const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const router=express.Router();
const {getFee, getInformation}=require("../controllers/StatisticController")


// router.post("/createFAC",authMiddleware,createFACList);
router.get("/getFee",authMiddleware,getFee);
router.get("/getStatics",authMiddleware,getInformation);

module.exports=router;