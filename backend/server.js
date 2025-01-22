const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const elevenlab = require('./routes/elevenlab')


dotenv.config();

app.use(cors());
app.use(express.json()); // For parsing application/json

// Use ElevenLabs Routes
app.use('/api', elevenlab);

// Example route to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running with CORS access for ElevenLabs');
});
// console.log(process.env.ELEVENLABS_API_KEY);
// Set the port for the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


