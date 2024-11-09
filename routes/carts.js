var express = require('express');
var router = express.Router();
require('../models/connection');
const Cart = require('../models/cart');

// ajoute un voyage au panier (collection cart) et le mettant en statut pas payé
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

// supprime un voyage du panier (collection cart)
router.delete('/', (req, res) => {
  Cart.deleteOne({
    trip: req.body.tripID,
  })
    .then(()=> {
      Cart.find()
      .then(data => {
        res.json(data)
      })
    })
});

// modifie le statut d'un voyage du panier (collection cart) en payé
router.post('/paid/:tripID', (req, res) => {
  Cart.findOne({
    trip: req.params.tripID,
  })
    .then(data => {
      data['isPaid'] = true
      return data.save()
    })
    .then(data => {
    res.json({ data });
    });
});

module.exports = router;