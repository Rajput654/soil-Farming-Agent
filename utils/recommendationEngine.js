const recommendCrops = (data) => {
  const { soilType, pH, nitrogen, rainfall } = data;

  let recommendedCrops = [];
  let advice = "";

  // 🔹 Rule-Based Logic

  if (soilType === "Alluvial") {
    if (pH >= 6 && pH <= 7.5) {
      recommendedCrops.push("Rice", "Wheat", "Sugarcane");
      advice = "Alluvial soil is highly fertile and good for cereal crops.";
    }
  }

  if (soilType === "Black") {
    recommendedCrops.push("Cotton", "Soybean");
    advice = "Black soil retains moisture and is ideal for cotton.";
  }

  if (soilType === "Red") {
    recommendedCrops.push("Millets", "Groundnut");
    advice = "Red soil supports drought-resistant crops.";
  }

  // Nitrogen-based refinement
  if (nitrogen === "low") {
    advice += " Consider adding nitrogen-rich fertilizers.";
  }

  // Rainfall condition
  if (rainfall > 100) {
    recommendedCrops.push("Rice");
  }

  return {
    recommendedCrops: [...new Set(recommendedCrops)], // remove duplicates
    confidence: recommendedCrops.length > 0 ? "High" : "Low",
    advice
  };
};

module.exports = recommendCrops;