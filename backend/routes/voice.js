import express from 'express';
import {
  getAllVoices,
  getVoiceById,
  editVoice,
  addVoice,
  deleteVoice,
} from '../controllers/voiceController.js';

const router = express.Router();

// Route to get all available voices
router.get('/voices', getAllVoices);

// Route to get a specific voice by ID
router.get('/voices/:voiceId', getVoiceById);

// Route to edit a voice (e.g., change settings or details)
router.put('/voices/:voiceId', editVoice);

// Route to add a new voice (if applicable)
router.post('/voices', addVoice);

// Route to delete a voice by ID
router.delete('/voices/:voiceId', deleteVoice);

export default router;
