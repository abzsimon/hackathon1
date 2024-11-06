var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');

router.post('/', (req, res) => {
    Trip.find({
      departure : req.body.departure,
      arrival : req.body.arrival,
      date : new Date(`${req.body.date}`)
    })
    .then(data => {
        res.json({ allTrains: data });
      });
});

module.exports = router;
