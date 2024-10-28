// app_api/controllers/trips.js

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip'); // Assuming you have a Mongoose model named Trip
const { getUser } = require('./authentication'); // Import getUser function for user authentication

// Method to get all trips
const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();
    res.status(200).json(trips);
  } catch (err) {
    res.status(400).json({ message: 'Failed to get trips', error: err });
  }
};

// Method to add a new trip
const addTrip = (req, res) => {
  getUser(req, res, async (req, res, user) => {
    try {
      const newTrip = new Trip({
        ...req.body,
        createdBy: user._id // Associate the trip with the authenticated user
      });
      const savedTrip = await newTrip.save();
      res.status(201).json(savedTrip); // Return the saved trip
    } catch (err) {
      res.status(400).json({ message: 'Failed to add trip', error: err });
    }
  });
};

// Method to update an existing trip
const tripsUpdateTrip = (req, res) => {
  getUser(req, res, async (req, res) => {
    try {
      const trip = await Trip.findOneAndUpdate(
        { code: req.params.tripCode }, // Find the trip by its code
        {
          code: req.body.code,
          name: req.body.name,
          length: req.body.length,
          start: req.body.start,
          resort: req.body.resort,
          perPerson: req.body.perPerson,
          image: req.body.image,
          description: req.body.description
        },
        { new: true } // Return the updated trip
      ).exec();

      if (!trip) {
        return res.status(404).json({ message: 'Trip not found.' }); // Use 404 for not found
      } else {
        return res.status(200).json(trip); // Return the updated trip
      }
    } catch (err) {
      return res.status(500).json({ message: 'An error occurred.', error: err });
    }
  });
};

// Method to delete a trip
const deleteTrip = (req, res) => {
  getUser(req, res, async (req, res) => {
    try {
      const trip = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();

      if (!trip) {
        return res.status(404).json({ message: 'Trip not found.' }); // Use 404 for not found
      } else {
        return res.status(204).json(); // 204 No Content, no need to send a message
      }
    } catch (err) {
      return res.status(500).json({ message: 'An error occurred.', error: err });
    }
  });
};

// Export all methods
module.exports = {
  getTrips,
  addTrip,
  tripsUpdateTrip,
  deleteTrip
};

