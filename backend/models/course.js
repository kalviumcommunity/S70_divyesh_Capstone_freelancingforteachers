const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true } // Relationship
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
