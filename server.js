const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// 🔥 Set EJS as view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// API Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/soil", require("./routes/soilRoutes"));
app.use("/api/distributors", require("./routes/distributorRoutes"));

// Home route
app.get("/", (req, res) => {
  res.render("home", { title: "Soil Farming Agent" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.use("/api/analyze", require("./routes/analysisRoutes"));