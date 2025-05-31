const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Routes
const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);



// Default route
app.get("/", (req, res) => {
  res.send("Freelance Teacher Marketplace API is running 🚀");
});

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
