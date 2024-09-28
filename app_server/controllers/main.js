const express = require('express');
const path = require('path');
const app = express();
const travelController = require('./controllers/travel'); // Correctly importing the travel controller

// Set view engine
app.set('view engine', 'hbs'); // This sets Handlebars as the view engine
app.set('views', path.join(__dirname, 'views')); // This points to the views directory

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); // This serves static assets (like CSS, JS, images)

// Define routes
app.get('/travel', travelController.travel); // Route for the travel page

// Start the server
const PORT = process.env.PORT || 3000; // Default port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Confirmation message
});
