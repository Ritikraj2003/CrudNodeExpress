import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  address: { type: String },
});


export default mongoose.model("users", userSchema);