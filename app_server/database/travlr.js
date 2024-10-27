const mongoose = require('mongoose'); // Import the Mongoose library

// Define the trip schema
const tripSchema = new mongoose.Schema({
    code: { type: String, required: true, index: true }, // Unique code for the trip, indexed for faster queries
    name: { type: String, required: true, index: true }, // Name of the trip, indexed for search optimization
    length: { type: String, required: true }, // Duration of the trip (e.g., "7 days")
    start: { type: Date, required: true }, // Start date of the trip
    resort: { type: String, required: true }, // Name of the resort or location for the trip
    perPerson: { type: String, required: true }, // Cost per person for the trip
    image: { type: String, required: true }, // URL or path to the image representing the trip
    description: { type: String, required: true } // Detailed description of the trip
});

// Export the model based on the trip schema
// The "trips" collection will be created in the database if it doesn't exist
module.exports = mongoose.model("trips", tripSchema);
