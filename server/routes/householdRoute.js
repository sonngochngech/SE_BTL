const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const {getHouseholdBasedOnParams,createHousehold} = require("../controllers/HouseholdController");
const router=express.Router();



router.get("/",authMiddleware,getHouseholdBasedOnParams);
router.post("/create",authMiddleware,createHousehold);
module.exports=router;