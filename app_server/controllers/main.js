const express = require('express');
const path = require('path');
const app = express();
const travelController = require('./controllers/travel');

// Set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public'))); // Adjust if necessary

// Define routes
app.get('/travel', travelController.travel);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
