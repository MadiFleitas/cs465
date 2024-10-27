const fs = require('fs'); // Import the 'fs' module, although it's not used in this code

// GET About View - Render the "About" page
const about = (req, res) => {
    // Set the page title for the About view
    const pageTitle = 'Travlr Getaways - About';

    // Render the 'about' template and pass the page title to the view
    res.render('about', { title: pageTitle });
};

// Export the 'about' function to be used in routing
module.exports = {
    about
};
