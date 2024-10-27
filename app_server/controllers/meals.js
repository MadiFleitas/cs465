const fs = require('fs'); // Import the 'fs' module, though it's not used in this code

// GET Meals View - Render the "Meals" page
const meals = (req, res) => {
    // Set the page title for the Meals view
    const pageTitle = 'Travlr Getaways - Meals';

    // Render the 'meals' template and pass the page title to the view
    res.render('meals', { title: pageTitle });
};

// Export the 'meals' function to be used in routing
module.exports = {
    meals
};
