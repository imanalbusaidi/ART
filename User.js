import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Pass: { type: String, required: true },
});

const userModel = mongoose.model("art", userSchema);
export default userModel;
