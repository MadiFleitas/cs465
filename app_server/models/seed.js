// Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from JSON file
const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('C:\\Users\\jjsk8\\Downloads\\travlr\\travlr\\app_server\\data\\trips.json', 'utf8'));

// Delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close the MongoDB connection and exit
seedDB()
    .then(async () => {
        await Mongoose.connection.close();
        process.exit(0); // Exit gracefully
    })
    .catch(err => {
        console.error('Error seeding the database:', err);
        process.exit(1); // Exit with an error code
    });
