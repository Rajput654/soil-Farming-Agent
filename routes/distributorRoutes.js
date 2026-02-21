const express = require("express");
const Distributor = require("../models/Distributor");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all distributors
router.get("/", async (req, res) => {
  const distributors = await Distributor.find();
  res.json(distributors);
});

// Add distributor (Admin only)
router.post("/", protect, adminOnly, async (req, res) => {
  const distributor = await Distributor.create(req.body);
  res.json(distributor);
});

module.exports = router;