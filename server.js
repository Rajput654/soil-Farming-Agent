const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();          // Load environment variables
connectDB();              // Connect to MongoDB

const app = express();

app.use(express.json());
app.use(cors());

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/soil", require("./routes/soilRoutes"));
app.use("/api/distributors", require("./routes/distributorRoutes"));

// Serve static frontend files
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});