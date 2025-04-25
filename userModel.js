const mongoose = require("mongoose");
const db = require("./db");

// Define schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;
