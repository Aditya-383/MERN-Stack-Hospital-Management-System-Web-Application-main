// const  = require('../models/Emergency');
import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

import { Emergency } from "../models/emergencySchema.js"
// Controller for creating a new emergency record
export const createEmergency = catchAsyncErrors (async (req, res, next) => {
  try {
      const { name, phone, age, gender } = req.body;
      
      if (!name || !phone || !age || !gender) {
          return res.status(400).json({ message: 'All fields are required' });
        }
        
        // const newEmergency = await Emergency({ name, phone, age, gender });
        // await newEmergency.save();

        await Emergency.create({ name, phone, age, gender });
        res.status(200).json({
          success: true,
          message: "Form submitted successfully!",
        });
        
        console.log("emergrncy")
    // res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Controller for getting all emergency records
export const getAllEmergencies = catchAsyncErrors (async (req, res, next) => {
    try {
    const emergencies = await Emergency.find();
    console.log(emergencies);
    res.status(200).json(emergencies);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Controller for getting an emergency record by ID
export const getEmergencyById = catchAsyncErrors (async (req, res, next) => {
    try {
    const { id } = req.params; 
    const emergency = await Emergency.findById(id);
    
    if (!emergency) {
      return res.status(404).json({ message: 'Emergency record not found' });
    }
    
    res.status(200).json(emergency);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});




