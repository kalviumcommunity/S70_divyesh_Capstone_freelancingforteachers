const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require('./routes/auth');

const path = require("path");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); 
app.use('/api/auth', authRoutes);



app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const userRoutes = require("./routes/user");
const courseRoutes = require("./routes/course");
const uploadRoutes = require("./routes/upload");

app.use("/api/users", userRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/upload", uploadRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Freelance Teacher Marketplace API is running ");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
