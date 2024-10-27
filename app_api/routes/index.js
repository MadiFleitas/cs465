// app_api/routes/index.js

const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');

// Define API routes
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.getTripByCode);

module.exports = router;
