const express = require("express");
const {
  authMiddleware,
  isLeaderOrDeputyLeader,
} = require("../middlewares/authMiddleware");
const {
  getAllContributions,
  updateContributions,
  createContributions,
  deleteContributions,
} = require("../controllers/ContributionController");

const router = express.Router();

router.get("/", authMiddleware, getAllContributions);
router.put("/:id", authMiddleware, updateContributions);
router.post("/", authMiddleware, createContributions);
router.delete("/:id", authMiddleware, deleteContributions);

module.exports = router;
