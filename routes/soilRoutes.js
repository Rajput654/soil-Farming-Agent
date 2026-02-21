const express = require("express");
const Soil = require("../models/soil");
const { protect, adminOnly } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all soils
router.get("/", async (req, res) => {
  const soils = await Soil.find();
  res.json(soils);
});

// Add soil (Admin only)
router.post("/", protect, adminOnly, async (req, res) => {
  const soil = await Soil.create(req.body);
  res.json(soil);
});

module.exports = router;