// app_server/routes/travel.js

const express = require('express');
const router = express.Router();

// Render the travel view
router.get('/', (req, res) => {
    res.render('travel', { title: 'Travel - Travlr Getaways' }); // Render the 'travel' view
});

module.exports = router;
