const fs = require('fs');
const path = require('path');

let trips;
try {
    trips = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/trips.json'), 'utf8'));
} catch (error) {
    console.error("Error reading trips.json:", error);
}

/* GET travel view */
const travel = (req, res) => {
    console.log(trips); // Check if trips data is loaded correctly
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};
