const express=require("express")
const {authMiddleware,isLeaderOrDeputyLeader} = require("../middlewares/authMiddleware");
const {getUser,listUser,createUser,deleteUser} = require("../controllers/UserControllers");
const router=express.Router();
router.get("/test",(req,res)=>{
    res.send("OK")
});
router.get("/list",authMiddleware,listUser);
router.post("/get",authMiddleware,getUser);
// router.post("/create",authMiddleware,isLeaderOrDeputyLeader,createUser);
// router.post("/delete",authMiddleware,isLeaderOrDeputyLeader,deleteUser);
router.post("/create",authMiddleware,createUser);
router.post("/delete",authMiddleware,deleteUser);
module.exports=router;