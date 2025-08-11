import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  profilePic : {type:String},
  otp: Number,
  otpExpiry: Date,
});

export default mongoose.models.User || model("User", userSchema);
