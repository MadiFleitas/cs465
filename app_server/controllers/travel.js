// app_server/controllers/travel.js

const tripsEndpoint = 'http://localhost:3000/api/trips';

const travel = async (req, res) => {
    try {
        const response = await fetch(tripsEndpoint);
        const trips = await response.json();

        if (!(trips instanceof Array) || trips.length === 0) {
            return res.render('travel', { title: 'Travlr Getaways', message: 'No trips available' });
        }

        res.render('travel', { title: 'Travlr Getaways', trips });
    } catch (error) {
        console.error('Error fetching trips:', error);
        res.status(500).render('error', { message: 'Error retrieving trips' });
    }
};

module.exports = {
    travel
};
