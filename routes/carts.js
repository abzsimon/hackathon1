var express = require('express');
var router = express.Router();
require('../models/connection');
const Cart = require('../models/cart');
const moment = require('moment');

router.post('/', (req, res) => {
  Cart.create({
    trip: req.body.tripID,
    isPaid: false
  })
    .then(() => {
      return Cart.find().populate('trip');
    })
    .then(data => {
      res.json({ data });
    });
});

router.post('/paid/:id', (req, res) => {
  Cart.findOne({
    trip: req.params.id,
  })
    .then(data => {
      data.isPaid = true
      return data.save()
    })
    .then(() => {
      return Cart.find().populate('trip');
    })
    .then(data => {
      res.json({ data });
    });
});

module.exports = router;