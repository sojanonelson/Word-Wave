const express = require('express');
const router = express.Router();
const elevenLabsController = require('../controllers/elevenlabControllers');

// Text-to-Speech Route
router.post('/text-to-speech', elevenLabsController.textToSpeech);

// Speech-to-Text Route
router.post('/speech-to-text', elevenLabsController.speechToText);

module.exports = router;
