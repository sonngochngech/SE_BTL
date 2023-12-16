const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const router=express.Router();
const {FCBList,createFACList,getFeeList}=require("../controllers/ListControllers")


router.post("/createFAC",authMiddleware,createFACList);
router.get("/:id",authMiddleware,getFeeList);

module.exports=router;