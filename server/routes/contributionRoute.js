const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const {getAllContributions} = require("../controllers/ContributionController");

const router=express.Router();

router.get("/",authMiddleware,getAllContributions);

module.exports=router;