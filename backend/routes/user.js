const express = require("express");
const router = express.Router();
const User = require("../models/User");

//  GET - fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // Read from DB
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//  POST - create a new user
router.post("/", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password, role });
    const savedUser = await newUser.save(); // Write to DB
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//  PUT - update a user by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body, // Fields to update
      { new: true } // Return updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
