import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  useremail: { type: String, required: true },
  usermessage: { type: String, required: true },
});

const userModel = mongoose.model("dbpages", userSchema);
export default userModel;