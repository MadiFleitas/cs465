const mongoose = require('mongoose'); // Import the Mongoose library for MongoDB interactions

// Set the MongoDB URI based on the environment
let dbURI = 'mongodb://localhost:27017/travlr'; // Default URI for the local development database
if (process.env.NODE_ENV === 'production') {
  dbURI = process.env.MONGODB_URI; // Use the production database URI from environment variables
}

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI);

// Event listener for a successful connection
mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

// Event listener for connection errors
mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

// Event listener for a disconnection
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Function to handle graceful shutdown of the database connection
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// Listen for nodemon restarts and gracefully shut down the database connection
process.once('SIGUSR2', () => {
  gracefulShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// Listen for app termination and gracefully shut down the database connection
process.on('SIGINT', () => {
  gracefulShutdown('app termination', () => {
    process.exit(0);
  });
});

// Listen for Heroku app termination and gracefully shut down the database connection
process.on('SIGTERM', () => {
  gracefulShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});

// Import the Mongoose model(s)
require('./travlr'); // Load the 'travlr' model definition

