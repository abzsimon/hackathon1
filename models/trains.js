const mongoose = require('mongoose');

const trainsSchema = mongoose.Schema({
 departure: String,
 arrival: Number,
 date: Date,
 price: Number
});

const Train = mongoose.model('trains', trainsSchema);

module.exports = Train;