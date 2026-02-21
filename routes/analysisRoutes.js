const express = require("express");
const recommendCrops = require("../utils/recommendationEngine");

const router = express.Router();

// Soil Analysis Endpoint
router.post("/", (req, res) => {
  try {
    const result = recommendCrops(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;