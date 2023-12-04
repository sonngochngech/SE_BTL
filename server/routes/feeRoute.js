const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const {getAllFee} = require("../controllers/FeeController");
const router=express.Router();



router.get("/",authMiddleware,getAllFee);

module.exports=router;