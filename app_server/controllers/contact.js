// app_server/controllers/contact.js

// Function to render the contact page
const renderContactPage = (req, res) => {
    res.render('contact', { title: 'Contact - Travlr Getaways' });
};

// Export the function
module.exports = {
    renderContactPage
};
