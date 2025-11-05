const express = require('express');
const router = express.Router();
const scoringController = require('../controllers/scoringController');

// POST /api/scoring/start - Start scoring process
router.post('/start', scoringController.startScoring);

// GET /api/scoring/status/:sessionId - Get scoring status (future enhancement)
router.get('/status/:sessionId', scoringController.getScoringStatus);

module.exports = router;
