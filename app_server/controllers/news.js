const fs = require('fs'); // Import the 'fs' module, although it's not used in this code

// GET News View - Render the "News" page
const news = (req, res) => {
    // Set the page title for the News view
    const pageTitle = 'Travlr Getaways - News';

    // Render the 'news' template and pass the page title to the view
    res.render('news', { title: pageTitle });
};

// Export the 'news' function to be used in routing
module.exports = {
    news
};
