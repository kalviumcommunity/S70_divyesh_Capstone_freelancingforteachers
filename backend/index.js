const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Routes
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
