const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://art:art123@art.u5qwquk.mongodb.net/art", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose.connection;
