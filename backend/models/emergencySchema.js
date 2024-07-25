// models/Emergency.js
import mongoose from "mongoose";

const emergencySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Emergency = mongoose.model('Emergency', emergencySchema);
