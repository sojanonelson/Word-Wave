const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config(); 
const apiKey = process.env.ELEVENLABS_API_KEY;
// console.log("API:",process.env.ELEVENLABS_API_KEY)


exports.textToSpeech = async (req, res) => {
  const { text, voiceId } = req.body; // Change from 'voice' to 'voiceId'
  const output = mp3_22050_32

  if (!text || !voiceId) {
    return res.status(400).send({ error: 'Text and VoiceId are required' });
  }

  try {
    
    const response = await axios.post(
      'https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM',
      { text, voiceId, outputFormat:output }, // Send voiceId instead of voice
      {
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).send(response.data); // Send response from ElevenLabs API
  } catch (error) {

    
    console.error('Error with ElevenLabs API:', error);
    res.status(500).send({ error: 'Error processing the request' });
  }
};


// Speech-to-Text Controller
exports.speechToText = async (req, res) => {
  const { audioFile } = req.body;

  if (!audioFile) {
    return res.status(400).send({ error: 'Audio file is required' });
  }

  try {
    
    const formData = new FormData();
    formData.append('audio', audioFile);

    const response = await axios.post(
      'https://api.elevenlabs.io/v1/speech/recognize',
      formData,
      {
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).send(response.data); // Send response from ElevenLabs API
  } catch (error) {
    console.error('Error with ElevenLabs API:', error);
    res.status(500).send({ error: 'Error processing the request' });
  }
};
