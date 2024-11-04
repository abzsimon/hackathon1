var express = require('express');
var router = express.Router();
require('../models/connection');
const Trip = require('../models/trips');

router.get('/', (req, res) => {
    Trip.find()
    .then(data => {
        res.json({ allTrains: data });
      });
});

module.exports = router;
