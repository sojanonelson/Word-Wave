
const express = require('express');
const { generateResponse, TrainModel } = require('../controllers/llamaController');

const router = express.Router();

router.post('/generate', generateResponse);
router.post('/train', TrainModel);


module.exports = router;
