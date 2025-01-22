import axios from 'axios';
const dotenv = require('dotenv');
dotenv.config(); 

// Function to get all available voices
const getAllVoices = async (req, res) => {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const url = 'https://api.elevenlabs.io/v1/voices';

  try {
    const response = await axios.get(url, {
      headers: {
        'xi-api-key': apiKey,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error getting voices:', error.message);
    res.status(500).json({ message: 'Error retrieving voices.' });
  }
};

// Function to get a specific voice by ID
const getVoiceById = async (req, res) => {
  const { voiceId } = req.params;
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const url = `https://api.elevenlabs.io/v1/voices/${voiceId}`;

  try {
    const response = await axios.get(url, {
      headers: {
        'xi-api-key': apiKey,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error getting voice by ID:', error.message);
    res.status(500).json({ message: 'Error retrieving voice.' });
  }
};

// Function to edit a voice by ID (if applicable)
const editVoice = async (req, res) => {
  const { voiceId } = req.params;
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const url = `https://api.elevenlabs.io/v1/voices/${voiceId}`;
  const { voiceSettings } = req.body; // Expecting voiceSettings to be passed in the request body

  try {
    const response = await axios.put(
      url,
      { voiceSettings },
      {
        headers: {
          'xi-api-key': apiKey,
        },
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error editing voice:', error.message);
    res.status(500).json({ message: 'Error editing voice.' });
  }
};

// Function to add a new voice (if applicable)
const addVoice = async (req, res) => {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const url = 'https://api.elevenlabs.io/v1/voices';
  const { voiceName, voiceData } = req.body; // Assuming voiceData contains the necessary information for creating a voice

  try {
    const response = await axios.post(
      url,
      { voiceName, voiceData },
      {
        headers: {
          'xi-api-key': apiKey,
        },
      }
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error adding voice:', error.message);
    res.status(500).json({ message: 'Error adding voice.' });
  }
};

// Function to delete a voice by ID
const deleteVoice = async (req, res) => {
  const { voiceId } = req.params;
  const apiKey = process.env.ELEVENLABS_API_KEY;
  const url = `https://api.elevenlabs.io/v1/voices/${voiceId}`;

  try {
    const response = await axios.delete(url, {
      headers: {
        'xi-api-key': apiKey,
      },
    });
    res.status(200).json({ message: 'Voice deleted successfully.' });
  } catch (error) {
    console.error('Error deleting voice:', error.message);
    res.status(500).json({ message: 'Error deleting voice.' });
  }
};

export { getAllVoices, getVoiceById, editVoice, addVoice, deleteVoice };
