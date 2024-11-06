var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');
const moment = require('moment');

router.post('/', (req, res) => {
  // Date de début de la journée
  const startOfDay = moment(req.body.date).startOf('day').toDate();
  // Date de fin de la journée
  const endOfDay = moment(req.body.date).endOf('day').toDate();
    Trip.find({
      departure : req.body.departure,
      arrival : req.body.arrival,
      date: { $gte: startOfDay, $lte: endOfDay },
    })
    .then(data => {
        res.json({ allTrains: data });
      });
});

module.exports = router;
