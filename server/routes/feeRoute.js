const express = require("express");
const {
  authMiddleware,
  isLeaderOrDeputyLeader,
} = require("../middlewares/authMiddleware");
const {
  getAllFee,
  updateFee,
  createFee,
  deleteFee,
} = require("../controllers/FeeController");
const router = express.Router();

router.get("/", authMiddleware, getAllFee);
router.put("/:id", authMiddleware, updateFee);
router.post("/", authMiddleware, createFee);
router.delete("/:id", authMiddleware, deleteFee);

module.exports = router;
