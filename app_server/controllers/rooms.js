const fs = require('fs'); // Import the 'fs' module, though it's not used in this code

// GET Rooms View - Render the "Rooms" page
const rooms = (req, res) => {
    // Set the page title for the Rooms view
    const pageTitle = 'Travlr Getaways - Rooms';

    // Render the 'rooms' template and pass the page title to the view
    res.render('rooms', { title: pageTitle });
};

// Export the 'rooms' function to be used in routing
module.exports = {
    rooms
};
