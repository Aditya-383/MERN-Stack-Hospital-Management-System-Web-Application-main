import { createEmergency, getAllEmergencies, getEmergencyById } from '../controller/emergencyController.js';

import express from "express";
const router = express.Router();
// const {
//   createEmergency,
//   getAllEmergencies,
//   getEmergencyById,
//   updateEmergencyById,
//   deleteEmergencyById
// } = require('../controllers/emergencyController.js');

router.post('/post', createEmergency);
 
router.get('/', getAllEmergencies);
 
router.get('/:id', getEmergencyById);

export default router;
 