// app_api/controllers/trips.js

const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// Controller to get a list of all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({});
        res.status(200).json(trips);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving trips", error: err });
    }
};

// Controller to get a single trip by code
const getTripByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({ code: req.params.tripCode });
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json(trip);
    } catch (err) {
        res.status(500).json({ message: "Error retrieving trip", error: err });
    }
};

module.exports = {
    tripsList,
    getTripByCode
};
