const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Create a course (linked to a teacher)
router.post("/", async (req, res) => {
  try {
    const { title, description, price, teacher } = req.body;

    const newCourse = new Course({ title, description, price, teacher });
    const saved = await newCourse.save();

    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all courses with teacher info
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().populate("teacher", "name email");
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
