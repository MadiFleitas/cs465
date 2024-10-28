// app_api/routes/index.js

const express = require('express');
const router = express.Router();
const passport = require('passport'); // Import Passport
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// Public routes for authentication
router.post('/register', authController.register); // Register a new user
router.post('/login', authController.login); // Login an existing user

// Protected routes for trips (JWT authentication required)
router.get('/trips', passport.authenticate('jwt', { session: false }), tripsController.getTrips); // View trips

// Routes that alter the database are now protected by JWT authentication
router.post('/trips', passport.authenticate('jwt', { session: false }), tripsController.addTrip); // Add a new trip
router.put('/trips/:tripCode', passport.authenticate('jwt', { session: false }), tripsController.tripsUpdateTrip); // Update a trip
router.delete('/trips/:tripCode', passport.authenticate('jwt', { session: false }), tripsController.deleteTrip); // Delete a trip (ensure the controller has this method)

module.exports = router;
