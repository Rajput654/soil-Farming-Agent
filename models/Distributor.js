const mongoose = require("mongoose");

const distributorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: String,
  products: [String],
});

module.exports = mongoose.model("Distributor", distributorSchema);