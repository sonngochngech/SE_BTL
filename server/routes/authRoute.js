const express=require("express")
const router=express.Router();
const {
    login, changePassword,
}=require("../controllers/AuthControllers")
const {authMiddleware} = require("../middlewares/authMiddleware");

router.post("/login", login);
router.post("/changePassword",authMiddleware,changePassword)

module.exports=router;