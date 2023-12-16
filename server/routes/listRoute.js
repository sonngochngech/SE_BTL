const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const router=express.Router();
const {FCBList,createFACList,getFeeList, updateFeeList, createCACList, getContributionList, updateContributionList, deleteList
}=require("../controllers/ListControllers")

router.get("/CreatedList",authMiddleware,FCBList);
router.post("/createFAC",authMiddleware,createFACList);
router.get("/delete/:id",authMiddleware,deleteList);
router.get("/:id",authMiddleware,getFeeList);
router.post("/update",authMiddleware,updateFeeList)
router.post("/createCAC",authMiddleware,createCACList);
router.get("/contribution/:id",authMiddleware,getContributionList);
router.post("/contribution/update",authMiddleware,updateContributionList);



module.exports=router;