// const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please Provide a  user Name"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide a valid Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Plese Enter a Password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: Expiry,
  verifyTokenExpiry: Date,
});
const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;
