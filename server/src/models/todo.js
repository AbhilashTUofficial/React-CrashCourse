const mongoose = require("mongoose");

const todoNormalSchema = new mongoose.Schema({
  todo: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  criticalLevel: { type: Number, default: 0 },
});

const todoDailySchema = new mongoose.Schema({
  todo: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  criticalLevel: { type: Number, default: 0 },
  fullfilledDates: { type: [String], default: [] },
});

module.exports = mongoose.model("Todonormal", todoNormalSchema);
module.exports = mongoose.model("Tododaily", todoDailySchema);
