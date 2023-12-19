const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const {getHouseholdBasedOnParams,createHousehold, getHouseholds, getHouseholdDetail} = require("../controllers/HouseholdController");
const router=express.Router();



router.get("/",authMiddleware,getHouseholdBasedOnParams);
router.get("/all",authMiddleware,getHouseholds);
router.post("/create",authMiddleware,createHousehold);
router.get("/:id",authMiddleware,getHouseholdDetail);
module.exports=router;