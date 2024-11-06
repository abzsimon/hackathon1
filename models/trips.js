const mongoose = require('mongoose');

const TripsSchema = mongoose.Schema({
 departure: String,
 arrival: String,
 date: Date,
 price: Number
});

const Trip = mongoose.model('trips', TripsSchema);

module.exports = Trip;