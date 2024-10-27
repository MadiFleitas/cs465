// app_server/routes/contact.js

const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact'); // Ensure this path is correct

// app_server/controllers/contact.js

// Function to render the contact page
const renderContactPage = (req, res) => {
    res.render('contact', { title: 'Contact - Travlr Getaways' });
};

// Export the function
module.exports = {
    renderContactPage
};

// Define the route for rendering the contact page
router.get('/', contactController.renderContactPage); // Make sure 'renderContactPage' is defined in the controller

module.exports = router;
