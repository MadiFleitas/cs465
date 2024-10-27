// app_server/routes/index.js

const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travel'); // Ensure the path is correct

// Define the route for rendering the homepage
router.get('/', (req, res) => {
    res.render('index', { title: 'Home - Travlr Getaways' }); // Render the 'index' view
});

// Define the route for travel
router.get('/travel', travelController.travel); // Make sure travelController.travel is defined

module.exports = router;
