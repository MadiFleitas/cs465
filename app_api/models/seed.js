const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Helper function to read JSON files and handle errors
const readJSONFile = (filePath) => {
    try {
        // Ensure the path points to app_server/database
        const fullPath = path.join(__dirname, '../../app_server/database', filePath); // Updated to match your structure
        return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    } catch (error) {
        console.error(`Error reading ${filePath}:`, error.message);
        return null; // Return null if there's an error
    }
};

// Helper function to seed a collection
const seedCollection = async (collectionName, data) => {
    if (!data) {
        console.error(`Skipping seeding for ${collectionName} due to missing data.`);
        return;
    }

    try {
        const model = mongoose.model(collectionName);
        await model.deleteMany(); // Clear the existing collection
        await model.insertMany(data); // Seed new data
        console.log(`Successfully seeded ${collectionName}`);
    } catch (error) {
        console.error(`Error seeding ${collectionName}:`, error.message);
    }
};

// Seed functions
const blogSeed = async () => seedCollection('blog-posts', readJSONFile('blog-posts.json'));
const latestSeed = async () => seedCollection('latest-posts', readJSONFile('latest-posts.json'));
const mealSeed = async () => seedCollection('meal-posts', readJSONFile('meal-posts.json'));
const newsSeed = async () => seedCollection('news-posts', readJSONFile('news-posts.json'));
const pageSeed = async () => seedCollection('pages', readJSONFile('pages.json'));
const roomSeed = async () => seedCollection('rooms', readJSONFile('rooms.json'));
const testimonialSeed = async () => seedCollection('testimonials', readJSONFile('testimonials.json'));
const tripSeed = async () => seedCollection('trips', readJSONFile('trips.json')); // Ensure this points to the correct path
const tipSeed = async () => seedCollection('vacation-tips', readJSONFile('vacation-tips.json'));

// Export the seed functions
module.exports = {
    blogSeed,
    latestSeed,
    mealSeed,
    newsSeed,
    pageSeed,
    roomSeed,
    testimonialSeed,
    tripSeed,
    tipSeed
};
