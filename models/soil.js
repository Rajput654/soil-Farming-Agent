const mongoose = require("mongoose");

const soilSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: String,
  cropsSuggested: [String],
  
    pHLevel: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Soil", soilSchema);


